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
![アーカイブをクリック](/assets/TwitCastingUserScript/clickArchive.png)
こんな風に録画のみにアーカイブのみにフィルターされた状態で表示されてしまう
![録画のみにフィルターされているツイキャスのアーカイブ](/assets/TwitCastingUserScript/filtered.png)
おそらく、ライブ履歴だったのがアーカイブになったことで録画のみになったのだと思うが、使いにくいことには変わりがない。CSSでは無理そう？だったので、初めてのUserScriptに挑戦してみた。

## やってみた
ちょうど、Tampermonkeyがインストールされていたので、ここを押してみた。
![新規スクリプト](/assets/TwitCastingUserScript/createNewScript.png)
すると、エディタが起動したのでポチポチ入れていって、完成したものがこちら。
![新規スクリプト](/assets/TwitCastingUserScript/editorDone.png)
```javascript
// ==UserScript==
// @name         TwitCastingArchiveLink
// @namespace
// @version      0.1
// @description  元の仕様に戻す（日本語環境にのみ対応）
// @author       hiyoko
// @match        https://twitcasting.tv/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const fragment = document.createDocumentFragment();
    const archiveLi = document.getElementsByClassName("tw-user-nav-list-item")[1];
    const archiveSpan = document.getElementsByClassName("tw-user-nav-list-count")[0];
    const modifiedA = document.createElement("A");
    modifiedA.setAttribute('href', location.origin + "/" + location.pathname.split("/",2)[1] +"/archive?type=history");
    modifiedA.textContent = "アーカイブ";
    modifiedA.appendChild(archiveSpan);
    fragment.appendChild(modifiedA);
    archiveLi.replaceChildren(fragment);
})();
```
いい感じに動いた。
