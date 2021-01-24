title: grub4dos-0.4.6a-2014-11-15.7z
md5: 6808bc7d348f36eeb407c6e9072e57dd
size: 276K
date: 2014-11-15 16:40:46.000000000 +0800
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2014-11-15.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [fix md device access issues](https://github.com/chenall/grub4dos/commit/04962d031006fdced87506de98c78e9bb04e1467)　@[chenall](https://github.com/chenall)
  * [fix map_func bug](https://github.com/chenall/grub4dos/commit/e9e77ec0fc3e0c69c844f5baef52299e57deb43d)　@[chenall](https://github.com/chenall)
  * [fix MinGW build](https://github.com/chenall/grub4dos/commit/f02096866652cbdced83b898b7f2b36172949bd4)　@[Pete Batard](https://github.com/pbatard)
    
    * Use the SIZEOF() macro in ldscript, to find if a section is empty or not defined.
    * Ensure that -fno-asynchronous-unwind-tables is used when checking objcopy behaviour,
      by setting CPPFLAGS in configure.ac. Without this, the objcopy absolute address test
      fails because gcc on MinGW creates a .eh_frame section, that objcopy can't handle.
    * Note: To get a working grub4dos using MinGW, you may have to downgrade gcc to 4.6.2 using:
         mingw-get upgrade gcc=4.6.2-1
         mingw-get install mpc=0.8.1-1
      You should also run autogen.sh or bootstrap.sh before invoking configure.
  
### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/f02096866652cbdced83b898b7f2b36172949bd4)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/f02096866652cbdced83b898b7f2b36172949bd4.zip)
