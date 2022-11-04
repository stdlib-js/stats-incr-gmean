// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"";t=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,i,u,a,f;if(null==t)return r.call(t);i=t[o],f=o,n=null!=(a=t)&&e.call(a,f);try{t[o]=void 0}catch(n){return r.call(t)}return u=r.call(t),n?t[o]=i:delete t[o],u}:function(t){return r.call(t)};var i,u=t,a="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var t,n,r;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?c:function(){throw new Error("not implemented")};var l,y=i,p="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;l=function(){var t,n,r;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),r=n,t=(p&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?b:function(){throw new Error("not implemented")};var d,w=l,A="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var t,n,r;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,256,257]),r=n,t=(A&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?m:function(){throw new Error("not implemented")};var s,h=d,U="function"==typeof Uint16Array,g="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var t,n,r;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,65536,65537]),r=n,t=(U&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?j:function(){throw new Error("not implemented")};var I,O={uint16:s,uint8:h};(I=new O.uint16(1))[0]=4660;var S=52===new O.uint8(I.buffer)[0],N=!0===S?1:0,E=new w(1),F=new y(E.buffer);function T(t){return E[0]=t,F[N]}var H=!0===S?1:0,G=new w(1),P=new y(G.buffer);function x(t){return t!=t}var L=1023,V=Number.NEGATIVE_INFINITY,W=.6931471803691238,M=1.9082149292705877e-10,k=1048575;function Y(t){var n,r,e,o,i,u,a,f,c,l,y,p;return 0===t?V:x(t)||t<0?NaN:(i=0,(r=T(t))<1048576&&(i-=54,r=T(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-L|0,i+=(f=614244+(r&=k)&1048576|0)>>20|0,a=(t=function(t,n){return G[0]=t,P[H]=n>>>0,G[0]}(t,r|1072693248^f))-1,(k&2+r)<3?0===a?0===i?0:i*W+i*M:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*W-(u-i*M-a)):(f=r-398458|0,c=440401-r|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=e+o,(f|=c)>0?(n=.5*a*a,0===i?a-(n-l*(n+u)):i*W-(n-(l*(n+u)+i*M)-a)):0===i?a-l*(a-u):i*W-(l*(a-u)-i*M-a))))}var C=Math.floor,q=Math.ceil;function z(t){return t<0?q(t):C(t)}var B,D,J=Number.POSITIVE_INFINITY;function K(t){return t===J||t===V}!0===S?(B=1,D=0):(B=0,D=1);var Q,R,X={HIGH:B,LOW:D},Z=new w(1),$=new y(Z.buffer),tt=X.HIGH,nt=X.LOW;function rt(t,n){return Z[0]=n,t[0]=$[tt],t[1]=$[nt],t}function et(t,n){return 1===arguments.length?rt([0,0],t):rt(t,n)}!0===S?(Q=1,R=0):(Q=0,R=1);var ot={HIGH:Q,LOW:R},it=new w(1),ut=new y(it.buffer),at=ot.HIGH,ft=ot.LOW;function ct(t,n){return ut[at]=t,ut[ft]=n,it[0]}var lt,yt=[0,0],pt="function"==typeof Object.defineProperty?Object.defineProperty:null,vt=Object.defineProperty,bt=Object.prototype,dt=bt.toString,wt=bt.__defineGetter__,At=bt.__defineSetter__,_t=bt.__lookupGetter__,mt=bt.__lookupSetter__;function st(t,n,r,e){return x(t)||K(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}lt=function(){try{return pt({},"x",{}),!0}catch(t){return!1}}()?vt:function(t,n,r){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===dt.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===dt.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(_t.call(t,n)||mt.call(t,n)?(e=t.__proto__,t.__proto__=bt,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&wt&&wt.call(t,n,r.get),u&&At&&At.call(t,n,r.set),t},lt((function(t){return st(t,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:st});var ht=[0,0],Ut=[0,0];function gt(t,n){var r,e,o,i,u;return 0===n||0===t||x(t)||K(t)?t:(st(t,ht,1,0),n+=ht[1],n+=function(t){var n=T(t);return(n=(2146435072&n)>>>20)-L|0}(t=ht[0]),n<-1074?(o=t,et(yt,0),i=yt[0],i&=2147483647,u=T(o),ct(i|=u&=2147483648,yt[1])):n>1023?t<0?V:J:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,et(Ut,t),r=Ut[0],r&=2148532223,e*ct(r|=n+L<<20,Ut[1])))}var jt=1.4426950408889634,It=1/(1<<28);function Ot(t){var n;return x(t)||t===J?t:t===V?0:t>709.782712893384?J:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<It?1+t:function(t,n,r){var e,o,i,u;return gt(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(t-.6931471803691238*(n=z(t<0?jt*t-.5:jt*t+.5)),1.9082149292705877e-10*n,n)}return function(){var t,n,r;return t=0,n=0,r=1,function(e){return 0===arguments.length?0===n?null:r:(n+=1,t+=Y(e),r=Ot(t/n))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).incrgmean=n();
//# sourceMappingURL=browser.js.map
