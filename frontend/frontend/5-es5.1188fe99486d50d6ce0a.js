function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _createSuper(e){return function(){var t,i=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1jcm":function(e,t,i){"use strict";i.d(t,"a",(function(){return v})),i.d(t,"b",(function(){return x}));var n=i("GU7r"),a=i("fXoL"),o=i("FKr1"),l=i("8LU1"),r=i("3Pt+"),s=i("R1ws"),c=i("u47x"),d=i("cH1L"),g=["thumbContainer"],u=["toggleBar"],p=["input"],h=function(){return{enterDuration:150}},b=["*"],m=new a.r("mat-slide-toggle-default-options",{providedIn:"root",factory:function(){return{disableToggleValue:!1}}}),f=0,_={provide:r.i,useExisting:Object(a.U)((function(){return v})),multi:!0},y=function e(t,i){_classCallCheck(this,e),this.source=t,this.checked=i},k=Object(o.B)(Object(o.w)(Object(o.x)(Object(o.y)((function e(t){_classCallCheck(this,e),this._elementRef=t}))),"accent")),v=function(){var e=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,n,o,l,r,s,c,d){var g;return _classCallCheck(this,i),(g=t.call(this,e))._focusMonitor=n,g._changeDetectorRef=o,g.defaults=s,g._animationMode=c,g._onChange=function(e){},g._onTouched=function(){},g._uniqueId="mat-slide-toggle-".concat(++f),g._required=!1,g._checked=!1,g.name=null,g.id=g._uniqueId,g.labelPosition="after",g.ariaLabel=null,g.ariaLabelledby=null,g.change=new a.o,g.toggleChange=new a.o,g.dragChange=new a.o,g.tabIndex=parseInt(l)||0,g}return _createClass(i,[{key:"ngAfterContentInit",value:function(){var e=this;this._focusMonitor.monitor(this._elementRef,!0).subscribe((function(t){"keyboard"===t||"program"===t?e._inputElement.nativeElement.focus():t||Promise.resolve().then((function(){return e._onTouched()}))}))}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"_onChangeEvent",value:function(e){e.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}},{key:"_onInputClick",value:function(e){e.stopPropagation()}},{key:"writeValue",value:function(e){this.checked=!!e}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e,this._changeDetectorRef.markForCheck()}},{key:"focus",value:function(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}},{key:"toggle",value:function(){this.checked=!this.checked,this._onChange(this.checked)}},{key:"_emitChangeEvent",value:function(){this._onChange(this.checked),this.change.emit(new y(this,this.checked))}},{key:"_onLabelTextChange",value:function(){this._changeDetectorRef.detectChanges()}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(l.c)(e)}},{key:"checked",get:function(){return this._checked},set:function(e){this._checked=Object(l.c)(e),this._changeDetectorRef.markForCheck()}},{key:"inputId",get:function(){return"".concat(this.id||this._uniqueId,"-input")}}]),i}(k);return e.\u0275fac=function(t){return new(t||e)(a.Ob(a.l),a.Ob(c.h),a.Ob(a.h),a.Zb("tabindex"),a.Ob(a.A),a.Ob(m),a.Ob(s.a,8),a.Ob(d.b,8))},e.\u0275cmp=a.Ib({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(e,t){var i;1&e&&(a.Ic(g,!0),a.Ic(u,!0),a.Ic(p,!0)),2&e&&(a.sc(i=a.dc())&&(t._thumbEl=i.first),a.sc(i=a.dc())&&(t._thumbBarEl=i.first),a.sc(i=a.dc())&&(t._inputElement=i.first))},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(e,t){2&e&&(a.Xb("id",t.id),a.Db("tabindex",t.disabled?null:-1)("aria-label",null)("aria-labelledby",null),a.Fb("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange",dragChange:"dragChange"},exportAs:["matSlideToggle"],features:[a.Bb([_]),a.zb],ngContentSelectors:b,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(e,t){if(1&e&&(a.mc(),a.Ub(0,"label",0,1),a.Ub(2,"div",2,3),a.Ub(4,"input",4,5),a.cc("change",(function(e){return t._onChangeEvent(e)}))("click",(function(e){return t._onInputClick(e)})),a.Tb(),a.Ub(6,"div",6,7),a.Pb(8,"div",8),a.Ub(9,"div",9),a.Pb(10,"div",10),a.Tb(),a.Tb(),a.Tb(),a.Ub(11,"span",11,12),a.cc("cdkObserveContent",(function(){return t._onLabelTextChange()})),a.Ub(13,"span",13),a.Dc(14,"\xa0"),a.Tb(),a.lc(15),a.Tb(),a.Tb()),2&e){var i=a.tc(1),n=a.tc(12);a.Db("for",t.inputId),a.Cb(2),a.Fb("mat-slide-toggle-bar-no-side-margin",!n.textContent||!n.textContent.trim()),a.Cb(2),a.nc("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),a.Db("name",t.name)("aria-checked",t.checked.toString())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),a.Cb(5),a.nc("matRippleTrigger",i)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",a.oc(17,h))}},directives:[o.r,n.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),e}(),C=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)}}),e}(),x=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[C,o.s,o.i,n.c],C,o.i]}),e}()}}]);