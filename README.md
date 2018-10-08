# oit-cpt.github.io
このリポジトリは [oit-cpt公式サイト](https://oit-cpt.github.io/) のリポジトリです  
静的サイトのジェネレーターとして https://github.com/Vagr9K/gatsby-material-starter を使用しています

# 開発環境の用意
開発環境にはnodejsのパッケージマネージャである `npm` か `yarn` が必要です。インストール方法はググって下さい。おすすめは `yarn` です。以下 `yarn` を前提に説明します。
まず、依存関係のあるモジュールをインストールします。そのためにこのプロジェクトのルートディレクトリで、次のコマンドを実行します。

```bash
yarn
```

色々表示されて依存モジュールがインストールされたと思います。
次にローカルのブラウザでサイトをプレビューするコマンドを実行します。

```bash
yarn run develop
```

ブラウザのURLに `http://localhost:8000/` を入力して、サイトが表示されれば開発環境の構築は成功です！


# 新しい記事の書き方
`content/posts` 以下に新しいディレクトリを作って、その中に `index.md` ファイルを用意します。
`index.md` の先頭に記事に関する設定を書く必要があります。
`hello-world` の設定は次のようになっています。

```
---
title: "大阪工業大学 競技プログラミングチームについて"
cover: "/logos/logo-1024.png"
date: "2099-12-31"
slug: hello-world
category: "紹介"
tags:
    - 紹介
---
```

`title` , `cover` , `date` はそのままの意味です。 
`slug` は記事へのパスを表します。この場合では、 `https://oit-cpt.github.io/hello-world` に記事が配置されます。
`category` と `tags` は記事のカテゴリとタグを指定します。システム的にこれらが指定されていないと、buildに失敗するので必ず指定して下さい。あと記事が増えた時に絞り込みに使えます。

`index.md` は先頭に設定を書く以外は、普通にMarkdownとして記事を書いていけば大丈夫です。
