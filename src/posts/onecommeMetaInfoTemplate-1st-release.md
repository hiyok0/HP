---
title: metaTemplate-001
titleJa: わんコメでメタ情報をOBSに表示するテンプレート
overview: わんコメで取得した配信タイトルや視聴者数をOBSの表示に取り込むことができるようになります。
collection: blog
tags: blog,onecomme,html,css,javascript
date: 2022-09-10
layout: blog.hbs
link: blog
---

## 概要・ダウンロード
### これは何？
![デフォルト状態のテンプレートのスクリーンショット](/assets/onecommeMetaInfoTemplate/hero.png)  
　わんコメで視聴者数などの情報を表示することができるテンプレートです。<red>**利用にはPRO版が必要です。**</red>PRO版の詳細については[わんコメ公開ドキュメントのPRO版についてのページ](https://onecomme.com/docs/pro)を御覧ください。

### ダウンロード（0.2.0）
　下記からダウンロードできるはずです。（どちらもダウンロードできない場合は右クリックしてリンク先を保存してみてください。）

<a href="/assets/onecommeMetaInfoTemplate/file.html" download="index.html">情報表示用のテンプレートをダウンロード（非圧縮版）</a>  
md5: 9aa98ffe2cbac917c09baf8e6e1ef803  
  
<a href="/assets/onecommeMetaInfoTemplate/file.zip" download="file.zip">情報表示用のテンプレートをダウンロード（ZIP圧縮版）</a>  
md5: 98f2bb02424730f1894c85c72d504dd8

### 既知の問題点(0.2.0時点)

* 配信枠自体のプラットフォームでの絞り込みができない（未実装）

### ⚠利用上の注意
　本テンプレートは現在α版ですマイナーアップデートで破壊的変更を行う可能性があります。  
　また、本ページで配布されているものは無保証です。α版かどうかに限らず、これらを利用して発生した損害等にたいして当方は一切の責任を持たないこととします。

　There is no warranty when you use what is distributed by this page.

## 使い方
### とりあえず使えれば良い場合
1. ダウンロードします。
2. ZIP圧縮版の場合は展開(解凍)してください。
3. 手に入れた`index.html`ファイルをOBS Studioにドラッグアンドドロップしてください。

### わんコメにテンプレートとして追加する場合
1.  ダウンロードします。
2. ZIP圧縮版の場合は展開(解凍)してください。
3. わんコメを起動し、右上メニューからフォルダを選ぶを選択してください。![右上メニューからフォルダを開くスクリーンショット](/assets/onecommeMetaInfoTemplate/openFolder.webp)  
4. (4.0以降の場合) templatesフォルダへ進んでください。
5. (PRO版テンプレートは__proフォルダに置きたい場合) \__proフォルダへ進んでください。
6. このテンプレートの名前を考え、その名前のフォルダを作ります。
7. 手順１又は２で手に入れた`index.html`ファイルを手順６で作ったフォルダにコピーまたは移動します。もし何らかの理由でファイル名が`index.html`でない場合、ここで`index.html`にリネームしてください。
8. わんコメからテンプレートとして認識されます。

⚠ 0.2.0（このテンプレートのバージョン）以降、わんコメを起動しているＰＣ外からの利用はできなくなりました。

### 表示する内容

* 何もカスタマイズしないで出ている**項目**（情報ではない）が、このテンプレートが表示する全ての項目です。
* 標準では書き出しがONになっている放送についてのみ表示します。
* CSSを利用することで、より柔軟に放送、項目ごとの制御が可能です。

![右上メニューからフォルダを開くスクリーンショット](/assets/onecommeMetaInfoTemplate/write.png)

## カスタマイズ
　インスペクタが使える人はそれ見てポチポチしてたほうが多分早い（断言）。もし難しい場合は気軽に聞いてください。物によってはCSSの例に追加するかもしれません。

### idとclass
　各放送毎に`<metaInfo>`という要素を作成し、`XXXX-XXXXXXXX……`の形式でidを振っています。わんコメで振られている枠ごとのidと同じものです。  
　項目では、項目名、その情報が取れるサイト、インデックスと値などがclassで付与されています。配信サイト名はわんコメと同じものです。

#### 項目名と値（？）
* 項目名
	* indexとkeyの２つのクラスが振ってある。
	* 下記画像の左側部分（囲ってある部分）。
![項目名を指している画像](/assets/onecommeMetaInfoTemplate/mark-index.png)
　　　　　　　　　　　　　　　　　　　　　　　　　　

* 値・データ
	* valueというクラスが振ってある。
	* 良い名称が思い浮かばなかった。
	* 下記画像の右側部分（囲ってある部分）。
![項目名を指している画像](/assets/onecommeMetaInfoTemplate/mark-value.png)

#### 少し特殊なclass
* 全ての項目についている
	* `eachMetaInfo`
* 書き出しがOFFになっている枠のmetaInfo要素についている
	* `notWrite`
	* デフォルトでは非表示になっているため、表示したい場合は`display: block !important;`が必要。

#### 配信ごとの制御
わんコメにより振られているIDをそのままidに利用しています。  
`#dbc833f0-4a7f-474c-8aaf-4f367e5220f1`のように指定します。

```css
/*特定の枠を非表示にする*/
metaInfo #dbc833f0-4a7f-474c-8aaf-4f367e5220f1{
	display: none;
}

/* 特定の枠のみ表示する（特定の枠以外を非表示にする）*/
metaInfo:not(#dbc833f0-4a7f-474c-8aaf-4f367e5220f1){
	display: none;
}
```

#### 配信プラットフォームごとの制御
　わんコメで使われている名前で、対応している項目にclassを付与しています。たとえば`youtube`は`name`、`title`、`viewer`、`upVote`についています。

<center>配信サイト名対応表</center>

| プラットフォーム名 | クラス名 |
| --- | --- |
| YouTube | youtube |
| Twitch | twitch|
| TwitCasting | twicas|
| MixChannel | mixch|
| SHOWROOM | showroom|
| bilibili| bilibili |
| Mirrativ | mirrativ |
| Twitter | twitter |
| NicoNico Live | niconama |

　これ以外のプラットフォームから取得できた場合には、次の[項目ごとの制御](#項目ごとの制御)により制御してください。

#### 項目ごとの制御
　配信毎に下記のようなものが出現します。

<!--残念！これは本物とは差異があるよ。見た目だけ似せてあるんだ。-->
<div style="background-color: snow; border: 2px solid black; padding: 1.5em; width:22em; margin: 0 auto;"><div style="width: 20em;border-left: 0.8em solid rgb(255, 186, 186); border-radius:0.8em;">
			<div class="eachMetaInfo common name">枠名：#ワクノナマエ</div>
			<div class="eachMetaInfo common title">配信タイトル：ハイシンノタイトル</div>
			<div class="eachMetaInfo common viewer">視聴者数：7</div>
			<div class="eachMetaInfo common total">総視聴者数：19</div>
			<div class="eachMetaInfo youtube upVote">高評価：4</div>
			<div class="eachMetaInfo twitch showroom follower">フォロワー：334</div>
			<div class="eachMetaInfo niconama points gift">ギフト：30</div>
			<div class="eachMetaInfo niconama points ad">広告：57</div>
		</div></div>

　これらの項目は、以下のclassが振られています。

<center>項目ークラス対応表</center>

| 項目名 | クラス名 |
| --- | --- |
| 枠名 | name |
| 配信タイトル | title |
| 現時点での<br />閲覧人数 | viewer|
| 累計の視聴者数 | total |
| 高評価数 | upVote |
| フォロワー数 | follower |
| ギフトポイント | point gift<br />両方ついている |
| 広告ポイント | point ad<br />両方ついている |

以下のようなことができます

```css
/*配信タイトルを表示しない*/
div.title{display: none;}
```
　また、すべての項目についている`eachMetaInfo`というclassを用いることで、

```css
/*高評価数以外を表示しない*/
div.eachMetaInfo:not(.upVote)
```
などができます。

#### 配信プラットフォームと存在する項目
|           |youtube                                |twitch                                 |twicas                                 |mixch                                  |showroom                               |bilibili                               |mirrativ                               |twitter                                |niconama                               |
|----------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|
|name       |<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|
|title      |<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|
|viewer     |<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|                                       |<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|                                       |                                       |
|total      |                                       |                                       |<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|                                       |                                       |<i class="ri-checkbox-circle-fill"></i>|                                       |<i class="ri-checkbox-circle-fill"></i>|
|upVote     |<i class="ri-checkbox-circle-fill"></i>|                                       |                                       |                                       |                                       |                                       |                                       |                                       |                                       |
|follower   |                                       |<i class="ri-checkbox-circle-fill"></i>|                                       |<i class="ri-checkbox-circle-fill"></i>|<i class="ri-checkbox-circle-fill"></i>|                                       |                                       |                                       |                                       |
|points gift|                                       |                                       |                                       |<i class="ri-checkbox-circle-fill"></i>|                                       |                                       |                                       |                                       |<i class="ri-checkbox-circle-fill"></i>|
|points ad  |                                       |                                       |                                       |                                       |                                       |                                       |                                       |                                       |<i class="ri-checkbox-circle-fill"></i>|


### その他カスタマイズ例
id(`#xxxxxxxx-xxxx……`の部分)や配信サイトは適宜置き換えてください

#### 書き出しをオンにしていない放送も表示する
```css
.notWrite{display: block !important;}
```
#### 任意の配信サイトで共通の情報のみ表示する
```css
/*YouTubeとTwitCastingに共通して存在する項目のみ表示*/
.eachMetaInfo:not(.youtube), .eachMetaInfo:not(.twicas){display:none;}

/*YouTubeに存在する項目のみ表示*/
.eachMetaInfo:not(.youtube){display:none;}
```

#### 特定の配信サイトで対応していない項目を非表示にする

```css
/*TwitCastingに無い項目を非表示に*/
eachMetaInfo:not(.twicas){display:none;}
```

#### 特定の枠の配信タイトルだけ表示する

```css
div.eachMetaInfo:not(.title), metaInfo:not(#dbc833f0-4a7f-474c-8aaf-4f367e5220f1){display: none;}
metaInfo{border: 0 !important;}
.key{display:none;}
```

#### 視聴者数を100倍＋αにして表示する

```css
/* α == 3 とする*/
.viewer span.value:after{content:"03";}
```
#### INDEX表示を消す

```css
span.index{display: none;}

/*一応、値だけ消すこともできる。意味は多分無い*/
span.value{display: none;}
```

#### INDEXの後のコロン等を変更する
初期状態では`：`（全角コロン単体）です。

```css
/* ': '（半角コロン＋半角スペース）にする*/
span.key:after{content: ": " !important;}

/* isにする（必要に応じてピリオドは各自で！）*/
span.key:after{content: " is " !important;}

/*「〇〇は△△だよ」の形にする*/
span.key:after{content: "\306F" !important;}
span.value:before{content: "\300C";}
span.value:after{content: "\300D\3060\3088";}
```

じゃあ！
