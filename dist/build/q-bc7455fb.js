import{R as f,m as c}from"./q-c210a59f.js";const b=(e={})=>{const[r,m,o,n]=f();let t,a;return e instanceof SubmitEvent?(a=e.target,t=new FormData(a),(e.submitter instanceof HTMLInputElement||e.submitter instanceof HTMLButtonElement)&&e.submitter.name&&e.submitter.name&&t.append(e.submitter.name,e.submitter.value)):t=e,new Promise(s=>{t instanceof FormData&&(n.formData=t),n.isRunning=!0,o.isNavigating=!0,r.value={data:t,id:m,resolve:c(s)}}).then(({result:s,status:i})=>{if(n.isRunning=!1,n.status=i,n.value=s,a){a.getAttribute("data-spa-reset")==="true"&&a.reset();const l={status:i,value:s};a.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:l}))}return{status:i,value:s}})};export{b as s_A5bZC7WO00A};
