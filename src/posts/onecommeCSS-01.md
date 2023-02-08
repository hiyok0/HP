---
title: onecommeCSS-01
titleJa: わんコメのCSSメモ。
overview: わんコメのテンプレートに適用してたCSSのメモ
collection: blog
tags: blog,onecomme,html,css,obs
date: 2022-09-12
layout: blog.hbs
link: blog
draft: true
---
## CSS
そのうちわんコメフォーラムにも投げる下書きも兼ねてる。

### ktx-quick-starter
#### 背景の透明化等
* コメント部分の背景を透明にして、文字の後ろだけ白背景。
* コメント順を（標準と）反対に

{{img "/assets/onecommeCSS-2022-09-12/ktx-quick-starter-01.png" "コメント部分の背景を透明にして、文字の後ろだけ白背景"}}

```css
.container {
    background: transparent !important;
}
:root {
    --lcv-direction: column-reverse;
}
.comment-text{
	background-color: snow;
}
```

### 
