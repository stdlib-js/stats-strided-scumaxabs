"use strict";var c=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var m=c(function(G,j){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),p=require('@stdlib/math-base-special-absf/dist');function O(a,r,v,o,i,t,q){var e,f,s,n,u;if(a<=0)return i;if(f=o,s=q,e=p(r[f]),i[s]=e,s+=t,u=1,x(e)===!1)for(u;u<a;u++){if(f+=v,n=p(r[f]),x(n)){e=n;break}n>e&&(e=n),i[s]=e,s+=t}if(x(e))for(u;u<a;u++)i[s]=e,s+=t;return i}j.exports=O
});var d=c(function(H,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(a,r,v,o,i){var t=l(a,v),q=l(a,i);return g(a,r,v,t,o,i,q)}y.exports=h
});var k=c(function(I,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=d(),z=m();w(R,"ndarray",z);_.exports=R
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),b,E=B(A(__dirname,"./native.js"));C(E)?b=D:b=E;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
