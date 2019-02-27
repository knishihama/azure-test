// Nuxt �� Builder ���W���[���� require ���܂�
const { Nuxt, Builder } = require('nuxt')
// Nuxt �̐ݒ�t�@�C���� require ���܂�
const config = require('./nuxt.config.js')
// �V���� Nuxt �̃C���X�^���X�𐶐����܂�
const nuxt = new Nuxt(config)
// �J�����̏ꍇ�Ƀ��C�u�r���h�ƃ��C�u�����[�h��L�������܂�
if (nuxt.options.dev) {
  new Builder(nuxt).build()
}