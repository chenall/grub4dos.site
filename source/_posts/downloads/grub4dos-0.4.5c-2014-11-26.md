title: grub4dos-0.4.5c-2014-11-26.7z
md5: 9c3e6768b1194c0726df31a6731ffb70
size: 264K
date: 2014-11-26 13:43:55.000000000 +0800
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.5c-2014-11-26.7z
categories: 0.4.5c
tags: 0.4.5c
---


### 更新信息(update log):
  * [raw_func changed](https://github.com/chenall/grub4dos/commit/5a508238d9d57d3210278d89351773c166adb552)　@[chenall](https://github.com/chenall)
  * [批处理脚本增强](https://github.com/chenall/grub4dos/commit/c4a9e288f3d4ebcba0db2a9ee8b6f2110fd2410b)　@[chenall](https://github.com/chenall)
    
    1. 批处理中 %~z0 取批处理程序实际大小到'\0'为止.(注:只处理%~z0,%~z1是取整个文件大小).
    2. 批处理新增 %~m0 用法.可以用%~m0获取到当前正在运行的批处理的内存块设备,,(md,XXXX,YYYY)格式.
  * [initrdfs 完善](https://github.com/chenall/grub4dos/commit/3b4305dfd6b56555d188efd22ecb2b9c58f60a75)　@[chenall](https://github.com/chenall)
    
    1. initrdfs支持批处理续尾文件(一个续尾批处理中可以有N个批处理文件+一个DATA文件).0是第一个,1是第二个.
    2. initrdfs 支持blocklist,使用blocklist显示的是该文件对应的md设备位置
       对于initrdfs
       blocklist (rd)/xx.gz 显示 (md,MEM_START,LENGTH)+1
  * [fix fb system bug](https://github.com/chenall/grub4dos/commit/136bfc6aa11abcba028ace71a6c5736bca447833)　@[chenall](https://github.com/chenall)

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/136bfc6aa11abcba028ace71a6c5736bca447833)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/136bfc6aa11abcba028ace71a6c5736bca447833.zip)
