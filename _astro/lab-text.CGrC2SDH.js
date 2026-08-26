const c=(r,i)=>(r??"").replace(/\{(\w+)\}/g,(t,n)=>n in i?String(i[n]):t);export{c as f};
