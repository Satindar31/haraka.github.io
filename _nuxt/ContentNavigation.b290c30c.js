import{d,ax as l,J as f,q as v,W as p,ar as m,ay as g,a4 as h,az as y,O as r,G as _}from"./entry.2ee2b5e7.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=l(u),n=f(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&v("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await m(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(u){const a=h(),{navigation:n}=u,o=e=>r(_,{to:e._path},()=>e.title),t=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),t(s.children,i+1)]):r("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}});export{C as default};
