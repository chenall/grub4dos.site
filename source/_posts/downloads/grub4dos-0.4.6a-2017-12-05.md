title: grub4dos-0.4.6a-2017-12-05.7z
md5: a7f2b60b14d7ebabebe30924a7330994
files:
  grub.exe: 9d46c069fdba223a4dbb973805db3ea4
  grldr: 89fb4e220ed599687aa0ec8206f80a74
  ipxegrldr: ac06a7ead321a545544dd8f9d3dc9e6f
size: 516K
date: 2017-12-05 19:30:39.368438779 +0800
commit: 6dee5eab
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2017-12-05.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [﻿. 增强颜色赋值功能。修正color及echo帮助信息。(issues #161)。](https://github.com/chenall/grub4dos/commit/6dee5eab45053c7a6098bbe50c3117023683f004)　@[yaya]
      1. 按目标分配颜色，顺序不能乱(未选菜单 被选菜单 帮助 标题)。颜色可用占位符n替换。
        例： color black/cyan yellow/cyan red/cyan light-green/cyan    字符颜色/背景颜色，使用符号颜色。
        例： color 0x30 0x3e 0x34 0x3a    高位背景色，低位字符颜色，8位数字。
        例： color 0x888800000000 0x888800ffff00 0x888800880000 0x88880000ff00    64位数字。
        例： color 0x30    其余同NORMAL。在命令行上使用，改变控制台颜色。
        例： color 0x30 0xe n 0xa    背景色取自NORMAL。使用占位符n。
      2. 可以给指定目标赋颜色，NORMAL应当在首位。
        例： color normal=0x888800000000    其余目标颜色同NORMAL。
        例： color normal=0x4444440000ffff helptext=0xc highlight=0xd heading=0xe border=0xa    背景色同NORMAL。
        例： color standard=0xFFFFFF    改变控制台颜色。
      3. 改变字符串的颜色
        例： echo $[0xCD]字符串    改变字符串的颜色(8或64位数字)。C=背景色,D=字符颜色。
        例： echo $[]字符串        字符串使用系统标准颜色。
      4. 具体颜色可在命令行查看。
        例： echo -h-rrggbb
        例： echo -rrggbb

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/6dee5eab45053c7a6098bbe50c3117023683f004)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/6dee5eab45053c7a6098bbe50c3117023683f004.zip)
