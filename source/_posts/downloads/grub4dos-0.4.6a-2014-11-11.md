title: grub4dos-0.4.6a-2014-11-11.7z
md5: 44545fe3c8e77bfddd79706531bf7479
size: 276K
date: 2014-11-11 16:08:35.000000000 +0800
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2014-11-11.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [支持直访问某个内存区域(md,BASE,SIZE),以字节为单位.](https://github.com/chenall/grub4dos/commit/da8b20d89dda6777c4c4686c82061ac390fe326a)　@[chenall](https://github.com/chenall)
    
    比如在内存块0x887700长度0x51200是一个软盘镜像,则可以使用如下方式快速访问
    
    ls (md,0x887700,0x51200)/
    
    如果是硬盘镜像,也可以直接访问硬盘分区.
    ls (md,0x887700,0x51200,0)/
  
### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/da8b20d89dda6777c4c4686c82061ac390fe326a)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/da8b20d89dda6777c4c4686c82061ac390fe326a.zip)
