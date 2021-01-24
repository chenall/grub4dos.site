title: grub4dos-0.4.5c-2014-11-15.7z
md5: 17f4ea37a503697c6bbddd2532ba9da3
size: 264K
date: 2014-11-15 16:40:13.000000000 +0800
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.5c-2014-11-15.7z
categories: 0.4.5c
tags: 0.4.5c
---


### 更新信息(update log):
  * [fix md device access issues](https://github.com/chenall/grub4dos/commit/20ff17fc644965abbd9287bcd8a95e395bfaf22c)　@[chenall](https://github.com/chenall)
  * [fix map_func bug](https://github.com/chenall/grub4dos/commit/2b9c56a539b60beaa079fd8eca46131a1cd9cd71)　@[chenall](https://github.com/chenall)
  * [fix MinGW build](https://github.com/chenall/grub4dos/commit/8549aaef6ba1abb047b47df4258e78b8fa9e6cce)　@[Pete Batard](https://github.com/pbatard)
    
    * Use the SIZEOF() macro in ldscript, to find if a section is empty or not defined.
    * Ensure that -fno-asynchronous-unwind-tables is used when checking objcopy behaviour,
      by setting CPPFLAGS in configure.ac. Without this, the objcopy absolute address test
      fails because gcc on MinGW creates a .eh_frame section, that objcopy can't handle.
    * Note: To get a working grub4dos using MinGW, you may have to downgrade gcc to 4.6.2 using:
         mingw-get upgrade gcc=4.6.2-1
         mingw-get install mpc=0.8.1-1
      You should also run autogen.sh or bootstrap.sh before invoking configure.
  
### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/8549aaef6ba1abb047b47df4258e78b8fa9e6cce)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/8549aaef6ba1abb047b47df4258e78b8fa9e6cce.zip)
