//import parseArgs from "minimist";
const parseArgs = require('minimist')
// SPAモードを有効。未設定（デフォルト）ではSSRモード TODO:SPAモードが不要となったら消す
/*
module.exports = {
  mode: 'spa'
}*/

const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "127.0.0.1"

module.exports = {
  build: {
    extend (config, { isClient, loaders: { vue } }) {
      // クライアントのバンドルの Webpack 設定のみを拡張する
      if (isClient) {
        vue.transformAssetUrls.video = ['src', 'poster']
      }
    }
  },
  env: {
    baseUrl:
      process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  head: {
    title: "WishHub（ウィッシュハブ）｜アイドル・アーティストの「お願い」をファンの行動で「叶える」",
    meta: [
      {
        name: "robots",
        content: "noindex" 
      },
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        name: "description",
        content:
          "ブロックチェーンにより行動支援を見える化する、まったく新しいサービスです。"
      },
      {
        name: "author",
        content:
          "Contents Works Inc."
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      /* Favicon */
      {
        rel: "icon",
        type: "image/png",
        href: "~/assets/img/brand/favicon.png"
      },
      /* Fonts */
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=M+PLUS+1p"
      },
    ],
    /* slick 適用調査
    script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      //Core
      //{ src: '~/assets/vendor/jquery/jquery.min.js' },
      { src: '~/assets/vendor/popper/popper.min.js' },
      { src: '~/assets/vendor/bootstrap/bootstrap.min.js' },
      //Optional JS
      { src: '~/assets/vendor/headroom/headroom.min.js' },
      { src: '~/assets/vendor/onscreen/onscreen.min.js' },
      { src: '~/assets/vendor/nouislider/js/nouislider.min.js' },
      { src: '~/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js' },
      // WishHub JS
      { src: '~/assets/js/argon.js?v=1.0.1' },
      { src: '~/assets/js/slick.min.js' }
    ]
    */
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: [
    /* Icons */
    "~/assets/vendor/nucleo/css/nucleo.css",
    "~/assets/vendor/font-awesome/css/font-awesome.min.css",
    /* WishHub CSS */
    "~/assets/css/main.css",
    /* JS CSS */
    "~/assets/css/slick.css",
    "~/assets/css/slick-theme.css"
  ],
  build: {},
  modules: [
    "@nuxtjs/axios",
    ///TODO: PWA化の検証が完了したら有効化する
    //"@nuxtjs/pwa",
    "~/modules/typescript.js",
  ],
  plugins:[
    '~/plugins/axios.ts'
  ],
  /* PWAの検証が完了したら正式に設定する
  workbox: {
   dev: true //開発環境でもPWAできるようにするにはtrue
  },
  */
  manifest: {
    name: "WishHub's Page",
    lang: 'ja'
  },
  /* TODO:APIサーバのURLが決まったらここにベースのURLを記入する 例：https://hogehogeapi */
  axios: {
    //baseUrl :'https://wishhub-dev-api.azurewebsites.net/api/'
    //baseUrl :'https://uliiq-test-manual.azurewebsites.net'
    //baseUrl : 'http://127.0.0.1:3000'
    //baseUrl : 'http://localhost:8080'
  }
}
