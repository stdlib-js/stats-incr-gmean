// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=r(),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty;function o(r,t){return null!=r&&e.call(r,t)}var i,a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"",u=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,i;if(null==r)return n.call(r);e=r[c],t=o(r,c);try{r[c]=void 0}catch(t){return n.call(r)}return i=n.call(r),t?r[c]=e:delete r[c],i}:function(r){return n.call(r)},l="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var r,t,n;if("function"!=typeof f)return!1;try{t=new f(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(l&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?p:function(){throw new Error("not implemented")};var y,s=i,g=r(),d=Object.prototype.toString,b="function"==typeof Symbol?Symbol:void 0,v="function"==typeof b?b.toStringTag:"",h=g&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return d.call(r);n=r[v],t=o(r,v);try{r[v]=void 0}catch(t){return d.call(r)}return e=d.call(r),t?r[v]=n:delete r[v],e}:function(r){return d.call(r)},m="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,t,n;if("function"!=typeof w)return!1;try{t=new w([1,3.14,-3.14,NaN]),n=t,r=(m&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var A,F=y,T=r(),I=Object.prototype.toString,_="function"==typeof Symbol?Symbol:void 0,E="function"==typeof _?_.toStringTag:"",j=T&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return I.call(r);n=r[E],t=o(r,E);try{r[E]=void 0}catch(t){return I.call(r)}return e=I.call(r),t?r[E]=n:delete r[E],e}:function(r){return I.call(r)},N="function"==typeof Uint8Array,O="function"==typeof Uint8Array?Uint8Array:null,U="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,t,n;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,256,257]),n=t,r=(N&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?U:function(){throw new Error("not implemented")};var x,k=A,V=r(),H=Object.prototype.toString,G="function"==typeof Symbol?Symbol:void 0,W="function"==typeof G?G.toStringTag:"",$=V&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return H.call(r);n=r[W],t=o(r,W);try{r[W]=void 0}catch(t){return H.call(r)}return e=H.call(r),t?r[W]=n:delete r[W],e}:function(r){return H.call(r)},L="function"==typeof Uint16Array,P="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,65536,65537]),n=t,r=(L&&n instanceof Uint16Array||"[object Uint16Array]"===$(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?C:function(){throw new Error("not implemented")};var R,Z={uint16:x,uint8:k};(R=new Z.uint16(1))[0]=4660;var M=52===new Z.uint8(R.buffer)[0],Y=!0===M?1:0,X=new F(1),z=new s(X.buffer);function q(r){return X[0]=r,z[Y]}var B,D=r(),J=Object.prototype.toString,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"",rr=D&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return J.call(r);n=r[Q],t=o(r,Q);try{r[Q]=void 0}catch(t){return J.call(r)}return e=J.call(r),t?r[Q]=n:delete r[Q],e}:function(r){return J.call(r)},tr="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0;B=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr([1,3.14,-3.14,NaN]),n=t,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=!0===M?1:0,ir=new B(1),ar=new s(ir.buffer),cr=1023,ur=Number.NEGATIVE_INFINITY,lr=.6931471803691238,fr=1.9082149292705877e-10,pr=1048575;function yr(r){var t,n,e,o,i,a,c,u,l,f,p,y;return 0===r?ur:function(r){return r!=r}(r)||r<0?NaN:(i=0,(n=q(r))<1048576&&(i-=54,n=q(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-cr|0,i+=(u=614244+(n&=pr)&1048576|0)>>20|0,c=(r=function(r,t){return ir[0]=r,ar[or]=t>>>0,ir[0]}(r,n|1072693248^u))-1,(pr&2+n)<3?0===c?0===i?0:i*lr+i*fr:(a=c*c*(.5-.3333333333333333*c),0===i?c-a:i*lr-(a-i*fr-c)):(u=n-398458|0,l=440401-n|0,o=(p=(y=(f=c/(2+c))*f)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+o,(u|=l)>0?(t=.5*c*c,0===i?c-(t-f*(t+a)):i*lr-(t-(f*(t+a)+i*fr)-c)):0===i?c-f*(c-a):i*lr-(f*(c-a)-i*fr-c))))}var sr=Math.floor,gr=Math.ceil;function dr(r){return r<0?gr(r):sr(r)}var br=Number.POSITIVE_INFINITY,vr=Number.POSITIVE_INFINITY,hr=Number.POSITIVE_INFINITY;function mr(r){return r===hr||r===ur}var wr="function"==typeof Object.defineProperty?Object.defineProperty:null,Sr=Object.defineProperty;function Ar(r){return"number"==typeof r}function Fr(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function Tr(r,t,n){var e=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+Fr(o):Fr(o)+r,e&&(r="-"+r)),r}var Ir=String.prototype.toLowerCase,_r=String.prototype.toUpperCase;function Er(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!Ar(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=Tr(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=Tr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===_r.call(r.specifier)?_r.call(n):Ir.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function jr(r){return"string"==typeof r}var Nr=Math.abs,Or=String.prototype.toLowerCase,Ur=String.prototype.toUpperCase,xr=String.prototype.replace,kr=/e\+(\d)$/,Vr=/e-(\d)$/,Hr=/^(\d+)$/,Gr=/^(\d+)e/,Wr=/\.0$/,$r=/\.0*e/,Lr=/(\..*[^0])0*e/;function Pr(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!Ar(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Nr(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=xr.call(n,Lr,"$1e"),n=xr.call(n,$r,"e"),n=xr.call(n,Wr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=xr.call(n,kr,"e+0$1"),n=xr.call(n,Vr,"e-0$1"),r.alternate&&(n=xr.call(n,Hr,"$1."),n=xr.call(n,Gr,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Ur.call(r.specifier)?Ur.call(n):Or.call(n)}function Cr(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function Rr(r,t,n){var e=t-r.length;return e<0?r:r=n?r+Cr(e):Cr(e)+r}var Zr=String.fromCharCode,Mr=isNaN,Yr=Array.isArray;function Xr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function zr(r){var t,n,e,o,i,a,c,u,l;if(!Yr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(jr(e=r[u]))a+=e;else{if(t=void 0!==e.precision,!(e=Xr(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,Mr(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,Mr(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=Er(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!Mr(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Mr(i)?String(e.arg):Zr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=Pr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Tr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Rr(e.arg,e.width,e.padRight)),a+=e.arg||"",c+=1}return a}var qr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Br(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Dr(r){var t,n,e,o;for(n=[],o=0,e=qr.exec(r);e;)(t=r.slice(o,qr.lastIndex-e[0].length)).length&&n.push(t),n.push(Br(e)),o=qr.lastIndex,e=qr.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function Jr(r){return"string"==typeof r}function Kr(r){var t,n;if(!Jr(r))throw new TypeError(Kr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[Dr(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return zr.apply(null,t)}var Qr,rt=Object.prototype,tt=rt.toString,nt=rt.__defineGetter__,et=rt.__defineSetter__,ot=rt.__lookupGetter__,it=rt.__lookupSetter__;Qr=function(){try{return wr({},"x",{}),!0}catch(r){return!1}}()?Sr:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===tt.call(r))throw new TypeError(Kr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===tt.call(n))throw new TypeError(Kr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(ot.call(r,t)||it.call(r,t)?(e=r.__proto__,r.__proto__=rt,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&nt&&nt.call(r,t,n.get),a&&et&&et.call(r,t,n.set),r};var at,ct,ut,lt=Qr,ft=r(),pt=Object.prototype.toString,yt="function"==typeof Symbol?Symbol:void 0,st="function"==typeof yt?yt.toStringTag:"",gt=ft&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return pt.call(r);n=r[st],t=o(r,st);try{r[st]=void 0}catch(t){return pt.call(r)}return e=pt.call(r),t?r[st]=n:delete r[st],e}:function(r){return pt.call(r)},dt="function"==typeof Float64Array,bt="function"==typeof Float64Array?Float64Array:null,vt="function"==typeof Float64Array?Float64Array:void 0;at=function(){var r,t,n;if("function"!=typeof bt)return!1;try{t=new bt([1,3.14,-3.14,NaN]),n=t,r=(dt&&n instanceof Float64Array||"[object Float64Array]"===gt(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vt:function(){throw new Error("not implemented")},!0===M?(ct=1,ut=0):(ct=0,ut=1);var ht={HIGH:ct,LOW:ut},mt=new at(1),wt=new s(mt.buffer),St=ht.HIGH,At=ht.LOW;function Ft(r,t,n,e){return mt[0]=r,t[e]=wt[St],t[e+n]=wt[At],t}function Tt(r){return Ft(r,[0,0],1,0)}lt(Tt,"assign",{configurable:!1,enumerable:!1,writable:!1,value:Ft});var It,_t,Et,jt=r(),Nt=Object.prototype.toString,Ot="function"==typeof Symbol?Symbol:void 0,Ut="function"==typeof Ot?Ot.toStringTag:"",xt=jt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Nt.call(r);n=r[Ut],t=o(r,Ut);try{r[Ut]=void 0}catch(t){return Nt.call(r)}return e=Nt.call(r),t?r[Ut]=n:delete r[Ut],e}:function(r){return Nt.call(r)},kt="function"==typeof Float64Array,Vt="function"==typeof Float64Array?Float64Array:null,Ht="function"==typeof Float64Array?Float64Array:void 0;It=function(){var r,t;if("function"!=typeof Vt)return!1;try{r=function(r){return kt&&r instanceof Float64Array||"[object Float64Array]"===xt(r)}(t=new Vt([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ht:function(){throw new Error("not implemented")},!0===M?(_t=1,Et=0):(_t=0,Et=1);var Gt={HIGH:_t,LOW:Et},Wt=new It(1),$t=new s(Wt.buffer),Lt=Gt.HIGH,Pt=Gt.LOW;function Ct(r,t){return $t[Lt]=r,$t[Pt]=t,Wt[0]}var Rt=[0,0];function Zt(r,t,n,e){return function(r){return r!=r}(r)||mr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}!function(r,t,n){lt(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}((function(r){return Zt(r,[0,0],1,0)}),"assign",Zt);var Mt,Yt,Xt,zt=r(),qt=Object.prototype.toString,Bt="function"==typeof Symbol?Symbol:void 0,Dt="function"==typeof Bt?Bt.toStringTag:"",Jt=zt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return qt.call(r);n=r[Dt],t=o(r,Dt);try{r[Dt]=void 0}catch(t){return qt.call(r)}return e=qt.call(r),t?r[Dt]=n:delete r[Dt],e}:function(r){return qt.call(r)},Kt="function"==typeof Float64Array,Qt="function"==typeof Float64Array?Float64Array:null,rn="function"==typeof Float64Array?Float64Array:void 0;Mt=function(){var r,t;if("function"!=typeof Qt)return!1;try{r=function(r){return Kt&&r instanceof Float64Array||"[object Float64Array]"===Jt(r)}(t=new Qt([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?rn:function(){throw new Error("not implemented")},!0===M?(Yt=1,Xt=0):(Yt=0,Xt=1);var tn={HIGH:Yt,LOW:Xt},nn=new Mt(1),en=new s(nn.buffer),on=tn.HIGH,an=tn.LOW;function cn(r,t,n,e){return nn[0]=r,t[e]=en[on],t[e+n]=en[an],t}function un(r){return cn(r,[0,0],1,0)}!function(r,t,n){lt(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(un,"assign",cn);var ln=[0,0],fn=[0,0];function pn(r,t){var n,e,o;return 0===t||0===r||(o=r)!=o||mr(r)?r:(Zt(r,ln,1,0),t+=ln[1],t+=function(r){var t=q(r);return(t=(2146435072&t)>>>20)-cr|0}(r=ln[0]),t<-1074?function(r,t){var n,e;return Tt.assign(r,Rt,1,0),n=Rt[0],n&=2147483647,e=q(t),Ct(n|=e&=2147483648,Rt[1])}(0,r):t>1023?r<0?ur:vr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,un.assign(r,fn,1,0),n=fn[0],n&=2148532223,e*Ct(n|=t+cr<<20,fn[1])))}var yn=1.4426950408889634,sn=1/(1<<28);function gn(r){var t;return function(r){return r!=r}(r)||r===br?r:r===ur?0:r>709.782712893384?br:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<sn?1+r:function(r,t,n){var e,o,i,a;return pn(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=dr(r<0?yn*r-.5:yn*r+.5)),1.9082149292705877e-10*t,t)}return function(){var r,t,n;return r=0,t=0,n=1,function(e){return 0===arguments.length?0===t?null:n:(t+=1,r+=yr(e),n=gn(r/t))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).incrgmean=t();
//# sourceMappingURL=browser.js.map
