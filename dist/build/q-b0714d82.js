import{R as o}from"./q-c210a59f.js";import{c as d}from"./q-c210a59f.js";import{p as l}from"./q-70be9b46.js";import"./q-5a631909.js";const v=async()=>{const[e,t,s,a,r]=o();a.value=!0,await l("/comment/save",s.value).then(i=>{a.value=!1,t.value=e.value=!0,r()},i=>{a.value=t.value=!1,e.value=!0})},p=()=>{const[e,t,s]=o();s.value={body:"",email:"",entityGuid:e,entityType:t,name:"",website:""}};export{d as _hW,v as s_1HXaOvroMM8,p as s_FmX5brGOhN0};
