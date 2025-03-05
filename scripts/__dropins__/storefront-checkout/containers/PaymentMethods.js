/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as n,jsxs as w}from"@dropins/tools/preact-jsx-runtime.js";import{s as z}from"../chunks/store-config.js";import{c as M,b as m}from"../chunks/transform-store-config.js";import"@dropins/tools/event-bus.js";import{classes as P,Slot as I}from"@dropins/tools/lib.js";import{s as R}from"../chunks/setPaymentMethod.js";/* empty css                      */import{IllustratedMessage as B,Icon as N,ProgressSpinner as U,ToggleButton as Z,Skeleton as D,SkeletonRow as f}from"@dropins/tools/components.js";import*as y from"@dropins/tools/preact-compat.js";import{useState as $,useEffect as L,useCallback as q}from"@dropins/tools/preact-compat.js";import{useText as F}from"@dropins/tools/i18n.js";import{w as G}from"../chunks/withConditionalRendering.js";import{useRef as J}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/signals.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/errors.js";import"../fragments.js";import"../chunks/synchronizeCheckout.js";const K=e=>y.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.93 14.8V18.75H5.97C4.75 18.75 3.75 17.97 3.75 17V6.5M3.75 6.5C3.75 5.53 4.74 4.75 5.97 4.75H15.94V8.25H5.97C4.75 8.25 3.75 7.47 3.75 6.5Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.35 11.64H14.04V14.81H19.35V11.64Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),y.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.9304 11.64V8.25H15.1504",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),Q=({code:e,loading:c,selected:s,onChange:r,title:a,icon:o})=>n(Z,{className:"checkout-payment-methods__method",label:a,name:"payment-method",value:e,selected:s,onChange:r,busy:c,icon:o?n(N,{source:o}):void 0}),X=({className:e,paymentMethodContent:c,loading:s=!1,initializing:r=!1,onChange:a=()=>{},options:o,selection:v})=>{const u=F({Title:"Checkout.PaymentMethods.title",EmptyState:"Checkout.PaymentMethods.emptyState"});return r?n(Y,{}):w("div",{className:P(["checkout-payment-methods",e]),children:[n("h2",{className:"checkout-payment-methods__title",children:u.Title}),!s&&o.length===0&&n(B,{icon:n(N,{source:K}),message:n("p",{children:u.EmptyState})}),w("div",{className:P(["checkout-payment-methods__wrapper",["checkout-payment-methods__wrapper--loading",s]]),children:[s&&n(U,{className:"checkout-payment-methods__spinner"}),n("div",{className:P(["checkout-payment-methods__methods",["checkout-payment-methods--full-width",o.length%2!==0]]),children:o==null?void 0:o.map(d=>n(Q,{code:d.code,onChange:a,selected:d.code===v,title:d.displayLabel??!0?d.title:"",icon:d.icon},d.code))}),c&&n("div",{className:"checkout-payment-methods__content",children:c})]})]})},Y=()=>w(D,{"data-testid":"payment-methods-skeleton",children:[n(f,{variant:"heading",size:"medium"}),n(f,{variant:"empty",size:"medium"}),n(f,{size:"xlarge",fullWidth:!0}),n(f,{size:"xlarge",fullWidth:!0})]}),ee=(e,c)=>{const s=J(e);return c(s.current,e)||(s.current=e),s.current},O=({slots:e,setOnChange:c={}})=>{var b,_,H,E,x;const[s]=$(c),r=e==null?void 0:e.Methods;L(()=>{e!=null&&e.Handlers&&console.warn("The `slots.Handlers` prop is deprecated and will be removed in future versions. Use the `Methods` object instead."),c&&console.warn("The `setOnChange` prop is deprecated and will be removed in future versions. Use the `Methods` object instead.")},[]);const a=M.value.data,o=!!M.value.data,v=M.value.pending,u=(a==null?void 0:a.isVirtual)??!1,d=(b=a==null?void 0:a.shippingAddresses)==null?void 0:b[0],V=(a==null?void 0:a.availablePaymentMethods)||[],p=(_=a==null?void 0:a.selectedPaymentMethod)==null?void 0:_.code,S=u?!0:!!d,l=ee(V.filter(t=>{var i;return((i=r==null?void 0:r[t.code])==null?void 0:i.enabled)!==!1}),(t,i)=>t.length!==i.length?!1:t.every((h,C)=>h.code===i[C].code)),g=q(t=>{var i;m.value=t,!(!t||!S)&&t!==p&&(s[t]===!1||((i=r==null?void 0:r[t])==null?void 0:i.setOnChange)===!1||R({code:t}).catch(console.error))},[S,r,p,s]);L(()=>{if(!o||!!!(l!=null&&l.length))return;const i=l[0].code,h=p||m.value,C=h?l.some(W=>W.code===h):!1;g(C?h:i)},[l,o,g,p]);const j=t=>{g(t)},k=m.value?((E=(H=e==null?void 0:e.Methods)==null?void 0:H[m.value])==null?void 0:E.render)||((x=e==null?void 0:e.Handlers)==null?void 0:x[m.value]):null,A=k?n(I,{name:"PaymentMethodContent",slot:k,context:{cartId:z.cartId||"",replaceHTML(t){this.replaceWith(t)}}},k):void 0,T=l.map(t=>{const i=(r==null?void 0:r[t.code])||{};return{...t,...i}});return n(X,{initializing:o===!1,loading:o&&v,onChange:j,options:T,paymentMethodContent:A,selection:m.value})};O.displayName="PaymentMethodsContainer";const ge=G(O);export{ge as PaymentMethods,ge as default};
