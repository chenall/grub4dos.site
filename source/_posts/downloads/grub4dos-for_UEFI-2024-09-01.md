title: grub4dos-for_UEFI-2024-09-01.7z
size: 2.0M
date: 2024-09-01 08:37:50.396349551 +0000
commit: 9115ba95
downlink: http://dl.grub4dos.chenall.net/grub4dos-for_UEFI-2024-09-01.7z
categories: for_UEFI
tags: for_UEFI
md5: d9ac21ad18cd90241fb0b89271868619
files:
  BOOTIA32.EFI: 70e05ca947525d9132fe6c2cb5b9e1d3
  BOOTX64.EFI: 0dad3db85dee4d2378f267531465010b
---

### 更新信息(update log):
  * [2024-09-01 9115ba9@yaya ](https://github.com/chenall/grub4dos/commit/9115ba95c97b58fb060ba15c325aca44432bad9d)     ﻿. 修正函数 map --unmap=
      . 增加参数 map --alloc-only，用于批处理分配自由内存。
        例如：map --alloc-only (md)0+0x1b61b0 (3) //分配0x1b61b0扇区自由扇区
              map --status=3
              set add=%?%  //返回分配的自由内存
      . 加快非压缩文件(img,iso,静态vhd)加载到虚拟机内存的速度。


### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/9115ba95c97b58fb060ba15c325aca44432bad9d)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/9115ba95c97b58fb060ba15c325aca44432bad9d.zip)
