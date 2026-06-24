"use strict";(()=>{var K5=Object.defineProperty,f9=Object.defineProperties,_9=Object.getOwnPropertyDescriptor,y9=Object.getOwnPropertyDescriptors;var t7=Object.getOwnPropertySymbols;var b9=Object.prototype.hasOwnProperty,k9=Object.prototype.propertyIsEnumerable;var L7=(H,V,C)=>V in H?K5(H,V,{enumerable:!0,configurable:!0,writable:!0,value:C}):H[V]=C,n=(H,V)=>{for(var C in V||(V={}))b9.call(V,C)&&L7(H,C,V[C]);if(t7)for(var C of t7(V))k9.call(V,C)&&L7(H,C,V[C]);return H},A=(H,V)=>f9(H,y9(V));var p=(H,V,C)=>()=>{if(C)throw C[0];try{return H&&(V=H(H=0)),V}catch(e){throw C=[e],e}};var B=(H,V)=>{for(var C in V)K5(H,C,{get:V[C],enumerable:!0})};var m=(H,V,C,e)=>{for(var t=e>1?void 0:e?_9(V,C):V,L=H.length-1,r;L>=0;L--)(r=H[L])&&(t=(e?r(V,C,t):r(t))||t);return e&&t&&K5(V,C,t),t};var r5,i5,Y5,r7,D2,i7,P,J5,o5,X5=p(()=>{r5=window,i5=r5.ShadowRoot&&(r5.ShadyCSS===void 0||r5.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y5=Symbol(),r7=new WeakMap,D2=class{constructor(V,C,e){if(this._$cssResult$=!0,e!==Y5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=V,this.t=C}get styleSheet(){let V=this.o,C=this.t;if(i5&&V===void 0){let e=C!==void 0&&C.length===1;e&&(V=r7.get(C)),V===void 0&&((this.o=V=new CSSStyleSheet).replaceSync(this.cssText),e&&r7.set(C,V))}return V}toString(){return this.cssText}},i7=H=>new D2(typeof H=="string"?H:H+"",void 0,Y5),P=(H,...V)=>{let C=H.length===1?H[0]:V.reduce(((e,t,L)=>e+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+H[L+1]),H[0]);return new D2(C,H,Y5)},J5=(H,V)=>{i5?H.adoptedStyleSheets=V.map((C=>C instanceof CSSStyleSheet?C:C.styleSheet)):V.forEach((C=>{let e=document.createElement("style"),t=r5.litNonce;t!==void 0&&e.setAttribute("nonce",t),e.textContent=C.cssText,H.appendChild(e)}))},o5=i5?H=>H:H=>H instanceof CSSStyleSheet?(V=>{let C="";for(let e of V.cssRules)C+=e.cssText;return i7(C)})(H):H});var C3,a5,o7,O9,a7,H3,M7,e3,V3,T1,M5=p(()=>{X5();X5();a5=window,o7=a5.trustedTypes,O9=o7?o7.emptyScript:"",a7=a5.reactiveElementPolyfillSupport,H3={toAttribute(H,V){switch(V){case Boolean:H=H?O9:null;break;case Object:case Array:H=H==null?H:JSON.stringify(H)}return H},fromAttribute(H,V){let C=H;switch(V){case Boolean:C=H!==null;break;case Number:C=H===null?null:Number(H);break;case Object:case Array:try{C=JSON.parse(H)}catch(e){C=null}}return C}},M7=(H,V)=>V!==H&&(V==V||H==H),e3={attribute:!0,type:String,converter:H3,reflect:!1,hasChanged:M7},V3="finalized",T1=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(V){var C;this.finalize(),((C=this.h)!==null&&C!==void 0?C:this.h=[]).push(V)}static get observedAttributes(){this.finalize();let V=[];return this.elementProperties.forEach(((C,e)=>{let t=this._$Ep(e,C);t!==void 0&&(this._$Ev.set(t,e),V.push(t))})),V}static createProperty(V,C=e3){if(C.state&&(C.attribute=!1),this.finalize(),this.elementProperties.set(V,C),!C.noAccessor&&!this.prototype.hasOwnProperty(V)){let e=typeof V=="symbol"?Symbol():"__"+V,t=this.getPropertyDescriptor(V,e,C);t!==void 0&&Object.defineProperty(this.prototype,V,t)}}static getPropertyDescriptor(V,C,e){return{get(){return this[C]},set(t){let L=this[V];this[C]=t,this.requestUpdate(V,L,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(V){return this.elementProperties.get(V)||e3}static finalize(){if(this.hasOwnProperty(V3))return!1;this[V3]=!0;let V=Object.getPrototypeOf(this);if(V.finalize(),V.h!==void 0&&(this.h=[...V.h]),this.elementProperties=new Map(V.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let C=this.properties,e=[...Object.getOwnPropertyNames(C),...Object.getOwnPropertySymbols(C)];for(let t of e)this.createProperty(t,C[t])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(V){let C=[];if(Array.isArray(V)){let e=new Set(V.flat(1/0).reverse());for(let t of e)C.unshift(o5(t))}else V!==void 0&&C.push(o5(V));return C}static _$Ep(V,C){let e=C.attribute;return e===!1?void 0:typeof e=="string"?e:typeof V=="string"?V.toLowerCase():void 0}_$Eu(){var V;this._$E_=new Promise((C=>this.enableUpdating=C)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(V=this.constructor.h)===null||V===void 0||V.forEach((C=>C(this)))}addController(V){var C,e;((C=this._$ES)!==null&&C!==void 0?C:this._$ES=[]).push(V),this.renderRoot!==void 0&&this.isConnected&&((e=V.hostConnected)===null||e===void 0||e.call(V))}removeController(V){var C;(C=this._$ES)===null||C===void 0||C.splice(this._$ES.indexOf(V)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((V,C)=>{this.hasOwnProperty(C)&&(this._$Ei.set(C,this[C]),delete this[C])}))}createRenderRoot(){var V;let C=(V=this.shadowRoot)!==null&&V!==void 0?V:this.attachShadow(this.constructor.shadowRootOptions);return J5(C,this.constructor.elementStyles),C}connectedCallback(){var V;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(V=this._$ES)===null||V===void 0||V.forEach((C=>{var e;return(e=C.hostConnected)===null||e===void 0?void 0:e.call(C)}))}enableUpdating(V){}disconnectedCallback(){var V;(V=this._$ES)===null||V===void 0||V.forEach((C=>{var e;return(e=C.hostDisconnected)===null||e===void 0?void 0:e.call(C)}))}attributeChangedCallback(V,C,e){this._$AK(V,e)}_$EO(V,C,e=e3){var t;let L=this.constructor._$Ep(V,e);if(L!==void 0&&e.reflect===!0){let r=(((t=e.converter)===null||t===void 0?void 0:t.toAttribute)!==void 0?e.converter:H3).toAttribute(C,e.type);this._$El=V,r==null?this.removeAttribute(L):this.setAttribute(L,r),this._$El=null}}_$AK(V,C){var e;let t=this.constructor,L=t._$Ev.get(V);if(L!==void 0&&this._$El!==L){let r=t.getPropertyOptions(L),i=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:H3;this._$El=L,this[L]=i.fromAttribute(C,r.type),this._$El=null}}requestUpdate(V,C,e){let t=!0;V!==void 0&&(((e=e||this.constructor.getPropertyOptions(V)).hasChanged||M7)(this[V],C)?(this._$AL.has(V)||this._$AL.set(V,C),e.reflect===!0&&this._$El!==V&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(V,e))):t=!1),!this.isUpdatePending&&t&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(C){Promise.reject(C)}let V=this.scheduleUpdate();return V!=null&&await V,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var V;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,L)=>this[L]=t)),this._$Ei=void 0);let C=!1,e=this._$AL;try{C=this.shouldUpdate(e),C?(this.willUpdate(e),(V=this._$ES)===null||V===void 0||V.forEach((t=>{var L;return(L=t.hostUpdate)===null||L===void 0?void 0:L.call(t)})),this.update(e)):this._$Ek()}catch(t){throw C=!1,this._$Ek(),t}C&&this._$AE(e)}willUpdate(V){}_$AE(V){var C;(C=this._$ES)===null||C===void 0||C.forEach((e=>{var t;return(t=e.hostUpdated)===null||t===void 0?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(V)),this.updated(V)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(V){return!0}update(V){this._$EC!==void 0&&(this._$EC.forEach(((C,e)=>this._$EO(e,this[e],C))),this._$EC=void 0),this._$Ek()}updated(V){}firstUpdated(V){}};T1[V3]=!0,T1.elementProperties=new Map,T1.elementStyles=[],T1.shadowRootOptions={mode:"open"},a7==null||a7({ReactiveElement:T1}),((C3=a5.reactiveElementVersions)!==null&&C3!==void 0?C3:a5.reactiveElementVersions=[]).push("1.6.3")});function h7(H,V){if(!Array.isArray(H)||!H.hasOwnProperty("raw"))throw Error("invalid template strings array");return n7!==void 0?n7.createHTML(V):V}function u2(H,V,C=H,e){var t,L,r,i;if(V===u1)return V;let o=e!==void 0?(t=C._$Co)===null||t===void 0?void 0:t[e]:C._$Cl,a=$2(V)?void 0:V._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((L=o==null?void 0:o._$AO)===null||L===void 0||L.call(o,!1),a===void 0?o=void 0:(o=new a(H),o._$AT(H,C,e)),e!==void 0?((r=(i=C)._$Co)!==null&&r!==void 0?r:i._$Co=[])[e]=o:C._$Cl=o),o!==void 0&&(V=u2(H,o._$AS(H,V.values),o,e)),V}var t3,n5,c2,n7,r3,I1,c7,w9,e2,R2,$2,u7,T9,L3,F2,s7,d7,X1,l7,m7,v7,x7,l,eC,u1,k,A7,C2,P9,z2,i3,N2,v2,o3,B9,a3,M3,n3,p7,Z7,x2=p(()=>{n5=window,c2=n5.trustedTypes,n7=c2?c2.createPolicy("lit-html",{createHTML:H=>H}):void 0,r3="$lit$",I1=`lit$${(Math.random()+"").slice(9)}$`,c7="?"+I1,w9=`<${c7}>`,e2=document,R2=()=>e2.createComment(""),$2=H=>H===null||typeof H!="object"&&typeof H!="function",u7=Array.isArray,T9=H=>u7(H)||typeof(H==null?void 0:H[Symbol.iterator])=="function",L3=`[ 	
\f\r]`,F2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,s7=/-->/g,d7=/>/g,X1=RegExp(`>|${L3}(?:([^\\s"'>=/]+)(${L3}*=${L3}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),l7=/'/g,m7=/"/g,v7=/^(?:script|style|textarea|title)$/i,x7=H=>(V,...C)=>({_$litType$:H,strings:V,values:C}),l=x7(1),eC=x7(2),u1=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),A7=new WeakMap,C2=e2.createTreeWalker(e2,129,null,!1);P9=(H,V)=>{let C=H.length-1,e=[],t,L=V===2?"<svg>":"",r=F2;for(let i=0;i<C;i++){let o=H[i],a,M,d=-1,s=0;for(;s<o.length&&(r.lastIndex=s,M=r.exec(o),M!==null);)s=r.lastIndex,r===F2?M[1]==="!--"?r=s7:M[1]!==void 0?r=d7:M[2]!==void 0?(v7.test(M[2])&&(t=RegExp("</"+M[2],"g")),r=X1):M[3]!==void 0&&(r=X1):r===X1?M[0]===">"?(r=t!=null?t:F2,d=-1):M[1]===void 0?d=-2:(d=r.lastIndex-M[2].length,a=M[1],r=M[3]===void 0?X1:M[3]==='"'?m7:l7):r===m7||r===l7?r=X1:r===s7||r===d7?r=F2:(r=X1,t=void 0);let x=r===X1&&H[i+1].startsWith("/>")?" ":"";L+=r===F2?o+w9:d>=0?(e.push(a),o.slice(0,d)+r3+o.slice(d)+I1+x):o+I1+(d===-2?(e.push(void 0),i):x)}return[h7(H,L+(H[C]||"<?>")+(V===2?"</svg>":"")),e]},z2=class H{constructor({strings:V,_$litType$:C},e){let t;this.parts=[];let L=0,r=0,i=V.length-1,o=this.parts,[a,M]=P9(V,C);if(this.el=H.createElement(a,e),C2.currentNode=this.el.content,C===2){let d=this.el.content,s=d.firstChild;s.remove(),d.append(...s.childNodes)}for(;(t=C2.nextNode())!==null&&o.length<i;){if(t.nodeType===1){if(t.hasAttributes()){let d=[];for(let s of t.getAttributeNames())if(s.endsWith(r3)||s.startsWith(I1)){let x=M[r++];if(d.push(s),x!==void 0){let h=t.getAttribute(x.toLowerCase()+r3).split(I1),y=/([.?@])?(.*)/.exec(x);o.push({type:1,index:L,name:y[2],strings:h,ctor:y[1]==="."?o3:y[1]==="?"?a3:y[1]==="@"?M3:v2})}else o.push({type:6,index:L})}for(let s of d)t.removeAttribute(s)}if(v7.test(t.tagName)){let d=t.textContent.split(I1),s=d.length-1;if(s>0){t.textContent=c2?c2.emptyScript:"";for(let x=0;x<s;x++)t.append(d[x],R2()),C2.nextNode(),o.push({type:2,index:++L});t.append(d[s],R2())}}}else if(t.nodeType===8)if(t.data===c7)o.push({type:2,index:L});else{let d=-1;for(;(d=t.data.indexOf(I1,d+1))!==-1;)o.push({type:7,index:L}),d+=I1.length-1}L++}}static createElement(V,C){let e=e2.createElement("template");return e.innerHTML=V,e}};i3=class{constructor(V,C){this._$AV=[],this._$AN=void 0,this._$AD=V,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(V){var C;let{el:{content:e},parts:t}=this._$AD,L=((C=V==null?void 0:V.creationScope)!==null&&C!==void 0?C:e2).importNode(e,!0);C2.currentNode=L;let r=C2.nextNode(),i=0,o=0,a=t[0];for(;a!==void 0;){if(i===a.index){let M;a.type===2?M=new N2(r,r.nextSibling,this,V):a.type===1?M=new a.ctor(r,a.name,a.strings,this,V):a.type===6&&(M=new n3(r,this,V)),this._$AV.push(M),a=t[++o]}i!==(a==null?void 0:a.index)&&(r=C2.nextNode(),i++)}return C2.currentNode=e2,L}v(V){let C=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(V,e,C),C+=e.strings.length-2):e._$AI(V[C])),C++}},N2=class H{constructor(V,C,e,t){var L;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=V,this._$AB=C,this._$AM=e,this.options=t,this._$Cp=(L=t==null?void 0:t.isConnected)===null||L===void 0||L}get _$AU(){var V,C;return(C=(V=this._$AM)===null||V===void 0?void 0:V._$AU)!==null&&C!==void 0?C:this._$Cp}get parentNode(){let V=this._$AA.parentNode,C=this._$AM;return C!==void 0&&(V==null?void 0:V.nodeType)===11&&(V=C.parentNode),V}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(V,C=this){V=u2(this,V,C),$2(V)?V===k||V==null||V===""?(this._$AH!==k&&this._$AR(),this._$AH=k):V!==this._$AH&&V!==u1&&this._(V):V._$litType$!==void 0?this.g(V):V.nodeType!==void 0?this.$(V):T9(V)?this.T(V):this._(V)}k(V){return this._$AA.parentNode.insertBefore(V,this._$AB)}$(V){this._$AH!==V&&(this._$AR(),this._$AH=this.k(V))}_(V){this._$AH!==k&&$2(this._$AH)?this._$AA.nextSibling.data=V:this.$(e2.createTextNode(V)),this._$AH=V}g(V){var C;let{values:e,_$litType$:t}=V,L=typeof t=="number"?this._$AC(V):(t.el===void 0&&(t.el=z2.createElement(h7(t.h,t.h[0]),this.options)),t);if(((C=this._$AH)===null||C===void 0?void 0:C._$AD)===L)this._$AH.v(e);else{let r=new i3(L,this),i=r.u(this.options);r.v(e),this.$(i),this._$AH=r}}_$AC(V){let C=A7.get(V.strings);return C===void 0&&A7.set(V.strings,C=new z2(V)),C}T(V){u7(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,e,t=0;for(let L of V)t===C.length?C.push(e=new H(this.k(R2()),this.k(R2()),this,this.options)):e=C[t],e._$AI(L),t++;t<C.length&&(this._$AR(e&&e._$AB.nextSibling,t),C.length=t)}_$AR(V=this._$AA.nextSibling,C){var e;for((e=this._$AP)===null||e===void 0||e.call(this,!1,!0,C);V&&V!==this._$AB;){let t=V.nextSibling;V.remove(),V=t}}setConnected(V){var C;this._$AM===void 0&&(this._$Cp=V,(C=this._$AP)===null||C===void 0||C.call(this,V))}},v2=class{constructor(V,C,e,t,L){this.type=1,this._$AH=k,this._$AN=void 0,this.element=V,this.name=C,this._$AM=t,this.options=L,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(V,C=this,e,t){let L=this.strings,r=!1;if(L===void 0)V=u2(this,V,C,0),r=!$2(V)||V!==this._$AH&&V!==u1,r&&(this._$AH=V);else{let i=V,o,a;for(V=L[0],o=0;o<L.length-1;o++)a=u2(this,i[e+o],C,o),a===u1&&(a=this._$AH[o]),r||(r=!$2(a)||a!==this._$AH[o]),a===k?V=k:V!==k&&(V+=(a!=null?a:"")+L[o+1]),this._$AH[o]=a}r&&!t&&this.j(V)}j(V){V===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,V!=null?V:"")}},o3=class extends v2{constructor(){super(...arguments),this.type=3}j(V){this.element[this.name]=V===k?void 0:V}},B9=c2?c2.emptyScript:"",a3=class extends v2{constructor(){super(...arguments),this.type=4}j(V){V&&V!==k?this.element.setAttribute(this.name,B9):this.element.removeAttribute(this.name)}},M3=class extends v2{constructor(V,C,e,t,L){super(V,C,e,t,L),this.type=5}_$AI(V,C=this){var e;if((V=(e=u2(this,V,C,0))!==null&&e!==void 0?e:k)===u1)return;let t=this._$AH,L=V===k&&t!==k||V.capture!==t.capture||V.once!==t.once||V.passive!==t.passive,r=V!==k&&(t===k||L);L&&this.element.removeEventListener(this.name,this,t),r&&this.element.addEventListener(this.name,this,V),this._$AH=V}handleEvent(V){var C,e;typeof this._$AH=="function"?this._$AH.call((e=(C=this.options)===null||C===void 0?void 0:C.host)!==null&&e!==void 0?e:this.element,V):this._$AH.handleEvent(V)}},n3=class{constructor(V,C,e){this.element=V,this.type=6,this._$AN=void 0,this._$AM=C,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(V){u2(this,V)}},p7=n5.litHtmlPolyfillSupport;p7==null||p7(z2,N2),((t3=n5.litHtmlVersions)!==null&&t3!==void 0?t3:n5.litHtmlVersions=[]).push("2.8.0");Z7=(H,V,C)=>{var e,t;let L=(e=C==null?void 0:C.renderBefore)!==null&&e!==void 0?e:V,r=L._$litPart$;if(r===void 0){let i=(t=C==null?void 0:C.renderBefore)!==null&&t!==void 0?t:null;L._$litPart$=r=new N2(V.insertBefore(R2(),i),i,void 0,C!=null?C:{})}return r._$AI(H),r}});var s3,d3,_,g7,S7=p(()=>{M5();M5();x2();x2();_=class extends T1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var V,C;let e=super.createRenderRoot();return(V=(C=this.renderOptions).renderBefore)!==null&&V!==void 0||(C.renderBefore=e.firstChild),e}update(V){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(V),this._$Do=Z7(C,this.renderRoot,this.renderOptions)}connectedCallback(){var V;super.connectedCallback(),(V=this._$Do)===null||V===void 0||V.setConnected(!0)}disconnectedCallback(){var V;super.disconnectedCallback(),(V=this._$Do)===null||V===void 0||V.setConnected(!1)}render(){return u1}};_.finalized=!0,_._$litElement$=!0,(s3=globalThis.litElementHydrateSupport)===null||s3===void 0||s3.call(globalThis,{LitElement:_});g7=globalThis.litElementPolyfillSupport;g7==null||g7({LitElement:_});((d3=globalThis.litElementVersions)!==null&&d3!==void 0?d3:globalThis.litElementVersions=[]).push("3.3.3")});var f7=p(()=>{});var W=p(()=>{M5();x2();S7();f7()});var T,y7=p(()=>{T=H=>V=>typeof V=="function"?((C,e)=>(customElements.define(C,e),e))(H,V):((C,e)=>{let{kind:t,elements:L}=e;return{kind:t,elements:L,finisher(r){customElements.define(C,r)}}})(H,V)});function v(H){return(V,C)=>C!==void 0?D9(H,V,C):E9(H,V)}var E9,D9,l3=p(()=>{E9=(H,V)=>V.kind==="method"&&V.descriptor&&!("value"in V.descriptor)?A(n({},V),{finisher(C){C.createProperty(V.key,H)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:V.key,initializer(){typeof V.initializer=="function"&&(this[V.key]=V.initializer.call(this))},finisher(C){C.createProperty(V.key,H)}},D9=(H,V,C)=>{V.constructor.createProperty(C,H)}});function Z(H){return v(A(n({},H),{state:!0}))}var b7=p(()=>{l3();});var H2=p(()=>{});var k7=p(()=>{H2();});var O7=p(()=>{H2();});var w7=p(()=>{H2();});var T7=p(()=>{H2();});var m3,wC,A3=p(()=>{H2();wC=((m3=window.HTMLSlotElement)===null||m3===void 0?void 0:m3.prototype.assignedElements)!=null?(H,V)=>H.assignedElements(V):(H,V)=>H.assignedNodes(V).filter((C=>C.nodeType===Node.ELEMENT_NODE))});var P7=p(()=>{H2();A3();});var Q=p(()=>{y7();l3();b7();k7();O7();w7();T7();A3();P7()});var P1,s5=p(()=>{"use strict";P1=(H,V)=>{if(typeof H!=typeof V)return!1;if(typeof H=="object"&&typeof V=="object"&&H!==null&&V!==null){let C=[...new Set([...Object.keys(H),...Object.keys(V)])];return C.every(e=>Object.keys(H).includes(e)&&Object.keys(V).includes(e))?C.every(e=>P1(H[e],V[e])):!1}return H===V}});var U=p(()=>{"use strict"});var F9,R9,$9,d5,z9,c3=p(()=>{"use strict";s5();U();F9=H=>({service:H.service,service_data:H.service_data,target:{entity_id:H.entity_id?H.entity_id:void 0}}),R9=H=>({start:H.start,stop:H.stop,actions:z9(H.actions.map(F9)),conditions:{type:H.condition_type=="and"?"and":"or",items:H.conditions||[],track_changes:!!H.track_conditions}}),$9=H=>{switch(H){case"mon":return"monday";case"tue":return"tuesday";case"wed":return"wednesday";case"thu":return"thursday";case"fri":return"friday";case"sat":return"saturday";case"sun":return"sunday";case"workday":return"workday";case"weekend":return"weekend";default:return"daily"}},d5=H=>A(n({},Object.fromEntries(Object.entries(H).filter(([V])=>!["slots","weekdays",""].includes(V)))),{entries:[{slots:H.timeslots.map(R9),weekdays:H.weekdays.map($9)}]}),z9=H=>{if(H.length==1)return H;if(H.every(V=>P1(A(n({},V),{target:void 0}),A(n({},H[0]),{target:void 0})))){let V=[...new Set(H.map(e=>{var t;return(t=e.target)==null?void 0:t.entity_id}).filter(e=>e!==void 0))];return[A(n({},H[0]),{target:{entity_id:V.length?V:void 0}})]}return H}});var h2,l5=p(()=>{"use strict";c3();h2=H=>H.callWS({type:"scheduler"}).then(V=>V.map(d5))});var G,j1=p(()=>{"use strict";U();G=(H,V)=>{let C=V.hours||0,e=V.minutes||0;(C<0||e<0)&&(C=-Math.abs(C),e=-Math.abs(e));let t=H.hours,L=H.minutes;return t<0&&L>0&&(L=-L),t+=C,L+=e,L>=60||L>0&&t<0&&H.mode!="fixed"?(t=t+1,L-=60):(L<=-60||L<0&&H.mode=="fixed"||L<0&&t>0&&H.mode!="fixed")&&(t=t-1,L+=60),t<0&&H.mode=="fixed"?t+=24:t>=24&&H.mode=="fixed"&&(t-=24),{mode:H.mode,hours:t,minutes:L}}});var l1,Z2=p(()=>{"use strict";l1=(H,V=1)=>{let C=Math.abs(H.hours)*3600+Math.abs(H.minutes)*60+(H.seconds||0),e=H.hours<0||H.minutes<0?-1:1,t=Math.floor(C/3600),L=Math.round((C-t*3600)/60);return L%V!=0&&(L=Math.round(L/V)*V),L>=60&&(t++,L-=60),e<0&&(t>0?t=-t:L=-L),A(n({},H),{hours:t,minutes:L})}});var R,E1=p(()=>{"use strict";U();Z2();R=H=>{if(H.match(/^([0-9:]+)$/)){let t=H.split(":").map(Number),L=l1({hours:t[0],minutes:t[1],seconds:t[2]});return{mode:"fixed",hours:L.hours,minutes:L.minutes}}let V=H.match(/^([a-z]+)([\+|-]{1})([0-9:]+)$/);if(V){let t=V[3].split(":").map(Number),L=l1({hours:t[0],minutes:t[1],seconds:t[2]}),r=L.hours,i=L.minutes;return V[2]=="-"&&(r>0&&(r=-r),i=-i),{mode:V[1]=="sunrise"?"sunrise":"sunset",hours:r,minutes:i}}let C=new Date(H),e=l1({hours:C.getHours(),minutes:C.getMinutes(),seconds:C.getSeconds()});return{mode:"fixed",hours:e.hours,minutes:e.minutes}}});var O,V2=p(()=>{"use strict";U();E1();j1();O=(H,V)=>{if(typeof H=="string"&&(H=R(H)),H.mode=="fixed")return H.hours*3600+H.minutes*60;if(H.mode=="sunrise"){let C=R(V.states["sun.sun"].attributes.next_rising),e=G(C,H);return e.hours*3600+e.minutes*60}else{let C=R(V.states["sun.sun"].attributes.next_setting),e=G(C,H);return e.hours*3600+e.minutes*60}}});var u3=p(()=>{"use strict"});var v1,H1,m5,t2=p(()=>{"use strict";u3();v1=H=>{if(H.time_format==="language"||H.time_format==="system"){let V=H.time_format==="language"?H.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(V).includes("10")}return H.time_format==="12"},H1=H=>{let V=H>=12?"PM":"AM",C=H%12||12;return{am_pm:V,hours:C}},m5=(H,V)=>V=="AM"?H==12?0:H:H==12?12:H+12});var E,L2=p(()=>{"use strict";t2();U();E=(H,V={seconds:!0})=>{let C="";if(H.hours>=24&&(H.hours-=24),H.mode=="fixed"&&V.am_pm){let e=H1(H.hours).am_pm,t=H1(H.hours).hours;C=String(t).padStart(2,"0")+":"+String(H.minutes).padStart(2,"0"),V.seconds&&(C+=":00"),C+=" "+(e==="AM"?"am":"pm")}else H.mode=="fixed"?(C=String(H.hours).padStart(2,"0")+":"+String(H.minutes).padStart(2,"0"),V.seconds&&(C+=":00")):(C=H.mode+(H.hours<0||H.minutes<0?"-":"+")+String(Math.abs(H.hours)).padStart(2,"0")+":"+String(Math.abs(H.minutes)).padStart(2,"0"),V.seconds&&(C+=":00"));return C}});var W2,v3=p(()=>{"use strict";U();j1();V2();E1();L2();W2=(H,V)=>{let C=e=>{e=e.map(i=>A(n({},i),{start:O(i.start,V)<0?"00:00:00":i.start,stop:i.stop?O(i.stop,V)>86400?"00:00:00":i.stop:void 0})),e=e.map(i=>{if(i.stop&&O(i.start,V)>O(i.stop,V)){if(O(i.stop,V)==0)return A(n({},i),{stop:E(G(R(i.stop),{hours:24}))});i=A(n({},i),{start:i.stop,stop:i.start})}return i.stop&&O(i.stop,V)-O(i.start,V)<60&&(i=A(n({},i),{stop:E(G(R(i.start),{minutes:1}))})),i}),e.sort((i,o)=>O(i.start,V)>O(o.start,V)?1:O(i.start,V)<O(o.start,V)?-1:O(i.stop||i.start,V)>O(o.stop||o.start,V)?1:-1);let t="00:00:00",L=e.length;for(let i=0;i<L;i++){let o=e[i];O(o.start,V)>O(t,V)?(e.splice(i,0,Object.assign(n({},o),{start:t,stop:o.start,actions:[],conditions:o.conditions})),L++,i++):O(o.start,V)<O(t,V)&&(e=Object.assign(e,{[i]:A(n({},o),{start:t})})),t=o.stop!==void 0?o.stop:E(G(R(o.start),{minutes:1}))}let r=24*3600;return O(t,V)<r&&O(t,V)>0&&e.push({start:t,stop:E({mode:"fixed",hours:24,minutes:0}),actions:[],conditions:e[0].conditions}),e};return H=A(n({},H),{entries:H.entries.map(e=>A(n({},e),{slots:C(e.slots)}))}),H}});var B7,S2,A5,r2,W1,U2,g2,f2,G2,S1=p(()=>{"use strict";U();B7="v4.0.18",S2=15,A5=["relative-time","state"],r2="default",W1=["relative-time","additional-tasks"],U2=["*"],g2={actions:[],conditions:{type:"or",items:[],track_changes:!1}},f2={entries:[{weekdays:["daily"],slots:[A(n({},g2),{start:"00:00:00",stop:"08:00:00"}),A(n({},g2),{start:"08:00:00",stop:"16:00:00"}),A(n({},g2),{start:"16:00:00",stop:"00:00:00"})]}],repeat_type:"repeat",next_entries:[],timestamps:[],enabled:!0},G2=A(n({},f2),{entries:[{weekdays:["daily"],slots:[A(n({},g2),{start:"00:00:00",stop:"12:00:00"}),A(n({},g2),{start:"12:00:00"}),A(n({},g2),{start:"12:01:00",stop:"00:00:00"})]}]})});function g(H){return H!=null}var q=p(()=>{"use strict"});var h3={};B(h3,{default:()=>q9,services:()=>U9,ui:()=>G9});var U9,G9,q9,D7=p(()=>{U9={generic:{turn_on:"\u0412\u043A\u043B\u044E\u0447\u0438",turn_off:"\u0438\u0437\u043A\u043B\u044E\u0447\u0438",parameter_to_value:"{parameter} \u043D\u0430 {value}",action_with_parameter:"{action} \u0441 {parameter}"},climate:{set_temperature:"\u0437\u0430\u0434\u0430\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430[ \u043D\u0430 {temperature}]",set_temperature_hvac_mode_heat:"\u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435[ \u043D\u0430 {temperature}]",set_temperature_hvac_mode_cool:"\u043E\u0445\u043B\u0430\u0436\u0434\u0430\u043D\u0435[ \u043D\u0430 {temperature}]",set_temperature_hvac_mode_heat_cool:"\u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435/\u043E\u0445\u043B\u0430\u0436\u0434\u0430\u043D\u0435[ \u043D\u0430 {temperature}]",set_temperature_hvac_mode_heat_cool_range:"\u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435/\u043E\u0445\u043B\u0430\u0436\u0434\u0430\u043D\u0435[ \u043D\u0430 {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E[ \u043D\u0430 {temperature}]",set_hvac_mode:"\u0437\u0430\u0434\u0430\u0439 \u0440\u0435\u0436\u0438\u043C[ \u043D\u0430 {hvac_mode}]",set_preset_mode:"\u0437\u0430\u0434\u0430\u0439 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430[ \u043D\u0430 {preset_mode}]",set_fan_mode:"\u0437\u0430\u0434\u0430\u0439 \u0440\u0435\u0436\u0438\u043C \u043D\u0430 \u0432\u0435\u043D\u0442\u0438\u043B\u0430\u0442\u043E\u0440[ \u043D\u0430 {fan_mode}]",set_swing_mode:"\u0437\u0430\u0434\u0430\u0439 \u0440\u0435\u0436\u0438\u043C \u043D\u0430 \u0432\u044A\u0440\u0442\u0435\u043D\u0435[ \u043D\u0430 {swing_mode}]"},cover:{close_cover:"\u0437\u0430\u0442\u0432\u043E\u0440\u0438",open_cover:"\u043E\u0442\u0432\u043E\u0440\u0438",set_cover_position:"\u0437\u0430\u0434\u0430\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u044F[ \u043D\u0430 {position}]",set_cover_tilt_position:"\u0437\u0430\u0434\u0430\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u043D\u0430 \u043D\u0430\u043A\u043B\u043E\u043D[ \u043D\u0430 {tilt_position}]"},fan:{set_percentage:"\u0437\u0430\u0434\u0430\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442[ \u043D\u0430 {percentage}]",set_direction:"\u0437\u0430\u0434\u0430\u0439 \u043F\u043E\u0441\u043E\u043A\u0430[ \u043D\u0430 {direction}]",oscillate:"\u0437\u0430\u0434\u0430\u0439 \u043E\u0441\u0446\u0438\u043B\u0430\u0446\u0438\u044F[ \u043D\u0430 {oscillate}]"},humidifier:{set_humidity:"\u0437\u0430\u0434\u0430\u0439 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442[ \u043D\u0430 {humidity}]",set_mode:"\u0437\u0430\u0434\u0430\u0439 \u0440\u0435\u0436\u0438\u043C[ \u043D\u0430 {mode}]"},input_number:{set_value:"\u0437\u0430\u0434\u0430\u0439 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442[ \u043D\u0430 {value}]"},input_select:{select_option:"\u0438\u0437\u0431\u0435\u0440\u0438 \u043E\u043F\u0446\u0438\u044F[ {option}]"},select:{select_option:"\u0438\u0437\u0431\u0435\u0440\u0438 \u043E\u043F\u0446\u0438\u044F[ {option}]"},light:{turn_on:"\u0432\u043A\u043B\u044E\u0447\u0438[ \u0441 {brightness} \u044F\u0440\u043A\u043E\u0441\u0442]"},media_player:{select_source:"\u0438\u0437\u0431\u0435\u0440\u0438 \u0438\u0437\u0442\u043E\u0447\u043D\u0438\u043A[ {source}]"},notify:{send_message:"\u0438\u0437\u043F\u0440\u0430\u0442\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435"},script:{execute:"\u0438\u0437\u043F\u044A\u043B\u043D\u0438"},vacuum:{start_pause:"\u0441\u0442\u0430\u0440\u0442 / \u043F\u0430\u0443\u0437\u0430"},water_heater:{set_operation_mode:"\u0437\u0430\u0434\u0430\u0439 \u0440\u0435\u0436\u0438\u043C[ \u043D\u0430 {operation_mode}]",set_away_mode:"\u0437\u0430\u0434\u0430\u0439 \u0440\u0435\u0436\u0438\u043C '\u043D\u0435 \u0441\u044A\u043C \u0432\u043A\u044A\u0449\u0438'"}},G9={components:{date:{day_types_short:{daily:"\u0434\u043D\u0435\u0432\u043D\u043E",workdays:"\u0440\u0430\u0431\u043E\u0442\u043D\u0438 \u0434\u043D\u0438",weekend:"\u0443\u0438\u043A\u0435\u043D\u0434"},day_types_long:{daily:"\u0432\u0441\u0435\u043A\u0438 \u0434\u0435\u043D",workdays:"\u0432 \u0440\u0430\u0431\u043E\u0442\u043D\u0438 \u0434\u043D\u0438",weekend:"\u043F\u0440\u0435\u0437 \u0443\u0438\u043A\u0435\u043D\u0434\u0430"},days:"\u0434\u043D\u0438",tomorrow:"\u0443\u0442\u0440\u0435",repeated_days:"\u0432\u0441\u0435\u043A\u0438 {days}",repeated_days_except:"\u0432\u0441\u0435\u043A\u0438 \u0434\u0435\u043D \u043E\u0441\u0432\u0435\u043D {excludedDays}",days_range:"\u043E\u0442 {startDay} \u0434\u043E {endDay}",next_week_day:"\u0441\u043B\u0435\u0434\u0432\u0430\u0449 {weekday}"},time:{absolute:"\u0432 {time}",interval:"\u043E\u0442 {startTime} \u0434\u043E {endTime}",at_midnight:"\u0432 \u043F\u043E\u043B\u0443\u043D\u043E\u0449",at_noon:"\u043D\u0430 \u043E\u0431\u044F\u0434",at_sun_event:"\u043F\u0440\u0438 {sunEvent}"}},dialog:{enable_schedule:{title:"\u0417\u0430\u0432\u044A\u0440\u0448\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435",description:"\u0413\u0440\u0430\u0444\u0438\u043A\u044A\u0442, \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u043B\u0438, \u0435 \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D. \u0418\u0441\u043A\u0430\u0442\u0435 \u043B\u0438 \u0434\u0430 \u0433\u043E \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u0442\u0435?"},confirm_delete:{title:"\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u043E\u0431\u0435\u043A\u0442?",description:"\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0435\u0442\u0435 \u0442\u043E\u0437\u0438 \u043E\u0431\u0435\u043A\u0442?"},confirm_migrate:{title:"\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0430",description:"\u041D\u044F\u043A\u043E\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0437\u0430\u0433\u0443\u0431\u0435\u043D\u0438 \u043F\u0440\u0438 \u0442\u0430\u0437\u0438 \u043F\u0440\u043E\u043C\u044F\u043D\u0430. \u0418\u0441\u043A\u0430\u0442\u0435 \u043B\u0438 \u0434\u0430 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435?"},weekday_picker:{title:"\u041F\u043E\u0432\u0442\u0430\u0440\u044F\u0449\u0438 \u0441\u0435 \u0434\u043D\u0438 \u0437\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430",choose:"\u0418\u0437\u0431\u0435\u0440\u0438..."},entity_picker:{title:"\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043E\u0431\u0435\u043A\u0442\u0438",choose:"\u0418\u0437\u0431\u0435\u0440\u0438...",no_results:"\u041D\u044F\u043C\u0430 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F"},action_picker:{title:"\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",show_all:"\u041F\u043E\u043A\u0430\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u043F\u043E\u0434\u0434\u044A\u0440\u0436\u0430\u043D\u0438 \u043E\u0431\u0435\u043A\u0442\u0438"}},panel:{common:{title:"\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0447\u0438\u043A",new_schedule:"\u041D\u043E\u0432 \u0433\u0440\u0430\u0444\u0438\u043A",default_name:"\u0413\u0440\u0430\u0444\u0438\u043A #{id}"},overview:{no_entries:"\u041D\u044F\u043C\u0430 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u0437\u0430 \u043F\u043E\u043A\u0430\u0437\u0432\u0430\u043D\u0435",backend_error:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0441\u0432\u044A\u0440\u0436\u0435 \u0441 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0437\u0430 \u043F\u043B\u0430\u043D\u0438\u0440\u0430\u043D\u0435. \u0422\u043E\u0439 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u0438\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430\u043D \u043A\u0430\u0442\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F, \u043F\u0440\u0435\u0434\u0438 \u0442\u0430\u0437\u0438 \u043A\u0430\u0440\u0442\u0430 \u0434\u0430 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430.",excluded_items:"{number} \u0438\u0437\u043A\u043B\u044E\u0447\u0435\u043D {if number is 1} \u0435\u043B\u0435\u043C\u0435\u043D\u0442 {else} \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",hide_excluded:"\u0441\u043A\u0440\u0438\u0439 \u0438\u0437\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0442\u0435 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438",additional_tasks:"{number} \u043E\u0449\u0435 {if number is 1} \u0437\u0430\u0434\u0430\u0447\u0430 {else} \u0437\u0430\u0434\u0430\u0447\u0438"},editor:{repeated_days:"\u041F\u043E\u0432\u0442\u0430\u0440\u044F\u0449\u0438 \u0441\u0435 \u0434\u043D\u0438",start_time:"\u041D\u0430\u0447\u0430\u043B\u0435\u043D \u0447\u0430\u0441",stop_time:"\u041A\u0440\u0430\u0435\u043D \u0447\u0430\u0441",action:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",add_action:"\u0414\u043E\u0431\u0430\u0432\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",select_timeslot:"\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0440\u0435\u043C\u0435\u0432\u0438 \u0441\u043B\u043E\u0442",toggle_single_mode:"\u0412 \u0435\u0434\u0438\u043D\u0438\u0447\u0435\u043D \u0440\u0435\u0436\u0438\u043C",toggle_scheme_mode:"\u0412 \u0440\u0435\u0436\u0438\u043C \u043D\u0430 \u0441\u0445\u0435\u043C\u0430",validation_errors:{overlapping_time:"\u0413\u0440\u0430\u0444\u0438\u043A\u044A\u0442 \u0438\u043C\u0430 \u043F\u0440\u0438\u043F\u043E\u043A\u0440\u0438\u0432\u0430\u0449\u0438 \u0441\u0435 \u0432\u0440\u0435\u043C\u0435\u0432\u0438 \u0441\u043B\u043E\u0442\u043E\u0432\u0435",missing_target_entity:"\u0415\u0434\u043D\u043E \u0438\u043B\u0438 \u043F\u043E\u0432\u0435\u0447\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u044F\u043C\u0430\u0442 \u0446\u0435\u043B\u0435\u0432\u0438 \u043E\u0431\u0435\u043A\u0442",missing_service_parameter:"\u0415\u0434\u043D\u043E \u0438\u043B\u0438 \u043F\u043E\u0432\u0435\u0447\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u044F\u043C\u0430\u0442 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430",missing_action:"\u0413\u0440\u0430\u0444\u0438\u043A\u044A\u0442 \u043D\u044F\u043C\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"}},options:{conditions:{header:"\u0423\u0441\u043B\u043E\u0432\u0438\u044F",add_condition:"\u0414\u043E\u0431\u0430\u0432\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0435",new_condition:"\u041D\u043E\u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u0435",types:{equal_to:"{entity} \u0435 \u0440\u0430\u0432\u043D\u043E \u043D\u0430 {value}",unequal_to:"{entity} \u043D\u0435 \u0435 \u0440\u0430\u0432\u043D\u043E \u043D\u0430 {value}",above:"{entity} \u0435 \u043D\u0430\u0434 {value}",below:"{entity} \u0435 \u043F\u043E\u0434 {value}"},options:{logic_and:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438",logic_or:"\u041F\u043E\u043D\u0435 \u0435\u0434\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0435 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u043E",track_changes:"\u041F\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u0440\u0438 \u043F\u0440\u043E\u043C\u044F\u043D\u0430 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0442\u0430"}},period:{header:"\u041F\u0435\u0440\u0438\u043E\u0434",start_date:"\u041E\u0442",end_date:"\u0414\u043E"},repeat_type:"\u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441\u043B\u0435\u0434 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435",tags:"\u0415\u0442\u0438\u043A\u0435\u0442\u0438"},card_editor:{tabs:{entities:"\u041E\u0431\u0435\u043A\u0442\u0438",other:"\u0414\u0440\u0443\u0433\u0438"},fields:{title:{heading:"\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u0430\u0442\u0430",options:{standard:"\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E",hidden:"\u0441\u043A\u0440\u0438\u0442\u043E",custom:"\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u043E"},custom_title:"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u043E \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435"},discover_existing:{heading:"\u041F\u043E\u043A\u0430\u0436\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0433\u0440\u0430\u0444\u0438\u0446\u0438",description:"\u0422\u043E\u0432\u0430 \u0437\u0430\u0434\u0430\u0432\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u044A\u0440\u0430 'discover existing'. \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u043D\u043E \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u0438 \u0433\u0440\u0430\u0444\u0438\u0446\u0438 \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0435\u043D\u0438 \u043A\u044A\u043C \u043A\u0430\u0440\u0442\u0430\u0442\u0430. "},time_step:{heading:"\u0412\u0440\u0435\u043C\u0435\u0432\u0430 \u0441\u0442\u044A\u043F\u043A\u0430",description:"\u0420\u0435\u0437\u043E\u043B\u044E\u0446\u0438\u044F (\u0432 \u043C\u0438\u043D\u0443\u0442\u0438) \u0437\u0430 \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u0446\u0438",unit_minutes:"\u043C\u0438\u043D"},default_editor:{heading:"\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043F\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043D\u0435",options:{single:"\u0420\u0435\u0436\u0438\u043C \u043D\u0430 \u0435\u0434\u0438\u043D\u0438\u0447\u0435\u043D \u0433\u0440\u0430\u0444\u0438\u043A",scheme:"\u0420\u0435\u0436\u0438\u043C \u043D\u0430 \u0432\u0440\u0435\u043C\u0435\u0432\u0430 \u0441\u0445\u0435\u043C\u0430"}},sort_by:{heading:"\u041E\u043F\u0446\u0438\u0438 \u0437\u0430 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435",description:"\u0420\u0435\u0434, \u0432 \u043A\u043E\u0439\u0442\u043E \u0441\u0435 \u043F\u043E\u043A\u0430\u0437\u0432\u0430\u0442 \u0433\u0440\u0430\u0444\u0438\u0446\u0438\u0442\u0435 \u0432 \u043A\u0430\u0440\u0442\u0430\u0442\u0430",options:{relative_time:"\u041E\u0441\u0442\u0430\u0432\u0430\u0449\u043E \u0432\u0440\u0435\u043C\u0435 \u0434\u043E \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",title:"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435 \u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430",state:"\u041F\u043E\u043A\u0430\u0436\u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0442\u0435 \u0433\u0440\u0430\u0444\u0438\u0446\u0438 \u043E\u0442\u0433\u043E\u0440\u0435"}},display_format_primary:{heading:"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",description:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0430\u0439\u0442\u0435 \u043A\u043E\u0439 \u0435\u0442\u0438\u043A\u0435\u0442 \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u0437\u0430 \u0433\u0440\u0430\u0444\u0438\u0446\u0438\u0442\u0435 \u0432 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430",options:{default:"\u0418\u043C\u0435 \u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430",entity_action:"\u0420\u0435\u0437\u044E\u043C\u0435 \u043D\u0430 \u0437\u0430\u0434\u0430\u0447\u0430\u0442\u0430"}},display_format_secondary:{heading:"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0430 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",description:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0430\u0439\u0442\u0435 \u043A\u0430\u043A\u0432\u0438 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0441\u0430 \u0432\u0438\u0434\u0438\u043C\u0438 \u0432 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430",options:{relative_time:"\u041E\u0441\u0442\u0430\u0432\u0430\u0449\u043E \u0432\u0440\u0435\u043C\u0435 \u0434\u043E \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",time:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0430\u043D \u0447\u0430\u0441 \u0437\u0430 \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",days:"\u041F\u043E\u0432\u0442\u0430\u0440\u044F\u0449\u0438 \u0441\u0435 \u0434\u043D\u0438 \u043E\u0442 \u0441\u0435\u0434\u043C\u0438\u0446\u0430\u0442\u0430",additional_tasks:"\u0411\u0440\u043E\u0439 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0437\u0430\u0434\u0430\u0447\u0438"}},show_header_toggle:{heading:"\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u0442\u0435\u043B \u0432 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u0442\u043E",description:"\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u0442\u0435\u043B \u0432 \u0433\u043E\u0440\u043D\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u043D\u0430 \u043A\u0430\u0440\u0442\u0430\u0442\u0430 \u0437\u0430 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435/\u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u043E\u0431\u0435\u043A\u0442\u0438"},show_toggle_switches:{heading:"\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u0442\u0435\u043B\u0438",description:"\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u0442\u0435\u043B \u0437\u0430 \u0432\u0441\u044F\u043A\u043E \u043E\u0442\u0434\u0435\u043B\u043D\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u0432 \u043A\u0430\u0440\u0442\u0430\u0442\u0430"},tags:{heading:"\u0415\u0442\u0438\u043A\u0435\u0442\u0438",description:"\u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u0435\u0442\u0438\u043A\u0435\u0442\u0438 \u0437\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u0446\u0438\u0442\u0435 \u043C\u0435\u0436\u0434\u0443 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u0440\u0442\u0438"},entities:{button_label:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0430\u0439 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438 \u043E\u0431\u0435\u043A\u0442\u0438",heading:"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438 \u043E\u0431\u0435\u043A\u0442\u0438",description:"\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043E\u0431\u0435\u043A\u0442\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0430\u0442\u0435 \u0447\u0440\u0435\u0437 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0447\u0438\u043A\u0430. \u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043A\u043B\u0438\u043A\u043D\u0435\u0442\u0435 \u043D\u0430 \u0433\u0440\u0443\u043F\u0430, \u0437\u0430 \u0434\u0430 \u044F \u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435. \u0418\u043C\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u0432\u0438\u0434, \u0447\u0435 \u043D\u044F\u043A\u043E\u0438 \u043E\u0431\u0435\u043A\u0442\u0438 (\u043A\u0430\u0442\u043E \u0441\u0435\u043D\u0437\u043E\u0440\u0438) \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442 \u0441\u0430\u043C\u043E \u0437\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043D\u0435 \u0438 \u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.",included_number:"{number}/{total} \u0438\u0437\u0431\u0440\u0430\u043D\u0438"}}}}},q9={services:U9,ui:G9}});var g3={};B(g3,{default:()=>Y9,services:()=>Q9,ui:()=>K9});var Q9,K9,Y9,F7=p(()=>{Q9={generic:{turn_on:"Zapnout",turn_off:"Vypnout",parameter_to_value:"{parameter} na {value}",action_with_parameter:"{action} s {parameter}"},climate:{set_temperature:"nastavit teplotu[ na {temperature}]",set_temperature_hvac_mode_heat:"topen\xED[ na {temperature}]",set_temperature_hvac_mode_cool:"chlazen\xED[ na {temperature}]",set_temperature_hvac_mode_heat_cool:"topen\xED/chlazen\xED[ na {temperature}]",set_temperature_hvac_mode_heat_cool_range:"topen\xED/chlazen\xED[ na {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"automatika[ na {temperature}]",set_hvac_mode:"nastavit re\u017Eim[ na {hvac_mode}]",set_preset_mode:"nastavit p\u0159edvolbu[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"zav\u0159\xEDt",open_cover:"otev\u0159\xEDt",set_cover_position:"nastavit polohu[ na {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_percentage:"nastavit rychlost[ na {speed}]",set_direction:"nastavit sm\u011Br[ na {direction}]",oscillate:"nastavit oscilaci[ na {oscillate}]"},humidifier:{set_humidity:"nastavit vlhkost[ na {humidity}]",set_mode:"nastavit re\u017Eim[ na {mode}]"},input_number:{set_value:"nastavit hodnotu[ na {value}]"},input_select:{select_option:"vybrat mo\u017Enost[ {option}]"},select:{select_option:"vybrat mo\u017Enost[ {option}]"},light:{turn_on:"zapnout[ na {brightness} jas]"},media_player:{select_source:"vybrat zdroj[ {source}]"},notify:{send_message:"send notification"},script:{execute:"spustit"},vacuum:{start_pause:"start / pauza"},water_heater:{set_operation_mode:"nastavit re\u017Eim[ na {operation_mode}]",set_away_mode:"vypnout re\u017Eim"}},K9={components:{date:{day_types_short:{daily:"denn\u011B",workdays:"pracovn\xED dny",weekend:"v\xEDkendy"},day_types_long:{daily:"ka\u017Ed\xFD den",workdays:"v pracovn\xED dny",weekend:"o v\xEDkendu"},days:"dn\u016F",tomorrow:"z\xEDtra",repeated_days:"ka\u017Ed\xFD {days}",repeated_days_except:"ka\u017Ed\xFD den krom\u011B {excludedDays}",days_range:"od {startDay} do {endDay}",next_week_day:"p\u0159\xED\u0161t\xED {weekday}"},time:{absolute:"od {time}",interval:"od {startTime} do {endTime}",at_midnight:"od p\u016Flnoc",at_noon:"od poledne",at_sun_event:"na {sunEvent}"}},dialog:{enable_schedule:{title:"Dokon\u010Dete \xFApravy",description:"Pl\xE1n, kter\xFD byl zm\u011Bn\u011Bn, je aktu\xE1ln\u011B zak\xE1z\xE1n, m\u011Bl by b\xFDt povolen?"},confirm_delete:{title:"Odebrat entitu?",description:"Opravdu chcete tuto entitu odebrat?"},confirm_migrate:{title:"Aktualizovat pl\xE1n",description:"N\u011Bkter\xE1 nastaven\xED budou touto zm\u011Bnou ztracena. Chce\u0161 pokra\u010Dovat?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Pl\xE1nova\u010D",new_schedule:"Nov\xFD pl\xE1n",default_name:"Pl\xE1n #{id}"},overview:{no_entries:"Nejsou \u017E\xE1dn\xE9 polo\u017Eky k zobrazen\xED",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{number} vylou\u010Deno {if number is 1} polo\u017Eka {else} polo\u017Eek",hide_excluded:"skr\xFDt vylou\u010Den\xE9 polo\u017Eky",additional_tasks:"{number} a v\xEDce {if number is 1} \xFAkol {else} \xFAkol\u016F"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Nejprve vyberte \u010Dasov\xFD \xFAsek",toggle_single_mode:"Do re\u017Eimu jednoho",toggle_scheme_mode:"Do re\u017Eimu sch\xE9matu",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"Obdob\xED",start_date:"From",end_date:"To"},repeat_type:"behaviour after completion",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},Y9={services:Q9,ui:K9}});var f3={};B(f3,{default:()=>C6,services:()=>J9,ui:()=>X9});var J9,X9,C6,R7=p(()=>{J9={generic:{turn_on:"Einschalten",turn_off:"Ausschalten",parameter_to_value:"{parameter} auf {value}",action_with_parameter:"{action} mit {parameter}"},climate:{set_temperature:"Temperatur einstellen[ auf {temperature}]",set_temperature_hvac_mode_heat:"Heizen[ auf {temperature}]",set_temperature_hvac_mode_cool:"K\xFChlen[ auf {temperature}]",set_temperature_hvac_mode_heat_cool:"Heizen/K\xFChlen[ auf {temperature}]",set_temperature_hvac_mode_heat_cool_range:"Heizen/K\xFChlen[ auf {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"Automatisch[ auf {temperature}]",set_hvac_mode:"Modus setzen[ auf {hvac_mode}]",set_preset_mode:"Voreinstellung setzen[ auf {preset_mode}]",set_fan_mode:"L\xFCftermodus einstellen[ auf {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"Schlie\xDFen",open_cover:"\xD6ffnen",set_cover_position:"Position setzen[ auf {position}]",set_cover_tilt_position:"Neigungsposition setzen[ auf {tilt_position}]"},fan:{set_percentage:"Geschwindigkeit setzen[ auf {speed}]",set_direction:"Richtung setzen[ auf {direction}]",oscillate:"Oszillation setzen[ auf {oscillate}]"},humidifier:{set_humidity:"Luftfeuchtigkeit setzen[ auf {humidity}]",set_mode:"Modus setzen[ auf {mode}]"},input_number:{set_value:"Wert setzen[ auf {value}]"},input_select:{select_option:"Option[ {option}] ausw\xE4hlen"},select:{select_option:"Option[ {option}] ausw\xE4hlen"},light:{turn_on:"Anschalten[ mit {brightness} Helligkeit]"},media_player:{select_source:"Quelle[ {source}] ausw\xE4hlen"},notify:{send_message:"Nachricht senden"},script:{execute:"Ausf\xFChren"},vacuum:{start_pause:"Start/Pause"},water_heater:{set_operation_mode:"Modus setzen[ auf {operation_mode}]",set_away_mode:"Abwesenheitsmodus setzen"}},X9={components:{date:{day_types_short:{daily:"T\xE4glich",workdays:"Werktags",weekend:"Wochenende"},day_types_long:{daily:"Jeden Tag",workdays:"An Werktagen",weekend:"Am Wochenende"},days:"Tage",tomorrow:"Morgen",repeated_days:"Jeden {days}",repeated_days_except:"T\xE4glich au\xDFer {excludedDays}",days_range:"von {startDay} bis {endDay}",next_week_day:"n\xE4chsten {weekday}"},time:{absolute:"um {time}",interval:"von {startTime} bis {endTime}",at_midnight:"um Mitternacht",at_noon:"zum Mittag",at_sun_event:"beim {sunEvent}"}},dialog:{enable_schedule:{title:"Modifikationen beenden",description:"Der ge\xE4nderte Zeitplan ist derzeit deaktiviert, soll er aktiviert werden?"},confirm_delete:{title:"Entit\xE4t entfernen?",description:"Bist du dir sicher, dass du diese Entit\xE4t l\xF6schen m\xF6chtest?"},confirm_migrate:{title:"Zeitplan \xE4ndern",description:"Einige Einstellungen gehen durch diese \xC4nderung verloren. M\xF6chtest du fortfahren?"},weekday_picker:{title:"Wiederholungen f\xFCr den Zeitplan",choose:"Auswahl..."},entity_picker:{title:"Entit\xE4ten ausw\xE4hlen",choose:"Auswahl...",no_results:"Keine passenden Elemente gefunden"},action_picker:{title:"Aktion ausw\xE4hlen",show_all:"Alle unterst\xFCtzten Entit\xE4ten anzeigen"}},panel:{common:{title:"Zeitplaner",new_schedule:"Neuer Zeitplan",default_name:"Zeitplan #{id}"},overview:{no_entries:"Es gibt keine Eintr\xE4ge, die angezeigt werden k\xF6nnen",backend_error:"Es konnte keine Verbindung mit der Scheduler-Komponente hergestellt werden. Es muss als Integration installiert werden, bevor diese Karte verwendet werden kann.",excluded_items:"{number} {if number is 1} ausgeschlossener Eintrag {else} ausgeschlossene Eintr\xE4ge",hide_excluded:"Verstecke ausgeschlossene Eintr\xE4ge",additional_tasks:"{number} weitere {if number is 1} Aufgabe {else} Aufgaben"},editor:{repeated_days:"Wiederholen",start_time:"Startzeit",stop_time:"Endzeit",action:"Aktion",add_action:"Aktion hinzuf\xFCgen",select_timeslot:"W\xE4hle ein Zeitfenster aus",toggle_single_mode:"Zum Einzelmodus",toggle_scheme_mode:"Zum Schemamodus",validation_errors:{overlapping_time:"Der Zeitplan weist \xDCberschneidungen auf.",missing_target_entity:"Bei einer oder mehreren Aktionen fehlt eine Zielentit\xE4t.",missing_service_parameter:"Bei einer oder mehreren Aktionen fehlt eine erforderliche Einstellung.",missing_action:"Zeitplan enth\xE4lt keine Aktionen"}},options:{conditions:{header:"Bedingungen",add_condition:"Bedingung hinzuf\xFCgen",new_condition:"Neuer Zustand",types:{equal_to:"{entity} ist {value}",unequal_to:"{entity} ist nicht {value}",above:"{entity} ist \xFCber {value}",below:"{entity} ist unter {value}"},options:{logic_and:"Alle Bedingungen m\xFCssen zutreffen.",logic_or:"Eine Bedingung muss zutreffen.",track_changes:"Erneut pr\xFCfen wenn sich die Zust\xE4nde \xE4ndern"}},period:{header:"Zeitraum",start_date:"Von",end_date:"Bis"},repeat_type:"Verhalten nach Abschluss",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},C6={services:J9,ui:X9}});var y3={};B(y3,{default:()=>V6,services:()=>e6,ui:()=>H6});var e6,H6,V6,$7=p(()=>{e6={generic:{turn_on:"\u0395\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7",turn_off:"\u0391\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7",parameter_to_value:"{parameter} \u03C3\u03B5 {value}",action_with_parameter:"{action} \u03BC\u03B5 {parameter}"},climate:{set_temperature:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2[ \u03C3\u03B5 {temperature}]",set_temperature_hvac_mode_heat:"\u03B8\u03AD\u03C1\u03BC\u03B1\u03BD\u03C3\u03B7[ \u03C3\u03B5 {temperature}]",set_temperature_hvac_mode_cool:"\u03C8\u03CD\u03BE\u03B7[ \u03C3\u03B5 {temperature}]",set_temperature_hvac_mode_heat_cool:"\u03B8\u03AD\u03C1\u03BC\u03B1\u03BD\u03C3\u03B7/\u03C8\u03CD\u03BE\u03B7[ \u03C3\u03B5 {temperature}]",set_temperature_hvac_mode_heat_cool_range:"\u03B8\u03AD\u03C1\u03BC\u03B1\u03BD\u03C3\u03B7/\u03C8\u03CD\u03BE\u03B7[ \u03C3\u03B5 {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ \u03C3\u03B5 {temperature}]",set_hvac_mode:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1\u03C2[ \u03C3\u03B5 {hvac_mode}]",set_preset_mode:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C0\u03C1\u03BF\u03BA\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03AD\u03BD\u03B7\u03C2 \u03C1\u03CD\u03B8\u03BC\u03B9\u03C3\u03B7\u03C2[ \u03C3\u03B5 {preset_mode}]",set_fan_mode:"\u03CC\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B1\u03BD\u03B5\u03BC\u03B9\u03C3\u03C4\u03AE\u03C1\u03B1[ \u03C3\u03B5 {fan_mode}]",set_swing_mode:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BA\u03B1\u03C4\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7\u03C2[ \u03C3\u03B5 {swing_mode}]"},cover:{close_cover:"\u03BA\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",open_cover:"\u03AC\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1",set_cover_position:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C3[ \u03C3\u03B5 {position}]",set_cover_tilt_position:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BA\u03BB\u03AF\u03C3\u03B7\u03C2[ \u03C3\u03B5 {tilt_position}]"},fan:{set_percentage:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1\u03C2[ \u03C3\u03B5 {percentage}]",set_direction:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BA\u03B1\u03C4\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7\u03C2[ \u03C3\u03B5 {direction}]",oscillate:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C4\u03B1\u03BB\u03AC\u03BD\u03C4\u03C9\u03C3\u03B7\u03C2[ \u03C3\u03B5 {oscillate}]"},humidifier:{set_humidity:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C5\u03B3\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2[ \u03C3\u03B5 {humidity}]",set_mode:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1\u03C2[ \u03C3\u03B5 {mode}]"},input_number:{set_value:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C4\u03B9\u03BC\u03AE\u03C2[ \u03C3\u03B5 {value}]"},input_select:{select_option:"\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03C4\u03C1\u03BF\u03C5[ {option}]"},select:{select_option:"\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03C4\u03C1\u03BF\u03C5[ {option}]"},light:{turn_on:"\u03AC\u03BD\u03B1\u03BC\u03B1[ \u03BC\u03B5 \u03C6\u03C9\u03C4\u03B5\u03B9\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 {brightness} ]"},media_player:{select_source:"\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03C0\u03B7\u03B3\u03AE\u03C2[ {source}]"},notify:{send_message:"\u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2"},script:{execute:"\u03B5\u03BA\u03C4\u03AD\u03BB\u03B5\u03C3\u03B7"},vacuum:{start_pause:"\u03AD\u03BD\u03B1\u03C1\u03BE\u03B7 / \u03C0\u03B1\u03CD\u03C3\u03B7"},water_heater:{set_operation_mode:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1\u03C2[ \u03C3\u03B5 {operation_mode}]",set_away_mode:"\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1\u03C2 \u03B1\u03C0\u03BF\u03C5\u03C3\u03AF\u03B1\u03C2"}},H6={components:{date:{day_types_short:{daily:"\u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1",workdays:"\u03B5\u03C1\u03B3\u03AC\u03C3\u03B9\u03BC\u03B5\u03C2",weekend:"\u03C3\u03B1\u03B2\u03B2\u03B1\u03C4\u03BF\u03BA\u03CD\u03C1\u03B9\u03B1\u03BA\u03BF"},day_types_long:{daily:"\u03BA\u03AC\u03B8\u03B5 \u03BC\u03AD\u03C1\u03B1",workdays:"\u03C4\u03B9\u03C2 \u03BA\u03B1\u03B8\u03B7\u03BC\u03B5\u03C1\u03B9\u03BD\u03AD\u03C2",weekend:"\u03C4\u03BF \u03C3\u03B1\u03B2\u03B2\u03B1\u03C4\u03BF\u03BA\u03CD\u03C1\u03B9\u03B1\u03BA\u03BF"},days:"\u03B7\u03BC\u03AD\u03C1\u03B5\u03C2",tomorrow:"\u03B1\u03CD\u03C1\u03B9\u03BF",repeated_days:"\u03BA\u03AC\u03B8\u03B5 {days}",repeated_days_except:"\u03BA\u03AC\u03B8\u03B5 \u03BC\u03AD\u03C1\u03B1 \u03B5\u03BA\u03C4\u03CC\u03C2 {excludedDays}",days_range:"\u03B1\u03C0\u03CC {startDay} \u03AD\u03C9\u03C2 {endDay}",next_week_day:"\u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7/-\u03BF {weekday}"},time:{absolute:"\u03C3\u03C4\u03B9\u03C2 {time}",interval:"\u03B1\u03C0\u03CC {startTime} \u03C9\u03C2 {endTime}",at_midnight:"\u03C4\u03B1 \u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1",at_noon:"\u03C4\u03BF \u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9",at_sun_event:"\u03C4\u03BF {sunEvent}"}},dialog:{enable_schedule:{title:"\u039F\u03BB\u03BF\u03BA\u03BB\u03AE\u03C1\u03C9\u03C3\u03B7 \u03C4\u03C1\u03BF\u03C0\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C9\u03BD",description:"\u03A4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03BF\u03C5 \u03C4\u03C1\u03BF\u03C0\u03BF\u03C0\u03BF\u03B9\u03AE\u03B8\u03B7\u03BA\u03B5 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03BF, \u03B5\u03C0\u03B9\u03B8\u03C5\u03BC\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03C4\u03BF \u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C4\u03B5;"},confirm_delete:{title:"\u0391\u03C6\u03B1\u03AF\u03C1\u03B5\u03C3\u03B7 \u03BF\u03BD\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",description:"\u0395\u03AF\u03C3\u03C4\u03B5 \u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9 \u03CC\u03C4\u03B9 \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B1\u03C6\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF \u03B1\u03C5\u03C4\u03AE \u03B7 \u03BF\u03BD\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1;"},confirm_migrate:{title:"\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03BF\u03C2",description:"\u039A\u03AC\u03C0\u03BF\u03B9\u03B5\u03C2 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03B8\u03B1 \u03C7\u03B1\u03B8\u03BF\u03CD\u03BD \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7\u03BD \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE. \u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5;"},weekday_picker:{title:"\u0395\u03C0\u03B1\u03BD\u03B1\u03BB\u03B1\u03BC\u03B2\u03B1\u03BD\u03CC\u03BC\u03B5\u03BD\u03B5\u03C2 \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1",choose:"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03B7\u03BC\u03B5\u03C1\u03CE\u03BD..."},entity_picker:{title:"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03BF\u03BD\u03C4\u03BF\u03C4\u03AE\u03C4\u03C9\u03BD",choose:"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE...",no_results:"\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03BF\u03BD\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1"},action_picker:{title:"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1\u03C2",show_all:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03CC\u03BB\u03C9\u03BD \u03C4\u03C9\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03C9\u03BD \u03BF\u03BD\u03C4\u03BF\u03C4\u03AE\u03C4\u03C9\u03BD"}},panel:{common:{title:"\u03A7\u03C1\u03BF\u03BD\u03BF\u03C0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2",new_schedule:"\u039D\u03AD\u03BF \u03A0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1",default_name:"\u03A0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 #{id}"},overview:{no_entries:"\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2 \u03C0\u03C1\u03BF\u03C2 \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE",backend_error:"\u0394\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03C5\u03BD\u03B1\u03C4\u03AE \u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03B7 \u03BC\u03B5 \u03C4\u03BF scheduler component. \u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03B3\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03B1\u03B8\u03B5\u03AF \u03C3\u03B1\u03BD integration \u03C0\u03C1\u03B9\u03BD \u03C4\u03B7\u03BD \u03C7\u03C1\u03AE\u03C3\u03B7 \u03B1\u03C5\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03BA\u03AC\u03C1\u03C4\u03B1\u03C2.",excluded_items:"{number} {if number is 1} \u03B5\u03BE\u03B1\u03B9\u03C1\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF {else} \u03B5\u03BE\u03B1\u03B9\u03C1\u03BF\u03CD\u03BC\u03B5\u03BD\u03B1 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03B1",hide_excluded:"\u03B1\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03B5\u03BE\u03B1\u03B9\u03C1\u03BF\u03CD\u03BC\u03B5\u03BD\u03C9\u03BD \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03B9\u03BC\u03AD\u03BD\u03C9\u03BD",additional_tasks:"{number} \u03B5\u03C0\u03B9\u03C0\u03BB\u03AD\u03BF\u03BD {if number is 1} \u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 {else} \u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B5\u03C2"},editor:{repeated_days:"\u0395\u03C0\u03B1\u03BD\u03B1\u03BB\u03B1\u03BC\u03B2\u03B1\u03BD\u03CC\u03BC\u03B5\u03BD\u03B5\u03C2 \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2",start_time:"\u038F\u03C1\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7\u03C2",stop_time:"\u038F\u03C1\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03AE\u03C1\u03C9\u03C3\u03B7\u03C2",action:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1",add_action:"\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1\u03C2",select_timeslot:"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03BC\u03B9\u03B1\u03C2 \u03CE\u03C1\u03B1\u03C2",toggle_single_mode:"\u039C\u03B5\u03BC\u03BF\u03BD\u03C9\u03BC\u03AD\u03BD\u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1",toggle_scheme_mode:"\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03BF\u03CD",validation_errors:{overlapping_time:"\u03A4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03B1\u03C1\u03BF\u03C5\u03C3\u03B9\u03AC\u03B6\u03B5\u03B9 \u03B1\u03BB\u03BB\u03B7\u03BB\u03BF\u03B5\u03C0\u03B9\u03BA\u03B1\u03BB\u03CD\u03C8\u03B5\u03B9\u03C2 \u03CE\u03C1\u03B1\u03C2",missing_target_entity:"\u039C\u03B9\u03B1 \u03AE \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2 \u03B4\u03B5\u03BD \u03B4\u03B9\u03B1\u03B8\u03AD\u03C4\u03BF\u03C5\u03BD \u03BF\u03BD\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 - \u03C3\u03C4\u03CC\u03C7\u03BF",missing_service_parameter:"\u039C\u03B9\u03B1 \u03AE \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2 \u03B4\u03B5\u03BD \u03B4\u03B9\u03B1\u03B8\u03AD\u03C4\u03BF\u03C5\u03BD \u03BC\u03B9\u03B1 \u03B1\u03C0\u03B1\u03B9\u03C4\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7 \u03C1\u03CD\u03B8\u03BC\u03B9\u03C3\u03B7",missing_action:"\u03A4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03B4\u03B5\u03BD \u03B4\u03B9\u03B1\u03B8\u03AD\u03C4\u03B5\u03B9 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2"}},options:{conditions:{header:"\u03A3\u03C5\u03BD\u03B8\u03AE\u03BA\u03B5\u03C2",add_condition:"\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03C5\u03BD\u03B8\u03AE\u03BA\u03B7\u03C2",new_condition:"\u039D\u03AD\u03B1 \u03C3\u03C5\u03BD\u03B8\u03AE\u03BA\u03B7",types:{equal_to:"{entity} \u03B9\u03C3\u03BF\u03CD\u03C4\u03B1\u03B9 \u03BC\u03B5 {value}",unequal_to:"{entity} \u03B4\u03B5\u03BD \u03B9\u03C3\u03BF\u03CD\u03C4\u03B1\u03B9 \u03BC\u03B5 {value}",above:"{entity} \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {value}",below:"{entity} \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {value}"},options:{logic_and:"\u038C\u03BB\u03B5\u03C2 \u03BF\u03B9 \u03C3\u03C5\u03BD\u03B8\u03AE\u03BA\u03B5\u03C2 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B1\u03BB\u03B7\u03B8\u03B5\u03CD\u03BF\u03C5\u03BD",logic_or:"\u039F\u03C0\u03BF\u03B9\u03B1\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C3\u03C5\u03BD\u03B8\u03AE\u03BA\u03B7 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B1\u03BB\u03B7\u03B8\u03B5\u03CD\u03B5\u03B9",track_changes:"\u0395\u03C0\u03B1\u03BD\u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7 \u03CC\u03C4\u03B1\u03BD \u03BF\u03B9 \u03C3\u03C5\u03BD\u03B8\u03AE\u03BA\u03B5\u03C2 \u03B1\u03BB\u03BB\u03AC\u03BE\u03BF\u03C5\u03BD"}},period:{header:"\u03A0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF\u03C2",start_date:"\u0391\u03C0\u03CC",end_date:"\u0388\u03C9\u03C2"},repeat_type:"\u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC \u03BC\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03BF\u03BB\u03BF\u03BA\u03BB\u03AE\u03C1\u03C9\u03C3\u03B7",tags:"Tags"},card_editor:{tabs:{entities:"\u039F\u03BD\u03C4\u03CC\u03C4\u03B7\u03C4\u03B5\u03C2",other:"\u039B\u03BF\u03B9\u03C0\u03AC"},fields:{title:{heading:"\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u03C4\u03B7\u03C2 \u03BA\u03AC\u03C1\u03C4\u03B1\u03C2",options:{standard:"\u03C4\u03C5\u03C0\u03B9\u03BA\u03CC",hidden:"\u03BA\u03C1\u03C5\u03C6\u03CC",custom:"\u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03AD\u03BD\u03BF"},custom_title:"\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03C3\u03BC\u03B5\u03BD\u03BF\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2"},discover_existing:{heading:"\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u03CC\u03BB\u03C9\u03BD \u03C4\u03C9\u03BD \u03C0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03AC\u03C4\u03C9\u03BD",description:"\u0391\u03C5\u03C4\u03CC \u03C1\u03C5\u03B8\u03BC\u03AF\u03B6\u03B5\u03B9 \u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03AC\u03BC\u03BC\u03B5\u03C4\u03C1\u03BF '\u03B1\u03BD\u03B1\u03BA\u03AC\u03BB\u03C5\u03C8\u03B7 \u03C5\u03C0\u03B1\u03C1\u03C7\u03CC\u03BD\u03C4\u03C9\u03BD'. \u03A4\u03B1 \u03AE\u03B4\u03B7 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03BC\u03AD\u03BD\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1 \u03B8\u03B1 \u03C0\u03C1\u03BF\u03C3\u03C4\u03B5\u03B8\u03BF\u03CD\u03BD \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1 \u03C3\u03C4\u03B7\u03BD \u03BA\u03AC\u03C1\u03C4\u03B1. "},time_step:{heading:"\u0392\u03AE\u03BC\u03B1 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C5",description:"\u0391\u03BD\u03AC\u03BB\u03C5\u03C3\u03B7 (\u03C3\u03B5 \u03BB\u03B5\u03C0\u03C4\u03AC) \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03AC\u03C4\u03C9\u03BD",unit_minutes:"\u03BB\u03B5\u03C0\u03C4\u03AC"},default_editor:{heading:"\u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF\u03C2 \u03B5\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C5",options:{single:"\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03BC\u03BF\u03BD\u03AE\u03C2 \u03C7\u03C1\u03BF\u03BD\u03B9\u03BA\u03AE\u03C2 \u03C0\u03B5\u03C1\u03B9\u03CC\u03B4\u03BF\u03C5",scheme:"\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03C7\u03C1\u03BF\u03BD\u03B9\u03BA\u03BF\u03CD \u03C3\u03C7\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2"}},sort_by:{heading:"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AD\u03C2 \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2",description:"\u03A3\u03B5\u03B9\u03C1\u03AC \u03BC\u03B5 \u03C4\u03B7\u03BD \u03BF\u03C0\u03BF\u03AF\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C4\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1 \u03C3\u03C4\u03B7\u03BD \u03BA\u03AC\u03C1\u03C4\u03B1",options:{relative_time:"\u03A5\u03C0\u03BF\u03BB\u03B5\u03B9\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2 \u03AD\u03C9\u03C2 \u03C4\u03B7\u03BD \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1",title:"\u0395\u03BC\u03C6\u03B1\u03BD\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03BF\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03BF\u03C2",state:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03B5\u03BD\u03B5\u03C1\u03B3\u03CE\u03BD \u03C0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03AC\u03C4\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03BA\u03BF\u03C1\u03C5\u03C6\u03AE"}},display_format_primary:{heading:"\u03A0\u03C1\u03BF\u03B2\u03B1\u03BB\u03BB\u03CC\u03BC\u03B5\u03BD\u03B7 \u03BA\u03CD\u03C1\u03B9\u03B1 \u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B1",description:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03C4\u03B5 \u03C0\u03BF\u03B9\u03B1 \u03B5\u03C4\u03B9\u03BA\u03AD\u03C4\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03C4\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1 \u03C3\u03C4\u03B7\u03BD \u03B5\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7",options:{default:"\u038C\u03BD\u03BF\u03BC\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03BF\u03C2",entity_action:"\u03A3\u03CD\u03BD\u03BF\u03C8\u03B7 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1\u03C2"}},display_format_secondary:{heading:"\u03A0\u03C1\u03BF\u03B2\u03B1\u03BB\u03BB\u03CC\u03BC\u03B5\u03BD\u03B7 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03B5\u03CD\u03BF\u03C5\u03C3\u03B1 \u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B1",description:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03C4\u03B5 \u03C0\u03BF\u03B9\u03B5\u03C2 \u03C0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C4\u03B5\u03C2 \u03B9\u03B4\u03B9\u03CC\u03C4\u03B7\u03C4\u03B5\u03C2 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C3\u03C4\u03B7\u03BD \u03B5\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7",options:{relative_time:"\u03A5\u03C0\u03BF\u03BB\u03B5\u03B9\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2 \u03BC\u03AD\u03C7\u03C1\u03B9 \u03C4\u03B7\u03BD \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1",time:"\u03A0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03AD\u03BD\u03B7 \u03CE\u03C1\u03B1 \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1",days:"\u0395\u03C0\u03B1\u03BD\u03B1\u03BB\u03B1\u03BC\u03B2\u03B1\u03BD\u03CC\u03BC\u03B5\u03BD\u03B5\u03C2 \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C4\u03B7\u03C2 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1\u03C2",additional_tasks:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C4\u03C9\u03BD \u03B5\u03C1\u03B3\u03B1\u03C3\u03B9\u03CE\u03BD"}},show_header_toggle:{heading:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03B4\u03B9\u03B1\u03BA\u03CC\u03C0\u03C4\u03B7 \u03BA\u03B5\u03C6\u03B1\u03BB\u03AF\u03B4\u03B1\u03C2",description:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03B4\u03B9\u03B1\u03BA\u03CC\u03C0\u03C4\u03B7 \u03C3\u03C4\u03BF \u03B5\u03C0\u03AC\u03BD\u03C9 \u03BC\u03AD\u03C1\u03BF\u03C2 \u03C4\u03B7\u03C2 \u03BA\u03AC\u03C1\u03C4\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7/\u03B1\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03CC\u03BB\u03C9\u03BD \u03C4\u03C9\u03BD \u03BF\u03BD\u03C4\u03BF\u03C4\u03AE\u03C4\u03C9\u03BD"},show_toggle_switches:{heading:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03B4\u03B9\u03B1\u03BA\u03BF\u03C0\u03C4\u03CE\u03BD \u03B5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE\u03C2",description:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03B4\u03B9\u03B1\u03BA\u03CC\u03C0\u03C4\u03B7 \u03B5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03BA\u03AC\u03B8\u03B5 \u03BC\u03B5\u03BC\u03BF\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C3\u03C4\u03B7\u03BD \u03BA\u03AC\u03C1\u03C4\u03B1"},tags:{heading:"\u0395\u03C4\u03B9\u03BA\u03AD\u03C4\u03B5\u03C2",description:"\u03A7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 \u03B5\u03C4\u03B9\u03BA\u03AD\u03C4\u03B5\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C7\u03C9\u03C1\u03AF\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03BE\u03CD \u03C0\u03BF\u03BB\u03BB\u03CE\u03BD \u03BA\u03B1\u03C1\u03C4\u03CE\u03BD"},entities:{button_label:"\u03A1\u03CD\u03B8\u03BC\u03B9\u03C3\u03B7 \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03B1\u03BD\u03CC\u03BC\u03B5\u03BD\u03C9\u03BD \u03BF\u03BD\u03C4\u03BF\u03C4\u03AE\u03C4\u03C9\u03BD",heading:"\u03A3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03B1\u03BD\u03CC\u03BC\u03B5\u03BD\u03B5\u03C2 \u03BF\u03BD\u03C4\u03CC\u03C4\u03B7\u03C4\u03B5\u03C2",description:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03B9\u03C2 \u03BF\u03BD\u03C4\u03CC\u03C4\u03B7\u03C4\u03B5\u03C2 \u03C0\u03BF\u03C5 \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03B5\u03C4\u03B5 \u03BC\u03AD\u03C3\u03C9 \u03C4\u03BF\u03C5 \u03C7\u03C1\u03BF\u03BD\u03BF\u03C0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03C3\u03C4\u03AE. \u039C\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03BA\u03AC\u03BD\u03B5\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03B5 \u03BC\u03B9\u03B1 \u03BF\u03BC\u03AC\u03B4\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B7\u03BD \u03B1\u03BD\u03BF\u03AF\u03BE\u03B5\u03C4\u03B5. \u039B\u03AC\u03B2\u03B5\u03C4\u03B5 \u03C5\u03C0\u03CC\u03C8\u03B7 \u03CC\u03C4\u03B9 \u03BF\u03C1\u03B9\u03C3\u03BC\u03AD\u03BD\u03B5\u03C2 \u03BF\u03BD\u03C4\u03CC\u03C4\u03B7\u03C4\u03B5\u03C2 (\u03CC\u03C0\u03C9\u03C2 \u03B1\u03B9\u03C3\u03B8\u03B7\u03C4\u03AE\u03C1\u03B5\u03C2) \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B7\u03B8\u03BF\u03CD\u03BD \u03BC\u03CC\u03BD\u03BF \u03B3\u03B9\u03B1 \u03C3\u03C5\u03BD\u03B8\u03AE\u03BA\u03B5\u03C2 \u03BA\u03B1\u03B9 \u03CC\u03C7\u03B9 \u03B3\u03B9\u03B1 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2.",included_number:"{number}/{total} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B5\u03C2"}}}}},V6={services:e6,ui:H6}});var k3={};B(k3,{default:()=>r6,services:()=>t6,ui:()=>L6});var t6,L6,r6,z7=p(()=>{t6={generic:{turn_on:"Turn on",turn_off:"Turn off",parameter_to_value:"{parameter} to {value}",action_with_parameter:"{action} with {parameter}"},climate:{set_temperature:"set temperature[ to {temperature}]",set_temperature_hvac_mode_heat:"heat[ to {temperature}]",set_temperature_hvac_mode_cool:"cool[ to {temperature}]",set_temperature_hvac_mode_heat_cool:"heat/cool[ to {temperature}]",set_temperature_hvac_mode_heat_cool_range:"heat/cool[ to {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ to {temperature}]",set_hvac_mode:"set mode[ to {hvac_mode}]",set_preset_mode:"set preset[ to {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"close",open_cover:"open",set_cover_position:"set position[ to {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_percentage:"set speed[ to {percentage}]",set_direction:"set direction[ to {direction}]",oscillate:"set oscillation[ to {oscillate}]"},humidifier:{set_humidity:"set humidity[ to {humidity}]",set_mode:"set mode[ to {mode}]"},input_number:{set_value:"set value[ to {value}]"},input_select:{select_option:"select option[ {option}]"},select:{select_option:"select option[ {option}]"},light:{turn_on:"turn on[ with {brightness} brightness]"},media_player:{select_source:"select source[ {source}]"},notify:{send_message:"send notification"},script:{execute:"execute"},vacuum:{start_pause:"start / pause"},water_heater:{set_operation_mode:"set mode[ to {operation_mode}]",set_away_mode:"set away mode"}},L6={components:{date:{day_types_short:{daily:"daily",workdays:"workdays",weekend:"weekend"},day_types_long:{daily:"every day",workdays:"on workdays",weekend:"in the weekend"},days:"days",tomorrow:"tomorrow",repeated_days:"every {days}",repeated_days_except:"every day except {excludedDays}",days_range:"from {startDay} to {endDay}",next_week_day:"next {weekday}"},time:{absolute:"at {time}",interval:"from {startTime} to {endTime}",at_midnight:"at midnight",at_noon:"at noon",at_sun_event:"at {sunEvent}"}},dialog:{enable_schedule:{title:"Complete modifications",description:"The schedule you have changed is currently disabled, do you want to enable it?"},confirm_delete:{title:"Remove entity?",description:"Are you sure you want to remove this entity?"},confirm_migrate:{title:"Update schedule",description:"Some settings will be lost by this change. Do you want to continue?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Scheduler",new_schedule:"New schedule",default_name:"Schedule #{id}"},overview:{no_entries:"There are no items to show",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{number} excluded {if number is 1} item {else} items",hide_excluded:"hide excluded items",additional_tasks:"{number} more {if number is 1} task {else} tasks",additional_task_info:{no_action:"No action configured"}},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Select a timeslot",toggle_single_mode:"To single mode",toggle_scheme_mode:"To scheme mode",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"Period",start_date:"From",end_date:"To"},repeat_type:"behaviour after completion",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks",additional_task_info:"Extra info additional task"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},r6={services:t6,ui:L6}});var c5={};B(c5,{default:()=>a6,services:()=>i6,ui:()=>o6});var i6,o6,a6,N7=p(()=>{i6={generic:{turn_on:"Encender",turn_off:"Apagar",parameter_to_value:"{parameter} a {value}",action_with_parameter:"{action} con {parameter}"},climate:{set_temperature:"establecer temperatura[ a {temperature}]",set_temperature_hvac_mode_heat:"calefacci\xF3n[ a {temperature}]",set_temperature_hvac_mode_cool:"fr\xEDo[ a {temperature}]",set_temperature_hvac_mode_heat_cool:"calefacci\xF3n/fr\xEDo[ a {temperature}]",set_temperature_hvac_mode_heat_cool_range:"calefacci\xF3n/fr\xEDo[ a {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"autom\xE1tico[ a {temperature}]",set_hvac_mode:"establecer modo[ a {hvac_mode}]",set_preset_mode:"establecer preajuste[ {preset_mode}]",set_fan_mode:"establecer ventilador[ a {fan_mode}]",set_swing_mode:"establecer oscilaci\xF3n[ a {swing_mode}]"},cover:{close_cover:"cerrado",open_cover:"abierto",set_cover_position:"establecer posici\xF3n[ a {position}]",set_cover_tilt_position:"establecer inclinaci\xF3n[ a {tilt_position}]"},fan:{set_percentage:"establecer velocidad[ a {speed}]",set_direction:"establecer direcci\xF3n[ a {direction}]",oscillate:"establecer oscilaci\xF3n[ a {oscillate}]"},humidifier:{set_humidity:"establecer humedad[ a {humidity}]",set_mode:"establecer modo[ a {mode}]"},input_number:{set_value:"establecer valor[ a {value}]"},input_select:{select_option:"seleccionar opci\xF3n[ a {option}]"},select:{select_option:"seleccionar opci\xF3n[ {option}]"},light:{turn_on:"encender[ con brillo en {brightness}]"},media_player:{select_source:"seleccionar fuente[ {source}]"},notify:{send_message:"enviar notificaci\xF3n"},script:{execute:"ejecutar"},vacuum:{start_pause:"iniciar / pausar"},water_heater:{set_operation_mode:"establecer modo[ a {operation_mode}]",set_away_mode:"establecer modo fuera de casa"}},o6={components:{date:{day_types_short:{daily:"todos los d\xEDas",workdays:"d\xEDas h\xE1biles",weekend:"fin de semana"},day_types_long:{daily:"todos los d\xEDas",workdays:"d\xEDas h\xE1biles",weekend:"fin de semana"},days:"d\xEDas",tomorrow:"ma\xF1ana",repeated_days:"cada {days}",repeated_days_except:"cada dia excepto {excludedDays}",days_range:"de {startDay} a {endDay}",next_week_day:"pr\xF3ximo {weekday}"},time:{absolute:"a la(s) {time}",interval:"desde la(s) {startTime} hasta la(s) {endTime}",at_midnight:"a la medianoche",at_noon:"al mediod\xEDa",at_sun_event:"al {sunEvent}"}},dialog:{enable_schedule:{title:"Completar modificaciones",description:"El horario que ha modificado est\xE1 actualmente deshabilitado, \xBFDesea habilitarlo?"},confirm_delete:{title:"\xBFEliminar entidad?",description:"\xBFEst\xE1 seguro de que deseas eliminar esta entidad?"},confirm_migrate:{title:"Modificar horario",description:"Algunas configuraciones se perder\xE1n con este cambio. \xBFDesea proceder?"},weekday_picker:{title:"D\xEDas repetidos para el horario",choose:"Elegir..."},entity_picker:{title:"Elegir entidades",choose:"Elegir...",no_results:"No se encontraron art\xEDculos coincidentes"},action_picker:{title:"Elija Acci\xF3n",show_all:"Mostrar todas las entidades admitidas"}},panel:{common:{title:"Planificador",new_schedule:"Nuevo horario",default_name:"Horario #{id}"},overview:{no_entries:"No hay ning\xFAn elemento que mostrar",backend_error:"Fallo de conexi\xF3n con el componente planificador (Scheduler component). Debe ser instalado como integraci\xF3n antes de poder usar este panel.",excluded_items:"{number} {if number is 1} elemento excluido {else} elementos excluidos",hide_excluded:"ocultar elementos excluidos",additional_tasks:"{number} {if number is 1} tarea adicional {else} tareas adicionales",additional_task_info:{no_action:"Sin acci\xF3n configurada"}},editor:{repeated_days:"D\xEDas repetidos",start_time:"Inicio",stop_time:"Finalizaci\xF3n",action:"Acci\xF3n",add_action:"Agregar acci\xF3n",select_timeslot:"Seleccione un bloque de tiempo",toggle_single_mode:"Al modo simple",toggle_scheme_mode:"Al modo esquema",validation_errors:{overlapping_time:"El esquema tiene bloques de tiempo sobrepuestos",missing_target_entity:"Una o m\xE1s acciones carecen de una entidad asociada",missing_service_parameter:"Una o m\xE1s acciones carecen de una configuraci\xF3n requerida",missing_action:"El horario no tiene acciones"}},options:{conditions:{header:"Condiciones",add_condition:"Agregar condici\xF3n",new_condition:"Nueva condici\xF3n",types:{equal_to:"{entity} es igual a {value}",unequal_to:"{entity} es diferente a {value}",above:"{entity} es mayor que {value}",below:"{entity} es menor que {value}"},options:{logic_and:"Todas las condiciones deben ser v\xE1lidas",logic_or:"Cualquier condici\xF3n debe ser v\xE1lida",track_changes:"Reevaluar si una condici\xF3n cambia"}},period:{header:"Per\xEDodo",start_date:"De",end_date:"A"},repeat_type:"comportamiento despues de finalizar ",tags:"Etiquetas"},card_editor:{tabs:{entities:"Entidades",other:"Otros"},fields:{title:{heading:"T\xEDtujo de la tarjeta",options:{standard:"est\xE1ndar",hidden:"oculta",custom:"personalizada"},custom_title:"T\xEDtulo personalizado"},discover_existing:{heading:"Mostrar todos los horarios",description:"Esto ajustar\xE1 el par\xE1metro 'descubrir existentes (discover existing)'. Los horarios creados anteriormente deber\xE1n de ser agregados autom\xE1ticamente a la tarjeta."},time_step:{heading:"Paso de tiempo",description:"Resoluci\xF3n (en minutos) para la creaci\xF3n de horarios.",unit_minutes:"min"},default_editor:{heading:"Editor de tiempo por defecto",options:{single:"Modo de horario sencillo",scheme:"Modo de esquema de tiempo"}},sort_by:{heading:"Opciones de clasificaci\xF3n",description:"Orden en que los horarios aparecen en la tarjeta",options:{relative_time:"Tiempo restante hasta la siguiente acci\xF3n",title:"T\xEDtulo mostrado del horario",state:"Mostrar los horarios activos primero"}},display_format_primary:{heading:"Mostrar informaci\xF3n primaria",description:"Configura que etiqueta se utiliza para los horarios en la vista principal",options:{default:"Nombre del horario",entity_action:"Resumen de la tarea"}},display_format_secondary:{heading:"Mostrar informaci\xF3n secundaria",description:"Configura que propiedades adicionales son visibles en la vista principal",options:{relative_time:"Tiempo restante hasta la siguiente acci\xF3n",time:"Tiempo configurado para la siguiente acci\xF3n",days:"D\xEDas repetidos de la semana",additional_tasks:"N\xFAmero de tareas adicionales",additional_task_info:"Informaci\xF3n extra de tareas adicionales"}},show_header_toggle:{heading:"Mostrar el interruptor del encabezado",description:"Muestra el interruptor en la parte alta de la tarjeta para habilitar/desabilitar todas las entidades Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Mostrar interruptores",description:"Mostrar el interruptor para cada programaci\xF3n individual en la tarjeta"},tags:{heading:"Etiquetas",description:"Use etiquetas para dividir los horarios entre m\xFAltiples tarjetas"},entities:{button_label:"Configurar entidades incluidas",heading:"Entidades incluidas",description:"Seleccione las entidades que desea controlar usando el planificador. Puede hacer click en un grupo para abrirlo. Note que algunas entidades (como los sensores) solo pueden ser usados para condiciones, no para acciones.",included_number:"{number}/{total} seleccionados"}}}}},a6={services:i6,ui:o6}});var T3={};B(T3,{default:()=>s6,services:()=>M6,ui:()=>n6});var M6,n6,s6,I7=p(()=>{M6={generic:{turn_on:"L\xFClita sisse",turn_off:"L\xFClita v\xE4lja",parameter_to_value:"{parameter} {value} jaoks",action_with_parameter:"{action} v\xE4\xE4rtusega {parameter}"},climate:{set_temperature:"vali temperatuur [{temperature}]",set_temperature_hvac_mode_heat:"k\xFCte[ @ {temperature}]",set_temperature_hvac_mode_cool:"jahutus [ @ {temperature}]",set_temperature_hvac_mode_heat_cool:"k\xFCte/jahutus[ @ {temperature}]",set_temperature_hvac_mode_heat_cool_range:"k\xFCte/jahutus[ @ {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"automaatne[ @ {temperature}]",set_hvac_mode:"vali re\u017Eiim [{hvac_mode}]",set_preset_mode:"eelseade[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"sulge",open_cover:"ava",set_cover_position:"sea asendisse[{position}]",set_cover_tilt_position:"sea ribide kalle [ asendisse {tilt_position}]"},fan:{set_percentage:"vali kiirus[ @ {speed}]",set_direction:"vali suund[ @ {direction}]",oscillate:"vali hajutus[ @ {oscillate}]"},humidifier:{set_humidity:"sea niiskus[ {humidity}]",set_mode:"vali re\u017Eiim [{mode}]"},input_number:{set_value:"vali v\xE4\xE4rtus[ {value}]"},input_select:{select_option:"valik[ {option}]"},select:{select_option:"valik[ {option}]"},light:{turn_on:"l\xFClita sisse[ heledusega {brightness}]"},media_player:{select_source:"vali sisend[ {source}]"},notify:{send_message:"send notification"},script:{execute:"k\xE4ivita"},vacuum:{start_pause:"alusta/ootele"},water_heater:{set_operation_mode:"vali re\u017Eiim [{operation_mode}]",set_away_mode:"kodust \xE4ra"}},n6={components:{date:{day_types_short:{daily:"iga p\xE4ev",workdays:"t\xF6\xF6p\xE4evadel",weekend:"n\xE4dalavahetusel"},day_types_long:{daily:"iga p\xE4ev",workdays:"t\xF6\xF6p\xE4evadel",weekend:"n\xE4dalavahetusel"},days:"p\xE4eva",tomorrow:"homme",repeated_days:"iga {days} j\xE4rel",repeated_days_except:"iga p\xE4ev aga mitte {excludedDays}",days_range:"{startDay} kuni {endDay}",next_week_day:"j\xE4rgmisel {weekday}"},time:{absolute:"{time}",interval:"{startTime} kuni {endTime}",at_midnight:"kesk\xF6\xF6l",at_noon:"keskp\xE4eval",at_sun_event:"{sunEvent}"}},dialog:{enable_schedule:{title:"Viige muudatused l\xF5pule",description:"Muudetud ajakava on praegu keelatud, kas see peaks olema lubatud?"},confirm_delete:{title:"Kas eemaldan olemi?",description:"Oled kindel, et soovid selle olemi eemaldada?"},confirm_migrate:{title:"Muutke ajakava",description:"Selle muudatusega l\xE4hevad m\xF5ned seaded kaotsi. Kas soovite j\xE4tkata?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Ajastaja",new_schedule:"Uus ajakava",default_name:"Ajakava #{id}"},overview:{no_entries:"Ajastused puuduvad",backend_error:"Ajastaja sidumine puudub. Sidumine tuleb luua enne selle kaardi kasutamist.",excluded_items:"v\xE4lja on j\xE4etud {number}  {if number is 1} ajastus {else} ajastust",hide_excluded:"peida v\xE4lja j\xE4etud ajastused",additional_tasks:"veel {number} {if number is 1} ajastus {else} ajastust"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Alustuseks vali ajavahemik",toggle_single_mode:"\xDCksikre\u017Eiimile",toggle_scheme_mode:"Skeemire\u017Eiimile",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"Periood",start_date:"From",end_date:"To"},repeat_type:"toiming peale k\xE4ivitumist",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},s6={services:M6,ui:n6}});var B3={};B(B3,{default:()=>m6,services:()=>d6,ui:()=>l6});var d6,l6,m6,j7=p(()=>{d6={generic:{turn_on:"Laita p\xE4\xE4lle",turn_off:"Sammuta",parameter_to_value:"{parameter} {value}",action_with_parameter:"{action} {parameter}"},climate:{set_temperature:"aseta l\xE4mp\xF6tilaksi[ {temperature}]",set_temperature_hvac_mode_heat:"l\xE4mmit\xE4[ {temperature} asteeseen]",set_temperature_hvac_mode_cool:"j\xE4\xE4hdyt\xE4[ {temperature} asteeseen]",set_temperature_hvac_mode_heat_cool:"l\xE4mmit\xE4/j\xE4\xE4hdyt\xE4[ {temperature} asteeseen]",set_temperature_hvac_mode_heat_cool_range:"l\xE4mmit\xE4/j\xE4\xE4hdyt\xE4[ v\xE4lill\xE4 {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"automaatilla[ {temperature} asteeseen]",set_hvac_mode:"aseta tilaksi[ {hvac_mode}]",set_preset_mode:"aseta esivalinta[ {preset_mode}]",set_fan_mode:"aseta tuuletus[ {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"sulje",open_cover:"avaa",set_cover_position:"aseta sijainniksi[ {position}]",set_cover_tilt_position:"aseta kallistus[ {tilt_position}]"},fan:{set_percentage:"aseta nopeus[ {speed}]",set_direction:"asenta suunta[ {direction}]",oscillate:"aseta py\xF6rimisnopeus[ {oscillate}]"},humidifier:{set_humidity:"aseta kosteus[ {humidity}]",set_mode:"aseta tilaksi {mode}"},input_number:{set_value:"aseta arvo {value}"},input_select:{select_option:"valitse[ {option}]"},select:{select_option:"valitse[ {option}]"},light:{turn_on:"kytke p\xE4\xE4lle[ {brightness} kirkkaudella]"},media_player:{select_source:"valitse l\xE4hteeksi[ {source}]"},notify:{send_message:"l\xE4het\xE4 ilmoitus"},script:{execute:"suorita"},vacuum:{start_pause:"aloita / keskeyt\xE4"},water_heater:{set_operation_mode:"aseta tilaksi[ {operation_mode}]",set_away_mode:"aseta poissa-tila"}},l6={components:{date:{day_types_short:{daily:"p\xE4ivitt\xE4in",workdays:"ty\xF6p\xE4ivisin",weekend:"viikonloppuisin"},day_types_long:{daily:"p\xE4ivitt\xE4in",workdays:"ty\xF6p\xE4ivisin",weekend:"viikonloppuisin"},days:"p\xE4iv\xE4\xE4",tomorrow:"huomenna",repeated_days:"joka {days}",repeated_days_except:"joka p\xE4iv\xE4 paitsi {excludedDays}",days_range:"{startDay} {endDay}",next_week_day:"seuraava {weekday}"},time:{absolute:"{time}",interval:"{startTime} - {endTime}",at_midnight:"keskiy\xF6ll\xE4",at_noon:"keskip\xE4iv\xE4ll\xE4",at_sun_event:"{sunEvent}"}},dialog:{enable_schedule:{title:"Suorita muutokset loppuun",description:"Muutettu aikataulu on t\xE4ll\xE4 hetkell\xE4 poissa k\xE4yt\xF6st\xE4, pit\xE4isik\xF6 se ottaa k\xE4ytt\xF6\xF6n?"},confirm_delete:{title:"Poistetaanko kohde?",description:"Haluatko varmasti poistaa t\xE4m\xE4n kohteen?"},confirm_migrate:{title:"Muokkaa aikataulua",description:"Jotkut asetukset menetet\xE4\xE4n t\xE4m\xE4n muutoksen seurauksena. Haluatko edet\xE4?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Ajastin",new_schedule:"Uusi aikataulu",default_name:"Aikataulu #{id}"},overview:{no_entries:"Ei n\xE4ytett\xE4vi\xE4 kohteita",backend_error:"Ei voitu yhdist\xE4\xE4 scheduler komponenttiin. Kortin k\xE4ytt\xE4minen vaatii scheduler integraation asentamisen.",excluded_items:"{number} {if number is 1} poissuljettu kohde {else} poissuljettua kohdetta",hide_excluded:"piilota poissuljetut kohteet",additional_tasks:"{number} {if number is 1} teht\xE4v\xE4 {else} teht\xE4v\xE4\xE4"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Valitse aikaikkuna ensin",toggle_single_mode:"To single mode",toggle_scheme_mode:"To scheme mode",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"Ajanjakso",start_date:"From",end_date:"To"},repeat_type:"toiminta tapahtuman j\xE4lkeen",tags:"Tags"},card_editor:{tabs:{entities:"Kohteet",other:"Muu"},fields:{title:{heading:"Kortin otsikko",options:{standard:"normaali",hidden:"piilotettu",custom:"muokattu"},custom_title:"Muokattu otsikko"},discover_existing:{heading:"N\xE4yt\xE4 kaikki ajoitukset",description:"T\xE4m\xE4 kytkee k\xE4ytt\xF6\xF6n 'n\xE4yt\xE4 olemassa olevat -attribuutin'. Aiemmin luodut ajastukset lis\xE4t\xE4\xE4n automaattisesti korttiin. "},time_step:{heading:"Ajastusv\xE4lit",description:"Ajastusv\xE4li minuutteina ajastusten luontiin",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Yksitt\xE4istilaan",scheme:"Kaaviotilaan"}},sort_by:{heading:"Lajitteluasetukset",description:"J\xE4rjestys miten ajastukset n\xE4kyv\xE4t kortissa",options:{relative_time:"Aikaa j\xE4ljell\xE4 seuraavaan toimintoon",title:"Ajastuksen otsikko",state:"Aktiiviset ajastukset ylh\xE4\xE4ll\xE4"}},display_format_primary:{heading:"Ensisijainen tieto",description:"Valitse mit\xE4 n\xE4ytet\xE4\xE4n yhteenvedossa",options:{default:"Ajastuksen nimi",entity_action:"Ajastuksen yhteenveto"}},display_format_secondary:{heading:"Toissijainen tieto",description:"Valitse mitk\xE4 lis\xE4tiedot n\xE4kyv\xE4t yhteenvedossa",options:{relative_time:"Aikaa j\xE4ljell\xE4 seuraavaan toimintoon",time:"Seuraavalle toiminnolle m\xE4\xE4ritetty aika",days:"Toistuvat viikonp\xE4iv\xE4t",additional_tasks:"Lis\xE4toimintojen m\xE4\xE4r\xE4"}},show_header_toggle:{heading:"N\xE4yt\xE4 otsikkokytkin",description:"N\xE4yt\xE4 kytkin kortin yl\xE4reunassa usean ajastuksen p\xE4\xE4lle/pois kytkemiseen"},show_toggle_switches:{heading:"N\xE4yt\xE4 kytkimet",description:"N\xE4yt\xE4 kytkin jokaiselle yksitt\xE4iselle ajastukselle kortissa"},tags:{heading:"Tunniste",description:"K\xE4yt\xE4 tunnisteita ajastusten jakamiseen korttien v\xE4lill\xE4"},entities:{button_label:"Sis\xE4llytettyjen entiteettien m\xE4\xE4ritt\xE4minen",heading:"Ajastettavat kohteet",description:"Valitse kohteet, joille haluat luoda ajastuksia. Voit klikata ryhm\xE4\xE4n laajentaaksesi sen. Huom: joitain kohteita voi k\xE4ytt\xE4\xE4 vain ehtoina (esim. sensorit), ei toimintoihin",included_number:"{number} / {total} valittu"}}}}},m6={services:d6,ui:l6}});var D3={};B(D3,{default:()=>c6,services:()=>A6,ui:()=>p6});var A6,p6,c6,W7=p(()=>{A6={generic:{turn_on:"Allumer",turn_off:"\xC9teindre",parameter_to_value:"{parameter} vers {value}",action_with_parameter:"{action} avec {parameter}"},climate:{set_temperature:"ajuster la temp\xE9rature[ \xE0 {temperature}]",set_temperature_hvac_mode_heat:"chauffe[ \xE0 {temperature}]",set_temperature_hvac_mode_cool:"refroidit[ \xE0 {temperature}]",set_temperature_hvac_mode_heat_cool:"chauffe/refroidit[ \xE0 {temperature}]",set_temperature_hvac_mode_heat_cool_range:"chauffe/refroidit[ \xE0 {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ \xE0 {temperature}]",set_hvac_mode:"ajuster le mode[ \xE0 {hvac_mode}]",set_preset_mode:"choisir le pr\xE9-r\xE9glage[ {preset_mode}]",set_fan_mode:"ajuster le mode de ventilation[ \xE0 {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"fermer",open_cover:"ouvrir",set_cover_position:"ajuster la position[ \xE0 {position}]",set_cover_tilt_position:"r\xE9gler les volets[ \xE0 {tilt_position}]"},fan:{set_percentage:"ajuster la vitesse[ \xE0 {speed}]",set_direction:"ajuster l'orientation[ vers {direction}]",oscillate:"ajuster l'oscillation[ \xE0 {oscillate}]"},humidifier:{set_humidity:"ajuster l'humidit\xE9[ \xE0 {humidity}]",set_mode:"ajuster le mode[ \xE0 {mode}]"},input_number:{set_value:"ajuster la valeur[ \xE0 {value}]"},input_select:{select_option:"choisir l'option[ {option}]"},select:{select_option:"choisir l'option[ {option}]"},light:{turn_on:"allumer[ avec une luminosit\xE9 de {brightness}]"},media_player:{select_source:"choisir la source[ {source}]"},notify:{send_message:"envoyer une notification"},script:{execute:"ex\xE9cuter"},vacuum:{start_pause:"d\xE9marrer / pause"},water_heater:{set_operation_mode:"ajuster le mode[ \xE0 {operation_mode}]",set_away_mode:"choisir le mode absent"}},p6={components:{date:{day_types_short:{daily:"quotidien",workdays:"jours de travail",weekend:"weekend"},day_types_long:{daily:"chaque jour",workdays:"en semaine",weekend:"le weekend"},days:"jours",tomorrow:"demain",repeated_days:"chaque {days}",repeated_days_except:"chaque jour sauf {excludedDays}",days_range:"de {startDay} \xE0 {endDay}",next_week_day:"{weekday} prochain"},time:{absolute:"\xE0 {time}",interval:"de {startTime} \xE0 {endTime}",at_midnight:"\xE0 minuit",at_noon:"\xE0 midi",at_sun_event:"au {sunEvent}"}},dialog:{enable_schedule:{title:"Compl\xE9ter les modifications",description:"Le planning qui a \xE9t\xE9 modifi\xE9 est actuellement d\xE9sactiv\xE9, doit-il \xEAtre activ\xE9\xA0?"},confirm_delete:{title:"Supprimer l'entit\xE9 ?",description:"Voulez-vous vraiment supprimer cette entit\xE9 ?"},confirm_migrate:{title:"Modifier l'horaire",description:"Certains param\xE8tres seront perdus par ce changement. Voulez-vous poursuivre?"},weekday_picker:{title:"Jours de r\xE9p\xE9tition",choose:"Choisir les jours..."},entity_picker:{title:"Choisir les entit\xE9s",choose:"Choisir...",no_results:"Aucune entit\xE9 trouv\xE9e"},action_picker:{title:"Choisir une action",show_all:"Afficher toutes les entit\xE9s prises en charge"}},panel:{common:{title:"Planificateur",new_schedule:"Nouvel horaire",default_name:"Horaire #{id}"},overview:{no_entries:"il n'y a pas d'entr\xE9e \xE0 montrer",backend_error:"Impossible de se connecter au composant du planificateur. Il doit \xEAtre install\xE9 en tant qu'int\xE9gration avant que cette carte ne puisse \xEAtre utilis\xE9e.",excluded_items:"{number} {if number is 1}entr\xE9e exclue{else}entr\xE9es exclues",hide_excluded:"cacher les entr\xE9es exclues",additional_tasks:"{number} {if number is 1}t\xE2che \xE0 venir{else}t\xE2ches \xE0 venir"},editor:{repeated_days:"Jours de r\xE9p\xE9tition",start_time:"Heure de d\xE9but",stop_time:"Heure de fin",action:"Action",add_action:"Ajouter une action",select_timeslot:"Choisir d'abord une plage horaire",toggle_single_mode:"Vers mode simple",toggle_scheme_mode:"Vers mode sch\xE9ma",validation_errors:{overlapping_time:"Certaines plages horaires se chevauchent",missing_target_entity:"Certaines actions n'ont pas d'entit\xE9 s\xE9lectionn\xE9e",missing_service_parameter:"Certaines actions ne sont pas totalement configur\xE9es",missing_action:"Le planning n'a aucune action d\xE9finie"}},options:{conditions:{header:"Conditions",add_condition:"Ajouter une condition",new_condition:"Nouvelle condition",types:{equal_to:"{entity} est \xE9gal \xE0 {value}",unequal_to:"{entity} n'est pas \xE9gal \xE0 {value}",above:"{entity} est sup\xE9rieur \xE0 {value}",below:"{entity} est inf\xE9rieur \xE0 {value}"},options:{logic_and:"Toutes les conditions doivent \xEAtre valides",logic_or:"Au moins une condition doit \xEAtre valide",track_changes:"R\xE9-\xE9valuer lorsque la condition change"}},period:{header:"P\xE9riode",start_date:"Du",end_date:"Au"},repeat_type:"Comportement apr\xE8s l'ach\xE8vement",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},c6={services:A6,ui:p6}});var R3={};B(R3,{default:()=>x6,services:()=>u6,ui:()=>v6});var u6,v6,x6,U7=p(()=>{u6={generic:{turn_on:"\u05D4\u05E4\u05E2\u05DC\u05D4",turn_off:"\u05DB\u05D9\u05D1\u05D5\u05D9",parameter_to_value:"{parameter} \u05DC {value}",action_with_parameter:"{action} \u05E2\u05DD {parameter}"},climate:{set_temperature:"\u05E7\u05D1\u05E2 \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4[ \u05DC {temperature}]",set_temperature_hvac_mode_heat:"\u05D7\u05D9\u05DE\u05D5\u05DD[ \u05DC {temperature}]",set_temperature_hvac_mode_cool:"\u05E7\u05D9\u05E8\u05D5\u05E8[ \u05DC {temperature}]",set_temperature_hvac_mode_heat_cool:"\u05D7\u05D9\u05DE\u05D5\u05DD/\u05E7\u05D9\u05E8\u05D5\u05E8[ \u05DC {temperature}]",set_temperature_hvac_mode_heat_cool_range:"\u05D7\u05D9\u05DE\u05D5\u05DD/\u05E7\u05D9\u05E8\u05D5\u05E8[ \u05DC {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9[ \u05DC {temperature}]",set_hvac_mode:"\u05E7\u05D1\u05E2 \u05DE\u05E6\u05D1 \u05E2\u05D1\u05D5\u05D3\u05D4[ \u05DC {hvac_mode}]",set_preset_mode:"\u05E7\u05D1\u05E2 \u05D4\u05D2\u05D3\u05E8\u05D4[ \u05DC {preset_mode}]",set_fan_mode:"\u05D4\u05D2\u05D3\u05E8 \u05DE\u05E6\u05D1 \u05DE\u05D0\u05D5\u05D5\u05E8\u05E8[ \u05DC {fan_mode}]",set_swing_mode:"\u05D4\u05D2\u05D3\u05E8 \u05DE\u05E6\u05D1 \u05EA\u05E0\u05D5\u05D3\u05EA \u05EA\u05E8\u05D9\u05E1[ \u05DC {swing_mode}]"},cover:{close_cover:"\u05E1\u05D2\u05D9\u05E8\u05D4",open_cover:"\u05E4\u05EA\u05D9\u05D7\u05D4",set_cover_position:"\u05E7\u05D1\u05E2 \u05DE\u05D9\u05E7\u05D5\u05DD[ \u05DC {position}]",set_cover_tilt_position:"\u05E7\u05D1\u05E2 \u05D4\u05D8\u05D9\u05D4[ \u05DC {tilt_position}]"},fan:{set_percentage:"\u05E7\u05D1\u05E2 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA[ \u05DC {speed}]",set_direction:"\u05E7\u05D1\u05E2 \u05DB\u05D9\u05D5\u05D5\u05DF[ \u05DC {direction}]",oscillate:"\u05E7\u05D1\u05E2 \u05EA\u05E0\u05D5\u05D3\u05EA \u05EA\u05E8\u05D9\u05E1[ \u05DC {oscillate}]"},humidifier:{set_humidity:"\u05E7\u05D1\u05E2 \u05DC\u05D7\u05D5\u05EA[ \u05DC {humidity}]",set_mode:"\u05E7\u05D1\u05E2 \u05DE\u05E6\u05D1 \u05E2\u05D1\u05D5\u05D3\u05D4[ \u05DC {mode}]"},input_number:{set_value:"\u05E7\u05D1\u05E2 \u05E2\u05E8\u05DA[ \u05DC {value}]"},input_select:{select_option:"\u05D1\u05D7\u05E8 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA[ {option}]"},select:{select_option:"\u05D1\u05D7\u05E8 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA[ {option}]"},light:{turn_on:"\u05D4\u05D3\u05DC\u05E7\u05D4[ \u05D1\u05E2\u05D5\u05E6\u05DE\u05D4 \u05E9\u05DC {brightness}]"},media_player:{select_source:"\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05E8[ {source}]"},notify:{send_message:"\u05E9\u05DC\u05D7 \u05D4\u05EA\u05E8\u05D0\u05D4"},script:{execute:"\u05D1\u05E6\u05E2"},vacuum:{start_pause:"\u05D4\u05EA\u05D7\u05DC / \u05D4\u05E4\u05E1\u05E7"},water_heater:{set_operation_mode:"\u05E7\u05D1\u05E2 \u05DE\u05E6\u05D1 \u05E2\u05D1\u05D5\u05D3\u05D4[ \u05DC {operation_mode}]",set_away_mode:"\u05E7\u05D1\u05E2 \u05DE\u05E6\u05D1 \u05DE\u05D5\u05E5 \u05DC\u05D1\u05D9\u05EA"}},v6={components:{date:{day_types_short:{daily:"\u05DB\u05DC \u05D9\u05D5\u05DD",workdays:"\u05D9\u05DE\u05D9 \u05D7\u05D5\u05DC",weekend:"\u05E1\u05D5\u05E3 \u05E9\u05D1\u05D5\u05E2"},day_types_long:{daily:"\u05DB\u05DC \u05D9\u05D5\u05DD",workdays:"\u05D1\u05D9\u05DE\u05D9 \u05D7\u05D5\u05DC",weekend:"\u05D1\u05E1\u05D5\u05E3 \u05D4\u05E9\u05D1\u05D5\u05E2"},days:"\u05D9\u05DE\u05D9\u05DD",tomorrow:"\u05DE\u05D7\u05E8",repeated_days:"\u05D1\u05DB\u05DC {days}",repeated_days_except:"\u05D1\u05DB\u05DC \u05D9\u05D5\u05DD \u05E4\u05E8\u05D8 \u05DC  {excludedDays}",days_range:"\u05DE- {startDay} \u05D5\u05E2\u05D3- {endDay}",next_week_day:"\u05D4\u05D1\u05D0 {weekday}"},time:{absolute:"\u05D1\u05E9\u05E2\u05D4 {time}",interval:"\u05DE\u05E9\u05E2\u05D4 {startTime} \u05E2\u05D3 \u05E9\u05E2\u05D4 {endTime}",at_midnight:"\u05D1\u05D7\u05E6\u05D5\u05EA \u05D4\u05DC\u05D9\u05DC\u05D4",at_noon:"\u05D1\u05D7\u05E6\u05D5\u05EA \u05D4\u05D9\u05D5\u05DD",at_sun_event:"\u05D1 {sunEvent}"}},dialog:{enable_schedule:{title:"\u05D4\u05E9\u05DC\u05DD \u05D0\u05EA \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD",description:"\u05DC\u05D5\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD \u05E9\u05E9\u05D5\u05E0\u05D4 \u05DE\u05D5\u05E9\u05D1\u05EA \u05DB\u05E2\u05EA, \u05D4\u05D0\u05DD \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05D0\u05D5\u05EA\u05D5?"},confirm_delete:{title:"\u05DC\u05D4\u05E1\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D9\u05E9\u05D5\u05EA?",description:"\u05D4\u05D0\u05DD \u05D1\u05D5\u05D5\u05D3\u05D0\u05D5\u05EA \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E1\u05D9\u05E8 \u05D9\u05E9\u05D5\u05EA \u05D6\u05D5?"},confirm_migrate:{title:"\u05E9\u05E0\u05D4 \u05D0\u05EA \u05DC\u05D5\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD",description:"\u05D7\u05DC\u05E7 \u05DE\u05D4\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D9\u05D0\u05D1\u05D3\u05D5 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5. \u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA?"},weekday_picker:{title:"\u05D9\u05DE\u05D9\u05DD \u05DC\u05D7\u05D6\u05E8\u05D4 \u05E2\u05D1\u05D5\u05E8 \u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD",choose:"\u05D1\u05D7\u05E8..."},entity_picker:{title:"\u05D1\u05D7\u05E8 \u05D9\u05E9\u05D5\u05D9\u05D5\u05EA",choose:"\u05D1\u05D7\u05E8...",no_results:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05EA\u05D5\u05D0\u05DE\u05D9\u05DD"},action_picker:{title:"\u05D1\u05D7\u05E8 \u05E4\u05E2\u05D5\u05DC\u05D4",show_all:"\u05D4\u05E6\u05D2 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA \u05D4\u05E0\u05EA\u05DE\u05DB\u05D5\u05EA"}},panel:{common:{title:"\u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD",new_schedule:"\u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD \u05D7\u05D3\u05E9",default_name:"\u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD #{id}"},overview:{no_entries:"\u05D0\u05D9\u05DF \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4",backend_error:"\u05D0\u05D9\u05DF \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DC\u05E8\u05DB\u05D9\u05D1 \u05D4\u05EA\u05D6\u05DE\u05D5\u05E0\u05D9\u05DD. \u05E0\u05D3\u05E8\u05E9 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05D0\u05EA \u05D4\u05E8\u05DB\u05D9\u05D1 \u05D1\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1.",excluded_items:"{number} \u05DC\u05D0 \u05E0\u05DB\u05DC\u05DC {if number is 1} \u05E4\u05E8\u05D9\u05D8 {else} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",hide_excluded:"\u05D4\u05E1\u05EA\u05E8 \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05DC\u05D0 \u05DB\u05DC\u05D5\u05DC\u05D9\u05DD",additional_tasks:"{number} \u05E0\u05D5\u05E1\u05E3 {if number is 1} \u05DE\u05E9\u05D9\u05DE\u05D4 {else} \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA"},editor:{repeated_days:"\u05D9\u05DE\u05D9\u05DD \u05DC\u05D7\u05D6\u05E8\u05D4",start_time:"\u05D6\u05DE\u05DF \u05D4\u05EA\u05D7\u05DC\u05D4",stop_time:"\u05D6\u05DE\u05DF \u05E1\u05D9\u05D5\u05DD",action:"\u05E4\u05E2\u05D5\u05DC\u05D4",add_action:"\u05D4\u05D5\u05E1\u05E4\u05EA \u05E4\u05E2\u05D5\u05DC\u05D4",select_timeslot:"\u05D1\u05D7\u05E8 \u05DE\u05E9\u05D1\u05E6\u05EA \u05D6\u05DE\u05DF \u05E7\u05D5\u05D3\u05DD",toggle_single_mode:"\u05DC\u05DE\u05E6\u05D1 \u05E4\u05E9\u05D5\u05D8",toggle_scheme_mode:"\u05DC\u05DE\u05E6\u05D1 \u05D3\u05D9\u05D0\u05D2\u05E8\u05DE\u05D4",validation_errors:{overlapping_time:"\u05DC\u05D5\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD \u05DB\u05D5\u05DC\u05DC \u05DE\u05E9\u05D1\u05E6\u05D5\u05EA \u05D6\u05DE\u05DF \u05D7\u05D5\u05E4\u05E4\u05D5\u05EA",missing_target_entity:"\u05D0\u05D7\u05EA \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D7\u05E1\u05E8\u05D5\u05EA \u05D9\u05E9\u05D5\u05EA \u05D9\u05E2\u05D3",missing_service_parameter:"\u05D0\u05D7\u05EA \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D7\u05E1\u05E8\u05D5\u05EA \u05D4\u05D2\u05D3\u05E8\u05D4 \u05E0\u05D3\u05E8\u05E9\u05EA",missing_action:"\u05DC\u05D5\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DB\u05D5\u05DC\u05DC \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"}},options:{conditions:{header:"\u05EA\u05E0\u05D0\u05D9\u05DD",add_condition:"\u05D4\u05D5\u05E1\u05E4\u05EA \u05EA\u05E0\u05D0\u05D9",new_condition:"\u05EA\u05E0\u05D0\u05D9 \u05D7\u05D3\u05E9",types:{equal_to:"{entity} \u05E9\u05D5\u05D5\u05D4 \u05DC-{value}",unequal_to:"{entity} \u05DC\u05D0 \u05E9\u05D5\u05D5\u05D4 \u05DC-{value}",above:"{entity} \u05DE\u05E2\u05DC {value}",below:"{entity} \u05DE\u05EA\u05D7\u05EA {value}"},options:{logic_and:"\u05DB\u05DC \u05D4\u05EA\u05E0\u05D0\u05D9\u05DD \u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05E0\u05DB\u05D5\u05E0\u05D9\u05DD",logic_or:"\u05DB\u05DC \u05EA\u05E0\u05D0\u05D9 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05E0\u05DB\u05D5\u05DF",track_changes:"\u05D4\u05E2\u05E8\u05DB\u05D4 \u05DE\u05D7\u05D3\u05E9 \u05DB\u05D0\u05E9\u05E8 \u05D4\u05EA\u05E0\u05D0\u05D9\u05DD \u05DE\u05E9\u05EA\u05E0\u05D9\u05DD"}},period:{header:"\u05E4\u05E8\u05E7 \u05D6\u05DE\u05DF",start_date:"\u05DE",end_date:"\u05DC"},repeat_type:"\u05D4\u05EA\u05E0\u05D4\u05D2\u05D5\u05EA \u05DC\u05D0\u05D7\u05E8 \u05D4\u05E4\u05E2\u05DC\u05D4",tags:"\u05EA\u05D2\u05D9\u05DD"},card_editor:{tabs:{entities:"\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA",other:"\u05D0\u05D7\u05E8"},fields:{title:{heading:"\u05DB\u05D5\u05EA\u05E8\u05EA \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1",options:{standard:"\u05E8\u05D2\u05D9\u05DC\u05D4",hidden:"\u05DE\u05D5\u05E1\u05EA\u05E8\u05EA",custom:"\u05DE\u05D5\u05EA\u05D0\u05DE\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA"},custom_title:"\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05D5\u05EA\u05D0\u05DE\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA"},discover_existing:{heading:"\u05D4\u05E6\u05D2 \u05D0\u05EA \u05DB\u05DC \u05DC\u05D5\u05D7\u05D5\u05EA \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD",description:"\u05D4\u05D2\u05D3\u05E8\u05D4 \u05D6\u05D5 \u05E7\u05D5\u05D1\u05E2\u05EA \u05D0\u05EA \u05D4\u05E4\u05E8\u05DE\u05D8\u05E8 'discover existing'. \u05DC\u05D5\u05D7\u05D5\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D5 \u05D1\u05E2\u05D1\u05E8 \u05D9\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05DC\u05DB\u05E8\u05D8\u05D9\u05E1"},time_step:{heading:"\u05DE\u05E8\u05D5\u05D5\u05D7 \u05D6\u05DE\u05DF",description:"\u05E8\u05D6\u05D5\u05DC\u05D5\u05E6\u05D9\u05D4 (\u05D1\u05D3\u05E7\u05D5\u05EA) \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05DC\u05D5\u05D7\u05D5\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD",unit_minutes:"\u05D3\u05E7'"},default_editor:{heading:"\u05E2\u05D5\u05E8\u05DA \u05D6\u05DE\u05DF \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC",options:{single:"\u05DE\u05E6\u05D1 \u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05D5\u05D3\u05D3",scheme:"\u05DE\u05E6\u05D1 \u05EA\u05D1\u05E0\u05D9\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD"}},sort_by:{heading:"\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05DE\u05D9\u05D5\u05DF",description:"\u05E1\u05D3\u05E8 \u05D4\u05D5\u05E4\u05E2\u05EA \u05DC\u05D5\u05D7\u05D5\u05EA \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1",options:{relative_time:"\u05D6\u05DE\u05DF \u05E9\u05E0\u05D5\u05EA\u05E8 \u05E2\u05D3 \u05D4\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D4\u05D1\u05D0\u05D4",title:"\u05DB\u05D5\u05EA\u05E8\u05EA \u05DC\u05D5\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD \u05D4\u05DE\u05D5\u05E6\u05D2\u05EA",state:"\u05D4\u05E6\u05D2 \u05DC\u05D5\u05D7\u05D5\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD \u05E4\u05E2\u05D9\u05DC\u05D9\u05DD \u05D1\u05E8\u05D0\u05E9"}},display_format_primary:{heading:"\u05DE\u05D9\u05D3\u05E2 \u05E8\u05D0\u05E9\u05D9 \u05DE\u05D5\u05E6\u05D2",description:"\u05D4\u05D2\u05D3\u05E8 \u05D0\u05D9\u05D6\u05D5 \u05EA\u05D5\u05D5\u05D9\u05EA \u05EA\u05E9\u05DE\u05E9 \u05E2\u05D1\u05D5\u05E8 \u05DC\u05D5\u05D7\u05D5\u05EA \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05E1\u05E7\u05D9\u05E8\u05D4 \u05D4\u05DB\u05DC\u05DC\u05D9\u05EA",options:{default:"\u05E9\u05DD \u05DC\u05D5\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD",entity_action:"\u05E1\u05D9\u05DB\u05D5\u05DD \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4"}},display_format_secondary:{heading:"\u05DE\u05D9\u05D3\u05E2 \u05DE\u05E9\u05E0\u05D9 \u05DE\u05D5\u05E6\u05D2",description:"\u05D4\u05D2\u05D3\u05E8 \u05D0\u05D9\u05DC\u05D5 \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D9\u05D4\u05D9\u05D5 \u05D2\u05DC\u05D5\u05D9\u05D9\u05DD \u05D1\u05E1\u05E7\u05D9\u05E8\u05D4 \u05D4\u05DB\u05DC\u05DC\u05D9\u05EA",options:{relative_time:"\u05D6\u05DE\u05DF \u05E9\u05E0\u05D5\u05EA\u05E8 \u05E2\u05D3 \u05D4\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D4\u05D1\u05D0\u05D4",time:"\u05D6\u05DE\u05DF \u05DE\u05D5\u05D2\u05D3\u05E8 \u05DC\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D4\u05D1\u05D0\u05D4",days:"\u05D9\u05DE\u05D9\u05DD \u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05D1\u05E9\u05D1\u05D5\u05E2",additional_tasks:"\u05DE\u05E1\u05E4\u05E8 \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"}},show_header_toggle:{heading:"\u05D4\u05E6\u05D2 \u05DE\u05EA\u05D2 \u05D1\u05DB\u05D5\u05EA\u05E8\u05EA",description:"\u05D4\u05E6\u05D2 \u05DE\u05EA\u05D2 \u05D4\u05E4\u05E2\u05DC\u05D4/\u05DB\u05D9\u05D1\u05D5\u05D9 \u05D1\u05E8\u05D0\u05E9 \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1 \u05DC\u05D4\u05E4\u05E2\u05DC\u05D4/\u05D4\u05E9\u05D1\u05EA\u05D4 \u05E9\u05DC \u05DB\u05DC \u05D4\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA"},show_toggle_switches:{heading:"\u05D4\u05E6\u05D2 \u05DE\u05EA\u05D2\u05D9\u05DD",description:"\u05D4\u05E6\u05D2 \u05DE\u05EA\u05D2 \u05E2\u05D1\u05D5\u05E8 \u05DB\u05DC \u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05D5\u05D3\u05D3 \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1"},tags:{heading:"\u05EA\u05D2\u05D9\u05D5\u05EA",description:"\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05EA\u05D2\u05D9\u05D5\u05EA \u05DB\u05D3\u05D9 \u05DC\u05D7\u05DC\u05E7 \u05DC\u05D5\u05D7\u05D5\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05D9\u05DF \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD"},entities:{button_label:"\u05D4\u05D2\u05D3\u05E8 \u05D9\u05E9\u05D5\u05D9\u05D5\u05EA \u05DB\u05DC\u05D5\u05DC\u05D5\u05EA",heading:"\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA \u05DB\u05DC\u05D5\u05DC\u05D5\u05EA",description:"\u05D1\u05D7\u05E8 \u05D0\u05EA \u05D4\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05E9\u05DC\u05D5\u05D8 \u05D1\u05D4\u05DF \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05DE\u05EA\u05D6\u05DE\u05DF. \u05E0\u05D9\u05EA\u05DF \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05D5\u05EA\u05D4. \u05E9\u05D9\u05DD \u05DC\u05D1 \u05E9\u05D7\u05DC\u05E7 \u05DE\u05D4\u05D9\u05E9\u05D5\u05D9\u05D5\u05EA (\u05DB\u05DE\u05D5 \u05D7\u05D9\u05D9\u05E9\u05E0\u05D9\u05DD) \u05D9\u05DB\u05D5\u05DC\u05D5\u05EA \u05DC\u05E9\u05DE\u05E9 \u05E8\u05E7 \u05DC\u05EA\u05E0\u05D0\u05D9\u05DD, \u05D5\u05DC\u05D0 \u05DC\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA.",included_number:"{number}/{total} \u05E0\u05D1\u05D7\u05E8\u05D5"}}}}},x6={services:u6,ui:v6}});var z3={};B(z3,{default:()=>g6,services:()=>h6,ui:()=>Z6});var h6,Z6,g6,G7=p(()=>{h6={generic:{turn_on:"Bekapcsol\xE1s",turn_off:"Kikapcsol\xE1s",parameter_to_value:"{parameter} to {value}",action_with_parameter:"{action} with {parameter}"},climate:{set_temperature:"h\u0151m\xE9rs\xE9klet[ to {temperature}]",set_temperature_hvac_mode_heat:"meleg\xEDteni[ to {temperature}]",set_temperature_hvac_mode_cool:"h\u0171t\xE9s[ to {temperature}]",set_temperature_hvac_mode_heat_cool:"meleg\xEDteni/h\u0171t\xE9s[ to {temperature}]",set_temperature_hvac_mode_heat_cool_range:"meleg\xEDteni/h\u0171t\xE9s[ to {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"automatikus[ to {temperature}]",set_hvac_mode:"m\xF3d be\xE1ll\xEDt\xE1sa[ to {hvac_mode}]",set_preset_mode:"preset be\xE1ll\xEDt\xE1sa[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"z\xE1r\xE1s",open_cover:"nyit\xE1s",set_cover_position:"v\xE1ltoztass poz\xEDci\xF3t[ to {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_percentage:"set speed[ to {speed}]",set_direction:"set direction[ to {direction}]",oscillate:"set oscillation[ to {oscillate}]"},humidifier:{set_humidity:"set humidity[ to {humidity}]",set_mode:"m\xF3d be\xE1ll\xEDt\xE1sa[ to {mode}]"},input_number:{set_value:"\xE9rt\xE9k be\xE1ll\xEDt\xE1sa[ to {value}]"},input_select:{select_option:"opci\xF3 kiv\xE1laszt\xE1sa[ {option}]"},select:{select_option:"opci\xF3 kiv\xE1laszt\xE1sa[ {option}]"},light:{turn_on:"bekapcsol\xE1s[ with {brightness} brightness]"},media_player:{select_source:"forr\xE1s kiv\xE1laszt\xE1sa[ {source}]"},notify:{send_message:"send notification"},script:{execute:"kezd\xE9s"},vacuum:{start_pause:"start / pause"},water_heater:{set_operation_mode:"m\xF3d be\xE1ll\xEDt\xE1sa[ to {operation_mode}]",set_away_mode:"set away mode"}},Z6={components:{date:{day_types_short:{daily:"minden nap",workdays:"munkanapokon",weekend:"h\xE9tv\xE9g\xE9n"},day_types_long:{daily:"minden nap",workdays:"munkanapokon",weekend:"h\xE9tv\xE9g\xE9n"},days:"Napokon",tomorrow:"tomorrow",repeated_days:"every {days}",repeated_days_except:"every day except {excludedDays}",days_range:"from {startDay} to {endDay}",next_week_day:"k\xF6vetkez\u0151 {weekday}"},time:{absolute:"{time}-kor",interval:"{startTime} - {endTime}",at_midnight:"\xE9jf\xE9lkor",at_noon:"d\xE9lben",at_sun_event:"{sunEvent}kor"}},dialog:{enable_schedule:{title:"V\xE9gezze el a m\xF3dos\xEDt\xE1sokat",description:"A m\xF3dos\xEDtott \xFCtemez\xE9s jelenleg le van tiltva, enged\xE9lyezni kell?"},confirm_delete:{title:"Biztos benne, hogy elt\xE1vol\xEDtja az entit\xE1st?",description:"Biztos benne, hogy el szeretn\xE9 t\xE1vol\xEDtani ezt az entit\xE1st?"},confirm_migrate:{title:"\xDCtemez\xE9s m\xF3dos\xEDt\xE1sa",description:"Ezzel a m\u0171velettel bizonyos be\xE1ll\xEDt\xE1sok elvesznek. Akarod folytatni?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Id\u0151z\xEDt\xE9sek",new_schedule:"\xDAj \xFCtemez\xE9s",default_name:"\xDCtemterv #{id}"},overview:{no_entries:"Nincs megjelen\xEDthet\u0151 elem",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{number} excluded {if number is 1} item {else} items",hide_excluded:"hide excluded items",additional_tasks:"m\xE9g {number} feladat"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Select a timeslot",toggle_single_mode:"Egyszer\u0171 m\xF3dba",toggle_scheme_mode:"Diagram m\xF3dba",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"Id\u0151szak",start_date:"From",end_date:"To"},repeat_type:"behaviour after completion",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},g6={services:h6,ui:Z6}});var I3={};B(I3,{default:()=>_6,services:()=>S6,ui:()=>f6});var S6,f6,_6,q7=p(()=>{S6={generic:{turn_on:"Accendi",turn_off:"Spegni",parameter_to_value:"{parameter} a {value}",action_with_parameter:"{action} con {parameter}"},climate:{set_temperature:"imposta temperatura[ a {temperature}]",set_temperature_hvac_mode_heat:"riscaldamento[ a {temperature}]",set_temperature_hvac_mode_cool:"raffrescamento[ a {temperature}]",set_temperature_hvac_mode_heat_cool:"riscaldamento/raffrescamento[ a {temperature}]",set_temperature_hvac_mode_heat_cool_range:"riscaldamento/raffrescamento[ a {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ a {temperature}]",set_hvac_mode:"imposta modalit\xE0[ a {hvac_mode}]",set_preset_mode:"imposta programmazione[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"chiuso",open_cover:"aperto",set_cover_position:"imposta posizione[ su {position}]",set_cover_tilt_position:"imposta inclinazione[ su {tilt_position}]"},fan:{set_percentage:"imposta velocit\xE0[ a {speed}]",set_direction:"imposta direzione[ a {direction}]",oscillate:"imposta oscillazione[ a {oscillate}]"},humidifier:{set_humidity:"imposta umidit\xE0[ a {humidity}]",set_mode:"imposta modalit\xE0[ a {mode}]"},input_number:{set_value:"imposta valore[ a {value}]"},input_select:{select_option:"seleziona opzione[ {option}]"},select:{select_option:"seleziona opzione[ {option}]"},light:{turn_on:"accendi[ con il {brightness} di luminosit\xE0]"},media_player:{select_source:"seleziona sorgente[ {source}]"},notify:{send_message:"invia notifica"},script:{execute:"esegui"},vacuum:{start_pause:"avvia / pausa"},water_heater:{set_operation_mode:"imposta modalit\xE0[ a {operation_mode}]",set_away_mode:"imposta fuori casa"}},f6={components:{date:{day_types_short:{daily:"giornaliero",workdays:"giorni lavorativi",weekend:"weekend"},day_types_long:{daily:"ogni giorno",workdays:"nei giorni lavorativi",weekend:"nel weekend"},days:"giorni",tomorrow:"domani",repeated_days:"ogni {days}",repeated_days_except:"ogni giorno tranne {excludedDays}",days_range:"{if startDay is domenica} dalla domenica {else} dal {startDay} {if endDay is domenica} alla domenica {else} al {endDay}",next_week_day:"prossimo {weekday}"},time:{absolute:"alle {time}",interval:"dalle {startTime} alle {endTime}",at_midnight:"a mezzanotte",at_noon:"a mezzogiorno",at_sun_event:"al {sunEvent}"}},dialog:{enable_schedule:{title:"Completa le modifiche",description:"La pianificazione modificata \xE8 attualmente disabilitata, dovrebbe essere abilitata?"},confirm_delete:{title:"Vuoi rimuovere l'entit\xE0?",description:"Sei sicuro di voler rimuovere questa entit\xE0?"},confirm_migrate:{title:"Modifica orario",description:"Alcune impostazioni andranno perse con questa azione. Vuoi procedere?"},weekday_picker:{title:"Giorni ripetuti per la pianificazione",choose:"Scegli..."},entity_picker:{title:"Scegli entit\xE0",choose:"Scegli...",no_results:"Nessun elemento corrispondente trovato"},action_picker:{title:"Scegli azione",show_all:"Mostra tutte le entit\xE0 supportate"}},panel:{common:{title:"Schedulatore",new_schedule:"Nuovo orario",default_name:"Orario #{id}"},overview:{no_entries:"Non ci sono oggetti da visualizzare",backend_error:"Impossibile connettersi con il componente scheduler. Deve essere installato come integrazione prima di poter utilizzare questa card.",excluded_items:"{number} {if number is 1} oggetto escluso {else} oggetti esclusi",hide_excluded:"Nascondi oggetti esclusi",additional_tasks:"{number} attivit\xE0 in pi\xF9"},editor:{repeated_days:"Giorni ripetuti",start_time:"Ora di inizio",stop_time:"Ora di fine",action:"Azione",add_action:"Aggiungi azione",select_timeslot:"Seleziona una fascia oraria",toggle_single_mode:"Alla modo semplice",toggle_scheme_mode:"Alla modo schema",validation_errors:{overlapping_time:"Il programma ha fasce orarie sovrapposte",missing_target_entity:"Una o pi\xF9 azioni mancano di un'entit\xE0 target",missing_service_parameter:"Una o pi\xF9 azioni mancano di un'impostazione richiesta",missing_action:"Il programma non ha azioni"}},options:{conditions:{header:"Condizioni",add_condition:"Aggiungi condizione",new_condition:"Nuova condizione",types:{equal_to:"{entity} \xE8 uguale a {value}",unequal_to:"{entity} \xE8 diverso da {value}",above:"{entity} \xE8 superiore a {value}",below:"{entity} \xE8 inferiore a {value}"},options:{logic_and:"Tutte le condizioni devono essere vere",logic_or:"Qualsiasi condizione deve essere vera",track_changes:"Rivaluta quando cambiano le condizioni"}},period:{header:"Periodo",start_date:"From",end_date:"To"},repeat_type:"comportamento dopo il completamento",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},_6={services:S6,ui:f6}});var W3={};B(W3,{default:()=>k6,services:()=>y6,ui:()=>b6});var y6,b6,k6,Q7=p(()=>{y6={generic:{turn_on:"\u012Ejungti",turn_off:"I\u0161jungti",parameter_to_value:"{parameter} uz {value}",action_with_parameter:"{action} ar {parameter}"},climate:{set_temperature:"uzst\u0101d\u012Bt temperat\u016Bru[ uz {temperature}]",set_temperature_hvac_mode_heat:"sild\u012Bt[ l\u012Bdz {temperature}]",set_temperature_hvac_mode_cool:"atdzes\u0113t[ l\u012Bdz {temperature}]",set_temperature_hvac_mode_heat_cool:"sild\u012Bt/atdzes\u0113t[ l\u012Bdz {temperature}]",set_temperature_hvac_mode_heat_cool_range:"sild\u012Bt/atdzes\u0113t[ uz {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ uz {temperature}]",set_hvac_mode:"iestat\u012Bt[ uz {hvac_mode}]",set_preset_mode:"iestat\u012Bt re\u017E\u012Bmu[ uz {preset_mode}]",set_fan_mode:"iestat\u012Bt ventilatora re\u017E\u012Bmu[ uz {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"aizv\u0113rt",open_cover:"atv\u0113rt",set_cover_position:"uzst\u0101d\u012Bt poz\u012Bciju[ uz {position}]",set_cover_tilt_position:"uzst\u0101d\u012Bt sl\u012Bpuma st\u0101vokli[ uz {tilt_position}]"},fan:{set_percentage:"iestat\u012Bt \u0101trumu[ uz {speed}]",set_direction:"iestat\u012Bt virzienu[ uz {direction}]",oscillate:"iestat\u012Bt oscil\u0101ciju[ uz {oscillate}]"},humidifier:{set_humidity:"iestat\u012Bt mitrumu[ uz {humidity}]",set_mode:"iestat\u012Bt re\u017E\u012Bmu[ uz {mode}]"},input_number:{set_value:"iestat\u012Bt v\u0113rt\u012Bbu[ uz {value}]"},input_select:{select_option:"izv\u0113l\u0113ties opciju[ {option}]"},select:{select_option:"izv\u0113l\u0113ties opciju[ {option}]"},light:{turn_on:"iesl\u0113gt[ ar {brightness} spilgtumu]"},media_player:{select_source:"izv\u0113l\u0113ties avotu[ {source}]"},notify:{send_message:"nos\u016Bt\u012Bt pazi\u0146ojumu"},script:{execute:"izpild\u012Bt"},vacuum:{start_pause:"s\u0101kt / pauze"},water_heater:{set_operation_mode:"iestat\u012Bt re\u017E\u012Bmu[ uz {operation_mode}]",set_away_mode:"iestat\u012Bt promb\u016Btnes re\u017E\u012Bmu"}},b6={components:{date:{day_types_short:{daily:"ikdieni\u0161\u0137s",workdays:"darba dienas",weekend:"ned\u0113\u013Cas nogale"},day_types_long:{daily:"katru dienu",workdays:"darba dien\u0101s",weekend:"ned\u0113\u013Cas nogal\u0113"},days:"dienas",tomorrow:"r\u012Btdiena",repeated_days:"katras {days}",repeated_days_except:"katru dienu, iz\u0146emot {excludedDays}",days_range:"no {startDay} l\u012Bdz {endDay}",next_week_day:"n\u0101ko\u0161o {weekday}"},time:{absolute:"kad {time}",interval:"no {startTime} l\u012Bdz {endTime}",at_midnight:"kad midnight",at_noon:"kad noon",at_sun_event:"kad {sunEvent}"}},dialog:{enable_schedule:{title:"Pabeigt modific\u0113\u0161anu",description:"Izmain\u012Btais grafiks pa\u0161laik ir atsp\u0113jots, vai v\u0113laties to iesp\u0113jot?"},confirm_delete:{title:"Vai dz\u0113st vien\u012Bbu?",description:"Vai tie\u0161\u0101m v\u0113laties dz\u0113st \u0161o vien\u012Bbu?"},confirm_migrate:{title:"Atjaunin\u0101t grafiku",description:"\u0160\u012Bs izmai\u0146as rezult\u0101t\u0101 da\u017Ei iestat\u012Bjumi tiks zaud\u0113ti. Vai v\u0113laties turpin\u0101t?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Pl\u0101not\u0101js",new_schedule:"Jauns grafiks",default_name:"Grafiks #{id}"},overview:{no_entries:"Nav par\u0101d\u0101mu vien\u012Bbu",backend_error:"Nevar izveidot savienojumu ar pl\u0101not\u0101ja komponenti. Pirms \u0161\u012Bs kartes izmanto\u0161anas t\u0101 ir j\u0101instal\u0113 k\u0101 integr\u0101cija.",excluded_items:"{number} izsl\u0113gtas {if number is 1} vien\u012Bba {else} vien\u012Bbas",hide_excluded:"pasl\u0113pt izsl\u0113gt\u0101s vien\u012Bbas",additional_tasks:"{number} papildu {if number is 1} uzdevums {else} uzdevumi"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Vispirms izv\u0113lieties laika slotu",toggle_single_mode:"Uz vienk\u0101r\u0161o re\u017E\u012Bmu",toggle_scheme_mode:"Uz sh\u0113mas re\u017E\u012Bmu",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"P\u0101rv\u0113rt\u0113t, kad main\u0101s nosac\u012Bjumi"}},period:{header:"Periods",start_date:"From",end_date:"To"},repeat_type:"uzved\u012Bba p\u0113c beig\u0101m",tags:"Tags"},card_editor:{tabs:{entities:"Vien\u012Bbas",other:"Cits"},fields:{title:{heading:"Kartes nosaukums",options:{standard:"standarta",hidden:"pasl\u0113pts",custom:"piel\u0101gots"},custom_title:"Piel\u0101gots nosaukums"},discover_existing:{heading:"R\u0101d\u012Bt visus grafikus",description:"\u0160is iestata 'atkl\u0101t eso\u0161o' parametru. Iepriek\u0161 izveidotie grafiki autom\u0101tiski tiks pievienoti kartei."},time_step:{heading:"Laika solis",description:"Iz\u0161\u0137irtsp\u0113ja (min\u016Bt\u0113s) grafiku izveidei",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"K\u0101rto\u0161anas opcijas",description:"K\u0101rt\u012Bba, k\u0101d\u0101 grafiki par\u0101d\u0101s kart\u0113",options:{relative_time:"Atliku\u0161ais laiks l\u012Bdz n\u0101kamajai darb\u012Bbai",title:"Grafika nosaukums",state:"R\u0101d\u012Bt akt\u012Bvos grafikus aug\u0161\u0101"}},display_format_primary:{heading:"R\u0101d\u012Bt\u0101 prim\u0101r\u0101 inform\u0101cija",description:"Konfigur\u0113jiet, kura inform\u0101cija tiek izmantota grafiku p\u0101rskat\u0101",options:{default:"Grafika nosaukums",entity_action:"Uzdevuma kopsavilkums"}},display_format_secondary:{heading:"R\u0101d\u012Bt\u0101 sekund\u0101r\u0101 inform\u0101cija",description:"Konfigur\u0113jiet, kuras papildu \u012Bpa\u0161\u012Bbas ir redzamas p\u0101rskat\u0101",options:{relative_time:"Atliku\u0161ais laiks l\u012Bdz n\u0101kamajai darb\u012Bbai",time:"Konfigur\u0113tais laiks n\u0101kamajai darb\u012Bbai",days:"Atk\u0101rtotas ned\u0113\u013Cas dienas",additional_tasks:"Papildu uzdevumu skaits"}},show_header_toggle:{heading:"R\u0101d\u012Bt galvenes p\u0101rsl\u0113g\u0161anu",description:"R\u0101d\u012Bt p\u0101rsl\u0113g\u0161anas sl\u0113dzi kartes aug\u0161da\u013C\u0101, lai iesp\u0113jotu/atsp\u0113jotu visas vien\u012Bbas"},show_toggle_switches:{heading:"R\u0101d\u012Bt p\u0101rsl\u0113g\u0161anas sl\u0113d\u017Eus",description:"R\u0101d\u012Bt p\u0101rsl\u0113g\u0161anas sl\u0113dzi katram atsevi\u0161\u0137am grafikam kart\u0113"},tags:{heading:"Tagi",description:"Izmantojiet tagus, lai sadal\u012Btu grafikus starp vair\u0101k\u0101m kart\u0113m"},entities:{button_label:"Iek\u013Cauto elementu konfigur\u0113\u0161ana",heading:"Iek\u013Caut\u0101s vien\u012Bbas",description:"Izv\u0113lieties vien\u012Bbas, kuras v\u0113laties kontrol\u0113t, izmantojot pl\u0101not\u0101ju. J\u016Bs varat noklik\u0161\u0137in\u0101t uz grupas, lai to atv\u0113rtu. \u0145emiet v\u0113r\u0101, ka da\u017Eas vien\u012Bbas (piem\u0113ram, sensori) var tikt izmantotas tikai nosac\u012Bjumiem, nevis darb\u012Bb\u0101m.",included_number:"{number}/{total} izv\u0113l\u0113ts"}}}}},k6={services:y6,ui:b6}});var G3={};B(G3,{default:()=>T6,services:()=>O6,ui:()=>w6});var O6,w6,T6,K7=p(()=>{O6={generic:{turn_on:"Aanzetten",turn_off:"Uitzetten",parameter_to_value:"{parameter} naar {value}",action_with_parameter:"{action} met {parameter}"},climate:{set_temperature:"temperatuur instellen[ naar {temperature}]",set_temperature_hvac_mode_heat:"verwarmen[ naar {temperature}]",set_temperature_hvac_mode_cool:"koelen[ naar {temperature}]",set_temperature_hvac_mode_heat_cool:"verwarmen/koelen[ naar {temperature}]",set_temperature_hvac_mode_heat_cool_range:"verwarmen/koelen[ naar {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"automatisch[ naar {temperature}]",set_hvac_mode:"modus aanpassen[ naar {hvac_mode}]",set_preset_mode:"programma[ {preset_mode}] instellen",set_fan_mode:"ventilatiemodus aanpassen[ naar {fan_mode}]",set_swing_mode:"oscillatiemodus aanpassen[ naar {swing_mode}]"},cover:{close_cover:"sluiten",open_cover:"openen",set_cover_position:"positie instellen[ naar {position}]",set_cover_tilt_position:"hellingshoek instellen[ naar {tilt_position}]"},fan:{set_percentage:"snelheid instellen[ op {percentage}]",set_direction:"richting instellen[ naar {direction}]",oscillate:"zet oscillatie[ naar {oscillate}]"},humidifier:{set_humidity:"luchtvochtigheid instellen [ op {humidity}]",set_mode:"modus aanpassen[ naar {mode}]"},input_number:{set_value:"waarde aanpassen[ naar {value}]"},input_select:{select_option:"selecteer optie[ {option}]"},select:{select_option:"selecteer optie[ {option}]"},light:{turn_on:"inschakelen[ met {brightness} helderheid]"},media_player:{select_source:"kies ingang[ {source}]"},notify:{send_message:"notificatie sturen"},script:{execute:"uitvoeren"},vacuum:{start_pause:"start / pauzeer"},water_heater:{set_operation_mode:"modus aanpassen[ naar {operation_mode}]",set_away_mode:"stel afwezigheidsmode in"}},w6={components:{date:{day_types_short:{daily:"dagelijks",workdays:"werkdagen",weekend:"weekend"},day_types_long:{daily:"iedere dag",workdays:"doordeweeks",weekend:"in het weekend"},days:"dagen",tomorrow:"morgen",repeated_days:"elke {days}",repeated_days_except:"elke dag behalve {excludedDays}",days_range:"van {startDay} tot {endDay}",next_week_day:"volgende week {weekday}"},time:{absolute:"om {time}",interval:"van {startTime} tot {endTime}",at_midnight:"om middernacht",at_noon:"om 12:00",at_sun_event:"bij {sunEvent}"}},dialog:{enable_schedule:{title:"Wijzigingen voltooid",description:"Deze planning is momenteel gedeactiveerd. Dient deze te worden ingeschakeld?"},confirm_delete:{title:"Entiteit verwijderen?",description:"Weet je zeker dat je dit item wilt verwijderen?"},confirm_migrate:{title:"Schema bijwerken",description:"Door deze actie gaan vorige instellingen verloren. Wil je doorgaan?"},weekday_picker:{title:"Herhaalde dagen voor tijdschema",choose:"Kies..."},entity_picker:{title:"Kies entiteiten",choose:"Kies...",no_results:"Geen overeenkomstige items gevonden"},action_picker:{title:"Kies actie",show_all:"Toon alle ondersteunde entiteiten"}},panel:{common:{title:"Tijdplanner",new_schedule:"Nieuw schema",default_name:"Schema #{id}"},overview:{no_entries:"Er zijn geen items aangemaakt",backend_error:"Er kon geen verbinding worden gemaakt met het Scheduler component. Deze moet als integratie zijn geinstalleerd voordat deze kaart gebruikt kan worden.",excluded_items:"{number} uitgesloten {if number is 1} item {else} items",hide_excluded:"verberg uitgesloten items",additional_tasks:"{number} overige {if number is 1} taak {else} taken"},editor:{repeated_days:"Herhaling",start_time:"Starttijd",stop_time:"Eindtijd",action:"Actie",add_action:"Actie toevoegen",select_timeslot:"Selecteer een tijdslot...",toggle_single_mode:"Naar enkele modus",toggle_scheme_mode:"Naar schema modus",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Condities",add_condition:"Conditie toevoegen",new_condition:"Nieuwe conditie",types:{equal_to:"{entity} is gelijk aan {value}",unequal_to:"{entity} is ongelijk aan {value}",above:"{entity} is hoger dan {value}",below:"{entity} is lager dan {value}"},options:{logic_and:"Alle condities moeten zijn voldaan",logic_or:"Een van de condities moet zijn voldaan",track_changes:"Herevalueer als de condities veranderen"}},period:{header:"Periode",start_date:"Vanaf",end_date:"Tot"},repeat_type:"Gedrag na voltooiing",tags:"Tags"},card_editor:{tabs:{entities:"Entiteiten",other:"Overig"},fields:{title:{heading:"Titel van de kaart",options:{standard:"standaard",hidden:"verborgen",custom:"anders"},custom_title:"Eigen titel"},discover_existing:{heading:"Alle schema's tonen",description:"Hiermee wordt de 'discover existing' instelling geactiveerd. Eerder aangemaakte schema's zullen automatisch worden weergegeven."},time_step:{heading:"Stapgrootte voor tijd",description:"Resolutie (in minuten)",unit_minutes:"min"},default_editor:{heading:"Standaardmodus voor tijdsinvoer",options:{single:"Enkele modus",scheme:"Tijdschema-modus"}},sort_by:{heading:"Sorteer-opties",description:"Volgorde waarin de schema's worden weergegeven in de kaart",options:{relative_time:"Resterende tijd tot volgende actie",title:"Weergegeven titel van de schema's",state:"Actieve schema's eerst"}},display_format_primary:{heading:"Weergegeven primaire info",description:"Kies welk label wordt gebruikt in de weergave",options:{default:"Schema naam",entity_action:"Samenvatting van de actie"}},display_format_secondary:{heading:"Weergegeven secondaire info",description:"Kies welke aanvullende informatie zichtbaar is in de weergave",options:{relative_time:"Resterende tijd tot volgende actie",time:"Ingestelde tijd voor de volgende actie",days:"Herhaalde dagen van de week",additional_tasks:"Aantal resterende acties"}},show_header_toggle:{heading:"Hoofdschakelaar weergeven",description:"Schakelaar weergeven bovenin de kaart om alle schema's te (de)activeren"},show_toggle_switches:{heading:"Schakelknoppen weergeven",description:"Schakelknop weergeven voor elk individueel schema in de kaart"},tags:{heading:"Tags",description:"Tags kunnen gebruikt worden om schema's te verdelen over meerdere kaarten"},entities:{button_label:"Configureer zichtbare entiteiten",heading:"Zichtbare entiteiten",description:"Kies de entiteiten die je wilt bedienen vanuit schema's. Klik op een categorie om deze te openen. Merk op dat sommige entiteiten gebruikt worden om condities toe te wijzen.",included_number:"{number}/{total} geselecteerd"}}}}},T6={services:O6,ui:w6}});var Q2={};B(Q2,{default:()=>E6,services:()=>P6,ui:()=>B6});var P6,B6,E6,Y7=p(()=>{P6={generic:{turn_on:"Skru p\xE5",turn_off:"Sl\xE5 av",parameter_to_value:"{parameter} til {value}",action_with_parameter:"{action} med {parameter}"},climate:{set_temperature:"sett temperatur[ til {temperature}]",set_temperature_hvac_mode_heat:"oppvarming[ til {temperature}]",set_temperature_hvac_mode_cool:"kj\xF8ling[ til {temperature}]",set_temperature_hvac_mode_heat_cool:"oppvarming/kj\xF8ling[ til {temperature}]",set_temperature_hvac_mode_heat_cool_range:"oppvarming/kj\xF8ling[ til {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ til {temperature}]",set_hvac_mode:"sett modus[ til {hvac_mode}]",set_preset_mode:"sett forh\xE5ndsvalg[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"lukk",open_cover:"\xE5pne",set_cover_position:"sett posisjon[ til {position}]",set_cover_tilt_position:"sett vippestilling[ til {tilt_position}]"},fan:{set_percentage:"sett hastighet[ til {speed}]",set_direction:"sett retning[ til {direction}]",oscillate:"sett svingning[ til {oscillate}]"},humidifier:{set_humidity:"sett luftfuktighet[ til {humidity}]",set_mode:"sett modus[ til {mode}]"},input_number:{set_value:"sett verdi[ til {value}]"},input_select:{select_option:"velg[ {option}]"},select:{select_option:"velg[ {option}]"},light:{turn_on:"sl\xE5 p\xE5[ med {brightness} lysstyrke]"},media_player:{select_source:"velg kilde[ {source}]"},notify:{send_message:"send notifikasjon"},script:{execute:"utf\xF8r"},vacuum:{start_pause:"start / pause"},water_heater:{set_operation_mode:"sett modus[ til {operation_mode}]",set_away_mode:"sett bortemodus"}},B6={components:{date:{day_types_short:{daily:"hver dag",workdays:"ukedager",weekend:"helg"},day_types_long:{daily:"hver dag",workdays:"ukedager",weekend:"helg"},days:"Dager",tomorrow:"imorgen",repeated_days:"hver {days}",repeated_days_except:"hver dag unntatt {excludedDays}",days_range:"fra {startDay} til {endDay}",next_week_day:"neste {weekday}"},time:{absolute:"kl. {time}",interval:"fra {startTime} til {endTime}",at_midnight:"ved midnatt",at_noon:"kl. 12.00",at_sun_event:"ved {sunEvent}"}},dialog:{enable_schedule:{title:"Fullf\xF8r endringene",description:"Tidsplanen som er endret er for \xF8yeblikket deaktivert, b\xF8r den v\xE6re aktivert?"},confirm_delete:{title:"Vil du fjerne entiteten?",description:"Er du sikker p\xE5 at du vil fjerne denne entiteten?"},confirm_migrate:{title:"Endre tidsplanen",description:"Noen innstillinger vil g\xE5 tapt ved denne handlingen. Vil du fortsette?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Tidsplan",new_schedule:"Ny tidsplan",default_name:"Tidsplan #{id}"},overview:{no_entries:"Det er ingen definerte tidsplaner \xE5 vise",backend_error:"Kunne ikke koble til tidsplankomponenten. Den m\xE5 installeres som en integrasjon f\xF8r dette kortet kan benyttes.",excluded_items:"{number} ekskludert {if number is 1} element {else} elementer",hide_excluded:"skjul ekskluderte elementer",additional_tasks:"{number} flere {if number is 1} oppgaver {else} oppgaver"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Velg tidsluke",toggle_single_mode:"Til enkel modus",toggle_scheme_mode:"Til skjemamodus",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"Periode",start_date:"From",end_date:"To"},repeat_type:"oppf\xF8rsel etter fullf\xF8ring",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},E6={services:P6,ui:B6}});var K3={};B(K3,{default:()=>R6,services:()=>D6,ui:()=>F6});var D6,F6,R6,J7=p(()=>{D6={generic:{turn_on:"W\u0142\u0105cz",turn_off:"Wy\u0142\u0105cz",parameter_to_value:"{parameter} na {value}",action_with_parameter:"{action} z parametrem {parameter}"},climate:{set_temperature:"ustaw temperatur\u0119[ na {temperature}]",set_temperature_hvac_mode_heat:"ogrzewanie[ na {temperature}]",set_temperature_hvac_mode_cool:"ch\u0142odzenie[ na {temperature}]",set_temperature_hvac_mode_heat_cool:"ogrzewanie/ch\u0142odzenie[ na {temperature}]",set_temperature_hvac_mode_heat_cool_range:"ogrzewanie/ch\u0142odzenie[ {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ na {temperature}]",set_hvac_mode:"ustaw tryb[ na {hvac_mode}]",set_preset_mode:"ustaw tryb[ na {preset_mode}]",set_fan_mode:"ustaw tryb wentylatora[ na {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"zamknij",open_cover:"otw\xF3rz",set_cover_position:"ustaw pozycj\u0119[ na {position}]",set_cover_tilt_position:"ustaw k\u0105t nachylenia[ na {tilt_position}]"},fan:{set_percentage:"ustaw pr\u0119dko\u015B\u0107[ na {percentage}]",set_direction:"ustaw kierunek[ na {direction}]",oscillate:"ustaw oscylacj\u0119[ na {oscillate}]"},humidifier:{set_humidity:"ustaw wilgotno\u015B\u0107[ na {humidity}]",set_mode:"ustaw tryb[ na {mode}]"},input_number:{set_value:"ustaw warto\u015B\u0107[ na {value}]"},input_select:{select_option:"wybierz opcj\u0119[ {option}]"},select:{select_option:"wybierz opcj\u0119[ {option}]"},light:{turn_on:"w\u0142\u0105cz[ z jasno\u015Bci\u0105 {brightness}]"},media_player:{select_source:"wybierz \u017Ar\xF3d\u0142o[ {source}]"},notify:{send_message:"wy\u015Blij powiadomienie"},script:{execute:"wykonaj"},vacuum:{start_pause:"start / pauza"},water_heater:{set_operation_mode:"ustaw tryb[ na {operation_mode}]",set_away_mode:"ustaw tryb poza domem"}},F6={components:{date:{day_types_short:{daily:"codziennie",workdays:"dni robocze",weekend:"weekend"},day_types_long:{daily:"ka\u017Cdego dnia",workdays:"w dni robocze",weekend:"w weekend"},days:"dni",tomorrow:"jutro",repeated_days:"ka\u017Cde {days}",repeated_days_except:"ka\u017Cdego dnia opr\xF3cz {excludedDays}",days_range:"od {startDay} do {endDay}",next_week_day:"w {weekday}"},time:{absolute:"o {time}",interval:"od {startTime} do {endTime}",at_midnight:"o p\xF3\u0142nocy",at_noon:"w po\u0142udnie",at_sun_event:"o {sunEvent}"}},dialog:{enable_schedule:{title:"Zako\u0144cz modyfikacje",description:"Harmonogram, kt\xF3ry zmieni\u0142e\u015B, jest obecnie wy\u0142\u0105czony. Czy chcesz go w\u0142\u0105czy\u0107?"},confirm_delete:{title:"Usun\u0105\u0107 encj\u0119?",description:"Czy na pewno chcesz usun\u0105\u0107 t\u0119 encj\u0119?"},confirm_migrate:{title:"Aktualizuj harmonogram",description:"Niekt\xF3re ustawienia zostan\u0105 utracone przy tej zmianie. Czy chcesz kontynuowa\u0107?"},weekday_picker:{title:"Dni powt\xF3rze\u0144 dla harmonogramu",choose:"Wybierz..."},entity_picker:{title:"Wybierz encje",choose:"Wybierz...",no_results:"Nie znaleziono pasuj\u0105cych element\xF3w"},action_picker:{title:"Wybierz akcj\u0119",show_all:"Poka\u017C wszystkie obs\u0142ugiwane jednostki"}},panel:{common:{title:"Harmonogram",new_schedule:"Nowy harmonogram",default_name:"Harmonogram #{id}"},overview:{no_entries:"Brak element\xF3w do wy\u015Bwietlenia",backend_error:"Nie mo\u017Cna po\u0142\u0105czy\u0107 si\u0119 z komponentem harmonogramu. Musi by\u0107 zainstalowany jako integracja, zanim ta karta b\u0119dzie mog\u0142a by\u0107 u\u017Cywana.",excluded_items:"{number} wykluczonych {if number is 1} element {else} element\xF3w",hide_excluded:"ukryj wykluczone elementy",additional_tasks:"{number} dodatkowych {if number is 1} zadanie {else} zada\u0144"},editor:{repeated_days:"Powtarzane dni",start_time:"Czas rozpocz\u0119cia",stop_time:"Czas zako\u0144czenia",action:"Akcja",add_action:"Dodaj akcj\u0119",select_timeslot:"Wybierz przedzia\u0142 czasowy",toggle_single_mode:"Do trybu prostego",toggle_scheme_mode:"Do trybu schematu",validation_errors:{overlapping_time:"Harmonogram ma nachodz\u0105ce na siebie przedzia\u0142y czasowe",missing_target_entity:"Jednej lub wi\u0119cej akcji brakuje docelowej encji",missing_service_parameter:"Jednej lub wi\u0119cej akcji brakuje wymaganego parametru",missing_action:"Harmonogram nie ma \u017Cadnych akcji"}},options:{conditions:{header:"Warunki",add_condition:"Dodaj warunek",new_condition:"Nowy warunek",types:{equal_to:"{entity} r\xF3wna si\u0119 {value}",unequal_to:"{entity} r\xF3\u017Cni si\u0119 od {value}",above:"{entity} jest powy\u017Cej {value}",below:"{entity} jest poni\u017Cej {value}"},options:{logic_and:"Wszystkie warunki musz\u0105 by\u0107 spe\u0142nione",logic_or:"Dowolny warunek musi by\u0107 spe\u0142niony",track_changes:"Ponownie sprawdzaj przy zmianie warunk\xF3w"}},period:{header:"Okres",start_date:"Od",end_date:"Do"},repeat_type:"zachowanie po zako\u0144czeniu",tags:"Tagi"},card_editor:{tabs:{entities:"Encje",other:"Inne"},fields:{title:{heading:"Tytu\u0142 karty",options:{standard:"standardowy",hidden:"ukryty",custom:"niestandardowy"},custom_title:"Niestandardowy tytu\u0142"},discover_existing:{heading:"Poka\u017C wszystkie harmonogramy",description:"Ustawia parametr 'discover existing'. Wcze\u015Bniej utworzone harmonogramy b\u0119d\u0105 automatycznie dodane do karty."},time_step:{heading:"Krok czasu",description:"Rozdzielczo\u015B\u0107 (w minutach) przy tworzeniu harmonogram\xF3w",unit_minutes:"min"},default_editor:{heading:"Domy\u015Blny edytor czasu",options:{single:"Tryb prostego harmonogramu",scheme:"Tryb schematu czasu"}},sort_by:{heading:"Opcje sortowania",description:"Kolejno\u015B\u0107, w jakiej harmonogramy pojawiaj\u0105 si\u0119 na karcie",options:{relative_time:"Czas do nast\u0119pnej akcji",title:"Wy\u015Bwietlana nazwa harmonogramu",state:"Poka\u017C aktywne harmonogramy na g\xF3rze"}},display_format_primary:{heading:"Wy\u015Bwietlana g\u0142\xF3wna informacja",description:"Okre\u015Bl, kt\xF3ra etykieta jest u\u017Cywana dla harmonogram\xF3w w podgl\u0105dzie",options:{default:"Nazwa harmonogramu",entity_action:"Podsumowanie zadania"}},display_format_secondary:{heading:"Wy\u015Bwietlana dodatkowa informacja",description:"Skonfiguruj, kt\xF3re dodatkowe w\u0142a\u015Bciwo\u015Bci s\u0105 widoczne w podgl\u0105dzie",options:{relative_time:"Czas do nast\u0119pnej akcji",time:"Skonfigurowany czas nast\u0119pnej akcji",days:"Powtarzane dni tygodnia",additional_tasks:"Liczba dodatkowych zada\u0144"}},show_header_toggle:{heading:"Poka\u017C prze\u0142\u0105cznik w nag\u0142\xF3wku",description:"Poka\u017C prze\u0142\u0105cznik w nag\u0142\xF3wku karty do w\u0142\u0105czania/wy\u0142\u0105czania wszystkich encji"},show_toggle_switches:{heading:"Poka\u017C prze\u0142\u0105czniki",description:"Poka\u017C prze\u0142\u0105cznik dla ka\u017Cdego harmonogramu w karcie"},tags:{heading:"Tagi",description:"U\u017Cywaj tag\xF3w do podzia\u0142u harmonogram\xF3w pomi\u0119dzy wieloma kartami"},entities:{button_label:"Konfiguruj zawarte encje",heading:"Zawarte encje",description:"Wybierz encje, kt\xF3rymi chcesz sterowa\u0107 za pomoc\u0105 harmonogramu. Mo\u017Cesz klikn\u0105\u0107 na grup\u0119, aby j\u0105 otworzy\u0107. Zauwa\u017C, \u017Ce niekt\xF3re encje (np. sensory) mog\u0105 by\u0107 u\u017Cywane tylko jako warunki, a nie akcje.",included_number:"{number}/{total} wybrano"}}}}},R6={services:D6,ui:F6}});var J3={};B(J3,{default:()=>N6,services:()=>$6,ui:()=>z6});var $6,z6,N6,X7=p(()=>{$6={generic:{turn_on:"Ligar",turn_off:"Desligar",parameter_to_value:"{parameter} para {value}",action_with_parameter:"{action} com {parameter}"},climate:{set_temperature:"definir temperatura[ para {temperature}]",set_temperature_hvac_mode_heat:"aquecimento[ para {temperature}]",set_temperature_hvac_mode_cool:"arrefecimento[ para {temperature}]",set_temperature_hvac_mode_heat_cool:"aquecimento/arrefecimento[ para {temperature}]",set_temperature_hvac_mode_heat_cool_range:"aquecimento/arrefecimento[ para {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ para {temperature}]",set_hvac_mode:"definir modo[ para {hvac_mode}]",set_preset_mode:"definir predefini\xE7\xE3o[ {preset_mode}]",set_fan_mode:"definir modo ventoinha[ para {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"fechar",open_cover:"abrir",set_cover_position:"definir posi\xE7\xE3o[ para {position}]",set_cover_tilt_position:"definir inclina\xE7\xE3o[ como {tilt_position}]"},fan:{set_percentage:"definir velocidade[ para {speed}]",set_direction:"definir dire\xE7\xE3o[ para {direction}]",oscillate:"definir oscila\xE7\xE3o[ para {oscillate}]"},humidifier:{set_humidity:"definir humidade[ para {humidity}]",set_mode:"definir modo[ para {mode}]"},input_number:{set_value:"definir valor[ para {value}]"},input_select:{select_option:"selecionar op\xE7\xE3o[ {option}]"},select:{select_option:"selecionar op\xE7\xE3o[ {option}]"},light:{turn_on:"ligar[ com {brightness} brightness]"},media_player:{select_source:"selecionar origem[ {source}]"},notify:{send_message:"enviar notifica\xE7\xE3o"},script:{execute:"executar"},vacuum:{start_pause:"iniciar / pausar"},water_heater:{set_operation_mode:"definir modo[ para {operation_mode}]",set_away_mode:"definir modo ausente"}},z6={components:{date:{day_types_short:{daily:"todos",workdays:"semana de trabalho",weekend:"fim-de-semana"},day_types_long:{daily:"todos os dias",workdays:"em dias de semana",weekend:"no fim-de-semana"},days:"dias",tomorrow:"amanh\xE3",repeated_days:"a cada {days}",repeated_days_except:"a cada dia exceto {excludedDays}",days_range:"at\xE9 {startDay} at\xE9 {endDay}",next_week_day:"pr\xF3ximo {weekday}"},time:{absolute:"\xC0s {time}",interval:"das {startTime} \xE0s {endTime}",at_midnight:"ao meia-noite",at_noon:"ao meio-dia",at_sun_event:"ao {sunEvent}"}},dialog:{enable_schedule:{title:"Conclua as modifica\xE7\xF5es",description:"A programa\xE7\xE3o que foi alterada est\xE1 atualmente desabilitada, deveria ser habilitada?"},confirm_delete:{title:"Remover a entidade?",description:"Tem a certeza que deseja remover esta entidade?"},confirm_migrate:{title:"Modificar hor\xE1rio",description:"Algumas configura\xE7\xF5es ser\xE3o perdidas por esta a\xE7\xE3o. Voc\xEA quer prosseguir?"},weekday_picker:{title:"Repeti\xE7\xF5es semanais",choose:"Escolha..."},entity_picker:{title:"Escolha entidades",choose:"Escolha...",no_results:"Sem resultados"},action_picker:{title:"Escolha a ac\xE7\xE3o",show_all:"Mostrar todas as entidades suportadas"}},panel:{common:{title:"Agenda",new_schedule:"Novo hor\xE1rio",default_name:"Hor\xE1rio #{id}"},overview:{no_entries:"N\xE3o existem itens a mostrar",backend_error:"N\xE3o consegui ligar ao componente de agendamento. Essa integra\xE7\xE3o tem que ser instalada antes da utiliza\xE7\xE3o deste cart\xE3o.",excluded_items:"{number}{if number is 1} item exclu\xEDdo {else} itens exclu\xEDdos",hide_excluded:"ocultar itens exclu\xEDdos",additional_tasks:"Mais {number} {if number is 1} tarefa {else} tarefas"},editor:{repeated_days:"Repeti\xE7\xF5es semanais",start_time:"Hora in\xEDcio",stop_time:"Hora fim",action:"Ac\xE7\xE3o",add_action:"Acrescentar ac\xE7\xE3o",select_timeslot:"Selecionar um per\xEDodo hor\xE1rio",toggle_single_mode:"Para modo simples",toggle_scheme_mode:"Para modo esquema",validation_errors:{overlapping_time:"O Hor\xE1rio tem sobreposi\xE7\xF5es",missing_target_entity:"Uma ou mais ac\xE7\xF5es sem entidade definida",missing_service_parameter:"Unma ou mais ac\xE7\xF5es sem uma defini\xE7\xE3o obrigat\xF3ria",missing_action:"O Hor\xE1rio n\xE3o tem ac\xE7\xF5es"}},options:{conditions:{header:"Condi\xE7\xF5es",add_condition:"Acrescentar condi\xE7\xE3o",new_condition:"Nova condi\xE7\xE3o",types:{equal_to:"{entity} igual a {value}",unequal_to:"{entity} diferente de {value}",above:"{entity} acima de {value}",below:"{entity} abaixo de {value}"},options:{logic_and:"Todas as condi\xE7\xF5es t\xEAm de ser verdadeiras",logic_or:"Uma das condi\xE7\xF5es tem de ser verdadeira",track_changes:"Reavaliar em caso de altera\xE7\xF5es"}},period:{header:"Per\xEDodo",start_date:"Desde",end_date:"At\xE9"},repeat_type:"Comportamento ap\xF3s a conclus\xE3o",tags:"Etiquetas"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},N6={services:$6,ui:z6}});var C0={};B(C0,{default:()=>W6,services:()=>I6,ui:()=>j6});var I6,j6,W6,C4=p(()=>{I6={generic:{turn_on:"Ligar",turn_off:"Desligar",parameter_to_value:"{parameter} para {value}",action_with_parameter:"{action} com {parameter}"},climate:{set_temperature:"definir temperatura[ para {temperature}]",set_temperature_hvac_mode_heat:"aquecimento[ para {temperature}]",set_temperature_hvac_mode_cool:"arrefecimento[ para {temperature}]",set_temperature_hvac_mode_heat_cool:"aquecimento/arrefecimento[ para {temperature}]",set_temperature_hvac_mode_heat_cool_range:"aquecimento/arrefecimento[ para {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ para {temperature}]",set_hvac_mode:"definir modo[ para {hvac_mode}]",set_preset_mode:"definir predefini\xE7\xE3o[ {preset_mode}]",set_fan_mode:"definir modo do ventilador[ para {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"fechar",open_cover:"abrir",set_cover_position:"definir posi\xE7\xE3o[ para {position}]",set_cover_tilt_position:"definir a posi\xE7\xE3o de inclina\xE7\xE3o[ para {tilt_position}]"},fan:{set_percentage:"definir velocidade[ para {speed}]",set_direction:"definir dire\xE7\xE3o[ para {direction}]",oscillate:"definir oscila\xE7\xE3o[ para {oscillate}]"},humidifier:{set_humidity:"definir humidade[ para {humidity}]",set_mode:"definir modo[ para {mode}]"},input_number:{set_value:"definir valor[ para {value}]"},input_select:{select_option:"selecionar op\xE7\xE3o[ {option}]"},select:{select_option:"selecionar op\xE7\xE3o[ {option}]"},light:{turn_on:"ligar[ com {brightness} brightness]"},media_player:{select_source:"selecionar origem[ {source}]"},notify:{send_message:"enviar notifica\xE7\xE3o"},script:{execute:"executar"},vacuum:{start_pause:"iniciar / pausar"},water_heater:{set_operation_mode:"definir modo[ para {operation_mode}]",set_away_mode:"definir modo ausente"}},j6={components:{date:{day_types_short:{daily:"di\xE1rio",workdays:"semana de trabalho",weekend:"fim-de-semana"},day_types_long:{daily:"todos os dias",workdays:"em dias de semana",weekend:"no fim-de-semana"},days:"dias",tomorrow:"amanh\xE3",repeated_days:"a cada {days}",repeated_days_except:"a cada dia exceto {excludedDays}",days_range:"de {startDay} at\xE9 {endDay}",next_week_day:"pr\xF3ximo {weekday}"},time:{absolute:"\xE0 {time}",interval:"das {startTime} \xE0s {endTime}",at_midnight:"ao meia-noite",at_noon:"ao meio-dia",at_sun_event:"ao {sunEvent}"}},dialog:{enable_schedule:{title:"Conclua as modifica\xE7\xF5es",description:"A programa\xE7\xE3o que foi alterada est\xE1 atualmente desabilitada, deveria ser habilitada?"},confirm_delete:{title:"Remover entidade?",description:"Tem certeza de que deseja remover esta entidade?"},confirm_migrate:{title:"Modificar hor\xE1rio",description:"Algumas configura\xE7\xF5es ser\xE3o perdidas por esta a\xE7\xE3o. Voc\xEA quer prosseguir?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Agenda",new_schedule:"Novo hor\xE1rio",default_name:"Hor\xE1rio #{id}"},overview:{no_entries:"N\xE3o existem itens para mostrar",backend_error:"N\xE3o foi poss\xEDvel conectar com o componente agendador. Ele precisa ser instalado como integra\xE7\xE3o antes que este cart\xE3o possa ser usado.",excluded_items:"{number}{if number is 1} item exclu\xEDdo {else} itens exclu\xEDdos",hide_excluded:"ocultar itens exclu\xEDdos",additional_tasks:"Mais {number} {if number is 1} tarefa {else} tarefas"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Selecionar um per\xEDodo hor\xE1rio",toggle_single_mode:"Para modo simples",toggle_scheme_mode:"Para modo esquema",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Reavaliar quando as condi\xE7\xF5es mudarem"}},period:{header:"Per\xEDodo",start_date:"From",end_date:"To"},repeat_type:"comportamento ap\xF3s a conclus\xE3o",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},W6={services:I6,ui:j6}});var H0={};B(H0,{default:()=>q6,services:()=>U6,ui:()=>G6});var U6,G6,q6,e4=p(()=>{U6={generic:{turn_on:"Porne\u0219te",turn_off:"Opre\u0219te",parameter_to_value:"{parameter} la {value}",action_with_parameter:"{action} cu {parameter}"},climate:{set_temperature:"setare temperatur\u0103[ la {temperature}]",set_temperature_hvac_mode_heat:"\xEEnc\u0103lzire[ la {temperature}]",set_temperature_hvac_mode_cool:"r\u0103cire[ la {temperature}]",set_temperature_hvac_mode_heat_cool:"\xEEnc\u0103lzire/r\u0103cire[ la {temperature}]",set_temperature_hvac_mode_heat_cool_range:"\xEEnc\u0103lzire/r\u0103cire[ la {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ la {temperature}]",set_hvac_mode:"setare mod[ la {hvac_mode}]",set_preset_mode:"setare preset[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"\xEEnchidere",open_cover:"deschidere",set_cover_position:"setare pozi\u021Bie[ la {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_percentage:"setare vitez\u0103[ la {speed}]",set_direction:"setare direc\u021Bie[ la {direction}]",oscillate:"setare oscilare[ la {oscillate}]"},humidifier:{set_humidity:"setare umiditate[ la {humidity}]",set_mode:"setare mod[ la {mode}]"},input_number:{set_value:"setare valoare[ la {value}]"},input_select:{select_option:"selectare op\u021Biune[ {option}]"},select:{select_option:"selectare op\u021Biune[ {option}]"},light:{turn_on:"pornire[ cu luminozitate {brightness}]"},media_player:{select_source:"selectare surs\u0103[ {source}]"},notify:{send_message:"send notification"},script:{execute:"executare"},vacuum:{start_pause:"start / pauz\u0103"},water_heater:{set_operation_mode:"setare mod[ la {operation_mode}]",set_away_mode:"setare mod plecat"}},G6={components:{date:{day_types_short:{daily:"zilnic",workdays:"zile lucr\u0103toare",weekend:"sf\xE2r\u0219it de s\u0103pt\u0103m\xE2n\u0103"},day_types_long:{daily:"zilnic",workdays:"\xEEn timpul s\u0103pt\u0103m\xE2nii",weekend:"la sf\xE2r\u0219it de s\u0103pt\u0103m\xE2n\u0103"},days:"zile",tomorrow:"m\xE2ine",repeated_days:"la fiecare {days} zile",repeated_days_except:"zilnic cu excep\u021Bia {excludedDays}",days_range:"din {startDay} p\xE2n\u0103 \xEEn {endDay}",next_week_day:"{weekday} viitoare"},time:{absolute:"la {time}",interval:"de la {startTime} p\xE2n\u0103 la {endTime}",at_midnight:"la miezul nop\u021Bii",at_noon:"la amiaz\u0103",at_sun_event:"la {sunEvent}"}},dialog:{enable_schedule:{title:"Completa\u021Bi modific\u0103rile",description:"Programul care a fost modificat este momentan dezactivat, ar trebui activat?"},confirm_delete:{title:"\u0218terge\u021Bi entitatea?",description:"Sigur dori\u021Bi s\u0103 elimina\u021Bi aceast\u0103 entitate?"},confirm_migrate:{title:"Modifica\u021Bi programul",description:"Unele set\u0103ri se vor pierde prin aceast\u0103 ac\u021Biune. Vrei sa continui?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Planificator",new_schedule:"Noul program",default_name:"Program #{id}"},overview:{no_entries:"Nu exist\u0103 elemente de afi\u0219at",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{if number is 1}un element exclus {else}{number} elemente excluse",hide_excluded:"ascunde elementele excluse",additional_tasks:"{if number is 1}o sarcin\u0103 suplimentar\u0103 {else}{number} sarcini suplimentare"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Selecta\u021Bi un interval orar",toggle_single_mode:"Te lokho modo",toggle_scheme_mode:"Te sxeme modo",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"Perioad\u0103",start_date:"From",end_date:"To"},repeat_type:"comportament dup\u0103 declan\u0219are",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},q6={services:U6,ui:G6}});var t0={};B(t0,{default:()=>Y6,services:()=>Q6,ui:()=>K6});var Q6,K6,Y6,H4=p(()=>{Q6={generic:{turn_on:"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C",turn_off:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C",parameter_to_value:"{parameter} \u043A {value}",action_with_parameter:"{action} \u0441 {parameter}"},climate:{set_temperature:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443[ {temperature}]",set_temperature_hvac_mode_heat:"\u043E\u0431\u043E\u0433\u0440\u0435\u0432[ {temperature}]",set_temperature_hvac_mode_cool:"\u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435[ {temperature}]",set_temperature_hvac_mode_heat_cool:"\u043E\u0431\u043E\u0433\u0440\u0435\u0432/\u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435[ {temperature}]",set_temperature_hvac_mode_heat_cool_range:"\u043E\u0431\u043E\u0433\u0440\u0435\u0432/\u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435[ {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"a\u0432\u0442\u043E[ {temperature}]",set_hvac_mode:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C[ {hvac_mode}]",set_preset_mode:"\u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0431\u043E\u0440 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"\u0437\u0430\u043A\u0440\u044B\u0442\u044C",open_cover:"\u043E\u0442\u043A\u0440\u044B\u0442\u044C",set_cover_position:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E[ {position}]",set_cover_tilt_position:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u043A\u043B\u043E\u043D[ {tilt_position}]"},fan:{set_percentage:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C[ {speed}]",set_direction:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435[ {direction}]",oscillate:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u0435\u0431\u0430\u043D\u0438\u0435[ {oscillate}]"},humidifier:{set_humidity:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C[ {humidity}]",set_mode:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C[ {mode}]"},input_number:{set_value:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435[ \u0432 {value}]"},input_select:{select_option:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u043F\u0446\u0438\u044E[ {option}]"},select:{select_option:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u043F\u0446\u0438\u044E[ {option}]"},light:{turn_on:"\u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C[ \u0441 {brightness} \u044F\u0440\u043A\u043E\u0441\u0442\u044C\u044E]"},media_player:{select_source:"\u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A[ {source}]"},notify:{send_message:"\u043F\u043E\u0441\u043B\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"},script:{execute:"\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"},vacuum:{start_pause:"\u0441\u0442\u0430\u0440\u0442 / \u043F\u0430\u0443\u0437\u0430"},water_heater:{set_operation_mode:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C[ {operation_mode}]",set_away_mode:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u0432\u043D\u0435 \u0434\u043E\u043C\u0430"}},K6={components:{date:{day_types_short:{daily:"\u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E",workdays:"\u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0434\u043D\u0438",weekend:"\u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435"},day_types_long:{daily:"\u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C",workdays:"\u043F\u043E \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0434\u043D\u044F\u043C",weekend:"\u0432 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435"},days:"\u0434\u043D\u0438",tomorrow:"\u0437\u0430\u0432\u0442\u0440\u0430",repeated_days:"\u043A\u0430\u0436\u0434\u044B\u0439 {days}",repeated_days_except:"\u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043A\u0440\u043E\u043C\u0435 {excludedDays}",days_range:"\u0441 {startDay} \u0434\u043E {endDay}",next_week_day:"\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E {weekday}"},time:{absolute:"\u0432 {time}",interval:"\u0441 {startTime} \u0434\u043E {endTime}",at_midnight:"\u0432 \u043F\u043E\u043B\u043D\u043E\u0447\u044C",at_noon:"\u0432 \u043F\u043E\u043B\u0434\u0435\u043D\u044C",at_sun_event:"\u0432 {sunEvent}"}},dialog:{enable_schedule:{title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",description:"\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u044B\u043B\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E, \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043B\u0438 \u0435\u0433\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C?"},confirm_delete:{title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442?",description:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043E\u0431\u044A\u0435\u043A\u0442?"},confirm_migrate:{title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",description:"\u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u044B. \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0449\u0438\u043A",new_schedule:"\u041D\u043E\u0432\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",default_name:"\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 #{id}"},overview:{no_entries:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",backend_error:"\u041D\u0435\u0442 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u0441 scheduler component. Scheduler component \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0434\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u044D\u0442\u043E\u0439 \u043A\u0430\u0440\u0442\u044B.",excluded_items:"{number} \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u043E {if number is 1} \u044D\u043B\u0435\u043C\u0435\u043D\u0442 {else} \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",hide_excluded:"\u0441\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",additional_tasks:"{number} \u0431\u043E\u043B\u044C\u0448\u0435 {if number is 1} \u0437\u0430\u0434\u0430\u0447\u0430 {else} \u0437\u0430\u0434\u0430\u0447"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0441\u043B\u043E\u0442",toggle_single_mode:"\u0412 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0440\u0435\u0436\u0438\u043C",toggle_scheme_mode:"\u0412 \u0440\u0435\u0436\u0438\u043C \u0441\u0445\u0435\u043C\u044B",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"\u043F\u0435\u0440\u0438\u043E\u0434",start_date:"From",end_date:"To"},repeat_type:"\u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u043D\u0438\u044F",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},Y6={services:Q6,ui:K6}});var r0={};B(r0,{default:()=>C8,services:()=>J6,ui:()=>X6});var J6,X6,C8,V4=p(()=>{J6={generic:{turn_on:"Zapn\xFA\u0165",turn_off:"Vypn\xFA\u0165",parameter_to_value:"{parameter} na {value}",action_with_parameter:"{action} s {parameter}"},climate:{set_temperature:"nastavi\u0165 teplotu[ na {temperature}]",set_temperature_hvac_mode_heat:"vykurovanie[ na {temperature}]",set_temperature_hvac_mode_cool:"chladenie[ na {temperature}]",set_temperature_hvac_mode_heat_cool:"vykurovanie/chladenie[ na {temperature}]",set_temperature_hvac_mode_heat_cool_range:"vykurovanie/chladenie[ na {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"automatika[ na {temperature}]",set_hvac_mode:"nastavi\u0165 re\u017Eim[ na {hvac_mode}]",set_preset_mode:"nastavi\u0165 predvo\u013Ebu[ {preset_mode}]",set_fan_mode:"nastavi\u0165 re\u017Eim ventil\xE1tora[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"zatvori\u0165",open_cover:"otvori\u0165",set_cover_position:"nastavi\u0165 polohu[ na {position}]",set_cover_tilt_position:"nastavi\u0165 naklonenie[ na {tilt_position}]"},fan:{set_percentage:"nastavi\u0165 r\xFDchlos\u0165[ na {speed}]",set_direction:"nastavi\u0165 smer[ na {direction}]",oscillate:"nastavi\u0165 oscil\xE1ciu[ na {oscillate}]"},humidifier:{set_humidity:"nastavi\u0165 vlhkos\u0165[ na {humidity}]",set_mode:"nastavi\u0165 re\u017Eim[ na {mode}]"},input_number:{set_value:"nastavi\u0165 hodnotu[ na {value}]"},input_select:{select_option:"vybra\u0165 mo\u017Enos\u0165[ {option}]"},select:{select_option:"vybra\u0165 mo\u017Enos\u0165[ {option}]"},light:{turn_on:"zapn\xFA\u0165[ na {brightness} jas]"},media_player:{select_source:"vybra\u0165 zdroj[ {source}]"},notify:{send_message:"posla\u0165 notifik\xE1ciu"},script:{execute:"spusti\u0165"},vacuum:{start_pause:"\u0161tart / pauza"},water_heater:{set_operation_mode:"nastavi\u0165 re\u017Eim[ na {operation_mode}]",set_away_mode:"nastavi\u0165 re\u017Eim nepr\xEDtomnosti"}},X6={components:{date:{day_types_short:{daily:"denne",workdays:"pracovn\xE9 dni",weekend:"v\xEDkendy"},day_types_long:{daily:"ka\u017Ed\xFD de\u0148",workdays:"cez pracovn\xE9 dni",weekend:"cez v\xEDkend"},days:"dni",tomorrow:"zajtra",repeated_days:"ka\u017Ed\xFD {days}",repeated_days_except:"ka\u017Ed\xFD de\u0148 okrem {excludedDays}",days_range:"od {startDay} do {endDay}",next_week_day:"bud\xFAcu {weekday}"},time:{absolute:"od {time}",interval:"od {startTime} do {endTime}",at_midnight:"od polnoci",at_noon:"od obeda",at_sun_event:"na {sunEvent}"}},dialog:{enable_schedule:{title:"Dokon\u010Dite \xFApravy",description:"Pl\xE1n, ktor\xFD sa zmenil, je moment\xE1lne zak\xE1zan\xFD, chcete ho povoli\u0165?"},confirm_delete:{title:"Odstr\xE1ni\u0165 entitu?",description:"Naozaj chcete odstr\xE1ni\u0165 t\xFAto entitu?"},confirm_migrate:{title:"Aktualizova\u0165 pl\xE1n",description:"Touto akciou sa stratia niektor\xE9 nastavenia. Chcete pokra\u010Dova\u0165?"},weekday_picker:{title:"Dni opakovania pre pl\xE1n",choose:"Vyberte..."},entity_picker:{title:"Vyberte entity",choose:"Vyberte...",no_results:"\u017Diadne vyhovuj\xFAce polo\u017Eky neboli n\xE1jden\xE9"},action_picker:{title:"Vyberte akciu",show_all:"Zobrazi\u0165 v\u0161etky podporovan\xE9 entity"}},panel:{common:{title:"Pl\xE1nova\u010D",new_schedule:"Nov\xFD pl\xE1n",default_name:"Pl\xE1n #{id}"},overview:{no_entries:"\u017Diadne polo\u017Eky na zobrazenie",backend_error:"Nepodarilo sa pripoji\u0165 ku komponentu Scheduler. Pred t\xFDm, ako pou\u017Eijete t\xFAto kartu ho mus\xEDte nain\u0161talova\u0165 ako integr\xE1ciu.",excluded_items:"Vyl\xFA\u010Den\xE9 polo\u017Eky: {number}",hide_excluded:"skry\u0165 vyl\xFA\u010Den\xE9 polo\u017Eky",additional_tasks:"\u010Eal\u0161ie \xFAlohy: {number}"},editor:{repeated_days:"Dni opakovania",start_time:"\u010Cas za\u010Diatku",stop_time:"\u010Cas konca",action:"Akcia",add_action:"Prida\u0165 akciu",select_timeslot:"Najprv vyberte \u010Dasov\xFD \xFAsek",toggle_single_mode:"Do re\u017Eimu jedn\xE9ho",toggle_scheme_mode:"Do re\u017Eimu sch\xE9my",validation_errors:{overlapping_time:"Pl\xE1n obsahuje prekr\xFDvaj\xFAce sa \u010Dasov\xE9 intervaly",missing_target_entity:"Pre aspo\u0148 jednu akciu nie je zadan\xE1 cie\u013Eov\xE1 entita",missing_service_parameter:"Pre aspo\u0148 jednu akciu nie je zadan\xE9 vy\u017Eadovan\xE9 nastavenie",missing_action:"Pl\xE1n neobsahuje \u017Eiadne akcie"}},options:{conditions:{header:"Podmienky",add_condition:"Prida\u0165 podmienku",new_condition:"Nov\xE1 podmienka",types:{equal_to:"{entity} sa rovn\xE1 {value}",unequal_to:"{entity} sa nerovn\xE1 {value}",above:"{entity} je nad {value}",below:"{entity} je pod {value}"},options:{logic_and:"V\u0161etky podmienky musia plati\u0165",logic_or:"Ak\xE1ko\u013Evek podmienka mus\xED plati\u0165",track_changes:"Prehodno\u0165te, ke\u010F sa zmenia podmienky"}},period:{header:"Obdobie",start_date:"Od",end_date:"Do"},repeat_type:"spr\xE1vanie sa po spusten\xED",tags:"\u0160t\xEDtky"},card_editor:{tabs:{entities:"Entity",other:"In\xE9"},fields:{title:{heading:"N\xE1zov karty",options:{standard:"\u0161tandardn\xE9",hidden:"skryt\xE9",custom:"vlastn\xE9"},custom_title:"Vlastn\xFD n\xE1zov"},discover_existing:{heading:"Zobrazi\u0165 v\u0161etky pl\xE1ny",description:"T\xFDm sa nastav\xED parameter \u201Eobjavi\u0165 existuj\xFAce\u201C. Predt\xFDm vytvoren\xE9 pl\xE1ny sa automaticky pridaj\xFA na kartu."},time_step:{heading:"\u010Casov\xFD krok",description:"Rozl\xED\u0161enie (v min\xFAtach) pre vytv\xE1ranie pl\xE1nov",unit_minutes:"min"},default_editor:{heading:"Predvolen\xFD editor \u010Dasu",options:{single:"Re\u017Eim jedn\xE9ho pl\xE1nu",scheme:"Re\u017Eim sch\xE9my"}},sort_by:{heading:"Mo\u017Enosti triedenia",description:"Poradie, v akom sa rozvrhy zobrazuj\xFA na karte",options:{relative_time:"Zost\xE1vaj\xFAci \u010Das do \u010Fal\u0161ej akcie",title:"Zobrazen\xFD n\xE1zov rozvrhu",state:"Zobrazi\u0165 akt\xEDvne pl\xE1ny navrchu"}},display_format_primary:{heading:"Zobrazen\xE9 prim\xE1rne inform\xE1cie",description:"V preh\u013Eade nakonfigurujte, ktor\xFD \u0161t\xEDtok sa pou\u017Eije pre pl\xE1ny",options:{default:"N\xE1zov rozvrhu",entity_action:"Zhrnutie \xFAlohy"}},display_format_secondary:{heading:"Zobrazen\xE9 sekund\xE1rne inform\xE1cie",description:"Nakonfigurujte, ktor\xE9 \u010Fal\u0161ie vlastnosti s\xFA vidite\u013En\xE9 v preh\u013Eade",options:{relative_time:"Zost\xE1vaj\xFAci \u010Das do \u010Fal\u0161ej akcie",time:"Nastaven\xFD \u010Das pre \u010Fal\u0161iu akciu",days:"Opakovan\xE9 dni v t\xFD\u017Edni",additional_tasks:"Po\u010Det dodato\u010Dn\xFDch \xFAloh"}},show_header_toggle:{heading:"Zobrazi\u0165 prep\xEDna\u010D hlavi\u010Dky",description:"Zobrazi\u0165 prep\xEDna\u010D v hornej \u010Dasti karty na povolenie/zak\xE1zanie v\u0161etk\xFDch ent\xEDt"},show_toggle_switches:{heading:"Zobrazi\u0165 prep\xEDna\u010De",description:"Zobrazi\u0165 prep\xEDna\u010D pre ka\u017Ed\xFD jednotliv\xFD harmonogram na karte"},tags:{heading:"\u0160t\xEDtky",description:"Pou\u017Eite \u0161t\xEDtky na rozdelenie pl\xE1nov medzi viacero kariet"},entities:{button_label:"Konfigur\xE1cia zahrnut\xFDch ent\xEDt",heading:"Zahrnut\xE9 entity",description:"Vyberte entity, ktor\xE9 chcete ovl\xE1da\u0165 pomocou pl\xE1nova\u010Da. Kliknut\xEDm na skupinu ju otvor\xEDte. Upozor\u0148ujeme, \u017Ee niektor\xE9 entity (napr\xEDklad senzory) mo\u017Eno pou\u017Ei\u0165 iba na podmienky, nie na akcie.",included_number:"{number}/{total} vybran\xFD"}}}}},C8={services:J6,ui:X6}});var o0={};B(o0,{default:()=>V8,services:()=>e8,ui:()=>H8});var e8,H8,V8,t4=p(()=>{e8={generic:{turn_on:"Vklopi",turn_off:"Izklopi",parameter_to_value:"{parameter} v {value}",action_with_parameter:"{action} z {parameter}"},climate:{set_temperature:"nastavi temperaturo[ na {temperature}]",set_temperature_hvac_mode_heat:"ogrej[ na {temperature}]",set_temperature_hvac_mode_cool:"ohladi[ na {temperature}]",set_temperature_hvac_mode_heat_cool:"ogrej/ohladi[ na {temperature}]",set_temperature_hvac_mode_heat_cool_range:"ogrej/ohladi[ na {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"samodejno[ na {temperature}]",set_hvac_mode:"nastavi na\u010Din[ na {hvac_mode}]",set_preset_mode:"nastavi preset[ na {preset_mode}]",set_fan_mode:"nastavi ventilator[ na {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"zapri",open_cover:"odpri",set_cover_position:"nastavi pozicijo[ na {position}]",set_cover_tilt_position:"nastavi naklon[ na {tilt_position}]"},fan:{set_percentage:"nastavi hitrost[ na {speed}]",set_direction:"nastavi smer[ na {direction}]",oscillate:"nastavi obra\u010Danje[ na {oscillate}]"},humidifier:{set_humidity:"nastavi vla\u017Enost[ na {humidity}]",set_mode:"nastavi na\u010Din[ na {mode}]"},input_number:{set_value:"nastavi vrednost[ na {value}]"},input_select:{select_option:"izberi mo\u017Enost[ {option}]"},select:{select_option:"izberi mo\u017Enost[ {option}]"},light:{turn_on:"vklju\u010Di[ z {brightness} brightness]"},media_player:{select_source:"Izberi vir[ {source}]"},notify:{send_message:"po\u0161lji sporo\u010Dilo"},script:{execute:"izvedi"},vacuum:{start_pause:"za\u017Eeni / ustavi"},water_heater:{set_operation_mode:"nastavi na\u010Din[ na {operation_mode}]",set_away_mode:"nastavi na\u010Din odsoten"}},H8={components:{date:{day_types_short:{daily:"dnevno",workdays:"delovniki",weekend:"vikend"},day_types_long:{daily:"vsak dan",workdays:"ob delovnikih",weekend:"ob vikendih"},days:"dni",tomorrow:"jutri",repeated_days:"vsakih {days}",repeated_days_except:"vsak dan razen {excludedDays}",days_range:"od {startDay} do {endDay}",next_week_day:"naslednji {weekday}"},time:{absolute:"ob {time}",interval:"od {startTime} do {endTime}",at_midnight:"opolno\u010Di",at_noon:"opoldne",at_sun_event:"ob {sunEvent}"}},dialog:{enable_schedule:{title:"Zaklju\u010Di spremembe",description:"Urnik, katerega ste spremenili je trenutno izklju\u010Den, ali ga \u017Eelite omogo\u010Diti?"},confirm_delete:{title:"Ali \u017Eelite odstraniti entiteto?",description:"Ali ste prepri\u010Dani, da \u017Eelite odstraniti to entiteto?"},confirm_migrate:{title:"Spremenite urnik",description:"Nekatere nastavitve bodo s tem dejanjem izgubljene. \u017Delite nadaljevati?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"Urnik",new_schedule:"Nov urnik",default_name:"Urnik #{id}"},overview:{no_entries:"Ni vpisov za prikaz",backend_error:"Ni povezave s komponento urnika. Komponenta mora biti name\u0161\u010Dena kot integracija, preden lahko uporabite to kartico.",excluded_items:"{number}{if number is 1} izlo\u010Den predmet {else} izlo\u010Denih predmetov",hide_excluded:"skrij izlo\u010Dene predmete",additional_tasks:"\u0161e {number}{if number is 1} opravilo {else} opravil"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"Najprej izberi \u010Dasovni okvir",toggle_single_mode:"To single mode",toggle_scheme_mode:"To scheme mode",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Ponovno preglej ko se pogoji spremenijo"}},period:{header:"Perioda",start_date:"From",end_date:"To"},repeat_type:"obna\u0161anje, ko kon\u010Da\u0161",tags:"Tags"},card_editor:{tabs:{entities:"Entitete",other:"Ostalo"},fields:{title:{heading:"Ime kartice",options:{standard:"standardno",hidden:"skrito",custom:"po meri"},custom_title:"Ime po \u017Eelji"},discover_existing:{heading:"Prika\u017Ei vse urnike",description:"Tole nastavi parameter 'discover existing'. Prej kreirani urniki bodo samodejno dodani v kartico. "},time_step:{heading:"\u010Casovni korak",description:"Lo\u010Dljivost (v minutah) za kreiranje urnikov",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"V enojni na\u010Din",scheme:"V shematski na\u010Din"}},sort_by:{heading:"Mo\u017Enosti sortiranja",description:"Zaporedje, po katerem se prika\u017Eejo urniki na kartici",options:{relative_time:"Preostali \u010Das do naslednje akcije",title:"Prikazano ime urnika",state:"Prika\u017Ei aktivne urnike na vrhu"}},display_format_primary:{heading:"Prikazane primarne informacije",description:"Nastavite, kaj se prikazuje v pregledu urnikov",options:{default:"Ime urnika",entity_action:"Povzetek operacije"}},display_format_secondary:{heading:"Prikazane sekundarne informacije",description:"Nastavite, katere dodatne informacije \u017Eelite imeti prikazane v pregledu",options:{relative_time:"Preostali \u010Das do naslednje akcije",time:"Nastavljen \u010Das za naslednjo akcijo",days:"Katere dni/kdaj se spro\u017Ei akcija",additional_tasks:"\u0160tevilo dodatnih opravil"}},show_header_toggle:{heading:"Prika\u017Ei glavo",description:"Na vrhu prika\u017Ee stikalo, s katerim lahko omogo\u010Dite/izklju\u010Dite vse entitete naenkrat"},show_toggle_switches:{heading:"Prika\u017Ei stikala",description:"Prika\u017Ei stikalo za vsak posamezen urnik na kartici"},tags:{heading:"Tag-i",description:"Uporabite tag-e za lo\u010Devanje urnikov med ve\u010D karticami"},entities:{button_label:"Konfiguriraj vklju\u010Dene entitete",heading:"Vklju\u010Dene entitete",description:"Izberite entitete, katere \u017Eelike krmiliti s tem urnikom. Lahko kliknete na skupino, da jo odprete. Vedite, da lahko nekatere entitete (npr. senzorje) uporabite samo v pogojih, ne pa za akcije.",included_number:"{number}/{total} izbranih"}}}}},V8={services:e8,ui:H8}});var M0={};B(M0,{default:()=>r8,services:()=>t8,ui:()=>L8});var t8,L8,r8,L4=p(()=>{t8={generic:{turn_on:"Sl\xE5 p\xE5",turn_off:"St\xE4ng av",parameter_to_value:"{parameter} till {value}",action_with_parameter:"{action} med {parameter}"},climate:{set_temperature:"st\xE4ll in temperaturen[ p\xE5 {temperature}]",set_temperature_hvac_mode_heat:"v\xE4rma[ till {temperature}]",set_temperature_hvac_mode_cool:"kyla[ till {temperature}]",set_temperature_hvac_mode_heat_cool:"v\xE4rma/kyla[ till {temperature}]",set_temperature_hvac_mode_heat_cool_range:"v\xE4rma/kyla[ till {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"auto[ till {temperature}]",set_hvac_mode:"st\xE4ll in l\xE4get[ till {hvac_mode}]",set_preset_mode:"st\xE4ll in f\xF6rinst\xE4llningen[ till {preset_mode}]",set_fan_mode:"st\xE4ll in fl\xE4ktl\xE4ge[ till {fan_mode}]",set_swing_mode:"st\xE4ll in sv\xE4ngningsl\xE4ge[ till {swing_mode}]"},cover:{close_cover:"st\xE4ng",open_cover:"\xF6ppna",set_cover_position:"st\xE4ll in positionen[ till {position}]",set_cover_tilt_position:"st\xE4ll in lutningsposition[ till {tilt_position}]"},fan:{set_percentage:"st\xE4ll in hastighet[ till {percentage}]",set_direction:"st\xE4ll in riktning[ till {direction}]",oscillate:"st\xE4ll in oscillation[ till {oscillate}]"},humidifier:{set_humidity:"st\xE4ll in luftfuktighet[ till {humidity}]",set_mode:"st\xE4ll in l\xE4ge[ till {mode}]"},input_number:{set_value:"st\xE4ll in den[ till {value}]"},input_select:{select_option:"v\xE4lj alternativ[ {option}]"},select:{select_option:"v\xE4lj alternativ[ {option}]"},light:{turn_on:"sl\xE5 p\xE5[ med {brightness} brightness]"},media_player:{select_source:"v\xE4lj k\xE4lla[ {source}]"},notify:{send_message:"send notification"},script:{execute:"utf\xF6ra"},vacuum:{start_pause:"starta / pausa"},water_heater:{set_operation_mode:"st\xE4ll in l\xE4get[ till {operation_mode}]",set_away_mode:"st\xE4ll in borta l\xE4get"}},L8={components:{date:{day_types_short:{daily:"daglig",workdays:"arbetsdagar",weekend:"helgen"},day_types_long:{daily:"varje dag",workdays:"p\xE5 arbetsdagar",weekend:"i helgen"},days:"dagar",tomorrow:"imorgon",repeated_days:"varje {days}",repeated_days_except:"varje dag utom {excludedDays}",days_range:"fr\xE5n {startDay} till {endDay}",next_week_day:"n\xE4sta {weekday}"},time:{absolute:"kl. {time}",interval:"fr\xE5n {startTime} till {endTime}",at_midnight:"vid midnatt",at_noon:"vid middagstid",at_sun_event:"vid {sunEvent}"}},dialog:{enable_schedule:{title:"Slutf\xF6r modifieringar",description:"Schemat du har \xE4ndrat \xE4r f\xF6r n\xE4rvarande inaktiverat, vill du aktivera den?"},confirm_delete:{title:"Ta bort enheten?",description:"\xC4r du s\xE4ker p\xE5 att du vill ta bort den h\xE4r enheten?"},confirm_migrate:{title:"Uppdatera schema",description:"Vissa inst\xE4llningar kommer att g\xE5 f\xF6rlorade genom den h\xE4r \xE4ndringen. Vill du forts\xE4tta?"},weekday_picker:{title:"Upprepade dagar f\xF6r schema",choose:"V\xE4lj..."},entity_picker:{title:"V\xE4lj enheter",choose:"V\xE4lj...",no_results:"Inga matchande objekt hittades"},action_picker:{title:"V\xE4lj \xE5tg\xE4rd",show_all:"Visa alla enheter som st\xF6ds"}},panel:{common:{title:"Schemal\xE4ggare",new_schedule:"Ny schema",default_name:"Schema #{id}"},overview:{no_entries:"Det finns inga objekt att visa",backend_error:"Kunde inte ansluta till schemal\xE4ggarkomponenten. Den m\xE5ste installeras som integration innan det h\xE4r kortet kan anv\xE4ndas.",excluded_items:"{number} utesluten {if number is 1} artikel {else} artiklar",hide_excluded:"d\xF6lj uteslutna objekt",additional_tasks:"{number} mer {if number is 1} uppgift {else} uppgifter"},editor:{repeated_days:"Upprepade dagar",start_time:"Starttid",stop_time:"Sluttid",action:"\xC5tg\xE4rd",add_action:"L\xE4gg till \xE5tg\xE4rd",select_timeslot:"V\xE4lj en tidslucka",toggle_single_mode:"Till enkell\xE4ge",toggle_scheme_mode:"Till schemal\xE4ge",validation_errors:{overlapping_time:"Schemat har \xF6verlappande tidsluckor",missing_target_entity:"En eller flera \xE5tg\xE4rder saknar en m\xE5lentitet",missing_service_parameter:"En eller flera \xE5tg\xE4rder saknar en obligatorisk inst\xE4llning",missing_action:"Schemat har inga \xE5tg\xE4rder"}},options:{conditions:{header:"Villkor",add_condition:"L\xE4gg till villkor",new_condition:"Nytt villkor",types:{equal_to:"{entity} \xE4r lika med {value}",unequal_to:"{entity} \xE4r oj\xE4mlik med {value}",above:"{entity} \xE4r \xF6ver {value}",below:"{entity} \xE4r under {value}"},options:{logic_and:"Alla villkor m\xE5ste vara sanna",logic_or:"N\xE5got av villkoren m\xE5ste vara sant",track_changes:"Omv\xE4rdera n\xE4r f\xF6ruts\xE4ttningarna f\xF6r\xE4ndras"}},period:{header:"Period",start_date:"Fr\xE5n",end_date:"Till"},repeat_type:"beteende efter avslutad",tags:"Taggar"},card_editor:{tabs:{entities:"Enheter",other:"Andra"},fields:{title:{heading:"Kortets titel",options:{standard:"standard",hidden:"dold",custom:"anpassad"},custom_title:"Anpassad titel"},discover_existing:{heading:"Visa alla scheman",description:"Detta st\xE4ller in parametern ''uppt\xE4ck befintliga''. Tidigare skapade scheman l\xE4ggs automatiskt till p\xE5 kortet."},time_step:{heading:"Tidssteg",description:"Uppl\xF6sning (i minuter) f\xF6r att skapa scheman",unit_minutes:"min"},default_editor:{heading:"Standard tidsredigerare",options:{single:"Enkelt schemalagt l\xE4ge",scheme:"Tidschemal\xE4ge"}},sort_by:{heading:"Sorteringsalternativ",description:"Ordning i vilken scheman visas p\xE5 kortet",options:{relative_time:"Tid kvar till n\xE4sta \xE5tg\xE4rd",title:"Visad titel p\xE5 schemat",state:"Visa aktiva scheman \xF6verst"}},display_format_primary:{heading:"Visad prim\xE4r information",description:"Konfigurera vilken etikett som anv\xE4nds f\xF6r scheman i \xF6versikten",options:{default:"Schemanamn",entity_action:"Sammanfattning av uppgiften"}},display_format_secondary:{heading:"Visad sekund\xE4r information",description:"Konfigurera vilka ytterligare egenskaper som ska synas i \xF6versikten",options:{relative_time:"Tid kvar till n\xE4sta \xE5tg\xE4rd",time:"Konfigurerad tid f\xF6r n\xE4sta \xE5tg\xE4rd",days:"Upprepade dagar i veckan",additional_tasks:"Antal ytterligare uppgifter"}},show_header_toggle:{heading:"Visa rubrikv\xE4xling",description:"Visa v\xE4xlingsknappen h\xF6gst upp p\xE5 kortet f\xF6r att aktivera/inaktivera alla enheter"},show_toggle_switches:{heading:"Visa v\xE4xlingsknappar",description:"Visa v\xE4xlingsknappen f\xF6r varje enskilt schema i kortet"},tags:{heading:"Taggar",description:"Anv\xE4nd taggar f\xF6r att dela upp scheman mellan flera kort"},entities:{button_label:"Konfigurera inkluderade entiteter",heading:"Inkluderade enheter",description:"V\xE4lj de enheter som du vill styra med hj\xE4lp av schemal\xE4ggaren. Du kan klicka p\xE5 en grupp f\xF6r att \xF6ppna den. Observera att vissa enheter (t.ex. sensorer) bara kan anv\xE4ndas f\xF6r villkor, inte f\xF6r \xE5tg\xE4rder.",included_number:"{number}/{total} vald"}}}}},r8={services:t8,ui:L8}});var s0={};B(s0,{default:()=>a8,services:()=>i8,ui:()=>o8});var i8,o8,a8,r4=p(()=>{i8={generic:{turn_on:"\u0412\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438",turn_off:"\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438",parameter_to_value:"{parameter} \u0434\u043E {value}",action_with_parameter:"{action} \u0437 {parameter}"},climate:{set_temperature:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443[ to {temperature}]",set_temperature_hvac_mode_heat:"\u043D\u0430\u0433\u0440\u0456\u0432[ to {temperature}]",set_temperature_hvac_mode_cool:"\u043E\u0445\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F[ to {temperature}]",set_temperature_hvac_mode_heat_cool:"\u043D\u0430\u0433\u0440\u0456\u0432/\u043E\u0445\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F[ to {temperature}]",set_temperature_hvac_mode_heat_cool_range:"\u043D\u0430\u0433\u0440\u0456\u0432/\u043E\u0445\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F[ to {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"a\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0438\u0439[ to {temperature}]",set_hvac_mode:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0440\u0435\u0436\u0438\u043C[ to {hvac_mode}]",set_preset_mode:"\u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043F\u0440\u0435\u0441\u0435\u0442[ to {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"\u0437\u0430\u043A\u0440\u0438\u0442\u0438",open_cover:"\u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438",set_cover_position:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u043E\u0437\u0438\u0446\u0456\u044E[ to {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_percentage:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C[ to {speed}]",set_direction:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u043E\u043A[ to {direction}]",oscillate:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043A\u043E\u043B\u0438\u0432\u0430\u043D\u043D\u044F[ to {oscillate}]"},humidifier:{set_humidity:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0432\u043E\u043B\u043E\u0433\u0456\u0441\u0442\u044C[ to {humidity}]",set_mode:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0440\u0435\u0436\u0438\u043C[ to {mode}]"},input_number:{set_value:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F[ to {value}]"},input_select:{select_option:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043E\u043F\u0446\u0456\u044E[ {option}]"},select:{select_option:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043E\u043F\u0446\u0456\u044E[ {option}]"},light:{turn_on:"\u0443\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438[ \u0437 {brightness} \u044F\u043A\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044E]"},media_player:{select_source:"\u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u0434\u0436\u0435\u0440\u0435\u043B\u043E[ {source}]"},notify:{send_message:"send notification"},script:{execute:"\u0432\u0438\u043A\u043E\u043D\u0430\u0442\u0438"},vacuum:{start_pause:"\u0441\u0442\u0430\u0440\u0442 / \u043F\u0430\u0443\u0437\u0430"},water_heater:{set_operation_mode:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0440\u0435\u0436\u0438\u043C[ to {operation_mode}]",set_away_mode:"\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0440\u0435\u0436\u0438\u043C \u041D\u0435 \u0432\u0434\u043E\u043C\u0430"}},o8={components:{date:{day_types_short:{daily:"\u0449\u043E\u0434\u0435\u043D\u043D\u043E",workdays:"\u0440\u043E\u0431\u043E\u0447\u0456 \u0434\u043D\u0456",weekend:"\u0432\u0438\u0445\u0456\u0434\u043D\u0456"},day_types_long:{daily:"\u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0434\u043D\u044F",workdays:"\u0432 \u0440\u043E\u0431\u043E\u0447\u0456 \u0434\u043D\u0456",weekend:"\u043F\u043E \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0445"},days:"\u0434\u043D\u0456",tomorrow:"\u0437\u0430\u0432\u0442\u0440\u0430",repeated_days:"\u043A\u043E\u0436\u043D\u0456 {days}",repeated_days_except:"\u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u043E\u043A\u0440\u0456\u043C {excludedDays}",days_range:"\u0437 {startDay} \u0434\u043E {endDay}",next_week_day:"\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457 {weekday}"},time:{absolute:"\u043E {time}",interval:"\u0437 {startTime} \u0434\u043E {endTime}",at_midnight:"\u043E\u043F\u0456\u0432\u043D\u043E\u0447\u0456",at_noon:"\u043E\u043F\u0456\u0432\u0434\u043D\u0456",at_sun_event:"\u043E {sunEvent}"}},dialog:{enable_schedule:{title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0456\u0442\u044C \u0437\u043C\u0456\u043D\u0438",description:"\u0420\u043E\u0437\u043A\u043B\u0430\u0434, \u044F\u043A\u0438\u0439 \u0431\u0443\u043B\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E, \u043D\u0430\u0440\u0430\u0437\u0456 \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E, \u0447\u0438 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0439\u043E\u0433\u043E \u0432\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438?"},confirm_delete:{title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C?",description:"\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044E \u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C?"},confirm_migrate:{title:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0440\u043E\u0437\u043A\u043B\u0430\u0434",description:"\u0423 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456 \u0446\u0456\u0454\u0457 \u0434\u0456\u0457 \u0434\u0435\u044F\u043A\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0435 \u0432\u0442\u0440\u0430\u0447\u0435\u043D\u043E. \u0412\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438?"},weekday_picker:{title:"Repeated days for schedule",choose:"Choose..."},entity_picker:{title:"Choose entities",choose:"Choose...",no_results:"No matching items found"},action_picker:{title:"Choose action",show_all:"Show all supported entities"}},panel:{common:{title:"\u041F\u043B\u0430\u043D\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A",new_schedule:"\u041D\u043E\u0432\u0438\u0439 \u0440\u043E\u0437\u043A\u043B\u0430\u0434",default_name:"\u0420\u043E\u0437\u043A\u043B\u0430\u0434 #{id}"},overview:{no_entries:"\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456",backend_error:"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438\u0441\u044F \u0434\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0430. \u041F\u0435\u0440\u0448 \u043D\u0456\u0436 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0446\u044E \u043A\u0430\u0440\u0442\u0443, \u0457\u0457 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u044F\u043A \u0456\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u044E.",excluded_items:"{number} \u0432\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u043E {if number is 1} \u0435\u043B\u0435\u043C\u0435\u043D\u0442 {else} \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",hide_excluded:"\u0441\u0445\u043E\u0432\u0430\u0442\u0438 \u0432\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438",additional_tasks:"{number} \u0431\u0456\u043B\u044C\u0448\u0435 {if number is 1} \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F {else} \u0437\u0430\u0432\u0434\u0430\u043D\u044C"},editor:{repeated_days:"Repeated days",start_time:"Start time",stop_time:"End time",action:"Action",add_action:"Add action",select_timeslot:"\u0421\u043F\u0435\u0440\u0448\u0443 \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0447\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u043C\u0456\u0436\u043E\u043A",toggle_single_mode:"\u0414\u043E \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0443",toggle_scheme_mode:"\u0414\u043E \u0441\u0445\u0435\u043C\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0443",validation_errors:{overlapping_time:"Schedule has overlapping timeslots",missing_target_entity:"One or more actions are missing a target entity",missing_service_parameter:"One or more actions are missing a required setting",missing_action:"Schedule has no actions"}},options:{conditions:{header:"Conditions",add_condition:"Add condition",new_condition:"New condition",types:{equal_to:"{entity} is equal to {value}",unequal_to:"{entity} is unequal to {value}",above:"{entity} is above {value}",below:"{entity} is below {value}"},options:{logic_and:"All conditions must be true",logic_or:"Any condition must be true",track_changes:"Re-evaluate when conditions change"}},period:{header:"\u043F\u0435\u0440\u0456\u043E\u0434",start_date:"From",end_date:"To"},repeat_type:"\u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430 \u043F\u0456\u0441\u043B\u044F \u0441\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u043D\u043D\u044F",tags:"Tags"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules",unit_minutes:"min"},default_editor:{heading:"Default time editor",options:{single:"Single schedule mode",scheme:"Time scheme mode"}},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/disabling all entities"},show_toggle_switches:{heading:"Show toggle switches",description:"Show toggle switch for each individual schedule in the card"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{button_label:"Configure included entities",heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},a8={services:i8,ui:o8}});var l0={};B(l0,{default:()=>s8,services:()=>M8,ui:()=>n8});var M8,n8,s8,i4=p(()=>{M8={generic:{turn_on:"\u067E\u0631 \u0633\u0648\u0626\u0686 \u06A9\u0631\u06CC\u06BA",turn_off:"\u0628\u0646\u062F \u06A9\u0631 \u062F\u06CC\u06BA",parameter_to_value:"{parameter} \u06A9\u0648 {value} \u067E\u0631 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA",action_with_parameter:"{parameter} \u06A9\u06D2 \u0633\u0627\u062A\u06BE {action}"},climate:{set_temperature:"\u062F\u0631\u062C\u06C1 \u062D\u0631\u0627\u0631\u062A \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {temperature} \u067E\u0631]",set_temperature_hvac_mode_heat:"\u06C1\u06CC\u0679[ {temperature} \u067E\u0631]",set_temperature_hvac_mode_cool:"\u06A9\u0648\u0644[ {temperature} \u067E\u0631]",set_temperature_hvac_mode_heat_cool:"\u06C1\u06CC\u0679/\u06A9\u0648\u0644[ {temperature} \u067E\u0631]",set_temperature_hvac_mode_heat_cool_range:"\u06C1\u06CC\u0679/\u06A9\u0648\u0644[ {target_temp_low} \u0633\u06D2 {target_temp_high} \u062A\u06A9]",set_temperature_hvac_mode_auto:"\u0622\u0679\u0648[ {temperature} \u067E\u0631]",set_hvac_mode:"\u0645\u0648\u0688 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {hvac_mode} \u067E\u0631]",set_preset_mode:"\u067E\u0631\u06CC \u0633\u06CC\u0679 \u0645\u0648\u0688 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {preset_mode} \u067E\u0631]",set_fan_mode:"\u0641\u06CC\u0646 \u0645\u0648\u0688 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {fan_mode} \u067E\u0631]",set_swing_mode:"set swing mode[ to {swing_mode}]"},cover:{close_cover:"\u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",open_cover:"\u06A9\u06BE\u0648\u0644\u06CC\u06BA",set_cover_position:"\u067E\u0648\u0632\u06CC\u0634\u0646 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {position} \u067E\u0631]",set_cover_tilt_position:"\u062C\u06BE\u06A9\u0627\u0624 \u067E\u0648\u0632\u06CC\u0634\u0646 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {tilt_position} \u067E\u0631]"},fan:{set_percentage:"\u0631\u0641\u062A\u0627\u0631 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {percentage} \u067E\u0631]",set_direction:"\u0633\u0645\u062A \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {direction} \u067E\u0631]",oscillate:"\u0622\u0633\u06CC\u0644\u06CC\u0634\u0646 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {oscillate} \u067E\u0631]"},humidifier:{set_humidity:"\u0646\u0645\u06CC \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {humidity} \u067E\u0631]",set_mode:"\u0645\u0648\u0688 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {mode} \u067E\u0631]"},input_number:{set_value:"\u0648\u06CC\u0644\u06CC\u0648 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {value} \u067E\u0631]"},input_select:{select_option:"\u0622\u067E\u0634\u0646 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA[ {option}]"},select:{select_option:"\u0622\u067E\u0634\u0646 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA[ {option}]"},light:{turn_on:"\u0622\u0646 \u06A9\u0631\u06CC\u06BA[ {brightness} \u0686\u0645\u06A9 \u06A9\u06D2 \u0633\u0627\u062A\u06BE]"},media_player:{select_source:"\u0633\u0648\u0631\u0633 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA[ {source}]"},notify:{send_message:"\u0646\u0648\u0679\u06CC\u0641\u06A9\u06CC\u0634\u0646 \u0628\u06BE\u06CC\u062C\u06CC\u06BA"},script:{execute:"\u0686\u0644\u0627\u0626\u06CC\u06BA"},vacuum:{start_pause:"\u0634\u0631\u0648\u0639 / \u0631\u0648\u06A9\u06CC\u06BA"},water_heater:{set_operation_mode:"\u0645\u0648\u0688 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA[ {operation_mode} \u067E\u0631]",set_away_mode:"\u063A\u06CC\u0631 \u0645\u0648\u062C\u0648\u062F\u06AF\u06CC \u06A9\u0627 \u0645\u0648\u0688 \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA"}},n8={components:{date:{day_types_short:{daily:"\u0631\u0648\u0632\u0627\u0646\u06C1",workdays:"\u06A9\u0627\u0645 \u06A9\u06D2 \u062F\u0646",weekend:"\u06C1\u0641\u062A\u06C1 \u0627\u062E\u062A\u062A\u0627\u0645"},day_types_long:{daily:"\u06C1\u0631 \u062F\u0646",workdays:"\u06A9\u0627\u0645 \u06A9\u06D2 \u062F\u0646\u0648\u06BA \u0645\u06CC\u06BA",weekend:"\u06C1\u0641\u062A\u06D2 \u06A9\u06D2 \u0622\u062E\u0631 \u0645\u06CC\u06BA"},days:"\u062F\u0646",tomorrow:"\u06A9\u0644",repeated_days:"\u06C1\u0631 {days}",repeated_days_except:"\u06C1\u0631 \u062F\u0646 \u0633\u0648\u0627\u0626\u06D2 {excludedDays}",days_range:"{startDay} \u0633\u06D2 {endDay} \u062A\u06A9",next_week_day:"\u0627\u06AF\u0644\u0627 {weekday}"},time:{absolute:"{time} \u067E\u0631",interval:"{startTime} \u0633\u06D2 {endTime} \u062A\u06A9",at_midnight:"\u0622\u062F\u06BE\u06CC \u0631\u0627\u062A \u06A9\u0648",at_noon:"\u062F\u0648\u067E\u06C1\u0631 \u06A9\u0648",at_sun_event:"{sunEvent} \u06A9\u06D2 \u0648\u0642\u062A"}},dialog:{enable_schedule:{title:"\u062A\u0631\u0645\u06CC\u0645 \u0645\u06A9\u0645\u0644 \u06A9\u0631\u06CC\u06BA",description:"\u062C\u0648 \u0634\u06CC\u0688\u0648\u0644 \u0622\u067E \u0646\u06D2 \u0628\u062F\u0644\u0627 \u06C1\u06D2 \u0648\u06C1 \u0627\u0633 \u0648\u0642\u062A \u063A\u06CC\u0631 \u0641\u0639\u0627\u0644 \u06C1\u06D2\u060C \u06A9\u06CC\u0627 \u0622\u067E \u0627\u0633\u06D2 \u0641\u0639\u0627\u0644 \u06A9\u0631\u0646\u0627 \u0686\u0627\u06C1\u062A\u06D2 \u06C1\u06CC\u06BA\u061F"},confirm_delete:{title:"\u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC \u062D\u0630\u0641 \u06A9\u0631\u06CC\u06BA\u061F",description:"\u06A9\u06CC\u0627 \u0622\u067E \u0648\u0627\u0642\u0639\u06CC \u0627\u0633 \u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC \u06A9\u0648 \u062D\u0630\u0641 \u06A9\u0631\u0646\u0627 \u0686\u0627\u06C1\u062A\u06D2 \u06C1\u06CC\u06BA\u061F"},confirm_migrate:{title:"\u0634\u06CC\u0688\u0648\u0644 \u0627\u067E \u0688\u06CC\u0679 \u06A9\u0631\u06CC\u06BA",description:"\u0627\u0633 \u062A\u0628\u062F\u06CC\u0644\u06CC \u0633\u06D2 \u06A9\u0686\u06BE \u0633\u06CC\u0679\u0646\u06AF\u0632 \u0636\u0627\u0626\u0639 \u06C1\u0648 \u0633\u06A9\u062A\u06CC \u06C1\u06CC\u06BA\u06D4 \u06A9\u06CC\u0627 \u0622\u067E \u062C\u0627\u0631\u06CC \u0631\u06A9\u06BE\u0646\u0627 \u0686\u0627\u06C1\u062A\u06D2 \u06C1\u06CC\u06BA\u061F"},weekday_picker:{title:"\u0634\u06CC\u0688\u0648\u0644 \u06A9\u06D2 \u0644\u06CC\u06D2 \u062F\u06C1\u0631\u0627\u0626\u06D2 \u06AF\u0626\u06D2 \u062F\u0646",choose:"\u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA..."},entity_picker:{title:"\u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC\u0632 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA",choose:"\u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA...",no_results:"\u06A9\u0648\u0626\u06CC \u0645\u0645\u0627\u062B\u0644 \u0622\u0626\u0679\u0645\u0632 \u0646\u06C1\u06CC\u06BA \u0645\u0644\u06D2"},action_picker:{title:"\u0639\u0645\u0644 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA",show_all:"\u062A\u0645\u0627\u0645 \u062A\u0639\u0627\u0648\u0646 \u06CC\u0627\u0641\u062A\u06C1 \u0627\u062F\u0627\u0631\u0648\u06BA \u06A9\u0648 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA\u06D4"}},panel:{common:{title:"\u0634\u06CC\u0688\u0648\u0644\u0631",new_schedule:"\u0646\u06CC\u0627 \u0634\u06CC\u0688\u0648\u0644",default_name:"\u0634\u06CC\u0688\u0648\u0644 #{id}"},overview:{no_entries:"\u062F\u06A9\u06BE\u0627\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 \u06A9\u0648\u0626\u06CC \u0622\u0626\u0679\u0645\u0632 \u0646\u06C1\u06CC\u06BA \u06C1\u06CC\u06BA",backend_error:"\u0634\u06CC\u0688\u0648\u0644\u0631 \u06A9\u0645\u067E\u0648\u0646\u0646\u0679 \u0633\u06D2 \u06A9\u0646\u06A9\u0634\u0646 \u0646\u06C1\u06CC\u06BA \u06C1\u0648 \u0633\u06A9\u0627\u06D4 \u0627\u0633\u06D2 \u06A9\u0627\u0631\u0688 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u0646\u06D2 \u0633\u06D2 \u067E\u06C1\u0644\u06D2 \u0627\u0646\u0679\u06CC\u06AF\u0631\u06CC\u0634\u0646 \u06A9\u06D2 \u0637\u0648\u0631 \u067E\u0631 \u0627\u0646\u0633\u0679\u0627\u0644 \u06A9\u0631\u0646\u0627 \u0636\u0631\u0648\u0631\u06CC \u06C1\u06D2\u06D4",excluded_items:"{number} \u062E\u0627\u0631\u062C \u0634\u062F\u06C1 {if number is 1} \u0622\u0626\u0679\u0645 {else} \u0622\u0626\u0679\u0645\u0632",hide_excluded:"\u062E\u0627\u0631\u062C \u0634\u062F\u06C1 \u0622\u0626\u0679\u0645\u0632 \u0686\u06BE\u067E\u0627\u0626\u06CC\u06BA",additional_tasks:"{number} \u0645\u0632\u06CC\u062F {if number is 1} \u06A9\u0627\u0645 {else} \u06A9\u0627\u0645"},editor:{repeated_days:"\u062F\u06C1\u0631\u0627\u0626\u06D2 \u06AF\u0626\u06D2 \u062F\u0646",start_time:"\u0622\u063A\u0627\u0632 \u06A9\u0627 \u0648\u0642\u062A",stop_time:"\u0627\u062E\u062A\u062A\u0627\u0645\u06CC \u0648\u0642\u062A",action:"\u0639\u0645\u0644",add_action:"\u0639\u0645\u0644 \u0634\u0627\u0645\u0644 \u06A9\u0631\u06CC\u06BA",select_timeslot:"\u0679\u0627\u0626\u0645 \u0633\u0644\u0627\u0679 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA",toggle_single_mode:"\u0633\u0646\u06AF\u0644 \u0645\u0648\u0688 \u067E\u0631 \u062C\u0627\u0626\u06CC\u06BA",toggle_scheme_mode:"\u0627\u0633\u06A9\u06CC\u0645 \u0645\u0648\u0688 \u067E\u0631 \u062C\u0627\u0626\u06CC\u06BA",validation_errors:{overlapping_time:"\u0634\u06CC\u0688\u0648\u0644 \u0645\u06CC\u06BA \u0648\u0642\u062A\u0648\u06BA \u06A9\u0627 \u0627\u0648\u0648\u0631\u0644\u06CC\u067E \u06C1\u06D2",missing_target_entity:"\u0627\u06CC\u06A9 \u06CC\u0627 \u0632\u06CC\u0627\u062F\u06C1 \u0627\u0639\u0645\u0627\u0644 \u0645\u06CC\u06BA \u06C1\u062F\u0641 \u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC \u063A\u0627\u0626\u0628 \u06C1\u06D2",missing_service_parameter:"\u0627\u06CC\u06A9 \u06CC\u0627 \u0632\u06CC\u0627\u062F\u06C1 \u0627\u0639\u0645\u0627\u0644 \u0645\u06CC\u06BA \u0645\u0637\u0644\u0648\u0628\u06C1 \u0633\u06CC\u0679\u0646\u06AF \u063A\u0627\u0626\u0628 \u06C1\u06D2",missing_action:"\u0634\u06CC\u0688\u0648\u0644 \u0645\u06CC\u06BA \u06A9\u0648\u0626\u06CC \u0639\u0645\u0644 \u0645\u0648\u062C\u0648\u062F \u0646\u06C1\u06CC\u06BA"}},options:{conditions:{header:"\u0634\u0631\u0627\u0626\u0637",add_condition:"\u0634\u0631\u0637 \u0634\u0627\u0645\u0644 \u06A9\u0631\u06CC\u06BA",new_condition:"\u0646\u0626\u06CC \u0634\u0631\u0637",types:{equal_to:"{entity} {value} \u06A9\u06D2 \u0628\u0631\u0627\u0628\u0631 \u06C1\u06D2",unequal_to:"{entity} {value} \u06A9\u06D2 \u0628\u0631\u0627\u0628\u0631 \u0646\u06C1\u06CC\u06BA \u06C1\u06D2",above:"{entity} {value} \u0633\u06D2 \u0632\u06CC\u0627\u062F\u06C1 \u06C1\u06D2",below:"{entity} {value} \u0633\u06D2 \u06A9\u0645 \u06C1\u06D2"},options:{logic_and:"\u062A\u0645\u0627\u0645 \u0634\u0631\u0627\u0626\u0637 \u062F\u0631\u0633\u062A \u06C1\u0648\u0646\u06CC \u0686\u0627\u06C1\u0626\u06CC\u06BA",logic_or:"\u06A9\u0648\u0626\u06CC \u0627\u06CC\u06A9 \u0634\u0631\u0637 \u062F\u0631\u0633\u062A \u06C1\u0648\u0646\u06CC \u0686\u0627\u06C1\u06CC\u06D2",track_changes:"\u062C\u0628 \u0634\u0631\u0627\u0626\u0637 \u0628\u062F\u0644\u06CC\u06BA \u062A\u0648 \u062F\u0648\u0628\u0627\u0631\u06C1 \u062C\u0627\u0646\u0686 \u06A9\u0631\u06CC\u06BA"}},period:{header:"\u0645\u062F\u062A",start_date:"\u0633\u06D2",end_date:"\u062A\u06A9"},repeat_type:"\u0645\u06A9\u0645\u0644 \u06C1\u0648\u0646\u06D2 \u06A9\u06D2 \u0628\u0639\u062F \u06A9\u0627 \u0628\u0631\u062A\u0627\u0624",tags:"\u0679\u06CC\u06AF\u0632"},card_editor:{tabs:{entities:"\u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC\u0632",other:"\u062F\u06CC\u06AF\u0631"},fields:{title:{heading:"\u06A9\u0627\u0631\u0688 \u06A9\u0627 \u0639\u0646\u0648\u0627\u0646",options:{standard:"\u0645\u0639\u06CC\u0627\u0631\u06CC",hidden:"\u0686\u06BE\u067E\u0627 \u06C1\u0648\u0627",custom:"\u062D\u0633\u0628\u0650 \u0636\u0631\u0648\u0631\u062A"},custom_title:"\u0627\u067E\u0646\u0627 \u0639\u0646\u0648\u0627\u0646"},discover_existing:{heading:"\u062A\u0645\u0627\u0645 \u0634\u06CC\u0688\u0648\u0644\u0632 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA",description:"\u06CC\u06C1 'discover existing' \u067E\u06CC\u0631\u0627\u0645\u06CC\u0679\u0631 \u0633\u06CC\u0679 \u06A9\u0631\u062A\u0627 \u06C1\u06D2\u06D4 \u067E\u06C1\u0644\u06D2 \u0633\u06D2 \u0628\u0646\u0627\u0626\u06D2 \u06AF\u0626\u06D2 \u0634\u06CC\u0688\u0648\u0644\u0632 \u062E\u0648\u062F \u0628\u062E\u0648\u062F \u06A9\u0627\u0631\u0688 \u0645\u06CC\u06BA \u0634\u0627\u0645\u0644 \u06C1\u0648 \u062C\u0627\u0626\u06CC\u06BA \u06AF\u06D2\u06D4"},time_step:{heading:"\u0648\u0642\u062A \u06A9\u0627 \u0648\u0642\u0641\u06C1",description:"\u0634\u06CC\u0688\u0648\u0644 \u0628\u0646\u0627\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0648\u0642\u062A \u06A9\u06CC \u0631\u06CC\u0632\u0648\u0644\u0648\u0634\u0646 (\u0645\u0646\u0679 \u0645\u06CC\u06BA)",unit_minutes:"\u0645\u0646\u0679"},default_editor:{heading:"\u0688\u06CC\u0641\u0627\u0644\u0679 \u0679\u0627\u0626\u0645 \u0627\u06CC\u0688\u06CC\u0679\u0631",options:{single:"\u0633\u0646\u06AF\u0644 \u0634\u06CC\u0688\u0648\u0644 \u0645\u0648\u0688",scheme:"\u0679\u0627\u0626\u0645 \u0627\u0633\u06A9\u06CC\u0645 \u0645\u0648\u0688"}},sort_by:{heading:"\u062A\u0631\u062A\u06CC\u0628 \u06A9\u06D2 \u0627\u062E\u062A\u06CC\u0627\u0631\u0627\u062A",description:"\u06A9\u0627\u0631\u0688 \u0645\u06CC\u06BA \u0634\u06CC\u0688\u0648\u0644\u0632 \u06A9\u06CC \u062A\u0631\u062A\u06CC\u0628",options:{relative_time:"\u0627\u06AF\u0644\u06D2 \u0639\u0645\u0644 \u062A\u06A9 \u0628\u0627\u0642\u06CC \u0648\u0642\u062A",title:"\u0634\u06CC\u0688\u0648\u0644 \u06A9\u0627 \u062F\u06A9\u06BE\u0627\u06CC\u0627 \u06AF\u06CC\u0627 \u0639\u0646\u0648\u0627\u0646",state:"\u0641\u0639\u0627\u0644 \u0634\u06CC\u0688\u0648\u0644\u0632 \u0627\u0648\u067E\u0631 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA"}},display_format_primary:{heading:"\u0645\u0631\u06A9\u0632\u06CC \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u06A9\u06CC \u0646\u0645\u0627\u0626\u0634",description:"\u0627\u0648\u0648\u0631\u0648\u06CC\u0648 \u0645\u06CC\u06BA \u0634\u06CC\u0688\u0648\u0644\u0632 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0644\u06CC\u0628\u0644 \u06A9\u0646\u0641\u06CC\u06AF\u0631 \u06A9\u0631\u06CC\u06BA",options:{default:"\u0634\u06CC\u0688\u0648\u0644 \u06A9\u0627 \u0646\u0627\u0645",entity_action:"\u06A9\u0627\u0645 \u06A9\u0627 \u062E\u0644\u0627\u0635\u06C1"}},display_format_secondary:{heading:"\u062B\u0627\u0646\u0648\u06CC \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u06A9\u06CC \u0646\u0645\u0627\u0626\u0634",description:"\u0627\u0648\u0648\u0631\u0648\u06CC\u0648 \u0645\u06CC\u06BA \u0627\u0636\u0627\u0641\u06CC \u062E\u0635\u0648\u0635\u06CC\u0627\u062A \u062F\u06A9\u06BE\u0627\u0646\u06D2 \u06A9\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0631\u06CC\u06BA",options:{relative_time:"\u0627\u06AF\u0644\u06D2 \u0639\u0645\u0644 \u062A\u06A9 \u0628\u0627\u0642\u06CC \u0648\u0642\u062A",time:"\u0627\u06AF\u0644\u06D2 \u0639\u0645\u0644 \u06A9\u0627 \u0648\u0642\u062A",days:"\u06C1\u0641\u062A\u06D2 \u06A9\u06D2 \u062F\u06C1\u0631\u0627\u0626\u06D2 \u06AF\u0626\u06D2 \u062F\u0646",additional_tasks:"\u0627\u0636\u0627\u0641\u06CC \u06A9\u0627\u0645\u0648\u06BA \u06A9\u06CC \u062A\u0639\u062F\u0627\u062F"}},show_header_toggle:{heading:"\u06C1\u06CC\u0688\u0631 \u0679\u0648\u06AF\u0644 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA",description:"\u06A9\u0627\u0631\u0688 \u06A9\u06D2 \u0627\u0648\u067E\u0631 \u062A\u0645\u0627\u0645 \u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC\u0632 \u06A9\u0648 \u0641\u0639\u0627\u0644/\u063A\u06CC\u0631 \u0641\u0639\u0627\u0644 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0633\u0648\u0626\u0686 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA"},show_toggle_switches:{heading:"\u0679\u0648\u06AF\u0644 \u0633\u0648\u0626\u0686\u0632 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA",description:"\u06A9\u0627\u0631\u0688 \u0645\u06CC\u06BA \u06C1\u0631 \u0627\u0646\u0641\u0631\u0627\u062F\u06CC \u0634\u06CC\u0688\u0648\u0644 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0679\u0648\u06AF\u0644 \u0633\u0648\u0626\u0686 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA"},tags:{heading:"\u0679\u06CC\u06AF\u0632",description:"\u0634\u06CC\u0688\u0648\u0644\u0632 \u06A9\u0648 \u0645\u062E\u062A\u0644\u0641 \u06A9\u0627\u0631\u0688\u0632 \u0645\u06CC\u06BA \u062A\u0642\u0633\u06CC\u0645 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0679\u06CC\u06AF\u0632 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u06CC\u06BA"},entities:{button_label:"\u0634\u0627\u0645\u0644 \u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC\u0632 \u062A\u0631\u062A\u06CC\u0628 \u062F\u06CC\u06BA",heading:"\u0634\u0627\u0645\u0644 \u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC\u0632",description:"\u0648\u06C1 \u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC\u0632 \u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA \u062C\u0646\u06C1\u06CC\u06BA \u0622\u067E \u0634\u06CC\u0688\u0648\u0644\u0631 \u06A9\u06D2 \u0630\u0631\u06CC\u0639\u06D2 \u06A9\u0646\u0679\u0631\u0648\u0644 \u06A9\u0631\u0646\u0627 \u0686\u0627\u06C1\u062A\u06D2 \u06C1\u06CC\u06BA\u06D4 \u0622\u067E \u06AF\u0631\u0648\u067E \u067E\u0631 \u06A9\u0644\u06A9 \u06A9\u0631 \u06A9\u06D2 \u0627\u0633\u06D2 \u06A9\u06BE\u0648\u0644 \u0633\u06A9\u062A\u06D2 \u06C1\u06CC\u06BA\u06D4 \u06CC\u0627\u062F \u0631\u06A9\u06BE\u06CC\u06BA \u06A9\u06C1 \u06A9\u0686\u06BE \u0627\u06CC\u0646\u0679\u06CC\u0679\u06CC\u0632 (\u062C\u06CC\u0633\u06D2 \u0633\u06CC\u0646\u0633\u0631\u0632) \u0635\u0631\u0641 \u0634\u0631\u0627\u0626\u0637 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06C1\u0648 \u0633\u06A9\u062A\u06CC \u06C1\u06CC\u06BA\u060C \u0627\u0639\u0645\u0627\u0644 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0646\u06C1\u06CC\u06BA\u06D4",included_number:"{number}/{total} \u0645\u0646\u062A\u062E\u0628 \u0634\u062F\u06C1"}}}}},s8={services:M8,ui:n8}});var A0={};B(A0,{default:()=>m8,services:()=>d8,ui:()=>l8});var d8,l8,m8,o4=p(()=>{d8={generic:{turn_on:"\u6253\u5F00",turn_off:"\u5173\u95ED",parameter_to_value:"{parameter} \u81F3 {value}",action_with_parameter:"{action} \u4F7F\u7528 {parameter}"},climate:{set_temperature:"\u8BBE\u5B9A\u6E29\u5EA6[ \u81F3 {temperature}]",set_temperature_hvac_mode_heat:"\u5236\u70ED\u6A21\u5F0F[ \u81F3 {temperature}]",set_temperature_hvac_mode_cool:"\u5236\u51B7\u6A21\u5F0F[ \u81F3 {temperature}]",set_temperature_hvac_mode_heat_cool:"\u5236\u70ED\u6A21\u5F0F/\u5236\u51B7\u6A21\u5F0F[ \u81F3 {temperature}]",set_temperature_hvac_mode_heat_cool_range:"\u5236\u70ED\u6A21\u5F0F/\u5236\u51B7\u6A21\u5F0F[ \u81F3 {target_temp_low} - {target_temp_high}]",set_temperature_hvac_mode_auto:"\u81EA\u52A8[ \u81F3 {temperature}]",set_hvac_mode:"\u8BBE\u5B9A\u6A21\u5F0F[ \u4E3A {hvac_mode}]",set_preset_mode:"\u8BBE\u5B9A\u9884\u8BBE\u6A21\u5F0F[ \u4E3A {preset_mode}]",set_fan_mode:"\u8BBE\u7F6E\u98CE\u6247\u6A21\u5F0F[ \u4E3A {fan_mode}]",set_swing_mode:"\u8BBE\u7F6E\u6446\u52A8\u6A21\u5F0F[ \u4E3A {swing_mode}]"},cover:{close_cover:"\u5173\u95ED",open_cover:"\u6253\u5F00",set_cover_position:"\u8BBE\u7F6E\u4F4D\u7F6E[ \u4E3A {position}]",set_cover_tilt_position:"\u8BBE\u7F6E\u503E\u659C\u4F4D\u7F6E[ \u4E3A {tilt_position}]"},fan:{set_percentage:"\u8BBE\u5B9A\u98CE\u901F[ \u4E3A {speed}]",set_direction:"\u8BBE\u5B9A\u65B9\u5411[ \u4E3A {direction}]",oscillate:"\u8BBE\u7F6E\u6447\u6446[ \u4E3A {oscillate}]"},humidifier:{set_humidity:"\u8BBE\u5B9A\u6E7F\u5EA6[ \u81F3 {humidity}]",set_mode:"\u8BBE\u5B9A\u6A21\u5F0F[ \u4E3A {mode}]"},input_number:{set_value:"\u8BBE\u5B9A\u6570\u503C[ \u81F3 {value}]"},input_select:{select_option:"\u9009\u62E9\u9009\u9879[ {option}]"},select:{select_option:"\u9009\u62E9\u9009\u9879[ {option}]"},light:{turn_on:"\u6253\u5F00[ \u5E76\u8BBE\u5B9A\u4EAE\u5EA6\u4E3A {brightness}]"},media_player:{select_source:"\u9009\u62E9\u64AD\u653E\u6E90[ {source}]"},notify:{send_message:"\u53D1\u9001\u901A\u77E5"},script:{execute:"\u6267\u884C"},vacuum:{start_pause:"\u5F00\u59CB / \u6682\u505C"},water_heater:{set_operation_mode:"\u8BBE\u5B9A\u6A21\u5F0F[ \u4E3A {operation_mode}]",set_away_mode:"\u8BBE\u5B9A\u79BB\u5F00\u6A21\u5F0F"}},l8={components:{date:{day_types_short:{daily:"\u6BCF\u5929",workdays:"\u5DE5\u4F5C\u65E5",weekend:"\u5468\u672B"},day_types_long:{daily:"\u6BCF\u5929",workdays:"\u5DE5\u4F5C\u65E5",weekend:"\u5468\u672B"},days:"\u5929",tomorrow:"\u660E\u5929",repeated_days:"\u6BCF {days}",repeated_days_except:"\u6BCF\u5929\uFF0C\u9664\u4E86 {excludedDays}",days_range:"\u4ECE {startDay} \u81F3 {endDay}",next_week_day:"\u4E0B{weekday}"},time:{absolute:"{time}",interval:"\u4ECE {startTime} \u81F3 {endTime}",at_midnight:"\u5348\u591C",at_noon:"\u4E2D\u5348",at_sun_event:"{sunEvent}"}},dialog:{enable_schedule:{title:"\u5B8C\u6210\u4FEE\u6539",description:"\u60A8\u4FEE\u6539\u7684\u8BA1\u5212\u4EFB\u52A1\u5F53\u524D\u5DF2\u7981\u7528\uFF0C\u662F\u5426\u9700\u8981\u542F\u7528\uFF1F"},confirm_delete:{title:"\u662F\u5426\u5220\u9664\u5B9E\u4F53\uFF1F",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5B9E\u4F53\u5417\uFF1F"},confirm_migrate:{title:"\u4FEE\u6539\u4EFB\u52A1",description:"\u6B64\u64CD\u4F5C\u5C06\u4E22\u5931\u67D0\u4E9B\u8BBE\u7F6E\u3002 \u4F60\u60F3\u7EE7\u7EED\u5417\uFF1F"},weekday_picker:{title:"\u91CD\u590D\u5468\u671F",choose:"\u9009\u62E9..."},entity_picker:{title:"\u9009\u62E9\u5B9E\u4F53",choose:"\u9009\u62E9...",no_results:"\u672A\u627E\u5230\u5339\u914D\u9879"},action_picker:{title:"\u9009\u62E9\u52A8\u4F5C",show_all:"\u663E\u793A\u6240\u6709\u53D7\u652F\u6301\u7684\u5B9E\u4F53"}},panel:{common:{title:"\u8BA1\u5212\u4EFB\u52A1",new_schedule:"\u65B0\u5EFA\u4EFB\u52A1",default_name:"\u4EFB\u52A1 #{id}"},overview:{no_entries:"\u65E0\u4E8B\u9879",backend_error:"\u8BA1\u5212\u4EFB\u52A1\u7EC4\u4EF6\u5173\u8054\u5931\u8D25\u3002\u4F7F\u7528\u672C\u5361\u7247\u524D\uFF0C\u9700\u5148\u5B89\u88C5\u8BA1\u5212\u4EFB\u52A1\u7EC4\u4EF6\uFF08Scheduler component\uFF09\u96C6\u6210.",excluded_items:"\u5176\u4ED6{number}\u9879{if number is 1}\u4EFB\u52A1{else}\u4EFB\u52A1",hide_excluded:"\u9690\u85CF\u5176\u4ED6\u4EFB\u52A1",additional_tasks:"\u53E6\u6709{number}\u9879{if number is 1}\u4EFB\u52A1{else}\u4EFB\u52A1"},editor:{repeated_days:"\u91CD\u590D\u5468\u671F",start_time:"\u5F00\u59CB\u65F6\u95F4",stop_time:"\u7ED3\u675F\u65F6\u95F4",action:"\u52A8\u4F5C",add_action:"\u6DFB\u52A0\u52A8\u4F5C",select_timeslot:"\u9009\u62E9\u65F6\u95F4\u6BB5",toggle_single_mode:"\u5207\u6362\u4E3A\u5355\u6B21\u6A21\u5F0F",toggle_scheme_mode:"\u5207\u6362\u4E3A\u65B9\u6848\u6A21\u5F0F",validation_errors:{overlapping_time:"\u8BA1\u5212\u4EFB\u52A1\u5B58\u5728\u91CD\u53E0\u7684\u65F6\u95F4\u6BB5",missing_target_entity:"\u4E00\u4E2A\u6216\u591A\u4E2A\u52A8\u4F5C\u7F3A\u5C11\u76EE\u6807\u5B9E\u4F53",missing_service_parameter:"\u4E00\u4E2A\u6216\u591A\u4E2A\u64CD\u4F5C\u7F3A\u5C11\u5FC5\u8981\u8BBE\u7F6E",missing_action:"\u8BA1\u5212\u4EFB\u52A1\u672A\u8BBE\u7F6E\u4EFB\u4F55\u52A8\u4F5C"}},options:{conditions:{header:"\u6761\u4EF6",add_condition:"\u6DFB\u52A0\u6761\u4EF6",new_condition:"\u65B0\u5EFA\u6761\u4EF6",types:{equal_to:"{entity} \u7B49\u4E8E {value}",unequal_to:"{entity} \u4E0D\u7B49\u4E8E {value}",above:"{entity} \u5927\u4E8E {value}",below:"{entity} \u5C0F\u4E8E {value}"},options:{logic_and:"\u6240\u6709\u6761\u4EF6\u5FC5\u987B\u540C\u65F6\u6EE1\u8DB3\uFF08AND\uFF09",logic_or:"\u4EFB\u610F\u4E00\u4E2A\u6761\u4EF6\u6EE1\u8DB3\uFF08OR\uFF09",track_changes:"\u5F53\u6761\u4EF6\u53D8\u5316\u65F6\u91CD\u65B0\u5224\u65AD"}},period:{header:"\u751F\u6548\u65F6\u6BB5",start_date:"\u4ECE",end_date:"\u5230"},repeat_type:"\u4EFB\u52A1\u5B8C\u6210\u540E\u7684\u884C\u4E3A",tags:"\u6807\u7B7E"},card_editor:{tabs:{entities:"\u5B9E\u4F53",other:"\u5176\u4ED6"},fields:{title:{heading:"\u5361\u7247\u6807\u9898",options:{standard:"\u6807\u51C6",hidden:"\u9690\u85CF",custom:"\u81EA\u5B9A\u4E49"},custom_title:"\u81EA\u5B9A\u4E49\u6807\u9898"},discover_existing:{heading:"\u663E\u793A\u6240\u6709\u8BA1\u5212\u4EFB\u52A1",description:"\u8FD9\u5C06\u8BBE\u7F6E\u2018\u53D1\u73B0\u5DF2\u6709\u4EFB\u52A1(discover existing)\u2019\u53C2\u6570\u3002\u5DF2\u521B\u5EFA\u7684\u4EFB\u52A1\u4F1A\u81EA\u52A8\u6DFB\u52A0\u5230\u5361\u7247\u4E2D\u3002 "},time_step:{heading:"\u65F6\u95F4\u8C03\u6574\u6B65\u957F",description:"\u521B\u5EFA\u8BA1\u5212\u4EFB\u52A1\u65F6\uFF0C\u65F6\u95F4\u9009\u62E9\u5668\u6BCF\u6B21\u70B9\u51FB\u589E\u52A0\u6216\u51CF\u5C11\u7684\u5206\u949F\u6570",unit_minutes:"\u5206\u949F"},default_editor:{heading:"\u65B0\u5EFA\u4EFB\u52A1\u9ED8\u8BA4\u6A21\u5F0F",options:{single:"\u5355\u6B21\u4EFB\u52A1\u6A21\u5F0F",scheme:"\u65F6\u95F4\u65B9\u6848\u6A21\u5F0F"}},sort_by:{heading:"\u6392\u5E8F\u65B9\u5F0F",description:"\u8BA1\u5212\u4EFB\u52A1\u5728\u5361\u7247\u4E2D\u7684\u663E\u793A\u987A\u5E8F",options:{relative_time:"\u6309\u8DDD\u79BB\u4E0B\u6B21\u6267\u884C\u65F6\u95F4\u6392\u5E8F",title:"\u6309\u4EFB\u52A1\u6807\u9898\u6392\u5E8F",state:"\u4F18\u5148\u663E\u793A\u5DF2\u542F\u7528\u7684\u4EFB\u52A1"}},display_format_primary:{heading:"\u663E\u793A\u7684\u4E3B\u8981\u4FE1\u606F",description:"\u8BBE\u7F6E\u5361\u7247\u4E2D\u663E\u793A\u4EFB\u52A1\u7684\u4E3B\u8981\u4FE1\u606F",options:{default:"\u4EFB\u52A1\u540D\u79F0",entity_action:"\u4EFB\u52A1\u6982\u8981"}},display_format_secondary:{heading:"\u663E\u793A\u7684\u6B21\u8981\u4FE1\u606F",description:"\u8BBE\u7F6E\u5361\u7247\u4E2D\u663E\u793A\u4EFB\u52A1\u7684\u6B21\u8981\u4FE1\u606F",options:{relative_time:"\u4E0B\u6B21\u6267\u884C\u7684\u5269\u4F59\u65F6\u95F4",time:"\u4E0B\u6B21\u6267\u884C\u7684\u8BBE\u5B9A\u65F6\u95F4",days:"\u91CD\u590D\u5468\u671F\uFF08\u661F\u671F\uFF09",additional_tasks:"\u989D\u5916\u4EFB\u52A1\u6570\u91CF"}},show_header_toggle:{heading:"\u663E\u793A\u6807\u9898\u5F00\u5173",description:"\u5728\u5361\u7247\u9876\u90E8\u663E\u793A\u5207\u6362\u5F00\u5173\uFF0C\u7528\u4E8E\u542F\u7528/\u7981\u7528\u6240\u6709\u5B9E\u4F53"},show_toggle_switches:{heading:"\u663E\u793A\u5207\u6362\u5F00\u5173",description:"\u4E3A\u5361\u7247\u4E2D\u7684\u6BCF\u4E2A\u5355\u72EC\u8BA1\u5212\u663E\u793A\u5207\u6362\u5F00\u5173"},tags:{heading:"\u6807\u7B7E",description:"\u4F7F\u7528\u6807\u7B7E\u53EF\u5C06\u4E0D\u540C\u7684\u8BA1\u5212\u4EFB\u52A1\u5206\u914D\u5230\u591A\u4E2A\u5361\u7247\u4E2D"},entities:{button_label:"\u914D\u7F6E\u5305\u542B\u7684\u5B9E\u4F53\uFF08\u914D\u7F6E\u540E\u672A\u9009\u62E9\u7684\u5B9E\u4F53\u76F8\u5173\u4EFB\u52A1\u5C06\u4F1A\u9690\u85CF\uFF09",heading:"\u5305\u542B\u7684\u5B9E\u4F53",description:"\u9009\u62E9\u60A8\u5E0C\u671B\u901A\u8FC7\u8BA1\u5212\u4EFB\u52A1\u63A7\u5236\u7684\u5B9E\u4F53\u3002\u60A8\u53EF\u4EE5\u70B9\u51FB\u4E00\u4E2A\u5206\u7EC4\u5C06\u5176\u5C55\u5F00\u3002\u8BF7\u6CE8\u610F\uFF0C\u90E8\u5206\u5B9E\u4F53\uFF08\u4F8B\u5982\u4F20\u611F\u5668\uFF09\u53EA\u80FD\u7528\u4F5C\u89E6\u53D1\u6761\u4EF6\uFF0C\u800C\u4E0D\u80FD\u4F5C\u4E3A\u6267\u884C\u52A8\u4F5C\u3002",included_number:"\u5DF2\u9009\u62E9 {number}/{total}"}}}}},m8={services:d8,ui:l8}});function u(H,V,C=[],e=[]){let t;try{t=H.split(".").reduce((r,i)=>r[i],c0[V.locale.language]),t||(t=H.split(".").reduce((r,i)=>r[i],c0.en))}catch(r){try{t=H.split(".").reduce((i,o)=>i[o],c0.en)}catch(i){t=""}}if(C=[C||[]].flat(),e=[e||[]].flat(),C.length&&e.length&&t)for(let r=0;r<C.length;r++){t=t.replace(String(C[r]),String(e[r]));let i=t.match(/\{if ([a-z]+) is ([^\}]+)\}\ ?([^\{]+)\ ?\{else\}\ ?([^\{]+)/i);i&&String(C[r]).replace(/[\{\}']+/g,"")==i[1]&&(String(e[r])==i[2]?t=t.replace(i[0],i[3]):t=t.replace(i[0],i[4]))}let L=/\[([^\]]+)\]/.exec(t);return L&&(/\{([^\}]+)\}/.exec(L[1])?t=t.replace(L[0],""):t=t.replace(L[0],L[1])),t||console.log(`missing translation for ${H}`),t}var c0,C1=p(()=>{"use strict";D7();F7();R7();$7();z7();N7();I7();j7();W7();U7();G7();q7();Q7();K7();Y7();J7();X7();C4();e4();H4();V4();t4();L4();r4();i4();o4();c0={bg:h3,cs:g3,de:f3,el:y3,en:k3,es:c5,et:T3,es_419:c5,fi:B3,fr:D3,he:R3,hu:z3,it:I3,lv:W3,nb:Q2,nl:G3,nn:Q2,no:Q2,pl:K3,pt:J3,"pt-BR":C0,ro:H0,sk:r0,sl:o0,sv:M0,ru:t0,uk:s0,ur:l0,"zh-Hans":A0}});var J,S,u5,I=p(()=>{"use strict";J=H=>H.split(".")[1]||"",S=H=>H.split(".")[0]||"",u5=(H,V)=>{var C;return(V==null?void 0:V.friendly_name)===void 0?J(H).replace(/_/g," "):((C=V==null?void 0:V.friendly_name)!=null?C:"").toString()}});function j(H,V){let C=!1;if(!V)return!1;if(H.match(/^[a-z0-9_\.]+$/))C=!H.includes(".")&&V.includes(".")?H==S(V):H==V;else try{(H.startsWith("/")&&H.endsWith("/")||H.indexOf("*")!==-1)&&(H.startsWith("/")||(H=H.replace(/\./g,".").replace(/\*/g,".*"),H=`/^${H}$/`),C=new RegExp(H.slice(1,-1)).test(V))}catch(e){}return C}var o2=p(()=>{"use strict";I()});var m1,a2=p(()=>{"use strict";S1();I();o2();m1=(H,V)=>H.includes(".")?((V.include||U2).some(C=>j(C,H))||Object.keys(V.customize||{}).some(C=>j(C,H)))&&!(V.exclude||[]).some(C=>j(C,H)):((V.include||U2).map(S).some(C=>j(C,H))||Object.keys(V.customize||{}).map(S).some(C=>j(C,H)))&&!(V.exclude||[]).some(C=>j(C,H))});var A1,y2=p(()=>{"use strict";A1=(H,V)=>((e,t)=>e<t?-1:e>t?1:0)(H.toLowerCase(),V.toLowerCase())});var z,G1=p(()=>{"use strict";z=H=>{let V=H.trim();return V.charAt(0).toUpperCase()+V.slice(1)}});var c,N=p(()=>{"use strict";c=(H,V,C=!0)=>{let e=V.localize(H);return e||!C?e:`{${H.split(".").pop()}}`}});var p1,v5=p(()=>{"use strict";p1={alarm_control_panel:{alarm_disarm:{target:{}},alarm_arm_home:{supported_features:1,target:{}},alarm_arm_away:{supported_features:2,target:{}},alarm_arm_night:{supported_features:4,target:{}},alarm_arm_custom_bypass:{supported_features:16,target:{}},alarm_arm_vacation:{supported_features:32,target:{}}},automation:{turn_on:{translation_key:"services.generic.turn_on",target:{}},turn_off:{translation_key:"services.generic.turn_off",target:{}},trigger:{target:{}}},button:{press:{target:{}}},climate:{turn_off:{translation_key:"services.generic.turn_off",target:{},supported_features:128},turn_on:{translation_key:"services.generic.turn_on",target:{},supported_features:256},set_hvac_mode:{translation_key:"services.climate.set_hvac_mode",target:{},fields:{hvac_mode:{}}},set_temperature:{translation_key:["services.climate.set_temperature","services.climate.set_temperature_hvac_mode_heat","services.climate.set_temperature_hvac_mode_cool","services.climate.set_temperature_hvac_mode_heat_cool"],target:{},fields:{temperature:{supported_features:1},target_temp_high:{supported_features:2},target_temp_low:{supported_features:2},hvac_mode:{optional:!0}}},set_preset_mode:{translation_key:"services.climate.set_preset_mode",supported_features:16,target:{},fields:{preset_mode:{}}},set_fan_mode:{translation_key:"services.climate.set_fan_mode",supported_features:8,target:{},fields:{fan_mode:{}}},set_swing_mode:{translation_key:"services.climate.set_swing_mode",supported_features:32,target:{},fields:{swing_mode:{}}}},cover:{close_cover:{translation_key:"services.cover.close_cover",supported_features:2,target:{}},open_cover:{translation_key:"services.cover.open_cover",supported_features:1,target:{}},set_cover_position:{translation_key:"services.cover.set_cover_position",supported_features:4,target:{},fields:{position:{}}},close_cover_tilt:{supported_features:32,target:{}},open_cover_tilt:{supported_features:16,target:{}},set_cover_tilt_position:{translation_key:"services.cover.set_cover_tilt_position",supported_features:128,target:{},fields:{tilt_position:{}}}},fan:{turn_on:{translation_key:"services.generic.turn_on",target:{}},turn_off:{translation_key:"services.generic.turn_off",target:{}},set_percentage:{translation_key:"services.fan.set_percentage",supported_features:1,target:{},fields:{percentage:{}}},oscillate:{translation_key:"services.fan.oscillate",supported_features:2,target:{},fields:{oscillating:{}}},set_direction:{translation_key:"services.fan.set_direction",supported_features:4,target:{},fields:{direction:{}}},set_preset_mode:{translation_key:"services.climate.set_preset_mode",supported_features:8,target:{},fields:{preset_mode:{}}}},humidifier:{turn_on:{translation_key:"services.generic.turn_on",target:{}},turn_off:{translation_key:"services.generic.turn_off",target:{}},set_humidity:{translation_key:"services.humidifier.set_humidity",target:{},fields:{humidity:{}}},set_mode:{translation_key:"services.humidifier.set_mode",supported_features:1,target:{},fields:{mode:{}}}},input_boolean:{turn_on:{translation_key:"services.generic.turn_on",target:{}},turn_off:{translation_key:"services.generic.turn_off",target:{}}},input_button:{press:{target:{}}},input_number:{set_value:{translation_key:"services.input_number.set_value",target:{},fields:{value:{}}}},input_select:{select_option:{translation_key:"services.input_select.select_option",target:{},fields:{option:{}}}},lawn_mower:{start_mowing:{target:{},supported_features:1},pause:{target:{},supported_features:2},dock:{target:{},supported_features:4}},light:{turn_on:{translation_key:"services.light.turn_on",target:{},fields:{brightness:{optional:!0}}},turn_off:{translation_key:"services.generic.turn_off",target:{}}},lock:{lock:{target:{}},unlock:{target:{}}},media_player:{turn_on:{translation_key:"services.generic.turn_on",target:{}},turn_off:{translation_key:"services.generic.turn_off",target:{}},select_source:{translation_key:"services.media_player.select_source",supported_features:2048,target:{},fields:{source:{}}}},notify:{"{entity_id}":{translation_key:"services.notify.send_message",fields:{title:{optional:!0},message:{}}}},number:{set_value:{translation_key:"services.input_number.set_value",target:{},fields:{value:{}}}},scene:{turn_on:{target:{}}},script:{"{entity_id}":{translation_key:"services.script.execute"}},select:{select_option:{translation_key:"services.input_select.select_option",target:{},fields:{option:{}}}},switch:{turn_on:{translation_key:"services.generic.turn_on",target:{}},turn_off:{translation_key:"services.generic.turn_off",target:{}}},vacuum:{turn_on:{translation_key:"services.generic.turn_on",supported_features:1,target:{}},start:{supported_features:8192,target:{}},play_pause:{target:{}}},valve:{open_valve:{supported_features:1,target:{}},close_valve:{supported_features:2,target:{}},set_valve_position:{translation_key:"services.cover.set_cover_position",supported_features:4,target:{},fields:{position:{}}}},water_heater:{set_temperature:{translation_key:"services.climate.set_temperature",supported_features:1,target:{},fields:{temperature:{}}},set_operation_mode:{translation_key:"services.water_heater.set_operation_mode",supported_features:2,target:{},fields:{operation_mode:{}}},set_away_mode:{translation_key:"services.water_heater.set_away_mode",supported_features:4,target:{},fields:{away_mode:{}}},turn_off:{translation_key:"services.generic.turn_off",target:{},supported_features:8},turn_on:{translation_key:"services.generic.turn_on",target:{},supported_features:8}}}});var v0,D,x5=p(()=>{"use strict";q();v0=H=>{if(typeof H!="object"||!Object.keys(H).length||!Object.keys(H).every(C=>typeof C=="string"))return null;let V={value:"",label:""};return Object.keys(H).includes("name")?V=A(n({},V),{label:String(H.name)}):Object.keys(H).includes("label")?V=A(n({},V),{label:String(H.label)}):Object.keys(H).includes("value")&&(V=A(n({},V),{label:String(H.value)})),Object.keys(H).includes("value")?V=A(n({},V),{value:String(H.value)}):Object.keys(H).includes("name")?V=A(n({},V),{value:String(H.name)}):Object.keys(H).includes("label")&&(V=A(n({},V),{value:String(H.label)})),Object.keys(H).includes("icon")&&g(H.icon)&&(V=A(n({},V),{icon:String(H.icon)})),!V.value.length||!V.label.length?null:V},D=H=>{let V={select:{options:Array.isArray(H.options)?H.options.every(C=>typeof C=="string")?H.options:H.options.map(v0).filter(g):[]}};return H.translation_key&&(V=A(n({},V),{select:A(n({},V.select),{translation_key:H.translation_key})})),V}});var x0,M4=p(()=>{"use strict";s5();q();x5();x0=(H,V)=>{if(H.hasOwnProperty("service")&&H.service!==V.service)return!1;let C=H.service_data||{},e=V.service_data||{},t=H.hasOwnProperty("variables")?H.variables||{}:H.hasOwnProperty("fields")?H.fields||{}:{},L=[...new Set([...Object.keys(C),...Object.keys(e),...Object.keys(t)])];return L=L.filter(r=>r!="entity_id"),!!L.every(r=>{var i;if(Object.keys(C).includes(r)&&Object.keys(e).includes(r))return P1(C[r],e[r]);if(Object.keys(t).includes(r)){let o=t[r],a=e[r];if(Object.keys(o).includes("options")){let M=D({options:o.options});return g(a)?(i=M.select)==null?void 0:i.options.find(d=>typeof d=="string"?d==a:d.value==a):!0}else return Object.keys(o).includes("min")&&Object.keys(o).includes("max")?!g(a)&&Object.keys(o).includes("optional")&&o.optional?!0:typeof a=="number":!0}return!1})}});var q1,n4,K2=p(()=>{"use strict";I();q();o2();q1=(H,V)=>{let C=[];return Object.keys(H).filter(e=>{var t;return(t=H[e].actions)==null?void 0:t.length}).filter(e=>!V||!V.includes(".")&&j(S(e),V)||j(e,V)||V.includes(".")&&H[e].actions.find(t=>t.service==V)).forEach(e=>{Object.values(H[e].actions).forEach(t=>{if(t.service.includes(".")||(t=A(n({},t),{service:`${S(e)}.${t.service}`})),e.includes(".")&&S(e)!="script"&&(t=A(n({},t),{target:{entity_id:e}})),S(e)!="script"&&(!e.includes(".")||S(V||"")=="script")){if(V!=null&&V.includes(".")&&t.service!=V)return;t=A(n({},t),{target:A(n({},t.target),{domain:e})})}C.push({service:t.service,service_data:t.service_data||{},target:t.target?t.target:void 0,name:t.name||"",icon:t.icon||"",variables:t.variables})})}),C},n4=(H,V)=>Object.keys(H).filter(C=>{var e;return(e=H[C].exclude_actions)==null?void 0:e.length}).filter(C=>!V||!V.includes(".")&&j(S(C),V)||j(C,V)).map(C=>H[C].exclude_actions).flat().filter(g)});var a1,M2=p(()=>{"use strict";I();q();v5();M4();K2();a1=(H,V)=>{var i;let C=S(H.service),e=J(H.service),t={};if(Object.keys(p1).includes(C)&&(Object.keys(p1[C]).includes(e)?t=n(n({},t),p1[C][e]):Object.keys(p1[C]).includes("{entity_id}")&&(t=n(n({},t),p1[C]["{entity_id}"]))),!V)return t;let L;["script","notify"].includes(C)?L=H.service:L=(i=H.target)==null?void 0:i.entity_id,L||(L=H.service);let r=q1(V,[L].flat().pop());if(r.length){let o=r.map(a=>{if(!x0(a,H))return null;let d={};return Object.keys(a.variables||{}).forEach(s=>{d=A(n({},d),{fields:A(n({},d.fields||{}),{[s]:{}})})}),A(n({},d),{name:a.name||t.name,icon:a.icon||t.icon,target:a.target||t.target})}).filter(g);if(o.length&&!x0(t,H))return o[0]}return t}});var Y2,h0=p(()=>{"use strict";Y2=H=>{let V=Math.pow(10,5);return H=Math.round(H*V)/V,H}});var h5,Z0=p(()=>{"use strict";N();h0();h5=(H,V,C)=>{if(!V)return H;if(Object.keys(V).includes("select")&&V.select){let e=V.select,t=e.options.map(r=>typeof r=="string"?Object({value:r,label:r}):r),L=t==null?void 0:t.find(r=>r.value==H);e.translation_key?H=c(e.translation_key.replace("${value}",H),C,!1)||L?L==null?void 0:L.label:H:L&&(H=L.label)}if(Object.keys(V).includes("number")&&V.number){let e=V.number;if(H=Number(H),typeof(e==null?void 0:e.scale_factor)=="number"&&(H=H/e.scale_factor),typeof(e==null?void 0:e.step)=="number"&&(H=Math.round(H/e.step)*e.step),H=Y2(H),e!=null&&e.unit)return`${H}${e.unit}`}return Object.keys(V).includes("boolean")&&V.boolean&&(H=H?"True":"False"),H}});var M1,g0=p(()=>{"use strict";M1=H=>{let V={number:{}};return Object.keys(H).includes("min")&&!isNaN(Number(H.min))&&(V=A(n({},V),{number:A(n({},V.number),{min:Number(H.min)})})),Object.keys(H).includes("max")&&!isNaN(Number(H.max))&&(V=A(n({},V),{number:A(n({},V.number),{max:Number(H.max)})})),Object.keys(H).includes("step")&&!isNaN(Number(H.step))&&H.step>0&&(V=A(n({},V),{number:A(n({},V.number),{step:Number(H.step)})})),Object.keys(H).includes("mode")&&["box","slider"].includes(H.mode)&&(V=A(n({},V),{number:A(n({},V.number),{mode:H.mode})})),Object.keys(H).includes("unit")&&H.unit&&(V=A(n({},V),{number:A(n({},V.number),{unit:H.unit})})),Object.keys(H).includes("optional")&&(V=A(n({},V),{number:A(n({},V.number),{optional:!!H.optional})})),Object.keys(H).includes("scale_factor")&&!isNaN(Number(H.scale_factor))&&(V=A(n({},V),{number:A(n({},V.number),{scale_factor:Number(H.scale_factor)})})),V}});var V1,Z5=p(()=>{"use strict";V1={alarm_control_panel:{services:{alarm_arm_away:"mdi:shield-lock",alarm_arm_home:"mdi:shield-home",alarm_arm_night:"mdi:shield-moon",alarm_custom_bypass:"mdi:security",alarm_disarm:"mdi:shield-off",alarm_trigger:"mdi:bell-ring",alarm_arm_vacation:"mdi:shield-airplane"}},automation:{services:{turn_on:"mdi:robot",turn_off:"mdi:robot-off",trigger:"mdi:play"}},button:{services:{press:"mdi:gesture-tap-button"}},climate:{services:{set_temperature:"mdi:thermometer",set_hvac_mode:"mdi:cog-transfer-outline",set_preset_mode:"mdi:cloud-download-outline",set_fan_mode:"mdi:fan",set_humidity:"mdi:water-percent",set_swing_mode:"mdi:arrow-oscillating"},attributes:{hvac_mode:{auto:"mdi:autorenew",cool:"mdi:snowflake",dry:"mdi:water-percent",fan_only:"mdi:fan",heat:"mdi:fire",heat_cool:"mdi:thermometer",off:"mdi:power"},preset_mode:{activity:"mdi:motion-sensor",away:"mdi:account-arrow-right",boost:"mdi:rocket-launch",comfort:"mdi:sofa",eco:"mdi:leaf",home:"mdi:home",sleep:"mdi:bed"},fan_mode:{diffuse:"mdi:weather-windy",focus:"mdi:target",high:"mdi:speedometer",low:"mdi:speedometer-slow",medium:"mdi:speedometer-medium",middle:"mdi:speedometer-medium",off:"mdi:fan-off",on:"mdi:fan"},swing_mode:{both:"mdi:arrow-all",horizontal:"mdi:arrow-left-right",off:"mdi:arrow-oscillating-off",on:"mdi:arrow-oscillating",vertical:"mdi:arrow-up-down"}}},cover:{services:{close_cover:"mdi:arrow-down-box",close_cover_tilt:"mdi:arrow-bottom-left",open_cover:"mdi:arrow-up-box",open_cover_tilt:"mdi:arrow-top-right",set_cover_position:"mdi:arrow-down-box",set_cover_tilt_position:"mdi:arrow-top-right"}},fan:{services:{oscillate:"mdi:arrow-oscillating",set_percentage:"mdi:fan",set_preset_mode:"mdi:fan-auto",turn_off:"mdi:fan-off",turn_on:"mdi:fan"}},humidifier:{services:{set_humidity:"mdi:water-percent",set_mode:"mdi:air-humidifier",turn_off:"mdi:air-humidifier-off",turn_on:"mdi:air-humidifier"},attributes:{mode:{auto:"mdi:refresh-auto",away:"mdi:account-arrow-right",baby:"mdi:baby-carriage",boost:"mdi:rocket-launch",comfort:"mdi:sofa",eco:"mdi:leaf",home:"mdi:home",normal:"mdi:water-percent",sleep:"mdi:power-sleep"}}},input_boolean:{services:{turn_off:"mdi:toggle-switch-off",turn_on:"mdi:toggle-switch"}},input_button:{services:{press:"mdi:gesture-tap-button"}},input_number:{services:{set_value:"mdi:counter"}},input_select:{services:{select_option:"mdi:counter"}},lawn_mower:{services:{dock:"mdi:home-import-outline",start_mowing:"mdi:play",pause:"mdi:pause"}},light:{services:{turn_off:"mdi:lightbulb-off",turn_on:"mdi:lightbulb-on"}},lock:{services:{lock:"mdi:lock",unlock:"mdi:lock-open"}},media_player:{services:{media_play:"mdi:play",media_stop:"mdi:stop",play_media:"mdi:play",select_source:"mdi:import",turn_off:"mdi:power",turn_on:"mdi:power"}},notify:{services:{"{entity_id}":"mdi:message-alert"}},scene:{services:{turn_on:"mdi:play"}},script:{services:{turn_on:"mdi:flash",turn_off:"mdi:flash-off","{entity_id}":"mdi:play"}},select:{services:{select_option:"mdi:counter"}},switch:{services:{turn_off:"mdi:toggle-switch-variant-off",turn_on:"mdi:toggle-switch-variant"}},vacuum:{services:{send_command:"mdi:send",start:"mdi:play",turn_off:"mdi:stop",turn_on:"mdi:play"}},valve:{services:{open_valve:"mdi:valve-open",close_valve:"mdi:valve-closed",set_valve_position:"mdi:valve"}},water_heater:{services:{set_away_mode:"mdi:account-arrow-right",set_operation_mode:"mdi:water-boiler",set_temperature:"mdi:thermometer",turn_off:"mdi:water-boiler-off",turn_on:"mdi:water-boiler"},attributes:{operation_mode:{eco:"mdi:leaf",electric:"mdi:lightning-bolt",gas:"mdi:fire-circle",heat_pump:"mdi:heat-wave",high_demand:"mdi:finance",off:"mdi:power",performance:"mdi:rocket-launch"}}}}});var Q1,p8,c8,f0,S0,b2=p(()=>{"use strict";x5();g0();I();K2();q();Z5();Q1=(H,V,C,e,t)=>{let L=S(H),r=["script","notify"].includes(L)?[H]:[V||[]].flat(),i=r.map(d=>p8(d,C,e)),o=S0(i),a=r.map(d=>c8(H,d,C,t));return S0(a)||o},p8=(H,V,C)=>{let e=Object.keys(C.states).includes(H)?C.states[H]:null,t=(e==null?void 0:e.attributes)||{},L=S(H),r=`${L}.${V}`,i=o=>{var d,s;let a=(s=(d=V1[L])==null?void 0:d.attributes)==null?void 0:s[V],M=!!a&&(o||[]).every(x=>x in a);return(o||[]).map(x=>({value:x,label:x,icon:M?a[x]:void 0}))};switch(r){case"climate.temperature":case"climate.target_temp_low":case"climate.target_temp_high":{let o=r=="climate.temperature"?((t.supported_features||0)&2)>0:((t.supported_features||0)&1)>0,a=C.config.unit_system.temperature.includes("F")?1:.5;return M1({min:t.min_temp,max:t.max_temp,step:t.target_temp_step||a,unit:`${C.config.unit_system.temperature}`,optional:o})}case"climate.hvac_mode":return D({options:i(t.hvac_modes),translation_key:"component.climate.entity_component._.state.${value}"});case"climate.preset_mode":return D({options:i(t.preset_modes),translation_key:"state_attributes.climate.preset_mode.${value}"});case"climate.fan_mode":return D({options:i(t.fan_modes)});case"climate.swing_mode":return D({options:i(t.swing_modes)});case"cover.position":case"cover.tilt_position":case"fan.percentage":case"valve.position":return M1({min:0,max:100,step:1,unit:"%"});case"fan.oscillating":return{boolean:{}};case"fan.direction":return D({options:i(["forward","reverse"]),translation_key:"ui.card.fan.${value}"});case"fan.preset_mode":return D({options:i(t.preset_modes)});case"humidifier.humidity":return M1({min:t.min_humidity,max:t.max_humidity,step:1,unit:"%"});case"humidifier.mode":return D({options:i(t.available_modes),translation_key:"component.humidifier.entity_component._.state_attributes.mode.state.${value}"});case"input_number.value":case"number.value":return M1({min:t.min,max:t.max,step:t.step,mode:t.mode,unit:t.unit_of_measurement});case"input_select.option":case"select.option":return D({options:i(t.options)});case"light.brightness":return M1({min:0,max:100,step:1,unit:"%",scale_factor:2.55});case"media_player.source":case"notify.title":return{text:{}};case"notify.message":return{text:{}};case"water_heater.temperature":{let o=C.config.unit_system.temperature.includes("F")?1:.5;return M1({min:t.min_temp,max:t.max_temp,step:t.target_temp_step||o,unit:`${C.config.unit_system.temperature}`})}case"water_heater.operation_mode":return D({options:i(t.operation_list)});case"water_heater.away_mode":return{boolean:{}}}return null},c8=(H,V,C,e)=>{let t=q1(e||{},V);if(t.length){let L=t.map(r=>{if(r.service!=H||!Object.keys(r.variables||{}).includes(C))return null;let i=(r.variables||{})[C];return f0(i)}).filter(r=>r!==void 0);return S0(L)}return null},f0=H=>Object.keys(H).includes("options")?D({options:H.options}):Object.keys(H).includes("min")&&Object.keys(H).includes("max")?M1(H):{text:{}},S0=H=>{let V=C=>new Set(C).size==1;if(H.some(C=>C===null)||!H.length)return null;if(H.every(C=>C.hasOwnProperty("select"))){let C=H.map(L=>L.select.options).filter(L=>L!==void 0),e=[];if(C.every(L=>L.every(r=>typeof r=="string")))e=C.length?C.reduce((L,r)=>L.filter(i=>r.includes(i))):[];else{let L=C.map(r=>r.map(i=>v0(typeof i=="object"?i:{value:i})).filter(g));e=L.length?L.reduce((r,i)=>r.filter(o=>i.find(a=>a.value===o.value))):[]}let t=H.map(L=>L.select.translation_key).filter(L=>L!==void 0);return{select:{options:e.length?e:[],translation_key:t.length&&V(t)?t[0]:void 0}}}else if(H.every(C=>C.hasOwnProperty("number"))){let C=H.map(M=>M.number.min).filter(M=>M!==void 0),e=H.map(M=>M.number.max).filter(M=>M!==void 0),t=H.map(M=>M.number.step).filter(M=>M!==void 0),L=H.map(M=>M.number.mode).filter(M=>M!==void 0),r=H.map(M=>M.number.unit).filter(M=>M!==void 0),i=H.map(M=>M.number.optional),o=H.map(M=>M.number.scale_factor).filter(M=>M!==void 0);return{number:{min:C.length?Math.max(...C):void 0,max:e.length?Math.min(...e):void 0,step:t.length?Math.max(...t):void 0,mode:L.length&&V(L)?L[0]:void 0,unit:r.length&&V(r)?r[0]:void 0,optional:i.every(M=>M),scale_factor:o.length&&V(o)?o[0]:void 0}}}else{if(H.every(C=>C.hasOwnProperty("boolean")))return{boolean:{}};if(H.every(C=>C.hasOwnProperty("text")))return{text:{}}}return null}});var u8,s4,d4,l4,f1,J2=p(()=>{"use strict";I();C1();M2();Z0();N();q();b2();u8=/\[([^\]]+)\]/,s4=/\{([^\}]+)\}/,d4=100,l4=(H,V)=>{let C=J(V.service);return H.indexOf(C)!=-1&&(H=H.substring(H.indexOf(C)+C.length+1)),Object.keys(V.service_data).reduce((e,t)=>{if(H.indexOf(t)==-1)return e;let L=H.substring(H.indexOf(t)+t.length+1);return L==V.service_data[t]?e+H.length+L.length+1:e},0)},f1=(H,V,C,e=!1,t=!1)=>{let L=a1(H,C),r=L.name||"",i=Object.fromEntries(Object.entries(H.service_data).filter(([d,s])=>g(s)).map(([d,s])=>{var h;let x=Q1(H.service,(h=H.target)==null?void 0:h.entity_id,d,V,C);return x?[d,h5(s,x,V)]:[d,null]}).filter(([d,s])=>g(s)));if(e){if(Object.keys(i).length>1){let d=(s,x)=>{let h=!!L.fields&&L.fields[s]||{},y=!!L.fields&&L.fields[x]||{};return h!=null&&h.optional&&!y.optional?1:y!=null&&y.optional&&!h.optional||s<x?-1:s>x?1:0};return i=Object.fromEntries(Object.entries(i).sort(([s],[x])=>d(s,x))),Object.values(i).join(", ")}else if(Object.keys(i).length)return Object.values(i)[0]}if(L!=null&&L.translation_key&&!r){let d="";if(Array.isArray(L.translation_key)){let s=L.translation_key;s.sort((x,h)=>{let y=l4(x,H),b=l4(h,H);return y!=b?b-y:x.length-h.length}),d=s[0]}else d=L.translation_key;r=u(d,V,Object.keys(i).map(s=>`{${s}}`),Object.values(i))}else{let d=S(H.service),s=J(H.service);r||(r=c(`component.${d}.services.${s}.name`,V,!1)),!r&&Object.keys(V.services[d]||{}).includes(s)&&(r=V.services[d][s].name||""),r||(r=s.replace(/_/g," "))}let o,a=0;for(;(o=u8.exec(r))&&a<d4;){a++;let d=o[1].match(s4);d&&Object.keys(H.service_data||{}).includes(d[1])&&Object.keys(i).includes(d[1])?r=r.replace(o[0],o[1].replace(d[0],i[d[1]])):r=r.replace(o[0],"")}let M;for(a=0;(M=s4.exec(r))&&a<d4;)a++,Object.keys(i).includes(M[1])?r=r.replace(M[0],i[M[1]]):r=r.replace(M[0],"");return t&&/<.+?>/g.exec(r)!==null&&(r=new DOMParser().parseFromString(r,"text/html").body.textContent||""),r}});var m4,A4,_1,g5=p(()=>{"use strict";C1();U();m4=()=>{try{new Date().toLocaleDateString("i")}catch(H){return H.name==="RangeError"}return!1},A4=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],_1=(H,V,C)=>{let e;if(H instanceof Date){let t=H.getDay();if(e="friday",m4())return H.toLocaleDateString(C.locale.language,{weekday:V});{let L=H.getDay();e="friday"}}else e=H;switch(e){case"daily":return u(`ui.components.date.day_types_${V}.daily`,C);case"workday":return u(`ui.components.date.day_types_${V}.workdays`,C);case"weekend":return u(`ui.components.date.day_types_${V}.weekend`,C);case"monday":case"tuesday":case"wednesday":case"thursday":case"friday":case"saturday":case"sunday":let t=new Date(2017,1,26),L=A4.findIndex(r=>r==e);return m4()?(t.setDate(t.getDate()+L),t.toLocaleDateString(C.locale.language,{weekday:V})):A4[L];default:return""}}});var _0,v8,p4,S5,f5=p(()=>{"use strict";N();C1();U();g5();_0=H=>{let V=H.locale.first_weekday;if(!V||V=="language"){if("weekInfo"in Intl.Locale.prototype)return new Intl.Locale(H.locale.language).weekInfo.firstDay%7;{let C="AEAFBHDJDZEGIQIRJOKWLYOMQASDSY".match(/../g),e="AGARASAUBDBRBSBTBWBZCACNCODMDOETGTGUHKHNIDILINJMJPKEKHKRLAMHMMMOMTMXMZNINPPAPEPHPKPRPTPYSASGSVTHTTTWUMUSVEVIWSYEZAZW".match(/../g),t=["ar","arq","arz","fa"],L="amasbndzengnguhehiidjajvkmknkolomhmlmrmtmyneomorpapssdsmsnsutatethtnurzhzu".match(/../g),r=H.locale.language.match(/^([a-z]{2,3})(?:-([a-z]{3})(?=$|-))?(?:-([a-z]{4})(?=$|-))?(?:-([a-z]{2}|\d{3})(?=$|-))?/i);return r[1]?e.includes(r[4])?0:C.includes(r[4])?6:1:L.includes(r[1])?0:t.includes(r[1])?6:1}}else return p4.map(C=>C.toLowerCase()).findIndex(C=>C==V)},v8=H=>{let V=[];for(let C=0;C<H.length-1;C++){let e=C+1;for(;H[e]-H[e-1]==1;)e++;V.push(e-C)}return V},p4=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],S5=(H,V,C)=>{let e="",t=_0(C),r=((M,d)=>M.concat(M).slice(d,d+M.length))(p4,t);H.sort((M,d)=>{let s=r.findIndex(h=>h==M),x=r.findIndex(h=>h==d);return s-x});let i=H.filter(M=>r.includes(M)).map(M=>r.findIndex(d=>d==M)),o=v8(i),a=Math.max(...o);if(i.length){if(H.length>i.length&&(e+=H.filter(M=>!r.includes(M)).map(M=>_1(M,V,C)).join(", "),e+=", "),i.length==6){let M=[0,1,2,3,4,5,6].filter(s=>!i.includes(s)),d=_1(r[M.pop()],V,C);e+=u("ui.components.date.repeated_days_except",C,"{excludedDays}",d)}else{let M=i.map(s=>_1(r[s],V,C));if(i.length>=3&&a>=3){let s=o.reduce((x,h,y)=>h==a?y:x,0);M.splice(s,a,u("ui.components.date.days_range",C,["{startDay}","{endDay}"],[M[s],M[s+a-1]]))}let d=M.length>1?`${M.slice(0,-1).join(", ")} ${c("ui.common.and",C)} ${M.pop()}`:`${M.pop()}`;e+=i.length>=3&&a>=3?d:u("ui.components.date.repeated_days",C,"{days}",d)}return e}return H.map(M=>_1(M,V,C)).join(", ")}});var y1,k2=p(()=>{"use strict";I();q();o2();y1=(H,V,C)=>{let e=Object.entries(C||{}).filter(([t,L])=>j(t,H)&&L.name).map(([t,L])=>L.name);return e.filter(g).length?e.filter(g)[0]:Object.keys(V.states).includes(H)&&V.states[H].attributes.friendly_name?V.states[H].attributes.friendly_name:J(H).replace(/_/g," ")}});var y5,y0=p(()=>{"use strict";c3();y5=(H,V)=>H.callWS({type:"scheduler/item",schedule_id:V}).then(C=>d5(C))});var $,b1=p(()=>{"use strict";$=(H,V,C,e)=>{e=e||{},C=C==null?{}:C;let t=new Event(V,{bubbles:e.bubbles===void 0?!0:e.bubbles,cancelable:!!e.cancelable,composed:e.composed===void 0?!0:e.composed});return t.detail=C,H.dispatchEvent(t),t}});var k5,b0=p(()=>{"use strict";k5=H=>H.callWS({type:"scheduler/tags"})});var c4,u4,O5,O2,v4,x4,h4,t1,Z4,g4,K1,w5,k0,S4,f4,_4,y4,b4,n1=p(()=>{c4="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",u4="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z",O5="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",O2="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",v4="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",x4="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",h4="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z",t1="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Z4="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",g4="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",K1="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",w5="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",k0="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z",S4="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z",f4="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z",_4="M18.17,12L15,8.83L16.41,7.41L21,12L16.41,16.58L15,15.17L18.17,12M5.83,12L9,15.17L7.59,16.59L3,12L7.59,7.42L9,8.83L5.83,12Z",y4="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z",b4="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z"});var k4,D1,C5=p(()=>{"use strict";k4={alarm_control_panel:"mdi:alarm-light-outline",air_quality:"mdi:air-filter",alert:"mdi:alert",automation:"mdi:robot",binary_sensor:"mdi:radiobox-blank",button:"mdi:gesture-tap-button",camera:"mdi:camera",calendar:"mdi:calendar",cover:"mdi:window-shutter",climate:"mdi:thermostat",configurator:"mdi:cog",conversation:"mdi:microphone-message",counter:"mdi:counter",date:"mdi:calendar",datetime:"mdi:calendar-clock",demo:"mdi:home-assistant",device_tracker:"mdi:account",fan:"mdi:fan",google_assistant:"mdi:google-assistant",group:"mdi:google-circles-communities",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",humidifier:"mdi:air-humidifier",image_processing:"mdi:image-filter-frames",image:"mdi:image",input_boolean:"mdi:toggle-switch",input_button:"mdi:button-pointer",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:form-textbox",lawn_mower:"mdi:robot-mower",light:"mdi:lightbulb",lock:"mdi:lock-open-outline",media_player:"mdi:cast-connected",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",number:"mdi:ray-vertex",persistent_notification:"mdi-bell",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",schedule:"mdi:calendar-clock",script:"mdi:script-text",select:"mdi:format-list-bulleted",sensor:"mdi:eye",simple_alarm:"mdi:bell",siren:"mdi:bullhorn",stt:"mdi:microphone-message",sun:"mdi:white-balance-sunny",switch:"mdi:flash",text:"mdi:form-textbox",time:"mdi:clock",timer:"mdi:timer-outline",todo:"mdi:clipboard-list",tts:"mdi:speaker-message",vacuum:"mdi:robot-vacuum",valve:"mdi:valve-closed",wake_word:"mdi:chat-sleep",water_heater:"mdi:water-boiler",weather:"mdi:weather-partly-cloudy",zone:"mdi:map-marker-radius"},D1=H=>Object.keys(k4).includes(H)?k4[H]:"mdi:help"});var f8,T5,O0=p(()=>{"use strict";v5();C5();I();N();a2();f8=(H,V)=>{let C=Object.keys(p1).includes(H);return!C&&V?Object.keys(V).map(S).includes(H):C},T5=(H,V)=>{let C=Object.keys(H.services).filter(t=>f8(t,V.customize));return C=C.filter(t=>m1(t,V)),C.map(t=>({key:t,name:c(`component.${t}.title`,H,!1)||t.replace(/_/g," "),description:"",icon:D1(t)}))}});var P5,B5,w2,w0=p(()=>{P5={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},B5=H=>(...V)=>({_$litDirective$:H,values:V}),w2=class{constructor(V){}get _$AU(){return this._$AM._$AU}_$AT(V,C,e){this._$Ct=V,this._$AM=C,this._$Ci=e}_$AS(V,C){return this.update(V,C)}update(V,C){return this.render(...C)}}});var O4,_8,x1,w4=p(()=>{x2();w0();O4="important",_8=" !"+O4,x1=B5(class extends w2{constructor(H){var V;if(super(H),H.type!==P5.ATTRIBUTE||H.name!=="style"||((V=H.strings)===null||V===void 0?void 0:V.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(H){return Object.keys(H).reduce(((V,C)=>{let e=H[C];return e==null?V:V+`${C=C.includes("-")?C:C.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`}),"")}update(H,[V]){let{style:C}=H.element;if(this.ht===void 0){this.ht=new Set;for(let e in V)this.ht.add(e);return this.render(V)}this.ht.forEach((e=>{V[e]==null&&(this.ht.delete(e),e.includes("-")?C.removeProperty(e):C[e]="")}));for(let e in V){let t=V[e];if(t!=null){this.ht.add(e);let L=typeof t=="string"&&t.endsWith(_8);e.includes("-")||L?C.setProperty(e,L?t.slice(0,-11):t,L?O4:""):C[e]=t}}return u1}})});var e5=p(()=>{w4()});var T4,P4,B4=p(()=>{"use strict";I();T4={alarm_control_panel:{disarmed:"mdi:lock-open-variant-outline",armed_away:"mdi:exit-run",armed_home:"mdi:home-outline",armed_night:"mdi:power-sleep",armed_custom_bypass:"mdi:security",armed_vacation:"mdi:shield-airplane",triggered:"mdi:alarm-light-outline"},binary_sensor:{battery:{on:"mdi:battery-outline",off:"mdi:battery"},battery_charging:{on:"mdi:battery-charging",off:"mdi:battery"},cold:{on:"mdi:snowflake",off:"mdi:thermometer"},connectivity:{on:"mdi:server-network",off:"mdi:server-network-off"},door:{on:"mdi:door-open",off:"mdi:door-closed"},garage_door:{on:"mdi:garage-open",off:"mdi:garage"},power:{on:"mdi:power-plug",off:"mdi:power-plug-off"},gas:{on:"mdi:alert-circle",off:"mdi:check-circle"},problem:{on:"mdi:alert-circle",off:"mdi:check-circle"},safety:{on:"mdi:alert-circle",off:"mdi:check-circle"},tamper:{on:"mdi:alert-circle",off:"mdi:check-circle"},smoke:{on:"mdi:smoke",off:"mdi:check-circle"},heat:{on:"mdi:fire",off:"mdi:thermometer"},light:{on:"mdi:brightness-7",off:"mdi:brightness-5"},lock:{on:"mdi:lock-open",off:"mdi:lock"},moisture:{on:"mdi:water",off:"mdi:water-off"},motion:{on:"mdi:run",off:"mdi:walk"},occupancy:{on:"mdi:home",off:"mdi:home-outline"},opening:{on:"mdi:square-outline",off:"mdi:square"},plug:{on:"mdi:power-plug",off:"mdi:power-plug-off"},presence:{on:"mdi:home",off:"mdi:home-outline"},running:{on:"mdi:play",off:"mdi:stop"},sound:{on:"mdi:music-note",off:"mdi:music-note-off"},update:{on:"mdi:package-up",off:"mdi:package"},vibration:{on:"mdi:vibrate",off:"mdi:crop-portrait"},window:{on:"mdi:window-open",off:"mdi:window-closed"},_:{on:"mdi:checkbox-marked-circle",off:"mdi:radiobox-blank"}},calendar:{on:"mdi:flash",off:"mdi:flash-off"},cover:{garage:{closed:"mdi:garage",open:"mdi:garage-open"},door:{closed:"mdi:door-closed",open:"mdi:door-open"},blind:{closed:"mdi:blinds",open:"mdi:blinds-open"},window:{closed:"mdi:window-closed",open:"mdi:window-open"},_:{closed:"mdi:window-shutter",open:"mdi:window-shutter-open"}},climate:{off:"mdi:power-off",heat:"mdi:fire",cool:"mdi:snowflake",heat_cool:"mdi:thermometer",auto:"mdi:autorenew",dry:"mdi:water-percent",fan_only:"mdi:fan"},device_tracker:{home:"mdi:home-outline",not_home:"mdi:exit-run"},fan:{on:"mdi:power",off:"mdi:power-off"},humidifier:{on:"mdi:power",off:"mdi:power-off"},input_boolean:{on:"mdi:flash",off:"mdi:flash-off"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-off"},lawn_mower:{mowing:"mdi:play",paused:"mdi:pause",docked:"mdi:home-import-outline"},lock:{unlocked:"mdi:lock-open-variant-outline",locked:"mdi:lock-outline"},person:{home:"mdi:home-outline",not_home:"mdi:exit-run"},sun:{below_horizon:"mdi:weather-sunny-off",above_horizon:"mdi:weather-sunny"},switch:{on:"mdi:flash",off:"mdi:flash-off"},timer:{active:"mdi:play",paused:"mdi:pause",idle:"mdi:sleep"},valve:{open:"mdi:valve-open",closed:"mdi:valve-closed"},weather:{"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",exceptional:"mdi:alert-circle-outline",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"},water_heater:{off:"mdi:power-off",eco:"mdi:leaf",electric:"mdi:lightning-bolt",gas:"mdi:fire",heat_pump:"mdi:hvac",high_demand:"mdi:water-plus-outline",performance:"mdi:rocket-launch-outline"}},P4=(H,V,C)=>{let e=S(H);if(!Object.keys(T4).includes(e))return;let t=T4[e];if(typeof Object.values(t)[0]=="object"){let r=C.states[H],i=r==null?void 0:r.attributes.device_class;i&&Object.keys(t).includes(i)?t=t[i]:t=t._}if(Object.keys(t).includes(V))return t[V]}});var E4,y8,b8,E5,T0=p(()=>{"use strict";x5();g0();I();B4();o2();q();E4=["alarm_control_panel","binary_sensor","climate","calendar","cover","device_tracker","fan","humidifier","input_boolean","input_number","input_select","lawn_mower","light","lock","number","person","proximity","select","sensor","sun","switch","timer","valve","weather","water_heater"],y8=["clear-night","cloudy","exceptional","fog","hail","lightning","lightning-rainy","partlycloudy","pouring","rainy","snowy","snowy-rainy","sunny","windy","windy-variant"],b8=(H,V)=>{let C=Object.keys(V.states).includes(H)?V.states[H]:void 0,e=S(H),t=(C==null?void 0:C.attributes)||{},L=r=>r==null?void 0:r.map(i=>Object({value:i,icon:P4(H,i,V)}));switch(e){case"alarm_control_panel":let r=["disarmed","triggered"];return(t.supported_features||0)&2&&(r=[...r,"armed_away"]),(t.supported_features||0)&1&&(r=[...r,"armed_home"]),(t.supported_features||0)&4&&(r=[...r,"armed_night"]),(t.supported_features||0)&16&&(r=[...r,"armed_custom_bypass"]),(t.supported_features||0)&32&&(r=[...r,"armed_vacation"]),D({options:L(r),translation_key:"component.alarm_control_panel.entity_component._.state.${value}"});case"binary_sensor":return D({options:L(["on","off"]),translation_key:"component.binary_sensor.entity_component.${deviceClass}.state.${value}"});case"climate":return D({options:L(t.hvac_modes),translation_key:"component.climate.entity_component._.state.${value}"});case"calendar":case"fan":case"humidifier":case"input_boolean":case"light":case"switch":return D({options:L(["on","off"]),translation_key:"component.switch.entity_component._.state.${value}"});case"cover":return D({options:L(["open","closed"]),translation_key:"component.cover.entity_component._.state.${value}"});case"device_tracker":return D({options:L(["home","not_home"]),translation_key:"component.device_tracker.entity_component._.state.${value}"});case"input_number":case"number":return M1({min:t.min,max:t.max,step:t.step,mode:t.mode,unit:t.unit_of_measurement});case"input_select":case"select":return D({options:t.options});case"lawn_mower":return D({options:L(["mowing","paused","docked"]),translation_key:"component.lawn_mower.entity_component._.state.${value}"});case"lock":return D({options:L(["locked","unlocked"]),translation_key:"component.lock.entity_component._.state.${value}"});case"person":let i=Object.keys(V.states).filter(o=>S(o)=="zone").map(J);return D({options:[...new Set(["home","not_home",...i])]});case"proximity":return M1({mode:"box",unit:t.unit_of_measurement});case"sensor":return!isNaN(Number(C==null?void 0:C.state))||g(t.unit_of_measurement)?M1({mode:"box",unit:t.unit_of_measurement,min:t.unit_of_measurement=="%"?0:void 0,max:t.unit_of_measurement=="%"?100:void 0}):{text:{}};case"sun":return D({options:L(["above_horizon","below_horizon"]),translation_key:"component.sun.entity_component._.state.${value}"});case"timer":return D({options:L(["active","paused","idle"]),translation_key:"component.timer.entity_component._.state.${value}"});case"valve":return D({options:L(["open","closed"]),translation_key:"component.valve.entity_component._.state.${value}"});case"weather":return D({options:L(y8),translation_key:"component.weather.entity_component._.state.${value}"});case"water_heater":case"climate":return D({options:L(t.operation_list),translation_key:"component.climate.entity_component._.state.${value}"});default:return{text:{}}}},E5=(H,V,C)=>{let e=b8(H,V),t=Object.keys(C||{}).filter(L=>j(L,S(H))||j(L,H)).filter(L=>Object.keys(C[L]).includes("states")).sort((L,r)=>L.length-r.length).map(L=>C[L].states).shift();return t&&(Array.isArray(t)?e=D({options:t}):typeof t=="object"&&"min"in t&&"max"in t&&(e=M1(t))),e}});var k8,D5,P0=p(()=>{"use strict";C5();I();T0();N();a2();k8=(H,V)=>{let C=E4.includes(H);return!C&&V?Object.keys(V).map(S).includes(H):C},D5=(H,V)=>{let C=Object.keys(H.states).map(t=>S(t)).reduce((t,L)=>t.includes(L)?t:[...t,L],[]).filter(t=>k8(t,V.customize||{}));return C=C.filter(t=>m1(t,V)),C.map(t=>({key:t,name:c(`component.${t}.title`,H,!1)||t.replace(/_/g," "),description:"",icon:D1(t)}))}});var O8,w8,n2,F5=p(()=>{"use strict";I();o2();C5();O8="mdi:help",w8=H=>H.match(/^[a-z]+\:[a-zA-Z\-]+$/)?H:`mdi:${H}`,n2=(H,V,C)=>{let e=Object.entries(V||{}).filter(([r,i])=>j(r,H)&&i.icon).map(([r,i])=>i);if(e.length)return e.map(r=>w8(r.icon)).shift();if(!Object.keys(C.states).includes(H))return O8;let t=C.states[H];if(t.attributes.icon)return t.attributes.icon;let L=S(H);return D1(L)}});var F4={};B(F4,{DialogSelectEntities:()=>r1});var T8,P8,D4,r1,B0=p(()=>{"use strict";W();Q();n1();O0();y2();e5();C1();P0();I();F5();N();l5();k2();T8=H=>{let V=T5(H,{include:["*"]}),C=D5(H,{include:["*"]});return C=C.filter(e=>!V.map(t=>t.key).includes(e.key)),V=[...V,...C],V.sort((e,t)=>A1(e.name,t.name)),V},P8=(H,V,C)=>{if(["script","notify"].includes(H)){let e=Object.keys(C.services[H]);H=="script"&&(e=e.filter(L=>!["turn_on","turn_off","reload","toggle","test"].includes(L)));let t=e.map(L=>({key:`${H}.${L}`,name:y1(`${H}.${L}`,C,V),description:"",icon:n2(`${H}.${L}`,V,C)}));return t.sort((L,r)=>A1(L.name,r.name)),t}else{let t=Object.keys(C.states).filter(L=>S(L)==H).map(L=>{var r;return{key:L,name:u5(L,(r=C.states[L])==null?void 0:r.attributes),description:"",icon:n2(L,V,C)}});return t.sort((L,r)=>A1(L.name,r.name)),t}},D4=(H,V)=>V.every(C=>H.name.toLowerCase().includes(C))||V.every(C=>H.key.toLowerCase().includes(C)),r1=class extends _{constructor(){super(...arguments);this._search="";this._filter="";this.timer=0;this.expandedGroups=[];this.scheduleEntities=[]}async showDialog(C){this._params=C,this.loadOptions(),await this.updateComplete}async closeDialog(){this._params&&this._params.confirm({domains:this._params.domains,entities:this._params.entities}),this._params=void 0,this._clearSearch(),this._height=void 0,this._width=void 0}loadOptions(){if(!this._params)return;let C=T8(this.hass);this.options=C.map(e=>A(n({},e),{entities:P8(e.key,this._params.cardConfig.customize,this.hass)})).filter(e=>e.entities.length)}shouldUpdate(C){return!!(C.has("_params")||C.has("expandedGroups")||C.has("_filter")||C.has("scheduleEntities"))}async firstUpdated(){this.scheduleEntities=Object.entries(await h2(this.hass)).map(([,C])=>C.entity_id)}async willUpdate(){var C;if(!this._width||!this._height){let e=(C=this.shadowRoot.querySelector("ha-list"))==null?void 0:C.getBoundingClientRect();this._width=e==null?void 0:e.width,this._height=e==null?void 0:e.height}}render(){return this._params?l`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        @wa-after-show=${this._opened}
      >
        <div slot="header">
          <ha-dialog-header>
            <ha-icon-button
              slot="navigationIcon"
              data-dialog="close"
              .label=${c("ui.dialogs.more_info_control.dismiss",this.hass)}
              .path=${t1}
            ></ha-icon-button>
            <div slot="title">
              ${u("ui.dialog.entity_picker.title",this.hass)}
            </div>
          </ha-dialog-header>

          <ha-input
            dialogInitialFocus
            .placeholder=${c("ui.common.search",this.hass)}
            aria-label=${c("ui.common.search",this.hass)}
            @input=${this._handleSearchChange}
            .value=${this._search}
            icon
            .iconTrailing=${this._search}
          >
            <div class="trailing" slot="trailingIcon">
              ${this._search&&l`
                <ha-icon-button
                  @click=${this._clearSearch}
                  .label=${c("ui.common.clear",this.hass)}
                  .path=${t1}
                  class="clear-button"
                ></ha-icon-button>
              `}
              <slot name="suffix"></slot>
            </div>
          </ha-input>
        </div>
        
        <ha-list
          style=${x1({minWidth:`${this._width}px`,height:this._height?`${Math.min(468,this._height)}px`:"auto"})}
        >
          ${this._renderOptions()}
        </ha-list>
      </ha-dialog>
    `:l``}_opened(){var e;let C=(e=this.shadowRoot.querySelector("ha-list"))==null?void 0:e.getBoundingClientRect();this._width=C==null?void 0:C.width,this._height=C==null?void 0:C.height}_handleSearchChange(C){let e=C.currentTarget.value;this._search=e,clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this._filter=this._search},100)}_clearSearch(){this._search="",this._filter=""}_toggleSelectEntity(C){let e=C.target;for(;e.tagName!="HA-LIST-ITEM";)e=e.parentElement;let t=e.querySelector("ha-checkbox"),L=e.getAttribute("key");this._params.entities.includes(L)?this._params=A(n({},this._params),{entities:this._params.entities.filter(r=>r!=L)}):this._params=A(n({},this._params),{entities:[...this._params.entities,L]})}_toggleSelectDomain(C,e){var i;let t=C.target;for(;t.tagName!="HA-LIST-ITEM";)t=t.parentElement;let L=t.getAttribute("key"),r=(i=this.options)==null?void 0:i.find(o=>o.key==L).entities.map(o=>o.key);e?this._params=A(n({},this._params),{domains:this._params.domains.filter(o=>o!=L),entities:this._params.entities.filter(o=>!(r!=null&&r.includes(o)))}):this._params=A(n({},this._params),{domains:[...this._params.domains,L]}),C.stopPropagation()}closeGroupByKey(C){this.shadowRoot.querySelector("ha-list").childNodes.forEach(t=>{if(t.nodeType==Node.ELEMENT_NODE&&t.tagName=="HA-LIST-ITEM"&&t.getAttribute("key")==C){let L=t,r=L.nextElementSibling,i=L.querySelector("ha-icon-button");r.style.height="0px",L.removeAttribute("expanded"),i.classList.remove("expanded")}})}async _toggleExpandGroup(C){let e=C.target;for(;e.tagName!="HA-LIST-ITEM";)e=e.parentElement;let t=e.querySelector("ha-icon-button"),L=e.getAttribute("key");this.expandedGroups.includes(L)||(this.expandedGroups.forEach(o=>this.closeGroupByKey(o)),this.expandedGroups=[L],await this.requestUpdate());let r=e.nextElementSibling,i=r.scrollHeight;e.hasAttribute("expanded")?(e.removeAttribute("expanded"),t.classList.remove("expanded"),r.style.height="0px",setTimeout(()=>{this.expandedGroups=this.expandedGroups.filter(o=>o!=L)},300)):(e.setAttribute("expanded","true"),t.classList.add("expanded"),r.style.height=`${i}px`)}_renderOptions(){if(!this.options)return;let C=[...this.options],e=this._filter&&this._filter.trim().length;if(e){let t=this._filter.toLowerCase().trim().split(" ");C=C.map(L=>{if(D4(L,t))return L;if(L=A(n({},L),{entities:(L.entities||[]).filter(i=>D4(i,t))}),!!L.entities.length)return L}).filter(L=>L!==void 0)}return C.length?Object.keys(C).map(t=>{var M,d;let L=C[t].key,r=(M=this._params)==null?void 0:M.domains.includes(L),i=[...C[t].entities];L=="switch"&&(i=i.filter(s=>!this.scheduleEntities.includes(s.key)));let o=r?i.length:i.filter(s=>{var x;return(x=this._params)==null?void 0:x.entities.includes(s.key)}).length,a=((d=this._params)==null?void 0:d.domains.includes(L))||C[t].entities.every(s=>{var x;return(x=this._params)==null?void 0:x.entities.includes(s.key)});return l`
        <ha-list-item
          graphic="icon"
          twoline
          hasMeta
          @click=${this._toggleExpandGroup}
          key="${L}"
        >
          <ha-icon slot="graphic" icon="${C[t].icon}"></ha-icon>
          <div slot="meta" class="meta">
            <ha-button
              appearance="plain"
              @click=${s=>this._toggleSelectDomain(s,a)}
              size="small"
            >
              ${a?c("ui.components.media-browser.file_management.deselect_all",this.hass):c("ui.components.subpage-data-table.select_all",this.hass)}
            </ha-button>
            <ha-icon-button .path="${O5}" @click=${s=>{s.target.blur()}} class="chevron"></ha-icon-button>
          </div>
          <span>${C[t].name}</span>
          <span slot="secondary">${u("ui.panel.card_editor.fields.entities.included_number",this.hass,["{number}","{total}"],[o,i.length])}</span>
        </ha-list-item>
        ${this.expandedGroups.includes(L)||e?l`
        <div class="group ${e?"open":""}">
          <li role="divider"></li>
        ${i.map(s=>{var x,h;return l`
          <ha-list-item
            graphic="icon"
            twoline
            hasMeta
            @click=${this._toggleSelectEntity}
            class="nested"
            key="${s.key}"
          >
            ${Object.keys(this.hass.states).includes(s.key)?l`<ha-state-icon .stateObj=${this.hass.states[s.key]} .hass=${this.hass} slot="graphic"></ha-state-icon>`:l`<ha-icon slot="graphic" icon="${s.icon}"></ha-icon>`}
            <ha-checkbox
              slot="meta"
              ?checked=${((x=this._params)==null?void 0:x.entities.includes(s.key))||((h=this._params)==null?void 0:h.domains.includes(L))}
            ></ha-checkbox>

            <span>${s.name}</span>
            <span slot="secondary">${s.key}</span>
          </ha-list-item>
        `})}
          <li role="divider"></li>
        </div>
      `:""}
      `}):l`
        <ha-list-item disabled>
          ${c("ui.components.entity.entity-picker.no_match",this.hass)}
        </ha-list-item>
      `}static get styles(){return P`
      ha-dialog {
        --dialog-content-padding: 0;
        --ha-dialog-width-md: 480px;
      }
      ha-input {
        display: block;
        margin: 0 16px;
      }
      ha-list {
        min-height: 300px;
      }
      ha-list-item {
        --mdc-ripple-hover-opacity: 0.04;
        --mdc-ripple-focus-opacity: 0.04;
        --mdc-ripple-press-opacity: 0.12;
        --mdc-list-item-meta-size: 180px;
      }
      ha-list-item.nested {
        --mdc-list-item-meta-size: 48px;
        --mdc-list-side-padding: 32px;
      }
      ha-list-item.nested ha-icon {
        display: flex;
        justify-content: flex-end;
      }
      ha-list-item ha-checkbox, ha-list-item ha-icon-button, ha-list-item ha-button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      div.group {
        height: 0px;
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        box-sizing: border-box;
      }
      div.group.open {
        height: auto;
      }
      ha-list-item .chevron {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      ha-list-item .chevron.expanded {
        transform: rotate(180deg);
      }
      div.group li {
        width: 100%;
        height: 1px;
        display: block;
        background: var(--divider-color);
        margin: 0px 10px;
      }
      div.meta {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    `}};m([v({attribute:!1})],r1.prototype,"hass",2),m([Z()],r1.prototype,"_params",2),m([Z()],r1.prototype,"_search",2),m([Z()],r1.prototype,"_filter",2),m([Z()],r1.prototype,"_width",2),m([Z()],r1.prototype,"_height",2),m([Z()],r1.prototype,"expandedGroups",2),m([Z()],r1.prototype,"options",2),m([Z()],r1.prototype,"scheduleEntities",2),r1=m([T("dialog-select-entities")],r1)});var i1,R4=p(()=>{"use strict";W();Q();N();i1=class extends _{constructor(){super(...arguments);this.active=!1}render(){return l`
      <div class="chip ${this.active?"active":""}" @click=${this._handleClick}>
        <div class="overlay"></div>
        ${this.renderIcon()}
        <span class="value"><slot></slot></span>
        ${this.renderTrailingIcon()}
      </div>
    `}renderIcon(){if(!this.icon&&!this.toggleable&&!this.useStateIcon)return k;if(this.toggleable)return l`
        <div class="icon">
          <ha-icon
            icon="mdi:check"
          ></ha-icon>
        </div>
      `;if(this.useStateIcon){let C=this.hass.states[this.value||""];return l`
          <div class="icon filled">
            ${C?l`<ha-state-icon .stateObj=${C} .hass=${this.hass}></ha-state-icon>`:l`<ha-icon icon="mdi:help-circle-outline"></ha-icon>
            `}
          </div>
        `}return l`
        <div class="icon filled">
          <ha-icon
            .icon=${this.icon}
          ></ha-icon>
        </div>
      `}renderTrailingIcon(){let C=`icn_${Math.random().toString(36).substring(2,9)}`;return!this.removable&&!this.badge?k:this.badge?l`
        <div class="badge">
          ${this.badge}
        </div>
      `:l`
        <div class="trailing-icon" @click=${this._iconClick}>
          <ha-icon icon="mdi:close" id="${C}"></ha-icon>
          ${this.disabled?k:l`<ha-tooltip for="${C}">${c("ui.common.remove",this.hass)}</ha-tooltip>`}
        </div>
      `}_handleClick(C){if(!this.disabled){if(this.toggleable){this.active=!this.active;let e=new CustomEvent("click",{detail:{active:this.active,value:this.value}});this.dispatchEvent(e)}else if(this.selectable){let e=new CustomEvent("click",{detail:{value:this.value}});this.dispatchEvent(e)}C.stopPropagation()}}_iconClick(C){if(C.stopPropagation(),this.disabled)return;let e=new CustomEvent("icon-clicked",{detail:{value:this.value}});this.dispatchEvent(e)}static get styles(){return P`
      :host {
        margin: 4px;
      }
      .chip {
        display: inline-flex;
        position: relative;
        height: var(--chip-height, 32px);
        background: none;
        user-select: none;
        z-index: 0;
        align-items: center;
        justify-content: center;
      }
      .chip:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        border: 1px solid var(--chip-color, rgb(168, 225, 251));
        border-radius: var(--chip-border-radius, 32px);
        background: rgba(0, 0, 0, 0);
        opacity: var(--background-opacity, 1);
        z-index: -2;
      }
      .chip.active:before {
        background: var(--chip-color, rgb(168, 225, 251));
      }
      .icon {
        position: relative;
        width: 32px;
        height: 32px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        --mdc-icon-size: 20px;
        margin-right: -8px;
        color: rgba(0, 0, 0, 0.54);
      }
      .icon.filled:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background: var(--chip-color, rgb(168, 225, 251));
        border-radius: 32px;
        z-index: -2;
      }
      .value {
        color: var(--primary-text-color);
        font-size: var(--chip-font-size, 0.875rem);
        font-weight: 400;
        display: flex;
        align-items: center;
        padding: 0px 12px;
        opacity: 0.9;
      }
      .trailing-icon {
        position: relative;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        --mdc-icon-size: 16px;
        margin: 0px 3px 0px -8px;
        color: var(--secondary-text-color);
        cursor: pointer;
      }
      .trailing-icon:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background: var(--chip-color, var(--secondary-text-color));
        border-radius: 26px;
        z-index: -2;
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
      }
      .trailing-icon:hover:before {
        opacity: 0.15;
      }
      .trailing-icon:active:before {
        opacity: 0.3;
      }
      :host([disabled]) .trailing-icon:hover:before, :host([disabled]) .trailing-icon:active:before {
        opacity: 0;
      }
      :host([disabled]) .trailing-icon {
        cursor: not-allowed;
      }
      :host([selectable]) .chip, :host([toggleable]) .chip {
        cursor: pointer;
      }
      .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: rgba(0, 0, 0, 0);
        border-radius: var(--chip-border-radius, 32px);
        transition: background-color 0.1s ease-in-out, border 0.1s ease-in-out;
        border: 1px solid rgba(0, 0, 0, 0);
      }
      :host([selectable]) .chip:hover .overlay, :host([toggleable]) .chip:hover .overlay {
        border: 1px solid rgba(0, 0, 0, 0.05);
        background: rgba(0, 0, 0, 0.05);
      }
      :host([selectable]) .chip:active .overlay, :host([toggleable]) .chip:active .overlay {
        border: 1px solid rgba(0, 0, 0, 0.1);
        background: rgba(0, 0, 0, 0.1);
      }
      :host([selectable]) .chip:hover .value, :host([toggleable]) .chip:hover .value {
        opacity: 1;
      }
      :host([active]):host([selectable]) .chip:hover .overlay, :host([active]):host([toggleable]) .chip:hover .overlay {
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0);
      }
      :host([active]):host([selectable]) .chip:active .overlay, :host([active]):host([toggleable]) .chip:active .overlay {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 0, 0, 0);
      }
      
      :host([toggleable]) .icon {
        width: 0px;
        transition: width 0.1s ease-in-out;
        overflow: hidden;
        display: flex;
        align-items: center;
        margin-left: 12px;
      }
      :host([toggleable]) .active .icon {
        width: 20px;
      }
      .badge {
        position: relative;
        display: flex;
        height: 26px;
        min-width: 26px;
        border-radius: 13px;
        font-size: var(--chip-font-size, 0.875rem);
        align-items: center;
        justify-content: center;
        margin: 0px 3px 0px -8px;
      }
      .badge:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background: var(--chip-color, var(--secondary-text-color));
        border-radius: 26px;
        z-index: -2;
        transition: opacity 0.1s ease-in-out;
        opacity: 0.1;
      }
    `}};m([v({attribute:!1})],i1.prototype,"hass",2),m([v({type:String})],i1.prototype,"icon",2),m([v({type:Boolean})],i1.prototype,"useStateIcon",2),m([v({type:Boolean})],i1.prototype,"selectable",2),m([v({type:Boolean})],i1.prototype,"removable",2),m([v({type:Boolean})],i1.prototype,"toggleable",2),m([v({type:Boolean})],i1.prototype,"active",2),m([v({type:String})],i1.prototype,"badge",2),m([v({type:String})],i1.prototype,"value",2),m([v({type:Boolean})],i1.prototype,"disabled",2),i1=m([T("scheduler-chip")],i1)});var h1,E0=p(()=>{"use strict";W();Q();R4();h1=class extends _{constructor(){super(...arguments);this.value=[]}render(){return this.items?l`
      ${Object.values(this.items).map(C=>this.renderChipitem(C))}
    `:l``}renderChipitem(C){let e=C.useStateIcon&&!Object.keys(this.hass.states).includes(C.value||"");return l`
      <scheduler-chip
        .hass=${this.hass}
        .value=${C.value||C.name}
        .icon=${C.icon}
        ?useStateIcon=${C.useStateIcon}
        ?active=${this.value.includes(C.value||C.name)}
        .badge=${C.badge!==void 0?String(C.badge):void 0}
        ?selectable=${this.selectable}
        ?toggleable=${this.toggleable}
        ?removable=${this.removable}
        @click=${this._handleClick}
        @icon-clicked=${this._handleClick}
        ?disabled=${this.disabled}
        style="${e?"text-decoration: line-through":""}"
      >
        ${C.name}
      </scheduler-chip>
      `}_handleClick(C){if(!this.disabled)if(this.toggleable){let e=C.detail.value,t=C.detail.active;this.value.includes(e)&&!t?this.value=this.value.filter(r=>r!=e):!this.value.includes(e)&&e&&(this.value=[...this.value,e]);let L=new CustomEvent("value-changed",{detail:this.value});this.dispatchEvent(L)}else{let e=new CustomEvent("value-changed",{detail:C.detail.value});this.dispatchEvent(e)}}static get styles(){return P`
      :host {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px -4px;
        flex-wrap: wrap;
      }
      scheduler-chip {
        display: inline-flex;
        margin-bottom: 4px;
      }
    `}};m([v({attribute:!1})],h1.prototype,"hass",2),m([v({attribute:!1})],h1.prototype,"items",2),m([v({attribute:!1})],h1.prototype,"value",2),m([v({type:Boolean})],h1.prototype,"selectable",2),m([v({type:Boolean})],h1.prototype,"toggleable",2),m([v({type:Boolean})],h1.prototype,"removable",2),m([v({type:Boolean})],h1.prototype,"disabled",2),h1=m([T("scheduler-chip-set")],h1)});var B8,s1,D0=p(()=>{"use strict";W();Q();I();o2();b1();n1();l5();S1();N();a2();E0();B8=[{name:"primary",weight:10},{name:"secondary",weight:8}],s1=class extends _{constructor(){super(...arguments);this.value=[];this.multiple=!1;this.disabled=!1;this.multipleMode=!1;this.scheduleEntities=[];this._valueRenderer=C=>{Array.isArray(C)&&(C=C.length?[...C].pop():"");let e=C||"",t=this.hass.states[e];if(!t)return l`
        <ha-svg-icon
          slot="start"
          .path=${k0}
          style="margin: 0 4px"
        ></ha-svg-icon>
        <span slot="headline">${e}</span>
      `;let L=this._parseEntityItem(e);return l`
      ${L.icon?l`
        <ha-icon
          slot="start"
          icon="${L.icon}"
        ></ha-icon>
       `:l`
      <state-badge
        .hass=${this.hass}
        .stateObj=${t}
        slot="start"
        color="var(--icon-primary-color)"
      ></state-badge>
      `}
      <span slot="headline">${L.primary}</span>
      <span slot="supporting-text">${L.secondary}</span>
    `};this._rowRenderer=C=>{let e=C.id||"",t=this.hass.states[e];return l`
      <ha-combo-box-item type="button" compact>
        ${C.icon?l`
          <ha-icon
            slot="start"
            icon="${C.icon}"
          ></ha-icon>
        `:t?l`
          <state-badge
            .hass=${this.hass}
            .stateObj=${t}
            slot="start"
            color="var(--icon-primary-color)"
          ></state-badge>
        `:l`
          <ha-svg-icon
            slot="start"
            .path=${k0}
          ></ha-svg-icon>
        `}
        <span slot="headline">${C.primary}</span>
        ${C.secondary?l`<span slot="supporting-text">${C.secondary}</span>`:k}
      </ha-combo-box-item>
    `};this._filteredItems=()=>{let C=Object.keys(this.hass.states);return this.domain&&(C=C.filter(t=>S(t)==this.domain)),this.multiple&&(C=C.filter(t=>{var L;return!((L=this.value)!=null&&L.includes(t))})),this.config&&(C=C.filter(t=>((this.config.include||U2).some(L=>j(L,t))||Object.keys(this.config.customize||{}).some(L=>j(L,t)))&&!(this.config.exclude||[]).some(L=>j(L,t)))),C=C.filter(t=>!this.scheduleEntities.includes(t)),this.filterFunc&&(C=C.filter(t=>this.filterFunc(this.hass.states[t]))),C.map(t=>this._parseEntityItem(t))}}async firstUpdated(){this.scheduleEntities=Object.entries(await h2(this.hass)).map(([,C])=>C.entity_id),this.domain&&this.config&&!m1(this.domain,this.config)&&(this.config=A(n({},this.config),{include:[...this.config.include||[],this.domain],exclude:[...(this.config.exclude||[]).filter(C=>!C.startsWith(this.domain))]})),this._autoSelectIfSingleEntity()}updated(C){super.updated(C),C.has("domain")&&this._autoSelectIfSingleEntity()}_autoSelectIfSingleEntity(){if(this.value&&this.value.length>0)return;let C=this._filteredItems();C.length===1&&(this.value=[C[0].id],$(this,"value-changed",{value:this.value}))}render(){var C,e;return l`
      ${this.renderChips()}

      ${!((C=this.value)!=null&&C.length)||this.multipleMode||!this.multiple?l`

      <ha-generic-picker
        .label=${(e=this.value)!=null&&e.length?"":c("ui.components.entity.entity-picker.choose_entity",this.hass)}
        .hass=${this.hass}
        .autofocus=${this.autofocus}
        .notFoundLabel=${c("ui.components.combo-box.no_match",this.hass)}
        .value=${this.multiple?"":this.value}
        .valueRenderer=${this._valueRenderer}
        .rowRenderer=${this._rowRenderer}
        .disabled=${this.disabled}
        .getItems=${this._filteredItems}
        .searchKeys=${B8}
        .searchLabel=${c("ui.dialogs.quick-bar.filter_placeholder",this.hass)}
        @value-changed=${this._valueChanged}
        hide-clear-icon
        allow-custom-value
      >
      </ha-generic-picker>
      `:k}
    `}renderChips(){if(!this.multiple)return k;let C=(this.value||[]).map(e=>{let t=this._parseEntityItem(e);return{name:t.primary,value:e,useStateIcon:!t.icon,icon:t.icon}});return l`
      <div class="wrapper">
      <scheduler-chip-set
        .hass=${this.hass}
        .items=${C}
        removable
        @value-changed=${this._removeClick}
        ?disabled=${this.disabled}
      >
      </scheduler-chip-set>
      <div class="column-right">
      ${C.length?l`
      <ha-icon-button
        @click=${e=>{this.multipleMode=!this.multipleMode,e.target.blur()}}
        .path=${this.multipleMode?x4:O5}
        slot="end"
      ></ha-icon-button>
      `:k}
      </div>
      </div>
      `}_valueChanged(C){let e=C.detail.value,t=C.currentTarget;e&&(this.value=[...this.value||[],e],this.multiple&&(t.value=""),$(this,"value-changed",{value:this.value}),C.stopPropagation())}_removeClick(C){let e=C.detail;this.value=(this.value||[]).filter(t=>t!==e),$(this,"value-changed",{value:this.value})}_parseEntityItem(C){var r,i,o,a;let e=Object.entries(((r=this.config)==null?void 0:r.customize)||{}).filter(([M,d])=>j(M,C)).map(([M,d])=>d),t=(i=e.find(M=>"name"in M))==null?void 0:i.name,L=(o=e.find(M=>"icon"in M))==null?void 0:o.icon;return{id:C,primary:t||u5(C,(a=this.hass.states[C])==null?void 0:a.attributes),secondary:C,icon:L}}};s1.styles=P`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    :host > * {
      display: block;
      width: 100%;
    }
    div.wrapper {
      display: flex;
    }
    scheduler-chip-set {
      display: flex;
    }
    div.column-right {
      display: flex;
    }
    div.column-right ha-icon-button {
      display: flex;
      align-self: flex-end;
    }
  `,m([v({attribute:!1})],s1.prototype,"hass",2),m([v()],s1.prototype,"domain",2),m([v()],s1.prototype,"config",2),m([v({type:Array})],s1.prototype,"value",2),m([v({type:Boolean})],s1.prototype,"multiple",2),m([v({type:Boolean})],s1.prototype,"disabled",2),m([Z()],s1.prototype,"multipleMode",2),m([Z()],s1.prototype,"scheduleEntities",2),s1=m([T("scheduler-entity-picker")],s1)});var Y1,s2,R5=p(()=>{"use strict";W();Q();Y1=class extends _{constructor(){super(...arguments);this.expanded=!1;this.disabled=!1;this.idx=-1;this.openClose=new CustomEvent("open-close",{detail:{},bubbles:!0,composed:!0})}render(){return l`
      <div
        class="header ${this.expanded?"expanded":""}"
        @click=${this._toggleContent}
        @focus=${this._focusChanged}
        @blur=${this._focusChanged}
        role="button"
        tabindex="0"
        aria-expanded=${this.expanded}
        aria-controls="sect1"
      >
        ${this.disabled?"":l`
        <ha-icon
          icon="mdi:chevron-down"
          class="chevron ${this.expanded?"expanded":""}"
        ></ha-icon>
        `}
        <slot name="header" class="title"></slot>
        <div id="contextMenu">
          <slot name="contextMenu">
          </slot>
        </div>
      </div>

      <div class="container">
        <slot name="content"></slot>
      </div>
    `}_toggleContent(){this.disabled||this.dispatchEvent(this.openClose)}attributeChangedCallback(C,e,t){let L;if(this.shadowRoot!==null){for(let r of this.shadowRoot.children)if(r.className=="container"){L=r;break}}if(L)if(this.hasAttribute("expanded")){let r=L.scrollHeight;L.style.height=`${r}px`}else L.style.height="0px";super.attributeChangedCallback(C,e,t)}_focusChanged(C){this.disabled||this.shadowRoot.querySelector(".header").classList.toggle("focused",C.type==="focus")}static get styles(){return P`
      :host {
        display: block;
        border-radius: 12px;
        border: 1px solid var(--divider-color);
        box-sizing: border-box;
        margin: 8px 0px;
        position: relative;
      }
      .header {
        display: flex;
        width: 100%;
        border-radius: 12px;
        padding: 12px;
        box-sizing: border-box;
        cursor: pointer;
      }
      :host([disabled]) .header {
        cursor: default;
      }
      .header .title {
        font-weight: 600;
        padding: 0px 8px;
      }
      .header ::slotted(div) {
        flex: 1;
        margin-right: 32px;
      }
      .header.focused {
        background: var(--input-fill-color);
      }
      .header.expanded {
        border-radius: 12px 12px 0px 0px;
      }
      #contextMenu {
        position: absolute;
        right: 0px;
        top: 0px;
      }

      .chevron {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        direction: var(--direction);
        margin-left: 0px;
      }
      .chevron.expanded {
        transform: rotate(180deg);
      }
      .container {
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        padding: 0px 12px;
        box-sizing: border-box;
        height: 0px;
      }
      :host([disabled]) .container {
        height: auto;
      }
      .container.expanded {
        height: auto;
      }
      @media all and (max-width: 450px) {
        .container {
          padding: 0px;
        }
      }
    `}};m([v({type:Boolean,reflect:!0})],Y1.prototype,"expanded",2),m([v({type:Boolean,reflect:!0})],Y1.prototype,"disabled",2),m([v({attribute:!0})],Y1.prototype,"idx",2),m([v({type:CustomEvent})],Y1.prototype,"openClose",2),Y1=m([T("scheduler-collapsible-section")],Y1);s2=class extends _{constructor(){super();this.disabled=!1;this._openedItem=-1;this._numItems=0;this.addEventListener("open-close",this.toggleActiveSection)}set openedItem(C){C===this._openedItem||C===void 0||setTimeout(()=>{this.updateOpenedItem(C)},50)}firstUpdated(){let C=this.querySelectorAll("scheduler-collapsible-section");this._numItems=C.length}toggleActiveSection(C){if(this.disabled)return;let e=C.target,t=Number(e.getAttribute("idx"));e.getAttribute("expanded")==="true"?this.updateOpenedItem(-1):this.updateOpenedItem(t)}updateOpenedItem(C){this.querySelectorAll("scheduler-collapsible-section").forEach(function(L){let r=Number(L.getAttribute("idx"));r!==C&&L.getAttribute("expanded")?L.removeAttribute("expanded"):r===C&&!L.getAttribute("expanded")&&L.setAttribute("expanded","true")}),this._openedItem=C;let t=new CustomEvent("openclose-changed",{detail:{item:C}});this.dispatchEvent(t)}render(){return l`
      <slot></slot>
    `}};m([v()],s2.prototype,"disabled",2),m([Z()],s2.prototype,"_openedItem",2),m([Z()],s2.prototype,"_numItems",2),s2=m([T("scheduler-collapsible-group")],s2)});var F0,F1,$5=p(()=>{"use strict";W();Q();b1();N();h0();q();E0();F0="__NONE_OPTION__",F1=class extends _{constructor(){super(...arguments);this.disabled=!1}render(){var C;if(this.config.select){let e=this.config.select,t=[this.value||[]].flat().map(String),L=f=>{let w=f.detail;this.value=t.filter(K=>K!=w),$(this,"value-changed",{value:this.value})},r=()=>{let f=t.map(w=>Object({name:w,value:w}));return l`
        <scheduler-chip-set
          .hass=${this.hass}
          .items=${f}
          removable
          @value-changed=${L}
        >
        </scheduler-chip-set>`},i=f=>{var A2;let w=(A2=this.config.select)==null?void 0:A2.translation_key,K="";return w&&(K=c(w.replace("${value}",f),this.hass,!1)),K||(K=f),K},o=f=>typeof f=="object"?{id:f.value,primary:i(f.label),icon:f.icon}:{id:f,primary:i(f)},a=[...e==null?void 0:e.options].map(o),M=[this.value||[]].flat().map(String);a=[...a,...M.filter(f=>!a.find(w=>w.id==f)).map(o)],Array.isArray(this.value)&&(a=a.filter(f=>typeof f=="object"?!t.includes(f.id):!t.includes(f)));let d=()=>{if(!a.length)return l`
          <ha-dropdown-item .value=${F0}>
            ${this.hass.localize("ui.components.combo-box.no_match")}
          </ha-dropdown-item>
        `;let f=a.some(w=>w.icon);return a.map(w=>l`
          <ha-dropdown-item
            .value=${w.id}
          >
            ${w.icon?l`<ha-icon slot="icon" .icon=${w.icon}></ha-icon>`:k}
            <span>${w.primary}</span>
          </ha-dropdown-item>
        `)},s=f=>{let w=f.target,K=w.querySelector("ha-picker-field");this.style.setProperty("--select-menu-width",`${K.offsetWidth}px`),w.classList.add("opened")},x=f=>{f.target.classList.remove("opened")},h=f=>{let w=f.detail.item.value;(w==F0||Array.isArray(this.value))&&(f.target.value=void 0,w==F0)||this._valueChanged(new CustomEvent("value-changed",{detail:{value:w}}))},y=()=>{this._valueChanged(new CustomEvent("value-changed",{detail:{value:void 0}}))},b=g(this.value)&&!Array.isArray(this.value)?a.find(f=>f.id===this.value):void 0,F=b?b.primary||b.id:g(this.value)&&!Array.isArray(this.value)?this.value:void 0;return l`
        <div class="select-wrapper">
          ${e.multiple?l`
          <div class="chips">
          ${r()}
          </div>
          `:""}
          <ha-dropdown
            placement="bottom"
            @wa-select=${h}
            @wa-show=${s}
            @wa-hide=${x}
          >
            <ha-picker-field
              slot="trigger"
              type="button"
              compact
              @clear=${y}
              .disabled=${this.disabled}
              .hideClearIcon=${this.disabled||!g(this.value)||Array.isArray(this.value)&&!this.value.length}
              .value=${F}
              .icon=${b==null?void 0:b.icon}
            >
            </ha-picker-field>
            ${d()}
          </ha-dropdown>
        </div>
      `}else if(this.config.number){let e=this.config.number,t=e.mode=="box"||!g(e.min)||!g(e.max),L=this.value;!t&&typeof L!="number"&&(L=e.min),typeof e.scale_factor=="number"&&(L=Number(L)/e.scale_factor),typeof(e==null?void 0:e.step)=="number"&&(L=Math.round(Number(L)/e.step)*e.step),g(L)&&(L=Y2(Number(L)));let r=a=>{let M=Number(a.target.value);typeof e.scale_factor=="number"&&(M=M*e.scale_factor),typeof(e==null?void 0:e.step)=="number"&&(M=Math.round(M/e.step)*e.step),M=Y2(M),this._valueChanged(new CustomEvent("value-changed",{detail:{value:M}})),a.stopPropagation()},i=a=>{a.stopPropagation();let M=a.target.value,d=M===""||isNaN(Number(M))?void 0:Number(M);this._valueChanged(new CustomEvent("value-changed",{detail:{value:d}}))},o=(a,M)=>{let d=e.step&&Number(e.step)%1==0?a.match(/^-?\d+$/)!==null:a.match(/^[+-]?\d+([.,]\d+)?$/)!==null;return d&&g(e.min)&&(d=Number(a)>=e.min),d&&g(e.max)&&(d=Number(a)<=e.max),{valid:d,customError:!d}};return l`
        <div class="slider-wrapper">
        ${t?l`
        <ha-input
          .inputMode=${e.step&&Number(e.step)%1==0?"numeric":"decimal"}
          .min=${e.min}
          .max=${e.max}
          .value=${L||""}
          .step=${(C=e.step)!=null?C:1}
          .disabled=${this.disabled}
          .required=${!0}
          .suffix=${e.unit}
          type="number"
          autoValidate
          .validityTransform=${o}
          @input=${i}
        >
        </ha-input>
        `:l`
        <ha-slider
          .min=${e.min}
          .max=${e.max}
          .step=${e.step||1}
          .value=${L}
          @change=${r}
          ?disabled=${this.disabled}
        ></ha-slider>
        <span class="value">${L} ${e.unit||""}</span>
        `}
        </div>
      `}else if(this.config.text){let e=this.config.text;return l`
        <div class="textfield-wrapper">
          <ha-input
            .value=${this.value||""}
            @input=${this._valueChanged}
            .placeholder=""
            ?disabled=${this.disabled}
          ></ha-input> 
        </div>     
      `}else if(this.config.boolean){let e={select:{options:[{value:"true",label:"True",icon:"mdi:check"},{value:"false",label:"False",icon:"mdi:close"}]}},t=L=>{let r=g(L.detail.value)?L.detail.value==="true":void 0;L.stopPropagation(),this._valueChanged(new CustomEvent("value-changed",{detail:{value:r}}))};return l`
        <scheduler-combo-selector
          .hass=${this.hass}
          .config=${e}
          .value=${typeof this.value=="boolean"?this.value?"true":"false":void 0}
          @value-changed=${t}
          ?disabled=${this.disabled}
        >
        </scheduler-combo-selector>
      `}return l``}_valueChanged(C){if(C.stopPropagation(),Array.isArray(this.value)){let e=C.detail.value;if(!e)return;this.value=[...this.value,e]}else if(C.detail){let e=C.detail.value;e===void 0&&(e=null),this.value=e}else this.value=C.target.value;$(this,"value-changed",{value:this.value})}};F1.styles=P`
      :host {
        display: flex;
        width: 100%;
      }
      div.slider-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        gap: 4px;
      }
      div.slider-wrapper > * {
        display: flex;
      }
      div.slider-wrapper ha-slider {
        flex: 1;
      }
      div.slider-wrapper span {
        justify-content: center;
        align-self: center;
        min-width: 45px;
        text-align: end;
      }
      div.slider-wrapper ha-input {
        --ha-input-input-width: 100px;
      }
      div.select-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      div.textfield-wrapper {
        display: flex;
        width: 100%;
      }
      div.textfield-wrapper ha-input {
        display: flex;
        width: 100%;
      }
      ha-dropdown::part(menu) {
        min-width: var(--select-menu-width);
      }
  `,m([v({attribute:!1})],F1.prototype,"hass",2),m([v({attribute:!1})],F1.prototype,"config",2),m([v()],F1.prototype,"value",2),m([v({type:Boolean})],F1.prototype,"disabled",2),F1=m([T("scheduler-combo-selector")],F1)});var $4,KL,z4=p(()=>{"use strict";W();$4=P`
  ha-dialog {
    --justify-action-buttons: space-between;
    --dialog-container-padding: var(--safe-area-inset-top, 0)
      var(--safe-area-inset-right, 0) var(--safe-area-inset-bottom, 0)
      var(--safe-area-inset-left, 0);
    --dialog-surface-padding: 0px;
    --dialog-content-padding: 0px;
  }
  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --dialog-container-padding: 0px;
      --dialog-surface-padding: var(--safe-area-inset-top, 0)
        var(--safe-area-inset-right, 0) var(--safe-area-inset-bottom, 0)
        var(--safe-area-inset-left, 0);
      --vertical-align-dialog: flex-end;
      --ha-dialog-border-radius: var(--ha-border-radius-square);
    }
  }
  @media all and (min-width: 600px) and (min-height: 501px) {
    ha-dialog {
      --dialog-surface-margin-top: 40px;
      --vertical-align-dialog: flex-start;
    }
  }
  .buttons {
    box-sizing: border-box;
    display: flex;
    padding: 16px 24px;
    justify-content: space-between;
    background-color: var(--mdc-theme-surface, #fff);
    border-top: 1px solid var(--divider-color);
  }
  .content {
    padding: 0px 24px 16px 24px;
  }
`,KL=P`
  .error {
    color: red;
  }
  .dl {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .dt {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
  .dd {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, auto) minmax(0, 2fr));
    margin: 0;
  }
  .toggle {
    padding: 0.6em;
    border: grey;
    border-radius: 50%;
  }
  .toggle.on {
    background-color: green;
  }
  .toggle.off {
    background-color: red;
  }
  .button {
    display: block;
    border: outset 0.2em;
    border-radius: 50%;
    border-color: silver;
    background-color: silver;
    width: 1.4em;
    height: 1.4em;
  }
  .value {
    padding-left: 0.5em;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }


`});var z5,$0=p(()=>{"use strict";b2();M2();I();z5=(H,V,C,e)=>{var o;let t=H.service,L=(o=H.target)==null?void 0:o.entity_id,r=a1(H,e);if(!r||!r.fields||!Object.keys(r.fields).includes(V))return!1;let i=r.fields[V];return Q1(t,L,V,C,e)===null?!1:Object.keys(H.service_data||{}).includes(V)?!0:!(i.supported_features&&![L||[]].flat().every(M=>Object.keys(C.states).includes(M)?((C.states[M].attributes.supported_features||0)&i.supported_features)>0:!1)||S(t)=="light"&&![L||[]].flat().every(a=>{if(!Object.keys(C.states).includes(a))return!1;let d=C.states[a].attributes.supported_color_modes||[];return V=="brightness"?d.filter(s=>s!="onoff").length:!0}))}});var E8,D8,N4,I4=p(()=>{"use strict";q();M2();$0();b2();V2();E8=(H,V)=>H.every((e,t)=>{let L=O(e.start,V),r=e.stop===void 0?L:O(e.stop,V)||24*3600;return L>r?!1:H.every((i,o)=>o<=t?!0:O(i.start,V)>=r)})?null:"overlapping_time",D8=(H,V,C)=>{var t;let e=a1(H,C);return e!=null&&e.target&&!((t=H.target)!=null&&t.entity_id)?"missing_target_entity":e!=null&&e.fields&&!Object.entries(e.fields).filter(([L])=>z5(H,L,V,C)).every(([L,r])=>{var a,M;let i=Q1(H.service,(a=H.target)==null?void 0:a.entity_id,L,V,C),o=i.number&&((M=i.number)!=null&&M.optional)?!0:r.optional;return!Object.keys(H.service_data).includes(L)&&!o?!1:!(!g(H.service_data[L])&&!o)})?"missing_service_parameter":null},N4=(H,V,C)=>{let e=[];e=[...e,...H.entries.map(L=>E8(L.slots,V)).filter(L=>L!==null)];let t=H.entries.map(L=>L.slots.map(r=>r.actions)).flat().flat();return t.length||(e=[...e,"missing_action"]),e=[...e,...t.map(L=>D8(L,V,C)).filter(L=>L!==null)],e.length?e.shift():null}});var j4,z0,F8,R8,$8,N0=p(()=>{"use strict";q();U();j4=(H,V)=>{let C=z0(V);return H.callApi("POST","scheduler/add",C)},z0=H=>{let V=t=>t.actions.length?(t.stop||(t=Object.fromEntries(Object.entries(t).filter(([L])=>L!="stop"))),t):null,C=t=>A(n({},t),{slots:t.slots.map(V).filter(L=>L!==null)});H=A(n({},H),{entries:H.entries.map(C)});let e={weekdays:H.entries[0].weekdays.map(F8),timeslots:H.entries[0].slots.map(R8),name:H.name,start_date:H.start_date,end_date:H.end_date,repeat_type:H.repeat_type,tags:H.tags||[]};return H.schedule_id&&(e=A(n({},e),{schedule_id:H.schedule_id})),e},F8=H=>{switch(H){case"monday":return"mon";case"tuesday":return"tue";case"wednesday":return"wed";case"thursday":return"thu";case"friday":return"fri";case"saturday":return"sat";case"sunday":return"sun";case"workday":return"workday";case"weekend":return"weekend";default:return"daily"}},R8=H=>({start:H.start,stop:H.stop,actions:H.actions.map(V=>$8(V)).flat(),condition_type:H.conditions.items.length?H.conditions.type=="and"?"and":"or":void 0,conditions:H.conditions.items.length?H.conditions.items:void 0,track_conditions:H.conditions.track_changes}),$8=H=>{var C,e;let V=t=>Object.keys(t).filter((L=>g(t[L]))).reduce((L,r)=>(L[r]=t[r],L),{});return H.target?Array.isArray((C=H.target)==null?void 0:C.entity_id)?H==null?void 0:H.target.entity_id.map(L=>({service:H.service,service_data:V(H.service_data),entity_id:L})):{service:H.service,service_data:V(H.service_data),entity_id:(e=H.target)==null?void 0:e.entity_id}:{service:H.service,service_data:V(H.service_data)}}});var T2={};B(T2,{GenericDialog:()=>d2});var d2,l2=p(()=>{"use strict";W();Q();n1();N();d2=class extends _{async showDialog(V){this._params=V,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?l`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        width="small"
      >
        <ha-dialog-header slot="header">
          <ha-icon-button
            slot="navigationIcon"
            data-dialog="close"
            .label=${c("ui.dialogs.more_info_control.dismiss",this.hass)}
            .path=${t1}
          ></ha-icon-button>
          <div slot="title">
            ${this._params.title}
          </div>
        </ha-dialog-header>
        <div class="wrapper">
          ${this._params.description}
        </div>

        <ha-dialog-footer slot="footer">
          ${this._params.secondaryButtonLabel?l`
            <ha-button
              appearance="plain"
              slot="secondaryAction"
              @click=${this.cancelClick}
              data-dialog="close"
            >
              ${this._params.secondaryButtonLabel}
            </ha-button>
              `:""}
          <ha-button
            appearance="accent"
            slot="primaryAction"
            @click=${this.confirmClick}
            data-dialog="close"
          >
            ${this._params.primaryButtonLabel}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `:l``}confirmClick(){this._params.confirm()}cancelClick(){this._params.cancel()}};m([v({attribute:!1})],d2.prototype,"hass",2),m([Z()],d2.prototype,"_params",2),d2=m([T("scheduler-generic-dialog")],d2)});var N5,W4=p(()=>{"use strict";W();b1();N();N5=(H,V,C)=>{let e={title:c("state_badge.default.error",C),description:l`
    <b>Something went wrong!</b><br />
    ${H.body.message}<br /><br />
    ${H.error}<br /><br />
    Please <a href="https://github.com/nielsfaber/scheduler-card/issues">report</a> the bug.
  `,primaryButtonLabel:c("ui.common.ok",C),confirm:()=>{},cancel:()=>{}};$(V,"show-dialog",{dialogTag:"scheduler-generic-dialog",dialogImport:()=>Promise.resolve().then(()=>(l2(),T2)),dialogParams:e})}});var U4,G4=p(()=>{"use strict";U4=(H,V)=>H.callApi("POST","scheduler/remove",{schedule_id:V})});var q4,Q4=p(()=>{"use strict";N0();q4=(H,V)=>{let C=z0(V);return H.callApi("POST","scheduler/edit",C)}});var K4,Y4=p(()=>{"use strict";j1();E1();L2();K4=H=>{let V=C=>{let e=C.findIndex(o=>o.actions.length);e<0&&(e=Math.floor(C.length/2));let t=A(n({},C[e]),{stop:void 0}),L=t.conditions,r=t.start,i=E(G(R(r),{minutes:1}));return C=[{start:"00:00:00",stop:r,actions:[],conditions:L},t,{start:i,stop:"00:00:00",actions:[],conditions:L}],C};return H=A(n({},H),{entries:H.entries.map(C=>Object(A(n({},C),{slots:V(C.slots)})))}),H}});var I5,I0=p(()=>{"use strict";I5=H=>{if(Object.keys(H).includes("select")&&H.select){let V=H.select.options;return}else if(Object.keys(H).includes("number")&&H.number){let V=H.number.min;return V!==void 0?V:0}else return Object.keys(H).includes("boolean")&&H.boolean?void 0:(Object.keys(H).includes("text")&&H.text,"")}});var J4,X4=p(()=>{"use strict";U();j1();V2();E1();Z2();L2();J4=(H,V,C,e)=>{let t=[...H.entries[V].slots],L=R(t[C].start),r=t[C].stop===void 0?L:R(t[C].stop);if(r.mode==="fixed"&&!r.hours&&!r.minutes&&(r=A(n({},r),{hours:24})),["sunrise","sunset"].includes(L.mode)){let x=L.mode=="sunrise"?e.states["sun.sun"].attributes.next_rising:e.states["sun.sun"].attributes.next_setting,h=R(x);L=G(h,{hours:L.hours,minutes:L.minutes})}let i=O(L,e),a=(O(r,e)-i)/2,M=Math.floor(a/3600),d=Math.round((a-M*3600)/60),s=G(L,{hours:M,minutes:d});return s=l1(s,15),t=[...t.slice(0,C),A(n({},t[C]),{stop:E(s)}),A(n({},t[C]),{start:E(s),stop:E(r),actions:[]}),...t.slice(C+1)],H=A(n({},H),{entries:Object.assign(H.entries,{[V]:A(n({},H.entries[V]),{slots:t})})}),H}});var C9,e9=p(()=>{"use strict";C9=(H,V,C)=>{let e=[...H.entries[V].slots],t=C==e.length-1?C-1:C;return e=[...e.slice(0,t),A(n({},e[t+1]),{start:e[t].start,stop:e[t+1].stop}),...e.slice(t+2)],H=A(n({},H),{entries:Object.assign(H.entries,{[V]:A(n({},H.entries[V]),{slots:e})})}),H}});var H9,V9=p(()=>{"use strict";I();q();N();K2();H9=(H,V,C,e)=>{var M;let t=S(H.service),L=J(H.service),r=c(`component.${t}.services.${L}.fields.${V}.name`,C,!1);!r&&C.services[t]&&C.services[t][H.service]&&C.services[t][H.service].fields&&C.services[t][H.service].fields[V]&&(r=String(C.services[t][H.service].fields[V].name));let i=["script","notify"].includes(t)?[H.service]:[((M=H.target)==null?void 0:M.entity_id)||[]].flat(),o=i.length?i[0]:H.service,a=q1(e||{},o);if(a.length){let d=a.map(s=>s.service!=H.service||!Object.keys(s.variables||{}).includes(V)?null:(s.variables||{})[V].name).filter(g);if(d.length)return d[0]}return r||(r=V.replace(/_/g," ")),r}});var z8,N8,P2,j5=p(()=>{"use strict";I();Z5();M2();z8="mdi:flash",N8=H=>H.match(/^[a-z]+\:[a-zA-Z\-]+$/)?H:`mdi:${H}`,P2=(H,V)=>{let C=a1(H,V),e=S(H.service),t=J(H.service);if(C.icon)return N8(C.icon);if(Object.keys(V1).includes(e)&&Object.keys(V1[e].services).includes(t)){if(V1[e].attributes!==void 0){let L=V1[e].attributes,r=Object.keys(L).find(i=>Object.keys(H.service_data).includes(i));if(r&&Object.keys(L[r]).includes(H.service_data[r]))return L[r][H.service_data[r]]}return V1[e].services[t]}else return Object.keys(V1).includes(e)&&Object.keys(V1[e].services).includes("{entity_id}")?V1[e].services["{entity_id}"]:z8}});var O1,R1,w1,W5,t9=p(()=>{"use strict";q();U();j1();V2();E1();L2();O1=(H,V,C)=>{let e=typeof H=="string"?O(R(H),C):O(H,C),t=typeof V=="string"?O(R(V),C):O(V,C);return t>e?1:t<e?-1:0},R1=H=>R(H.start),w1=H=>{if(g(H.stop)){let V=R(H.stop);return V.hours==0&&V.minutes==0&&V.mode=="fixed"?A(n({},V),{hours:24}):V}else return G(R1(H),{minutes:1})},W5=(H,V,C,e)=>{let t=V;if(g(C.stop))return[H,t]=W5(H,V+1,{start:C.stop},e),[H,t-1];if(!g(C.start))return[H,t];let L=R1(H[V]),r=C.start,i=R1(H[V]);for(let a=V-1;a>=0;a--){if(H[a].actions.length){i=a==V-1?G(R1(H[a]),{minutes:1}):w1(H[a]);break}i=R1(H[a])}let o=G(w1(H[V]),{minutes:-1});if(!g(H[V].stop))for(let a=V+1;a<H.length;a++){if(H[a].actions.length){o=a==V+1?G(w1(H[a]),{minutes:-1}):R1(H[a]);break}o=w1(H[a])}if(O1(i,r,e)<0&&(r=i),O1(o,r,e)>0&&O(o,e)>0&&(r=o),H=Object.assign(H,{[V]:A(n({},H[V]),{start:E(r)})}),O1(L,r,e)<=0)for(let a=V-1;a>=0;a--){let M=O1(R1(H[a]),r,e),d=O1(w1(H[a]),r,e);if(M>0&&d<=0){H=Object.assign(H,{[a]:A(n({},H[a]),{stop:E(r)})});break}else{if(d>=0)break;M<=0&&(H=Object.assign(H,{[a]:null}),t=t-1)}}if(O1(L,r,e)<0&&!g(H[V].stop)&&(g(H[V+1].stop)&&!H[V+1].actions.length?H=Object.assign(H,{[V+1]:A(n({},H[V+1]),{start:E(w1(H[V]))})}):H=[...H.slice(0,V+1),A(n({},H[V]),{start:E(w1(H[V])),stop:E(R1(H[V+1])),actions:[]}),...H.slice(V+1)]),O1(L,r,e)>=0)for(let a=t+1;a<H.length;a++){let M=w1(H[t]),d=O1(R1(H[a]),M,e),s=O1(w1(H[a]),M,e);if(d>=0&&s<0)H=Object.assign(H,{[a]:A(n({},H[a]),{start:E(M)})});else{if(d<0)break;s>=0&&(H=Object.assign(H,{[a]:null}))}}return O1(L,r,e)>0&&(V>0&&g(H[V-1].stop)?H=Object.assign(H,{[V-1]:A(n({},H[V-1]),{stop:E(r)})}):(H=[...H.slice(0,V),A(n({},H[V]),{start:V>0?E(w1(H[V-1])):"00:00:00",stop:E(r),actions:[]}),...H.slice(V)],t=V+1)),H=H.filter(g),[H,t]}});var H5,j0=p(()=>{"use strict";Z2();H5=(H,V)=>{let C=new Date(V),e=C.getHours()*3600+C.getMinutes()*60+C.getSeconds(),t=H.hours*3600+H.minutes*60-e,L=t<0?-1:1;t=Math.abs(t);let r=Math.floor(t/3600),i=Math.round((t-r*3600)/60);return L<0&&(r>0&&(r=-r),i=-i),l1({hours:r,minutes:i})}});var m2,$1,L9=p(()=>{"use strict";W();Q();e5();U();n1();Z2();L2();j5();J2();E1();V2();j0();t2();j1();S1();m2=24*3600,$1=class extends _{constructor(){super(...arguments);this.selectedSlot=null;this._width=0;this.large=!1}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(C=>{for(let e of C){let t=e.contentRect.width;t!==this._width&&(this._width=t)}}),this._resizeObserver.observe(this)}disconnectedCallback(){var C;super.disconnectedCallback(),(C=this._resizeObserver)==null||C.disconnect()}render(){return l`
      <div class="bar">
        ${this.renderTimeslots()}
      </div>
      <div class="time-bar">
        ${this.renderTimebar()}
      </div>
    `}renderTimebar(){var o;let C=this._width,e=[1,2,3,4,6,8,12],t=v1(this.hass.locale),L=t?130:100;if(!C)return l``;let r=Math.ceil(24/(C/L));r=(o=e.find(a=>a>=r))!=null?o:e[e.length-1];let i=[0,...Array.from(Array(24/r-1).keys()).map(a=>(a+1)*r),24];return i.map((a,M)=>{let d=r/24*100;d=Math.floor(d*100)/100;let s={mode:"fixed",hours:a,minutes:0};return M==0?l`
        <span class="left" style=${x1({width:`${d/2}%`})}>${E(s,{seconds:!1,am_pm:t})}</span>
      `:M==i.length-1?l`
        <span class="right" style=${x1({width:`${d/2}%`})}>${E(s,{seconds:!1,am_pm:t})}</span>
      `:l`
        <span style=${x1({width:`${d}%`})}>${E(s,{seconds:!1,am_pm:t})}</span>
      `})}renderTimeslots(){let C=this.schedule.slots,e=this.computeSlotWidths();return C.map((t,L)=>{let r=t.actions.length?f1(t.actions[0],this.hass,this.config.customize,!0,!0):"",i=r.length*5+10,o=L>0?15:0,a=L<C.length-1?15:0,M=e[L]-o-a,d=C[L+1];return l`
        <div
          class="slot ${this.selectedSlot==L?"selected":""} ${t.actions.length?"":"empty"} ${t.stop===void 0?"short":""}"
          style="${x1({width:`${e[L]}px`})}"
          @click=${this._toggleSelectTimeslot}
          idx="${L}"
        >
          ${t.stop,""}
          ${t.actions.length?r&&(M>i/3||M>50)&&M>30?l`<span style="margin-left: ${o}px; margin-right: ${a}px">${r}</span>`:M>16?l`<ha-icon icon="${P2(t.actions[0],this.config.customize)}"></ha-icon>`:"":""}
        </div>
        ${L<C.length-1&&t.stop?l`
        <div idx="${L}" class="handle ${this.selectedSlot==L+1||this.selectedSlot==L?"":"hidden"} ${d&&!d.stop?"center":""}">
          <span>
            <ha-icon-button
              .path=${_4}
              @mousedown=${this._handleDragStart}
              @touchstart=${this._handleDragStart}
            >
            </ha-icon-button>
          </span>
        </div>
        `:""}
      `})}computeSlotWidths(){let C=this._width,e=this.schedule.slots,t=C-(e.length-1)*3,L=e.map((d,s)=>{let x=O(d.start,this.hass),h;if(d.stop!==void 0)h=O(d.stop,this.hass),!h&&x&&(h=m2);else{let y=e[s+1];h=y&&O(y.start,this.hass)||m2}return(h-x)/m2}),r=5,i=r/t,o=L.filter(d=>d<i).length,a=t-o*r;return L.map(d=>d<i?r:d*a)}_toggleSelectTimeslot(C){let e=C.target;e.tagName.toLowerCase()!="div"&&(e=e.parentElement);let t=Number(e.getAttribute("idx"));this.selectedSlot=this.selectedSlot!==t?t:null;let L=new CustomEvent("update",{detail:{selectedSlot:this.selectedSlot}});this.dispatchEvent(L),C.stopPropagation()}_handleDragStart(C){C.preventDefault(),C.stopPropagation();let e=C.target;for(;e.tagName!=="DIV";)e=e.parentElement;let L=e.parentElement.getBoundingClientRect(),r=Number(e.getAttribute("idx")),i=this.config.time_step||S2,o=i*60,a=r>0?O(this.schedule.slots[r-1].stop||this.schedule.slots[r-1].start,this.hass)+o:o,M=(O(this.schedule.slots[r+1].stop||this.schedule.slots[r+1].start,this.hass)||m2)-o;this.schedule.slots[r+1].stop===void 0&&(M=(O(this.schedule.slots[r+2].stop||this.schedule.slots[r+2].start,this.hass)||m2)-o);let d=R(this.schedule.slots[r+1].start).mode;if(["sunrise","sunset"].includes(d)){let y=R(this.schedule.slots[r+1].start),b=O(A(n({},y),{hours:4,minutes:0}),this.hass),F=O(A(n({},y),{hours:-4,minutes:0}),this.hass);F>a&&(a=F),b<M&&(M=b)}let s=y=>{y.preventDefault();let b;typeof TouchEvent!="undefined"&&y instanceof TouchEvent?b=y.changedTouches[0].pageX:b=y.pageX,b-=L.left,b>L.width&&(b=L.width),b<0&&(b=0);let F=Math.round(b/L.width*m2);F<a?F=a:F>M&&(F=M);let f=Math.floor(F/3600),w=Math.round((F-f*3600)/60),K={mode:"fixed",hours:f,minutes:w};if(["sunrise","sunset"].includes(d)){let p2=d=="sunrise"?this.hass.states["sun.sun"].attributes.next_rising:this.hass.states["sun.sun"].attributes.next_setting,V7=H5(K,p2);K={mode:d,hours:V7.hours,minutes:V7.minutes}}K=l1(K,i);let A2=E(K),L1=[...this.schedule.slots];if(L1=Object.assign(L1,{[r]:A(n({},L1[r]),{stop:A2}),[r+1]:A(n({},L1[r+1]),{start:E(K)})}),L1[r+1].stop===void 0){let p2=E(G(K,{minutes:1}));L1=Object.assign(L1,{[r+2]:A(n({},L1[r+2]),{start:p2})})}this.schedule=A(n({},this.schedule),{slots:L1});let Q5=new CustomEvent("update",{detail:{slots:L1}});this.dispatchEvent(Q5)},x=y=>{y.preventDefault()},h=()=>{window.removeEventListener("mousemove",s),window.removeEventListener("touchmove",s),window.removeEventListener("mouseup",h),window.removeEventListener("touchend",h),window.removeEventListener("blur",h),window.removeEventListener("dragstart",x),s=()=>{}};window.addEventListener("mouseup",h),window.addEventListener("touchend",h),window.addEventListener("blur",h),window.addEventListener("dragstart",x),window.addEventListener("mousemove",s),window.addEventListener("touchmove",s)}static get styles(){return P`
      :host {
        display: block;
        max-width: 100%;
        overflow: hidden;
      }
      .bar {
        width: 100%;
        height: 60px;
        display: flex;
      }
      .time-bar {
        width: 100%;
        height: 18px;
        display: flex;
      }
      .time-bar span {
        display: flex;
        justify-content: center;
        white-space: nowrap;
      }
      .time-bar span.left {
        justify-content: left;
      }
      .time-bar span.right {
        justify-content: right;
      }

      .slot {
        display: flex;
        height: 100%;
        box-sizing: border-box; 
        cursor: pointer;
        background: rgba(var(--rgb-primary-color), 0.7);
        color: var(--text-primary-color);
        font-weight: 500;
        align-items: center;
        justify-content: center;
        word-break: break-all;
        white-space: normal;
        margin-right: 3px;
      }
      .slot:hover {
        background: rgba(var(--rgb-primary-color), 0.85);
      }
      .slot.selected {
        border: 3px solid rgba(var(--rgb-primary-color), 0.85);
      }
      .slot.selected:hover {
        border: 3px solid rgba(var(--rgb-primary-color), 1);
      }
      .slot:first-child {
        border-radius: 10px 0px 0px 10px;
      }
      .slot:last-child {
        border-radius: 0px 10px 10px 0px;
        margin-right: 0px;
      }
      .slot.empty {
        background: rgba(var(--rgb-secondary-text-color), 0.5);
      }
      .slot.empty:hover {
        background: rgba(var(--rgb-secondary-text-color), 0.65);
      }
      .slot.empty.selected {
        border: 3px solid rgba(var(--rgb-secondary-text-color), 0.65);
      }
      .slot.empty.selected:hover {
        border: 3px solid rgba(var(--rgb-secondary-text-color), 1);
      }
      .slot .marker {
        width: 24px;
        height: 24px;
        background: rgba(var(--rgb-primary-color), 0.85);
        margin-top: -80px;
        position: absolute;
        transform: rotate(45deg);
        border-radius: 12px 12px 0px 12px;
      }
      .slot .marker:hover {
        background: rgba(var(--rgb-primary-color), 1);
      }
      .slot.empty .marker {
        background: rgba(var(--rgb-secondary-text-color), 0.85);
      }
      .slot.empty .marker:hover {
        background: rgba(var(--rgb-secondary-text-color), 1);
      }
      .handle {
        display: flex;
        width: 36px;
        height: 100%;
        align-content: center;
        align-items: center;
        justify-content: center;
        margin-left: -18px;
        margin-right: -18px;
        visibility: visible;
      }
      .handle.hidden {
        visibility: hidden;
      }
      .handle span {
        background: var(--card-background-color);
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        z-index: 5;
      }
      .handle ha-icon-button {
        --mdc-icon-button-size: 36px;
        margin-top: -12px;
        margin-left: -12px;
      }
      .handle.center span {
        margin-right: -2px;
      }
    `}};m([v({attribute:!1})],$1.prototype,"config",2),m([Z()],$1.prototype,"schedule",2),m([Z()],$1.prototype,"selectedSlot",2),m([Z()],$1.prototype,"_width",2),m([v({type:Boolean})],$1.prototype,"large",2),$1=m([T("scheduler-timeslot-editor")],$1)});var Z1,r9,e1,i9=p(()=>{"use strict";n1();W();Q();j0();E1();U();j1();t2();b1();N();Z2();Z1=4,r9=H=>{let V=H.hours*60+H.minutes;return V>Z1*60?H=A(n({},H),{hours:Z1,minutes:0}):V<-Z1*60&&(H=A(n({},H),{hours:-Z1,minutes:0})),H},e1=class extends _{constructor(){super(...arguments);this.hours=0;this.minutes=0;this.mode="fixed";this.autoValidate=!0;this.required=!0;this.disabled=!1;this.label="";this.useAmPm=!1;this.large=!1;this.stepSize=10}set time(C){let e=R(C);this.mode=e.mode,this.hours=e.hours,this.minutes=e.minutes}render(){let C=(t,L)=>{let r=t.match(/^[1|2]?[0-9]$/)!==null;return{valid:r,customError:!r}},e=(t,L)=>{let r=t.match(/^[0-5]?[0-9]$/)!==null;return{valid:r,customError:!r}};return l`
      <div class="time-input-wrap">
        <div class="input">
          ${this.label?l`<span class="label">${this.label}</span>`:k}
          ${this.large?k:this._renderTimeMode()}
          <div class="hours">
            ${this.large?l`
            <ha-button
              appearance="plain"
              @click=${()=>this._addTimeOffset({hours:1})}
              ?disabled=${this.mode!="fixed"&&this.hours==Z1}
            >
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </ha-button>
            `:k}
            <ha-input
              id="hour"
              inputmode="numeric"
              .value=${this.formatHours()}
              label=""
              name="hours"
              @change=${this._hoursChanged}
              @focusin=${this._onFocus}
              .required=${this.required}
              .autoValidate=${this.autoValidate}
              maxlength="2"
              max=${this.mode=="fixed"?this.useAmPm?12:23:Z1}
              min=${this.mode!="fixed"&&!this.large?-Z1:0}
              .disabled=${this.disabled}
              .validityTransform=${C}
            >
            </ha-input>
            ${this.large?l`
            <ha-button
              appearance="plain"
              @click=${()=>this._addTimeOffset({hours:-1})}
              ?disabled=${this.mode!="fixed"&&this.hours==-Z1}
            >
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </ha-button>
            `:k}
          </div>
          <div class="time-separator">:</div>
          <div class="minutes">
            ${this.large?l`
            <ha-button
              appearance="plain"
              @click=${()=>this._addTimeOffset({minutes:this.stepSize})}
              ?disabled=${this.mode!="fixed"&&this.hours==Z1}
            >
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </ha-button>
            `:k}
            <ha-input
              id="min"
              inputmode="numeric"
              .value=${this.formatMinutes()}
              label=""
              @change=${this._minutesChanged}
              @focusin=${this._onFocus}
              name="minutes"
              .required=${this.required}
              .autoValidate=${this.autoValidate}
              maxlength="2"
              max="59"
              min="0"
              .disabled=${this.disabled}
              .validityTransform=${e}
            >
            </ha-input>
            ${this.large?l`
            <ha-button
              appearance="plain"
              @click=${()=>this._addTimeOffset({minutes:-this.stepSize})}
              ?disabled=${this.mode!="fixed"&&this.hours==-Z1}
            >
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </ha-button>
            `:k}
          </div>
          ${this._renderSuffix()}
          ${this.large?this._renderTimeMode():k}
        </div>
      </div>
    `}_renderTimeMode(){if(!this.hass.states["sun.sun"])return k;if(this.large){let C=()=>{let e=this._convertTimeMode();e.mode!="fixed"&&(e=r9(e)),this.mode=e.mode,this.hours=e.hours,this.minutes=e.minutes,this._valueChanged()};return l`
        <div class="mode">
          ${this.hass.states["sun.sun"]?l`
          <ha-button
            appearance="${this.mode=="fixed"?"plain":"accent"}"
            variant="${this.mode=="fixed"?"neutral":"brand"}"
            @click=${C}
          >
            <ha-icon icon="mdi:theme-light-dark"></ha-icon>
          </ha-button>
          `:k}
        </div>
      `}else{let C=["fixed","sunrise","sunset"],e={fixed:c("ui.components.selectors.selector.types.time",this.hass),sunrise:c("ui.panel.config.automation.editor.triggers.type.sun.sunrise",this.hass),sunset:c("ui.panel.config.automation.editor.triggers.type.sun.sunset",this.hass)},t={fixed:"mdi:clock-outline",sunrise:"mdi:weather-sunset-up",sunset:"mdi:weather-sunset-down"},L={fixed:h4,sunrise:b4,sunset:y4},r=o=>{if(o=="fixed")return!1;let a=this._convertTimeMode(o);return Math.abs(a.hours*60+a.minutes)>Z1*60};return l`
      <ha-dropdown
        @wa-select=${o=>{let a=o.detail.item.value;if(this.mode==a)return;let M=this._convertTimeMode(a);this.hours=M.hours,this.minutes=M.minutes,this.mode=a,this._valueChanged()}}
        @wa-after-hide=${o=>{o.target.firstElementChild.blur()}}
        ?disabled=${this.disabled}
      >
        <ha-icon-button
          slot="trigger"
          .path=${L[this.mode]}
          ?disabled=${this.disabled}
        >
        </ha-icon-button>
        ${C.map(o=>l`
        <ha-dropdown-item
          ?noninteractive=${this.mode==o}
          ?disabled=${r(o)&&this.mode!=o}
          value="${o}"
        >
          <ha-icon
            icon="${t[o]}"
          ></ha-icon>
          ${e[o]}
        </ha-dropdown-item>
        `)}
      </ha-dropdown>
    `}}_renderSuffix(){if(this.large){let C=()=>{let L=H1(this.hours).am_pm,r=H1(this.hours).hours;this.hours=m5(r,L=="AM"?"PM":"AM"),this._valueChanged()},e=()=>{this.hours!=0?this.hours=-this.hours:this.minutes=-this.minutes,this._valueChanged()},t=()=>{this.mode=this.mode=="sunrise"?"sunset":"sunrise",this._valueChanged()};return l`
        <div class="suffix">
        ${this.useAmPm&&this.mode=="fixed"?l`
            <ha-button appearance="plain" @click=${C}>
              <span class="large">
                ${H1(this.hours).am_pm=="AM"?"AM":"PM"}
              </span>
            </ha-button>
          `:k}
        ${this.mode!="fixed"?l`
            <ha-button appearance="plain" size="large" @click=${e}>
              <span class="large">
              ${this.hours<0||this.minutes<0?this.hass.localize("ui.panel.config.automation.editor.conditions.type.sun.before").trim().toLowerCase():this.hass.localize("ui.panel.config.automation.editor.conditions.type.sun.after").trim().toLowerCase()}
              </span>
            </ha-button>
            <ha-button appearance="plain" @click=${t}>
              <ha-icon icon="${this.mode=="sunrise"?"mdi:weather-sunny":"mdi:weather-night"}"></ha-icon>
            </ha-button>
         `:k}
        </div>
      `}else return!this.useAmPm||this.mode!="fixed"?k:l`
        <ha-select
          .required=${this.required}
          .value=${H1(this.hours).am_pm=="AM"?"AM":"PM"}
          .disabled=${this.disabled}
          name="amPm"
          naturalMenuWidth
          fixedMenuPosition
          @selected=${this._amPmChanged}
          @closed=${C=>{C.stopPropagation()}}
        >
          <ha-dropdown-item value="AM">AM</ha-dropdown-item>
          <ha-dropdown-item value="PM">PM</ha-dropdown-item>
        </ha-select>
      `}_convertTimeMode(C){let e=this.hass.states["sun.sun"].attributes.next_rising,t=this.hass.states["sun.sun"].attributes.next_setting;if(C&&C!="fixed"||this.mode=="fixed"){let L=H5({hours:this.hours,minutes:this.minutes},e),r=H5({hours:this.hours,minutes:this.minutes},t),i=L.hours*60+L.minutes,o=r.hours*60+r.minutes,a=C||(Math.abs(i)<=Math.abs(o)?"sunrise":"sunset"),M=a=="sunrise"?L:r;return{mode:a,hours:M.hours,minutes:M.minutes}}else{let L=this.mode=="sunrise"?R(e):R(t);return L=G(L,{hours:this.hours,minutes:this.minutes}),{mode:"fixed",hours:L.hours,minutes:L.minutes}}}_hoursChanged(C){let e=Number(C.target.value);if(this.useAmPm){let t=H1(this.hours).am_pm;e=m5(e,t)}this.hours=e,this._valueChanged()}_minutesChanged(C){let e=Number(C.target.value);this.minutes=e,this._valueChanged()}_amPmChanged(C){let e=C.detail.value;if(H1(this.hours).am_pm==e)return;let L=H1(this.hours).hours;this.hours=m5(L,e=="AM"?"AM":"PM"),this._valueChanged()}_addTimeOffset(C){let e={mode:this.mode,hours:this.hours,minutes:this.minutes};e=G(e,C),C.minutes&&(e=l1(e,this.stepSize)),this.mode!="fixed"&&(e=r9(e)),this.hours=e.hours,this.minutes=e.minutes,this._valueChanged()}_valueChanged(){let C={mode:this.mode,hours:this.hours,minutes:this.minutes};$(this,"value-changed",{value:C})}_onFocus(C){C.currentTarget.select()}formatHours(){let C=this.hours<0||this.minutes<0,e=this.useAmPm&&this.mode=="fixed"?H1(this.hours).hours:this.hours;return C&&!this.large?"-"+Math.abs(e).toFixed():this.mode!="fixed"&&!this.large?"+"+Math.abs(e).toFixed():this.large?Math.abs(e):e.toFixed()}formatMinutes(){return Math.abs(this.minutes).toString().padStart(2,"0")}};e1.styles=P`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 4px;
      align-items: center;
    }
    .time-input-wrap {
      display: flex;
      border-radius: var(--mdc-shape-small, 4px) var(--mdc-shape-small, 4px) 0 0;
      overflow: hidden;
      position: relative;
      direction: ltr;
    }
    :host([large]) .time-input-wrap {
      width: 100%;
    }
    div.input {
      display: flex;
    }
    :host([large]) div.input {
      width: 100%;
    }
    div.hours, div.minutes {
      display: flex;
      flex-direction: column;
      width: min-content;
    }
    div.hours ha-icon, div.minutes ha-icon {
      --mdc-icon-size: 42px;
    }
    .time-separator {
      background-color: var(--ha-color-form-background);
      color: var(--ha-color-text-secondary);
      border-bottom: 1px solid var(--ha-color-border-neutral-loud);
      box-sizing: border-box;
      height: 56px;
      width: 9px;
      display: flex;
      align-items: center;
      align-self: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 600;
    }
    :host([disabled]) .time-separator {
      background-color: var(--ha-color-form-background-disabled);
      opacity: 0.5;
    }
    :host([large]) .time-separator {
      background: none;
      border: none;
      font-size: 36px;
    }
    ha-input {
      width: 40px;
      --mdc-shape-small: 0;
      --text-field-appearance: none;
      --text-field-padding-top: 0;
      --text-field-padding-bottom: 0;
      --text-field-padding-start: 4px;
      --text-field-padding-end: 4px;
      --text-field-suffix-padding-left: 2px;
      --text-field-suffix-padding-right: 0;
      --ha-input-text-align: center;
      --ha-input-padding-top: 0px;
      --ha-input-padding-bottom: 0px;
    }
    ha-input::part(wa-input) {
      text-align: center;
    }
    ha-input::part(wa-hint) {
      height: 0;
      min-height: 0;
    }
    ha-input::part(wa-base) {
      padding: var(--ha-space-1);
    }
    ha-input#hour::part(wa-base) {
      border-top-right-radius: 0px;
    }
    ha-input#min::part(wa-base) {
      border-top-left-radius: 0px;
    }
    :host([large]) ha-input#hour::part(wa-base),
    :host([large]) ha-input#min::part(wa-base) {
      border-top-right-radius: var(--ha-border-radius-sm);
      border-top-left-radius: var(--ha-border-radius-sm);
    }
    :host([large]) ha-input {
      width: 75px;
      --wa-form-control-value-font-size: 42px;
    }
    div.suffix {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      align-items: center;
      flex-wrap: wrap;
      align-content: center;
    }
    div.mode {
      display: flex;
      align-items: center;
    }
    :host([large]) div.suffix ha-icon, :host([large]) div.mode ha-icon {
      --mdc-icon-size: 32px;
    }
    ha-select {
      --mdc-shape-small: 0;
      width: 90px;
    }
    .label {
      display: flex;
      justify-content: center;
      align-self: center;
      white-space: nowrap;
    }
    ha-dropdown-menu {
      display: flex;
      align-items: flex-end;
      margin-right: 4px;
      padding-bottom: 4px;
    }
    ha-dropdown-menu ha-icon-button {
      color: var(--secondary-text-color);
    }
    ha-dropdown-item[disabled] ha-icon {
      color: var(--disabled-text-color);
    }
    ha-dropdown-item[noninteractive] {
      background-color: rgba(var(--rgb-primary-color), 0.12);
      color: var(--sidebar-selected-text-color);
    }
    ha-dropdown-item[noninteractive] ha-icon {
      color: var(--sidebar-selected-text-color);
    }
    ha-button {
      --ha-button-border-radius: 8px;
      --button-color-fill-loud-hover: var(--ha-color-primary-50);
    }
    ha-button span.large {
      font-size: 16px;
      text-transform: uppercase;
    }
    @media all and (max-width: 450px), all and (max-height: 500px) {
      ha-button {
        --wa-form-control-padding-inline: 10px;
      }
    }
  `,m([v({attribute:!1})],e1.prototype,"hass",2),m([Z()],e1.prototype,"hours",2),m([Z()],e1.prototype,"minutes",2),m([Z()],e1.prototype,"mode",2),m([v({type:Boolean})],e1.prototype,"autoValidate",2),m([v({type:Boolean})],e1.prototype,"required",2),m([v({type:Boolean})],e1.prototype,"disabled",2),m([v({type:String})],e1.prototype,"label",2),m([v({type:Boolean})],e1.prototype,"useAmPm",2),m([v({type:Boolean})],e1.prototype,"large",2),m([v({attribute:!1})],e1.prototype,"stepSize",2),e1=m([T("scheduler-time-picker")],e1)});var o9={};B(o9,{DialogSelectWeekdays:()=>z1});var B2,z1,W0=p(()=>{"use strict";W();Q();n1();U();C1();g5();f5();G1();N();B2="Custom",z1=class extends _{constructor(){super(...arguments);this.weekdayTypeCustomSelected=!1;this.selectedWeekdays=[]}async showDialog(C){this._params=C,await this.updateComplete,this.selectedWeekdays=this._params.weekdays.filter(e=>!["daily","weekend","workday"].includes(e)),this.weekdayTypeCustomSelected=this.selectedWeekdays.length>0&&this._params.weekdays.length==this.selectedWeekdays.length}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?l`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        width="small"
      >
        <ha-dialog-header slot="header">
          ${this.weekdayTypeCustomSelected?l`
          <ha-icon-button
            slot="navigationIcon"
            .label=${c("ui.dialogs.more_info_control.dismiss",this.hass)}
            .path=${O2}
            @click=${this.backClick}
          ></ha-icon-button>
            `:l`
          <ha-icon-button
            slot="navigationIcon"
            data-dialog="close"
            .label=${c("ui.dialogs.more_info_control.dismiss",this.hass)}
            .path=${t1}
          ></ha-icon-button>
          `};
          <div slot="title">
              ${u("ui.dialog.weekday_picker.title",this.hass)}
          </div>
        </ha-dialog-header>
        <div class="wrapper">
          <ha-list>
          ${this._renderWeekdayOptions()}
          </ha-list>
        </div>

        <ha-dialog-footer slot="footer">
          <ha-button
            appearance="plain"
            slot="secondaryAction"
            @click=${this.cancelClick}
            data-dialog="close"
          >
            ${c("ui.common.cancel",this.hass)}
          </ha-button>
          <ha-button
            appearance="accent"
            slot="primaryAction"
            @click=${this.confirmClick}
            data-dialog="close"
            ?disabled=${!this._params.weekdays.length}
          >
            ${c("ui.common.ok",this.hass)}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `:l``}_renderWeekdayOptions(){let C=[];if(!this.weekdayTypeCustomSelected)C=["daily","workday","weekend",B2];else{C=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];let t=_0(this.hass);C=((r,i)=>r.concat(r).slice(i,i+r.length))(C,t)}let e=t=>{var L,r;return t==B2?(L=this._params)==null?void 0:L.weekdays.some(i=>!["daily","weekend","workday"].includes(i)):(r=this._params)==null?void 0:r.weekdays.includes(t)};return C.map(t=>l`
        <ha-list-item
          graphic="icon"
          @click=${this._toggleSelectOption}
          option="${t}"
          ?hasMeta=${t==B2}
        >
          ${e(t)?l`<ha-icon slot="graphic" icon="mdi:check"></ha-icon>`:""}
          ${t==B2?l`
            ${z(u("ui.dialog.weekday_picker.choose",this.hass))}
            ${this.selectedWeekdays.length?l`<span class="badge">${this.selectedWeekdays.length}</span>`:""}
            `:z(_1(t,"long",this.hass))}

          ${t==B2?l`<ha-icon slot="meta" icon="mdi:chevron-right"></ha-icon>`:""}
        </ha-list-item>
    `)}_toggleSelectOption(C){let e=C.target.getAttribute("option"),t=[...this._params.weekdays];e==B2?(t=this.selectedWeekdays,this.weekdayTypeCustomSelected=!0):["daily","weekend","workday"].includes(e)?(t.includes(e)?t.length>1&&(t=t.filter(L=>L!=e)):t=[e],this.weekdayTypeCustomSelected=!1):t.includes(e)?t=t.filter(L=>L!=e):t=[...t,e],this._params=Object.assign(this._params,{weekdays:t}),C.target.blur(),this.requestUpdate()}confirmClick(){let C=Array.from(new Set(this._params.weekdays));this._params.confirm(C)}cancelClick(){this._params.cancel()}backClick(){this.weekdayTypeCustomSelected=!1,this.selectedWeekdays=this._params.weekdays.filter(C=>!["daily","weekend","workday"].includes(C))}static get styles(){return P`
      div.wrapper {
        color: var(--primary-text-color);
        padding: 0px 12px;
      }
      ha-list {
        --mdc-list-vertical-padding: 0px;
      }
      ha-list-item[disabled] {
        color: var(--disabled-text-color);
      }
      ha-list-item.nested {
        --mdc-list-side-padding: 36px;
      }
      .badge {
        height: 24px;
        border-radius: 12px;
        background: rgba(var(--rgb-primary-color), 0.3);
        line-height: 1.25rem;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 0px 12px;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        margin: 0px 16px;
      }
    `}};m([v({attribute:!1})],z1.prototype,"hass",2),m([Z()],z1.prototype,"_params",2),m([Z()],z1.prototype,"weekdayTypeCustomSelected",2),m([Z()],z1.prototype,"selectedWeekdays",2),z1=m([T("dialog-select-weekdays")],z1)});var U0,a9=p(()=>{"use strict";U0=(H,V)=>((e,t)=>e<t?-1:e>t?1:0)(H.toLowerCase(),V.toLowerCase())});var n9,M9,s9=p(()=>{"use strict";v5();C5();I();N();K2();J2();a9();Z5();b2();I0();q();a2();G1();k2();n9=(H,V,C)=>{let e=s=>{if(!Object.keys(p1).includes(V))return!1;let x=Object.keys(p1[V]).includes(s);if(!x&&Object.keys(p1[V]).includes("{entity_id}")){if(V=="script"&&["turn_on","turn_off","reload","toggle","test"].includes(s))return!1;x=m1(`${V}.${s}`,C)}return x},t=Object.keys(H.services).includes(V)?Object.keys(H.services[V]).filter(e):[],L=s=>c(`component.${s}.title`,H,!1)||s.replace(/_/g," "),r=s=>{let x={service:`${V}.${s}`,service_data:{}},h=z(f1(x,H,C.customize));return V=="script"?Object.keys(C.customize||{}).includes(`${V}.${s}`)&&g(C.customize[`${V}.${s}`].name)?C.customize[`${V}.${s}`].name:`${z(y1(`${V}.${s}`,H,C.customize))}: ${h}`:`${L(V)}: ${h}`},i=s=>{let x=c(`component.${V}.services.${s}.description`,H,!1);return x||(x=H.services[V][s].description),!x&&V=="script"&&(x=c(`component.${V}.services.turn_on.description`,H,!1)),x},o=s=>V=="script"&&Object.keys(C.customize||{}).includes(`${V}.${s}`)&&g(C.customize[`${V}.${s}`].icon)?C.customize[`${V}.${s}`].icon:Object.keys(V1).includes(V)&&Object.keys(V1[V].services).includes(s)?V1[V].services[s]:D1(V),a=t.map(s=>({key:s,name:r(s),description:i(s),icon:o(s),action:{service:s.includes(".")?s:`${V}.${s}`,service_data:{},target:H.services[V][s].target?{}:void 0}})),M=n4(C.customize||{},V);return M.length&&(a=a.filter(s=>!M.some(x=>U0(J(s.action.service),x)>0||U0(f1(s.action,H,C.customize),x)>0))),q1(C.customize||{},V).forEach(s=>{let x=s.service;for(;a.find(h=>h.key==x);)x+="_2";s.variables&&Object.entries(s.variables).forEach(([h,y])=>{let b=f0(y),F=I5(b);!g(s.service_data[h])&&g(F)?s=A(n({},s),{service_data:A(n({},s.service_data),{[h]:F})}):g(s.service_data[h])||(s=A(n({},s),{service_data:A(n({},s.service_data),{[h]:null})}))}),a.push({key:x,name:`${L(V)}: ${M9(s.name||r(J(s.service)))}`,description:M9(s.name||""),icon:s.icon||D1(V),action:{service:s.service.includes(".")?s.service:`${V}.${s.service}`,service_data:s.service_data||{},target:s.target?s.target:void 0,name:s.name,icon:s.icon}})}),a},M9=H=>{/<.+?>/g.exec(H)!==null&&(H=new DOMParser().parseFromString(H,"text/html").body.textContent||"");let V;for(;V=/\[([^\]]+)\]/.exec(H);)H=H.replace(V[0],"");for(;V=/\{([^\}]+)\}/.exec(H);)H=H.replace(V[0],"");return H}});var d9={};B(d9,{DialogSelectAction:()=>d1});var d1,G0=p(()=>{"use strict";W();Q();n1();s9();O0();y2();e5();C1();N();M2();q();d1=class extends _{constructor(){super(...arguments);this._search="";this._filter="";this.timer=0;this.lockDomain=!1;this.showAll=!1}async showDialog(C){this._params=C,this.lockDomain=C.domainFilter!==void 0,this.showAll=!1,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0,this._clearSearch(),this._height=void 0,this._width=void 0}async willUpdate(){this.hass.loadBackendTranslation("title"),this.hass.loadBackendTranslation("services")}render(){return this._params?l`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        @wa-after-show=${this._opened}
      >
        <div slot="header">
          <ha-dialog-header>
            ${this._params.domainFilter!==void 0&&!this.lockDomain?l`
            <ha-icon-button
              slot="navigationIcon"
              .label=${c("ui.common.back",this.hass)}
              .path=${O2}
              @click=${this._clearDomain}
            ></ha-icon-button>
            `:l`
            <ha-icon-button
              slot="navigationIcon"
               data-dialog="close"
              .label=${c("ui.dialogs.more_info_control.dismiss",this.hass)}
              .path=${t1}
            ></ha-icon-button>
            `}
            <div slot="title">
              ${u("ui.dialog.action_picker.title",this.hass)}
            </div>
            ${!this.lockDomain&&g(this._params.cardConfig.include)?l`
            <ha-dropdown
              placement="bottom-end"
              slot="actionItems"
              @wa-after-hide=${C=>{C.target.firstElementChild.blur()}}
            >
              <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${K1}>
              </ha-icon-button>
              <ha-dropdown-item @click=${this._toggleShowAll}>
                <ha-icon
                  icon="mdi:check"
                  style="${this.showAll?"":"visibility: hidden"}"
                ></ha-icon>
                ${u("ui.dialog.action_picker.show_all",this.hass)}
              </ha-dropdown-item>
            </ha-dropdown>`:""}
          </ha-dialog-header>

          <ha-input
            dialogInitialFocus
            .placeholder=${c("ui.common.search",this.hass)}
            aria-label=${c("ui.common.search",this.hass)}
            @input=${this._handleSearchChange}
            .value=${this._search}
            icon
            .iconTrailing=${this._search}
          >
            <div class="trailing" slot="trailingIcon">
              ${this._search&&l`
                <ha-icon-button
                  @click=${this._clearSearch}
                  .label=${c("ui.common.clear",this.hass)}
                  .path=${t1}
                  class="clear-button"
                ></ha-icon-button>
              `}
              <slot name="suffix"></slot>
            </div>
          </ha-input>
        </div>
        
        <ha-list
          style=${x1({minWidth:`${this._width}px`,height:this._height?`${Math.min(468,this._height)}px`:"auto"})}
        >
          ${this._renderOptions()}
        </ha-list>
      </ha-dialog>
    `:l``}_opened(){var e;let C=(e=this.shadowRoot.querySelector("ha-list"))==null?void 0:e.getBoundingClientRect();this._width=C==null?void 0:C.width,this._height=C==null?void 0:C.height}_handleSearchChange(C){let e=C.currentTarget.value;this._search=e,clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this._filter=this._search},100)}_renderOptions(){var t,L;if((t=this._params)!=null&&t.domainFilter)return this._renderDomainActions();let C=n({},(L=this._params)==null?void 0:L.cardConfig);this.showAll&&(C=A(n({},C),{include:void 0,exclude:void 0}));let e=T5(this.hass,C);return e.length===1?(this._params=A(n({},this._params),{domainFilter:[e[0].key]}),this._renderDomainActions()):this._renderDomainList(e)}_renderDomainList(C){C.sort((L,r)=>A1(L.name,r.name)),this._filter&&(C=C.filter(L=>{let r=this._filter.toLowerCase().trim().split(" ");return r.every(i=>L.name.toLowerCase().includes(i))||r.every(i=>L.key.toLowerCase().includes(i))}));let e=[];for(var t=C.length;t<7;t++)e.push(0);return Object.keys(C).length?l`
      ${Object.keys(C).map(L=>l`
        <ha-list-item
          graphic="icon"
          hasMeta
          @click=${()=>this._handleDomainClick(C[L].key)}
        >
          <ha-icon slot="graphic" icon="${C[L].icon}"></ha-icon>
          <ha-icon slot="meta" icon="mdi:chevron-right"></ha-icon>
          <span>${C[L].name}</span>
        </ha-list-item>`)}
        ${e.map(L=>l`
        <ha-list-item
          graphic="icon"
          hasMeta
          noninteractive
        >
        </ha-list-item>
        `)}
      `:l`
          <ha-list-item disabled>
            ${c("ui.components.combo-box.no_match",this.hass)}
          </ha-list-item>
        `}_renderDomainActions(){var t,L;let C=n({},(t=this._params)==null?void 0:t.cardConfig);this.showAll&&(C=A(n({},C),{include:void 0,exclude:void 0}));let e=this._params.domainFilter.map(r=>n9(this.hass,r,C)).flat();return(L=this._params.entityFilter)!=null&&L.length&&(e=e.filter(r=>{var i;return(i=this._params.entityFilter)==null?void 0:i.every(o=>{let a=a1(r.action,this._params.cardConfig.customize),M=this.hass.states[o];return a.supported_features&&!((M.attributes.supported_features||0)&a.supported_features)||Object.keys(r.action.service_data).includes("entity_id")&&r.action.service_data.entity_id!=o?!1:!(Object.keys(r.action.target||{}).includes("entity_id")&&(r.action.target||{}).entity_id!=o)})})),this._filter&&(e=e.filter(r=>{let i=this._filter.toLowerCase().trim().split(" ");return i.every(o=>r.name.toLowerCase().includes(o))||i.every(o=>r.key.toLowerCase().includes(o))})),Object.keys(e).length?Object.keys(e).map(r=>l`
        <ha-list-item
          graphic="icon"
          @click=${()=>this._handleActionClick(e[r])}
          twoline
        >
          <ha-icon slot="graphic" icon="${e[r].icon}"></ha-icon>
          <span>${e[r].name}</span>
          <span slot="secondary">${e[r].description}</span>
        </ha-list-item>
    `):l`
          <ha-list-item disabled>
            ${c("ui.components.combo-box.no_match",this.hass)}
          </ha-list-item>
        `}_handleDomainClick(C){this._params=A(n({},this._params),{domainFilter:[C]}),this._clearSearch()}_clearDomain(){this._params=A(n({},this._params),{domainFilter:void 0}),this._clearSearch()}_handleActionClick(C){this._params.confirm(C.action),this._params=void 0,this._clearSearch()}_clearSearch(){this._search="",this._filter=""}_toggleShowAll(){this.showAll?this.showAll=!1:(this.showAll=!0,this.lockDomain||this._clearDomain())}static get styles(){return P`
      ha-dialog {
        --dialog-content-padding: 0;
        --ha-dialog-width-md: 480px;
      }
      ha-input {
        display: block;
        margin: 0 16px;
      }
      ha-list {
        min-height: 300px;
      }
      ha-list-item:not([twoline]) {
        height: 56px;
      }
    `}};m([v({attribute:!1})],d1.prototype,"hass",2),m([Z()],d1.prototype,"_params",2),m([Z()],d1.prototype,"_search",2),m([Z()],d1.prototype,"_filter",2),m([Z()],d1.prototype,"_width",2),m([Z()],d1.prototype,"_height",2),m([Z()],d1.prototype,"lockDomain",2),m([Z()],d1.prototype,"showAll",2),d1=m([T("dialog-select-action")],d1)});var V5,q0=p(()=>{"use strict";W();Q();V5=class extends _{constructor(){super(...arguments);this.showPrefix=!1}render(){return l`
      ${this.showPrefix?l`
      <div class="prefix-wrap">
        <div class="prefix"><slot name="prefix"></slot></div>
        <div class="body">
          <div class="heading"><slot name="heading"></slot></div>
          <div class="secondary"><slot name="description"></slot></div>
        </div>
      </div>
      `:l`
      <div class="body">
        <div class="heading"><slot name="heading"></slot></div>
        <div class="secondary"><slot name="description"></slot></div>
      </div>
      `}
      <div class="content"><slot></slot></div>
    `}static get styles(){return P`

    :host {
      display: flex;
      padding: 0px;
      align-content: normal;
      align-self: auto;
      align-items: center;
    }
    .body {
      padding-top: 0px;
      padding-bottom: 0px;
      padding-left: 0;
      padding-inline-start: 0;
      padding-right: 16x;
      padding-inline-end: 16px;
      overflow: hidden;
      align-content: center;
    }
    .body > * {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .content {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      padding: 8px 0;
    }
    // .content ::slotted(*) {
    //   width: var(--settings-row-content-width);
    // }
    .prefix-wrap {
      display: flex;
      flex-direction: row;
    }
    .prefix {
      display: flex;
      width: 48px;
    }
    .heading, .heading ::slotted(*) {
      display: flex;
      align-items: center;
      width: 150px;
    }
    @media all and (max-width: 450px) {
      :host {
        align-items: normal;
        flex-direction: column;
        border-top: 1px solid var(--divider-color);
        padding: 8px 16px;
      }
      .prefix-wrap {
        display: flex;
        align-items: center;
      }
      .content ::slotted(*) {
        width: 100%;
      }
    `}};m([v({type:Boolean})],V5.prototype,"showPrefix",2),V5=m([T("scheduler-settings-row")],V5)});var g1,l9=p(()=>{"use strict";n1();W();Q();U();M2();f5();I0();$0();b2();I();V2();C1();X4();e9();V9();J2();j5();b1();t2();G1();N();q();t9();k2();S1();L9();i9();D0();W0();G0();R5();q0();$5();g1=class extends _{constructor(){super(...arguments);this.selectedSlot=null;this.large=!1;this.selectedEntry=0}shouldUpdate(C){return C.get("schedule")&&this.dispatchEvent(new CustomEvent("change",{detail:{schedule:this.schedule}})),!0}render(){return l`
    ${this.schedule.entries.map((C,e)=>l`
      
      <div class="editor-header">
        <div class="weekdays">
          <span>
            ${u("ui.panel.editor.repeated_days",this.hass)}:
            ${S5(C.weekdays,"short",this.hass)}
          </span>
          <ha-icon-button .path=${w5} @click=${t=>this._showWeekdayDialog(t,e)}></ha-icon-button>
        </div>
        <div class="weekdays-actions">
        <ha-button appearance="plain" size="small" @click=${this.toggleViewMode}>
          ${this.viewMode=="scheme"?u("ui.panel.editor.toggle_single_mode",this.hass):u("ui.panel.editor.toggle_scheme_mode",this.hass)}
          <ha-icon slot="end" icon="mdi:swap-horizontal"></ha-icon>
        </ha-button>
        </div>
      </div>

      ${this.viewMode=="scheme"?l`
      <div class="editor-header">
        <div class="weekdays">
          ${this.hass.localize("ui.dialogs.helper_settings.input_datetime.time")}:
        </div>
        ${this.renderActionButtons()}
      </div>
      <scheduler-timeslot-editor
        .hass=${this.hass}
        .config=${this.config}
        .schedule=${C}
        .selectedSlot=${this.selectedSlot}
        @update=${t=>this._handleUpdate(t,e)}
        .large=${this.large}
      >
      </scheduler-timeslot-editor>
      `:l`
          ${this.hass.localize("ui.dialogs.helper_settings.input_datetime.time")}:
          <scheduler-time-picker
            .hass=${this.hass}
            .time=${this.schedule.entries[this.selectedEntry].slots[this.selectedSlot].start}
            @value-changed=${this._startTimeChanged}
            ?useAmPm=${v1(this.hass.locale)}
            .stepSize=${this.config.time_step||S2}
            large
          >
          </scheduler-time-picker>
      `}
    `)}

    ${this.renderSlot()}
    `}toggleViewMode(){let C=this.viewMode=="scheme"?"single":"scheme";this.dispatchEvent(new CustomEvent("setViewMode",{detail:C}))}renderActionButtons(){if(this.selectedSlot===null||this.selectedEntry===null)return l``;let C=this.schedule.entries[this.selectedEntry].slots[this.selectedSlot].start,e=this.schedule.entries[this.selectedEntry].slots[this.selectedSlot].stop||C,t=O(C,this.hass),r=(O(e,this.hass)||24*3600)-t;return l`
      <div class="actions">
        <ha-icon-button .path=${O2} @click=${i=>{this._updateSelectedSlot(this.selectedSlot-1),i.target.blur()}} ?disabled=${this.selectedSlot===null||this.selectedSlot<1}>
        </ha-icon-button> 
        <ha-icon-button .path=${v4} @click=${i=>{this._updateSelectedSlot(this.selectedSlot+1),i.target.blur()}} ?disabled=${this.selectedSlot===null||this.selectedSlot>this.schedule.entries[this.selectedEntry].slots.length-2}>
        </ha-icon-button> 
        <ha-icon-button .path=${S4} @click=${this._addTimeslot} ?disabled=${r<1800}>
        </ha-icon-button>
        <ha-icon-button .path=${f4} @click=${this._removeTimeslot} ?disabled=${this.schedule.entries[this.selectedEntry].slots.length<=2}>
        </ha-icon-button> 
      </div>
    `}renderSlot(){if(this.selectedEntry===null||this.selectedSlot===null)return l`
        <div class="slot-placeholder"> 
          ${u("ui.panel.editor.select_timeslot",this.hass)}
        </div>
      `;let C=this.schedule.entries[this.selectedEntry].slots[this.selectedSlot],e=this.selectedSlot===this.schedule.entries[this.selectedEntry].slots.length-1,t=C.stop;return!t&&this.selectedSlot<this.schedule.entries[this.selectedEntry].slots.length-1&&(t=this.schedule.entries[this.selectedEntry].slots[this.selectedSlot+1].start),t||(t=C.start),l`
      ${this.viewMode=="scheme"?l`
      <div class="two-column">
        <div class="column">
          <scheduler-time-picker
            .hass=${this.hass}
            label="${u("ui.panel.editor.start_time",this.hass)}:"
            ?disabled=${this.selectedSlot==0}
            .time=${C.start}
            @value-changed=${this._startTimeChanged}
            ?useAmPm=${v1(this.hass.locale)}
          >
          </scheduler-time-picker>
        </div>
        <div class="column">
          <scheduler-time-picker
            .hass=${this.hass}
            label="${u("ui.panel.editor.stop_time",this.hass)}:"
            ?disabled=${e}
            .time=${t}
            @value-changed=${this._stopTimeChanged}
            ?useAmPm=${v1(this.hass.locale)}
          >
          </scheduler-time-picker>
        </div>
      </div>`:""}

      ${u("ui.panel.editor.action",this.hass)}:
      ${this._renderActionConfig()}
    `}_renderActionConfig(){var M,d,s,x;let C=n({},this.schedule.entries[this.selectedEntry].slots[this.selectedSlot]),e=C.actions.length?C.actions[0]:void 0;if(!e)return l`
      <div>
        <ha-button appearance="plain"
          @click=${this._showActionDialog}
        >
          <ha-icon slot="start" icon="mdi:plus"></ha-icon>
          ${u("ui.panel.editor.add_action",this.hass)}
        </ha-button>
      </div>
    `;let t=a1(e,this.config.customize),L=((M=t.target)==null?void 0:M.domain)||S(e.service),r=g((d=t==null?void 0:t.target)==null?void 0:d.entity_id)||this.schedule.entries[this.selectedEntry].slots.some(h=>{var y,b;return h.actions.length&&g((b=(y=a1(h.actions[0],this.config.customize))==null?void 0:y.target)==null?void 0:b.entity_id)});if(t===void 0)return l``;let i=Object.keys(t.fields||{}).filter(h=>z5(e,h,this.hass,this.config.customize)),o="",a=[((s=e.target)==null?void 0:s.entity_id)||[]].flat();return!a.length&&["notify","script"].includes(L)&&(a=[e.service]),a.length&&(o+=a.map(h=>y1(h,this.hass,this.config.customize)).join(", "),o+=": "),o+=f1(e,this.hass,this.config.customize,!1,!0),l`
      <scheduler-collapsible-section
        ?expanded=${!0}
        ?disabled=${!0}
      >
        <div slot="header" class="header">
          <ha-icon slot="icon" icon="${P2(e,this.config.customize)}"></ha-icon>
          <span>${z(o)}</span>
        </div>

        <ha-dropdown
          slot="contextMenu" 
          @wa-select=${this._actionItemOptionsClick}
          @wa-after-hide=${h=>{h.target.firstElementChild.blur()}}
          placement="bottom-end"
        >
          <ha-icon-button slot="trigger" .path=${K1}>
          </ha-icon-button>
          <ha-dropdown-item value="change_type">
            <ha-icon icon="mdi:pencil"></ha-icon>
            ${c("ui.panel.lovelace.editor.card.conditional.change_type",this.hass)}
          </ha-dropdown-item>
          <ha-dropdown-item variant="danger" value="delete">
            <ha-icon icon="mdi:delete"></ha-icon>
            ${c("ui.common.delete",this.hass)}
          </ha-dropdown-item>
        </ha-dropdown>

        <div slot="content">

          ${t.target?l`
          <scheduler-settings-row>
            <span slot="heading">${c("ui.components.entity.entity-picker.entity",this.hass)}</span>
            <scheduler-entity-picker
              .hass=${this.hass}
              .config=${this.config}
              .domain=${L}
              .filterFunc=${h=>t.supported_features?((h.attributes.supported_features||0)&t.supported_features)>0:!0}
              @value-changed=${this._selectEntity}
              .value=${[((x=e.target)==null?void 0:x.entity_id)||[]].flat()}
              ?multiple=${!0}
              ?disabled=${r}
            >
            </scheduler-entity-picker>
          </scheduler-settings-row>
          `:""}

          ${i.map(h=>{var f;let y=Q1(e.service,(f=e.target)==null?void 0:f.entity_id,h,this.hass,this.config.customize);if(y===null)return"";let b=t.fields[h].optional||(y.number||{}).optional,F=b?Object.keys(e.service_data).includes(h):!0;return l`
            <scheduler-settings-row ?showPrefix=${b}>
              ${b?l`
                <ha-checkbox
                  slot="prefix"
                  ?checked=${F}
                  @change=${w=>this._toggleOptionalField(w,h,y)}
                >
                </ha-checkbox>
              `:""}
              <span slot="heading">
                ${H9(e,h,this.hass,this.config.customize)}
              </span>
              <scheduler-combo-selector
                .hass=${this.hass}
                .config=${y}
                ?disabled=${!F}
                .value=${Object.keys(e.service_data).includes(h)?e.service_data[h]:void 0}
                @value-changed=${w=>this._selectField(h,w)}
              >
              </scheduler-combo-selector>
            </scheduler-settings-row>
          `})}
        </div>
      </scheduler-collapsible-section>
    `}_selectField(C,e){let t=e.detail.value,L=n({},this.schedule.entries[this.selectedEntry].slots[this.selectedSlot]),r=t!==void 0?A(n({},L.actions[0]),{service_data:A(n({},L.actions[0].service_data),{[C]:t})}):A(n({},L.actions[0]),{service_data:Object.fromEntries(Object.entries(L.actions[0].service_data).filter(([i])=>i!=C))});this._updateSlot({actions:[r]})}_toggleOptionalField(C,e,t){let L=C.target.checked,r=L?I5(t):void 0;L?this._selectField(e,new CustomEvent("value-changed",{detail:{value:g(r)?r:null}})):this._selectField(e,new CustomEvent("value-changed",{detail:{value:void 0}}))}_selectEntity(C){let e=C.detail.value;e&&this.schedule.entries[this.selectedEntry].slots.forEach((t,L)=>{if(!t.actions.length)return;let r=A(n({},t.actions[0]),{target:{entity_id:e}});this._updateSlot({actions:[r]},L)})}_handleUpdate(C,e){this.selectedEntry=e,C.detail.hasOwnProperty("selectedSlot")?(this._updateSelectedSlot(C.detail.selectedSlot),this.selectedSlot=C.detail.selectedSlot):C.detail.hasOwnProperty("slots")&&this._updateEntry({slots:C.detail.slots})}_updateSelectedSlot(C){this.dispatchEvent(new CustomEvent("change",{detail:{selectedSlot:C}}))}_updateEntry(C){let e=n({},this.schedule.entries[this.selectedEntry]);e=n(n({},e),C),this.schedule=A(n({},this.schedule),{entries:Object.assign(this.schedule.entries,{[this.selectedEntry]:e})})}_updateSlot(C,e=this.selectedSlot){let t=n({},this.schedule.entries[this.selectedEntry].slots[e]);t=n(n({},t),C),this._updateEntry({slots:Object.assign(this.schedule.entries[this.selectedEntry].slots,{[e]:t})})}async _showWeekdayDialog(C,e){this.selectedEntry=e,await new Promise(t=>{let L={weekdays:[...this.schedule.entries[e].weekdays],cancel:()=>t(null),confirm:r=>t(r)};$(C.target,"show-dialog",{dialogTag:"dialog-select-weekdays",dialogImport:()=>Promise.resolve().then(()=>(W0(),o9)),dialogParams:L})}).then(t=>{t&&this._updateEntry({weekdays:t})})}async _showActionDialog(C){let e=[],t=[];this.schedule.entries.forEach(L=>{L.slots.forEach(r=>{r.actions.forEach(i=>{var o,a;t=[...t,...[((o=i.target)==null?void 0:o.entity_id)||[]].flat()],e=[...e,...[S(i.service),...[((a=i.target)==null?void 0:a.entity_id)||[]].flat()].map(S)]})})}),e=[...new Set(e)],t=[...new Set(t)],await new Promise(L=>{let r={cancel:()=>L(null),confirm:i=>L(i),domainFilter:e.length?e:void 0,entityFilter:t.length?t:void 0,cardConfig:this.config};$(C.target,"show-dialog",{dialogTag:"dialog-select-action",dialogImport:()=>Promise.resolve().then(()=>(G0(),d9)),dialogParams:r})}).then(L=>{if(!L)return;let r=n({},this.schedule.entries[this.selectedEntry].slots[this.selectedSlot]),i=this.schedule.entries[this.selectedEntry].slots.find(a=>{var M;return a.actions.length?(M=a.actions[0].target)==null?void 0:M.entity_id:void 0}),o=n({},L);i&&o.target&&(o=A(n({},o),{target:i.actions[0].target})),this._updateSlot({actions:[o]})})}_actionItemOptionsClick(C){switch(C.detail.item.value){case"change_type":this._showActionDialog(C);break;case"delete":this._updateSlot({actions:[]});break}}_stopTimeChanged(C){let e=C.detail.value,[t,L]=W5([...this.schedule.entries[this.selectedEntry].slots],Number(this.selectedSlot),{stop:e},this.hass);this._updateEntry({slots:t}),L!=this.selectedSlot&&this._updateSelectedSlot(L)}_startTimeChanged(C){let e=C.detail.value,[t,L]=W5([...this.schedule.entries[this.selectedEntry].slots],Number(this.selectedSlot),{start:e},this.hass);this._updateEntry({slots:t}),L!=this.selectedSlot&&this._updateSelectedSlot(L)}_addTimeslot(C){this.selectedEntry===null||this.selectedSlot===null||(this.schedule=J4(this.schedule,this.selectedEntry,this.selectedSlot,this.hass),C.target.blur())}_removeTimeslot(C){this.selectedEntry===null||this.selectedSlot===null||(this.schedule=C9(this.schedule,this.selectedEntry,this.selectedSlot),this.selectedSlot>=this.schedule.entries[this.selectedEntry].slots.length&&(this.selectedSlot=this.schedule.entries[this.selectedEntry].slots.length-1),C.target.blur())}static get styles(){return P`
  :host {
    position: relative;
  }
  .two-column {
    display: flex;
    flex-direction: row;
    margin: 16px 0px;
    flex-wrap: wrap;
    gap: 10px;
  }
  .two-column .column {
    display: flex;
    flex-direction: column;
    flex: 0 0 215px;
  }
  div.editor-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .weekdays {
    display: flex;
    flex: 1;
    align-items: center;
    white-space: nowrap;
  }
  .weekdays-actions {
    display: flex;
    align-items: center;
  }
  div.actions {
    display: flex;
    align-items: end;
    margin: -4px 0px 0px 0px;
  }
  @media all and (max-width: 150px) {
    div.editor-header {
      flex-direction: column;
      margin-top: 0px;
    }
    div.actions {
      align-self: flex-end;
    }
  }
  div.slot-placeholder {
    padding: 20px 0px 0px 0px;
  }
  scheduler-collapsible-section .header ha-icon {
    margin-right: 6px;
  }
  scheduler-collapsible-section .header span {
    flex: 1;
  }
  ha-list-item.warning, ha-list-item.warning ha-icon {
    color: var(--error-color);
  }
    `}};m([v({attribute:!1})],g1.prototype,"hass",2),m([v({attribute:!1})],g1.prototype,"config",2),m([v({attribute:!1})],g1.prototype,"viewMode",2),m([v({attribute:!1})],g1.prototype,"selectedSlot",2),m([v({type:Boolean})],g1.prototype,"large",2),m([Z()],g1.prototype,"schedule",2),m([Z()],g1.prototype,"selectedEntry",2),g1=m([T("scheduler-main-panel")],g1)});function m9(H,V){let C=H.getFullYear()==new Date().getFullYear(),e=()=>{try{new Date().toLocaleDateString("i")}catch(L){return L.name==="RangeError"}return!1},t=(L,r)=>{switch(r){case"year":return L.getFullYear();case"month":return I8[L.getMonth()];case"day":return L.getDate()}};return C?e()?new Intl.DateTimeFormat(V.language,{month:"long",day:"numeric"}).format(H):`${t(H,"month")} ${t(H,"day")}`:e()?new Intl.DateTimeFormat(V.language,{year:"numeric",month:"long",day:"numeric"}).format(H):`${t(H,"month")} ${t(H,"day")}, ${t(H,"year")}`}function Q0(H){return H.toISOString().split("T")[0]}var I8,K0=p(()=>{"use strict";I8=["January","February","March","April","May","June","July","August","September","October","November","December"]});function t5(H){let V=new Date,C=(H||"").match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})/);C!==null&&V.setFullYear(Number(C[1]),Number(C[2])-1,Number(C[3]));let e=(H||"").match(/([0-9]{2}):([0-9]{2})(:([0-9]{2}))?$/);return e!==null&&V.setHours(Number(e[1]),Number(e[2]),e.length>4?Number(e[4]):V.getSeconds()),V}var A9=p(()=>{"use strict"});var j8,W8,p9,c9=p(()=>{"use strict";j8=(H,V)=>{var C;return(((C=V.select)==null?void 0:C.options)||[]).some(e=>typeof e=="object"?e.value==H:e==H)},W8=(H,V)=>{var C,e;return!(isNaN(H)||((C=V.number)==null?void 0:C.min)!==void 0&&H<V.number.min||((e=V.number)==null?void 0:e.max)!==void 0&&H>V.number.max)},p9=(H,V)=>"select"in V&&V.select!==null?j8(String(H),V):"number"in V&&V.number!==null?W8(Number(H),V):"text"in V&&V.text!==null?String(H).length>0:!0});var Y0,u9=p(()=>{"use strict";Y0=H=>H==null||Array.isArray(H)?H:[H]});var v9={};B(v9,{DialogSelectCondition:()=>c1});var c1,J0=p(()=>{"use strict";W();Q();n1();y2();P0();C1();e5();N();q();c1=class extends _{constructor(){super(...arguments);this._search="";this._filter="";this.timer=0;this.showAll=!1}async showDialog(C){this._params=C,this.showAll=!1,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0,this._clearSearch(),this._height=void 0,this._width=void 0}async willUpdate(){this.hass.loadBackendTranslation("title")}render(){return this._params?l`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        @wa-after-show=${this._opened}
      >
        <div slot="header">
          <ha-dialog-header>
            <ha-icon-button
              slot="navigationIcon"
              data-dialog="close"
              .label=${c("ui.dialogs.more_info_control.dismiss",this.hass)}
              .path=${t1}
            ></ha-icon-button>
            <div slot="title">
              ${u("ui.panel.options.conditions.add_condition",this.hass)}
            </div>
            ${g(this._params.domain)?"":l`
            <ha-dropdown
              placement="bottom-end"
              slot="actionItems"
              @wa-after-hide=${C=>{C.target.firstElementChild.blur()}}
            >
              <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${K1}>
              </ha-icon-button>
              <ha-dropdown-item @click=${this._toggleShowAll}>
                <ha-icon
                  icon="mdi:check"
                  style="${this.showAll?"":"visibility: hidden"}"
                ></ha-icon>
                ${u("ui.dialog.action_picker.show_all",this.hass)}
              </ha-dropdown-item>
            </ha-dropdown>`}
          </ha-dialog-header>

          <ha-input
            dialogInitialFocus
            .placeholder=${c("ui.common.search",this.hass)}
            aria-label=${c("ui.common.search",this.hass)}
            @input=${this._handleSearchChange}
            .value=${this._search}
            icon
            .iconTrailing=${this._search}
          >
            <div class="trailing" slot="trailingIcon">
              ${this._search&&l`
                <ha-icon-button
                  @click=${this._clearSearch}
                  .label=${c("ui.common.clear",this.hass)}
                  .path=${t1}
                  class="clear-button"
                ></ha-icon-button>
              `}
              <slot name="suffix"></slot>
            </div>
          </ha-input>
        </div>

        <ha-list
          style=${x1({minWidth:`${this._width}px`,height:this._height?`${Math.min(468,this._height)}px`:"auto"})}
        >
          ${this._renderOptions()}
        </ha-list>
      </ha-dialog>
    `:l``}_opened(){var e;let C=(e=this.shadowRoot.querySelector("ha-list"))==null?void 0:e.getBoundingClientRect();this._width=C==null?void 0:C.width,this._height=C==null?void 0:C.height}_handleSearchChange(C){let e=C.currentTarget.value;this._search=e,clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this._filter=this._search},100)}_clearSearch(){this._search="",this._filter=""}_renderOptions(){var t;let C=n({},(t=this._params)==null?void 0:t.cardConfig);this.showAll&&(C=A(n({},C),{include:void 0,exclude:void 0}));let e=D5(this.hass,C);return e.sort((L,r)=>A1(L.name,r.name)),this._filter&&(e=e.filter(L=>{let r=this._filter.toLowerCase().trim().split(" ");return r.every(i=>L.name.toLowerCase().includes(i))||r.every(i=>L.key.toLowerCase().includes(i))})),Object.keys(e).map(L=>l`
        <ha-list-item
          graphic="icon"
          @click=${()=>this._handleDomainClick(e[L].key)}
        >
          <ha-icon slot="graphic" icon="${e[L].icon}"></ha-icon>
          <span>${e[L].name}</span>
        </ha-list-item>
    `)}_handleDomainClick(C){this._params=A(n({},this._params),{domain:C}),this._params.confirm(C),this._params=void 0,this._clearSearch()}_toggleShowAll(){this.showAll?this.showAll=!1:this.showAll=!0}static get styles(){return P`
      ha-dialog {
        --dialog-content-padding: 0;
        --ha-dialog-width-md: 480px;
      }
      ha-input {
        display: block;
        margin: 0 16px;
      }
      ha-list {
        min-height: 300px;
      }
      ha-list-item:not([twoline]) {
        height: 56px;
      }
    `}};m([v({attribute:!1})],c1.prototype,"hass",2),m([Z()],c1.prototype,"_params",2),m([Z()],c1.prototype,"_search",2),m([Z()],c1.prototype,"_filter",2),m([Z()],c1.prototype,"_width",2),m([Z()],c1.prototype,"_height",2),m([Z()],c1.prototype,"showAll",2),c1=m([T("dialog-select-condition")],c1)});var X,x9=p(()=>{"use strict";W();Q();U();n1();T0();F5();k2();K0();A9();I();c9();C1();b1();b0();G1();u9();N();Z0();q();R5();J0();q0();$5();X=class extends _{constructor(){super(...arguments);this.conditionIdx=-1;this.conditionValid=!0;this.startDate="";this.endDate="";this.tags=[];this.customTagValue=""}async firstUpdated(){var L,r;(await window.loadCardHelpers()).importMoreInfoControl("input_datetime"),this.startDate=((L=this.schedule)==null?void 0:L.start_date)||Q0(new Date),this.endDate=((r=this.schedule)==null?void 0:r.end_date)||Q0(new Date);let e=(await k5(this.hass)).map(i=>i.name),t=[this.config.tags||[]].flat();this.tags=[...new Set([...e,...t.filter(i=>!e.includes(i)&&!["none","disabled","enabled"].includes(i))])]}shouldUpdate(C){return C.get("schedule")&&this.dispatchEvent(new CustomEvent("change",{detail:{schedule:this.schedule}})),!0}render(){let C={select:{options:this.tags,multiple:!0,custom_value:!0}};return l`
      <div class="header first">
        <span>${u("ui.panel.options.conditions.header",this.hass)}:</span>
        ${this.schedule.entries[0].slots[0].conditions.items.length?l`
        <ha-dropdown
          @wa-select=${this._conditionConfigOptionsClick}
          @wa-after-hide=${e=>{e.target.firstElementChild.blur()}}
          placement="bottom-end"
        >
          <ha-icon-button
            slot="trigger"
            .path=${Z4}
          >
          </ha-icon-button>
          <ha-dropdown-item
            ?disabled=${this.schedule.entries[0].slots[0].conditions.items.length<2}
            value="or"
          >
            <ha-icon
              icon="mdi:check"
              style="${this.schedule.entries[0].slots[0].conditions.type=="or"?"":"visibility: hidden"}"
            ></ha-icon>
            ${u("ui.panel.options.conditions.options.logic_or",this.hass)}
          </ha-dropdown-item>
          <ha-dropdown-item
            ?disabled=${this.schedule.entries[0].slots[0].conditions.items.length<2}
            value="and"
          >
            <ha-icon
              icon="mdi:check"
              style="${this.schedule.entries[0].slots[0].conditions.type=="and"?"":"visibility: hidden"}"
            ></ha-icon>
            ${u("ui.panel.options.conditions.options.logic_and",this.hass)}
          </ha-dropdown-item>
          <ha-dropdown-item value="track_changes">
            <ha-icon 
              icon="mdi:check" 
              style="${this.schedule.entries[0].slots[0].conditions.track_changes?"":"visibility: hidden"}"
            ></ha-icon>
            ${u("ui.panel.options.conditions.options.track_changes",this.hass)}
          </ha-dropdown-item>
        </ha-dropdown>
        `:""}
        </div>
        <scheduler-collapsible-group
          ?disabled=${!this.conditionValid}
          @openclose-changed=${this._updateActiveCondition}
          .openedItem=${this.conditionIdx}
        >
        ${this.renderConditions()}
        </scheduler-collapsible-group>

      <div>
        <ha-button appearance="plain"
          @click=${this._conditionAddClick}
        >
          <ha-icon slot="start" icon="mdi:plus"></ha-icon>
          ${u("ui.panel.options.conditions.add_condition",this.hass)}
        </ha-button>
      </div>


      <span class="header">${u("ui.panel.options.period.header",this.hass)}:</span>
      <div class="period">
        <div>
          <ha-checkbox
            ?checked=${typeof this.schedule.start_date=="string"}
            @change=${this.toggleEnableDateRange}
          >
          </ha-checkbox>
        </div>
        <div>
          <span>${u("ui.panel.options.period.start_date",this.hass)}</span>
        </div>
        <div class="input">
          <ha-date-input
            .locale=${this.hass.locale}
            value=${this.startDate}
            .label=${c("ui.components.date-range-picker.start_date",this.hass)}
            @value-changed=${this._setStartDate}
            ?disabled=${!this.schedule.start_date}
          >
          </ha-date-input>
        </div>
        <div>
          <span>${u("ui.panel.options.period.end_date",this.hass)}</span>
        </div>
        <div class="input">
          <ha-date-input
            .locale=${this.hass.locale}
            value=${this.endDate}
            .label=${c("ui.components.date-range-picker.end_date",this.hass)}
            @value-changed=${this._setEndDate}
            ?disabled=${!this.schedule.end_date}
          >
          </ha-date-input>
        </div>
      </div>

      <span class="header">${c("ui.common.name",this.hass)}:</span>
      <div class="period">
        <ha-input
          value=${this.schedule.name||""}
          placeholder=${this.schedule.name?"":c("ui.common.name",this.hass)}
          @input=${this.updateName}
        ></ha-input>
      </div>

      <span class="header">${u("ui.panel.options.tags",this.hass)}:</span>
      <div>
        <scheduler-combo-selector
          .hass=${this.hass}
          .config=${C}
          .value=${this.schedule.tags||[]}
          @value-changed=${this.tagsUpdated}
        >
        </scheduler-combo-selector>

        <ha-dropdown
          @wa-after-hide=${e=>{e.stopPropagation(),e.target.querySelector("ha-button").blur()}}
          @click=${e=>{e.preventDefault(),e.stopImmediatePropagation()}}
          @wa-after-show=${e=>{e.target.querySelector("ha-input").focus()}}
          placement="bottom-start"
        >
          <ha-button appearance="plain" slot="trigger">
            <ha-icon slot="start" icon="mdi:plus"></ha-icon>
            ${c("ui.panel.config.tag.add_tag",this.hass)}
          </ha-button>

          <div style="display: flex; align-items: center; padding: 0px 2px 0px 8px">
            <ha-input
              .value=${this.customTagValue}
              .label=${c("ui.panel.config.tag.add_tag",this.hass)}
              @input=${e=>{this.customTagValue=e.currentTarget.value}}
              @keydown=${e=>{e.key==="Enter"&&this._customTagConfirmClick(e)}}
              .placeholder=""
            ></ha-input> 
            <ha-button
              appearance="plain"
              @click=${this._customTagConfirmClick}
            >
              ${c("ui.common.ok",this.hass)}
            </ha-button>
          </div>
        </ha-dropdown>
      </div>

      <span class="header">${u("ui.panel.options.repeat_type",this.hass)}:</span>
      <ha-button
        appearance="${this.schedule.repeat_type=="repeat"?"filled":"plain"}"
        variant="${this.schedule.repeat_type=="repeat"?"brand":"neutral"}"
        @click=${this.setRepeatType}
        value="${"repeat"}"
      >
        <ha-icon slot="start" icon="mdi:refresh"></ha-icon>
        ${c("ui.components.calendar.event.repeat.label",this.hass)}
      </ha-button>
      <ha-button
        appearance="${this.schedule.repeat_type=="pause"?"filled":"plain"}"
        variant="${this.schedule.repeat_type=="pause"?"brand":"neutral"}"
        @click=${this.setRepeatType}
        value="${"pause"}"
      >
        <ha-icon slot="start" icon="mdi:stop"></ha-icon>
        ${c("ui.dialogs.more_info_control.vacuum.stop",this.hass)}
      </ha-button>
      <ha-button
        appearance="${this.schedule.repeat_type=="single"?"filled":"plain"}"
        variant="${this.schedule.repeat_type=="single"?"brand":"neutral"}"
        @click=${this.setRepeatType}
        value="${"single"}"
      >
        <ha-icon slot="start" icon="mdi:trash-can-outline"></ha-icon>
        ${c("ui.common.delete",this.hass)}
      </ha-button>
    `}renderConditions(){let C=this.schedule.entries[0].slots[0].conditions.items;return this.conditionIdx==C.length&&(C=[...C,{}]),C.map((e,t)=>{var d;let L=this.conditionIdx==t?this.selectedEntity||e.entity_id||"":e.entity_id||"",r=this.conditionIdx==t?this.selectedDomain||S(L):S(L),i=E5(L||r,this.hass,this.config.customize),o=i&&i.hasOwnProperty("number")?["above","below"]:["is","not"],a={is:"mdi:equal",not:"mdi:not-equal-variant",above:"mdi:greater-than",below:"mdi:less-than"},M={is:"ui.panel.options.conditions.types.equal_to",not:"ui.panel.options.conditions.types.unequal_to",above:"ui.panel.options.conditions.types.above",below:"ui.panel.options.conditions.types.below"};return this.conditionIdx===t&&!this.selectedMatchType&&(this.selectedMatchType=o[0]),l`
      <scheduler-collapsible-section idx="${t}">
        <div slot="header">
          ${e.entity_id&&e.value!==void 0?l`
          <ha-icon slot="icon" icon="${n2(e.entity_id,this.config.customize,this.hass)}"></ha-icon>
          ${z(u(M[e.match_type],this.hass,["{entity}","{value}"],[y1(e.entity_id,this.hass,this.config.customize)||"",(d=h5(e.value,i,this.hass))!=null?d:""]))}
          `:u("ui.panel.options.conditions.add_condition",this.hass)}
        </div>
        <ha-dropdown
          slot="contextMenu"
          @wa-select=${s=>this._conditionItemOptionsClick(s,t)}
          ?disabled=${!this.conditionValid&&this.conditionIdx!==t&&this.conditionIdx!=-1}
          placement="bottom-end"
        >
          <ha-icon-button
            slot="trigger"
            .path=${K1}
            ?disabled=${!this.conditionValid&&this.conditionIdx!==t&&this.conditionIdx!=-1}
          >
          </ha-icon-button>
          <ha-dropdown-item value="change_type">
            <ha-icon icon="mdi:pencil"></ha-icon>
            ${c("ui.panel.lovelace.editor.card.conditional.change_type",this.hass)}
          </ha-dropdown-item>
          <ha-dropdown-item variant="danger" value="delete">
            <ha-icon icon="mdi:delete"></ha-icon>
            ${c("ui.common.delete",this.hass)}
          </ha-dropdown-item>
        </ha-dropdown>

        <div slot="content">

        <scheduler-settings-row>
          <span slot="heading">
            ${c("ui.components.selectors.selector.types.entity",this.hass)}
          </span>
          <scheduler-entity-picker
            .hass=${this.hass}
            .config=${this.config}
            .domain=${r}
            @value-changed=${this._selectEntity}
            .value=${this.conditionIdx==t?Y0(this.selectedEntity):Y0(e.entity_id)}
            ?multiple=${!1}
          >
          </scheduler-entity-picker>
        </scheduler-settings-row>

        <scheduler-settings-row>
          <span slot="heading">
            ${z(u(M[this.conditionIdx==t?this.selectedMatchType:e.match_type],this.hass,["{entity}","{value}"],["",""]))}
            <ha-dropdown
              @wa-select=${this._selectMatchType}
              @wa-after-hide=${s=>{s.target.firstElementChild.blur()}}
            >
              <ha-icon-button slot="trigger" .path=${w5}>
              </ha-icon-button>
              ${o.map(s=>l`
                <ha-dropdown-item 
                  ?noninteractive=${this.conditionIdx==t?this.selectedMatchType==s:e.match_type==s}
                  value="${s}"
                >
                  <ha-icon icon="${a[s]}"></ha-icon>
                  ${z(u(M[s],this.hass,["{entity}","{value}"],["",""]))}
                </ha-dropdown-item>
              `)}
            </ha-dropdown>
          </span>
          <scheduler-combo-selector
            .hass=${this.hass}
            .config=${i}
            .value=${this.conditionIdx==t?this.conditionValue:e.value}
            @value-changed=${this._conditionValueChanged}
          >
          </scheduler-combo-selector>
        </scheduler-settings-row>
        </div>
      </scheduler-collapsible-section>
    `})}_updateActiveCondition(C){let e=C.detail.item;if(e<0){this.conditionIdx=-1;return}if(e===this.conditionIdx)return;this.conditionIdx=e;let t=this.schedule.entries[0].slots[0].conditions.items[e];this.selectedEntity=t?t.entity_id:void 0,this.selectedMatchType=t?t.match_type:void 0,this.conditionValue=t?t.value:void 0}_conditionItemOptionsClick(C,e){switch(C.detail.item.value){case"change_type":this._showConditionDialog(C).then(o=>{o&&(this.conditionIdx=e,this.selectedDomain=o,this.selectedEntity=void 0,this.selectedMatchType=void 0,this.conditionValue=void 0,this.conditionValid=!1)});break;case"delete":let L=this.schedule.entries[0].slots[0].conditions.items.filter((o,a)=>a!==e),r=o=>Object.assign(o,{conditions:A(n({},o.conditions),{items:L})}),i=o=>Object.assign(o,{slots:o.slots.map(r)});this.schedule=A(n({},this.schedule),{entries:this.schedule.entries.map(i)}),e===this.conditionIdx?this.conditionIdx=-1:this.conditionIdx!==void 0&&e<this.conditionIdx&&(this.conditionIdx=this.conditionIdx-1),this.conditionValid=!0;break}}_selectMatchType(C){let e=C.detail.item.value;this.selectedMatchType=e,this._validateCondition()}_conditionValueChanged(C){this.conditionValue=C.detail.value,this._validateCondition()}async _showConditionDialog(C){return new Promise(e=>{let t={cancel:()=>e(null),confirm:L=>e(L),domain:void 0,cardConfig:this.config};$(C.target,"show-dialog",{dialogTag:"dialog-select-condition",dialogImport:()=>Promise.resolve().then(()=>(J0(),v9)),dialogParams:t})})}_selectEntity(C){let e=C.detail.value;if(this.selectedEntity=e?e.pop():void 0,this.selectedEntity){let t=E5(this.selectedEntity,this.hass,this.config.customize),L=t&&t.hasOwnProperty("number")?["above","below"]:["is","not"];(!this.selectedMatchType||!L.includes(this.selectedMatchType))&&(this.selectedMatchType=L[0])}this._validateCondition()}_validateCondition(){if(this.conditionValid=!1,!this.selectedEntity||!g(this.conditionValue)||!this.selectedMatchType||this.conditionIdx===void 0)return;let C=E5(this.selectedEntity,this.hass,this.config.customize);if(!p9(this.conditionValue,C))return;this.conditionValid=!0;let e={entity_id:this.selectedEntity,match_type:this.selectedMatchType,value:this.conditionValue,attribute:"state"},t=Object.assign(this.schedule.entries[0].slots[0].conditions.items,{[this.conditionIdx]:e}),L=i=>Object.assign(i,{conditions:A(n({},i.conditions),{items:t})}),r=i=>Object.assign(i,{slots:i.slots.map(L)});this.schedule=A(n({},this.schedule),{entries:this.schedule.entries.map(r)})}_conditionAddClick(C){this._showConditionDialog(C).then(e=>{e&&(this.conditionIdx=this.schedule.entries[0].slots[0].conditions.items.length,this.selectedDomain=e,this.selectedEntity=void 0,this.selectedMatchType=void 0,this.conditionValue=void 0,this.conditionValid=!1)})}_conditionConfigOptionsClick(C){let e=n({},this.schedule.entries[0].slots[0].conditions);switch(C.detail.item.value){case"or":if(e.type=="or")return;e=A(n({},e),{type:"or"});break;case"and":if(e.type=="and")return;e=A(n({},e),{type:"and"});break;case"track_changes":let i=!this.schedule.entries[0].slots[0].conditions.track_changes;e=A(n({},e),{track_changes:i});break}let L=i=>Object.assign(i,{conditions:e}),r=i=>Object.assign(i,{slots:i.slots.map(L)});this.schedule=A(n({},this.schedule),{entries:this.schedule.entries.map(r)})}_setStartDate(C){let e=String(C.detail.value);if(!e)return;let t=t5(e),L=t5(this.endDate);t>L&&(this.schedule=A(n({},this.schedule),{end_date:e}),this.endDate=e),this.schedule=A(n({},this.schedule),{start_date:e}),this.startDate=e}_setEndDate(C){let e=String(C.detail.value);if(!e)return;let t=t5(this.startDate),L=t5(e);t>L&&(this.schedule=A(n({},this.schedule),{start_date:e}),this.startDate=e),this.schedule=A(n({},this.schedule),{end_date:e}),this.endDate=e}toggleEnableDateRange(C){let e=C.target.checked;this.schedule=A(n({},this.schedule),{start_date:e?this.startDate:void 0,end_date:e?this.endDate:void 0,repeat_type:e?this.schedule.repeat_type=="repeat"?"pause":this.schedule.repeat_type:this.schedule.repeat_type=="pause"?"repeat":this.schedule.repeat_type})}updateName(C){let e=C.target.value;this.schedule=A(n({},this.schedule),{name:e.trim()})}tagsUpdated(C){let e=C.detail.value;e=e.map(t=>t.trim()),e=e.filter(t=>!["none","disabled","enabled"].includes(t)),this.schedule=A(n({},this.schedule),{tags:e})}_customTagConfirmClick(C){let e=C.target;e=e.parentElement,e=e.parentElement,e.querySelector("ha-button").click(),C.preventDefault();let L=String(this.customTagValue).trim();if(L.length){let r=this.schedule.tags||[];r=[...new Set([...r,L])],r=r.filter(i=>!["none","disabled","enabled"].includes(i)),this.schedule=A(n({},this.schedule),{tags:r})}this.customTagValue=""}setRepeatType(C){let e=C.target.getAttribute("value");this.schedule=A(n({},this.schedule),{repeat_type:e})}static get styles(){return P`
      ha-icon-button {
        align-self: center;
      }
      ha-dropdown-item[disabled] ha-icon {
        color: var(--disabled-text-color);
      }
      ha-dropdown-item[noninteractive] {
        background-color: rgba(var(--rgb-primary-color), 0.12);
        color: var(--sidebar-selected-text-color);
      }
      ha-dropdown-item[noninteractive] ha-icon {
        color: var(--sidebar-selected-text-color);
      }
      div.period {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        gap: 5px;
      }
      div.period > div {
        display: flex;
      }
      div.period > div.input {
        position: relative;
        overflow: hidden;
        flex: 1;
      }
      ha-date-input, ha-input {
        width: 100%;
      }
      .header {
        display: flex;
        margin-top: 5px;
        width: 100%;
        align-items: center;
      }
      .header.first {
        margin-top: 0px;
        padding-bottom: 4px;
        align-items: flex-end;
        justify-content: space-between;
      }
      .header > * {
        display: flex;
      }
      .header ha-dropdown {
        margin-bottom: -10px;
      }
    `}};m([v({attribute:!1})],X.prototype,"hass",2),m([v({attribute:!1})],X.prototype,"config",2),m([Z()],X.prototype,"schedule",2),m([Z()],X.prototype,"conditionIdx",2),m([Z()],X.prototype,"selectedDomain",2),m([Z()],X.prototype,"selectedEntity",2),m([Z()],X.prototype,"selectedMatchType",2),m([Z()],X.prototype,"conditionValue",2),m([Z()],X.prototype,"conditionValid",2),m([Z()],X.prototype,"startDate",2),m([Z()],X.prototype,"endDate",2),m([v()],X.prototype,"tags",2),m([Z()],X.prototype,"customTagValue",2),X=m([T("scheduler-options-panel")],X)});var X0={};B(X0,{DialogSchedulerEditor:()=>o1});var o1,U5=p(()=>{"use strict";n1();W();Q();U();z4();C1();I4();N0();W4();G4();b1();Q4();y0();s5();v3();N();Y4();q();l9();x9();l2();S1();o1=class extends _{constructor(){super(...arguments);this.large=!1;this.selectedEntry=0;this.selectedSlot=null;this._panel="main";this._viewMode="single"}set viewMode(C){if(this._viewMode=C,C=="single"){let e=this.schedule.entries[this.selectedEntry].slots.findIndex(t=>t.actions.length);this.selectedSlot=e>=0?e:1}}shouldUpdate(C){return!(C.size==1&&C.has("hass")&&g(this.hass))}async showDialog(C){var L;this._params=C,this.schedule=C.schedule,this._panel="main",this.large=!1;let e=this.schedule.entries[this.selectedEntry].slots.filter(r=>r.actions.length&&g(r.stop)).length>0||this.schedule.entries[this.selectedEntry].slots.filter(r=>r.actions.length).length>1||this.schedule.entries[this.selectedEntry].slots.length>3,t=this.schedule.entries[this.selectedEntry].slots.findIndex(r=>r.actions.length);this.selectedSlot=t>=0?t:null,this.viewMode=e?"scheme":((L=this._params)==null?void 0:L.cardConfig.default_editor)||"single",await this.updateComplete}async closeDialog(){this._params=void 0}willUpdate(){this.hass.loadBackendTranslation("config")}render(){var C;return this._params?l`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        width="${this.large?"full":"medium"}"
        prevent-scrim-close
      >
        <ha-dialog-header slot="header">
          ${this._panel=="main"?l`
          <ha-icon-button
            slot="navigationIcon"
            data-dialog="close"
            .label=${c("ui.dialogs.more_info_control.dismiss",this.hass)}
            .path=${t1}
          ></ha-icon-button>
          <ha-icon-button
            slot="actionItems"
            .label=""
            .path=${g4}
            @click=${()=>{this._panel="options"}}
          ></ha-icon-button>
          `:l`
          <ha-icon-button
            slot="navigationIcon"
            .label=${c("ui.dialogs.more_info_control.dismiss",this.hass)}
            .path=${c4}
            @click=${()=>{this._panel="main"}}
          ></ha-icon-button>
          `}
          <div slot="title" @click=${()=>this.large=!this.large}>
            ${this._params.editItem?this.schedule.name?(C=this.schedule)==null?void 0:C.name:u("ui.panel.common.default_name",this.hass,"{id}",this._params.editItem):u("ui.panel.common.new_schedule",this.hass)}
          </div>
        </ha-dialog-header>

        <div class="content">

          ${this._panel=="main"?l`
          <scheduler-main-panel
            .hass=${this.hass}
            .config=${this._params.cardConfig}
            .schedule=${this.schedule}
            .large=${this.large}
            @change=${this._updateSchedule}
            @setViewMode=${this._setViewMode}
            .viewMode=${this._viewMode}
            .selectedSlot=${this.selectedSlot}
          >
          </scheduler-main-panel>
            `:l`
          <scheduler-options-panel
            .hass=${this.hass}
            .config=${this._params.cardConfig}
            .schedule=${this.schedule}
            @change=${this._updateSchedule}
          >
          </scheduler-options-panel>
        `}
        </div>

          <div class="buttons" slot="footer">
            <ha-button appearance="plain" @click=${this._handleDeleteClick} variant="danger" ?disabled=${!this.schedule.entity_id}>
              ${c("ui.common.delete",this.hass)}
            </ha-button>
            <ha-button appearance="plain" @click=${this._handleSaveClick}>
              ${c("ui.common.save",this.hass)}
            </ha-button>
          </div>
      </ha-dialog>
    `:l``}_updateSchedule(C){let e=Object.keys(C.detail);if(e.includes("schedule")){let t=C.detail.schedule;this.schedule=t}e.includes("selectedSlot")&&(this.selectedSlot=C.detail.selectedSlot)}async _handleSaveClick(C){let e=N4(this.schedule,this.hass,this._params.cardConfig.customize);if(e)await new Promise(t=>{let L={cancel:()=>t(!1),confirm:()=>t(!0),title:c("state_badge.default.error",this.hass),description:u(`ui.panel.editor.validation_errors.${e}`,this.hass),primaryButtonLabel:c("ui.common.ok",this.hass)};$(C.target,"show-dialog",{dialogTag:"scheduler-generic-dialog",dialogImport:()=>Promise.resolve().then(()=>(l2(),T2)),dialogParams:L})});else if(this.schedule.schedule_id){let t=W2(await y5(this.hass,this.schedule.schedule_id),this.hass);if(P1(this.schedule,t)){this.closeDialog();return}t.enabled||await new Promise(r=>{let i={title:u("ui.dialog.enable_schedule.title",this.hass),description:u("ui.dialog.enable_schedule.description",this.hass),primaryButtonLabel:c("ui.common.yes",this.hass),secondaryButtonLabel:c("ui.common.no",this.hass),cancel:()=>{r(!1)},confirm:()=>{r(!0)}};$(C.target,"show-dialog",{dialogTag:"scheduler-generic-dialog",dialogImport:()=>Promise.resolve().then(()=>(l2(),T2)),dialogParams:i})})&&this.hass.callService("switch","turn_on",{entity_id:t.entity_id}),q4(this.hass,this.schedule).catch(L=>N5(L,this,this.hass)).then(()=>{this.closeDialog()})}else j4(this.hass,this.schedule).catch(t=>N5(t,this,this.hass)).then(()=>{this.closeDialog()})}async _handleDeleteClick(C){await new Promise(e=>{let t={cancel:()=>e(!1),confirm:()=>e(!0),title:u("ui.dialog.confirm_delete.title",this.hass),description:u("ui.dialog.confirm_delete.description",this.hass),primaryButtonLabel:c("ui.common.ok",this.hass),secondaryButtonLabel:c("ui.common.cancel",this.hass)};$(C.target,"show-dialog",{dialogTag:"scheduler-generic-dialog",dialogImport:()=>Promise.resolve().then(()=>(l2(),T2)),dialogParams:t})}).then(e=>{e&&U4(this.hass,this._params.editItem).catch(t=>N5(t,this,this.hass)).then(()=>{this.closeDialog()})})}_setViewMode(C){let e=C.detail,t=this.schedule.entries[this.selectedEntry].slots.filter(L=>L.actions.length).length>1;if(e=="scheme"){this.viewMode=e,P1([...this.schedule.entries],[...G2.entries])?this.schedule=A(n({},this.schedule),{entries:[...f2.entries]}):this.schedule.entries.some(i=>i.slots.some(o=>o.stop===void 0))&&(this.schedule=A(n({},this.schedule),{entries:this.schedule.entries.map(i=>A(n({},i),{slots:i.slots.map((o,a,M)=>{if(o.stop!==void 0)return o;let d=M[a+1];return A(n({},o),{stop:d?d.start:"00:00:00"})})}))}));return}else if(e=="single"&&!t){if(P1([...this.schedule.entries],[...f2.entries]))this.schedule=A(n({},this.schedule),{entries:[...G2.entries]});else{let r=A(n({},this.schedule),{entries:this.schedule.entries.map(i=>{let o=i.slots.findIndex(a=>a.actions.length);return o<0&&(o=Math.floor(i.slots.length/2)),A(n({},i),{slots:i.slots.map((a,M)=>M==o?A(n({},a),{stop:void 0}):null).filter(g)})})});this.schedule=W2(r,this.hass)}this.viewMode=e;return}new Promise(L=>{let r={title:u("ui.dialog.confirm_migrate.title",this.hass),description:u("ui.dialog.confirm_migrate.description",this.hass),primaryButtonLabel:this.hass.localize("ui.common.yes"),secondaryButtonLabel:this.hass.localize("ui.common.no"),cancel:()=>{L(!1)},confirm:()=>{L(!0)}};$(C.target,"show-dialog",{dialogTag:"scheduler-generic-dialog",dialogImport:()=>Promise.resolve().then(()=>(l2(),T2)),dialogParams:r})}).then(L=>{L&&(this.schedule=K4(this.schedule),this.viewMode=e)})}};o1.styles=$4,m([v({attribute:!1})],o1.prototype,"hass",2),m([Z()],o1.prototype,"_params",2),m([v({type:Boolean,reflect:!0})],o1.prototype,"large",2),m([Z()],o1.prototype,"schedule",2),m([Z()],o1.prototype,"selectedEntry",2),m([Z()],o1.prototype,"selectedSlot",2),m([Z()],o1.prototype,"_panel",2),m([Z()],o1.prototype,"_viewMode",2),o1=m([T("dialog-scheduler-editor")],o1)});W();var _7=async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider")&&customElements.get("ha-generic-picker"))return;await customElements.whenDefined("partial-panel-resolver");let H=document.createElement("partial-panel-resolver");H.hass={panels:[{url_path:"tmp",component_name:"config"}]},H._updateRoutes(),await H.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config"),await document.createElement("ha-panel-config").routerOptions.routes.automation.load()};Q();l5();U();v3();S1();q();var Y=(H,V)=>Object.keys(H).includes(V),q2=H=>typeof H=="boolean",x3=H=>typeof H=="number",i2=H=>typeof H=="string",p5=H=>typeof H=="object"&&!Array.isArray(H),U1=H=>Array.isArray(H)&&H.every(V=>typeof V=="string"),E7=H=>{let V=[];if(Y(H,"include")&&!U1(H.include)&&V.push("'include' must be a list of strings"),Y(H,"exclude")&&!U1(H.exclude)&&V.push("'exclude' must be a list of strings"),Y(H,"discover_existing")&&!q2(H.discover_existing)&&V.push("'discover_existing' must be a boolean"),Y(H,"title")&&!q2(H.title)&&!i2(H.title)&&V.push("'title' must be a boolean or string"),Y(H,"time_step")&&(!x3(H.time_step)||Number(H.time_step)<1||Number(H.time_step)>30)&&V.push("'time_step' must be a number between 1 and 30"),Y(H,"show_header_toggle")&&!q2(H.show_header_toggle)&&V.push("'show_header_toggle' must be a boolean"),Y(H,"show_add_button")&&!q2(H.show_add_button)&&V.push("'show_add_button' must be a boolean"),Y(H,"show_toggle_switches")&&!q2(H.show_toggle_switches)&&V.push("'show_toggle_switches' must be a boolean"),Y(H,"display_options")&&(p5(H.display_options)?(Y(H.display_options,"primary_info")&&!i2(H.display_options.primary_info)&&!U1(H.display_options.primary_info)&&V.push("in 'display_options': 'primary_info' must be a string or list of strings"),Y(H.display_options,"secondary_info")&&!i2(H.display_options.secondary_info)&&!U1(H.display_options.secondary_info)&&V.push("in 'display_options': 'secondary_info' must be a string or list of strings"),Y(H.display_options,"icon")&&(!i2(H.display_options.icon)||!["action","entity"].includes(H.display_options.icon))&&V.push("in 'display_options': 'icon' must be a set to either 'action' or 'entity' ")):V.push("'display_options' must be a struct")),Y(H,"sort_by")&&!i2(H.sort_by)&&!U1(H.sort_by)&&V.push("'sort_by' must be a string or list of strings"),Y(H,"customize")&&!p5(H.customize))V.push("'customize' must be a struct");else if(Y(H,"customize")){let C=Object.entries(H.customize).map(([e,t])=>W9(e,t)).filter(g);C.length&&V.push(...C)}if(Y(H,"tags")&&!i2(H.tags)&&!U1(H.tags)&&V.push("'tags' must be a string or list of strings"),Y(H,"exclude_tags")&&!i2(H.tags)&&!U1(H.tags)&&V.push("'exclude_tags' must be a string or list of strings"),V.length)throw new Error(`Invalid configuration provided (${V.length} error${V.length>1?"s":""}): ${V.join(", ")}.`);return H},W9=(H,V)=>{if(!p5(V))return`'In customize, ${H}' must be a struct`;if(Y(V,"states")&&!U1(V.states)&&(!p5(V.states)||!(Y(V.states,"min")&&x3(V.states.min)&&Y(V.states,"max")&&x3(V.states.max))))return`In 'customize' [${H}].states' must be a list of strings or a range of numbers`};C1();a2();var _2=(H,V)=>{var r,i;let C=[],e=!0;if(H.entries.forEach(o=>{o.slots.forEach(a=>{a.actions.forEach(M=>{var s;let d=(s=M.target)!=null&&s.entity_id?[M.target.entity_id].flat():[M.service];C=[...C,...d]})})}),![...new Set(C)].every(o=>m1(o,V)))return!1;let t=[V.tags||[]].flat();t.length&&(e=!1,((H.tags||[]).some(o=>t.includes(o))||t.includes("none")&&!((r=H.tags)!=null&&r.length)||t.includes("enabled")&&H.enabled||t.includes("disabled")&&!H.enabled)&&(e=!0));let L=[V.exclude_tags||[]].flat();return L.length&&e&&((H.tags||[]).some(o=>L.includes(o))||L.includes("none")&&!((i=H.tags)!=null&&i.length)||L.includes("enabled")&&H.enabled||L.includes("disabled")&&!H.enabled)&&(e=!1),e};S1();y2();I();U();G1();t2();N();C1();U();E1();L2();var A8=(H,V)=>{let C=H.mode=="sunrise"?c("ui.panel.config.automation.editor.conditions.type.sun.sunrise",V):c("ui.panel.config.automation.editor.conditions.type.sun.sunset",V);V.language!="de"&&(C=C.toLowerCase());let e=H.hours*3600+H.minutes*60;if(Math.abs(e)<=60)return u("ui.components.time.at_sun_event",V,"{sunEvent}",C);let t=e<0?c("ui.panel.config.automation.editor.conditions.type.sun.before",V):c("ui.panel.config.automation.editor.conditions.type.sun.after",V);return t=t.replace(/[^a-z]/gi,"").toLowerCase(),`${E(H,{seconds:!1}).split(/\+|\-/).pop()} ${t} ${C}`},u0=(H,V,C)=>{let e=v1(C.locale),t=r=>{let i=R(r);return i.mode=="fixed"?E(i,{am_pm:e}):A8(i,C)},L=t(H);if(V){let r=t(V);return[L,r]}return[L]},a4=(H,V,C)=>{let e=u0(H,V,C);return V?z(u("ui.components.time.interval",C,["{startTime}","{endTime}"],e)):z(u("ui.components.time.absolute",C,"{time}",e[0]))};J2();C1();G1();f5();k2();var X2=(H,V,C,e)=>{let t=L=>{var r,i;switch(L){case"action":let o=H.entries[0].slots[H.next_entries[0]||0].actions[0];return z(f1(o,C,e));case"days":return z(S5(H.entries[0].weekdays,"long",C));case"name":return z(H.name||"");case"additional-tasks":{let f=H.entries[0].slots.length-1;return f>0?`+${u("ui.panel.overview.additional_tasks",C,"{number}",String(f))}`:""}case"additional-task-info":return x8(H,C,e);case"entity":let a=H.entries[0].slots[H.next_entries[0]||0].actions[0],M=[((r=a.target)==null?void 0:r.entity_id)||[]].flat();!M.length&&["script","notify"].includes(S(a.service))&&(M=[a.service]);let d=M.map(f=>y1(f,C,e)).join(", ");return z(d);case"relative-time":return"<relative-time></relative-time>";case"tags":return((i=H.tags)==null?void 0:i.map(f=>`<tag>${f}</tag>`).join(""))||"";case"time":let s=H.entries[0].slots[H.next_entries[0]||0],x=a4(s.start,s.stop,C);if(x&&x.trim())return z(x);let h=f=>{try{let w=f.split(":").map(Number);return`${String(w[0]).padStart(2,"0")}:${String(w[1]).padStart(2,"0")}`}catch(w){return String(f)}};return z(s.stop?`${h(s.start)} - ${h(s.stop)}`:`${h(s.start)}`);case"default":let y=t("name");return y||`${t("entity")}: ${t("action")}`;default:let b=/\{([^\}]+)\}/,F;for(;F=b.exec(L);){let f=t(String(F[1])),w=Array.isArray(f)?f.join("<br/>"):String(f);L=L.replace(F[0],w)}return L}};return[...[V].flat()].flatMap(L=>{let r=t(L);return(Array.isArray(r)?r:[r]).filter(o=>!!o)})},x8=(H,V,C)=>{var x,h,y;let e=(x=H.entries)==null?void 0:x[0],t=(e==null?void 0:e.slots)||[];if(!t.length)return[];let L=H.entity_id?V.states[H.entity_id]:void 0,r=L?L.state!=="off":H.enabled!==!1,i=b=>{if(typeof b=="number"&&Number.isFinite(b))return b;if(typeof b=="string"&&b.trim().length&&!Number.isNaN(Number(b)))return Number(b)},o=i((h=L==null?void 0:L.attributes)==null?void 0:h.current_slot),a=i((y=H.next_entries)==null?void 0:y[0]),M=typeof o=="number"?o:r&&typeof a=="number"&&t.length?(a+t.length-1)%t.length:void 0,d=typeof o=="number"?o:typeof a=="number"?r&&typeof M=="number"?M:a:0;return t.map((b,F)=>(d+F)%t.length).map(b=>{var p2;let F=t[b],f=(p2=F.actions)==null?void 0:p2[0],w=f?f1(f,V,C,!1,!0):"";w!=null&&w.trim()||(w=u("ui.panel.overview.additional_task_info.no_action",V)),w=z(w);let K=u0(F.start,F.stop,V).map(z),A2=F.stop?`${K[0]} \u2192 ${K[1]}`:K[0],L1=["slot-info"],Q5=r&&typeof M=="number"&&b===M;return L1.push(Q5?"slot-info--active":"slot-info--inactive"),r||L1.push("slot-info--disabled"),`<span class="${L1.join(" ")}"><span class="slot-info__content"><span class="slot-info__label">${w}</span></span><span class="slot-info__time">${A2}</span></span>`})};var h8=(H,V)=>{let C=new Date(H.timestamps[H.next_entries[0]]).valueOf(),e=new Date(V.timestamps[V.next_entries[0]]).valueOf(),t=new Date().valueOf(),L=C<t&&e<t;return C!==null&&e!==null?C<t&&e>=t?1:C>=t&&e<t?-1:C>e?L?-1:1:C<e?L?1:-1:H.entity_id<V.entity_id?1:-1:e!==null?1:C!==null?-1:H.entity_id<V.entity_id?1:-1},Z8=(H,V,C,e,t)=>{try{let L=X2(H,C,e,t).join(),r=X2(V,C,e,t).join();return A1(L,r)}catch(L){return 0}},g8=(H,V,C,e)=>{var o,a;let t=(o=C.states[H.entity_id])==null?void 0:o.state,L=(a=C.states[V.entity_id])==null?void 0:a.state,r=["on","triggered"].includes(t),i=["on","triggered"].includes(L);if(r&&!i)return-1;if(!r&&i)return 1;if(e){if(t!="off"&&L=="off")return 1;if(t=="off"&&L!="off")return-1}return 0},_5=(H,V,C)=>{let e=[V.sort_by].flat();return e.includes("relative-time")&&(H=H.sort(h8)),e.includes("title")&&(H=H.sort((t,L)=>{var r;return Z8(t,L,((r=V.display_options)==null?void 0:r.primary_info)||r2,C,V.customize)})),e.includes("state")&&(H=H.sort((t,L)=>g8(t,L,C,e.includes("relative-time")))),H};y0();b1();N();I();var S8=H=>{let V={},C=`${H.platform}.${H.unique_id}`;return H.name&&(V=A(n({},V),{name:H.name})),H.icon&&(V=A(n({},V),{icon:H.icon})),[C,V]},b5=async H=>{let V={},C=Object.keys(H.states).filter(e=>S(e)=="script");return C.length&&await H.callWS({type:"config/entity_registry/get_entries",entity_ids:C}).then(e=>{V=Object.fromEntries(Object.entries(e).map(([,t])=>S8(t)).filter(([,t])=>Object.keys(t).length))}),V};q();W();Q();C1();U();b1();b0();y2();n1();S1();N();B0();D0();R5();$5();var k1=class extends _{constructor(){super(...arguments);this._config={};this.title="";this.tagOptions=[];this.customTagValue=""}setConfig(C){this._config=n({},C)}async firstUpdated(){this.title=typeof this._config.title=="string"?this._config.title:"";let C=(await k5(this.hass)).map(e=>e.name);C.sort(A1),this.tagOptions=C}render(){var t,L,r,i,o,a,M;let C={number:{min:0,max:30,step:1,unit_of_measurement:u("ui.panel.card_editor.fields.time_step.unit_minutes",this.hass)}},e={select:{options:this.tagOptions,multiple:!0,custom_value:!0}};return l`
      <div class="card-config">

        <ha-button @click=${this._showIncludedEntitiesDialog} outlined>
          ${u("ui.panel.card_editor.fields.entities.button_label",this.hass)}
          <ha-svg-icon
            slot="trailingIcon"
            .path=${u4}
          ></ha-svg-icon>
        </ha-button>

        <scheduler-settings-row ?showPrefix=${!0}>
          <ha-checkbox
            slot="prefix"
            ?checked=${this._config.title!==!1}
            @change=${this._setEnableTitle}
          >
          </ha-checkbox>
          <span slot="heading">${u("ui.panel.card_editor.fields.title.heading",this.hass)}</span>

          <ha-input
            .value=${this.title}
            @input=${this._setTitle}
            .placeholder=${u("ui.panel.common.title",this.hass)}
            ?disabled=${this._config.title===!1}
          ></ha-input>

        </scheduler-settings-row>

        <div class="two-columns" style="margin: 10px 0px 15px 0px">
        <div class="column">
          <ha-formfield label="${u("ui.panel.card_editor.fields.discover_existing.heading",this.hass)}">
            <ha-switch
              ?checked=${this._config.discover_existing!==!1}
              @change=${d=>{this._updateConfig({discover_existing:d.target.checked})}}
            ></ha-switch>
          </ha-formfield>
        </div>
        <div class="column">
          <ha-formfield label="${u("ui.panel.card_editor.fields.show_header_toggle.heading",this.hass)}">
            <ha-switch
              ?checked=${this._config.show_header_toggle}
              @change=${d=>{this._updateConfig({show_header_toggle:d.target.checked})}}
            ></ha-switch>
          </ha-formfield>
        </div>
        <div class="column">
          <ha-formfield label="${u("ui.panel.card_editor.fields.show_toggle_switches.heading",this.hass)}">
            <ha-switch
              ?checked=${this._config.show_toggle_switches!==!1}
              @change=${d=>{this._updateConfig({show_toggle_switches:d.target.checked})}}
            ></ha-switch>
          </ha-formfield>
        </div>
        </div>

        <scheduler-settings-row>
          <span slot="heading">${u("ui.panel.card_editor.fields.time_step.heading",this.hass)}</span>

          <scheduler-combo-selector
            .hass=${this.hass}
            .config=${C}
            .value=${this._config.time_step||S2}
            @value-changed=${d=>{this._updateConfig({time_step:d.detail.value})}}
          >
          </scheduler-combo-selector>
        </scheduler-settings-row>

        <span>${u("ui.panel.card_editor.fields.default_editor.heading",this.hass)}</span>
        <div class="two-columns">
          <div class="column">
            <ha-formfield label="${u("ui.panel.card_editor.fields.default_editor.options.single",this.hass)}">
              <ha-radio
                name="default_editor"
                value="${"single"}"
                @change=${()=>{this._updateConfig({default_editor:"single"})}}
                ?checked=${this._config.default_editor!="scheme"}
              >
              </ha-radio>
            </ha-formfield>
          </div>
          <div class="column">
            <ha-formfield label="${u("ui.panel.card_editor.fields.default_editor.options.scheme",this.hass)}">
              <ha-radio
                name="default_editor"
                value="${"scheme"}"
                @change=${()=>{this._updateConfig({default_editor:"scheme"})}}
                ?checked=${this._config.default_editor=="scheme"}
              >
              </ha-radio>
            </ha-formfield>
          </div>
        </div>

          <span slot="heading">${u("ui.panel.card_editor.fields.sort_by.heading",this.hass)}</span>

        <div class="two-columns">
        <div class="column">

          <ha-formfield label="${u("ui.panel.card_editor.fields.sort_by.options.relative_time",this.hass)}">
            <ha-radio
              name="sort_by"
              value="relative-time"
              @change=${this._setSortBy}
              ?checked=${[this._config.sort_by||A5].flat().includes("relative-time")}
            ></ha-radio>
          </ha-formfield>

        </div>
        <div class="column">

          <ha-formfield label="${u("ui.panel.card_editor.fields.sort_by.options.title",this.hass)}">
            <ha-radio
              name="sort_by"
              value="title"
              @change=${this._setSortBy}
              ?checked=${[this._config.sort_by||A5].flat().includes("title")}
            ></ha-radio>
          </ha-formfield>
        </div>
        </div>


          <span>${u("ui.panel.card_editor.fields.display_format_primary.heading",this.hass)}</span>


        <div class="two-columns">
        <div class="column">

          <ha-formfield label="${u("ui.panel.card_editor.fields.display_format_primary.options.default",this.hass)}">
            <ha-radio
              name="display_format_primary"
              value="default"
              @change=${this._setDisplayOptionsPrimary}
              ?checked=${[((t=this._config.display_options)==null?void 0:t.primary_info)||r2].flat().includes("default")}
            >
            </ha-radio>
          </ha-formfield>

        </div>
        <div class="column">

          <ha-formfield label="${u("ui.panel.card_editor.fields.display_format_primary.options.entity_action",this.hass)}">
            <ha-radio
              name="display_format_primary"
              value="{entity}: {action}"
              @change=${this._setDisplayOptionsPrimary}
              ?checked=${[((L=this._config.display_options)==null?void 0:L.primary_info)||r2].flat().includes("{entity}: {action}")}
            >
            </ha-radio>
          </ha-formfield>

        </div>

        </div>

          <span>${u("ui.panel.card_editor.fields.display_format_secondary.heading",this.hass)}</span>

        <div class="two-columns">
        <div class="column">
          <ha-formfield label="${u("ui.panel.card_editor.fields.display_format_secondary.options.relative_time",this.hass)}">
            <ha-checkbox
              value="relative-time"
              @change=${this._setDisplayOptionsSecondary}
              ?checked=${[((r=this._config.display_options)==null?void 0:r.secondary_info)||W1].flat().includes("relative-time")}
            >
            </ha-checkbox>
          </ha-formfield>

          <ha-formfield label="${u("ui.panel.card_editor.fields.display_format_secondary.options.time",this.hass)}">
            <ha-checkbox
              value="time"
              @change=${this._setDisplayOptionsSecondary}
              ?checked=${[((i=this._config.display_options)==null?void 0:i.secondary_info)||W1].flat().includes("time")}
            >
            </ha-checkbox>
          </ha-formfield>

        </div>
        <div class="column">
          <ha-formfield label="${u("ui.panel.card_editor.fields.display_format_secondary.options.days",this.hass)}">
            <ha-checkbox
              value="days"
              @change=${this._setDisplayOptionsSecondary}
              ?checked=${[((o=this._config.display_options)==null?void 0:o.secondary_info)||W1].flat().includes("days")}
            >
            </ha-checkbox>
          </ha-formfield>

          <ha-formfield label="${u("ui.panel.card_editor.fields.display_format_secondary.options.additional_tasks",this.hass)}">
            <ha-checkbox
              value="additional-tasks"
              @change=${this._setDisplayOptionsSecondary}
              ?checked=${[((a=this._config.display_options)==null?void 0:a.secondary_info)||W1].flat().includes("additional-tasks")}
            >
            </ha-checkbox>
          </ha-formfield>

          <ha-formfield label="${u("ui.panel.card_editor.fields.display_format_secondary.options.additional_task_info",this.hass)}">
            <ha-checkbox
              value="additional-task-info"
              @change=${this._setDisplayOptionsSecondary}
              ?checked=${[((M=this._config.display_options)==null?void 0:M.secondary_info)||W1].flat().includes("additional-task-info")}
            >
            </ha-checkbox>
          </ha-formfield>
        </div>

        </div>

        <scheduler-settings-row>
          <span slot="heading">${u("ui.panel.card_editor.fields.tags.heading",this.hass)}</span>
          <div style="display: flex; flex: 1; flex-direction: column">
            <scheduler-combo-selector
              .hass=${this.hass}
              .config=${e}
              .value=${[this._config.tags||[]].flat()}
              @value-changed=${d=>{this._updateConfig({tags:d.detail.value})}}
            >
            </scheduler-combo-selector>
              
            <ha-dropdown
              @wa-after-hide=${d=>{d.stopPropagation(),d.target.querySelector("ha-button").blur()}}
              @click=${d=>{d.preventDefault(),d.stopImmediatePropagation()}}
              @wa-after-show=${d=>{d.target.querySelector("ha-input").focus()}}
              placement="bottom-start"
            >
              <ha-button appearance="plain" slot="trigger">
                <ha-icon slot="start" icon="mdi:plus"></ha-icon>
                ${c("ui.panel.config.tag.add_tag",this.hass)}
              </ha-button>

              <div style="display: flex; align-items: center; padding: 0x 2px 0px 8px">
                <ha-input
                  .value=${this.customTagValue}
                  .label=${c("ui.panel.config.tag.add_tag",this.hass)}
                  @input=${d=>{this.customTagValue=d.currentTarget.value}}
                  .placeholder=""
                ></ha-input> 
                <ha-button
                  appearance="plain"
                  @click=${this._customTagConfirmClick}
                >
                  ${c("ui.common.ok",this.hass)}
                </ha-button>
              </div>
            </ha-dropdown>
          </div>
        </scheduler-settings-row>

      </div>
    `}_setEnableTitle(C){C.target.checked?this.title.length?this._updateConfig({title:this.title}):this._updateConfig({title:!0}):this._updateConfig({title:!1})}_setTitle(C){let e=C.target.value;this.title=e,e!==u("ui.panel.common.title",this.hass)&&e.length?this._updateConfig({title:e}):this._updateConfig({title:!0})}_setSortBy(C){var L;let e=C.target.value,t=[((L=this._config)==null?void 0:L.sort_by)||A5].flat();t=t.filter(r=>r=="state"),t.includes(e)||(t=[...t,e]),this._updateConfig({sort_by:t})}_setDisplayOptionsPrimary(C){var L;let e=C.target.value,t=A(n({},(L=this._config)==null?void 0:L.display_options),{primary_info:e});this._updateConfig({display_options:t})}_setDisplayOptionsSecondary(C){var i;let e=C.target.value,t=C.target.checked,L=n({},(i=this._config)==null?void 0:i.display_options),r=[L.secondary_info||[]].flat();r=t?Array.from(new Set([...r,e])):r.filter(o=>o!==e),r.sort((o,a)=>{let M={"relative-time":1,time:r.includes("relative-time")?3:2,days:r.includes("relative-time")?2:3,"additional-tasks":4,"additional-task-info":5},d=Object.keys(M).includes(o)?M[o]:5,s=Object.keys(M).includes(a)?M[a]:5;return d>s?1:d<s?-1:0}),L=A(n({},L),{secondary_info:[...r]}),this._updateConfig({display_options:L})}async _showIncludedEntitiesDialog(C){let e=(this._config.include||[]).filter(i=>!i.includes(".")),t=(this._config.include||[]).filter(i=>i.includes(".")),L=await b5(this.hass),r=A(n({},this._config),{customize:n(n({},L),this._config.customize||{})});await new Promise(i=>{let o={cancel:()=>i(null),confirm:a=>i(a),domains:e,entities:t,cardConfig:r};$(C.target,"show-dialog",{dialogTag:"dialog-select-entities",dialogImport:()=>Promise.resolve().then(()=>(B0(),F4)),dialogParams:o})}).then(i=>{i&&this._updateConfig({include:[...i.domains,...i.entities]})})}_customTagConfirmClick(C){let e=C.target;e=e.parentElement,e=e.parentElement,e.querySelector("ha-button").click();let L=String(this.customTagValue).trim();if(L.length){let r=[this._config.tags||[]].flat();r=[...new Set([...r,L])],this._updateConfig({tags:r})}this.customTagValue=""}_updateConfig(C){this._config&&(this._config=n(n({},this._config),C),$(this,"config-changed",{config:this._config}))}};k1.styles=P`
    div.entities-list {
      max-height: 500px;
      overflow: auto;
    }
    div.row {
      display: flex;
      align-items: center;
      flex-direction: row;
      cursor: pointer;
      margin: 10px 0px;
    }
    div.row ha-icon {
      padding: 8px;
      color: var(--state-icon-color);
    }
    div.row ha-switch {
      padding: 13px 5px;
    }
    .info {
      margin-left: 16px;
      flex: 1 0 60px;
    }
    .info,
    .info > * {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    ha-input {
      width: 100%;
    }
    div.two-columns {
      display: flex; 
      flex-direction: row; 
    }
    div.two-columns .column {
      flex: 50%;
    
    }
    div.two-columns .column > * {
      display: flex; 
      flex-direction: column; 
    }
    scheduler-combo-selector {
      min-width: 240px;
    }
    ha-dropdown {
      display: block;
    }
  `,m([v({attribute:!1})],k1.prototype,"hass",2),m([v()],k1.prototype,"_config",2),m([v()],k1.prototype,"title",2),m([v()],k1.prototype,"tagOptions",2),m([Z()],k1.prototype,"customTagValue",2),k1=m([T("scheduler-card-editor")],k1);U5();W();Q();j5();x2();w0();var L5=class extends w2{constructor(V){if(super(V),this.et=k,V.type!==P5.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(V){if(V===k||V==null)return this.ft=void 0,this.et=V;if(V===u1)return V;if(typeof V!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(V===this.et)return this.ft;this.et=V;let C=[V];return C.raw=C,this.ft={_$litType$:this.constructor.resultType,strings:C,values:[]}}};L5.directiveName="unsafeHTML",L5.resultType=1;var G5=B5(L5);F5();I();W();Q();C1();u3();G1();K0();var q5=function(){return q5=Object.assign||function(H){for(var V,C=1,e=arguments.length;C<e;C++){V=arguments[C];for(var t in V)Object.prototype.hasOwnProperty.call(V,t)&&(H[t]=V[t])}return H},q5.apply(this,arguments)},U8=1e3,h9=60,Z9=h9*60,g9=Z9*24,G8=g9*7;function C7(H,V,C){V===void 0&&(V=Date.now()),C===void 0&&(C={});var e=q5(q5({},q8),C||{}),t=(+H-+V)/U8;if(Math.abs(t)<e.second)return{value:Math.round(t),unit:"second"};var L=t/h9;if(Math.abs(L)<e.minute)return{value:Math.round(L),unit:"minute"};var r=t/Z9;if(Math.abs(r)<e.hour)return{value:Math.round(r),unit:"hour"};var i=t/g9;if(Math.abs(i)<e.day)return{value:Math.round(i),unit:"day"};var o=new Date(H),a=new Date(V),M=o.getFullYear()-a.getFullYear();if(Math.round(Math.abs(M))>0)return{value:Math.round(M),unit:"year"};var d=M*12+o.getMonth()-a.getMonth();if(Math.round(Math.abs(d))>0)return{value:Math.round(d),unit:"month"};var s=t/G8;return{value:Math.round(s),unit:"week"}}var q8={second:45,minute:45,hour:22,day:5};g5();t2();N();var e7=60,S9=3600,Q8=24,H7=(H,V,C)=>{let e=()=>{try{new Date().toLocaleTimeString("i")}catch(t){return t.name==="RangeError"}return!1};if(C==="12"||!C&&V.time_format==="12"){let t=H1(H.getHours()).am_pm;return`${H1(H.getHours()).hours}:${String(H.getMinutes()).padStart(2,"0")} ${t}`}return C==="24"||!C&&V.time_format==="24"?`${String(H.getHours()).padStart(2,"0")}:${String(H.getMinutes()).padStart(2,"0")}`:e()?H.toLocaleTimeString(V.language,{hour:"numeric",minute:"2-digit",hour12:v1(V)}):v1(V)?H7(H,V,"12"):H7(H,V,"24")},E2=class extends _{constructor(){super(...arguments);this.updateInterval=60;this.timer=0}startRefreshTimer(C){clearInterval(this.timer),this.timer=window.setInterval(()=>{this.requestUpdate()},C*1e3),this.updateInterval=C}set hass(C){this._hass=C,this.startRefreshTimer(this.updateInterval)}relativeTime(C){if(!this._hass)return"";let e=new Date,t=(e.getTime()-C.getTime())/1e3,L=t>=0?"past":"future";t=Math.abs(t);let r=Math.round(t);if(L=="future"&&r>0){if(t/S9>=6){let o=e.setHours(0,0,0,0),a=Math.floor((C.valueOf()-o.valueOf())/(Q8*S9*1e3)),M="";a>14?M=m9(C,this._hass.locale):a>7?M=u("ui.components.date.next_week_day",this._hass,"{weekday}",_1(C,"long",this._hass)):a==1?M=u("ui.components.date.tomorrow",this._hass):a>0&&(M=_1(C,"long",this._hass));let d=u("ui.components.time.absolute",this._hass,"{time}",H7(C,this._hass.locale));return C.getHours()==12&&C.getMinutes()==0?d=u("ui.components.time.at_noon",this._hass):C.getHours()==0&&C.getMinutes()==0&&(d=u("ui.components.time.at_midnight",this._hass)),(M+" "+d).trim()}else if(Math.round(t/e7)>60&&Math.round(t/e7)<120){let o=Math.round(t/e7-60),a=c("ui.common.and",this._hass),M=new Intl.RelativeTimeFormat(this._hass.language,{numeric:"auto"}).format(1,"hour"),d=Intl.NumberFormat(this._hass.locale.language,{style:"unit",unit:"minute",unitDisplay:"long"}).format(o);return`${M} ${a} ${d}`}else if(Math.round(t)>60&&Math.round(t)<120){let o=Math.round(t-60),a=c("ui.common.and",this._hass),M=new Intl.RelativeTimeFormat(this._hass.language,{numeric:"auto"}).format(1,"minute"),d=Intl.NumberFormat(this._hass.locale.language,{style:"unit",unit:"second",unitDisplay:"long"}).format(o);return`${M} ${a} ${d}`}}let i=C7(C);return new Intl.RelativeTimeFormat(this._hass.language,{numeric:"auto"}).format(i.value,i.unit)}render(){if(!this._hass||!this.datetime)return l``;let C=new Date,e=Math.round((this.datetime.valueOf()-C.valueOf())/1e3),t=60;return Math.abs(e)<=150&&(t=Math.max(Math.ceil(Math.abs(e))/10,2)),this.updateInterval!=t&&this.startRefreshTimer(t),l`
      ${z(this.relativeTime(this.datetime))}
    `}};m([v()],E2.prototype,"_hass",2),m([v()],E2.prototype,"datetime",2),E2=m([T("scheduler-relative-time")],E2);S1();var J1=class extends _{render(){var V,C,e,t,L;try{let r=this.hass.states[this.schedule.entity_id];if(!r)return l``;let i=["off","completed"].includes(r.state),o=this.schedule.entries[0].slots[this.schedule.next_entries[0]||0].actions[0],a=P2(o,this.config.customize);if(((V=this.config.display_options)==null?void 0:V.icon)=="entity"){let d=[((C=o.target)==null?void 0:C.entity_id)||[]].flat().shift();["script","notify"].includes(S(o.service))&&(d=o.service),d&&(a=n2(d,this.config.customize,this.hass))}let M=![((e=o.target)==null?void 0:e.entity_id)||[]].flat().every(d=>Object.keys(this.hass.states).includes(d));return M&&(a="mdi:help"),l`
      <ha-icon
        icon="${a}"
        @click=${this._handleIconClick}
        class="${i?"disabled":""}"
      ></ha-icon>

      <div
        class="info ${i?"disabled":""} ${M?"defective":""}"
        @click=${this._handleItemClick}
      >
        ${this.renderDisplayItem(((t=this.config.display_options)==null?void 0:t.primary_info)||r2)}
        <div class="secondary">
        ${this.renderDisplayItem(((L=this.config.display_options)==null?void 0:L.secondary_info)||W1)}
        </div>
      </div>
      <div class="state">
        ${this.config.show_toggle_switches!==!1?l`<ha-switch
              ?checked=${["on","triggered"].includes(r.state||"")}
              ?disabled=${r.state=="completed"}
              @change=${this._toggleEnableDisable}
            ></ha-switch>`:""}
      </div>

    `}catch(r){return l`
        <hui-warning .hass=${this.hass} @click=${this._handleItemClick}>
          <span style="white-space: normal">
            Failed to display schedule ${this.schedule.entity_id}.
            Reason: ${r}
          </span>
        </hui-warning>
      `}}renderDisplayItem(V){let C=t=>{let L=t.split("<relative-time></relative-time>");if(L.length>1){let i=this.schedule.timestamps[this.schedule.next_entries[0]||0];return l`
          ${L[0]?G5(L[0]):""}
          <scheduler-relative-time
            .hass=${this.hass}
            .datetime=${new Date(i)}
          >
          </scheduler-relative-time>
          ${L[1]?G5(L[1]):""}
        `}if(t.match(/^(<tag>[^<]*<\/tag>)+$/)!==null){let i=t.split(/<tag>([^<]*)<\/tag>/).filter(o=>o);return l`
          <div class="tags">
            ${i==null?void 0:i.map(o=>l`<span class="tag">${o}</span>`)}
          </div>`}return G5(t)};return X2(this.schedule,V,this.hass,this.config.customize).filter(t=>t.length).map(t=>{let L=C(t);return t.includes('class="slot-info"')?L:l`<span class="secondary-line">${L}</span>`})}_handleItemClick(V){let C=new CustomEvent("editClick",{detail:{schedule_id:this.schedule_id}});this.dispatchEvent(C)}_handleIconClick(V){let C=new CustomEvent("editClick",{detail:{schedule_id:this.schedule_id}});this.dispatchEvent(C)}_toggleEnableDisable(V){let C=V.target.checked;this.hass.callService("switch",C?"turn_on":"turn_off",{entity_id:this.schedule.entity_id})}static get styles(){return P`
      :host {
        display: flex;
        align-items: center;
        flex-direction: row;
      }
      .info {
        margin-left: 16px;
        margin-right: 8px;
        margin-inline-start: 16px;
        margin-inline-end: 8px;
        flex: 1 1 30%;
        transition: color 0.2s ease-in-out;
        cursor: pointer;
        line-height: var(--ha-line-height-normal);
      }
      .info,
      .info > * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .flex ::slotted(*) {
        margin-left: 8px;
        margin-inline-start: 8px;
        margin-inline-end: initial;
        min-width: 0;
      }
      .flex ::slotted([slot="secondary"]) {
        margin-left: 0;
        margin-inline-start: 0;
        margin-inline-end: initial;
      }
      .secondary,
      ha-relative-time {
        color: var(--secondary-text-color);
        transition: color 0.2s ease-in-out;
      }
      .secondary {
        display: flex;
        flex-direction: column;
        gap: 0.05rem;
      }
      span.secondary-line {
        display: block;
        margin: 0;
      }
      span.slot-info {
        display: flex;
        align-items: baseline;
        justify-content: flex-start;
        gap: 0.4em;
        margin: 0;
        line-height: 1.12;
        width: 100%;
      }
      span.slot-info--active {
        color: var(--primary-text-color);
        font-weight: 600;
        font-size: 1.32em;
      }
      span.slot-info--inactive {
        color: var(--disabled-text-color);
      }
      span.slot-info--disabled {
        color: var(--disabled-text-color);
        font-weight: normal;
      }
      span.slot-info__content {
        flex: 1 1 auto;
        display: flex;
        align-items: baseline;
        min-width: 0;
      }
      span.slot-info__label {
        flex: 1 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-inline-end: 0.1em;
      }
      span.slot-info__time {
        flex: 0 0 auto;
        white-space: nowrap;
        font-feature-settings: "tnum";
      }
      .info.disabled span.slot-info,
      .info.disabled span.slot-info--active {
        color: var(--disabled-text-color);
        font-weight: normal;
        font-size: inherit;
      }
      .info.disabled span.slot-info__content,
      .info.disabled span.slot-info__label,
      .info.disabled span.slot-info__time {
        color: inherit;
      }
      .state {
        text-align: var(--float-end);
      }
      .value {
        direction: ltr;
      }
      ha-icon {
        display: flex;
        flex: 0 0 40px;
        color: var(--state-icon-color);
        transition: color 0.2s ease-in-out;
        cursor: pointer;
        align-items: center;
        justify-content: center;
      }
      ha-icon.disabled {
        color: var(--disabled-text-color);
      }
      div.disabled {
        --primary-text-color: var(--disabled-text-color);
        --secondary-text-color: var(--disabled-text-color);
        --state-icon-color: var(--disabled-text-color);
        color: var(--disabled-text-color);
      }
      div.tags {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
      }
      span.tag {
        height: 28px;
        border-radius: 14px;
        background: rgba(var(--rgb-primary-color), 0.40);
        color: var(--primary-text-color);
        line-height: 1.25rem;
        font-size: 0.875rem;
        padding: 0px 12px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
      .defective {
        text-decoration: line-through;
      }
    `}};m([v()],J1.prototype,"hass",2),m([v()],J1.prototype,"schedule_id",2),m([v()],J1.prototype,"schedule",2),m([v()],J1.prototype,"config",2),J1=m([T("scheduler-item-row")],J1);a2();var N1=class extends _{constructor(){super(...arguments);this._config={};this.showDiscovered=!1;this.translationsLoaded=!1;this.connectionError=!1}async setConfig(C){C=E7(C),this._config=n({},C)}async firstUpdated(){await _7(),document.querySelector("home-assistant")._loadFragmentTranslations(this.hass.language,"config"),await b5(this.hass).then(e=>{e=Object.fromEntries(Object.entries(e).filter(([t])=>m1(t,this._config))),this._config=A(n({},this._config),{customize:n(n({},e),this._config.customize||{})})})}willUpdate(){this.hass.loadBackendTranslation("services")}__checkSubscribed(){this.__unsubs!==void 0||!this.isConnected||this.hass===void 0||(this.__unsubs=this.hassSubscribe())}connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){let C=this.__unsubs.pop();C instanceof Promise?C.then(e=>e()):C()}this.__unsubs=void 0}}updated(C){super.updated(C),C.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return this.loadSchedules(),[this.hass.connection.subscribeMessage(C=>this.handleScheduleItemUpdated(C),{type:"scheduler_updated"})]}shouldUpdate(C){let e=C.get("hass"),t=C.get("_config");return t&&this._config&&Object.keys(t).filter(r=>t[r]!==this._config[r]).some(r=>["tags","discover_existing","sort_by","display_options"].includes(r))&&(async()=>await this.loadSchedules())(),!this.translationsLoaded&&c("component.input_boolean.services.turn_on.name",this.hass,!1).length&&c("ui.panel.config.automation.editor.conditions.type.sun.sunrise",this.hass,!1).length?(this.translationsLoaded=!0,!0):e&&C.size==1&&this.schedules?Object.values(this.schedules).some(L=>JSON.stringify(e.states[L.entity_id])!==JSON.stringify(this.hass.states[L.entity_id])):!0}render(){let C=[...this.schedules||[]],e=C.filter(r=>_2(r,this._config)),t=C.filter(r=>!_2(r,this._config)),L=this.showDiscovered?C.some(r=>{var i;return["on","triggered"].includes(((i=this.hass.states[r.entity_id])==null?void 0:i.state)||"")}):e.some(r=>{var i;return["on","triggered"].includes(((i=this.hass.states[r.entity_id])==null?void 0:i.state)||"")});return l`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${!g(this._config.title)||typeof this._config.title=="boolean"&&this._config.title?u("ui.panel.common.title",this.hass):typeof this._config.title=="boolean"?"":this._config.title}
          </div>

          ${Object.keys(this.schedules||{}).length&&this._config.show_header_toggle?l`
          <ha-switch
            ?checked=${L}
            @change=${this.toggleDisableAll}
          >
          </ha-switch>
          `:""}
        </div>

        <div class="card-content" id="states">

    ${this.connectionError?l`
        <div>
          <hui-warning .hass=${this.hass}>
            <span style="white-space: normal">
              ${u("ui.panel.overview.backend_error",this.hass)}
            </span>
          </hui-warning>
        </div>
      `:Object.keys(C).length?e.map(r=>l`
            <scheduler-item-row
              .hass=${this.hass}
              .config=${this._config}
              .schedule_id=${r.schedule_id}
              .schedule=${r}
              @editClick=${i=>{this._handleEditClick(i,r)}}
            >
            </scheduler-item-row>
          `):l`
        <div>
          ${u("ui.panel.overview.no_entries",this.hass)}
        </div>
        `}

      ${Object.keys(C).length>e.length&&this._config.discover_existing!==!1?this.showDiscovered?l`

          ${t.map(r=>l`
                <scheduler-item-row
                  .hass=${this.hass}
                  .config=${this._config}
                  .schedule_id=${r.schedule_id}
                  .schedule=${r}
              @editClick=${i=>{this._handleEditClick(i,r)}}
                >
                </scheduler-item-row>
              `)}

              <div>
                <ha-button
                  appearance="plain"
                  @click=${()=>{this.showDiscovered=!1}}
                >
                  ${u("ui.panel.overview.hide_excluded",this.hass)}
                </ha-button>
              </div>
            `:l`
              <div>
                <ha-button
                  appearance="plain"
                  @click=${()=>{this.showDiscovered=!0}}
                >
                  +
                  ${u("ui.panel.overview.excluded_items",this.hass,"{number}",Object.keys(C).length-e.length)}
                </ha-button>
              </div>
            `:""}
        </div>
        ${this._config.show_add_button!==!1?l`
        <div class="card-actions">
          ${this.connectionError?l`
          <ha-button appearance="plain" variant="warning" @click=${this._retryConnection}
            >${c("ui.common.refresh",this.hass)}
          </ha-button>
            `:l`
          <ha-button appearance="plain" @click=${this._addClick}
            >${c("ui.common.add",this.hass)}
          </ha-button>
          `}
        </div>`:""}
      </ha-card>
    `}async loadSchedules(){h2(this.hass).then(C=>{this.schedules=_5(C,this._config,this.hass)}).catch(C=>{this.schedules=[],this.connectionError=!0})}async getCardSize(){return new Promise(C=>{let e=0,t=setInterval(()=>{var i;if(e++,!this._config||!this.schedules&&!this.connectionError&&e<50)return;let L=this._config.title||this._config.show_header_toggle?3:1;this._config.show_add_button&&(L+=1);let r=(([((i=this._config.display_options)==null?void 0:i.secondary_info)||[]].flat().length||2)+1)/2;this.schedules&&(L+=this.showDiscovered?Object.keys(this.schedules).length*r:Object.values(this.schedules).filter(o=>_2(o,this._config)).length*r),clearInterval(t),C(Math.round(L))},50)})}_retryConnection(){setTimeout(async()=>{await this.loadSchedules()},100),this.connectionError=!1,this.requestUpdate()}async handleScheduleItemUpdated(C){if(C.event=="scheduler_item_removed"){this.schedules=(this.schedules||[]).filter(e=>e.schedule_id!==C.schedule_id);return}y5(this.hass,C.schedule_id).then(e=>{let t=this.schedules.findIndex(i=>i.schedule_id==C.schedule_id),L=t>=0?this.schedules[t]:null,r=[...this.schedules||[]];!e||this._config.discover_existing===!1&&!_2(e,this._config)?L&&(r=r.filter(i=>i.schedule_id!==C.schedule_id)):L?L.timestamps[L.next_entries[0]||0]==e.timestamps[e.next_entries[0]||0]?r=Object.assign(r,{[t]:e}):(r=Object.assign(r,{[t]:e}),r=_5(r,this._config,this.hass)):r=_5([...r,e],this._config,this.hass),this.schedules=[...r]})}_handleEditClick(C,e){if(!this.schedules)return;let t={schedule:W2(e,this.hass),cardConfig:this._config,editItem:e.schedule_id};$(C.target,"show-dialog",{dialogTag:"dialog-scheduler-editor",dialogImport:()=>Promise.resolve().then(()=>(U5(),X0)),dialogParams:t})}_addClick(C){let e=[this._config.tags||[]].flat().filter(r=>!["none","disabled","enabled"].includes(r)),t=this._config.default_editor=="scheme"?JSON.parse(JSON.stringify(f2)):JSON.parse(JSON.stringify(G2)),L={schedule:A(n({},t),{tags:e.length==1?e:[]}),cardConfig:this._config};$(this,"show-dialog",{dialogTag:"dialog-scheduler-editor",dialogImport:()=>Promise.resolve().then(()=>(U5(),X0)),dialogParams:L})}toggleDisableAll(C){if(!this.hass||!this.schedules)return;let e=C.target.checked;Object.values(this.schedules).filter(L=>this.showDiscovered||_2(L,this._config)).forEach(L=>{this.hass.callService("switch",e?"turn_on":"turn_off",{entity_id:L.entity_id})})}static getConfigElement(){return document.createElement("scheduler-card-editor")}};N1.styles=P`
    .card-header {
      display: flex;
      justify-content: space-between;
    }
    .card-header .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
    }
    .card-header ha-switch {
      display: flex;
      align-self: center;
      margin: 0px 6px;
      line-height: 24px;
    }

    #states > * {
      margin: 8px 0;
    }
    #states > *:first-child {
      margin-top: 0;
    }
    #states > *:last-child {
      margin-bottom: 0;
    }
  
    button.show-more {
      color: var(--primary-color);
      text-align: left;
      cursor: pointer;
      background: none;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      font: inherit;
    }
    button.show-more:focus {
      outline: none;
      text-decoration: underline;
    }
    .card-actions, .card-actions > * { 
      display: flex;
    }
  `,m([v({attribute:!1})],N1.prototype,"hass",2),m([v()],N1.prototype,"_config",2),m([Z()],N1.prototype,"schedules",2),m([Z()],N1.prototype,"showDiscovered",2),N1=m([T("scheduler-card")],N1);window.customCards=window.customCards||[];window.customCards.push({type:"scheduler-card",name:"Scheduler Card",description:"Card to manage schedule entities made with scheduler-component."});console.info(`%c  SCHEDULER-CARD  
%c  Version: ${B7.padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");})();
