(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{M5oJ:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectProposalModule",(function(){return Te}));var i=n("ofXK"),a=n("tyNb"),c=n("PpXk"),o=n("quSY"),r=n("aR35"),s=n("RqBM"),l=n("3Pt+"),b=n("OFCM"),m=n("v5lj"),d=n("TnV5"),h=n("fXoL"),u=n("g0ew"),p=n("IV9s"),k=n("HXqD"),g=n("h/T5"),f=n("dNgK"),x=n("Wp6s"),C=n("XiUz"),y=n("f0Cb"),v=n("xHqg"),T=n("kmnG"),U=n("qFsG"),_=n("bTqV"),w=n("d3UM"),M=n("iadO"),D=n("aSTP"),A=n("bv9b");function I(e,t){if(1&e&&h.Pb(0,"mat-progress-bar",5),2&e){const e=h.gc();h.nc("value",e.progress)}}let j=(()=>{class e{constructor(e){this.host=e,this.file=null}emitFiles(e){const t=e&&e.item(0);this.onChange(t),this.file=t}writeValue(e){this.host.nativeElement.value="",this.file=null}registerOnChange(e){this.onChange=e}registerOnTouched(e){}}return e.\u0275fac=function(t){return new(t||e)(h.Ob(h.l))},e.\u0275cmp=h.Ib({type:e,selectors:[["app-file-upload"]],hostBindings:function(e,t){1&e&&h.cc("change",(function(e){return t.emitFiles(e.target.files)}))},inputs:{progress:"progress"},features:[h.Bb([{provide:l.i,useExisting:e,multi:!0}])],decls:7,vars:2,consts:[[1,"file-drop-area"],["mat-stroked-button","","color","primary",1,"file-btn"],[1,"file-msg"],["type","file",1,"file-input"],["class","mt-1 mb-1","color","primary","mode","determinate",3,"value",4,"ngIf"],["color","primary","mode","determinate",1,"mt-1","mb-1",3,"value"]],template:function(e,t){1&e&&(h.Ub(0,"div",0),h.Ub(1,"button",1),h.Dc(2,"Choose file"),h.Tb(),h.Ub(3,"span",2),h.Dc(4),h.Tb(),h.Pb(5,"input",3),h.Tb(),h.Cc(6,I,1,1,"mat-progress-bar",4)),2&e&&(h.Cb(4),h.Ec(t.file?t.file.name:"or drag and drop file here"),h.Cb(2),h.nc("ngIf",t.progress>0))},directives:[_.b,i.l,A.a],styles:[".file-drop-area[_ngcontent-%COMP%]{border:1px dashed #7c7db3;border-radius:4px;position:relative;width:450px;max-width:100%;margin:0 auto;padding:26px 20px 30px;transition:.2s}.file-drop-area.is-active[_ngcontent-%COMP%]{background-color:#3f4069}.file-btn[_ngcontent-%COMP%]{margin-right:8px}.file-msg[_ngcontent-%COMP%]{font-size:small;font-weight:300;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;max-width:calc(100% - 130px);vertical-align:middle}.file-input[_ngcontent-%COMP%]{position:absolute;left:0;top:0;height:100%;width:100%;cursor:pointer;opacity:0}.file-input[_ngcontent-%COMP%]:focus{outline:none}"]}),e})();var O=n("8LU1"),P=n("FKr1"),S=n("R1ws"),q=n("GU7r"),F=n("u47x");const L=["input"],R=function(){return{enterDuration:150}},E=["*"],z=new h.r("mat-checkbox-default-options",{providedIn:"root",factory:function(){return{color:"accent",clickAction:"check-indeterminate"}}}),X=new h.r("mat-checkbox-click-action");let N=0;const V={provide:l.i,useExisting:Object(h.U)(()=>K),multi:!0};class B{}class G{constructor(e){this._elementRef=e}}const W=Object(P.B)(Object(P.w)(Object(P.x)(Object(P.y)(G))));let K=(()=>{class e extends W{constructor(e,t,n,i,a,c,o,r){super(e),this._changeDetectorRef=t,this._focusMonitor=n,this._ngZone=i,this._clickAction=c,this._animationMode=o,this._options=r,this.ariaLabel="",this.ariaLabelledby=null,this._uniqueId=`mat-checkbox-${++N}`,this.id=this._uniqueId,this.labelPosition="after",this.name=null,this.change=new h.o,this.indeterminateChange=new h.o,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||{},this._options.color&&(this.color=this._options.color),this.tabIndex=parseInt(a)||0,this._focusMonitor.monitor(e,!0).subscribe(e=>{e||Promise.resolve().then(()=>{this._onTouched(),t.markForCheck()})}),this._clickAction=this._clickAction||this._options.clickAction}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(e){this._required=Object(O.c)(e)}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}ngAfterViewChecked(){}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){const t=Object(O.c)(e);t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(e){const t=e!=this._indeterminate;this._indeterminate=Object(O.c)(e),t&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(e){let t=this._currentCheckState,n=this._elementRef.nativeElement;if(t!==e&&(this._currentAnimationClass.length>0&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);const e=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(e)},1e3)})}}_emitChangeEvent(){const e=new B;e.source=this,e.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(e)}toggle(){this.checked=!this.checked}_onInputClick(e){e.stopPropagation(),this.disabled||"noop"===this._clickAction?this.disabled||"noop"!==this._clickAction||(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==this._clickAction&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this.toggle(),this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}focus(e="keyboard",t){this._focusMonitor.focusVia(this._inputElement,e,t)}_onInteractionEvent(e){e.stopPropagation()}_getAnimationClassForCheckStateTransition(e,t){if("NoopAnimations"===this._animationMode)return"";let n="";switch(e){case 0:if(1===t)n="unchecked-checked";else{if(3!=t)return"";n="unchecked-indeterminate"}break;case 2:n=1===t?"unchecked-checked":"unchecked-indeterminate";break;case 1:n=2===t?"checked-unchecked":"checked-indeterminate";break;case 3:n=1===t?"indeterminate-checked":"indeterminate-unchecked"}return`mat-checkbox-anim-${n}`}_syncIndeterminate(e){const t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}}return e.\u0275fac=function(t){return new(t||e)(h.Ob(h.l),h.Ob(h.h),h.Ob(F.h),h.Ob(h.A),h.Zb("tabindex"),h.Ob(X,8),h.Ob(S.a,8),h.Ob(z,8))},e.\u0275cmp=h.Ib({type:e,selectors:[["mat-checkbox"]],viewQuery:function(e,t){var n;1&e&&(h.Ic(L,!0),h.Ic(P.r,!0)),2&e&&(h.sc(n=h.dc())&&(t._inputElement=n.first),h.sc(n=h.dc())&&(t.ripple=n.first))},hostAttrs:[1,"mat-checkbox"],hostVars:12,hostBindings:function(e,t){2&e&&(h.Xb("id",t.id),h.Db("tabindex",null),h.Fb("mat-checkbox-indeterminate",t.indeterminate)("mat-checkbox-checked",t.checked)("mat-checkbox-disabled",t.disabled)("mat-checkbox-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],id:"id",labelPosition:"labelPosition",name:"name",required:"required",checked:"checked",disabled:"disabled",indeterminate:"indeterminate",value:"value"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[h.Bb([V]),h.zb],ngContentSelectors:E,decls:17,vars:19,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24",0,"xml","space","preserve",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(e,t){if(1&e&&(h.mc(),h.Ub(0,"label",0,1),h.Ub(2,"div",2),h.Ub(3,"input",3,4),h.cc("change",(function(e){return t._onInteractionEvent(e)}))("click",(function(e){return t._onInputClick(e)})),h.Tb(),h.Ub(5,"div",5),h.Pb(6,"div",6),h.Tb(),h.Pb(7,"div",7),h.Ub(8,"div",8),h.fc(),h.Ub(9,"svg",9),h.Pb(10,"path",10),h.Tb(),h.ec(),h.Pb(11,"div",11),h.Tb(),h.Tb(),h.Ub(12,"span",12,13),h.cc("cdkObserveContent",(function(){return t._onLabelTextChange()})),h.Ub(14,"span",14),h.Dc(15,"\xa0"),h.Tb(),h.lc(16),h.Tb(),h.Tb()),2&e){const e=h.tc(1),n=h.tc(13);h.Db("for",t.inputId),h.Cb(2),h.Fb("mat-checkbox-inner-container-no-side-margin",!n.textContent||!n.textContent.trim()),h.Cb(1),h.nc("id",t.inputId)("required",t.required)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex),h.Db("value",t.value)("name",t.name)("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-checked",t._getAriaChecked()),h.Cb(2),h.nc("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",h.oc(18,R))}},directives:[P.r,q.a],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"],encapsulation:2,changeDetection:0}),e})(),Y=(()=>{class e{}return e.\u0275mod=h.Mb({type:e}),e.\u0275inj=h.Lb({factory:function(t){return new(t||e)}}),e})(),$=(()=>{class e{}return e.\u0275mod=h.Mb({type:e}),e.\u0275inj=h.Lb({factory:function(t){return new(t||e)},imports:[[P.s,P.i,q.c,Y],P.i,Y]}),e})();var H=n("gX+F");function J(e,t){1&e&&h.Dc(0,"Fill out your details")}function Z(e,t){1&e&&(h.Ub(0,"small",54),h.Dc(1,"Name is required."),h.Tb())}function Q(e,t){if(1&e&&(h.Ub(0,"mat-error"),h.Cc(1,Z,2,0,"small",53),h.Tb()),2&e){h.gc();const e=h.tc(19);h.Cb(1),h.nc("ngIf",null==e?null:e.errors.required)}}function ee(e,t){1&e&&(h.Ub(0,"small",54),h.Dc(1,"Email is required."),h.Tb())}function te(e,t){if(1&e&&(h.Ub(0,"mat-error"),h.Cc(1,ee,2,0,"small",53),h.Tb()),2&e){h.gc();const e=h.tc(26);h.Cb(1),h.nc("ngIf",null==e?null:e.errors.required)}}function ne(e,t){1&e&&h.Pb(0,"app-spinner",55),2&e&&h.nc("diameter",15)}function ie(e,t){1&e&&h.Dc(0,"Fill out your project proposal")}function ae(e,t){1&e&&(h.Ub(0,"small",54),h.Dc(1,"Title is required."),h.Tb())}function ce(e,t){if(1&e&&(h.Ub(0,"mat-error"),h.Cc(1,ae,2,0,"small",53),h.Tb()),2&e){h.gc();const e=h.tc(60);h.Cb(1),h.nc("ngIf",null==e?null:e.errors.required)}}function oe(e,t){1&e&&(h.Ub(0,"small",54),h.Dc(1,"Description is required."),h.Tb())}function re(e,t){if(1&e&&(h.Ub(0,"mat-error"),h.Cc(1,oe,2,0,"small",53),h.Tb()),2&e){h.gc();const e=h.tc(67);h.Cb(1),h.nc("ngIf",null==e?null:e.errors.required)}}function se(e,t){if(1&e&&(h.Ub(0,"mat-option",56),h.Dc(1),h.Ub(2,"i"),h.Dc(3),h.Tb(),h.Tb()),2&e){const e=t.$implicit;h.nc("value",e),h.Cb(1),h.Fc(" ",null==e?null:e.name," \xa0 "),h.Cb(2),h.Fc("(",null==e?null:e.description,")")}}function le(e,t){1&e&&(h.Ub(0,"small",54),h.Dc(1,"Category is required."),h.Tb())}function be(e,t){if(1&e&&(h.Ub(0,"mat-error"),h.Cc(1,le,2,0,"small",53),h.Tb()),2&e){h.gc();const e=h.tc(73);h.Cb(1),h.nc("ngIf",null==e?null:e.errors.required)}}function me(e,t){1&e&&(h.Ub(0,"small",54),h.Dc(1,"City is required."),h.Tb())}function de(e,t){if(1&e&&(h.Ub(0,"mat-error"),h.Cc(1,me,2,0,"small",53),h.Tb()),2&e){h.gc();const e=h.tc(108);h.Cb(1),h.nc("ngIf",null==e?null:e.errors.required)}}function he(e,t){1&e&&(h.Ub(0,"small",54),h.Dc(1,"Country is required."),h.Tb())}function ue(e,t){if(1&e&&(h.Ub(0,"mat-error"),h.Cc(1,he,2,0,"small",53),h.Tb()),2&e){h.gc();const e=h.tc(117);h.Cb(1),h.nc("ngIf",null==e?null:e.errors.required)}}function pe(e,t){1&e&&h.Pb(0,"app-spinner",55),2&e&&h.nc("diameter",15)}function ke(e,t){1&e&&h.Dc(0,"Upload files")}function ge(e,t){1&e&&h.Dc(0,"\u{1f921}")}function fe(e,t){1&e&&h.Cc(0,ge,1,0,"ng-template",57)}const xe=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,r){var s;this.spinnerService=e,this.proposalAuthorService=t,this.categoryService=n,this.alertService=i,this.snackBar=a,this.router=r,this.subscription=new o.a,this.proposalAuthorModel=new c.a,this.project=new m.c,this.filterModel=new d.b,this.progress=0,this.proposalAuthorStep=!1,this.projectStep=!1,this.termAndCondition=!1,this.uploadFile=new l.e({file:new l.c(null,[l.q.required,(s=b.a.UPLOAD_ALLOWED_FILE_FORMAT,e=>{const t=e.value;if(t){const e=t.name.split(".")[1].toLowerCase();if(!s.toLowerCase().includes(e.toLowerCase()))return{requiredFileType:!0}}return null})])}),this.filterModel.filters.push(new d.a(b.a.STATUS,b.a.EQ,!0))}ngOnInit(){this.getProjectCategory()}getProjectCategory(){this.spinnerService.show(),this.subscription.add(this.categoryService.getFilteredCategories(this.filterModel).subscribe(e=>{this.categories=e.objects,this.spinnerService.hide()}))}saveProposalAuthor(e){this.spinnerService.show(),this.proposalAuthorStep=!0,this.subscription.add(this.proposalAuthorService.createProposal(this.proposalAuthorModel).subscribe(t=>{this.project.proposal_author=t.id,this.spinnerService.hide(),e.next()},()=>{this.proposalAuthorStep=!1,this.spinnerService.hide()}))}saveProject(e){this.spinnerService.show(),this.projectStep=!0,this.subscription.add(this.proposalAuthorService.createProject(this.project).subscribe(t=>{this.project.id=t.id,this.spinnerService.hide(),e.next()},()=>{this.projectStep=!1,this.spinnerService.hide()}))}fileUpload(){this.uploadFile.valid?(this.spinnerService.show(),this.subscription.add(this.proposalAuthorService.uploadProjectFile(this.project.id,this.uploadFile.value).pipe(Object(s.c)(e=>this.progress=e),Object(s.b)()).subscribe(()=>{this.progress=0,this.spinnerService.hide(),this.successFn()}))):this.successFn()}hasError(e,t){const n=this.uploadFile.get(e),i=n.dirty&&n.hasError(t);return i?this.alertService.error("Only Supported file format are "+b.a.UPLOAD_ALLOWED_FILE_FORMAT):this.alertService.close(),i}successFn(){this.snackBar.open("Successfully submitted"),this.router.navigate([r.a.THANK_YOU]).then()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(h.Ob(u.a),h.Ob(p.a),h.Ob(k.a),h.Ob(g.a),h.Ob(f.b),h.Ob(a.c))},e.\u0275cmp=h.Ib({type:e,selectors:[["app-proposal-author"]],decls:151,vars:42,consts:[[1,"mat-elevation-z1","m-auto","w-90","mt-2","p-2"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mb-1"],[1,"mat-card-subtitle"],["labelPosition","bottom","linear",""],["stepper",""],[3,"completed","editable"],["fxLayout","row","fxLayoutAlign","space-around start"],[1,"mr-1"],["proposalAuthorFrom","ngForm"],["matStepLabel",""],["appearance","outline"],["matInput","","placeholder","name","name","name","required","",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["matInput","","placeholder","email","name","email","required","",3,"ngModel","ngModelChange"],["email","ngModel"],["matInput","","placeholder","phone_number","name","phone_number",3,"ngModel","ngModelChange"],["matInput","","placeholder","organisation_name","name","organisation_name",3,"ngModel","ngModelChange"],["mat-stroked-button","","color","primary",1,"f-right",3,"ngClass","disabled","click"],["class","d-inline-block ml-1",3,"diameter",4,"ngIf"],["fxFlex","20",1,"ml-1"],[1,"text-center","mat-typography"],[1,"mat-typography"],["fxLayout","row column","fxLayoutAlign","space-around start"],["projectFrom","ngForm"],["matInput","","placeholder","Title","name","title","required","",3,"ngModel","ngModelChange"],["title","ngModel"],["matInput","","placeholder","Description","name","description","required","",3,"ngModel","ngModelChange"],["description","ngModel"],["placeholder","Select Category","name","category","multiple","","required","",3,"ngModel","ngModelChange"],["category","ngModel"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"mb-1"],["matInput","","placeholder","Platform","name","platform",3,"ngModel","ngModelChange"],["platform","ngModel"],["fxLayout","row",1,"mb-2"],["appearance","outline",1,"mr-1"],["for","deadline"],["id","deadline","matInput","","name","deadline",3,"matDatepicker","ngModel","focus","click","ngModelChange"],["matSuffix","",3,"for"],["fDate",""],["matInput","","placeholder","Weekdays, business hours","name","availability",3,"ngModel","ngModelChange"],["matInput","","placeholder","City","name","city","required","",3,"ngModel","ngModelChange"],["city","ngModel"],["matInput","","placeholder","Country","name","country","required","",3,"ngModel","ngModelChange"],["country","ngModel"],[3,"optional"],["fxLayout","row column","fxLayoutAlign","space-evenly center"],[3,"formGroup"],["formControlName","file",3,"progress"],[1,"mt-1","mb-1"],["color","primary","name","t&c",3,"ngModel","ngModelChange"],["mat-stroked-button","","color","primary",1,"f-right","mt-1",3,"disabled","click"],["class","mat-text-warn",4,"ngIf"],[1,"mat-text-warn"],[1,"d-inline-block","ml-1",3,"diameter"],[3,"value"],["class","d-none"]],template:function(e,t){if(1&e){const e=h.Vb();h.Ub(0,"mat-card",0),h.Ub(1,"mat-card-header",1),h.Ub(2,"mat-card-title"),h.Dc(3,"Project Proposal"),h.Tb(),h.Ub(4,"h4",2),h.Dc(5,"Thanks for choosing to send us your project idea!"),h.Tb(),h.Tb(),h.Pb(6,"mat-divider"),h.Ub(7,"mat-horizontal-stepper",3,4),h.Ub(9,"mat-step",5),h.Ub(10,"div",6),h.Ub(11,"form",7,8),h.Cc(13,J,1,0,"ng-template",9),h.Ub(14,"mat-form-field",10),h.Ub(15,"mat-label"),h.Dc(16,"Name"),h.Tb(),h.Ub(17,"label"),h.Ub(18,"input",11,12),h.cc("ngModelChange",(function(e){return t.proposalAuthorModel.name=e})),h.Tb(),h.Tb(),h.Cc(20,Q,2,1,"mat-error",13),h.Tb(),h.Ub(21,"mat-form-field",10),h.Ub(22,"mat-label"),h.Dc(23,"Email"),h.Tb(),h.Ub(24,"label"),h.Ub(25,"input",14,15),h.cc("ngModelChange",(function(e){return t.proposalAuthorModel.email=e})),h.Tb(),h.Tb(),h.Cc(27,te,2,1,"mat-error",13),h.Tb(),h.Ub(28,"mat-form-field",10),h.Ub(29,"mat-label"),h.Dc(30,"Phone Number"),h.Tb(),h.Ub(31,"label"),h.Ub(32,"input",16),h.cc("ngModelChange",(function(e){return t.proposalAuthorModel.phone_number=e})),h.Tb(),h.Tb(),h.Tb(),h.Ub(33,"mat-form-field",10),h.Ub(34,"mat-label"),h.Dc(35,"Organisation Name"),h.Tb(),h.Ub(36,"label"),h.Ub(37,"input",17),h.cc("ngModelChange",(function(e){return t.proposalAuthorModel.organisation_name=e})),h.Tb(),h.Tb(),h.Tb(),h.Ub(38,"div"),h.Ub(39,"button",18),h.cc("click",(function(){h.vc(e);const n=h.tc(8);return t.saveProposalAuthor(n)})),h.Dc(40," Next "),h.Cc(41,ne,1,1,"app-spinner",19),h.hc(42,"async"),h.Tb(),h.Tb(),h.Tb(),h.Ub(43,"div",20),h.Ub(44,"h1",21),h.Dc(45,"Using your details"),h.Tb(),h.Ub(46,"h4",22),h.Dc(47,"We will get in touch to let you know whether your project has been approved or not. "),h.Tb(),h.Ub(48,"h4",22),h.Dc(49,"If it is assigned to a team, your contact details will be passed on to the students, who will be responsible for managing the project. "),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Ub(50,"mat-step",5),h.Ub(51,"div",23),h.Ub(52,"form",7,24),h.Cc(54,ie,1,0,"ng-template",9),h.Ub(55,"mat-form-field",10),h.Ub(56,"mat-label"),h.Dc(57,"Title"),h.Tb(),h.Ub(58,"label"),h.Ub(59,"input",25,26),h.cc("ngModelChange",(function(e){return t.project.title=e})),h.Tb(),h.Tb(),h.Cc(61,ce,2,1,"mat-error",13),h.Tb(),h.Ub(62,"mat-form-field",10),h.Ub(63,"mat-label"),h.Dc(64,"Description"),h.Tb(),h.Ub(65,"label"),h.Ub(66,"textarea",27,28),h.cc("ngModelChange",(function(e){return t.project.description=e})),h.Tb(),h.Tb(),h.Cc(68,re,2,1,"mat-error",13),h.Tb(),h.Ub(69,"mat-form-field",10),h.Ub(70,"mat-label"),h.Dc(71,"Category"),h.Tb(),h.Ub(72,"mat-select",29,30),h.cc("ngModelChange",(function(e){return t.project.category=e})),h.Cc(74,se,4,3,"mat-option",31),h.Tb(),h.Cc(75,be,2,1,"mat-error",13),h.Tb(),h.Ub(76,"mat-form-field",32),h.Ub(77,"mat-label"),h.Dc(78,"Target Platform and language"),h.Tb(),h.Ub(79,"label"),h.Ub(80,"input",33,34),h.cc("ngModelChange",(function(e){return t.project.platform=e})),h.Tb(),h.Tb(),h.Ub(82,"mat-hint"),h.Dc(83,"If you have a specific set of technology requirements, please include them here."),h.Tb(),h.Tb(),h.Ub(84,"div",35),h.Ub(85,"mat-form-field",36),h.Ub(86,"mat-label"),h.Dc(87,"Required completion date"),h.Tb(),h.Pb(88,"label",37),h.Ub(89,"input",38),h.cc("focus",(function(){return h.vc(e),h.tc(92).open()}))("click",(function(){return h.vc(e),h.tc(92).open()}))("ngModelChange",(function(e){return t.project.deadline=e})),h.Tb(),h.Pb(90,"mat-datepicker-toggle",39),h.Pb(91,"mat-datepicker",null,40),h.Ub(93,"mat-hint"),h.Dc(94,"If there are concrete limits on when this project needs to be completed, please describe them briefly. "),h.Tb(),h.Tb(),h.Ub(95,"mat-form-field",10),h.Ub(96,"mat-label"),h.Dc(97,"Availability"),h.Tb(),h.Ub(98,"label"),h.Ub(99,"input",41),h.cc("ngModelChange",(function(e){return t.project.availability=e})),h.Tb(),h.Tb(),h.Ub(100,"mat-hint"),h.Dc(101,"Please be aware that most student projects will be completed by the end of the second semester each year, typically around November. "),h.Tb(),h.Tb(),h.Tb(),h.Ub(102,"div",35),h.Ub(103,"mat-form-field",36),h.Ub(104,"mat-label"),h.Dc(105,"City"),h.Tb(),h.Ub(106,"label"),h.Ub(107,"input",42,43),h.cc("ngModelChange",(function(e){return t.project.city=e})),h.Tb(),h.Tb(),h.Cc(109,de,2,1,"mat-error",13),h.Ub(110,"mat-hint"),h.Dc(111," Federation University Australia student projects are run all around Australia, online, and at partner institutions. "),h.Tb(),h.Tb(),h.Ub(112,"mat-form-field",10),h.Ub(113,"mat-label"),h.Dc(114,"Country"),h.Tb(),h.Ub(115,"label"),h.Ub(116,"input",44,45),h.cc("ngModelChange",(function(e){return t.project.country=e})),h.Tb(),h.Tb(),h.Cc(118,ue,2,1,"mat-error",13),h.Ub(119,"mat-hint"),h.Dc(120," Where possible we will assign a local project team, so you get face-to-face contact, however remote teams are often suitable for many projects. "),h.Tb(),h.Tb(),h.Tb(),h.Ub(121,"div"),h.Ub(122,"button",18),h.cc("click",(function(){h.vc(e);const n=h.tc(8);return t.saveProject(n)})),h.Dc(123," Next "),h.Cc(124,pe,1,1,"app-spinner",19),h.hc(125,"async"),h.Tb(),h.Tb(),h.Tb(),h.Ub(126,"div",20),h.Ub(127,"h1",21),h.Dc(128,"Guidelines"),h.Tb(),h.Ub(129,"h4",22),h.Dc(130," Project teams are 4 or 5 students, and will work for almost two full semesters. "),h.Tb(),h.Ub(131,"h4",22),h.Dc(132,"Federation University Australia can only supply basic computer equipment, and a limited set of software to teams. You may need to supply any software or hardware your project requires, including any smartphone or tablet hardware. "),h.Tb(),h.Ub(133,"h4",22),h.Dc(134,"As student projects are occasionally unsuccessful, prefer proposals that are not critical to the ongoing success of your business. "),h.Tb(),h.Ub(135,"h4",22),h.Dc(136,"For IT projects, web applications or products are great, however basic brochure-style websites are unlikely to be approved. "),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Ub(137,"mat-step",46),h.Ub(138,"div",47),h.Ub(139,"div"),h.Ub(140,"form",48),h.Cc(141,ke,1,0,"ng-template",9),h.Pb(142,"app-alert"),h.Pb(143,"app-file-upload",49),h.Cc(144,fe,1,0,void 0,13),h.Tb(),h.Ub(145,"div",50),h.Ub(146,"mat-checkbox",51),h.cc("ngModelChange",(function(e){return t.termAndCondition=e})),h.Dc(147," I agree all the terms and conditions. "),h.Tb(),h.Tb(),h.Ub(148,"div"),h.Ub(149,"button",52),h.cc("click",(function(){return t.fileUpload()})),h.Dc(150," Done "),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Tb()}if(2&e){const e=h.tc(12),n=h.tc(19),i=h.tc(26),a=h.tc(53),c=h.tc(60),o=h.tc(67),r=h.tc(73),s=h.tc(92),l=h.tc(108),b=h.tc(117);h.Cb(9),h.nc("completed",t.proposalAuthorStep)("editable",!1),h.Cb(9),h.nc("ngModel",t.proposalAuthorModel.name),h.Cb(2),h.nc("ngIf",n.touched&&n.invalid),h.Cb(5),h.nc("ngModel",t.proposalAuthorModel.email),h.Cb(2),h.nc("ngIf",i.touched&&i.invalid),h.Cb(5),h.nc("ngModel",t.proposalAuthorModel.phone_number),h.Cb(5),h.nc("ngModel",t.proposalAuthorModel.organisation_name),h.Cb(2),h.nc("ngClass",e.form.invalid?"cursor-not-allowed":"cursor-pointer")("disabled",e.form.invalid),h.Cb(2),h.nc("ngIf",h.ic(42,38,t.spinnerService.visibility)),h.Cb(9),h.nc("completed",t.projectStep)("editable",!1),h.Cb(9),h.nc("ngModel",t.project.title),h.Cb(2),h.nc("ngIf",c.touched&&c.invalid),h.Cb(5),h.nc("ngModel",t.project.description),h.Cb(2),h.nc("ngIf",o.touched&&o.invalid),h.Cb(4),h.nc("ngModel",t.project.category),h.Cb(2),h.nc("ngForOf",t.categories),h.Cb(1),h.nc("ngIf",r.touched&&r.invalid),h.Cb(5),h.nc("ngModel",t.project.platform),h.Cb(9),h.nc("matDatepicker",s)("ngModel",t.project.deadline),h.Cb(1),h.nc("for",s),h.Cb(9),h.nc("ngModel",t.project.availability),h.Cb(8),h.nc("ngModel",t.project.city),h.Cb(2),h.nc("ngIf",l.touched&&l.invalid),h.Cb(7),h.nc("ngModel",t.project.country),h.Cb(2),h.nc("ngIf",b.touched&&b.invalid),h.Cb(4),h.nc("ngClass",a.form.invalid?"cursor-not-allowed":"cursor-pointer")("disabled",a.form.invalid),h.Cb(2),h.nc("ngIf",h.ic(125,40,t.spinnerService.visibility)),h.Cb(13),h.nc("optional",!0),h.Cb(3),h.nc("formGroup",t.uploadFile),h.Cb(3),h.nc("progress",t.progress),h.Cb(1),h.nc("ngIf",t.hasError("file","requiredFileType")),h.Cb(2),h.nc("ngModel",t.termAndCondition),h.Cb(3),h.nc("disabled",!t.termAndCondition)}},directives:[x.a,x.d,C.c,C.b,x.g,y.a,v.a,v.b,l.r,l.l,l.m,v.c,T.c,T.g,U.b,l.b,l.p,l.k,l.n,i.l,_.b,i.j,C.a,w.a,i.k,T.f,M.b,M.d,T.h,M.a,l.f,D.a,j,l.d,K,T.b,H.a,P.n],pipes:[i.b],styles:[""]}),e})()}];var Ce=n("+Y8+"),ye=n("5MR1");let ve=(()=>{class e{}return e.\u0275mod=h.Mb({type:e}),e.\u0275inj=h.Lb({factory:function(t){return new(t||e)},imports:[[i.c,A.b,_.c]]}),e})(),Te=(()=>{class e{}return e.\u0275mod=h.Mb({type:e}),e.\u0275inj=h.Lb({factory:function(t){return new(t||e)},providers:[p.a],imports:[[a.g.forChild(xe),i.c,x.e,v.d,T.e,y.b,C.d,l.o,U.c,_.c,l.g,w.b,Ce.a,ye.a,ve,M.c,P.l,$]]}),e})()}}]);