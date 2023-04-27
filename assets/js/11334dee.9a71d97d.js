"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=p(r),b=o,d=g["".concat(i,".").concat(b)]||g[b]||u[b]||a;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},72478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Step 2: Creating a personal access token",sidebar_position:2},s=void 0,c={unversionedId:"workshop/repo-track/step-by-step/creating-a-personal-access-token",id:"workshop/repo-track/step-by-step/creating-a-personal-access-token",title:"Step 2: Creating a personal access token",description:"1. Sign in to your GitHub account and navigate to Settings -> Developer settings.",source:"@site/docs/workshop/repo-track/step-by-step/creating-a-personal-access-token.md",sourceDirName:"workshop/repo-track/step-by-step",slug:"/workshop/repo-track/step-by-step/creating-a-personal-access-token",permalink:"/docs/workshop/repo-track/step-by-step/creating-a-personal-access-token",draft:!1,editUrl:"https://github.com/pingcap/ossinsight/tree/main/web/docs/workshop/repo-track/step-by-step/creating-a-personal-access-token.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Step 2: Creating a personal access token",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Step 1: Get TiDB connection info",permalink:"/docs/workshop/repo-track/step-by-step/get-tidb-connection-info"},next:{title:"Step 3: Setting GitHub Action",permalink:"/docs/workshop/repo-track/step-by-step/setting-github-action"}},i={},p=[],l={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign in to your GitHub account and navigate to Settings -> Developer settings.\n",(0,o.kt)("img",{src:r(49668).Z,width:"1280",height:"562"})),(0,o.kt)("li",{parentName:"ol"},"Click on Generate new token(classic) button.\n",(0,o.kt)("img",{src:r(2521).Z,width:"1280",height:"565"})),(0,o.kt)("li",{parentName:"ol"},'Enter a suitable description for the token, e.g., "Repo Tracker Workshop".\n',(0,o.kt)("img",{src:r(47687).Z,width:"1280",height:"772"})),(0,o.kt)("li",{parentName:"ol"},'For public repositories, leave all the scopes unchecked (you only need basic read access). If you want to sync data from your private repositories as well, check the "repo" scope.'),(0,o.kt)("li",{parentName:"ol"},"Click Generate token at the bottom of the page."),(0,o.kt)("li",{parentName:"ol"},"Make sure to copy the generated token as you won't be able to see it again. Save it securely, as you will need it later.")))}u.isMDXComponent=!0},47687:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enter-desc-70273ff9f05fec7695c6244e552f7e0d.png"},2521:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/generate-new-50086131309a68e5450813633a0c6c5a.png"},49668:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/personal-access-token-9fc665815b72706ce98aab5c593dab3d.png"}}]);