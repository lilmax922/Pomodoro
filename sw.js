if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,o)=>{const a=i||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let c={};const r=i=>s(i,a),l={module:{uri:a},exports:c,require:r};e[a]=Promise.all(n.map((i=>l[i]||r(i)))).then((i=>(o(...i),c)))}}define(["./workbox-3625d7b0"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/index.8ae8e2b3.js",revision:null},{url:"assets/index.ed2e33d1.css",revision:null},{url:"assets/ListView.16d57f67.css",revision:null},{url:"assets/ListView.1cf71b7a.js",revision:null},{url:"assets/materialdesignicons-webfont.48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont.861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont.bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont.e52d60f6.woff2",revision:null},{url:"assets/SettingsView.18ef821f.js",revision:null},{url:"assets/SettingsView.d904deed.css",revision:null},{url:"assets/toad-sings-all-i-want-for-christmas-is-you.83317849.mp3",revision:null},{url:"assets/toad-sings-chandelier.d88e46a5.mp3",revision:null},{url:"assets/toad.44b112b8.png",revision:null},{url:"assets/VTable.40e00f86.js",revision:null},{url:"assets/VTable.41a8559d.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"7b06cfe17e50a1b0834a9f089260f2a5"},{url:"favicon-32x32.png",revision:"9c2c563c5f662b94bcf1df8b08111955"},{url:"favicon.ico",revision:"23a9d795b5377492c953d261e2aef989"},{url:"img/icons/android-chrome-192x192.png",revision:"47cc95d978adcf55544359aac871f5a5"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"47cc95d978adcf55544359aac871f5a5"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"900bb72aa7b161c6adec1cec66af65a3"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"a9d8136c420a4ba9e8a80cbdb667e7f3"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"e4335c90bc560733b8f44685f1398803"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"a61ee44d375845ebd353230c5f664bfe"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"4c8de250e758fcfd85b64885e91a9132"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"3677b4f434a335c855e0e83bcecff8a7"},{url:"img/icons/apple-touch-icon.png",revision:"a61ee44d375845ebd353230c5f664bfe"},{url:"img/icons/ipad_splash.png",revision:"f666f0759174fd7b13e0b428fcb61b3a"},{url:"img/icons/ipadpro1_splash.png",revision:"58d6204c66f1f1091e9f1583e27f79d6"},{url:"img/icons/ipadpro2_splash.png",revision:"67c5a175cd5a3f041df89992744af192"},{url:"img/icons/ipadpro3_splash.png",revision:"764935b8ec5056301586fe3b842283a3"},{url:"img/icons/iphone5_splash.png",revision:"c06bc29223ebe3b58086b42d921dc539"},{url:"img/icons/iphone6_splash.png",revision:"2ef5e816d7072049fededf121d7d2406"},{url:"img/icons/iphoneplus_splash.png",revision:"3c48b5fa55c5dcd0f1641a16b95e2133"},{url:"img/icons/iphonex_splash.png",revision:"04f074edfbe89f058d0f724d82ad6625"},{url:"img/icons/iphonexr_splash.png",revision:"7d700abe51734610d27ff008d9ab9583"},{url:"img/icons/iphonexsmax_splash.png",revision:"64e367c4dac31a5182e2fd5fd1f22ac3"},{url:"img/icons/msapplication-icon-144x144.png",revision:"181360a84b9ca3ce002de35f314714f9"},{url:"img/icons/mstile-150x150.png",revision:"8441e6ab7294438fe13b39015df2f208"},{url:"img/icons/safari-pinned-tab.svg",revision:"919b0c937904e5046959817d00bb3c1e"},{url:"index.html",revision:"f899c13afd401b51a1a57d5407ebd3da"},{url:"tomato.png",revision:"ab2c7a3f8250092e7cec3433e5e3e67a"},{url:"./img/icons/android-chrome-192x192.png",revision:"47cc95d978adcf55544359aac871f5a5"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"47cc95d978adcf55544359aac871f5a5"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"900bb72aa7b161c6adec1cec66af65a3"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"4c8de250e758fcfd85b64885e91a9132"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"3677b4f434a335c855e0e83bcecff8a7"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"a9d8136c420a4ba9e8a80cbdb667e7f3"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"e4335c90bc560733b8f44685f1398803"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"a61ee44d375845ebd353230c5f664bfe"},{url:"./img/icons/apple-touch-icon.png",revision:"a61ee44d375845ebd353230c5f664bfe"},{url:"./favicon-16x16.png",revision:"7b06cfe17e50a1b0834a9f089260f2a5"},{url:"./favicon-32x32.png",revision:"9c2c563c5f662b94bcf1df8b08111955"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"181360a84b9ca3ce002de35f314714f9"},{url:"./img/icons/mstile-150x150.png",revision:"8441e6ab7294438fe13b39015df2f208"},{url:"manifest.webmanifest",revision:"7ea4902a896f2c0140d6cf07beae6bd6"}],{ignoreURLParametersMatching:[/^[0-9A-Za-z]*$/]}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
