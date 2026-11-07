import{c as n}from"./index-BsqWJ7y7.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);class h extends Error{constructor(t,r){super(`HTTP ${t}: ${r}`),this.status=t,this.url=r}}async function d(e){const t=await e.text();if(!t)return t;try{return JSON.parse(t)}catch{return t}}async function a(e,t={}){const r=await fetch(e,t);if(!r.ok)throw new h(r.status,e);const s={};return r.headers.forEach((o,c)=>s[c]=o),{data:t.method==="HEAD"?null:await d(r),status:r.status,headers:s}}const i={get:(e,t)=>a(e,{...t,method:"GET"}),head:(e,t)=>a(e,{...t,method:"HEAD"}),postForm:(e,t,r)=>a(e,{...r,method:"POST",body:new URLSearchParams(t)})};export{f as A,i as h};
