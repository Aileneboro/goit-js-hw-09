import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),a="feedback-form-state",o=JSON.parse(localStorage.getItem(a));o&&(e.elements.email.value=o.email||"",e.elements.message.value=o.message||"");e.addEventListener("input",r=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(t))});e.addEventListener("submit",r=>{if(r.preventDefault(),e.elements.email.value===""||e.elements.message.value===""){console.log("Please fill in email and message fields");return}try{const t=JSON.parse(localStorage.getItem(a));console.log("Data submitted:",t)}catch(t){console.error("Error retrieving data from localStorage:",t)}e.reset(),localStorage.removeItem(a)});
//# sourceMappingURL=commonHelpers2.js.map
