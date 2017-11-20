// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'
import messages from './locale/locale'

// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

Vue.use(VueI18n)
Vue.use(ElementUI, { locale: lang === 'zh-CN' ? zhLocale : enLocale })

Vue.config.productionTip = false

const i18n = new VueI18n({
    locale: lang, // set locale
    messages, // set locale messages
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    template: '<App/>',
    components: { App }
})