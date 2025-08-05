---
title: 让docker容器使用代理踩坑记录
date: 2025-08-04
tags:
  - 踩坑
  - nas
---

# 让docker容器使用代理踩坑记录



## 起因

在nas的new-api上添加了gemini渠道，但是测试时连不上，看来是没法翻墙，明明之前装了mihomo

**已有设置：** docker部署了mihomo，网络模式host，端口7890，宿主机ip192.168.1.88。

## 尝试过程：

 **设置环境变量**

```
export http_proxy="http://192.168.1.88:7890"
export https_proxy="http://192.168.1.88:7890"
```

但这个只是临时变量，仅在当前终端会话有效，没用。

**将new-api容器网络模式改为host**

连很长时间还是连不上

**给容器增加环境变量**

增加了`http_proxy="http://192.168.1.88:7890"`和`https_proxy="http://192.168.1.88:7890"`两个环境变量，重启。

这次倒是不用等很久，立即报错
```
错误：do request failed: Post "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent": proxyconnect tcp: dial tcp 192.168.1.88:7890: connect: connection refused
```



## 原因

### host 网络模式失败

当容器使用host网络时，它会直接共享宿主机的网络命名空间（Network Namespace），此时：

- 容器内 localhost= 宿主机的localhost（即 127.0.0.1）
- 容器内直接暴露所有宿主机端口，无需额外端口映射

看起来应该能访问才对，那么为什么还是不行？

原因在于，host 网络模式虽然让容器和宿主机共享了网络接口、IP 和端口，但 **不会自动继承宿主机的环境变量或应用配置**。换句话说，即使网络层面打通了，容器内的应用仍然需要主动配置代理（比如通过 http_proxy 环境变量指定代理地址）。如果没有配置，应用会直接尝试连接外网，完全绕过代理。由于我的需求是翻墙连gemini的api，直接连接显然行不通，所以就失败了。

### 增加环境变量失败

尽管增加了环境变量`http_proxy="http://192.168.1.88:7890"` 和 `https_proxy="http://192.168.1.88:7890`  ，但连接被拒绝。

问题出在代理地址的配置上：

- 宿主机上的 mihomo 的config文件里没有配置 bind-address ，所以代理默认监听 127.0.0.1:7890，也就是说，它只接受来自本机（宿主机）的连接请求。
- 在 host 网络模式下，容器共享宿主机的网络命名空间，所以容器内的 127.0.0.1 其实就是宿主机的 127.0.0.1，可以通过 127.0.0.1:7890 访问代理。
- 但我在环境变量里设置的是 `http://192.168.1.88:7890` 时，这是宿主机的外部 IP 地址。mihomo 默认并没有监听 192.168.1.88:7890，所以当容器内的应用试图连接这个地址时，连接被拒绝（connection refused）。



## 正确配置过程

### host模式

new-api的docker网络模式设置为host，并在docker启动命令或者图形界面设置环境变量，大致如下，根据实际更改

```
docker run -d \
  --network host \
  -e http_proxy="http://127.0.0.1:7890" \
  -e https_proxy="http://127.0.0.1:7890" \
  your-image-name
```



### bridge模式

当然网络也可以继续使用bridge模式，这时需要在 mihomo 的config文件里设置监听`bind-address = 0.0.0.0` ，这个意思是让 mihomo 接受所有接口的连接请求。
但只有这样还不行，new-api通过主机的IP `192.168.1.88` 来访问时，Mihomo 会认为这是一个局域网连接，所以需要还需要再config里设置 `allow-lan: true`，允许局域网使用该代理。

然后重启mihomo容器，这时候我们就可以使用宿主机的ip，即`192.168.1.88`设置代理了。









