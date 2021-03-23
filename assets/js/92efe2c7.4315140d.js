(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(125)),o=r(126),c={id:"frame-processors",title:"Frame Processors",sidebar_label:"Frame Processors"},s={unversionedId:"guides/frame-processors",id:"guides/frame-processors",isDocsHomePage:!1,title:"Frame Processors",description:"FRAME PROCESSORS ARE STILL WORK IN PROGRESS - SEE #2",source:"@site/docs/guides/FRAME_PROCESSORS.mdx",slug:"/guides/frame-processors",permalink:"/react-native-vision-camera/docs/guides/frame-processors",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/guides/FRAME_PROCESSORS.mdx",version:"current",sidebar_label:"Frame Processors",sidebar:"visionSidebar",previous:{title:"Taking Photos/Recording Videos",permalink:"/react-native-vision-camera/docs/guides/capturing"},next:{title:"Zooming with Reanimated",permalink:"/react-native-vision-camera/docs/guides/animated"}},l=[{value:"What are frame processors?",id:"what-are-frame-processors",children:[]},{value:"Technical",id:"technical",children:[]},{value:"Example",id:"example",children:[]},{value:"Plugins",id:"plugins",children:[]}],b={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"FRAME PROCESSORS ARE STILL WORK IN PROGRESS - SEE ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/pull/2"},"#2")))),Object(i.b)("div",null,Object(i.b)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"283",height:"535",style:{float:"right"}},Object(i.b)("image",{href:Object(o.a)("img/demo.gif"),x:"18",y:"33",width:"247",height:"469"}),Object(i.b)("image",{href:Object(o.a)("img/frame.png"),width:"283",height:"535"}))),Object(i.b)("h3",{id:"what-are-frame-processors"},"What are frame processors?"),Object(i.b)("p",null,"Frame processors are functions that are written in JavaScript (or TypeScript) which can be used to ",Object(i.b)("strong",{parentName:"p"},'process frames the camera "sees"'),"."),Object(i.b)("p",null,"For example, you might want to create a QR code scanner ",Object(i.b)("em",{parentName:"p"},"without ever writing native code while still achieving almost-native performance"),". Since you can write the scanning part yourself, you can implement a custom QR code system like the one Snapchat uses for Snap-codes."),Object(i.b)("div",{align:"center"},Object(i.b)("img",{src:Object(o.a)("img/snap-code.png"),width:"15%"})),Object(i.b)("br",null),Object(i.b)("p",null,"Frame processors are by far not limited to QR code detection, other examples include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"AI")," for ",Object(i.b)("strong",{parentName:"li"},"facial recognition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"AI")," for ",Object(i.b)("strong",{parentName:"li"},"object detection")),Object(i.b)("li",{parentName:"ul"},"Using ",Object(i.b)("strong",{parentName:"li"},"Tensorflow"),", ",Object(i.b)("strong",{parentName:"li"},"MLKit Vision"),' or other libraries (if they provide React Native JSI bindings in the form of "react-native-vision-camera plugins")'),Object(i.b)("li",{parentName:"ul"},"Creating ",Object(i.b)("strong",{parentName:"li"},"realtime video-chats")," since you can directly send the camera frames over the network"),Object(i.b)("li",{parentName:"ul"},"Creating ",Object(i.b)("strong",{parentName:"li"},"snapchat-like filters"),", e.g. draw a dog-mask filter over the user's face (WIP)"),Object(i.b)("li",{parentName:"ul"},"Creating ",Object(i.b)("strong",{parentName:"li"},"color filters")," with depth-detection"),Object(i.b)("li",{parentName:"ul"},"Using ",Object(i.b)("strong",{parentName:"li"},"custom C++ processors")," exposed to JS for maximum performance")),Object(i.b)("h3",{id:"technical"},"Technical"),Object(i.b)("p",null,"Frame processors are JS functions that will be ",Object(i.b)("strong",{parentName:"p"},"workletized")," using ",Object(i.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated"),". They are created on a ",Object(i.b)("strong",{parentName:"p"},"separate thread")," using a separate Hermes/JSC Runtime and are ",Object(i.b)("strong",{parentName:"p"},"invoked synchronously")," (using JSI) without ever going over the bridge."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const frameProcessor = useFrameProcessor((frame) => {\n    const qrCodes = scanQrCodes(frame)\n    console.log(qrCodes)\n  }, [])\n\n  return (\n    <Camera frameProcessor={frameProcessor} {...cameraProps} />\n  )\n}\n")),Object(i.b)("h3",{id:"plugins"},"Plugins"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"TODO")),Object(i.b)("br",null),Object(i.b)("h4",{id:"-next-section-zooming-with-reanimated"},"\ud83d\ude80 Next section: ",Object(i.b)("a",{parentName:"h4",href:"animated"},"Zooming with Reanimated")))}p.isMDXComponent=!0},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},126:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(16),a=r(128);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var b=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+b:b}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},128:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);