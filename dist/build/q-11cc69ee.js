import{R as v}from"./q-c210a59f.js";import{c as b}from"./q-c210a59f.js";import{u as n,p as d}from"./q-70be9b46.js";import"./q-5a631909.js";const F=async()=>{const[s,r,l,p,m,t,o,i]=v();o.value=!0;let u=r.ctaLink,a=l.value?new FormData:{};u||(u=`/form/save?key=${r.key}`),Object.keys(s.value).map(e=>{a.append(e,window[e][0])}),Object.keys(t.value).map(e=>{l.value?a.append(e,t.value[e]):a[e]=t.value[e]}),await(l.value?n:d)(u,a).then(e=>{p.value=!0,m.value=!0,i(),o.value=!1},e=>{p.value=!0,m.value=!1,o.value=!1})},g=()=>{const[s]=v();s.value={}};export{b as _hW,g as s_FdpHm1gDqrg,F as s_JMSNz0Ap04s};
