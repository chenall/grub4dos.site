title: grub4dos-0.4.6a-2016-02-15.7z
md5: a9f5b22e89b57dcc189aa03c81ebda22
files:
  grub.exe: b6fe56bff136bd3269a2f7dfacc7d7a2
  grldr: 8ef5acfb396cc07ff6b58980fa8c963b
  ipxegrldr: 78104167c7a2c5bb506715a957c50b8f
size: 500K
date: 2016-02-15 11:58:13.000000000 +0800
commit: b7af2b9d
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2016-02-15.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [﻿. 增加图像背景色设置方法。    splashimage --fill-color=[0xrrggbb]](https://github.com/chenall/grub4dos/commit/b7af2b9d7b71865142b42e3e13d2162ecb85f7de)　@[yaya]
    	  作用之一，作为小图像的背景。
    		作用之二，直接作为菜单的背景（即不加载图像背景）。此时只设置字体的前景色即可。
    ' 增加动画菜单。    splashimage --animated=[type]=[delay]=[sequence_num]=[offset_x]=[offset_y]=[name]
    	  类型[type]：bit0-3:  0/1/2=空/一次/循环
    		            bit4-7:  0/1=普通/背景透明
    								一次：序列图像各显示一次，时间独占。可作为启动前导、序幕。
    								循环：序列图像无限循环，时间与菜单共享。可作为菜单里的动画。
    								提醒：请以16进制方式输入。否则易错。
    		延迟[delay]：序列图像之间的延迟。单位是滴答，即1/18.2秒。
    		序列数[sequence_num]：序列图像总数（从1开始计数）。
    		偏移[offset_x]、[offset_y]：图像偏移，单位像素。
    		名称[name]：图像名称，可包含路径。命名规则：xxxxx-01.xxx; xxxxx-02.xxx; ...; xxxxx-'sequence_num'.xxx 。

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/b7af2b9d7b71865142b42e3e13d2162ecb85f7de)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/b7af2b9d7b71865142b42e3e13d2162ecb85f7de.zip)
