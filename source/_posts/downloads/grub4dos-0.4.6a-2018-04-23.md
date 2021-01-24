title: grub4dos-0.4.6a-2018-04-23.7z
size: 516K
date: 2018-04-23 15:27:54.179971753 +0800
commit: 90d6606a
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2018-04-23.7z
categories: 0.4.6a
tags: 0.4.6a
md5: 5baba80a4fb1c7b207acecac9e1ef3ca
files:
  grldr: 0645f58e5bd96a236d8fdce664ab9888
  grub.exe: e5cf3504288df92009baaacc9d4a2dff
  ipxegrldr: 41cd28a35d9760f1a498e58bc768c81e
---

### 更新信息(update log):
  * [2018-04-23 90d6606@yaya ](https://github.com/chenall/grub4dos/commit/90d6606a4c1ee9aa57e1f6f9366bf4096f531827)     ﻿. 在菜单项首行增加 !BAT 可按批处理方式书写与执行，使用批处理的功能。比如：goto :label
        书写方式区别在于转义符 % 的使用。
        在原菜单项：
            set a2=%@root:~0,-2%0)
            set srs=%SRS0PE%%srs%
        按批处理方式书写菜单项：
            !BAT
            set a2=%@root:~0,-2%%0)
            set srs=%SRS0PE%%%srs%
        撤销2018-04-08与2018-02-20修改说明。


### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/90d6606a4c1ee9aa57e1f6f9366bf4096f531827)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/90d6606a4c1ee9aa57e1f6f9366bf4096f531827.zip)
