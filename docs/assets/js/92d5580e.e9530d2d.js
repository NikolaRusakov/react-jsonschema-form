"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Chakra-UI Customization",c={unversionedId:"api-reference/themes/chakra-ui/uiSchema",id:"api-reference/themes/chakra-ui/uiSchema",title:"Chakra-UI Customization",description:"When using @rjsf/chakra-ui there are a couple of ways to customize the feel of the form.",source:"@site/docs/api-reference/themes/chakra-ui/uiSchema.md",sourceDirName:"api-reference/themes/chakra-ui",slug:"/api-reference/themes/chakra-ui/uiSchema",permalink:"/react-jsonschema-form/docs/api-reference/themes/chakra-ui/uiSchema",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/api-reference/themes/chakra-ui/uiSchema.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Semantic-UI Customization",permalink:"/react-jsonschema-form/docs/api-reference/themes/semantic-ui/uiSchema"},next:{title:"<Form /> Props",permalink:"/react-jsonschema-form/docs/api-reference/form-props"}},s={},p=[{value:"Styling",id:"styling",level:2},{value:"Limitations",id:"limitations",level:3}],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chakra-ui-customization"},"Chakra-UI Customization"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"@rjsf/chakra-ui")," there are a couple of ways to customize the feel of the form."),(0,a.kt)("h2",{id:"styling"},"Styling"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraProvider"),", where you can customize the field components at a theme level.\nAnd, ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema")," allows for the use of a ",(0,a.kt)("inlineCode",{parentName:"p"},'"chakra"')," ",(0,a.kt)("inlineCode",{parentName:"p"},'"ui:option"')," to customize the styling of the form widgets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "yourField": {\n    "ui:options": {\n      "chakra": {\n        "p": "1rem",\n        "color": "blue.200",\n        "sx": {\n          "margin": "0 auto"\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"It accepts the theme accessible ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/features/style-props"},"style props")," provided by ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/getting-started"},"Chakra")," and ",(0,a.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,a.kt)("h3",{id:"limitations"},"Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"chakra")," option is only available for the Chakra-UI theme."),(0,a.kt)("li",{parentName:"ul"},"The props are given to the parent component in the individual widget. To pass styles to the inner components, use the ",(0,a.kt)("a",{parentName:"li",href:"https://chakra-ui.com/docs/features/the-sx-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"sx")," prop"),".")))}m.isMDXComponent=!0}}]);