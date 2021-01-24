title: grub4dos-0.4.5c-2014-11-10.7z
md5: ff96c0e856c9f442e3a522947b4d33e2
size: 264K
date: 2014-11-10 11:25:53.000000000 +0800
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.5c-2014-11-10.7z
categories: 0.4.5c
tags: 0.4.5c
---


### 更新信息(update log):
  * [disabled menu password prompt cursor(issue #14)](https://github.com/chenall/grub4dos/commit/fa67e4d40b81bb55e1b9988fa4ab1814212ec801)　@[chenall](https://github.com/chenall)
  * [supported initrdfs.](https://github.com/chenall/grub4dos/commit/4f6a7e4a0db786f669e7fa38938a59051495d4f4)　@[chenall](https://github.com/chenall)
    
    1. 支持读写initrdfs(cpio new format)内部文件.
    
       例子,访问initrd.gz文件里面的文件内容(可以查看修改哦)
       也可以利用这个来动态修改initrd的启动脚本实现一些特殊功能,当然了目前还是不能改变文件大小.
       map /inirtd.gz (rd)
       ls (rd)/
    
    2. initrd 多个文件时可以生成cpio new格式.
       initrd @name=FILE @name1=FILE1
    
       如下例子可以通过[WIMBOOT](http://ipxe.org/wimboot)启动WIM文件
    
       kernel /wimboot
       initrd @bcd=/boot/bcd @boot.sdi=/boot/boot.sdi @bootmgr=/boot/bootmgr @boot.wim=/boot/boot.wim
  
### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/4f6a7e4a0db786f669e7fa38938a59051495d4f4)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/4f6a7e4a0db786f669e7fa38938a59051495d4f4.zip)
