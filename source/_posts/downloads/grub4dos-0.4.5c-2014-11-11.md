title: grub4dos-0.4.5c-2014-11-11.7z
md5: be2209175b75389c5db76be492598fe1
size: 264K
date: 2014-11-11 16:08:22.000000000 +0800
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.5c-2014-11-11.7z
categories: 0.4.5c
tags: 0.4.5c
---


### 更新信息(update log):
  * [支持直访问某个内存区域(md,BASE,SIZE),以字节为单位.](https://github.com/chenall/grub4dos/commit/35ba4171ab8267c9e1576268906c3da75667f1ba)　@[chenall](https://github.com/chenall)
    
    比如在内存块0x887700长度0x51200是一个软盘镜像,则可以使用如下方式快速访问
    
    ls (md,0x887700,0x51200)/
    
    如果是硬盘镜像,也可以直接访问硬盘分区.
    ls (md,0x887700,0x51200,0)/
  
### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/35ba4171ab8267c9e1576268906c3da75667f1ba)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/35ba4171ab8267c9e1576268906c3da75667f1ba.zip)
