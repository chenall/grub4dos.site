title: grub4dos-0.4.6a-2019-07-15.7z
size: 520K
date: 2019-07-15 11:02:19.733631781 +0800
commit: 73cd117d
downlink: http://dl.grub4dos.chenall.net/grub4dos-0.4.6a-2019-07-15.7z
categories: 0.4.6a
tags: 0.4.6a
md5: 0465b978ac422690b2c113d2e1475437
files:
  grldr: 4bfed48e65f1af9ac16165451420f5ce
  grub.exe: a76eedfe4c8cc0a0471db55ed84f9fe2
  ipxegrldr: 5d1e811a6efca1e3c8830ab2565ab5e8
---

### 更新信息(update log):
  * [2019-07-15 73cd117@yaya ](https://github.com/chenall/grub4dos/commit/73cd117dedc219815faa9f83b4904da4f6f00c86)     ﻿. 调整 .travis.yml。

  * [2019-07-14 5f57a49@yaya ](https://github.com/chenall/grub4dos/commit/5f57a49051af6fd6082a2035555aea9ae6d56214)     ﻿. 支持位于 2TB 后的分区。改进 vol 函数。

  * [2019-07-14 2991553@chenall ](https://github.com/chenall/grub4dos/commit/2991553281df7e836dbb1c2f795543f2bf28aae9)     Update .travis.yml
      
      编译文件上传到github.com
  * [2019-07-13 e38be2f@yaya ](https://github.com/chenall/grub4dos/commit/e38be2f6f947906904babe24c10336d8bb7ce594)     ﻿. 添加/更改发布。

  * [2019-06-17 7c4ba84@yaya ](https://github.com/chenall/grub4dos/commit/7c4ba84e5fa151473aabae4b129cd82f2176b9e5)     ﻿. 修正错误。

  * [2019-06-13 e290938@yaya ](https://github.com/chenall/grub4dos/commit/e290938e2694ff3abeecfca9a298ade8e9a7976f)     ﻿. 修正 color 函数。增加 --64bit 参数，用于指定 <=0xff 的值为 64 位颜色。(issues #196)
      . 支持 15 位每像素图形模式(即5:5:5模式)。

  * [2019-06-09 c561cc9@yaya ](https://github.com/chenall/grub4dos/commit/c561cc961b32e015bade8ad769e4ebdc418a792e)     ﻿. 修正(issues #195),(issues #196)

  * [2019-05-12 e8224a2@yaya ](https://github.com/chenall/grub4dos/commit/e8224a2d20760139ffaeafa07838e2c3c54de783)     ﻿. 修正 setkey 命令及帮助(由 steve 提供)。(issues #193)
      . 增加 echo -k 参数，显示键盘代码。

  * [2019-05-07 11a3079@yaya ](https://github.com/chenall/grub4dos/commit/11a3079d7ea324ce47e8e290e68163cfaddd6419)     ﻿. 改进 setkey 命令及帮助，完全支持匈牙利键盘(由 steve 提供)。(issues #193)
      . 改进 displaymem 及 bootlace 命令。

  * [2019-03-25 1069d58@yaya ](https://github.com/chenall/grub4dos/commit/1069d58eb54d798c8bf58ee9a6565fac97e74e3d)     ﻿. 修正动态 VHD 不再能够支持的问题。
      . 条件菜单项目(iftitle )支持图形菜单。
      . 图形菜单改进：支持背景高亮、支持图文混排。

  * [2019-02-22 fe3c857@yaya ](https://github.com/chenall/grub4dos/commit/fe3c857d329903a9e2f4dfa4c562be0653ae1a8c)     ﻿. Correction bug (issues #190)

  * [2018-12-23 d37a26a@yaya ](https://github.com/chenall/grub4dos/commit/d37a26a23372389c2cf9228473a08de949eead5e)     ﻿. 修正读磁盘越界不报警。

  * [2018-09-19 befecee@yaya ](https://github.com/chenall/grub4dos/commit/befeceefb29e86a2e1608a184bec42cbc33408e8)     ﻿. 替换title字符串变量中的换行符。(issues #182)

  * [2018-08-21 f4759eb@yaya ](https://github.com/chenall/grub4dos/commit/f4759eb298886b00ff487c4c3a50fe08bb2d424c)     ﻿. 增加 setmenu --auto-num-all-on 参数。(issues #181)
        给所有标题编号。(--auto-num-on 参数仅给引导标题编号)
        注释：0x8274 00/01/02=禁止自动编号/仅给引导标题编号/给所有标题编号
              0x8275 标题编号与标题内容之间的字符。如：0x20=' '   0x2d='-'
              0x8276 返回当前标题编号。(按所有标题计)

  * [2018-07-01 b519902@yaya ](https://github.com/chenall/grub4dos/commit/b519902005d1b2cdb5ea2a1ac00cf2e96d0f36a9)     ﻿. 增加 setmenu --triangle-on --triangle-off 参数，打开/关闭菜单三角形指示器。默认打开。(issues #179)
        撤销当菜单边框线宽为零时，不显示三角形及菜单项目自动编号。

  * [2018-06-29 3b3bf0d@yaya ](https://github.com/chenall/grub4dos/commit/3b3bf0dcf1ee0a78606723af823ea9282022bc42)     ﻿. 增加 setmenu --middle-align 参数。菜单项目及菜单项目帮助居中。(issues #179) (issues #180)
        当菜单边框线宽为零时，不显示三角形及菜单项目自动编号。
        修正光标尺寸，随点阵字符尺寸而变。

  * [2018-06-18 f4c9146@yaya ](https://github.com/chenall/grub4dos/commit/f4c9146ebb77884f788558a0537b57292994bea4)     ﻿. 修正错误。(issues #178)

  * [2018-06-12 1ccae21@yaya ](https://github.com/chenall/grub4dos/commit/1ccae21e7948be2d157a3fd380bc5645653e6599)     ﻿. 增加 beep 函数，播放音乐。(issues #175)(issues #176)
        beep [--start|--mid|--end] [--play=N] [--nowait] 频率 持续时间 ...
        频率: Hz    持续时间: ms     最大 126 音符。
        N:播放次数 0-255。0是停止播放，255是连续播放(按任何键停止播放)。
        当音节很多时，可以用不同的行书写。使用 [--start|--mid|--end] 指定。
        例1: 警报
        beep --play=10 400 20 500 20 600 20 700 20 800 20 900 20 1000 20 1100 20 1200 20 1300 20 1400 20 1500 20 1600 20
        例2: 茉莉花
        beep --start 330 440 330 220 392 220 440 220 522 220 522 220 440 220 392 440 393 220 440 220 392 880
        beep --mid 330 440 330 220 392 220 440 220 522 220 522 220 440 220 392 440 392 220 440 220 392 880
        beep --mid 392 440 392 440 392 440 330 220 392 220 440 440 440 440 392 880
        beep --mid 330 440 293 220 330 220 392 440 330 220 293 220 261 440 261 220 293 220 261 880
        beep --mid 330 220 293 220 261 220 330 220 293 660 330 220 392 440 440 220 522 220 392 880
        beep --mid 293 440 330 220 392 220 293 220 330 220 261 220 220 220 196 880 220 440 261 440
        beep --end --play=255 293 660 330 220 261 220 293 220 261 220 220 220 196 1320
      
        改善图像透明背景的算法。
        修改 grub_memmove 函数，提高运算速度。
        修正 map 函数中碎片映射的错误。

  * [2018-04-23 90d6606@yaya ](https://github.com/chenall/grub4dos/commit/90d6606a4c1ee9aa57e1f6f9366bf4096f531827)     ﻿. 在菜单项首行增加 !BAT 可按批处理方式书写与执行，使用批处理的功能。比如：goto :label
        书写方式区别在于转义符 % 的使用。
        在原菜单项：
            set a2=%@root:~0,-2%0)
            set srs=%SRS0PE%%srs%
        按批处理方式书写菜单项：
            !BAT
            set a2=%@root:~0,-2%%0)
            set srs=%SRS0PE%%%srs%
        撤销2018-04-08与2018-02-20修改说明。

  * [2018-04-11 08c011f@yaya ](https://github.com/chenall/grub4dos/commit/08c011fa67192276ece56b3e7f79e85a7b063508)     ﻿. 修正 bug.

  * [2018-04-08 f5b17e3@yaya ](https://github.com/chenall/grub4dos/commit/f5b17e3307cdb5ca28b82c989d50e956adec5860)     ﻿. 在批处理脚本中，变量可以使用单'%'。(issues #173)
        如：partnew %@root:~0,-2%0) 0x00 (hd0,3)+1

  * [2018-04-03 39b64a9@yaya ](https://github.com/chenall/grub4dos/commit/39b64a909df6f688c3a388d701aa3f26f7963e1b)     ﻿. 自动编译改成使用gcc-4.6版本。(issues #168)

  * [2018-03-26 6da5c95@yaya ](https://github.com/chenall/grub4dos/commit/6da5c950835f86a488c9a90af8e2a88cb83d63bc)     ﻿. 函数 map 增加 --in-situ=FLAGS_AND_ID 参数。(issues #172)
        低字节是 FLAGS，0/1=清除分区表后3项活动分区标志/清空分区表最后3项，默认0。
        高字节是分区 ID，使用 0xnnnn 指定。

  * [2018-03-24 76691dc@yaya ](https://github.com/chenall/grub4dos/commit/76691dcf0d0fd11ceb66ad7d22cc8c723b86553d)     ﻿. 修正部分函数的帮助信息。(issues #171)
        函数read增加"--8"参数，一次读8字节。

  * [2018-03-15 d744d9a@yaya ](https://github.com/chenall/grub4dos/commit/d744d9a07773019e44644543f430c38edc9abeae)     ﻿.   增强 setmenu --string 函数功能
        --string=[X]=[-]Y=COLOR="STRING"
        没有X, 表示水平居中.
        -Y表示从菜单底部计数.  -0就是最后一行.

  * [2018-03-03 98ea5a3@chenall ](https://github.com/chenall/grub4dos/commit/98ea5a358e5c2af99aba4255cfe2b518b3926aa9)     编译环境 修改为 gcc-7
  * [2018-03-02 1c94e3b@yaya ](https://github.com/chenall/grub4dos/commit/1c94e3bb4c5b953724dd7495442c90be84ad68f2)     ﻿. 修正bug。(issues #168)

  * [2018-02-27 23976bd@chenall ](https://github.com/chenall/grub4dos/commit/23976bde476eced9e8c62af4c457f8dd3181727e)     自动编译改成使用gcc-4.6版本
  * [2018-02-20 74f6c86@yaya ](https://github.com/chenall/grub4dos/commit/74f6c862c73a4d21e61832174f4ab2f1d7f8b12a)     ﻿. 增强菜单项目脚本处理。(issues #165)
        比如可使用  goto :label

  * [2017-12-23 05379e7@yaya ](https://github.com/chenall/grub4dos/commit/05379e7b66b71e5665bc5bedda75a58ca74c485a)     ﻿. 修正 color 及 setmenu 函数。(issues #163, #164)

  * [2017-12-20 d275720@yaya ](https://github.com/chenall/grub4dos/commit/d27572004dc1bf0342427955b91c267e7dd70139)     ﻿. 修正 color 及 setmenu 函数。(issues #163)

  * [2017-12-20 bc71fa1@chenall ](https://github.com/chenall/grub4dos/commit/bc71fa16de9d2f24ad7f25291292f6460d8bd36a)     添加利用travis-ci.org自动编译发布脚本

  * [2017-12-17 331c5a1@yaya ](https://github.com/chenall/grub4dos/commit/331c5a122a5d9a340fec99b540dd56f672728bb9)     ﻿. 修正非 vbe 模式加载图像死机。

  * [2017-12-17 6fabc09@yaya ](https://github.com/chenall/grub4dos/commit/6fabc09c82919b227f8820d4690c28a6ead227e8)     ﻿. 撤销 cdrom 驱动。

  * [2017-12-11 fba8f4a@chenall ](https://github.com/chenall/grub4dos/commit/fba8f4abde0ebc912ea067274dd5cbc300144fcd)     add .travis.yml
      
      https://travis-ci.org/
  * [2017-12-05 6dee5ea@yaya ](https://github.com/chenall/grub4dos/commit/6dee5eab45053c7a6098bbe50c3117023683f004)     ﻿. 增强颜色赋值功能。修正color及echo帮助信息。(issues #161)。
        1. 按目标分配颜色，顺序不能乱(未选菜单 被选菜单 帮助 标题)。颜色可用占位符n替换。
          例： color black/cyan yellow/cyan red/cyan light-green/cyan    字符颜色/背景颜色，使用符号颜色。
          例： color 0x30 0x3e 0x34 0x3a    高位背景色，低位字符颜色，8位数字。
          例： color 0x888800000000 0x888800ffff00 0x888800880000 0x88880000ff00    64位数字。
          例： color 0x30    其余同NORMAL。在命令行上使用，改变控制台颜色。
          例： color 0x30 0xe n 0xa    背景色取自NORMAL。使用占位符n。
        2. 可以给指定目标赋颜色，NORMAL应当在首位。
          例： color normal=0x888800000000    其余目标颜色同NORMAL。
          例： color normal=0x4444440000ffff helptext=0xc highlight=0xd heading=0xe border=0xa    背景色同NORMAL。
          例： color standard=0xFFFFFF    改变控制台颜色。
        3. 改变字符串的颜色
          例： echo $[0xCD]字符串    改变字符串的颜色(8或64位数字)。C=背景色,D=字符颜色。
          例： echo $[]字符串        字符串使用系统标准颜色。
        4. 具体颜色可在命令行查看。
          例： echo -h-rrggbb
          例： echo -rrggbb

  * [2017-11-28 2b6d243@yaya ](https://github.com/chenall/grub4dos/commit/2b6d24389bcc1138b68ae18437a1f4ff78f6da43)     ﻿. 修正 setmenu 函数，并且增加下列参数：(issues #159)。
        1. --draw-box=[索引]=[起始x]=[起始y]=[水平长度]=[垂直长度]=[线宽]=[颜色]
      	  划线或画框。其中：索引=1-16；颜色=24色；线宽=1-255；尺寸单位是像素。
      	  --draw-box=[索引]  清除指定的线或框。
      	  --draw-box=        清除所有的线或框。
      	2. --string=  清除所有的字符串。

  * [2017-11-19 b912f30@yaya ](https://github.com/chenall/grub4dos/commit/b912f30249c9e811c792304b48e65612a5dd3b4f)     ﻿. 修正菜单项目显示(issues #159)。

  * [2017-10-23 7245b66@yaya ](https://github.com/chenall/grub4dos/commit/7245b66f11ad48033e670a7e7a0d08b0338b84af)     ﻿. 屏蔽init_bios_info打印信息(启动时按Insert键可显示)。

  * [2017-10-14 3fe9735@yaya ](https://github.com/chenall/grub4dos/commit/3fe9735342e6133dee54be199a11841beda4a79e)     ﻿. 修正udf引导代码。
        可启动U盘制作：把 grldr.pbr 的 udf 引导代码(0x1400起始)复制到U盘启动分区，
                       把 MBR 中的分区起始扇区(4字节)复制到启动分区的偏移0xc。

  * [2017-10-12 106901a@yaya ](https://github.com/chenall/grub4dos/commit/106901ae6b2766ac3d5d989c0de009658bbdae76)     ﻿. 修正bug。(issues #157)

  * [2017-10-05 6a5eefa@yaya ](https://github.com/chenall/grub4dos/commit/6a5eefacd2d605b854e256587325630e41692e64)     ﻿. 修正 --in-situ 参数。因嵌套会丢失插槽的 form_Smax，to_Smax。
        增加 --swap-drive=DRIVE1=DRIVE2 参数，用于交换 FROM_DRIVE。

  * [2017-10-04 b748082@yaya ](https://github.com/chenall/grub4dos/commit/b748082ce92aba4fa55f8073fdd8600501e6d7c8)     ﻿. 支持U盘使用udf文件系统。
        可启动U盘制作：把grldr_hd_udf.bin复制到U盘逻辑0扇区。

  * [2017-08-30 6f31294@yaya ](https://github.com/chenall/grub4dos/commit/6f3129425378f855ca029e78c6d679c014db5e96)     ﻿. displaymem函数增加参数“--s”，以512字节扇区的单位显示可用RAM。(issues #154)

  * [2017-08-28 a7d772b@yaya ](https://github.com/chenall/grub4dos/commit/a7d772bcd16e3f398757a537417a3b3c2b99018f)     ﻿. 修正 Windows XP 反馈 0K 错误。(issues #154)
        修正 int15/ax=e820 等函数。

  * [2017-06-25 172f98f@yaya ](https://github.com/chenall/grub4dos/commit/172f98fcbf7e0c0139e44d015c66099b0c655854)     ﻿. 修正 USB2.0 驱动。(issues #152)

  * [2017-06-21 fb49438@yaya ](https://github.com/chenall/grub4dos/commit/fb49438fa7cb5d24082f703cbbe794e49b99ba30)     ﻿. cat --hex 函数的文本字符，仅显示0x20-0x7e字符。(issues #150)

  * [2017-06-18 ed54c03@yaya ](https://github.com/chenall/grub4dos/commit/ed54c034f0efb1eb24b111705799a9421f8d3b06)     ﻿. 修正 cat --hex 丢失显示字符问题。(issues #150)

  * [2017-06-17 fd6384e@yaya ](https://github.com/chenall/grub4dos/commit/fd6384e107022c2db0dd05ec6aeaaa1e32d0505f)     ﻿. 修正 usb2.0 驱动。

  * [2017-06-17 257e996@yaya ](https://github.com/chenall/grub4dos/commit/257e996dbbd39ddbf254afb4e2dfe4942bb4d0e8)     ﻿. 修正 usb2.0 驱动。


### 对应源码(sources):
  [查看源码(Browse source)](https://github.com/chenall/grub4dos/tree/73cd117dedc219815faa9f83b4904da4f6f00c86)

  [下载源码(Download ZIP)](https://github.com/chenall/grub4dos/archive/73cd117dedc219815faa9f83b4904da4f6f00c86.zip)
