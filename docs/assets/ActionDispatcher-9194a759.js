import{_ as a,M as l,r as n,o as r,c as i,a as p,b as d}from"./index-733d20a5.js";const u={components:{Multiselect:l},data(){return{actions:["alert","console.log","scrollTop"]}},methods:{dispatchAction(e){switch(e){case"alert":window.alert('You just dispatched "alert" action!');break;case"console.log":console.log('You just dispatched "console.log" action!');break;case"scrollTop":window.scrollTo(0,0);break}}}};function _(e,o,m,h,t,s){const c=n("multiselect");return r(),i("div",null,[o[0]||(o[0]=p("label",{class:"typo__label"},"Open console to see logs.",-1)),d(c,{id:"action-dispatcher",placeholder:"Pick action",options:t.actions,searchable:!1,"reset-after":!0,onSelect:s.dispatchAction,"aria-label":"pick a action"},null,8,["options","onSelect"])])}const f=a(u,[["render",_]]);export{f as default};
