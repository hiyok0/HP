---
title: create-tree-aa
titleJa: 罫線素片を使ったヒエラルヒーAA？ジェネレータ
overview: 手作業でつくるのが面倒くさいが、画像つくるより簡単に作れるtreeコマンド結果みたいなやつ。
collection: page
tags: javascript, html, tree, asciiart
date: 2024-10-03
layout: app.hbs
link: page
draft: false
---

<link rel="stylesheet" type="text/css" href="https://unpkg.com/kell/dist/kell.min.css">
<style>
	body{
		background-color: #EDF7FF;
		min-height: 100vh;
	}
	.ui-part{
		display:flex;
		flex-direction: row;
		align-items: flex-start;
	}
	@media screen and (max-width: 1100px){
		.ui-part{
			flex-direction: column;
		}
	}
	.ui-parts{
		display: block;
		margin: 0.3em 0 0 1.6em;
	}
</style>

# {{ titleJa }}
[使い方](#使い方)

お気づきの点がございましたらお気軽にご連絡ください。

お知らせの際、入出力内容を一緒に報告いただけるととても助かります（必須ではありません）。
- <a href="https://twitter.com/Jewel_Flash" target="_blank">せかいい (@Jewel_Flash) / Twitter<i class="ri-share-box-line"></i></a>
- [その他連絡先](https://hiyoko.pages.dev/about/#生息場所)
- <button id="copyDebugDataToClipboard">デバッグ用データをクリップボードにコピー</button>
- <button>デバッグ用データから状況を再現（未実装）</button>

## Try now!
### 入力部
<div class="kellEditor" id="inputArea"></div>

#### 注意事項
- 空行は無視されます。
- 正しく入力されていない場合に崩れるのは仕様です。

<!--
### 出力部-->
<div class="ui-part" style="margin-top: 2.5em">
	<h3 style="margin-top: 0;">出力部</h3>
	<button class="ui-parts" id="ui-button-saveto-clipboard"><i class="ri-file-copy-2-line"></i>クリップボードに保存</button>
	<div class="ui-parts">
		<input type="checkbox" id="ui-checkbox-clipboard-autosave" />
		<label for="ui-checkbox-clipboard-autosave">クリップボードに自動保存する</label>
	</div><div class="ui-parts">
		<input type="checkbox" id="ui-checkbox-vertical-heavy" />
		<label for="ui-checkbox-vertical-heavy">縦線を <em>heavy</em> にする</label>
		<br />
		<input type="checkbox" id="ui-checkbox-horizontal-heavy" />
		<label for="ui-checkbox-horizontal-heavy">横線を <em>heavy</em> にする</label>
	</div><div class="ui-parts" style="text-align: right;">
		<label for="ui-number-branch-length">枝の長さ（全角）: </label>
		<input
			type="number"
			id="ui-number-branch-length"
			value="2"
			max="16"
			min="1"
			style="width: 3em;"
			title="推奨:1~4, 必須: 1~16(整数)"
		/>
		<br />
		<label for="ui-number-branch-offset">枝オフセット（全角）: </label>
		<input
			type="number"
			id="ui-number-branch-offset"
			value="1"
			max="4"
			min="0"
			style="width: 3em;"
			title="推奨:0~1, 必須: 0~4(整数)"
		/>
	</div>
</div>

<div class="kellEditor" id="outputArea"></div>

## 使い方
あとで書く。

## 既知の問題＆そのうち改修するかもしれないこと
- **枝オフセットを`0`にすると表示が崩れる**
- 出力部で行番号が正しく更新されない
- 改行時にインデント維持したい
- 手前の項目のほうがインデントが深い時に表示が崩れる。
- 範囲選択で一気にインデントしたい
- tab記号も^Zで戻りたい
- 範囲選択時に改行（空行含む）がわかりやすくしたい
- スペースでのインデント
	- タブ派だけどスマートデバイスでタブは打ちにくいと思うので

## 関連するリンク・参考文献
- [kell](https://sporeball.dev/kell/)
- [textarea内でタブを入力可能にする。ついでにタブ幅も変更する。 - freefielder.jp](https://freefielder.jp/blog/2020/05/input-custon-sized-tab-in-textarea.html)
- [HTMLTextAreaElement: setRangeText() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [テキストエリア内にタブを入力する - 日本だんでぃ協会](http://www.webclap-dandy.com/?category=Programing&id=5)
- [HTMLTextAreaElement: selectionStart property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement/selectionStart)

<script src="https://unpkg.com/kell"></script>
<script src="/assets/tree-gen.js"></script>
