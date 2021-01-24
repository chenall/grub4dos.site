title: grub4dos-0.4.6a-2014-11-26.7z
md5: 6c6ef6afc8fed8bafff137d049865a9e
size: 276K
date: 2014-11-26 13:44:43.000000000 +0800
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2014-11-26.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [raw_func changed](https://github.com/chenall/grub4dos/commit/350c80649ce8834785f8e145f534f8fdf4c687df)　@[chenall](https://github.com/chenall)
  * [批处理脚本增强](https://github.com/chenall/grub4dos/commit/3906c56fff152b0fb84a26b079d870372ccb7f41)　@[chenall](https://github.com/chenall)
    
    1. 批处理中 %~z0 取批处理程序实际大小到'\0'为止.(注:只处理%~z0,%~z1是取整个文件大小).
    2. 批处理新增 %~m0 用法.可以用%~m0获取到当前正在运行的批处理的内存块设备,,(md,XXXX,YYYY)格式.
  * [initrdfs 完善](https://github.com/chenall/grub4dos/commit/b23ed9ea05e60a635a3978b4f3de65968395acf2)　@[chenall](https://github.com/chenall)
    
    1. initrdfs支持批处理续尾文件(一个续尾批处理中可以有N个批处理文件+一个DATA文件).0是第一个,1是第二个.
    2. initrdfs 支持blocklist,使用blocklist显示的是该文件对应的md设备位置
       对于initrdfs
       blocklist (rd)/xx.gz 显示 (md,MEM_START,LENGTH)+1
  * [fix fb system bug](https://github.com/chenall/grub4dos/commit/9852870378ee7cc47becf88b263caadbb002b271)　@[chenall](https://github.com/chenall)

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/9852870378ee7cc47becf88b263caadbb002b271)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/9852870378ee7cc47becf88b263caadbb002b271.zip)
