title: grub4dos-for_UEFI-2023-09-22.7z
size: 2.0M
date: 2023-09-22 02:22:17.914074205 +0000
commit: 57427645
downlink: http://dl.grub4dos.chenall.net/grub4dos-for_UEFI-2023-09-22.7z
categories: for_UEFI
tags: for_UEFI
md5: ecbf029ee1b5605413eb3d1ce5bf2010
files:
  BOOTIA32.EFI: 78f2f5e0facc5baaed6c96b32d0ed22f
  BOOTX64.EFI: 2edf59966b27348529401dbaeebc2a96
---

### 更新信息(update log):
  * [2023-09-22 5742764@yaya ](https://github.com/chenall/grub4dos/commit/57427645a415699a16d0930f9a10ba8d9385a951)     ﻿. 修正切换分辨率花屏问题。
      . 增加从入口点启动方法。
      . 增加变量menu_tab_ext，避免重入主菜单时重复加载背景图及字库。
           例如：calc *0x8312&2 > nul || splashimage /boot/grub/lt.jpg
              calc *0x8312&4 > nul || font /boot/grub/unifont.hex.gz


### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/57427645a415699a16d0930f9a10ba8d9385a951)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/57427645a415699a16d0930f9a10ba8d9385a951.zip)
