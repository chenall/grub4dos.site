title: grub4dos-0.4.6a-2023-09-22.7z
size: 344K
date: 2023-09-22 02:15:46.360435003 +0000
commit: 5b2435fc
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2023-09-22.7z
categories: 0.4.6a
tags: 0.4.6a
md5: d9dff351eb91096079273ae7fc872283
files:
  grldr: 415f16a6c57260be3302cd76ee43f86d
  grub.exe: bc7071f4737e3485c6089311e0f0adce
---

### 更新信息(update log):
  * [2023-09-22 5b2435f@yaya ](https://github.com/chenall/grub4dos/commit/5b2435fc26d9c8ee557b76e2577758ddc033b441)     ﻿. 修正切换分辨率花屏问题。
      . 修正grldr.mbr。 issues #427
      . 增加变量menu_tab_ext，避免重入主菜单时重复加载背景图及字库。
        例如：calc *0x8312&2 > nul || splashimage /boot/grub/lt.jpg
              calc *0x8312&4 > nul || font /boot/grub/unifont.hex.gz


### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/5b2435fc26d9c8ee557b76e2577758ddc033b441)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/5b2435fc26d9c8ee557b76e2577758ddc033b441.zip)
