title: grub4dos-0.4.6a-2017-05-05.7z
md5: f9273aa91ae3dfb69107c619036c245e
files:
  grub.exe: bc69800ad53ef3f6ae9bdb88d26f41d0
  grldr: 3ad7f294d4ecd60b817d3bcedf2b7015
  ipxegrldr: cee221cc6519c720340ac97144bc07a4
size: 512K
date: 2017-05-05 21:20:17.000000000 +0800
commit: 46c03ce7
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2017-05-05.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [﻿. 改进卷标及UUID读写功能.(issues #138)](https://github.com/chenall/grub4dos/commit/46c03ce7af339eaa198c8a13da9feb35883f014b)　@[yaya]
      vol [--write] [DEVICE] [VOLUME]
    	uuid [--write] [DEVICE] [UUID]
      例：vol  显示所有设备的卷标。包括软盘、硬盘、光盘及映像文件。
          vol DEVICE  显示指定设备的卷标。
          vol VOLUME  搜索指定卷标的设备，设置为根设备。
          vol DEVICE VOLUME  验证指定设备的卷标，相同返回真。
          vol --write DEVICE VOLUME  向指定设备写(修改或创建)卷标。
            注意：只能在FAT、NTFS文件系统修改卷标。只能写单字符卷标(如英文)。

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/46c03ce7af339eaa198c8a13da9feb35883f014b)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/46c03ce7af339eaa198c8a13da9feb35883f014b.zip)
