import{D as e}from"./dx-ui-element-7f5e2dd2.js";import{g as n,h as o,i as t}from"./popup-3304c929.js";import{i as r}from"./logicaltreehelper-bc8e12d3.js";import{E as s}from"./eventhelper-8570b930.js";import{y as l}from"./lit-element-70cf14f4.js";class d extends e{constructor(){super(),this.boundOnDropDownElementChangedHandler=this.onDropDownElementChanged.bind(this),this.boundOnDropDownShownHandler=this.onDropDownShown.bind(this),this.boundOnDropDownClosedHandler=this.onDropDownClosed.bind(this),this.boundOnDropDownPortalElementsChangedHandler=this.onDropDownPortalElementsChanged.bind(this),this.boundSlotChangedHandler=this.onSlotChanged.bind(this),this.dropDownPortal=null,this._dropDownElement=null,this._adaptiveDropDownElement=null}get dropDownElement(){return this._dropDownElement}get useMobileFocusBehaviour(){var e;return(null===(e=this._adaptiveDropDownElement)||void 0===e?void 0:e.adaptivityEnabled)||!1}connectedCallback(){super.connectedCallback(),this.ensureDropDownInfrastructure(),this.addEventListener(n.eventName,this.boundOnDropDownElementChangedHandler)}disconnectedCallback(){this.removeEventListener(n.eventName,this.boundOnDropDownElementChangedHandler),this.disposeDropDownInfrastructure(),super.disconnectedCallback()}render(){return l`
            <slot @slotchange="${this.boundSlotChangedHandler}">
            </slot>
        `}processCapturedKeyDownAsync(e,n){return this.invokeKeyDownServerCommand(e)?(e.preventDefault(),n.handled=!0,Promise.resolve()):super.processCapturedKeyDownAsync(e,n)}processCapturedPointerDownAsync(e,n){return this.canHandlePointerDown(e)?(n.handled=!0,Promise.resolve()):super.processCapturedPointerDownAsync(e,n)}canHandlePointerDown(e){return!1}invokeKeyDownServerCommand(e){return!1}onSlotChanged(e){this.disposeDropDownInfrastructure(),this.ensureDropDownInfrastructure()}getDropDownPortal(){if(!this.shadowRoot)return null;const e=this.shadowRoot.querySelector("slot");if(!e)return null;return e.assignedNodes().find((e=>r(e,(()=>["popup","addEventListener","removeEventListener"]))))}onDropDownElementChanged(e){this.dropDownPortal||this.ensureDropDownInfrastructure(),s.getOriginalSource(e)===this.dropDownPortal&&(this.disposeDropDownElement(),this.ensureDropDownElement())}onDropDownShown(e){this.dropDownElement&&r(this.dropDownElement,(()=>["logicalParent"]))&&this.addLogicalChild(this.dropDownElement)}onDropDownClosed(e){this.dropDownElement&&r(this.dropDownElement,(()=>["logicalParent"]))&&this.removeLogicalChild(this.dropDownElement)}onDropDownPortalElementsChanged(e){this.ensureDropDownElement()}ensureDropDownInfrastructure(){var e;this.dropDownPortal=this.getDropDownPortal(),null===(e=this.dropDownPortal)||void 0===e||e.addEventListener(n.eventName,this.boundOnDropDownPortalElementsChangedHandler),this.ensureDropDownElement()}ensureDropDownElement(){var e,n,s;this.dropDownPortal&&(this._dropDownElement=null===(e=this.dropDownPortal)||void 0===e?void 0:e.popup,null===(n=this._dropDownElement)||void 0===n||n.addEventListener(o.eventName,this.boundOnDropDownShownHandler),null===(s=this._dropDownElement)||void 0===s||s.addEventListener(t.eventName,this.boundOnDropDownClosedHandler),this._dropDownElement&&r(this._dropDownElement,(()=>["adaptivityEnabled"]))&&(this._adaptiveDropDownElement=this._dropDownElement))}disposeDropDownInfrastructure(){var e;null===(e=this.dropDownPortal)||void 0===e||e.removeEventListener(n.eventName,this.boundOnDropDownPortalElementsChangedHandler),this.dropDownPortal=null,this._adaptiveDropDownElement=null,this.disposeDropDownElement()}disposeDropDownElement(){var e,n;null===(e=this._dropDownElement)||void 0===e||e.removeEventListener(o.eventName,this.boundOnDropDownShownHandler),null===(n=this._dropDownElement)||void 0===n||n.removeEventListener(t.eventName,this.boundOnDropDownClosedHandler),this._dropDownElement=null}}export{d as D};
