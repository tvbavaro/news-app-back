(self.webpackChunknews_app_back=self.webpackChunknews_app_back||[]).push([[5205],{25970:(b,E,i)=>{var s=i(63012),m=i(79095);function p(c,u){return s(c,u,function(x,T){return m(c,T)})}b.exports=p},92052:(b,E,i)=>{var s=i(42980),m=i(13218);function p(c,u,x,T,h,D){return m(c)&&m(u)&&(D.set(u,c),s(c,u,void 0,p,D),D.delete(u)),c}b.exports=p},66913:(b,E,i)=>{var s=i(96874),m=i(5976),p=i(92052),c=i(30236),u=m(function(x){return x.push(void 0,p),s(c,void 0,x)});b.exports=u},30236:(b,E,i)=>{var s=i(42980),m=i(21463),p=m(function(c,u,x,T){s(c,u,x,T)});b.exports=p},78718:(b,E,i)=>{var s=i(25970),m=i(99021),p=m(function(c,u){return c==null?{}:s(c,u)});b.exports=p},98601:(b,E,i)=>{var s=i(57406);function m(p,c){return p==null?!0:s(p,c)}b.exports=m},29558:(b,E,i)=>{"use strict";i.d(E,{Z:()=>pt});var s=i(50841),m=i(67294),p=i(74806),c=i(680),u=i(80361),x=i(25687),T=i(16284),h=i(88222),D=i(16143);function C(t,o){return Object.keys(t).reduce(function(r,e){return r[e]=(0,u.pi)({timeZone:o},t[e]),r},{})}function k(t,o){var r=Object.keys((0,u.pi)((0,u.pi)({},t),o));return r.reduce(function(e,n){return e[n]=(0,u.pi)((0,u.pi)({},t[n]||{}),o[n]||{}),e},{})}function N(t,o){if(!o)return t;var r=T.C.formats;return(0,u.pi)((0,u.pi)((0,u.pi)({},r),t),{date:k(C(r.date,o),C(t.date||{},o)),time:k(C(r.time,o),C(t.time||{},o))})}var g=function(t,o,r,e,n){var a=t.locale,l=t.formats,f=t.messages,v=t.defaultLocale,w=t.defaultFormats,y=t.fallbackOnEmptyString,M=t.onError,A=t.timeZone,V=t.defaultRichTextElements;r===void 0&&(r={id:""});var _=r.id,S=r.defaultMessage;(0,x.kG)(!!_,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var F=String(_),L=f&&Object.prototype.hasOwnProperty.call(f,F)&&f[F];if(Array.isArray(L)&&L.length===1&&L[0].type===D.wD.literal)return L[0].value;if(!e&&L&&typeof L=="string"&&!V)return L.replace(/'\{(.*?)\}'/gi,"{$1}");if(e=(0,u.pi)((0,u.pi)({},V),e||{}),l=N(l,A),w=N(w,A),!L){if(y===!1&&L==="")return L;if((!S||a&&a.toLowerCase()!==v.toLowerCase())&&M(new h.$6(r,a)),S)try{var B=o.getMessageFormat(S,v,w,n);return B.format(e)}catch(Z){return M(new h.X9('Error formatting default message for: "'.concat(F,'", rendering default message verbatim'),a,r,Z)),typeof S=="string"?S:F}return F}try{var B=o.getMessageFormat(L,a,l,(0,u.pi)({formatters:o},n||{}));return B.format(e)}catch(Z){M(new h.X9('Error formatting message: "'.concat(F,'", using ').concat(S?"default message":"id"," as fallback."),a,r,Z))}if(S)try{var B=o.getMessageFormat(S,v,w,n);return B.format(e)}catch(Z){M(new h.X9('Error formatting the default message for: "'.concat(F,'", rendering message verbatim'),a,r,Z))}return typeof L=="string"?L:typeof S=="string"?S:F},d=i(82644),O=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function I(t,o,r){var e=t.locale,n=t.formats,a=t.onError;r===void 0&&(r={});var l=r.format,f=l&&(0,d.TB)(n,"number",l,a)||{},v=(0,d.L6)(r,O,f);return o(e,v)}function P(t,o,r,e){e===void 0&&(e={});try{return I(t,o,e).format(r)}catch(n){t.onError(new h.Qe("Error formatting number.",t.locale,n))}return String(r)}function R(t,o,r,e){e===void 0&&(e={});try{return I(t,o,e).formatToParts(r)}catch(n){t.onError(new h.Qe("Error formatting number.",t.locale,n))}return[]}var j=i(11050),W=["numeric","style"];function Q(t,o,r){var e=t.locale,n=t.formats,a=t.onError;r===void 0&&(r={});var l=r.format,f=!!l&&(0,d.TB)(n,"relative",l,a)||{},v=(0,d.L6)(r,W,f);return o(e,v)}function U(t,o,r,e,n){n===void 0&&(n={}),e||(e="second");var a=Intl.RelativeTimeFormat;a||t.onError(new j.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,j.jK.MISSING_INTL_API));try{return Q(t,o,n).format(r,e)}catch(l){t.onError(new h.Qe("Error formatting relative time.",t.locale,l))}return String(r)}var G=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function K(t,o,r,e){var n=t.locale,a=t.formats,l=t.onError,f=t.timeZone;e===void 0&&(e={});var v=e.format,w=(0,u.pi)((0,u.pi)({},f&&{timeZone:f}),v&&(0,d.TB)(a,o,v,l)),y=(0,d.L6)(e,G,w);return o==="time"&&!y.hour&&!y.minute&&!y.second&&!y.timeStyle&&!y.dateStyle&&(y=(0,u.pi)((0,u.pi)({},y),{hour:"numeric",minute:"numeric"})),r(n,y)}function q(t,o){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var n=r[0],a=r[1],l=a===void 0?{}:a,f=typeof n=="string"?new Date(n||0):n;try{return K(t,"date",o,l).format(f)}catch(v){t.onError(new h.Qe("Error formatting date.",t.locale,v))}return String(f)}function tt(t,o){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var n=r[0],a=r[1],l=a===void 0?{}:a,f=typeof n=="string"?new Date(n||0):n;try{return K(t,"time",o,l).format(f)}catch(v){t.onError(new h.Qe("Error formatting time.",t.locale,v))}return String(f)}function et(t,o){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var n=r[0],a=r[1],l=r[2],f=l===void 0?{}:l,v=t.timeZone,w=t.locale,y=t.onError,M=(0,d.L6)(f,G,v?{timeZone:v}:{});try{return o(w,M).formatRange(n,a)}catch(A){y(new h.Qe("Error formatting date time range.",t.locale,A))}return String(n)}function rt(t,o){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var n=r[0],a=r[1],l=a===void 0?{}:a,f=typeof n=="string"?new Date(n||0):n;try{return K(t,"date",o,l).formatToParts(f)}catch(v){t.onError(new h.Qe("Error formatting date.",t.locale,v))}return[]}function at(t,o){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var n=r[0],a=r[1],l=a===void 0?{}:a,f=typeof n=="string"?new Date(n||0):n;try{return K(t,"time",o,l).formatToParts(f)}catch(v){t.onError(new h.Qe("Error formatting time.",t.locale,v))}return[]}var nt=["type"];function ot(t,o,r,e){var n=t.locale,a=t.onError;e===void 0&&(e={}),Intl.PluralRules||a(new j.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,j.jK.MISSING_INTL_API));var l=(0,d.L6)(e,nt);try{return o(n,l).select(r)}catch(f){a(new h.Qe("Error formatting plural.",n,f))}return"other"}var it=["type","style"],z=Date.now();function st(t){return"".concat(z,"_").concat(t,"_").concat(z)}function lt(t,o,r,e){e===void 0&&(e={});var n=X(t,o,r,e).reduce(function(a,l){var f=l.value;return typeof f!="string"?a.push(f):typeof a[a.length-1]=="string"?a[a.length-1]+=f:a.push(f),a},[]);return n.length===1?n[0]:n.length===0?"":n}function X(t,o,r,e){var n=t.locale,a=t.onError;e===void 0&&(e={});var l=Intl.ListFormat;l||a(new j.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,j.jK.MISSING_INTL_API));var f=(0,d.L6)(e,it);try{var v={},w=r.map(function(y,M){if(typeof y=="object"){var A=st(M);return v[A]=y,A}return String(y)});return o(n,f).formatToParts(w).map(function(y){return y.type==="literal"?y:(0,u.pi)((0,u.pi)({},y),{value:v[y.value]||y.value})})}catch(y){a(new h.Qe("Error formatting list.",n,y))}return r}var ut=["style","type","fallback","languageDisplay"];function ft(t,o,r,e){var n=t.locale,a=t.onError,l=Intl.DisplayNames;l||a(new j.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,j.jK.MISSING_INTL_API));var f=(0,d.L6)(e,ut);try{return o(n,f).of(r)}catch(v){a(new h.Qe("Error formatting display name.",n,v))}}function mt(t){var o=t?t[Object.keys(t)[0]]:void 0;return typeof o=="string"}function ct(t){t.onWarn&&t.defaultRichTextElements&&mt(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function dt(t,o){var r=(0,d.ax)(o),e=(0,u.pi)((0,u.pi)({},d.Z0),t),n=e.locale,a=e.defaultLocale,l=e.onError;return n?!Intl.NumberFormat.supportedLocalesOf(n).length&&l?l(new h.gb('Missing locale data for locale: "'.concat(n,'" in Intl.NumberFormat. Using default locale: "').concat(a,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(n).length&&l&&l(new h.gb('Missing locale data for locale: "'.concat(n,'" in Intl.DateTimeFormat. Using default locale: "').concat(a,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(l&&l(new h.OV('"locale" was not configured, using "'.concat(a,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),e.locale=e.defaultLocale||"en"),ct(e),(0,u.pi)((0,u.pi)({},e),{formatters:r,formatNumber:P.bind(null,e,r.getNumberFormat),formatNumberToParts:R.bind(null,e,r.getNumberFormat),formatRelativeTime:U.bind(null,e,r.getRelativeTimeFormat),formatDate:q.bind(null,e,r.getDateTimeFormat),formatDateToParts:rt.bind(null,e,r.getDateTimeFormat),formatTime:tt.bind(null,e,r.getDateTimeFormat),formatDateTimeRange:et.bind(null,e,r.getDateTimeFormat),formatTimeToParts:at.bind(null,e,r.getDateTimeFormat),formatPlural:ot.bind(null,e,r.getPluralRules),formatMessage:g.bind(null,e,r),$t:g.bind(null,e,r),formatList:lt.bind(null,e,r.getListFormat),formatListToParts:X.bind(null,e,r.getListFormat),formatDisplayName:ft.bind(null,e,r.getDisplayNames)})}var gt=i(61092);function $(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function H(t){return t&&Object.keys(t).reduce(function(o,r){var e=t[r];return o[r]=(0,gt.Gt)(e)?(0,c.dt)(e):e,o},{})}var Y=function(t,o,r,e){for(var n=[],a=4;a<arguments.length;a++)n[a-4]=arguments[a];var l=H(e),f=g.apply(void 0,(0,s.ev)([t,o,r,l],n,!1));return Array.isArray(f)?m.Children.toArray(f):f},J=function(t,o){var r=t.defaultRichTextElements,e=(0,s._T)(t,["defaultRichTextElements"]),n=H(r),a=dt((0,s.pi)((0,s.pi)((0,s.pi)({},c.Z0),e),{defaultRichTextElements:n}),o),l={locale:a.locale,timeZone:a.timeZone,fallbackOnEmptyString:a.fallbackOnEmptyString,formats:a.formats,defaultLocale:a.defaultLocale,defaultFormats:a.defaultFormats,messages:a.messages,onError:a.onError,defaultRichTextElements:n};return(0,s.pi)((0,s.pi)({},a),{formatMessage:Y.bind(null,l,a.formatters),$t:Y.bind(null,l,a.formatters)})},vt=function(t){(0,s.ZT)(o,t);function o(){var r=t!==null&&t.apply(this,arguments)||this;return r.cache=(0,d.Sn)(),r.state={cache:r.cache,intl:J($(r.props),r.cache),prevConfig:$(r.props)},r}return o.getDerivedStateFromProps=function(r,e){var n=e.prevConfig,a=e.cache,l=$(r);return(0,c.wU)(n,l)?null:{intl:J(l,a),prevConfig:l}},o.prototype.render=function(){return(0,c.lq)(this.state.intl),m.createElement(p.zt,{value:this.state.intl},this.props.children)},o.displayName="IntlProvider",o.defaultProps=c.Z0,o}(m.PureComponent);const pt=vt},49066:(b,E,i)=>{"use strict";i.d(E,{D:()=>p});var s=i(85893),m=i(41580);const p=({children:c})=>(0,s.jsx)(m.x,{paddingLeft:10,paddingRight:10,children:c})},53979:(b,E,i)=>{"use strict";i.d(E,{T:()=>C});var s=i(85893),m=i(67294),p=i(88972);const c=g=>{const d=(0,m.useRef)(null),[O,I]=(0,m.useState)(!0),P=([R])=>{I(R.isIntersecting)};return(0,m.useEffect)(()=>{const R=d.current,j=new IntersectionObserver(P,g);return R&&j.observe(d.current),()=>{R&&j.disconnect()}},[d,g]),[d,O]};var u=i(79698);const x=(g,d)=>{const O=(0,u.W)(d);(0,m.useLayoutEffect)(()=>{const I=new ResizeObserver(O);return Array.isArray(g)?g.forEach(P=>{P.current&&I.observe(P.current)}):g.current&&I.observe(g.current),()=>{I.disconnect()}},[g,O])};var T=i(41580),h=i(11047),D=i(75515);const C=g=>{const d=(0,m.useRef)(null),[O,I]=(0,m.useState)(null),[P,R]=c({root:null,rootMargin:"0px",threshold:0});return x(P,()=>{P.current&&I(P.current.getBoundingClientRect())}),(0,m.useEffect)(()=>{d.current&&I(d.current.getBoundingClientRect())},[d]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{height:O?.height},ref:P,children:R&&(0,s.jsx)(N,{ref:d,...g})}),!R&&(0,s.jsx)(N,{...g,sticky:!0,width:O?.width})]})};C.displayName="HeaderLayout";const k=(0,p.ZP)(T.x)`
  width: ${({width:g})=>g?`${g/16}rem`:void 0};
  z-index: ${({theme:g})=>g.zIndices[1]};
`,N=m.forwardRef(({navigationAction:g,primaryAction:d,secondaryAction:O,subtitle:I,title:P,sticky:R,width:j,...W},Q)=>{const U=typeof I=="string";return R?(0,s.jsx)(k,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,"data-strapi-header-sticky":!0,children:(0,s.jsxs)(h.k,{justifyContent:"space-between",children:[(0,s.jsxs)(h.k,{children:[g&&(0,s.jsx)(T.x,{paddingRight:3,children:g}),(0,s.jsxs)(T.x,{children:[(0,s.jsx)(D.Z,{variant:"beta",as:"h1",...W,children:P}),U?(0,s.jsx)(D.Z,{variant:"pi",textColor:"neutral600",children:I}):I]}),O?(0,s.jsx)(T.x,{paddingLeft:4,children:O}):null]}),(0,s.jsx)(h.k,{children:d?(0,s.jsx)(T.x,{paddingLeft:2,children:d}):void 0})]})}):(0,s.jsxs)(T.x,{ref:Q,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0,children:[g?(0,s.jsx)(T.x,{paddingBottom:2,children:g}):null,(0,s.jsxs)(h.k,{justifyContent:"space-between",children:[(0,s.jsxs)(h.k,{minWidth:0,children:[(0,s.jsx)(D.Z,{as:"h1",variant:"alpha",...W,children:P}),O?(0,s.jsx)(T.x,{paddingLeft:4,children:O}):null]}),d]}),U?(0,s.jsx)(D.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:I}):I]})})},185:(b,E,i)=>{"use strict";i.d(E,{o:()=>u});var s=i(85893),m=i(88972),p=i(41580);const c=(0,m.ZP)(p.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,u=({labelledBy:x="main-content-title",...T})=>(0,s.jsx)(c,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...T})},727:(b,E,i)=>{"use strict";i.d(E,{z:()=>u});var s=i(85893),m=i(88972),p=i(41580);const c=(0,m.ZP)(p.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:x})=>x.spaces[3]};
    top: ${({theme:x})=>x.spaces[3]};
  }
`,u=({children:x})=>(0,s.jsx)(c,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:x})},38992:(b,E,i)=>{"use strict";i.d(E,{$:()=>c});const s={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},m={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var p=i(2128);const c={colors:s.color,shadows:m.shadow,...p.x}}}]);
