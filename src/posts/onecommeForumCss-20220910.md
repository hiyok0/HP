---
title: forumCSS-Sep
titleJa: 回答したわんコメ用CSSまとめ
overview: 今までにわんコメユーザーフォーラムで回答したCSSのまとめです。
collection: blog
tags: blog,onecomme,html,css,obs
date: 2022-09-10
layout: blog.hbs
link: blog
---
## CSS
スクショは真ん中なのにCSSは左寄せ（）

### しましま
![しましま](/assets/onecommeForumCss-20220910/simasima.png)
```css
.odd  {background-color:lightpink;}
.even {background-color:lightgreen;}
```
[コメントの背景色を2色交互にしたい
](https://forum.onecomme.com/t/topic/589)

### 一行にしてはみ出た分を「…」表示に
![文末省略](/assets/onecommeForumCss-20220910/ellipsis.png)
```css
.comment-block{
	display:flex;
	flex-wrap: nowrap;
	content-justify:start;
}
.name{
	white-space: nowrap;
}
.comment-text{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	width: 100%;
	overflow: hidden;
	text-overflow:ellipsis;
}
```
[OBSに表示するコメント文を省略して表示させたい](https://forum.onecomme.com/t/topic/580/6?u=hyk)

### LINE風テンプレートの吹き出しの絞ってある部分を消す
意味あるのかこれ……？
![吹き出しなし](/assets/onecommeForumCss-20220910/noFukidashi.png)
```css
.comment-body::before{display: none;}
```