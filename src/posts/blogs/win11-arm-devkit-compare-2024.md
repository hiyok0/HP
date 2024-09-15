---
title: compare-win11-arm-dev-kit
titleJa: ARMなWindows11のDevKitのカタログスペックを比較してみた
overview: とりあえず２つ。デスクトップを中心に
collection: blog
tags: windows, arm, arm64, snapdragon, windows11, windows11pro
date: 2024-05-23
layout: blog.hbs
link: blog
---

こたつ記事だよ

## 結果

|項目|Windows Dev Kit 2023 (Project Volterra)|Snapdragon Dev Kit for Windows|
|:----|:----|:----|
|Processor|SnapdragonFootnote® 8cx Gen 3 compute platform|Snapdragon X Elite (X1E-00-1DE)|
|CPU|CPU Cores: Qualcomm® Kryo™ CPU<br>CPU Architecture: 64-bit|Qualcomm Oryon CPU(12 cores, up to 3.8 GHz, Total cache: 42 MB, Dual Core Boost up to 4.3 GHz)|
|Graphics|Qualcomm® Adreno™ GPU, Snapdragon™ 8cx Gen 3|Qualcomm® Adreno™ GPU(Up to 4.6 TFLOPS)|
|NPU| |Qualcomm® Hexagon™ NPU(Up to 45 TOPS)|
|Memory|32GB LPDDR4x RAM|32 GB LPDDR5x RAM|
|Storage|512GB fast NVMe Storage|512 GB Fast NVMe Storage|
|OS|Windows 11 Pro|Windows11|
|Connections|2x USB-C USB3.2 Gen 2 <br>3x USB-A USB3.2 Gen 2 <br>Mini-Display Port (supporting HBR2) connecting to primary monitor  <br>Ethernet Port (RJ45) <br>Wi-Fi 6 <br>Bluetooth 5.1|3x USB 4 Type-C<br>2x USB 3.2 Type-A<br>1x RJ45 Ethernet<br>1x 3.5 mm audio jack<br>1x HDMI<br>Qualcomm® FastConnect™ 7800 Mobile Connectivity System(Wi-Fi 7, Bluetooth 5.4)|
|Size|8” X 6” X 1.1” (196 mm x 152 mm x 27.6 mm)|8” x 7” x 1.3” (199 mm x 175 mm x 35 mm)|
|Weight|960g|970g|
|Security|sTPM|fTPM|
|Warranty|1-year limited hardware warranty|1-year limited hardware warranty|


## 引用元
- [Buy Windows Dev Kit 2023 Desktop PC for Arm App Developers - Microsoft Store](https://www.microsoft.com/en-us/d/windows-dev-kit-2023/94K0P67W7581?activetab=pivot:techspecstab)
- [prod_brief_qcom_sd_8cx_gen_3_020222.pdf](https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/prod_brief_qcom_sd_8cx_gen_3_020222.pdf)
- [Snapdragon-Dev-Kit-for-Windows-Product-Brief.pdf](https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/Snapdragon-Dev-Kit-for-Windows-Product-Brief.pdf)
