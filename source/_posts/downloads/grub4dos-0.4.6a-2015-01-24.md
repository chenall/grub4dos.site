title: grub4dos-0.4.6a-2015-01-24.7z
md5: b45804855bfcc8613cad0f9585dcf8ab
files:
  grub.exe: d033b2c3f6895fe8e9ab83221d5c5436
  grldr: cb2f9345df026dda17335998d34c2279
  ipxegrldr: 007223e3837a57dc73c4415895369bd1
size: 504K
date: 2015-01-24 11:26:34.000000000 +0800
commit: 03ae4978
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2015-01-24.7z
categories: 0.4.6a
tags: 0.4.6a
---


### 更新信息(update log):
  * [Auto find 7F45](https://github.com/chenall/grub4dos/commit/7532ba61bbb107df0e27b3c5cadb1cece374696d)　@[1dot75cm](https://github.com/1dot75cm)
  * [fix cpio nameline issue](https://github.com/chenall/grub4dos/commit/9ba015d19b1743b97b8355f1fbe4031b60df40b4)　@[chenall](https://github.com/chenall)
  * [允许通过0x830C控制要使用的iso9660文件系统格式,有些时候可能需要.](https://github.com/chenall/grub4dos/commit/03ae497807c598cb1f5a3d9120f714cb58e85f5d)　@[chenall](https://github.com/chenall)
    
    0x830C
    bit 0: reserved
    bit 1: udf
    bit 2: iso9600_Joliet
    bit 3: iso9600_RockRidge
    
    比如禁用Joliet可以把第二位置0 (0xff xor 4)=0xFB
    
    禁用所有ISO扩展格式,只使用标准格式可以设置该处的值为0

### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/03ae497807c598cb1f5a3d9120f714cb58e85f5d)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/03ae497807c598cb1f5a3d9120f714cb58e85f5d.zip)
