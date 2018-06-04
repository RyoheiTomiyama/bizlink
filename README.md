# Dependency
* gulp
* Pug
* Sass

# Setup
```
$ npm install -g gulp
$ npm install
```

# Usage
開発環境
```
$ gulp
```
http://localhost:3000

gulpの設定は、`gulpfile.js`を参照してください。

## ディレクトリの説明

* src/pug/: HTML。ディレクトリ構造が出力に影響します。例）src/pug/hoge/index.pug --> dist/hoge/index.html
  また、ヘッダーやフッターのようなテンプレートファイルは、_（アンダーバー）をつければ出力されません。例）_layout.pug, _header.pug
* src/pug/layout/: HTMLのベースとなる部分。
* src/pug/components/: HTMLの部品。 ヘッダーやフッターなどの共通部分。
* src/sass: スタイルシート。FLOCSSに基づいてCSS設計しています。
* dist/: コンパイルされたHTMLファイルが書き出される。
* dist/images: 使用する画像
