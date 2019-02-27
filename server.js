// Nuxt と Builder モジュールを require します
const { Nuxt, Builder } = require('nuxt')
// Nuxt の設定ファイルを require します
const config = require('./nuxt.config.js')
// 新たに Nuxt のインスタンスを生成します
const nuxt = new Nuxt(config)
// 開発環境の場合にライブビルドとライブリロードを有効化します
if (nuxt.options.dev) {
  new Builder(nuxt).build()
}