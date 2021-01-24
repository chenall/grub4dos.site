title: grub4dos-0.4.6a-2017-03-26.7z
md5: 95c765ed551a70c07a1d76f98b594451
files:
  grub.exe: 8ed636867f422dfc7d832a90d81327e7
  grldr: 7b191495edeef497d141d2aae9dfbcf6
  ipxegrldr: 11bd696bf25bcddf8d0cd53ae9ba5aed
size: 508K
date: 2017-03-26 08:55:28.000000000 +0800
commit: f199cfb7
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2017-03-26.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [﻿. 增加卷标读、写功能。目前只能写 BPB 卷标。语法及功能参照 UUID。](https://github.com/chenall/grub4dos/commit/f199cfb7ffb21519cd2eac6fd347e5ae5e63fa06)　@[yaya]
      例：读	vol  或者  vol (hd0,3)
          写  vol --write-vol-bpb (hd0,3) "NO NAME"
      增加 UUID 写功能。
        例：uuid --write-uuid (hd0,3) 1234-5678

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/f199cfb7ffb21519cd2eac6fd347e5ae5e63fa06)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/f199cfb7ffb21519cd2eac6fd347e5ae5e63fa06.zip)
