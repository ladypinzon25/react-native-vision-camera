(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{104:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return b}));var r=t(3),n=t(7),c=(t(0),t(125)),i={id:"hooks_usecameradevices",title:"Module: hooks/useCameraDevices",sidebar_label:"hooks/useCameraDevices",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/modules/hooks_usecameradevices",id:"api/modules/hooks_usecameradevices",isDocsHomePage:!1,title:"Module: hooks/useCameraDevices",description:"Module: hooks/useCameraDevices",source:"@site/docs/api/modules/hooks_usecameradevices.md",slug:"/api/modules/hooks_usecameradevices",permalink:"/react-native-vision-camera/docs/api/modules/hooks_usecameradevices",editUrl:null,version:"current",sidebar_label:"hooks/useCameraDevices",sidebar:"visionSidebar",previous:{title:"Module: VideoFile",permalink:"/react-native-vision-camera/docs/api/modules/videofile"},next:{title:"Module: hooks/useCameraFormat",permalink:"/react-native-vision-camera/docs/api/modules/hooks_usecameraformat"}},s=[{value:"Functions",id:"functions",children:[{value:"useCameraDevices",id:"usecameradevices",children:[]}]}],m={toc:s};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-hooksusecameradevices"},"Module: hooks/useCameraDevices"),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"usecameradevices"},"useCameraDevices"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"useCameraDevices"),"(): CameraDevices"),Object(c.b)("p",null,"Gets the best available ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},Object(c.b)("inlineCode",{parentName:"a"},"CameraDevice")),". Devices with more cameras are preferred."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},Object(c.b)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," if no device was found."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"const device = useCameraDevice()\n// ...\nreturn <Camera device={device} />\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," CameraDevices"),Object(c.b)("p",null,"The best matching ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},Object(c.b)("inlineCode",{parentName:"a"},"CameraDevice")),"."),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/48821d5/src/hooks/useCameraDevices.ts#L29"},"hooks/useCameraDevices.ts:29")),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"useCameraDevices"),"(",Object(c.b)("inlineCode",{parentName:"p"},"deviceType"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#physicalcameradevicetype"},Object(c.b)("em",{parentName:"a"},"PhysicalCameraDeviceType"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#logicalcameradevicetype"},Object(c.b)("em",{parentName:"a"},"LogicalCameraDeviceType")),"): CameraDevices"),Object(c.b)("p",null,"Gets a ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},Object(c.b)("inlineCode",{parentName:"a"},"CameraDevice"))," for the requested device type."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},Object(c.b)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," if no device was found."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"const device = useCameraDevice('wide-angle-camera')\n// ...\nreturn <Camera device={device} />\n")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"deviceType")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/modules/cameradevice#physicalcameradevicetype"},Object(c.b)("em",{parentName:"a"},"PhysicalCameraDeviceType"))," ","|"," ",Object(c.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/modules/cameradevice#logicalcameradevicetype"},Object(c.b)("em",{parentName:"a"},"LogicalCameraDeviceType"))),Object(c.b)("td",{parentName:"tr",align:"left"},"Specifies a device type which will be used as a device filter.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," CameraDevices"),Object(c.b)("p",null,"A ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},Object(c.b)("inlineCode",{parentName:"a"},"CameraDevice"))," for the requested device type."),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/48821d5/src/hooks/useCameraDevices.ts#L44"},"hooks/useCameraDevices.ts:44")))}b.isMDXComponent=!0},125:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return d}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=n.a.createContext({}),b=function(e){var a=n.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=b(e.components);return n.a.createElement(m.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=b(t),u=r,d=p["".concat(i,".").concat(u)]||p[u]||l[u]||c;return t?n.a.createElement(d,o(o({ref:a},m),{},{components:t})):n.a.createElement(d,o({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<c;m++)i[m]=t[m];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);