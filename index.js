// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,c,u;if(null==r)return t.call(r);i=r[a],u=a,e=null!=(c=r)&&n.call(c,u);try{r[a]=void 0}catch(e){return t.call(r)}return o=t.call(r),e?r[a]=i:delete r[a],o}:function(r){return t.call(r)},c="function"==typeof Uint32Array,u="function"==typeof Uint32Array?Uint32Array:null,f="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,t;if("function"!=typeof u)return!1;try{e=new u(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?f:function(){throw new Error("not implemented")};var l,s=r,p="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,y="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,e,t;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),t=e,r=(p&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var d,h=l,w="function"==typeof Uint8Array,v="function"==typeof Uint8Array?Uint8Array:null,b="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,e,t;if("function"!=typeof v)return!1;try{e=new v(e=[1,3.14,-3.14,256,257]),t=e,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=d,_="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),t=e,r=(_&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var S,I={uint16:m,uint8:A};(S=new I.uint16(1))[0]=4660;var x=52===new I.uint8(S.buffer)[0],k=!0===x?1:0,F=new h(1),j=new s(F.buffer);function T(r){return F[0]=r,j[k]}var O=!0===x?1:0,V=new h(1),N=new s(V.buffer);function $(r){return r!=r}var G=1023,H=Number.NEGATIVE_INFINITY,W=.6931471803691238,C=1.9082149292705877e-10,L=0x40000000000000,P=.3333333333333333,R=1048575,Z=2146435072,M=1048576,X=1072693248;function Y(r){var e,t,n,i,a,o,c,u,f,l,s,p;return 0===r?H:$(r)||r<0?NaN:(a=0,(t=T(r))<M&&(a-=54,t=T(r*=L)),t>=Z?r+r:(a+=(t>>20)-G|0,a+=(u=614244+(t&=R)&1048576|0)>>20|0,c=(r=function(r,e){return V[0]=r,N[O]=e>>>0,V[0]}(r,t|u^X))-1,(R&2+t)<3?0===c?0===a?0:a*W+a*C:(o=c*c*(.5-P*c),0===a?c-o:a*W-(o-a*C-c)):(u=t-398458|0,f=440401-t|0,i=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-l*(e+o)):a*W-(e-(l*(e+o)+a*C)-c)):0===a?c-l*(c-o):a*W-(l*(c-o)-a*C-c))))}var z=Math.floor,q=Math.ceil;function B(r){return r<0?q(r):z(r)}var D=Number.POSITIVE_INFINITY,J=1023,K=-1023,Q=-1074;function rr(r){return r===D||r===H}var er=2147483648,tr=2147483647,nr="function"==typeof Object.defineProperty?Object.defineProperty:null,ir=Object.defineProperty;function ar(r){return"number"==typeof r}function or(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function cr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+or(i):or(i)+r,n&&(r="-"+r)),r}var ur=String.prototype.toLowerCase,fr=String.prototype.toUpperCase;function lr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!ar(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=cr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=cr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===fr.call(r.specifier)?fr.call(t):ur.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var sr=Math.abs,pr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase,yr=String.prototype.replace,dr=/e\+(\d)$/,hr=/e-(\d)$/,wr=/^(\d+)$/,vr=/^(\d+)e/,br=/\.0$/,mr=/\.0*e/,Ar=/(\..*[^0])0*e/;function _r(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!ar(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":sr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=yr.call(t,Ar,"$1e"),t=yr.call(t,mr,"e"),t=yr.call(t,br,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=yr.call(t,dr,"e+0$1"),t=yr.call(t,hr,"e-0$1"),r.alternate&&(t=yr.call(t,wr,"$1."),t=yr.call(t,vr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===gr.call(r.specifier)?gr.call(t):pr.call(t)}function Er(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var Ur=String.fromCharCode,Sr=Array.isArray;function Ir(r){return r!=r}function xr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function kr(r){var e,t,n,i,a,o,c,u,f,l,s,p,g;if(!Sr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=xr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ir(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ir(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=lr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Ir(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ir(a)?String(n.arg):Ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_r(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=cr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+Er(g):Er(g)+l)),o+=n.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Tr(r){var e,t,n,i;for(t=[],i=0,n=Fr.exec(r);n;)(e=r.slice(i,Fr.lastIndex-n[0].length)).length&&t.push(e),t.push(jr(n)),i=Fr.lastIndex,n=Fr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Or(r){var e,t;if("string"!=typeof r)throw new TypeError(Or("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Tr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return kr.apply(null,e)}var Vr,Nr,$r=Object.prototype,Gr=$r.toString,Hr=$r.__defineGetter__,Wr=$r.__defineSetter__,Cr=$r.__lookupGetter__,Lr=$r.__lookupSetter__,Pr=function(){try{return nr({},"x",{}),!0}catch(r){return!1}}()?ir:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Gr.call(r))throw new TypeError(Or("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Gr.call(t))throw new TypeError(Or("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Cr.call(r,e)||Lr.call(r,e)?(n=r.__proto__,r.__proto__=$r,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Hr&&Hr.call(r,e,t.get),o&&Wr&&Wr.call(r,e,t.set),r};function Rr(r,e,t){Pr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===x?(Vr=1,Nr=0):(Vr=0,Nr=1);var Zr,Mr,Xr={HIGH:Vr,LOW:Nr},Yr=new h(1),zr=new s(Yr.buffer),qr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e,t,n){return Yr[0]=r,e[n]=zr[qr],e[n+t]=zr[Br],e}function Jr(r){return Dr(r,[0,0],1,0)}Rr(Jr,"assign",Dr),!0===x?(Zr=1,Mr=0):(Zr=0,Mr=1);var Kr={HIGH:Zr,LOW:Mr},Qr=new h(1),re=new s(Qr.buffer),ee=Kr.HIGH,te=Kr.LOW;function ne(r,e){return re[ee]=r,re[te]=e,Qr[0]}var ie=[0,0],ae=22250738585072014e-324,oe=4503599627370496;function ce(r,e,t,n){return $(r)||rr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<ae?(e[n]=r*oe,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Rr((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var ue=2146435072,fe=2220446049250313e-31,le=2148532223,se=[0,0],pe=[0,0];function ge(r,e){var t,n,i,a,o,c;return 0===e||0===r||$(r)||rr(r)?r:(ce(r,se,1,0),r=se[0],e+=se[1],e+=function(r){var e=T(r);return(e=(e&ue)>>>20)-G|0}(r),e<Q?(i=0,a=r,Jr.assign(i,ie,1,0),o=ie[0],o&=tr,c=T(a),ne(o|=c&=er,ie[1])):e>J?r<0?H:D:(e<=K?(e+=52,n=fe):n=1,Jr.assign(r,pe,1,0),t=pe[0],t&=le,n*ne(t|=e+G<<20,pe[1])))}var ye=.6931471803691238,de=1.9082149292705877e-10,he=1.4426950408889634,we=709.782712893384,ve=-745.1332191019411,be=1/(1<<28),me=-be;function Ae(r){var e;return $(r)||r===D?r:r===H?0:r>we?D:r<ve?0:r>me&&r<be?1+r:function(r,e,t){var n,i,a,o;return ge(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=B(r<0?he*r-.5:he*r+.5))*ye,e*de,e)}return function(){var r,e,t;return r=0,e=0,t=1,function(n){return 0===arguments.length?0===e?null:t:(e+=1,r+=Y(n),t=Ae(r/e))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).incrgmean=e();
//# sourceMappingURL=index.js.map
