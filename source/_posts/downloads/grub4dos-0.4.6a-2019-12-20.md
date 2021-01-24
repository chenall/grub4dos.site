title: grub4dos-0.4.6a-2019-12-20.7z
size: 524K
date: 2019-12-20 09:40:55.339297999 +0800
commit: a009d1a3
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2019-12-20.7z
categories: 0.4.6a
tags: 0.4.6a
md5: ff3dcc378566c03c45f381040727d2c3
files:
  grldr: b0a14610817a6ba75033931971d58c22
  grub.exe: c6e4ce2447fd138c3ac32af59b994f77
  ipxegrldr: b52b3af2797f363f507a46aa3de9eb4d
---

### 更新信息(update log):
  * [2019-12-20 a009d1a@yaya ](https://github.com/chenall/grub4dos/commit/a009d1a3f069c8030d893a211f869909e485dd97)     ﻿. 改进 setmenu 字符串功能，增加索引和菜单区域内居中。字符串可以使用背景色。(issues #222)
          setmenu --string[=iINDEX]=[X|s|m]=[-]Y=COLOR="STRING"
        iINDEX 范围是 i0-i15. 如果没有 =iINDEX 索引自动递增。
        如果水平位置是 s 则字符串在全屏居中; 如果水平位置是 m 则字符串在菜单区域内居中。
      
      . 动态更新日期时间增加标题，可显示中文。
          例如：“date&time日期时间：  =MMM.dd.yyyy  HH:mm:ss”


### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/a009d1a3f069c8030d893a211f869909e485dd97)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/a009d1a3f069c8030d893a211f869909e485dd97.zip)
