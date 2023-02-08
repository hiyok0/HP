---
title: attribute-img-height-width
titleJa: img要素の縦横を指定するように
overview: 画像サイズを指定するためにhelperを作りました。
collection: blog
tags: metalsmith, node, helper, handlebars
date: 2022-12-01
layout: blog.hbs
link: blog
---

## tl;dr
　こんなhelperを作り、導入しました。  
<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fhiyok0%2FHP%2Fblob%2Ftest%2Fsrc%2Flayouts%2Fimg.js&style=an-old-hope&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&fetchFromJsDelivr=on"></script>

　こんな感じで指定します。第３引数でloadingを指定可能(省略可能)で、デフォルトがlazyになっています。
```
｛{img "/path/to/image.png" "alt text"}｝
```

## きっかけ
　今まではmarkdownでそのまま指定していたのですが、そうするとheightやwidth属性が指定されず、読み込み時に画像の部分で位置がずれてしまっていました。画像サイズを指定するようなプラグインもなさそうだったため、handlebarsのヘルパーをつくり、ついでに`loading="lazy"`も指定するようにしました。

## 作ったときの気付き
　handlebarsを取り込んで、`.SafeString()`しないと`<img>`等がHTMLタグとして機能せず、そのままテキストで表示されてしまうこと。

## 作ったヘルパーについて
　好きに使っていいです。ただ、そんなめんどくさいことはしてないので自分のサイトにあったものを作成したほうが幸せになれるかも。

　このブログの過去記事も、今までのmarkdownでの指定から順次このhelperを使ったものに書き換えていきます。
