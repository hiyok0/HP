---
title: five-things-ive-learned-recently
titleJa: 最近知ったこと５つ
overview: 今まで知らなかったこと、わすれがちなこと
collection: blog
tags: adv, cooking, game, node, javascript
date: 2024-09-15
layout: blog.hbs
link: blog
---

## このページについて
- 自分用
- 間違ってたら優しく教えて
	- X(旧: Twitter): [@Jewel_Flash](https://twitter.com/Jewel_Flash)
- 最初は単語のみにしようかと思っていたが、事柄全般を扱うことにした。

## 本編
### Aポーズ/Bポーズ
ADVゲームでの立ち絵についてAポーズが正面向きなど、Bポーズが斜め向きなど。
3Dモデル等のTポーズ、Aポーズとは全くの別概念。

### ディレクタ（Ｄ）とプロデューサ（Ｐ）の違い
（あとで書く、何度聞いても途中でわからなくなる）<br />
ビックネームが説明してる動画: [ディレクターとプロデューサー 【チーム運営】 - YouTube](https://www.youtube.com/watch?v=YCLf9qRxWiA)

### ワード（助数詞）/ワード数
**ボイスのついたセリフ**の数またはそれを数える単位。この数値に直すことをワード換算という。

英文などの長さなどを数えるときのwordsとは数え方や用途が全く異なる。

声優さんに依頼するための単位のため、ボイスが付かないものはいくらあっても０扱いになる。
そのため、次のものはいくらあっても０ワードとなる
- 地の文（ボイスがない）
- ボイスのないセリフ

### 鶏ハムを作るときの下味
ここでいう鶏ハムとは正しい意味でのハムではなく低温調理されたサラダチキン様の鶏肉のこと。

適当に醤油とかに漬けてみたら想定よりしょっぱくなった。

### NodeJSで引数にJSのコードを渡すオプション
`-e`

すでにnodeがインストールされている環境であれば
```bash
node -e "console.log(require('./hogehoge.json').fuga)"
```
みたいなことすると便利。これのためにわざわざ入れる必要はないが……。

```bash
# おまけ
$ node -e "console.log((123).toString(16))"
7b
$ node -e "console.log((123).toString(10))"
123
$ node -e "console.log((123).toString(2))"
1111011
```
