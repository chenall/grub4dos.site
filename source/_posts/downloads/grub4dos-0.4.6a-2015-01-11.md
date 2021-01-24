title: grub4dos-0.4.6a-2015-01-11.7z
md5: 91660874c465edb9becb596cc01445a5
files:
  grub.exe: 3a62f910b7444add5cb74dfdadf168c4
  grldr: 11c5704e2661adbdadb8ab290ea05e18
  ipxegrldr: 32f06cc54872a48d4c9185523917df45
size: 504K
date: 2015-01-11 11:06:41.000000000 +0800
commit: a19e0726
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2015-01-11.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [New Batch script debugging features](https://github.com/chenall/grub4dos/commit/a19e0726a8ef2e3b77d9a41a5b3c46def7856492)　@[chenall](https://github.com/chenall)
    
    Usage:
    debug PROG ARG
    
    在调试模式下根据提示有以下按键可以使用.
    
    Q->退出程序
    C->进入命令行
    S->跳过当前行
    B->设置断点行,目前只能设置一个数值.
    E->停用调试,运行到程序结束或断点行.
    N->运行到下一个函数的第一行
    
    B->设置断点行.可以使用的格式如下:
    
    [*|+|-]INTEGER
    
    默认情况下这个数值是一个绝对的行号.
    前导`*`     后面的数值是一个内存地址.程序会先读取该处内存的值,执行的时候判断该内存的值是否有变化,有变化就中断.
    前导`+`/`-` 后面的数值是一个相对行号.
    
    e.g.
    
    debug /test.bat 1

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/a19e0726a8ef2e3b77d9a41a5b3c46def7856492)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/a19e0726a8ef2e3b77d9a41a5b3c46def7856492.zip)
