import{a5 as Ce,b as ae,m as de,a3 as fe,a6 as ve,t as he,c as k,f as U,a4 as le,h as n,p as ge,I as Z,a0 as ee,a7 as ke,j as me,a8 as Ie,g as Ve,r as F,x as we,_ as Se,a9 as Pe,w as ie,aa as ye,F as M,n as z,a1 as $e,o as Re,u as Be,k as Fe,l as Te,ab as Oe,ac as De,ad as Ne,ae as Le,A as Ee,B as C,C as oe,D as T,E as Ae,G as H,af as Me,ag as A,H as g,L as R,J as B,K as se,M as re}from"./index.8ae8e2b3.js";import{V as We,c as je,u as _e,d as Ue,e as qe,g as He,h as Ke,M as ze,m as Ge,f as Je,a as Xe,b as ue}from"./VTable.40e00f86.js";class te{constructor(a){let{x:l,y:i,width:t,height:o}=a;this.x=l,this.y=i,this.width=t,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ye(e){const a=e.getBoundingClientRect(),l=getComputedStyle(e),i=l.transform;if(i){let t,o,r,s,u;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),o=+t[0],r=+t[5],s=+t[12],u=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),o=+t[0],r=+t[3],s=+t[4],u=+t[5];else return new te(a);const d=l.transformOrigin,h=a.x-s-(1-o)*parseFloat(d),f=a.y-u-(1-r)*parseFloat(d.slice(d.indexOf(" ")+1)),m=o?a.width/o:e.offsetWidth+1,_=r?a.height/r:e.offsetHeight+1;return new te({x:h,y:f,width:m,height:_})}else return new te(a)}function Qe(e,a,l){if(typeof e.animate>"u")return{finished:Promise.resolve()};const i=e.animate(a,l);return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const Ze="cubic-bezier(0.4, 0, 0.2, 1)";function et(e,a){if(!Ce)return;const l=a.modifiers||{},i=a.value,{handler:t,options:o}=typeof i=="object"?i:{handler:i,options:{}},r=new IntersectionObserver(function(){var s;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const h=(s=e._observe)==null?void 0:s[a.instance.$.uid];if(!h)return;const f=u.some(m=>m.isIntersecting);t&&(!l.quiet||h.init)&&(!l.once||f||h.init)&&t(f,u,d),f&&l.once?be(e,a):h.init=!0},o);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:r},r.observe(e)}function be(e,a){var l;const i=(l=e._observe)==null?void 0:l[a.instance.$.uid];!i||(i.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const tt={mounted:et,unmounted:be},nt=tt;const lt=ae({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...de()},setup(e,a){let{attrs:l}=a;const{themeClasses:i}=fe(e),{backgroundColorClasses:t,backgroundColorStyles:o}=ve(he(e,"color")),r=k(()=>{const s={};return e.length&&(s[e.vertical?"maxHeight":"maxWidth"]=le(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=le(e.thickness)),s});return U(()=>n("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},i.value,t.value],style:[r.value,o.value],"aria-orientation":!l.role||l.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${l.role||"separator"}`},null)),{}}});const K=ae({name:"VFieldLabel",props:{floating:Boolean},setup(e,a){let{slots:l}=a;return U(()=>n(We,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},l)),{}}}),at=["underlined","outlined","filled","solo","plain"],pe=ge({appendInnerIcon:Z,bgColor:String,clearable:Boolean,clearIcon:{type:Z,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Z,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>at.includes(e)},"onClick:clear":ee,"onClick:appendInner":ee,"onClick:prependInner":ee,...de(),...ke()},"v-field"),xe=me()({name:"VField",inheritAttrs:!1,props:{id:String,...je(),...pe()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:i,slots:t}=a;const{themeClasses:o}=fe(e),{loaderClasses:r}=Ie(e),{focusClasses:s,isFocused:u,focus:d,blur:h}=_e(e),{InputIcon:f}=Ue(e),m=k(()=>e.dirty||e.active),_=k(()=>!e.singleLine&&!!(e.label||t.label)),I=Ve(),y=k(()=>e.id||`input-${I}`),O=F(),c=F(),x=F(),{backgroundColorClasses:G,backgroundColorStyles:J}=ve(he(e,"bgColor")),{textColorClasses:v,textColorStyles:W}=we(k(()=>m.value&&u.value&&!e.error&&!e.disabled?e.color:void 0));Se(m,P=>{if(_.value){const V=O.value.$el,$=c.value.$el,b=Ye(V),p=$.getBoundingClientRect(),L=p.x-b.x,D=p.y-b.y-(b.height/2-p.height/2),w=p.width/.75,X=Math.abs(w-b.width)>1?{maxWidth:le(w)}:void 0,E=getComputedStyle(V),j=getComputedStyle($),Y=parseFloat(E.transitionDuration)*1e3||150,q=parseFloat(j.getPropertyValue("--v-field-label-scale")),Q=j.getPropertyValue("color");V.style.visibility="visible",$.style.visibility="hidden",Qe(V,{transform:`translate(${L}px, ${D}px) scale(${q})`,color:Q,...X},{duration:Y,easing:Ze,direction:P?"normal":"reverse"}).finished.then(()=>{V.style.removeProperty("visibility"),$.style.removeProperty("visibility")})}},{flush:"post"});const S=k(()=>({isActive:m,isFocused:u,controlRef:x,blur:h,focus:d}));function N(P){P.target!==document.activeElement&&P.preventDefault(),i("click:control",P)}return U(()=>{var P,V,$;const b=e.variant==="outlined",p=t["prepend-inner"]||e.prependInnerIcon,L=!!(e.clearable||t.clear),D=!!(t["append-inner"]||e.appendInnerIcon||L),w=t.label?t.label({label:e.label,props:{for:y.value}}):e.label;return n("div",z({class:["v-field",{"v-field--active":m.value,"v-field--appended":D,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":p,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!w,[`v-field--variant-${e.variant}`]:!0},o.value,G.value,s.value,r.value],style:[J.value,W.value],onClick:N},l),[n("div",{class:"v-field__overlay"},null),n(Pe,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:t.loader}),p&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(f,{key:"prepend-icon",name:"prependInner"},null),(P=t["prepend-inner"])==null?void 0:P.call(t,S.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&_.value&&n(K,{key:"floating-label",ref:c,class:[v.value],floating:!0,for:y.value},{default:()=>[w]}),n(K,{ref:O,for:y.value},{default:()=>[w]}),(V=t.default)==null?void 0:V.call(t,{...S.value,props:{id:y.value,class:"v-field__input"},focus:d,blur:h})]),L&&n(qe,{key:"clear"},{default:()=>[ie(n("div",{class:"v-field__clearable"},[t.clear?t.clear():n(f,{name:"clear"},null)]),[[ye,e.dirty]])]}),D&&n("div",{key:"append",class:"v-field__append-inner"},[($=t["append-inner"])==null?void 0:$.call(t,S.value),e.appendInnerIcon&&n(f,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",v.value]},[b&&n(M,null,[n("div",{class:"v-field__outline__start"},null),_.value&&n("div",{class:"v-field__outline__notch"},[n(K,{ref:c,floating:!0,for:y.value},{default:()=>[w]})]),n("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&_.value&&n(K,{ref:c,floating:!0,for:y.value},{default:()=>[w]})])])}),{controlRef:x}}});function it(e){const a=Object.keys(xe.props).filter(l=>!$e(l));return Re(e,a)}const ot=ae({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...He({transition:{component:Ke}})},setup(e,a){let{slots:l}=a;const i=k(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return U(()=>n(ze,{transition:e.transition},{default:()=>[ie(n("div",{class:"v-counter"},[l.default?l.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[ye,e.active]])]})),{}}}),ne=Symbol("Forwarded refs");function st(e){for(var a=arguments.length,l=new Array(a>1?a-1:0),i=1;i<a;i++)l[i-1]=arguments[i];return e[ne]=l,new Proxy(e,{get(t,o){if(Reflect.has(t,o))return Reflect.get(t,o);for(const r of l)if(r.value&&Reflect.has(r.value,o)){const s=Reflect.get(r.value,o);return typeof s=="function"?s.bind(r.value):s}},getOwnPropertyDescriptor(t,o){const r=Reflect.getOwnPropertyDescriptor(t,o);if(r)return r;if(!(typeof o=="symbol"||o.startsWith("__"))){for(const s of l){if(!s.value)continue;const u=Reflect.getOwnPropertyDescriptor(s.value,o);if(u)return u;if("_"in s.value&&"setupState"in s.value._){const d=Reflect.getOwnPropertyDescriptor(s.value._.setupState,o);if(d)return d}}for(const s of l){let u=s.value&&Object.getPrototypeOf(s.value);for(;u;){const d=Reflect.getOwnPropertyDescriptor(u,o);if(d)return d;u=Object.getPrototypeOf(u)}}for(const s of l){const u=s.value&&s.value[ne];if(!u)continue;const d=u.slice();for(;d.length;){const h=d.shift(),f=Reflect.getOwnPropertyDescriptor(h.value,o);if(f)return f;const m=h.value&&h.value[ne];m&&d.push(...m)}}}}})}const rt=["color","file","time","date","datetime-local","week","month"],ut=ge({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...Ge(),...pe()},"v-text-field"),ce=me()({name:"VTextField",directives:{Intersect:nt},inheritAttrs:!1,props:ut(),emits:{"click:control":e=>!0,"click:input":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:i,slots:t}=a;const o=Be(e,"modelValue"),{isFocused:r,focus:s,blur:u}=_e(e),d=k(()=>{var v;return typeof e.counterValue=="function"?e.counterValue(o.value):((v=o.value)!=null?v:"").toString().length}),h=k(()=>{if(l.maxlength)return l.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function f(v,W){var S,N;!e.autofocus||!v||(S=W[0].target)==null||(N=S.focus)==null||N.call(S)}const m=F(),_=F(),I=F(),y=k(()=>rt.includes(e.type)||e.persistentPlaceholder||r.value),O=k(()=>e.messages.length?e.messages:r.value||e.persistentHint?e.hint:"");function c(){if(I.value!==document.activeElement){var v;(v=I.value)==null||v.focus()}r.value||s()}function x(v){c(),i("click:control",v)}function G(v){v.stopPropagation(),c(),De(()=>{o.value=null,Ne(e["onClick:clear"],v)})}function J(v){o.value=v.target.value}return U(()=>{const v=!!(t.counter||e.counter||e.counterValue),W=!!(v||t.details),[S,N]=Fe(l),[{modelValue:P,...V}]=Je(e),[$]=it(e);return n(Xe,z({ref:m,modelValue:o.value,"onUpdate:modelValue":b=>o.value=b,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},S,V,{focused:r.value,messages:O.value}),{...t,default:b=>{let{id:p,isDisabled:L,isDirty:D,isReadonly:w,isValid:X}=b;return n(xe,z({ref:_,onMousedown:E=>{E.target!==I.value&&E.preventDefault()},"onClick:control":x,"onClick:clear":G,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},$,{id:p.value,active:y.value||D.value,dirty:D.value||e.dirty,focused:r.value,error:X.value===!1}),{...t,default:E=>{let{props:{class:j,...Y}}=E;const q=ie(n("input",z({ref:I,value:o.value,onInput:J,autofocus:e.autofocus,readonly:w.value,disabled:L.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:c,onBlur:u},Y,N),null),[[Te("intersect"),{handler:f},null,{once:!0}]]);return n(M,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),t.default?n("div",{class:j,onClick:Q=>i("click:input",Q),"data-no-activator":""},[t.default(),q]):Oe(q,{class:j}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:W?b=>{var p;return n(M,null,[(p=t.details)==null?void 0:p.call(t,b),v&&n(M,null,[n("span",null,null),n(ot,{active:e.persistentCounter||r.value,value:d.value,max:h.value},t.counter)])])}:void 0})}),st({},m,_,I)}}),ct=g("h1",{class:"text-center"},"TO-DO LIST",-1),dt=g("thead",null,[g("tr",{class:"list-tr"},[g("th",null,"Mission Name"),g("th",null,"Settings")])],-1),ft={key:0},vt=g("td",{class:"text-center",colspan:"2"},"No Mission yet...",-1),ht=[vt],gt={key:1},mt={key:0},yt={key:1},_t=g("h1",{class:"text-center"},"DONE",-1),bt=g("thead",null,[g("tr",null,[g("th",null,"Mission Name"),g("th",null,"Settings")])],-1),pt={key:0},xt=g("td",{class:"text-center",colspan:"2"},"No Mission yet...",-1),Ct=[xt],Vt={__name:"ListView",setup(e){const a=Le(),{addItem:l,editItem:i,delItem:t,confirmEditItem:o,undoEditItem:r,delFinishedItem:s}=a,{items:u,finishedItems:d}=Ee(a),h=F(""),f=F(null),m=F([]),_={required(y){return!!y||"\u6B04\u4F4D\u5FC5\u586B"},length(y){return y.length>=2||"\u5FC5\u9808\u5169\u500B\u5B57\u4EE5\u4E0A"}},I=async()=>{const y=await f.value.validate();console.log(y),!(y.length>0)&&(l(h.value),console.log(f.value.$el),f.value.$el.querySelector("input").blur(),f.value.reset())};return(y,O)=>(C(),oe(Ae,{id:"list"},{default:T(()=>[n(H,{cols:"12"},{default:T(()=>[ct]),_:1}),n(H,{cols:"12"},{default:T(()=>[n(ce,{ref_key:"input",ref:f,modelValue:h.value,"onUpdate:modelValue":O[0]||(O[0]=c=>h.value=c),label:"Add an New Mission",clearable:"",counter:"",maxlength:"20",rules:[_.required,_.length],onKeydown:Me(I,["enter"])},{append:T(()=>[n(A,{icon:"mdi-plus",variant:"text",onClick:I})]),_:1},8,["modelValue","rules","onKeydown"]),n(ue,null,{default:T(()=>[dt,g("tbody",null,[R(u).length===0?(C(),B("tr",ft,ht)):(C(!0),B(M,{key:1},se(R(u),c=>(C(),B("tr",{key:c.id,ref_for:!0,ref:m.value},[g("td",null,[c.edit?(C(),oe(ce,{key:0,modelValue:c.model,"onUpdate:modelValue":x=>c.model=x,autofocus:"",rules:[_.required,_.length]},null,8,["modelValue","onUpdate:modelValue","rules"])):(C(),B("span",gt,re(c.name),1))]),g("td",null,[c.edit?(C(),B("span",mt,[n(A,{icon:"mdi-check",variant:"text",color:"seagreen",onClick:x=>R(o)(c.id)},null,8,["onClick"]),n(A,{icon:"mdi-undo",variant:"text",color:"deeporange",onClick:x=>R(r)(c.id)},null,8,["onClick"])])):(C(),B("span",yt,[n(A,{icon:"mdi-pencil",variant:"text",color:"seagreen",onClick:x=>R(i)(c.id)},null,8,["onClick"]),n(A,{icon:"mdi-delete",variant:"text",color:"deeporange",onClick:x=>R(t)(c.id)},null,8,["onClick"])]))])]))),128))])]),_:1})]),_:1}),n(lt),n(H,{cols:"12"},{default:T(()=>[_t]),_:1}),n(H,{cols:"12"},{default:T(()=>[n(ue,null,{default:T(()=>[bt,g("tbody",null,[R(d).length===0?(C(),B("tr",pt,Ct)):(C(!0),B(M,{key:1},se(R(d),c=>(C(),B("tr",{key:c.id,ref_for:!0,ref:m.value},[g("td",null,re(c.name),1),g("td",null,[n(A,{icon:"mdi-delete",variant:"text",color:"deeporange",onClick:x=>R(s)(c.id)},null,8,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1}))}};export{Vt as default};
