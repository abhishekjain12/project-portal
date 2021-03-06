function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _createSuper(e){return function(){var t,i=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{A5z7:function(e,t,i){"use strict";i.d(t,"a",(function(){return w})),i.d(t,"b",(function(){return k})),i.d(t,"c",(function(){return F})),i.d(t,"d",(function(){return j}));var n=i("FtGj"),a=i("fXoL"),s=i("FKr1"),r=i("ofXK"),c=i("8LU1"),o=i("XNiG"),h=i("VRyK"),l=i("IzEk"),u=i("1G5W"),p=i("JX91"),d=i("R1ws"),f=i("u47x"),_=i("0EQZ"),b=i("kmnG"),m=i("nLfN"),g=i("cH1L"),v=i("3Pt+"),y=["*"],C=Object(s.B)(Object(s.w)(Object(s.x)(Object(s.y)((function e(t){_classCallCheck(this,e),this._elementRef=t}))),"primary"),-1),k=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=a.Jb({type:e,selectors:[["mat-chip-avatar"],["","matChipAvatar",""]],hostAttrs:[1,"mat-chip-avatar"]}),e}(),x=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=a.Jb({type:e,selectors:[["mat-chip-trailing-icon"],["","matChipTrailingIcon",""]],hostAttrs:[1,"mat-chip-trailing-icon"]}),e}(),w=function(){var e=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,n,r,c,h,l,u,p){var d;return _classCallCheck(this,i),(d=t.call(this,e))._elementRef=e,d._ngZone=n,d._changeDetectorRef=l,d._hasFocus=!1,d.chipListSelectable=!0,d._chipListMultiple=!1,d._selected=!1,d._selectable=!0,d._removable=!0,d._onFocus=new o.a,d._onBlur=new o.a,d.selectionChange=new a.o,d.destroyed=new a.o,d.removed=new a.o,d._addHostClassName(),d._chipRippleTarget=(p||document).createElement("div"),d._chipRippleTarget.classList.add("mat-chip-ripple"),d._elementRef.nativeElement.appendChild(d._chipRippleTarget),d._chipRipple=new s.t(_assertThisInitialized(d),n,d._chipRippleTarget,r),d._chipRipple.setupTriggerEvents(e),d.rippleConfig=c||{},d._animationsDisabled="NoopAnimations"===h,d.tabIndex=null!=u&&parseInt(u)||-1,d}return _createClass(i,[{key:"_addHostClassName",value:function(){var e=this._elementRef.nativeElement;e.hasAttribute("mat-basic-chip")||"mat-basic-chip"===e.tagName.toLowerCase()?e.classList.add("mat-basic-chip"):e.classList.add("mat-standard-chip")}},{key:"ngOnDestroy",value:function(){this.destroyed.emit({chip:this}),this._chipRipple._removeTriggerEvents()}},{key:"select",value:function(){this._selected||(this._selected=!0,this._dispatchSelectionChange(),this._markForCheck())}},{key:"deselect",value:function(){this._selected&&(this._selected=!1,this._dispatchSelectionChange(),this._markForCheck())}},{key:"selectViaInteraction",value:function(){this._selected||(this._selected=!0,this._dispatchSelectionChange(!0),this._markForCheck())}},{key:"toggleSelected",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._selected=!this.selected,this._dispatchSelectionChange(e),this._markForCheck(),this.selected}},{key:"focus",value:function(){this._hasFocus||(this._elementRef.nativeElement.focus(),this._onFocus.next({chip:this})),this._hasFocus=!0}},{key:"remove",value:function(){this.removable&&this.removed.emit({chip:this})}},{key:"_handleClick",value:function(e){this.disabled?e.preventDefault():e.stopPropagation()}},{key:"_handleKeydown",value:function(e){if(!this.disabled)switch(e.keyCode){case n.c:case n.b:this.remove(),e.preventDefault();break;case n.n:this.selectable&&this.toggleSelected(!0),e.preventDefault()}}},{key:"_blur",value:function(){var e=this;this._ngZone.onStable.asObservable().pipe(Object(l.a)(1)).subscribe((function(){e._ngZone.run((function(){e._hasFocus=!1,e._onBlur.next({chip:e})}))}))}},{key:"_dispatchSelectionChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.selectionChange.emit({source:this,isUserInput:e,selected:this._selected})}},{key:"_markForCheck",value:function(){this._changeDetectorRef&&this._changeDetectorRef.markForCheck()}},{key:"rippleDisabled",get:function(){return this.disabled||this.disableRipple||!!this.rippleConfig.disabled}},{key:"selected",get:function(){return this._selected},set:function(e){var t=Object(c.c)(e);t!==this._selected&&(this._selected=t,this._dispatchSelectionChange())}},{key:"value",get:function(){return void 0!==this._value?this._value:this._elementRef.nativeElement.textContent},set:function(e){this._value=e}},{key:"selectable",get:function(){return this._selectable&&this.chipListSelectable},set:function(e){this._selectable=Object(c.c)(e)}},{key:"removable",get:function(){return this._removable},set:function(e){this._removable=Object(c.c)(e)}},{key:"ariaSelected",get:function(){return this.selectable&&(this._chipListMultiple||this.selected)?this.selected.toString():null}}]),i}(C);return e.\u0275fac=function(t){return new(t||e)(a.Ob(a.l),a.Ob(a.A),a.Ob(m.a),a.Ob(s.h,8),a.Ob(d.a,8),a.Ob(a.h),a.Zb("tabindex"),a.Ob(r.d,8))},e.\u0275dir=a.Jb({type:e,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(e,t,i){var n;1&e&&(a.Hb(i,k,!0),a.Hb(i,x,!0),a.Hb(i,I,!0)),2&e&&(a.sc(n=a.dc())&&(t.avatar=n.first),a.sc(n=a.dc())&&(t.trailingIcon=n.first),a.sc(n=a.dc())&&(t.removeIcon=n.first))},hostAttrs:["role","option",1,"mat-chip","mat-focus-indicator"],hostVars:14,hostBindings:function(e,t){1&e&&a.cc("click",(function(e){return t._handleClick(e)}))("keydown",(function(e){return t._handleKeydown(e)}))("focus",(function(){return t.focus()}))("blur",(function(){return t._blur()})),2&e&&(a.Db("tabindex",t.disabled?null:t.tabIndex)("disabled",t.disabled||null)("aria-disabled",t.disabled.toString())("aria-selected",t.ariaSelected),a.Fb("mat-chip-selected",t.selected)("mat-chip-with-avatar",t.avatar)("mat-chip-with-trailing-icon",t.trailingIcon||t.removeIcon)("mat-chip-disabled",t.disabled)("_mat-animation-noopable",t._animationsDisabled))},inputs:{color:"color",disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex",selected:"selected",value:"value",selectable:"selectable",removable:"removable"},outputs:{selectionChange:"selectionChange",destroyed:"destroyed",removed:"removed"},exportAs:["matChip"],features:[a.zb]}),e}(),I=function(){var e=function(){function e(t,i){_classCallCheck(this,e),this._parentChip=t,i&&"BUTTON"===i.nativeElement.nodeName&&i.nativeElement.setAttribute("type","button")}return _createClass(e,[{key:"_handleClick",value:function(e){var t=this._parentChip;t.removable&&!t.disabled&&t.remove(),e.stopPropagation()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Ob(w),a.Ob(a.l))},e.\u0275dir=a.Jb({type:e,selectors:[["","matChipRemove",""]],hostAttrs:[1,"mat-chip-remove","mat-chip-trailing-icon"],hostBindings:function(e,t){1&e&&a.cc("click",(function(e){return t._handleClick(e)}))}}),e}(),S=new a.r("mat-chips-default-options"),O=Object(s.z)((function e(t,i,n,a){_classCallCheck(this,e),this._defaultErrorStateMatcher=t,this._parentForm=i,this._parentFormGroup=n,this.ngControl=a})),A=0,T=function e(t,i){_classCallCheck(this,e),this.source=t,this.value=i},F=function(){var e=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,n,s,r,c,h,l){var u;return _classCallCheck(this,i),(u=t.call(this,h,r,c,l))._elementRef=e,u._changeDetectorRef=n,u._dir=s,u.ngControl=l,u.controlType="mat-chip-list",u._lastDestroyedChipIndex=null,u._destroyed=new o.a,u._uid="mat-chip-list-".concat(A++),u._tabIndex=0,u._userTabIndex=null,u._onTouched=function(){},u._onChange=function(){},u._multiple=!1,u._compareWith=function(e,t){return e===t},u._required=!1,u._disabled=!1,u.ariaOrientation="horizontal",u._selectable=!0,u.change=new a.o,u.valueChange=new a.o,u.ngControl&&(u.ngControl.valueAccessor=_assertThisInitialized(u)),u}return _createClass(i,[{key:"ngAfterContentInit",value:function(){var e=this;this._keyManager=new f.g(this.chips).withWrap().withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr"),this._dir&&this._dir.change.pipe(Object(u.a)(this._destroyed)).subscribe((function(t){return e._keyManager.withHorizontalOrientation(t)})),this._keyManager.tabOut.pipe(Object(u.a)(this._destroyed)).subscribe((function(){e._allowFocusEscape()})),this.chips.changes.pipe(Object(p.a)(null),Object(u.a)(this._destroyed)).subscribe((function(){e.disabled&&Promise.resolve().then((function(){e._syncChipsState()})),e._resetChips(),e._initializeSelection(),e._updateTabIndex(),e._updateFocusForDestroyedChips(),e.stateChanges.next()}))}},{key:"ngOnInit",value:function(){this._selectionModel=new _.c(this.multiple,void 0,!1),this.stateChanges.next()}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState()}},{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete(),this.stateChanges.complete(),this._dropSubscriptions()}},{key:"registerInput",value:function(e){this._chipInput=e}},{key:"setDescribedByIds",value:function(e){this._ariaDescribedby=e.join(" ")}},{key:"writeValue",value:function(e){this.chips&&this._setSelectionByValue(e,!1)}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e,this.stateChanges.next()}},{key:"onContainerClick",value:function(e){this._originatesFromChip(e)||this.focus()}},{key:"focus",value:function(e){this.disabled||this._chipInput&&this._chipInput.focused||(this.chips.length>0?(this._keyManager.setFirstItemActive(),this.stateChanges.next()):(this._focusInput(e),this.stateChanges.next()))}},{key:"_focusInput",value:function(e){this._chipInput&&this._chipInput.focus(e)}},{key:"_keydown",value:function(e){var t=e.target;e.keyCode===n.b&&this._isInputEmpty(t)?(this._keyManager.setLastItemActive(),e.preventDefault()):t&&t.classList.contains("mat-chip")&&(e.keyCode===n.h?(this._keyManager.setFirstItemActive(),e.preventDefault()):e.keyCode===n.e?(this._keyManager.setLastItemActive(),e.preventDefault()):this._keyManager.onKeydown(e),this.stateChanges.next())}},{key:"_updateTabIndex",value:function(){this._tabIndex=this._userTabIndex||(0===this.chips.length?-1:0)}},{key:"_updateFocusForDestroyedChips",value:function(){if(null!=this._lastDestroyedChipIndex)if(this.chips.length){var e=Math.min(this._lastDestroyedChipIndex,this.chips.length-1);this._keyManager.setActiveItem(e)}else this.focus();this._lastDestroyedChipIndex=null}},{key:"_isValidIndex",value:function(e){return e>=0&&e<this.chips.length}},{key:"_isInputEmpty",value:function(e){return!(!e||"input"!==e.nodeName.toLowerCase()||e.value)}},{key:"_setSelectionByValue",value:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this._clearSelection(),this.chips.forEach((function(e){return e.deselect()})),Array.isArray(e))e.forEach((function(e){return t._selectValue(e,i)})),this._sortValues();else{var n=this._selectValue(e,i);n&&i&&this._keyManager.setActiveItem(n)}}},{key:"_selectValue",value:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.chips.find((function(i){return null!=i.value&&t._compareWith(i.value,e)}));return n&&(i?n.selectViaInteraction():n.select(),this._selectionModel.select(n)),n}},{key:"_initializeSelection",value:function(){var e=this;Promise.resolve().then((function(){(e.ngControl||e._value)&&(e._setSelectionByValue(e.ngControl?e.ngControl.value:e._value,!1),e.stateChanges.next())}))}},{key:"_clearSelection",value:function(e){this._selectionModel.clear(),this.chips.forEach((function(t){t!==e&&t.deselect()})),this.stateChanges.next()}},{key:"_sortValues",value:function(){var e=this;this._multiple&&(this._selectionModel.clear(),this.chips.forEach((function(t){t.selected&&e._selectionModel.select(t)})),this.stateChanges.next())}},{key:"_propagateChanges",value:function(e){var t;t=Array.isArray(this.selected)?this.selected.map((function(e){return e.value})):this.selected?this.selected.value:e,this._value=t,this.change.emit(new T(this,t)),this.valueChange.emit(t),this._onChange(t),this._changeDetectorRef.markForCheck()}},{key:"_blur",value:function(){var e=this;this._hasFocusedChip()||this._keyManager.setActiveItem(-1),this.disabled||(this._chipInput?setTimeout((function(){e.focused||e._markAsTouched()})):this._markAsTouched())}},{key:"_markAsTouched",value:function(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}},{key:"_allowFocusEscape",value:function(){var e=this;-1!==this._tabIndex&&(this._tabIndex=-1,setTimeout((function(){e._tabIndex=e._userTabIndex||0,e._changeDetectorRef.markForCheck()})))}},{key:"_resetChips",value:function(){this._dropSubscriptions(),this._listenToChipsFocus(),this._listenToChipsSelection(),this._listenToChipsRemoved()}},{key:"_dropSubscriptions",value:function(){this._chipFocusSubscription&&(this._chipFocusSubscription.unsubscribe(),this._chipFocusSubscription=null),this._chipBlurSubscription&&(this._chipBlurSubscription.unsubscribe(),this._chipBlurSubscription=null),this._chipSelectionSubscription&&(this._chipSelectionSubscription.unsubscribe(),this._chipSelectionSubscription=null),this._chipRemoveSubscription&&(this._chipRemoveSubscription.unsubscribe(),this._chipRemoveSubscription=null)}},{key:"_listenToChipsSelection",value:function(){var e=this;this._chipSelectionSubscription=this.chipSelectionChanges.subscribe((function(t){t.source.selected?e._selectionModel.select(t.source):e._selectionModel.deselect(t.source),e.multiple||e.chips.forEach((function(t){!e._selectionModel.isSelected(t)&&t.selected&&t.deselect()})),t.isUserInput&&e._propagateChanges()}))}},{key:"_listenToChipsFocus",value:function(){var e=this;this._chipFocusSubscription=this.chipFocusChanges.subscribe((function(t){var i=e.chips.toArray().indexOf(t.chip);e._isValidIndex(i)&&e._keyManager.updateActiveItem(i),e.stateChanges.next()})),this._chipBlurSubscription=this.chipBlurChanges.subscribe((function(){e._blur(),e.stateChanges.next()}))}},{key:"_listenToChipsRemoved",value:function(){var e=this;this._chipRemoveSubscription=this.chipRemoveChanges.subscribe((function(t){var i=t.chip,n=e.chips.toArray().indexOf(t.chip);e._isValidIndex(n)&&i._hasFocus&&(e._lastDestroyedChipIndex=n)}))}},{key:"_originatesFromChip",value:function(e){for(var t=e.target;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-chip"))return!0;t=t.parentElement}return!1}},{key:"_hasFocusedChip",value:function(){return this.chips.some((function(e){return e._hasFocus}))}},{key:"_syncChipsState",value:function(){var e=this;this.chips&&this.chips.forEach((function(t){t.disabled=e._disabled,t._chipListMultiple=e.multiple}))}},{key:"selected",get:function(){return this.multiple?this._selectionModel.selected:this._selectionModel.selected[0]}},{key:"role",get:function(){return this.empty?null:"listbox"}},{key:"multiple",get:function(){return this._multiple},set:function(e){this._multiple=Object(c.c)(e),this._syncChipsState()}},{key:"compareWith",get:function(){return this._compareWith},set:function(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}},{key:"value",get:function(){return this._value},set:function(e){this.writeValue(e),this._value=e}},{key:"id",get:function(){return this._chipInput?this._chipInput.id:this._uid}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(c.c)(e),this.stateChanges.next()}},{key:"placeholder",get:function(){return this._chipInput?this._chipInput.placeholder:this._placeholder},set:function(e){this._placeholder=e,this.stateChanges.next()}},{key:"focused",get:function(){return this._chipInput&&this._chipInput.focused||this._hasFocusedChip()}},{key:"empty",get:function(){return(!this._chipInput||this._chipInput.empty)&&0===this.chips.length}},{key:"shouldLabelFloat",get:function(){return!this.empty||this.focused}},{key:"disabled",get:function(){return this.ngControl?!!this.ngControl.disabled:this._disabled},set:function(e){this._disabled=Object(c.c)(e),this._syncChipsState()}},{key:"selectable",get:function(){return this._selectable},set:function(e){var t=this;this._selectable=Object(c.c)(e),this.chips&&this.chips.forEach((function(e){return e.chipListSelectable=t._selectable}))}},{key:"tabIndex",set:function(e){this._userTabIndex=e,this._tabIndex=e}},{key:"chipSelectionChanges",get:function(){return Object(h.a).apply(void 0,_toConsumableArray(this.chips.map((function(e){return e.selectionChange}))))}},{key:"chipFocusChanges",get:function(){return Object(h.a).apply(void 0,_toConsumableArray(this.chips.map((function(e){return e._onFocus}))))}},{key:"chipBlurChanges",get:function(){return Object(h.a).apply(void 0,_toConsumableArray(this.chips.map((function(e){return e._onBlur}))))}},{key:"chipRemoveChanges",get:function(){return Object(h.a).apply(void 0,_toConsumableArray(this.chips.map((function(e){return e.destroyed}))))}}]),i}(O);return e.\u0275fac=function(t){return new(t||e)(a.Ob(a.l),a.Ob(a.h),a.Ob(g.b,8),a.Ob(v.m,8),a.Ob(v.f,8),a.Ob(s.d),a.Ob(v.j,10))},e.\u0275cmp=a.Ib({type:e,selectors:[["mat-chip-list"]],contentQueries:function(e,t,i){var n;1&e&&a.Hb(i,w,!0),2&e&&a.sc(n=a.dc())&&(t.chips=n)},hostAttrs:[1,"mat-chip-list"],hostVars:15,hostBindings:function(e,t){1&e&&a.cc("focus",(function(){return t.focus()}))("blur",(function(){return t._blur()}))("keydown",(function(e){return t._keydown(e)})),2&e&&(a.Xb("id",t._uid),a.Db("tabindex",t.disabled?null:t._tabIndex)("aria-describedby",t._ariaDescribedby||null)("aria-required",t.role?t.required:null)("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-multiselectable",t.multiple)("role",t.role)("aria-orientation",t.ariaOrientation),a.Fb("mat-chip-list-disabled",t.disabled)("mat-chip-list-invalid",t.errorState)("mat-chip-list-required",t.required))},inputs:{ariaOrientation:["aria-orientation","ariaOrientation"],multiple:"multiple",compareWith:"compareWith",value:"value",required:"required",placeholder:"placeholder",disabled:"disabled",selectable:"selectable",tabIndex:"tabIndex",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},exportAs:["matChipList"],features:[a.Bb([{provide:b.d,useExisting:e}]),a.zb],ngContentSelectors:y,decls:2,vars:0,consts:[[1,"mat-chip-list-wrapper"]],template:function(e,t){1&e&&(a.mc(),a.Ub(0,"div",0),a.lc(1),a.Tb())},styles:['.mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:"";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n'],encapsulation:2,changeDetection:0}),e}(),R={separatorKeyCodes:[n.f]},j=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},providers:[s.d,{provide:S,useValue:R}]}),e}()}}]);