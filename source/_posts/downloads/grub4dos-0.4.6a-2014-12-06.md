title: grub4dos-0.4.6a-2014-12-06.7z
md5: 728bbbd6b45e365bf0f1c8d18aaa2594
files:
  grub.exe: 768bc88306ea7bbb98f32aaee47d1341
  grldr: 10dcd5b5990a50b19b4240358c437105
  ipxegrldr: 2fbd018d3a09f6426e59679412586614
size: 500K
date: 2014-12-06 22:13:28.000000000 +0800
commit: d3ce7118
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2014-12-06.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [change menu.lst and fsys_pxe.c(pxe basedir)](https://github.com/chenall/grub4dos/commit/a121e72d9673d7d1b261dbb1fb4631927b2ca437)　@[chenall](https://github.com/chenall)
  * [ipxe 功能完善优化](https://github.com/chenall/grub4dos/commit/d3ce71187197cd906a672c74db2ccc44cfb1895b)　@[chenall](https://github.com/chenall)
    
    现在支持根据pxe basedir自动切换到iPXE,
    另外可以通过在ipxe启动grldr之前修改boot filename实现启动时自动从网络上加载文件
    
    例子(在ipxe命令行下):
    set net0/filename http://b.chenall.net/grldr
    imgload grldr
    boot grldr
    
    启动之后pxe basedir是http://b.chenall.net/,自动加载http://b.chenall.net/menu.lst作为默认菜单文件

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/d3ce71187197cd906a672c74db2ccc44cfb1895b)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/d3ce71187197cd906a672c74db2ccc44cfb1895b.zip)
