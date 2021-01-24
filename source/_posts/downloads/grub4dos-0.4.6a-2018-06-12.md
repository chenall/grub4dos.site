title: grub4dos-0.4.6a-2018-06-12.7z
size: 516K
date: 2018-06-12 09:07:22.445800759 +0800
commit: 1ccae21e
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2018-06-12.7z
categories: 0.4.6a
tags: 0.4.6a
md5: deb399d5ff61b09201a18d0d3952dc65
files:
  grldr: b1aaef72c2992d57263f8b543a201770
  grub.exe: 8a9496a811a565c2f62cb0f0f309ad1d
  ipxegrldr: 408c2445b2d2b77dfb253c1d507e1738
---

### 更新信息(update log):
  * [2018-06-12 1ccae21@yaya ](https://github.com/chenall/grub4dos/commit/1ccae21e7948be2d157a3fd380bc5645653e6599)     ﻿. 增加 beep 函数，播放音乐。(issues #175)(issues #176)
        beep [--start|--mid|--end] [--play=N] [--nowait] 频率 持续时间 ...
        频率: Hz    持续时间: ms     最大 126 音符。
        N:播放次数 0-255。0是停止播放，255是连续播放(按任何键停止播放)。
        当音节很多时，可以用不同的行书写。使用 [--start|--mid|--end] 指定。
        例1: 警报
        beep --play=10 400 20 500 20 600 20 700 20 800 20 900 20 1000 20 1100 20 1200 20 1300 20 1400 20 1500 20 1600 20
        例2: 茉莉花
        beep --start 330 440 330 220 392 220 440 220 522 220 522 220 440 220 392 440 393 220 440 220 392 880
        beep --mid 330 440 330 220 392 220 440 220 522 220 522 220 440 220 392 440 392 220 440 220 392 880
        beep --mid 392 440 392 440 392 440 330 220 392 220 440 440 440 440 392 880
        beep --mid 330 440 293 220 330 220 392 440 330 220 293 220 261 440 261 220 293 220 261 880
        beep --mid 330 220 293 220 261 220 330 220 293 660 330 220 392 440 440 220 522 220 392 880
        beep --mid 293 440 330 220 392 220 293 220 330 220 261 220 220 220 196 880 220 440 261 440
        beep --end --play=255 293 660 330 220 261 220 293 220 261 220 220 220 196 1320
      
        改善图像透明背景的算法。
        修改 grub_memmove 函数，提高运算速度。
        修正 map 函数中碎片映射的错误。


### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/1ccae21e7948be2d157a3fd380bc5645653e6599)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/1ccae21e7948be2d157a3fd380bc5645653e6599.zip)
