import{R as s,N as i,j as n,S as o,f as c,h as d,a as r,_ as u}from"./q-c210a59f.js";import{F as m}from"./q-c07c4ce8.js";import"./q-70be9b46.js";import{m as _}from"./q-126d8e81.js";import"./q-5a631909.js";const p=e=>{const[t]=s();let a=Array.from(e.target.selectedOptions,l=>l.value);t.modelBind.value[t.property]=a.join(",").toString()},h=e=>{var a;const t=i(e,["ariaLabel","choices","class","modelBind","placeholder","property"]);return n(m,{...t,children:o("select",{"aria-label":e.ariaLabel??t.label??e.placeholder,class:_("w-full mt-2 rounded-md px-4 py-2 focus:outline-none placeholder-gray-500",e.class)},{multiple:!0,onInput$:d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_OJQduMB7sU4",[e]),placeholder:r(l=>l.placeholder,[e]),value:r(l=>l.modelBind.value[l.property],[e])},(a=e.choices)==null?void 0:a.map(l=>o("option",{value:c(l,"choice")},null,l.choice,1,l.id)),1,null)},0,"0U_0")},v=Object.freeze(Object.defineProperty({__proto__:null,s_OJQduMB7sU4:p,s_OgvA8P1DKH4:h},Symbol.toStringTag,{value:"Module"}));export{p as s_OJQduMB7sU4,h as s_OgvA8P1DKH4};
