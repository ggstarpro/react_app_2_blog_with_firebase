# 環境構築
* npx create-react-app react_app_2_blog_with_firebase
* npm i react-router-dom
## [fontawesome](https://docs.fontawesome.com/web/use-with/react/)
* npm i --save @fortawesome/fontawesome-svg-core

* npm i --save @fortawesome/free-solid-svg-icons
* npm i --save @fortawesome/free-regular-svg-icons
* npm i --save @fortawesome/free-brands-svg-icons

* npm i --save @fortawesome/react-fontawesome@latest

# Firebaseのセットアップ
アカウント: s********@gmail.comを使用
プロジェクト名: blog
ウェブアプリに Firebase を追加 アプリのニックネーム: blog

## Authentication
* Google 有効にする
- プロジェクトのサポートメール
- 保存ボタンを押下

## Cloud Firestore
- 本番環境モードで開始する
- asia-northeast1(Tokyo)
### コレクションを開始(collection-document-data)
- コレクションを開始
- コレクションID: posts
- ドキュメントID: 自動ID
- フィールド: 空欄

## ルールの編集
```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

# FirebaseとReactを連携
* プロジェクトの設定 > マイアプリ
- `npm install firebase`


# 要件
- 画像のものを作成してください
- ディレクトリ構造は下記の通りにしてください
```
- src/
  - components/
    - CreatePost.css
    - CreatePost.js
    - Home.css
    - Home.js
    - Login.js
    - Logout.js
    - Navbar.css
    - Navbar.js
  - App.css
  - App.js
  - firebase.js
  - index.css
  - index.js
```
- ログインしているかどうかのbool値をlocalStorageに保存してください
- 画像はFontAwesomeIconを使用してください