title: grub4dos-utils-hotkey
md5: 50ea910cf7e07815f89c47e41cd62b63
size: 4.0K
date: 2015-04-08 13:52:40.000000000 +0800
commit: ef0a64d6
downlink: http://dl.grub4dos.chenall.net/grub4dos-util-hotkey-20150408.zip
categories: utils
tags: utils
---


## 简介

从2011-12-30版本开始，GRUB4DOS支持热键功能。通过hotkey可以实现强大的菜单热键扩展功能.
<!--more-->
## 用法介绍

  1. 直接下载最新版本hotkey命令放到grldr同磁盘的`\boot\grub`目录下。 
    如果您对GRUB4DOS外部命令运行机制比较熟悉，你可以放到自己喜欢的目录下。
  2. 在你的菜单头部添加一句hotkey命令(根据需求添加可选参数)。
  3. 在菜单的title后面添加hotkey支持的标识符号。
    目前支持以下两种方式:
    * 如果不需要在菜单上显示热键名称  
      title ^**HOTKEY** *菜单标题*
    * 如果需要在菜单上显示热键名称（2012-01-03版开始支持）  
      title [**HOTKEY**] _菜单标题_

  4. 2013-10-14 新增支持热键命令,即可以为某些命令指定一个热键,按下热键时就执行
    * 语法  
      hotkey [**HOTKEY**] "COMMAND"  
      例子:使用了以下命令之后,如果按了F9就会执行reboot  
         hotkey [**F9**] reboot  
      支持同时执行多个命令使用""  
         hotkey [**A**] "echo Is test ;; pause test"  
      可以在命令前置`@`使用隐藏的方式执键不会有任何的屏幕显示.  
         hotkey [**F2**] "@kernel /xxxx ;; initred /xxxx ;; boot"  
      使用不带命令的hotkey删除或禁用该热键  
      比如: 禁用已注册的F9热键  
         hotkey [**F9**]  
注：两种热键方式可以根据需要选择使用。

## 可选参数
  * `-nb` 按键热后只选择对应菜单项，不启动. 
  * `-nc` 除了方向键和回车键之外，如果按下的不是热键则丢弃。 
    用于安全性比较高的场合，比如可以禁用'c','e'等GRUB4DOS默认的菜单热键。防止用户进入GRUB4DOS命令行或修改菜单。 
  * `-A` 使用菜单首字母选择菜单(2015-04-07版)  
    注: 使用该参数会占用菜单的控制按键(像c,b,e,p),需要使用这些功能请按住`Shift`.比如`Shift+C`进入命令行 
注：新的版本可以同时使用以上参数。 

## 用法举例
一个菜单的例子.
```
default 1
timeout 5
##启用热键（如果您有多个菜单，只需要在主菜单启用即可，会自动生效）
#使用-nc参数阻止使用'c','p','e'等功能
hotkey -nc
##按F9重启
hotkey [F9] @reboot

##按F8关机
hotkey [F8] halt

##按F1启动WINPE
hotkey [F1] "map --mem /boot/winpe.iso (0xff) && map --hook && chainloader (0xff)"

##使用按键'A'作为热键。
title [A] Microsoft Windows Xp
pause Boot To Winxp

##按'B'键启动
title [B] Microsoft Windows PE
pause Boot TO WINPE

##按'F2'键启动，但不显示前面的F2
title ^F2 Test for hotkey F2
pause You have press Hotkey F2

##隐藏的菜单项目。
title ^F5
pause Hidden 
```
* * *
### 更新信息(update log):
  * 2015-04-08 完善hotkey -A的选择功能(issue #1),需要最新版本grub4dos支持
  * [Hotkey 更新 2015-04-07](https://github.com/chenall/grubutils/commit/417733b74a75acd9f495721e8e76e9326b8d2ebb)　@[chenall](https://github.com/chenall)

    1. 支持使用菜单首字母选择菜单,使用参数`-A`  
    2. 修正之前版本热键控制标志丢失的BUG.]

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grubutils/blob/master/g4dext/hotkey.c)
