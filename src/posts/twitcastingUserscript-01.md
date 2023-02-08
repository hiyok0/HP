---
title: TwitCastingUserScript
titleJa: ツイキャスのアーカイブリンク書き換え
overview: ツイキャスのアーカイブタブの遷移先が録画のみの絞り込み状態になる改悪があったので、戻した
collection: blog
tags: blog,twitcasting,userscript,javascript
date: 2022-09-12
layout: blog.hbs
link: blog
---

## 動機
　ツイキャスでアーカイブタブをクリックした時に、
{{img "/assets/TwitCastingUserScript/clickArchive.png" "アーカイブをクリック"}}
こんな風に録画のみにアーカイブのみにフィルターされた状態で表示されてしまう
{{img "/assets/TwitCastingUserScript/filtered.png" "録画のみにフィルターされているツイキャスのアーカイブ"}}
おそらく、ライブ履歴だったのがアーカイブになったことで録画のみになったのだと思うが、使いにくいことには変わりがない。CSSでは無理そう？だったので、初めてのUserScriptに挑戦してみた。

## やってみた
ちょうど、Tampermonkeyがインストールされていたので、ここを押してみた。
{{img "/assets/TwitCastingUserScript/createNewScript.png" "新規スクリプト"}}
すると、エディタが起動したのでポチポチ入れていって、完成したものがこちら。
{{img "/assets/TwitCastingUserScript/editorDone.png" "新規スクリプト"}}

<script src="https://gist.github.com/hiy0ko/7c3003ceae71d266ef2f0a66a36fbad6.js"></script>
2023-02-09追記：ためしにGitHub Gistにしてみた。  
いい感じに動いた。本当は最初、`https://*twitcasting.tv/*`って書いたんだけどどうにも動かんかった。また試す。
