import"./q-70be9b46.js";import{b,h as c,_ as i,W as h,H as M,S as a,j as n,a as m,Y as s,E as O,N as k,g as d,z as E}from"./q-c210a59f.js";import{m as T}from"./q-126d8e81.js";import{u as w,M as B,L as I,T as P}from"./q-921a0c93.js";import{R as A}from"./q-adb48001.js";import"./q-5a631909.js";import"./q-ee2fbd6b.js";const L=b(c(()=>i(()=>import("./q-1b952d11.js"),["build/q-1b952d11.js","build/q-c210a59f.js","build/q-c07c4ce8.js"]),"s_ryG4FtvNATU")),R=b(c(()=>i(()=>Promise.resolve().then(()=>H),void 0),"s_iCVGa52jJps")),D=b(c(()=>i(()=>import("./q-fb0d9163.js"),["build/q-fb0d9163.js","build/q-c210a59f.js","build/q-c07c4ce8.js","build/q-70be9b46.js","build/q-5a631909.js","build/q-126d8e81.js"]),"s_OgvA8P1DKH4")),F=b(c(()=>i(()=>import("./q-9c72489d.js"),["build/q-9c72489d.js","build/q-c210a59f.js","build/q-c07c4ce8.js"]),"s_YCqrLsEam5M")),V=b(c(()=>i(()=>import("./q-f278fb34.js"),["build/q-f278fb34.js","build/q-c210a59f.js","build/q-c07c4ce8.js","build/q-70be9b46.js","build/q-5a631909.js","build/q-126d8e81.js"]),"s_bTwHWYwc8Zk")),j=({fields:o,form:r})=>{const t=h({}),y=h(!1),p=h({}),_=h(!1),{isMessageShown:x,isSuccess:g}=w();return o==null||o.map((u,S)=>{(u==null?void 0:u.type)=="file"?(_.value=!0,p.value[u.key]=""):t.value[u.key]=""}),{handleSubmit:c(()=>i(()=>import("./q-11cc69ee.js"),["build/q-11cc69ee.js","build/q-c210a59f.js","build/q-70be9b46.js","build/q-5a631909.js"]),"s_JMSNz0Ap04s",[p,r,_,x,g,t,y,c(()=>i(()=>import("./q-11cc69ee.js"),["build/q-11cc69ee.js","build/q-c210a59f.js","build/q-70be9b46.js","build/q-5a631909.js"]),"s_FdpHm1gDqrg",[t])]),isMessageShown:x,isSuccess:g,model:t,progress:y}},C=o=>{var r;return M(),a("form",{class:T("w-full flex flex-col gap-4 md:px-5 mb-10 md:mb-20 pb-12",o.class)},{novalidate:!0},[a("div",null,{class:"form-body flex flex-col gap-2"},n(O,null,3,"l0_0"),1,null),a("div",null,{class:"flex justify-end mt-1 form-actions"},a("div",{onClick$:o.handleSubmit},{class:"w-full text-center text-md py-2 px-4 rounded-md bg-custom-color1/80 hover:bg-custom-color1 transition-all cursor-pointer"},m(t=>t.ctaText,[o]),2,null),1,null),((r=o.isMessageShown)==null?void 0:r.value)&&n(B,{get isSuccess(){return o.isSuccess.value},get message(){return o.isSuccess.value?o.successMessage:o.errorMessage},[s]:{isSuccess:m(t=>t.isSuccess.value,[o]),message:m(t=>t.isSuccess.value?t.successMessage:t.errorMessage,[o])}},3,"l0_1")],1,"l0_2")},z=o=>{var p,_,x,g,v;const r=(p=o.forms)==null?void 0:p.find(e=>e.slug===o.slug),t=j({fields:(_=r==null?void 0:r.relatedItems)==null?void 0:_.fields,form:r}),y=k(t,["handleSubmit","model"]);return n(E,{children:a("div",null,null,a("div",null,{class:"relative max-w-full w-[560px] mx-auto px-5 mt-10 md:mt-20 bg-gray-200 rounded-md"},[a("h2",null,{class:"text-center font-bold text-3xl form-title pt-12 mb-10"},r==null?void 0:r.title,1,null),(r==null?void 0:r.description)&&a("p",null,{class:"form-description mt-4 mb-6"},r==null?void 0:r.description,1,"MO_0"),n(R,{get handleSubmit(){return t.handleSubmit},...r,...y,children:(g=(x=r==null?void 0:r.relatedItems)==null?void 0:x.fields)==null?void 0:g.map(e=>{var u,S;switch(M(),e.type){case"text":return n(P,{...e,get modelBind(){return t.model},get property(){return e.key},[s]:{modelBind:m(l=>l.model,[t]),property:d(e,"key")}},0,"MO_1");case"longText":return n(I,{...e,get modelBind(){return t.model},get property(){return e.key},[s]:{modelBind:m(l=>l.model,[t]),property:d(e,"key")}},0,"MO_2");case"singleChoice":return n(V,{...e,get modelBind(){return t.model},options:(u=e==null?void 0:e.relatedItems)==null?void 0:u.options,get property(){return e.key},[s]:{modelBind:m(l=>l.model,[t]),property:d(e,"key")}},0,"MO_3");case"multiChoice":return n(D,{...e,get modelBind(){return t.model},options:(S=e==null?void 0:e.relatedItems)==null?void 0:S.options,get property(){return e.key},[s]:{modelBind:m(l=>l.model,[t]),property:d(e,"key")}},0,"MO_4");case"boolean":return n(L,{...e,get modelBind(){return t.model},get property(){return e.key},[s]:{modelBind:m(l=>l.model,[t]),property:d(e,"key")}},0,"MO_5");case"numeric":return n(F,{...e,get modelBind(){return t.model},get property(){return e.key},[s]:{modelBind:m(l=>l.model,[t]),property:d(e,"key")}},0,"MO_6")}}),[s]:{handleSubmit:m(e=>e.handleSubmit,[t])}},0,"MO_7"),a("div",null,{class:"mt-14 mb-20 leading-8"},n(A,{a:"transition-all",class:"prose max-w-none [&>ul>li]:my-[3px] [&>ol>li]:my-[3px] [&>img]:my-[25px] [&>img]:mx-auto [&>table]:overflow-x-scroll [&>table]:border [&>table]:border-slate-950 [&>table]:border-collapse [&>td]:py-[10px] [&>td]:px-[5px] [&>td]:border [&>td]:border-slate-950 [&>td]:border-collapse [&>th]:border [&>th]:border-slate-950 [&>th]:border-collapse",content:(v=r==null?void 0:r.relatedItems)==null?void 0:v.content,h1:"font-bold mt-[30px] text-[1.75rem]",h2:"font-bold mt-[20px] text-[1.5rem]",h3:"font-bold mt-[20px] text-[1.25rem]",h4:"font-bold mt-[15px] mb-[10px] text-[1.15rem]",h5:"mt-[3px] mb-[10px] font-600 text-[1.08rem]",h6:"mt-[3px] mb-[10px] font-600 text-[1.08rem]",ol:"my-[1rem] mx-[1rem] list-disc",p:"mt-[3px] mb-[10px]",ul:"my-[1rem] mx-[1rem] list-disc",[s]:{a:s,class:s,h1:s,h2:s,h3:s,h4:s,h5:s,h6:s,ol:s,p:s,ul:s}},3,"MO_8"),1,null)],1,null),1,null)},1,"MO_9")},H=Object.freeze(Object.defineProperty({__proto__:null,s_iCVGa52jJps:C,s_z0xnYiRtvqw:z},Symbol.toStringTag,{value:"Module"}));export{C as s_iCVGa52jJps,z as s_z0xnYiRtvqw};