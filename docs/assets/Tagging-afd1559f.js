import{_ as r,M as c,r as d,o as u,c as p,a as t,b as i,t as g}from"./index-733d20a5.js";const m={components:{Multiselect:c},data(){return{value:[{name:"Javascript",code:"js"}],options:[{name:"Vue.js",code:"vu"},{name:"Javascript",code:"js"},{name:"Open Source",code:"os"}]}},methods:{addTag(o){const e={name:o,code:o.substring(0,2)+Math.floor(Math.random()*1e7)};this.options.push(e),this.value.push(e)}}},_={class:"language-json"};function v(o,e,h,b,a,s){const l=d("multiselect");return u(),p("div",null,[e[1]||(e[1]=t("label",{class:"typo__label"},"Tagging",-1)),i(l,{id:"tagging",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"name","track-by":"code",options:a.options,multiple:!0,taggable:!0,onTag:s.addTag},null,8,["modelValue","options","onTag"]),t("pre",_,[t("code",null,g(a.value),1)])])}const V=r(m,[["render",v]]);export{V as default};
