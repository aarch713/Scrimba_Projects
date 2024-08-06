"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3280],{30331:function(e,t,r){var n;r.d(t,{j:function(){return a}});let a=((n={}).Starter="starter",n.Reply="reply",n)},7297:function(e,t,r){r.d(t,{B0:function(){return b},EF:function(){return x},Yt:function(){return j},k$:function(){return g},m0:function(){return S},zf:function(){return k}});var n,a,l=r(15316),o=r(19841),i=r(11490),s=r.n(i),c=r(15478),u=r(44575),d=r(25968),p=r(13300),h=r(28828),m=r(48198),f=r(30764),v=r(651);let g=e=>{let{iconName:t,className:r,notice:n,size:a="medium"}=e,l=p.nI;return"user"===t&&(l=m.tBG),(0,v.jsxs)(C,{className:(0,o.default)(r,w[a]),children:[(0,v.jsx)(l,{className:y[a]}),n&&("warning"===n||"danger"===n)&&(0,v.jsx)(E,{$type:n,children:"!"})]})},w={small:"h-[18px] w-[18px]",gizmo:"h-8 w-8",gizmoConversation:"h-6 w-6",medium:"h-8 w-8",workspaceMedium:"h-9 w-9",large:"h-12 w-12",workspaceAvatarPreview:"h-24 w-24",cover:"h-[234px] w-[234px]"},x={small:18,gizmo:32,gizmoConversation:24,medium:32,workspaceMedium:36,large:48,workspaceAvatarPreview:96,cover:234},y={small:"icon-xs",medium:"icon-md",workspaceMedium:"icon-md",large:"icon-lg",workspaceAvatarPreview:"icon-workspace-avatar-preview",cover:"icon-cover",gizmo:"icon-md",gizmoConversation:"icon-sm"},j=e=>{var t,r;let{user:n,notice:a}=e,l=a&&("warning"===a||"danger"===a)&&(0,v.jsx)(E,{$type:a,children:"!"});if(null!=n&&n.picture)return(0,v.jsxs)("div",{className:(0,o.default)("relative flex",e.customStyle?e.className:""),children:[(0,v.jsx)(s(),{src:n.picture,alt:"User",width:e.customStyle?e.size:x[e.size],height:e.customStyle?e.size:x[e.size],className:e.customStyle?"":null!==(r=e.roundedStyle)&&void 0!==r?r:"rounded-sm",referrerPolicy:"no-referrer",unoptimized:!0}),l]});let i=(null!==(t=null==n?void 0:n.name)&&void 0!==t?t:"").split(" ").map(e=>e[0]).join("");return(0,v.jsx)("div",{className:"overflow-hidden rounded-full",style:e.customStyle?{width:e.size,height:e.size}:{width:x[e.size],height:x[e.size]},children:(0,v.jsxs)("div",{className:(0,o.default)("relative flex items-center justify-center bg-blue-300 text-white",e.customStyle?e.className:(0,o.default)("gizmo"===e.size?"h-7 w-7 overflow-hidden rounded-full text-xs":"h-full w-full","small"===e.size||"gizmo"===e.size||"gizmoConversation"===e.size?"text-xs":"text-sm")),children:[i?(0,v.jsx)("div",{className:"indent-[0.1em] tracking-widest",children:i}):(0,v.jsx)(m.tBG,{className:e.customStyle?"h-4/5 w-4/5":y[e.size]}),l]})})};function b(e){let{src:t,size:r="large",alt:n}=e;return(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)(s(),{src:t,className:"inline rounded-full bg-token-main-surface-secondary",alt:null!=n?n:"",width:x[r],height:x[r]}):(0,v.jsx)(p.Wv,{width:x[r].toString(),height:x[r].toString()})})}function k(e){var t,r;let{className:n,iconSize:a="medium",notice:l,workspace:i}=e,s=(0,u.t)();null!==(t=i)&&void 0!==t||(i=s);let c=null===(r=i)||void 0===r?void 0:r.isPersonalAccount(),p=(0,d.aF)();return(0,v.jsx)(h.Z,{children:(0,v.jsx)("div",{className:(0,o.default)("flex items-center justify-center overflow-hidden rounded-full",n),children:!i||c&&void 0!==p?(0,v.jsx)(j,{user:p,size:a,notice:l}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{src:i.data.profilePictureUrl,size:a}),l&&(0,v.jsx)(E,{$type:l,children:"!"})]})})})}let O=c.Z.div(n||(n=(0,l.Z)(["relative p-1 rounded-sm h-9 w-9 flex items-center justify-center"]))),C=e=>{let{className:t,children:r}=e;return(0,v.jsx)(O,{className:t,children:r})},E=c.Z.span(a||(a=(0,l.Z)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ","\n  ","\n"])),e=>{let{$type:t}=e;return"warning"===t&&"bg-orange-500 text-white"},e=>{let{$type:t}=e;return"danger"===t&&"bg-red-500 text-white"});function S(e){let{name:t,size:r,className:n,initialsCount:a=1}=e,l="";return l=1===a?t.charAt(0):t.split(" ").slice(0,2).map(e=>e[0]).join(""),(0,v.jsx)("div",{className:(0,o.default)("overflow-hidden rounded-full pt-[4.5px] text-center text-[9px] font-extralight text-white",n),style:{backgroundColor:function(e){let t=0;for(let r=0;r<e.length;r++)t=(t<<5)+t^e.charCodeAt(r);return f.e_[Math.abs(t)%f.e_.length]}(t),width:x[r]+"px",height:x[r]+"px"},children:l})}},26978:function(e,t,r){r.d(t,{Dz:function(){return i},Rp:function(){return s},Yf:function(){return o}});var n=r(19841),a=r(48198),l=r(651);function o(e){let{className:t}=e;return(0,l.jsx)(a.ob9,{className:(0,n.default)(t,"rtl:-scale-x-100")})}function i(e){let{className:t}=e;return(0,l.jsx)(a.Y1T,{className:(0,n.default)(t,"rtl:-scale-x-100")})}function s(e){let{className:t}=e;return(0,l.jsx)(a.Y4O,{className:(0,n.default)(t,"rtl:-scale-x-100")})}},28828:function(e,t,r){var n=r(47453),a=r.n(n);r(92379);var l=r(651);let o=e=>{let{children:t}=e;return(0,l.jsx)(l.Fragment,{children:t})};t.Z=a()(()=>Promise.resolve(o),{ssr:!1})},35895:function(e,t,r){r.d(t,{B:function(){return o},X:function(){return l}});var n=r(88628),a=r(56323);let l=e=>(0,a.r3)([n.OL.GizmoMagicCreate,n.OL.GizmoTest],null==e?void 0:e.kind),o=e=>(0,a.r3)([n.OL.GizmoInteraction,n.OL.GizmoMagicCreate,n.OL.GizmoTest],null==e?void 0:e.kind)},59823:function(e,t,r){r.d(t,{D:function(){return a},Q:function(){return l}});var n=r(92379);let a=n.createContext({mode:void 0,getGizmoId:void 0}),l=()=>(0,n.useContext)(a)},392:function(e,t,r){r.d(t,{Rq:function(){return C},fZ:function(){return E}});var n,a=r(15316),l=r(97410),o=r(63551),i=r(94867),s=r(81743),c=r(63153),u=r(92379),d=r(15478),p=r(88600),h=r(9519),m=r(19841),f=r(30764),v=r(651);let g={opacity:0,y:20,scale:.9},w={opacity:1,y:0,scale:1},x={opacity:0,scale:.5,transition:{duration:.2}},y=e=>{let{suggestions:t,onSelectingSuggestedReply:r}=e;return(0,v.jsx)("div",{className:"absolute bottom-full mb-4 flex max-w-[100vw] grow justify-center gap-2 overflow-auto px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none md:overflow-visible",children:t.slice(0,2).map((e,n)=>(0,v.jsx)(p.E.div,{initial:g,animate:w,transition:{delay:(n-1)*.1},exit:x,children:(0,v.jsx)(h.z,{as:"button",color:"secondary",size:"small",onClick:()=>{r(e,t,n)},className:"group whitespace-nowrap md:whitespace-normal",children:(0,v.jsx)(b,{suggestion:e})},n)},n))})};function j(e){let{suggestions:t,onSelectingSuggestedReply:r,clientThreadId:n}=e,a=(null==t?void 0:t.length)>0;return((0,u.useEffect)(()=>{a&&(0,c.SB)(t,n)},[a,n]),a)?t.every(c.Gb)?(0,v.jsx)(p.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,v.jsx)(f.pF,{starterPrompts:t,onSelectStarterPrompt:r})}):t.every(c.QO)?(0,v.jsx)(y,{suggestions:t,onSelectingSuggestedReply:r}):null:null}function b(e){let{suggestion:t}=e;return(0,c.QO)(t)?(0,v.jsx)(v.Fragment,{children:t.text}):(0,c.Gb)(t)?(0,v.jsxs)("div",{className:"flex flex-col overflow-hidden",children:[t.title&&(0,v.jsx)("div",{className:"truncate font-semibold",children:t.title}),(0,v.jsx)("div",{className:(0,m.default)("truncate font-normal",t.title?"opacity-50":""),children:t.body})]}):null}var k=r(40894);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(){let{store:e}=(0,o.l)(),t=e.useSharedProps();return t?(0,v.jsx)(S,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,l.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t)):null}function E(){let{store:e}=(0,o.l)(),t=e.useSharedProps();return(0,u.useCallback)(async(e,r,n)=>{if(!t)return;let{clientThreadId:a,currentLeafId:l,onCreateNewCompletion:o,onResetState:u,conversationMode:d}=t;s.vm.hideThreadHeader();let p="".concat(l,"-nextPrompt");await o({promptId:p,content:(0,c.bf)(e),eventMetadata:{eventSource:"mouse"},completionMetadata:{suggestions:r,conversationMode:null!=d?d:i.iN.getConversationMode(a)},messageMetadata:{is_starter_prompt:!0,suggestion_type:e.type}});let h=i.tQ.getTree(a).getMessageId(p);u(),(0,c.wj)(e,n,h),(0,k.go)()},[t])}function S(e){let{clientThreadId:t,suggestions:r}=e,n=E();return void 0===r||0===r.length?null:(0,v.jsx)("div",{children:(0,v.jsx)(P,{children:(0,v.jsx)("div",{className:"grow",children:void 0!==r&&(0,v.jsx)(j,{suggestions:r,onSelectingSuggestedReply:n,clientThreadId:t})})})})}let P=d.Z.div(n||(n=(0,a.Z)(["h-full flex ml-1 md:w-full md:m-auto gap-0 md:gap-2 justify-center"])))},63551:function(e,t,r){r.d(t,{b:function(){return i},l:function(){return s}});var n=r(61085),a=r(92379),l=r(651);let o=(0,a.createContext)(null);function i(e){let{children:t}=e;return(0,l.jsx)(o.Provider,{value:{store:(0,a.useRef)((0,n.rd)()).current},children:t})}function s(){let e=(0,a.useContext)(o);if(!e)throw Error("usePromptTextareaContext must be used within a PromptTextareaProvider");return e}},61085:function(e,t,r){r.d(t,{Tk:function(){return u},cq:function(){return d},j9:function(){return p},rd:function(){return m}});var n,a,l,o=r(92379),i=r(68810),s=r(73177),c=r(95267);let u=((n={}).Header="Header",n.HeaderTop="HeaderTop",n.HeaderBottom="HeaderBottom",n),d=((a={}).Box="Box",a.ItemActions="ItemActions",a.PromptTextareaAction="PromptTextareaAction",a.BannerTermsDisclaimer="BannerTermsDisclaimer",a.BannerSignup="BannerSignup",a.BannersRateLimit="BannersRateLimit",a.BannerSidekickAnnouncement="BannerSidekickAnnouncement",a.BannerMemoryFull="BannerMemoryFull",a.ParagenControls="ParagenControls",a),p=((l={}).DallePromptControls="DallePromptControls",l),h={contentAreas:{[u.Header]:{dimensions:null,contentId:null},[u.HeaderTop]:{dimensions:null,contentId:null},[u.HeaderBottom]:{dimensions:null,contentId:null}},sharedProps:null};function m(){let e=(0,i.Ue)((0,s.XR)((0,c.n)(()=>h)));function t(t,r){e.setState(e=>{e.contentAreas[t].dimensions=r})}return{reset:()=>e.setState(h),useContentAreaId:t=>e(e=>e.contentAreas[t].contentId),useContentAreaApi:t=>({set:(0,o.useCallback)(r=>e.setState(e=>{e.contentAreas[t].contentId=r}),[t]),remove:(0,o.useCallback)(()=>{e.setState(e=>{e.contentAreas[t].contentId=null})},[t])}),useContentAreaDimensions:(t,r)=>e(e=>r(e.contentAreas[t].dimensions)),useContentAreaResizeObserver(e,r){(0,o.useEffect)(()=>{if(r.current){t(e,r.current.getBoundingClientRect());let n=new ResizeObserver(r=>{for(let n of r)t(e,n.contentRect)});return n.observe(r.current),()=>{n.disconnect(),t(e,null)}}},[r,e])},useIsHeaderContentAreaPopulated:()=>e(e=>!!e.contentAreas[u.HeaderTop].contentId||!!e.contentAreas[u.HeaderBottom].contentId),useSharedProps:t=>e(e=>t?t(e.sharedProps):e.sharedProps),useSetSharedProps:()=>(0,o.useCallback)(t=>{e.setState(e=>{e.sharedProps=t})},[])}}},40894:function(e,t,r){r.d(t,{N:function(){return o},go:function(){return l},hB:function(){return a}});var n=r(20689);let a="prompt-textarea";function l(){var e;null===(e=document.getElementById(a))||void 0===e||e.focus()}let o={getAndReset:(e,t)=>{let r=n.m.getItem(n.F.RestoreMessageAfterOauthRedirect);return(n.m.removeItem(n.F.RestoreMessageAfterOauthRedirect),!r||r.userId!==e||t!==r.serverThreadId||Date.now()>r.expiresAt)?null:r},set:(e,t,r)=>{let a={userId:e,serverThreadId:t,inputText:r,expiresAt:Date.now()+6e4};n.m.setItem(n.F.RestoreMessageAfterOauthRedirect,a)}}},30764:function(e,t,r){r.d(t,{e_:function(){return eW},ch:function(){return eI},pF:function(){return eG},cS:function(){return eF}});var n,a,l,o,i,s,c,u,d,p,h,m,f,v,g,w,x,y,j,b,k,O,C,E,S,P,M,z,A,L,B,R,N,_,I,H=r(97410),T=r(27781),W=r(392),D=r(19297),Z=r(29840),F=r(94867),G=r(73333),Q=r(26693),q=r(63153),V=r(19841),U=r(21389),Y=r(88600),$=r(92379),K=r(62984),X=r(13300);function J(){return(J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var ee=e=>$.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),n||(n=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m9.65 13.026-3.287 1.19A2 2 0 0 1 3.8 13.027l-.342-.934.597-1.275L1.75 7.419l2.348-.85 2.564 1.484a2 2 0 0 0 1.689.15l8.512-3.083c.291-.106.603-.142.912-.107l2.833.325a1.842 1.842 0 0 1 .422 3.565l-5.276 1.911m.598-1.275L13 14.5l-2.817 1.02-.343-3.622"})),a||(a=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,d:"M3 19h18"})));function et(){return(et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var er=e=>$.createElement("svg",et({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),l||(l=$.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.997 3.39A2.5 2.5 0 0 1 17.2 2.103l2.203.882a2.5 2.5 0 0 1 1.342 3.369L19.063 10H20a1 1 0 0 1 1 1v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a1 1 0 0 1 .992-1l-.149-.101-.03-.022c-1.254-.924-1.016-2.864.425-3.458l2.12-.874.724-2.176c.492-1.479 2.41-1.851 3.42-.665L11.99 4.45l1.521.01zm1.513 1.506a2 2 0 0 1 .461 2.618l-1.144 1.861v.045a1.3 1.3 0 0 0 .044.278 1 1 0 0 1 .047.302h1.942l2.07-4.485a.5.5 0 0 0-.268-.673l-2.203-.882a.5.5 0 0 0-.641.258zM12.889 10a3.3 3.3 0 0 1-.06-.499c-.01-.236-.004-.69.237-1.081l1.202-1.954-2.293-.016a2 2 0 0 1-1.51-.704L8.98 4l-.725 2.176A2 2 0 0 1 7.12 7.394L5 8.267l2.063 1.407c.129.087.23.2.303.326zM5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7zm4.5 2.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1",clipRule:"evenodd"})));function en(){return(en=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var ea=e=>$.createElement("svg",en({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),o||(o=$.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.75 5.079C20.637 5.63 22 7.394 22 9.463a4.6 4.6 0 0 1-.765 2.545A4.6 4.6 0 0 1 22 14.553a4.57 4.57 0 0 1-2.351 4.01c-.638 1.776-1.947 2.937-3.509 3.31-1.395.332-2.89.011-4.14-.91-1.25.921-2.745 1.242-4.14.91-1.562-.373-2.871-1.534-3.509-3.31A4.57 4.57 0 0 1 2 14.552c0-.94.281-1.817.764-2.545A4.6 4.6 0 0 1 2 9.463C2 7.394 3.363 5.63 5.25 5.08c.172-.733.48-1.357.915-1.856a3.55 3.55 0 0 1 2.125-1.17c1.263-.208 2.614.198 3.71 1.002 1.096-.804 2.447-1.21 3.71-1.001a3.55 3.55 0 0 1 2.125 1.17c.435.497.743 1.122.915 1.855M11 4.81c-.769-.64-1.684-.898-2.385-.783-.378.063-.697.23-.944.513-.25.286-.478.751-.556 1.487a1 1 0 0 1-.885.888C4.99 7.051 4 8.128 4 9.463c0 .723.29 1.372.757 1.837a1 1 0 0 1 0 1.416A2.58 2.58 0 0 0 4 14.553c0 1.08.65 1.995 1.558 2.374a1 1 0 0 1 .578.653c.392 1.396 1.273 2.129 2.188 2.347.835.2 1.82-.002 2.676-.72zm2 14.396c.856.72 1.84.92 2.676.721.915-.218 1.796-.951 2.188-2.347a1 1 0 0 1 .578-.653A2.56 2.56 0 0 0 20 14.553c0-.724-.29-1.372-.757-1.837a1 1 0 0 1 0-1.416A2.58 2.58 0 0 0 20 9.463c0-1.335-.99-2.412-2.23-2.548a1 1 0 0 1-.885-.888c-.078-.736-.306-1.2-.556-1.487a1.55 1.55 0 0 0-.944-.513c-.701-.116-1.616.142-2.385.783z",clipRule:"evenodd"})));function el(){return(el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var eo=e=>$.createElement("svg",el({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),i||(i=$.createElement("path",{stroke:"currentColor",strokeWidth:2,d:"M3 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v7H5a2 2 0 0 1-2-2zM9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v13H9zM15 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4z"})));function ei(){return(ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var es=e=>$.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),s||(s=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 16.584a5.001 5.001 0 0 1 1.326-9.539A6 6 0 0 1 18 9a4 4 0 0 1 2.5 7.123M9.25 16l-2.5 5M13.25 16l-2.5 5M17.25 16l-2.5 5"})));function ec(){return(ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var eu=e=>$.createElement("svg",ec({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),c||(c=$.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm1.293 4.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L8.586 12l-1.293-1.293a1 1 0 0 1 0-1.414M12 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1",clipRule:"evenodd"})));function ed(){return(ed=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var ep=e=>$.createElement("svg",ed({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),u||(u=$.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.455 4.105a1 1 0 0 0-.91 0L1.987 8.982 1.077 7.2l9.56-4.877a3 3 0 0 1 2.726 0l9.56 4.877A1.98 1.98 0 0 1 24 9.22V15a1 1 0 1 1-2 0v-3.784l-2.033.995v4.094a3 3 0 0 1-1.578 2.642l-4.967 2.673a3 3 0 0 1-2.844 0l-4.967-2.673a3 3 0 0 1-1.578-2.642v-4.094l-2.927-1.433C-.374 10.053-.39 7.949 1.077 7.2l.91 1.782 9.573 4.689a1 1 0 0 0 .88 0L22 8.989v-.014zM6.033 13.19v3.114a1 1 0 0 0 .526.88l4.967 2.674a1 1 0 0 0 .948 0l4.967-2.673a1 1 0 0 0 .526-.88V13.19l-4.647 2.276a3 3 0 0 1-2.64 0z",clipRule:"evenodd"})));function eh(){return(eh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var em=e=>$.createElement("svg",eh({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),d||(d=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m4.5 17.5 3.069-3.118a2 2 0 0 1 2.783-.066L16.5 20"})),p||(p=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 12h-.62a3 3 0 0 1-2.278-1.048l-4.204-4.904A3 3 0 0 0 9.62 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"})),h||(h=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 5h-.62a3 3 0 0 0-2.278 1.048L14 8.5"})),m||(m=$.createElement("circle",{cx:8.5,cy:9.5,r:1.5,fill:"currentColor"})),f||(f=$.createElement("path",{fill:"currentColor",d:"M18 14v-4a.5.5 0 0 1 .8-.4l2.667 2a.5.5 0 0 1 0 .8l-2.667 2a.5.5 0 0 1-.8-.4M18 7V3a.5.5 0 0 1 .8-.4l2.667 2a.5.5 0 0 1 0 .8l-2.667 2A.5.5 0 0 1 18 7"})));function ef(){return(ef=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var ev=e=>$.createElement("svg",ef({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),v||(v=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19a3 3 0 1 1-6 0M15.865 16A7.54 7.54 0 0 0 19.5 9.538C19.5 5.375 16.142 2 12 2S4.5 5.375 4.5 9.538A7.54 7.54 0 0 0 8.135 16m7.73 0h-7.73m7.73 0v3h-7.73v-3"})));function eg(){return(eg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var ew=e=>$.createElement("svg",eg({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),g||(g=$.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 9.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",clipRule:"evenodd"})),w||(w=$.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.426 22.655c-.27.127-.583.126-.852 0l-.114-.056-.29-.148A22.824 22.824 0 0 1 7.1 19.698C4.906 17.826 2.5 14.948 2.5 11.25a9.5 9.5 0 1 1 19 0c0 3.697-2.406 6.576-4.601 8.448a22.8 22.8 0 0 1-4.069 2.753q-.2.106-.404.204M4.5 11.25a7.5 7.5 0 1 1 15 0c0 2.803-1.844 5.174-3.899 6.927A21 21 0 0 1 12 20.627a20.82 20.82 0 0 1-3.601-2.45C6.344 16.424 4.5 14.053 4.5 11.25",clipRule:"evenodd"})));function ex(){return(ex=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var ey=e=>$.createElement("svg",ex({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),x||(x=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.5 14v3"})),y||(y=$.createElement("rect",{width:14,height:18,x:5,y:3,stroke:"currentColor",strokeWidth:2,rx:2})),j||(j=$.createElement("circle",{cx:8.5,cy:14,r:1,fill:"currentColor"})),b||(b=$.createElement("circle",{cx:8.5,cy:17,r:1,fill:"currentColor"})),k||(k=$.createElement("circle",{cx:12,cy:17,r:1,fill:"currentColor"})),O||(O=$.createElement("circle",{cx:12,cy:14,r:1,fill:"currentColor"})),C||(C=$.createElement("circle",{cx:8.5,cy:11,r:1,fill:"currentColor"})),E||(E=$.createElement("circle",{cx:12,cy:11,r:1,fill:"currentColor"})),S||(S=$.createElement("circle",{cx:15.5,cy:11,r:1,fill:"currentColor"})));function ej(){return(ej=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var eb=e=>$.createElement("svg",ej({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),P||(P=$.createElement("circle",{cx:12,cy:10.5,r:7.5,stroke:"currentColor",strokeWidth:2})),M||(M=$.createElement("path",{stroke:"currentColor",strokeLinejoin:"round",strokeWidth:2,d:"M8 17v5l4-1 4 1v-5"})));function ek(){return(ek=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var eO=e=>$.createElement("svg",ek({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),z||(z=$.createElement("path",{stroke:"currentColor",strokeWidth:2,d:"M17 8h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m0 0H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2Z"})),A||(A=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 10h6M7 13h3"})));function eC(){return(eC=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var eE=e=>$.createElement("svg",eC({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),L||(L=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,d:"M6 5H5a2 2 0 0 0-2 2v1m15-3h1a2 2 0 0 1 2 2v1m0 8v1a2 2 0 0 1-2 2h-1M6 19H5a2 2 0 0 1-2-2v-1M8 10h8M8 14h6"})));function eS(){return(eS=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var eP=e=>$.createElement("svg",eS({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),B||(B=$.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.75 4.25a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.031 4.03a1 1 0 0 1-1.414 1.415l-4.031-4.031A8.5 8.5 0 0 1 2.25 10.75",clipRule:"evenodd"})));function eM(){return(eM=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var ez=e=>$.createElement("svg",eM({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),R||(R=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 18V7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"})),N||(N=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4"})));function eA(){return(eA=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var eL=e=>$.createElement("svg",eA({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),_||(_=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,d:"M3 6h7M3 10h4"})),I||(I=$.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.428 17.572 20.5 10.5a2.828 2.828 0 1 0-4-4l-7.072 7.072a2 2 0 0 0-.547 1.022L8 19l4.406-.881a2 2 0 0 0 1.022-.547"}))),eB=r(651);let eR=["promptStarters","onSelectStarterPrompt","isSendBlocked","clientThreadId"];function eN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function e_(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eN(Object(r),!0).forEach(function(t){(0,H.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eN(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function eI(e){let{clientThreadId:t}=e,{isUnauthenticated:r}=(0,G.u)(),n=!r,a=(0,F.Zz)(t),l=(0,F.Kt)(t),o=(0,Z.ep)(),i=(0,Q.BL)(),s=(0,W.fZ)(),{promptStarters:c,isSuccess:u,isError:d}=(0,D.P)(a&&!l,t,i?2:4),p=c&&(null==c?void 0:c.length)>0,h=u&&p&&n;return(0,eB.jsx)(eB.Fragment,{children:(0,eB.jsx)(U.M,{children:(d||u)&&(0,eB.jsxs)(eB.Fragment,{children:[(0,eB.jsx)(X.nI,{className:"h-12 w-12 max-sm:mb-48 max-xs:mb-60"}),h&&(0,eB.jsx)(eT,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},promptStarters:c,onSelectStarterPrompt:s,isSendBlocked:o,clientThreadId:t}),!p&&n&&(0,eB.jsx)(eH,{}),d&&n&&(0,eB.jsx)(eH,{})]})})})}function eH(){return(0,eB.jsx)("div",{className:"mt-7 text-3xl",children:(0,eB.jsx)(K.Z,{id:"24tuqq",defaultMessage:"Hi, how can I help?"})})}function eT(e){let{promptStarters:t,onSelectStarterPrompt:r,isSendBlocked:n,clientThreadId:a}=e,l=(0,T.Z)(e,eR);return(0,$.useEffect)(()=>{(0,q.SB)(t,a)},[a]),(0,eB.jsx)(Y.E.div,e_(e_({},l),{},{children:(0,eB.jsx)(eF,{starterPrompts:t,onSelectStarterPrompt:r,disabled:n})}))}let eW=["#cb8bd0","#e2c541","#ed6262","#76d0eb"];function eD(e){let{starterPrompt:t}=e;if(null==t.category)return null;let r=function(e){switch(e){case"genius":return ea;case"idea":default:return ev;case"data-vis":return eo;case"code":return eu;case"dalle":return em;case"local":return ew;case"math":return ey;case"misc":return er;case"news":return eO;case"teach-or-explain":return ep;case"read-or-analyze":return eE;case"rank-or-rate":return eb;case"current-event":return eP;case"shop":return ez;case"travel":return ee;case"weather":return es;case"write":return eL}}(t.category);return(0,eB.jsx)(r,{className:"icon-md",style:{color:function(e){switch(e){case"write":case"shop":return eW[0];case"idea":case"travel":return eW[1];case"code":return eW[2];default:return eW[3]}}(t.category)}})}let eZ=/\s/;function eF(e){let{starterPrompts:t,onSelectStarterPrompt:r,disabled:n}=e,a=t.map((e,a)=>{var l,o;let i=null!==(l=e.oneliner)&&void 0!==l?l:e.title;""===i&&(i=e.body);let s=eZ.test(i);return(0,eB.jsxs)("button",{className:"relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",disabled:n,onClick:()=>r(e,t,a),children:[(0,eB.jsx)(eD,{starterPrompt:e}),(0,eB.jsx)("div",{className:(0,V.default)("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500",s?"break-word":"break-all"),children:i})]},null!==(o=e.id)&&void 0!==o?o:a)});if(a.length>2){let e=Math.floor(a.length/2);a=[a.slice(0,e),a.slice(e)].map((e,t)=>(0,eB.jsx)("div",{className:"flex max-w-3xl flex-wrap items-stretch justify-center gap-4",children:e},t))}return(0,eB.jsx)("div",{className:"mx-3 mt-12 flex max-w-3xl flex-wrap items-stretch justify-center gap-4",children:a})}function eG(e){let{starterPrompts:t,onSelectStarterPrompt:r,disabled:n}=e,a=t.map((e,a)=>{var l;return(0,eB.jsx)("button",{className:"relative whitespace-nowrap rounded-2xl border border-token-border-light px-4 py-2 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",disabled:n,onClick:()=>r(e,t,a),children:(0,eB.jsxs)("div",{className:"flex flex-col overflow-hidden",children:[e.title&&(0,eB.jsx)("div",{className:"truncate font-semibold",children:e.title}),(0,eB.jsx)("div",{className:(0,V.default)("truncate font-normal",e.title?"opacity-50":""),children:e.body})]})},null!==(l=e.id)&&void 0!==l?l:a)}),l=Math.floor(a.length/2);return a=[a.slice(0,l),a.slice(l)].map((e,t)=>(0,eB.jsx)("div",{className:"flex flex-col gap-2",children:e},t)),(0,eB.jsx)("div",{className:"grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2",children:a})}},19297:function(e,t,r){r.d(t,{O:function(){return h},P:function(){return m}});var n=r(88628),a=r(30331),l=r(44575),o=r(94867),i=r(84760),s=r(72988),c=r(35895),u=r(59823),d=r(96314),p=r(54344);function h(e){var t;return null===(t=(0,p.WQ)(e)?e.promptStarters:e.gizmo.display.prompt_starters)||void 0===t?void 0:t.map(e=>({type:a.j.Starter,title:"",body:e,prompt:e}))}function m(e,t,r){var p,m;let f=(0,l.hz)(),v=(0,o.WA)(t),g=(0,d.b9)((null==v?void 0:v.kind)===n.OL.GizmoInteraction?v.gizmo_id:void 0).data,{gizmoEditorData:w,mode:x}=(0,u.Q)(),y=(0,c.B)(v),j=(0,l.t)(),b=e&&!y&&!(null!=j&&j.isEnterpriseOrEdu()),{data:k,isLoading:O,isSuccess:C,isError:E}=(0,i.a)({queryKey:["promptStarters",t,r],queryFn:()=>s.Z.getSampledPromptStarter(r),enabled:b});return null==f?{promptStarters:[],isLoading:!0,isSuccess:!1}:"test"===x&&w?{promptStarters:null!==(m=h(w))&&void 0!==m?m:[],isLoading:!1,isSuccess:!0}:null!=g?{promptStarters:h(g),isLoading:!1,isSuccess:!0}:b?{promptStarters:null!==(p=null==k?void 0:k.items.map(e=>({type:a.j.Starter,id:e.id,title:e.title,body:e.description,prompt:e.prompt,category:e.category,oneliner:e.oneliner})))&&void 0!==p?p:[],isLoading:O,isSuccess:C,isError:E}:{promptStarters:[],isLoading:!1,isSuccess:!0}}},63153:function(e,t,r){r.d(t,{Gb:function(){return d},QO:function(){return u},SB:function(){return h},bf:function(){return c},wj:function(){return p}});var n=r(30331),a=r(94867),l=r(99140),o=r(66943),i=r(7569),s=r(90681);let c=e=>{switch(e.type){case n.j.Reply:return e.text;case n.j.Starter:return e.prompt}},u=e=>e.type===n.j.Reply,d=e=>e.type===n.j.Starter,p=(e,t,r)=>{switch(s.m9.logEvent("chatgpt_prompt_use_suggestion",c(e),{index:"".concat(t),type:e.type}),e.type){case n.j.Reply:l.A.logEvent(o.M.useSuggestedReply,{value:c(e),prompt_type:n.j.Reply,messageId:r});break;case n.j.Starter:l.A.logEvent(o.M.useStarterPrompt,{value:c(e),prompt_type:n.j.Starter,title:e.title,id:e.id,category:e.category,messageId:r})}},h=(e,t)=>{let r=a.tQ.getThreadCurrentLeafId(t),c=a.tQ.getTree(t).getMessageId(r);s.m9.logEvent("chatgpt_prompt_show_suggestions","count_".concat(e.length),{type:e[0].type}),e.every(u)?l.A.logEvent(o.M.showSuggestedReplies,{prompt_count:e.length,prompt_type:n.j.Reply,client_thread_id:t,suggestions:e.map(e=>e.text),message_id:c}):e.every(d)?l.A.logEvent(o.M.showStarterPrompts,{prompt_count:e.length,prompt_type:n.j.Starter,titles:e.map(e=>e.title),ids:e.map(e=>e.id),client_thread_id:t,message_id:c}):i.U.addError("Unhandled suggestion type",{type:e[0].type})}}}]);
//# sourceMappingURL=3280-8c4991038bd4316b.js.map