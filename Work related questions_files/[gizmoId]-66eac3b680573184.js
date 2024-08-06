(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{85250:function(e,t,n){"use strict";n.r(t),n.d(t,{GizmoChatWithRedirect:function(){return y},__N_SSP:function(){return z},default:function(){return b}});var r=n(97410),i=n(90360),s=n(98443),o=n(96314),l=n(67655),a=n(27221),c=n(90936),u=n(63738),d=n(47480),g=n(44575),f=n(32307),x=n.n(f),h=n(92379),m=n(62984),j=n(651);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var z=!0;function b(e){let t=(0,f.useRouter)().query.gizmoId;switch(e.kind){case"anon_gizmo":return(0,j.jsx)(s.X,{gizmo:e.gizmo},t);case"chat_page":return(0,h.createElement)(y,v(v({},e),{},{key:t,gizmoId:t}))}}function y(e){let{data:t,error:n}=(0,o.b9)(e.gizmoId),r=(0,g.t)(),s=null==r?void 0:r.canInteractWithGizmos();return((0,h.useEffect)(()=>{null==t&&null!=n&&x().push((0,d.M5)(d.LT.GIZMO_NOT_FOUND))},[t,n]),null!=n&&s)?(0,j.jsx)(O,{}):!1===s?(0,j.jsx)(Z,{gizmo:t}):(0,h.createElement)(i.ZP,v(v({},e),{},{key:e.gizmoId}))}function O(){return(0,j.jsx)(a.Z,{children:(0,j.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[(0,j.jsx)("div",{className:"font-bold",children:(0,j.jsx)(m.Z,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),(0,j.jsx)(m.Z,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function Z(e){let{gizmo:t}=e;return(0,j.jsx)(a.Z,{children:(0,j.jsx)(l.r,{gizmo:t,children:(0,j.jsxs)("div",{className:"mt-7 flex flex-col gap-4",children:[(0,j.jsx)(c.p,{onClick:()=>(0,u.MG)("Gizmo page upsell button"),children:(0,j.jsx)(m.Z,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),(0,j.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,j.jsx)(m.Z,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}},98443:function(e,t,n){"use strict";n.d(t,{S:function(){return v},X:function(){return p}});var r=n(13300),i=n(96314),s=n(67719),o=n(48454),l=n(90681),a=n(19841),c=n(75179),u=n.n(c),d=n(92379),g=n(62984),f=n(9519),x=n(67655),h=n(63611),m=n(90936),j=n(651);function p(e){var t;let{gizmo:n}=e,r=(0,i.i6)(n),{0:a,1:c}=(0,d.useState)(!1),u=null===(t=(0,l.sB)("1855896025"))||void 0===t?void 0:t.value,f=(0,o.b)();return(0,j.jsxs)("div",{className:"flex h-full flex-col",children:[(0,j.jsx)(s.N,{gizmo:n}),(0,j.jsx)(v,{redirectUrl:r}),(0,j.jsxs)("div",{className:"flex grow flex-col items-center justify-center p-2",children:[(0,j.jsx)(x.r,{gizmo:n,isAnon:!0,children:(0,j.jsxs)("div",{className:"mt-7 flex flex-col items-center gap-4",children:[(0,j.jsx)(m.p,{onClick:()=>f({callbackUrl:r}),children:(0,j.jsx)(g.Z,{id:"gizmo.anonLandingPage.login",defaultMessage:"Sign up to chat"})}),(0,j.jsxs)("div",{className:"flex gap-2 whitespace-nowrap text-sm text-token-text-tertiary",children:[(0,j.jsx)("div",{children:(0,j.jsx)(g.Z,{id:"gizmo.anonLandingPage.loginSubtext",defaultMessage:"Sign up or Log in to chat"})}),u&&(0,j.jsxs)(j.Fragment,{children:["|",(0,j.jsx)("div",{onClick:()=>c(!0),className:"cursor-pointer",children:(0,j.jsx)(g.Z,{id:"gizmo.anonLandingPage.report",defaultMessage:"Report illegal content"})})]})]})]})}),a&&(0,j.jsx)(h.W,{onClose:()=>c(!1),gizmoId:n.gizmo.id})]})]})}function v(e){let{redirectUrl:t,className:n}=e,r=(0,o.b)();return(0,j.jsxs)("div",{className:(0,a.default)("flex items-center justify-between px-7 py-4",n),children:[(0,j.jsx)(z,{}),(0,j.jsx)(f.z,{color:"primary",onClick:()=>r({callbackUrl:t}),children:(0,j.jsx)(g.Z,{id:"gizmo.anonLandingPage.signup",defaultMessage:"Sign up"})})]})}function z(){return(0,j.jsx)(u(),{href:"/",children:(0,j.jsx)(r.nI,{className:"h-8 w-8"})})}},63611:function(e,t,n){"use strict";n.d(t,{W:function(){return h},i:function(){return m}});var r=n(34608),i=n(96314),s=n(94867),o=n(33185),l=n(90681),a=n(92379),c=n(75172),u=n(62984),d=n(32863),g=n(27697),f=n(98778),x=n(651);function h(e){let{gizmoId:t,onClose:n}=e,{data:s}=(0,i.b9)(t),{data:l}=(0,o.sQ)(r.CD.Gizmo),a=(0,c.Z)(),u=(0,o.gm)(a,t,r.CD.Gizmo);if(null==l)return null;let d=null!=s?"Report ".concat(s.gizmo.display.name):"Report";return(0,x.jsx)(f.UM,{reasons:l.reasons,submitReport:u,title:d,onClose:n,header:l.header,subHeader:l.header_explanation})}function m(e){var t,n,r;let{gizmoId:i,clientThreadId:o,onClose:m}=e,j=(0,c.Z)(),p=null===(t=(0,l.sB)("1855896025"))||void 0===t?void 0:t.value,v=null===(n=(0,l.sB)("3376455464"))||void 0===n?void 0:n.value,z=(0,s.XK)(o),b=null===(r=(0,l.sB)("90459671"))||void 0===r?void 0:r.value,{0:y,1:O}=(0,a.useState)();return p&&v&&"gpt"!==y&&b&&null!=z?"conversation"===y?(0,x.jsx)(g.E,{serverThreadId:z,onClose:m}):(0,x.jsxs)(d.Z,{title:j.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:m,isOpen:!0,showCloseButton:!0,type:"success",children:[(0,x.jsx)(f.Rh,{header:j.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),(0,x.jsxs)(f._4,{children:[(0,x.jsx)(f.Ag,{onClick:e=>{e.preventDefault(),O("conversation")},children:(0,x.jsx)(u.Z,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),(0,x.jsx)(f.Ag,{onClick:e=>{e.preventDefault(),O("gpt")},children:(0,x.jsx)(u.Z,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]}):(0,x.jsx)(h,{gizmoId:i,onClose:m})}},27221:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(27486),i=n(28098),s=n(31973),o=n(32307),l=n.n(o),a=n(55743),c=n(28828),u=n(7507),d=n(651);function g(e){let{children:t,header:n}=e;return(0,d.jsxs)(i.Z,{mobileHeaderRightContent:null,sidebar:(0,d.jsxs)(s.ZP,{navHeader:(0,d.jsx)(a.$,{className:"flex h-14 items-center",onNewThread:()=>l().push("/"),historyDisabled:!1}),children:[(0,d.jsx)(u.Dy,{}),(0,d.jsx)(r.Z,{activeId:void 0})]}),children:[n,(0,d.jsx)(c.Z,{children:t})]})}},96414:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/[gizmoId]",function(){return n(85250)}])}},function(e){e.O(0,[2205,4198,9169,4089,5182,7751,5592,8500,1612,3183,2349,444,2155,4984,3950,3300,737,3280,6879,6332,1810,3738,1148,5074,7017,3658,5825,1596,8900,2888,9774,179],function(){return e(e.s=96414)}),_N_E=e.O()}]);
//# sourceMappingURL=[gizmoId]-66eac3b680573184.js.map