const l=(e,t)=>(e??"").replace(/\{(\w+)\}/g,(c,a)=>a in t?String(t[a]):c),p=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]);export{p as e,l as f};
