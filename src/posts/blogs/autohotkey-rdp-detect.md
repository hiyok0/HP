---
title: disable-ahk-at-rdp-session
titleJa: RDPセッション時にAutoHotKeyによる置き換えをなくす
overview: ＃HotIfとSysGetを用いた。
collection: blog
tags: autohotkey, windows, windows10, windows10pro, rdp
date: 2024-09-16
layout: blog.hbs
link: blog
---

マウスの一部操作を置き換えているがRDPセッション中にも置き換えられてしまい、
そのたびに止めたり再開したりするのが面倒くさいのでそれを解消したかった。

マウス自体にもカスタマイズソフトは付属するが、マルチユーザ環境で出てしまうエラーに対処できなかったためAutoHotKeyを利用している。
wingetにてインストールした。

## 実際にやってみる
### 現在のコード
```ahk
MButton::LButton
RButton::MButton
XButton1::RButton
```

### 書き換え後のコード
RDPセッション中は`SM_REMOTESESSION`の値が`0`でなくなるっぽいので、これを利用する。
```ahk
#HotIf !SysGet(4096)
MButton::LButton
RButton::MButton
XButton1::RButton
#HotIf
```

`SM_REMOTECONTROL`(`8193`)は関係ないらしく、RDPセッションにおいても`0`だった。

## 参考文献
- [クイックリファレンス｜AutoHotkey v2](https://ahkscript.github.io/ja/docs/v2/)
	- [#HotIf - 構文と使用法｜AutoHotkey v2](https://ahkscript.github.io/ja/docs/v2/lib/_HotIf.htm)
	- [変数と式 - 定義と使用法｜AutoHotkey v2](https://ahkscript.github.io/ja/docs/v2/Variables.htm#unary)
	- [SysGet - 構文と使用法｜AutoHotkey v2](https://ahkscript.github.io/ja/docs/v2/lib/SysGet.htm)
- [GetSystemMetrics function (winuser.h) - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsystemmetrics)
