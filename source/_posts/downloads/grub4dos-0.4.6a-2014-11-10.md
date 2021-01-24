title: grub4dos-0.4.6a-2014-11-10.7z
md5: b469ed5510a4228311fc133da71948b0
size: 276K
date: 2014-11-10 11:54:43.000000000 +0800
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2014-11-10.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [disabled menu password prompt cursor(issue #14)](https://github.com/chenall/grub4dos/commit/5fd6a92bf5715066d87866c69b99dac9ff078f3e)　@[chenall](https://github.com/chenall)
  * [supported initrdfs.](https://github.com/chenall/grub4dos/commit/3d23237a5a86f3b11f2b2b041adf2e0b6c6286ad)　@[chenall](https://github.com/chenall)
    
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
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/3d23237a5a86f3b11f2b2b041adf2e0b6c6286ad)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/3d23237a5a86f3b11f2b2b041adf2e0b6c6286ad.zip)
