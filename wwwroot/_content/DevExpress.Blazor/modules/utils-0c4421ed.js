import{D as e,H as t,T as i,P as s,a as r}from"./dx-html-element-pointer-events-helper-4b46ddbf.js";import{P as l,a as n}from"./point-e4ec110e.js";import{S as a}from"./rect-00eb3fa4.js";import{_ as o}from"./_tslib-6e8ca86b.js";import{C as u}from"./custom-events-helper-18f7786a.js";import{s as h,y as d}from"./lit-element-70cf14f4.js";import{e as c}from"./custom-element-267f9a21.js";import{e as g}from"./property-d3853089.js";class p{constructor(e,t){this.x=t.x,this.y=t.y}}class m extends CustomEvent{constructor(e,t){super(m.eventName,{detail:new p(e,t),bubbles:!0,composed:!0,cancelable:!1})}}m.eventName="dxbl:popup-dragcompleted",u.register(m.eventName,(e=>e.detail));class b{constructor(e){this.x=e.x,this.y=e.y}}class x extends CustomEvent{constructor(e){super(x.eventName,{detail:new b(e),bubbles:!0,composed:!0,cancelable:!1})}}x.eventName="dxbl:popup-dragstarted",u.register(x.eventName,(e=>e.detail));class w{constructor(e){this.x=e.x,this.y=e.y}}class v extends CustomEvent{constructor(e){super(v.eventName,{detail:new w(e),bubbles:!0,composed:!0,cancelable:!0})}}v.eventName="dxbl-popup.drag";let z=class extends h{constructor(){super(),this.allowDrag=!1,this.pointerEventsHelper=new e(this),he(this,(e=>{this.style.cursor="move",this.style.userSelect="none",this.shadowRoot.dispatchEvent(new x(e))}),(e=>{this.shadowRoot.dispatchEvent(new v(e))}),((e,t)=>{this.style.cursor="",this.style.userSelect="",this.shadowRoot.dispatchEvent(new m(t,e))}),(()=>this.allowDrag))}connectedCallback(){super.connectedCallback(),this.pointerEventsHelper.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.pointerEventsHelper.dispose()}get handlePointerEventsMode(){return t.Dragging}get handlePointerEventsTarget(){return this}get handlePointerEventsDelay(){return i}get hoverTitleElementsSelector(){return null}render(){return d`<slot></slot>`}};o([g({type:Boolean,attribute:"allow-drag",reflect:!1})],z.prototype,"allowDrag",void 0),z=o([c("dxbl-popup-header")],z);class f{constructor(e){this.action=e}measure(){this.action(this)}}class D{constructor(e){this.action=e}mutate(){this.action(this)}}const y=new Set,E=new Set;function P(e,t,i){S(e,t,t.add,!0,i)}function V(e,t,i){S(e,t,t.delete,!1,i)}function S(e,t,i,s,r){if(t.has(e)===s)throw new Error(`Element already ${s?"attached to":"detached from"} to the ${r} pipeline`);i.call(t,e),X()?-1===N&&(N=requestAnimationFrame(Y)):-1!==N&&(cancelAnimationFrame(N),N=-1)}let N=-1;function X(){return 0!==E.size||0!==y.size}function Y(e){E.forEach((e=>e.measure())),y.forEach((e=>e.mutate())),N=X()?requestAnimationFrame(Y):-1}function H(e){P(e,y,"mutation")}function C(e){V(e,y,"mutation")}function M(e,t){return new Promise(((i,s)=>{!function(e){P(e,E,"measure")}(new f((s=>{!function(e){V(e,E,"measure")}(s),i(t(e))})))}))}function W(e,t){return new Promise(((i,s)=>{H(new D((s=>{C(s),i(t(e))})))}))}const $=new ResizeObserver((e=>{for(const t of e){t.target.actualSize=new a(Math.round(t.contentRect.width),Math.round(t.contentRect.height))}}));class A{constructor(e){this.width=e.width,this.height=e.height}}class k extends CustomEvent{constructor(e){super(k.eventName,{detail:new A(e),bubbles:!0,composed:!0,cancelable:!1})}}k.eventName="dxbl:popup-resizestarted",u.register(k.eventName,(e=>e.detail));class R{constructor(e){this.width=e.width,this.height=e.height}}class L extends CustomEvent{constructor(e){super(L.eventName,{detail:new R(e),bubbles:!0,composed:!0,cancelable:!1})}}L.eventName="dxbl:popup-resizecompleted",u.register(L.eventName,(e=>e.detail));class j{constructor(e,t,i,s,r,l){this.deltaWidth=e,this.deltaHeight=t,this.deltaX=i,this.deltaY=s,this.resizing=r,this.dragging=l}}class T extends CustomEvent{constructor(e,t,i,s,r,l){super(T.eventName,{detail:new j(e,t,i,s,r,l),bubbles:!0,composed:!0,cancelable:!1})}}T.eventName="dxbl:popup-layoutchange";class _{constructor(e,t){this.width=null,this.height=null,this.x=null,this.y=null,this.resizing=e,this.dragging=t}}class B extends CustomEvent{constructor(e,t){super(B.eventName,{detail:new _(e,t),bubbles:!0,composed:!0,cancelable:!1})}}B.eventName="dxbl:popup-layoutchangestart",u.register(B.eventName,(e=>e.detail));class F{constructor(e,t){this.width=null,this.height=null,this.x=null,this.y=null,this.oldWidth=null,this.oldHeight=null,this.oldX=null,this.oldY=null,this.resizing=e,this.dragging=t}}class q extends CustomEvent{constructor(e,t){super(q.eventName,{detail:new F(e,t),bubbles:!0,composed:!0,cancelable:!1})}}q.eventName="dxbl:popup-layoutchangeend",u.register(q.eventName,(e=>e.detail));const I="1rem",U="--dxbl-popup-resize-container-width",O="--dxbl-popup-resize-container-height";class G extends h{get lastX(){if(null===this.currentPosition)throw new Error("invalid state");return this.currentPosition.x}get lastY(){if(null===this.currentPosition)throw new Error("invalid state");return this.currentPosition.y}get topValue(){throw new Error("should be implemented")}get leftValue(){throw new Error("should be implemented")}get widthValue(){return I}get heightValue(){return I}get cursorValue(){throw new Error("should be implemented")}get isDragPossible(){return!1}constructor(){super(),this.currentPosition=null,this.pointerEventsHelper=new e(this),he(this,(e=>{this.currentPosition=e,this.shadowRoot.dispatchEvent(new B(!0,this.isDragPossible))}),(e=>{const t=this.getDeltaWidth(e.x),i=this.getDeltaHeight(e.y),s=this.getDeltaX(e.x),r=this.getDeltaY(e.y);this.currentPosition=e,this.shadowRoot.dispatchEvent(new T(t,i,s,r,!0,this.isDragPossible))}),((e,t)=>{this.currentPosition=null,this.shadowRoot.dispatchEvent(new q(!0,this.isDragPossible))}))}connectedCallback(){super.connectedCallback(),this.pointerEventsHelper.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.pointerEventsHelper.dispose()}get handlePointerEventsMode(){return t.Dragging}get handlePointerEventsTarget(){return this}get handlePointerEventsDelay(){return i}get hoverTitleElementsSelector(){return null}getDeltaWidth(e){throw new Error("should be implemented")}getDeltaHeight(e){throw new Error("should be implemented")}getDeltaX(e){throw new Error("should be implemented")}getDeltaY(e){throw new Error("should be implemented")}render(){return d`
    <style>
        :host {
            position: absolute;
            top: ${this.topValue};
            left: ${this.leftValue};
            width: 0px;
            height: 0px;
        }
        .dxbl-resize-handle {
            width: ${this.widthValue};
            height: ${this.heightValue};
            opacity: 0;
            transform: translate(-50%, -50%);
            cursor: ${this.cursorValue};
        }
    </style>
    <div class="dxbl-resize-handle"></div>
`}}let J=class extends G{get isDragPossible(){return!0}get topValue(){return"0%"}get leftValue(){return"50%"}get widthValue(){return`calc(var(${U}) - ${I})`}get cursorValue(){return"ns-resize"}getDeltaWidth(e){return 0}getDeltaX(e){return 0}getDeltaHeight(e){return this.lastY-e}getDeltaY(e){return e-this.lastY}};J=o([c("dxbl-resize-top-edge")],J);let K=class extends G{get topValue(){return"50%"}get leftValue(){return"100%"}get heightValue(){return`calc(var(${O}) - ${I})`}get cursorValue(){return"ew-resize"}getDeltaWidth(e){return e-this.lastX}getDeltaX(e){return 0}getDeltaHeight(e){return 0}getDeltaY(e){return 0}};K=o([c("dxbl-resize-right-edge")],K);let Q=class extends G{get topValue(){return"100%"}get leftValue(){return"50%"}get widthValue(){return`calc(var(${U}) - ${I})`}get cursorValue(){return"ns-resize"}getDeltaWidth(e){return 0}getDeltaX(e){return 0}getDeltaHeight(e){return e-this.lastY}getDeltaY(e){return 0}};Q=o([c("dxbl-resize-bottom-edge")],Q);let Z=class extends G{get isDragPossible(){return!0}get topValue(){return"50%"}get leftValue(){return"0%"}get heightValue(){return`calc(var(${O}) - ${I})`}get cursorValue(){return"ew-resize"}getDeltaWidth(e){return this.lastX-e}getDeltaX(e){return e-this.lastX}getDeltaHeight(e){return 0}getDeltaY(e){return 0}};Z=o([c("dxbl-resize-left-edge")],Z);let ee=class extends G{get isDragPossible(){return!0}get topValue(){return"0%"}get leftValue(){return"0%"}get cursorValue(){return"se-resize"}getDeltaWidth(e){return this.lastX-e}getDeltaX(e){return e-this.lastX}getDeltaHeight(e){return this.lastY-e}getDeltaY(e){return e-this.lastY}};ee=o([c("dxbl-resize-tl-grip")],ee);let te=class extends G{get isDragPossible(){return!0}get topValue(){return"0%"}get leftValue(){return"100%"}get cursorValue(){return"ne-resize"}getDeltaWidth(e){return e-this.lastX}getDeltaX(e){return 0}getDeltaHeight(e){return this.lastY-e}getDeltaY(e){return e-this.lastY}};te=o([c("dxbl-resize-tr-grip")],te);let ie=class extends G{get topValue(){return"100%"}get leftValue(){return"100%"}get cursorValue(){return"se-resize"}getDeltaWidth(e){return e-this.lastX}getDeltaX(e){return 0}getDeltaHeight(e){return e-this.lastY}getDeltaY(e){return 0}};ie=o([c("dxbl-resize-br-grip")],ie);let se=class extends G{get isDragPossible(){return!0}get topValue(){return"100%"}get leftValue(){return"0%"}get cursorValue(){return"sw-resize"}getDeltaWidth(e){return this.lastX-e}getDeltaX(e){return e-this.lastX}getDeltaHeight(e){return e-this.lastY}getDeltaY(e){return 0}};se=o([c("dxbl-resize-bl-grip")],se);const re="dxbl-popup-resizable-container";let le=class extends h{constructor(){super(...arguments),this.actualSize=null,this.appliedSize=null,this.widthAttrName=U,this.heightAttrName=O}connectedCallback(){super.connectedCallback(),H(this),$.observe(this)}disconnectedCallback(){super.disconnectedCallback(),C(this),$.unobserve(this)}mutate(){null!==this.actualSize&&(null!==this.appliedSize&&this.appliedSize.width===this.actualSize.width||this.style.setProperty(U,this.actualSize.width+"px"),null!==this.appliedSize&&this.appliedSize.height===this.actualSize.height||this.style.setProperty(O,this.actualSize.height+"px"),this.appliedSize=this.actualSize)}render(){return d`
<style>
    :host {
        display: flex;
        flex: 1 1 auto;
        min-width: 0px;
        min-height: 0px;
        
        ${this.widthAttrName}: 0px;
        ${this.heightAttrName}: 0px;
    }
    .dxbl-popup-resizable-container {
        position: absolute;
        width: var(${this.widthAttrName});
        height: var(${this.heightAttrName});
        z-index: -1;
    }
    .dxbl-popup-resizable-content {
        display: flex;
        flex-flow: column nowrap;
        flex: 1 1 auto;
        overflow: hidden;
    }
</style>
<div class="dxbl-popup-resizable-container">
    <dxbl-resize-top-edge></dxbl-resize-top-edge>
    <dxbl-resize-right-edge></dxbl-resize-right-edge>
    <dxbl-resize-bottom-edge></dxbl-resize-bottom-edge>
    <dxbl-resize-left-edge></dxbl-resize-left-edge>
    <dxbl-resize-tl-grip></dxbl-resize-tl-grip>
    <dxbl-resize-tr-grip></dxbl-resize-tr-grip>
    <dxbl-resize-br-grip></dxbl-resize-br-grip>
    <dxbl-resize-bl-grip></dxbl-resize-bl-grip>
</div>
<div class="dxbl-popup-resizable-content">
    <slot></slot>
</div>
`}};le=o([c(re)],le);const ne=document.createElement("DIV");function ae(e,t){if(null===e)return 0;const i=ne.cloneNode();i.style.width=e;(t||document.body).appendChild(i);const s=i.offsetWidth;return i.remove(),s}function oe(e){e.addEventListener(v.eventName,(t=>{t.stopImmediatePropagation();const i=t;e.positionX=i.detail.x,e.positionY=i.detail.y}),{passive:!0}),e.addEventListener(B.eventName,(t=>{const i=t,s=e.getBoundingClientRect();e.sizeDirty=!0,e.actualPosition=new l(window.scrollX+s.x,window.scrollY+s.y),e.actualSize=new a(s.width,s.height),e.initialPosition=e.actualPosition,e.initialSize=e.actualSize,e.actualMinWidth=ae(e.minWidth,e),e.actualMinHeight=ae(e.minHeight,e),e.actualMaxWidth=ae(e.maxWidth,e)||Number.MAX_VALUE,e.actualMaxHeight=ae(e.maxHeight,e)||Number.MAX_VALUE,i.detail.width=e.initialSize.width,i.detail.height=e.initialSize.height,i.detail.x=e.initialPosition.x,i.detail.y=e.initialPosition.y})),e.addEventListener(q.eventName,(t=>{const i=t;i.detail.width=e.actualSize.width,i.detail.height=e.actualSize.height,i.detail.x=e.actualPosition.x,i.detail.y=e.actualPosition.y,i.detail.oldWidth=e.initialSize.width,i.detail.oldHeight=e.initialSize.height,i.detail.oldX=e.initialPosition.x,i.detail.oldY=e.initialPosition.y})),e.addEventListener(T.eventName,(t=>{const i=t.detail,s=e.actualSize;e.actualSize=new a(Math.max(e.actualMinWidth,Math.min(e.actualMaxWidth,e.actualSize.width+i.deltaWidth)),Math.max(e.actualMinHeight,Math.min(e.actualMaxHeight,e.actualSize.height+i.deltaHeight)));e.actualPosition=new l(e.actualPosition.x+(s.width-e.actualSize.width!=0?i.deltaX:0),e.actualPosition.y+(s.height-e.actualSize.height!=0?i.deltaY:0)),e.positionX=e.actualPosition.x,e.positionY=e.actualPosition.y,e.width=e.actualSize.width+"px",e.height=e.actualSize.height+"px"}),{passive:!0})}function ue(e,t){return new l(Math.floor(t.clientX+window.scrollX-e.x),Math.floor(t.clientY+window.scrollY-e.y))}function he(e,t,i,a,o=null){e.addEventListener(s.eventName,(s=>{if(null!==o&&!o())return;const u=s,h=function(e,t){const i=e.getBoundingClientRect();return new l(Math.floor(t.clientX-i.x),Math.floor(t.clientY-i.y))}(e,u.detail.source),d=ue(h,u.detail.source);let c=d,g=null;const p=e=>{c=ue(h,e),null!==g&&n.areClose(g,c)||(g=c,i(g))};document.addEventListener("pointermove",p,{passive:!0}),e.addEventListener(r.eventName,(e=>{document.removeEventListener("pointermove",p);const t=ue(h,e.detail.source);a(t,d)}),{once:!0}),t(d)}))}ne.style.position="absolute",ne.style.top="-1000px",ne.style.left="-1000px",ne.style.visibility="hidden";export{oe as a,H as b,ae as c,C as d,W as e,M as m,re as p};
