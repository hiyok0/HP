---
title: install-pipewire-for-mpv
titleJa: mpvでエラー出たのでPipewire入れてみた
overview: 意味があったのかはわからない
collection: blog
tags: mpv, pipewire, dbus, alsa, pulseaudio
date: 2024-01-10
layout: blog.hbs
link: blog
---

## 次のようなエラーが起きた
<pre><code class="language-">$ mpv movie.mp4 
 (+) Video --vid=1 (*) (h264 1280x720 24.000fps)
 (+) Audio --aid=1 --alang=eng (*) (opus 2ch 48000Hz)
<yellow>[W][00580.947914] pw.conf      | [          conf.c: 1016 try_load_conf()] can't load config client-rt.conf: No such file or directory</yellow>
<red>[E][00580.948482] pw.conf      | [          conf.c: 1045 pw_conf_load_conf_for_context()] can't load config client-rt.conf: No such file or directory</red>
AO: [pulse] 48000Hz stereo 2ch float
VO: [gpu] 1280x720 yuv420p
</code></pre>

## pipewireをインストールしたら直った
```bash
sudo apt-get install pipewire
```
~~いい加減apt-getじゃなくてaptにしろという正論パンチが来そう~~

<pre><code class="language-">$ mpv movie.mp4 
 (+) Video --vid=1 (*) (h264 1280x720 24.000fps)
 (+) Audio --aid=1 --alang=eng (*) (opus 2ch 48000Hz)
AO: [pulse] 48000Hz stereo 2ch float
VO: [gpu] 1280x720 yuv420p
</code></pre>

## 参考文献
-  [#1038627 - general: Various applications log PipeWire-related errors on a Bookworm system using PulseAudio. - Debian Bug report logs](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1038627)
