(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{PpXk:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i})),a("yztm");class n{constructor(){this.projects=new Array}}const i=["id","name","email","phone_number","organisation_name","updated_at","action"]},aboi:function(t,e,a){"use strict";a.r(e),a.d(e,"ProposalAuthorModule",(function(){return ut}));var n=a("ofXK"),i=a("Wp6s"),o=a("XiUz"),c=a("f0Cb"),b=a("kmnG"),r=a("+Y8+"),s=a("qFsG"),l=a("+0xr"),u=a("Dh3D"),d=a("bTqV"),m=a("Qu3c"),p=a("NFeN"),h=a("M9IT"),f=a("tyNb"),g=a("quSY"),T=a("OFCM"),U=a("PpXk"),C=a("0IaG"),D=a("fXoL"),v=a("MutI"),S=a("FKr1");let y=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}closeModal(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(D.Ob(C.f),D.Ob(C.a))},t.\u0275cmp=D.Ib({type:t,selectors:[["app-view-author-modal"]],decls:65,vars:14,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-list-icon",""],["mat-line",""],["mat-dialog-actions","","fxLayoutAlign","end"],["mat-flat-button","",3,"click"]],template:function(t,e){1&t&&(D.Ub(0,"h1",0),D.Dc(1),D.Tb(),D.Ub(2,"div",1),D.Ub(3,"mat-nav-list"),D.Ub(4,"mat-list-item"),D.Ub(5,"mat-icon",2),D.Dc(6,"person"),D.Tb(),D.Ub(7,"span",3),D.Ub(8,"b"),D.Dc(9,"Name"),D.Tb(),D.Tb(),D.Ub(10,"span",3),D.Dc(11),D.Tb(),D.Tb(),D.Ub(12,"mat-list-item"),D.Ub(13,"mat-icon",2),D.Dc(14,"email"),D.Tb(),D.Ub(15,"span",3),D.Ub(16,"b"),D.Dc(17,"Email"),D.Tb(),D.Tb(),D.Ub(18,"span",3),D.Dc(19),D.Tb(),D.Tb(),D.Ub(20,"mat-list-item"),D.Ub(21,"mat-icon",2),D.Dc(22,"business"),D.Tb(),D.Ub(23,"span",3),D.Ub(24,"b"),D.Dc(25,"Organisation Name"),D.Tb(),D.Tb(),D.Ub(26,"span",3),D.Dc(27),D.Tb(),D.Tb(),D.Ub(28,"mat-list-item"),D.Ub(29,"mat-icon",2),D.Dc(30,"call"),D.Tb(),D.Ub(31,"span",3),D.Ub(32,"b"),D.Dc(33,"Phone Number"),D.Tb(),D.Tb(),D.Ub(34,"span",3),D.Dc(35),D.Tb(),D.Tb(),D.Ub(36,"mat-list-item"),D.Ub(37,"mat-icon",2),D.Dc(38,"event"),D.Tb(),D.Ub(39,"span",3),D.Ub(40,"b"),D.Dc(41,"Created At"),D.Tb(),D.Tb(),D.Ub(42,"span",3),D.Dc(43),D.hc(44,"date"),D.Tb(),D.Tb(),D.Ub(45,"mat-list-item"),D.Ub(46,"mat-icon",2),D.Dc(47,"event"),D.Tb(),D.Ub(48,"span",3),D.Ub(49,"b"),D.Dc(50,"Last Updated At"),D.Tb(),D.Tb(),D.Ub(51,"span",3),D.Dc(52),D.hc(53,"date"),D.Tb(),D.Tb(),D.Ub(54,"mat-list-item"),D.Ub(55,"mat-icon",2),D.Dc(56,"how_to_reg"),D.Tb(),D.Ub(57,"span",3),D.Ub(58,"b"),D.Dc(59,"Last Updated by"),D.Tb(),D.Tb(),D.Ub(60,"span",3),D.Dc(61),D.Tb(),D.Tb(),D.Tb(),D.Tb(),D.Ub(62,"div",4),D.Ub(63,"button",5),D.cc("click",(function(){return e.closeModal()})),D.Dc(64,"Cancel"),D.Tb(),D.Tb()),2&t&&(D.Cb(1),D.Fc("Details of ",e.data.name,""),D.Cb(10),D.Ec(e.data.name||"Not available"),D.Cb(8),D.Ec(e.data.email||"Not available"),D.Cb(8),D.Ec(e.data.organisation_name||"Not available"),D.Cb(8),D.Ec(e.data.phone_number||"Not available"),D.Cb(8),D.Ec(D.jc(44,8,e.data.created_at,"long")||"Not available"),D.Cb(9),D.Ec(D.jc(53,11,e.data.updated_at,"long")||"Not available"),D.Cb(9),D.Ec(e.data.last_updated_by||"Not available"))},directives:[C.g,C.d,v.e,v.c,p.a,v.b,S.j,C.c,o.b,d.b],pipes:[n.e],styles:[""]}),t})();var w=a("IV9s"),A=a("h/T5"),M=a("2+UW"),I=a("aSTP"),R=a("3Pt+");function O(t,e){1&t&&(D.Ub(0,"small",15),D.Dc(1,"Name is required."),D.Tb())}function P(t,e){if(1&t&&(D.Ub(0,"mat-error"),D.Cc(1,O,2,0,"small",14),D.Tb()),2&t){D.gc();const t=D.tc(9);D.Cb(1),D.nc("ngIf",null==t?null:t.errors.required)}}function _(t,e){1&t&&(D.Ub(0,"small",15),D.Dc(1,"Email is required."),D.Tb())}function F(t,e){if(1&t&&(D.Ub(0,"mat-error"),D.Cc(1,_,2,0,"small",14),D.Tb()),2&t){D.gc();const t=D.tc(14);D.Cb(1),D.nc("ngIf",null==t?null:t.errors.required)}}let k=(()=>{class t{constructor(t,e,a,n,i){this.dialogRef=t,this.data=e,this.proposalAuthorService=a,this.alertService=n,this.storageService=i,this.subscription=new g.a,this.proposalAuthor=new U.a,this.isDisableBtn=!1}ngOnInit(){this.proposalAuthor=this.data}saveAuthor(){this.isDisableBtn=!0,this.proposalAuthor.last_updated_by=this.storageService.getUserName(),this.subscription.add(this.proposalAuthorService.updateProposal(this.proposalAuthor).subscribe(()=>{this.closeModal(!0),this.isDisableBtn=!1},t=>{this.alertService.error(t.error.message),this.isDisableBtn=!1}))}closeModal(t=!1){this.dialogRef.close(t)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(D.Ob(C.f),D.Ob(C.a),D.Ob(w.a),D.Ob(A.a),D.Ob(M.a))},t.\u0275cmp=D.Ib({type:t,selectors:[["app-save-author-modal"]],decls:29,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["authorForm","ngForm"],["type","text","matInput","","placeholder","Name","name","name","required","",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["type","email","matInput","","placeholder","Email","name","email","required","",3,"ngModel","ngModelChange"],["email","ngModel"],["type","text","matInput","","placeholder","Organisation Name","name","organisation",3,"ngModel","ngModelChange"],["organisation_name","ngModel"],["type","tel","matInput","","placeholder","Phone Number","name","phone_number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","fxLayoutAlign","end"],["mat-flat-button","",3,"click"],["color","primary","mat-raised-button","",3,"ngClass","disabled","click"],["class","mat-text-warn",4,"ngIf"],[1,"mat-text-warn"]],template:function(t,e){if(1&t&&(D.Ub(0,"h1",0),D.Dc(1,"Edit Author"),D.Tb(),D.Ub(2,"div",1),D.Pb(3,"app-alert"),D.Ub(4,"form",null,2),D.Ub(6,"mat-form-field"),D.Ub(7,"label"),D.Ub(8,"input",3,4),D.cc("ngModelChange",(function(t){return e.proposalAuthor.name=t})),D.Tb(),D.Tb(),D.Cc(10,P,2,1,"mat-error",5),D.Tb(),D.Ub(11,"mat-form-field"),D.Ub(12,"label"),D.Ub(13,"input",6,7),D.cc("ngModelChange",(function(t){return e.proposalAuthor.email=t})),D.Tb(),D.Tb(),D.Cc(15,F,2,1,"mat-error",5),D.Tb(),D.Ub(16,"mat-form-field"),D.Ub(17,"label"),D.Ub(18,"input",8,9),D.cc("ngModelChange",(function(t){return e.proposalAuthor.organisation_name=t})),D.Tb(),D.Tb(),D.Tb(),D.Ub(20,"mat-form-field"),D.Ub(21,"label"),D.Ub(22,"input",10,9),D.cc("ngModelChange",(function(t){return e.proposalAuthor.phone_number=t})),D.Tb(),D.Tb(),D.Tb(),D.Tb(),D.Tb(),D.Ub(24,"div",11),D.Ub(25,"button",12),D.cc("click",(function(){return e.closeModal()})),D.Dc(26,"Cancel"),D.Tb(),D.Ub(27,"button",13),D.cc("click",(function(){return e.saveAuthor()})),D.Dc(28," Submit "),D.Tb(),D.Tb()),2&t){const t=D.tc(5),a=D.tc(9),n=D.tc(14);D.Cb(8),D.nc("ngModel",e.proposalAuthor.name),D.Cb(2),D.nc("ngIf",a.touched&&a.invalid),D.Cb(3),D.nc("ngModel",e.proposalAuthor.email),D.Cb(2),D.nc("ngIf",n.touched&&n.invalid),D.Cb(3),D.nc("ngModel",e.proposalAuthor.organisation_name),D.Cb(4),D.nc("ngModel",e.proposalAuthor.phone_number),D.Cb(5),D.nc("ngClass",t.form.invalid?"cursor-not-allowed":"cursor-pointer")("disabled",t.form.invalid||e.isDisableBtn)}},directives:[C.g,C.d,I.a,R.r,R.l,R.m,b.c,s.b,R.b,R.p,R.k,R.n,n.l,C.c,o.b,d.b,n.j,b.b],styles:[""]}),t})();var L=a("aR35"),N=a("TnV5"),E=a("/NcY"),q=a("g0ew"),j=a("gaWP"),x=a("gX+F"),V=a("STbY");function $(t,e){if(1&t){const t=D.Vb();D.Ub(0,"button",17),D.cc("click",(function(){return D.vc(t),D.gc().clearFilter()})),D.Dc(1,"Clear filter "),D.Ub(2,"mat-icon"),D.Dc(3,"close"),D.Tb(),D.Tb()}}function H(t,e){1&t&&(D.Ub(0,"div",18),D.Pb(1,"app-spinner"),D.Tb())}function z(t,e){1&t&&(D.Ub(0,"th",19),D.Dc(1," ID "),D.Tb())}function J(t,e){if(1&t&&(D.Ub(0,"td",20),D.Dc(1),D.Tb()),2&t){const t=e.$implicit;D.Cb(1),D.Fc(" ",t.id," ")}}function X(t,e){1&t&&(D.Ub(0,"th",19),D.Dc(1," Name "),D.Tb())}function B(t,e){if(1&t&&(D.Ub(0,"td",20),D.Dc(1),D.Tb()),2&t){const t=e.$implicit;D.Cb(1),D.Fc(" ",t.name," ")}}function G(t,e){1&t&&(D.Ub(0,"th",19),D.Dc(1," Email "),D.Tb())}function W(t,e){if(1&t&&(D.Ub(0,"td",20),D.Dc(1),D.Tb()),2&t){const t=e.$implicit;D.Cb(1),D.Fc(" ",t.email," ")}}function Y(t,e){1&t&&(D.Ub(0,"th",19),D.Dc(1," Phone Number "),D.Tb())}function Q(t,e){if(1&t&&(D.Ub(0,"td",20),D.Dc(1),D.Tb()),2&t){const t=e.$implicit;D.Cb(1),D.Fc(" ",t.phone_number," ")}}function K(t,e){1&t&&(D.Ub(0,"th",19),D.Dc(1," Organisation "),D.Tb())}function Z(t,e){if(1&t&&(D.Ub(0,"td",20),D.Dc(1),D.Tb()),2&t){const t=e.$implicit;D.Cb(1),D.Fc(" ",t.organisation_name," ")}}function tt(t,e){1&t&&(D.Ub(0,"th",19),D.Dc(1," Updated At "),D.Tb())}function et(t,e){if(1&t&&(D.Ub(0,"td",20),D.Dc(1),D.hc(2,"date"),D.Tb()),2&t){const t=e.$implicit;D.Cb(1),D.Fc(" ",D.ic(2,1,t.updated_at)," ")}}function at(t,e){1&t&&(D.Ub(0,"th",19),D.Dc(1," Action "),D.Tb())}function nt(t,e){if(1&t){const t=D.Vb();D.Ub(0,"button",23),D.cc("click",(function(){D.vc(t);const e=D.gc().$implicit;return D.gc().openAuthorModal(e)})),D.Ub(1,"mat-icon"),D.Dc(2,"edit"),D.Tb(),D.Ub(3,"span"),D.Dc(4,"Edit details"),D.Tb(),D.Tb()}}const it=function(t){return[t]};function ot(t,e){if(1&t){const t=D.Vb();D.Ub(0,"td",20),D.Ub(1,"button",21),D.Ub(2,"mat-icon"),D.Dc(3,"more_vert"),D.Tb(),D.Tb(),D.Ub(4,"mat-menu",null,22),D.Ub(6,"button",23),D.cc("click",(function(){D.vc(t);const a=e.$implicit;return D.gc().openViewAuthorModal(a)})),D.Ub(7,"mat-icon"),D.Dc(8,"visibility"),D.Tb(),D.Ub(9,"span"),D.Dc(10,"View details"),D.Tb(),D.Tb(),D.Cc(11,nt,5,0,"button",24),D.Ub(12,"a",25),D.Ub(13,"mat-icon"),D.Dc(14,"assignment"),D.Tb(),D.Ub(15,"span"),D.Dc(16,"View Projects"),D.Tb(),D.Tb(),D.Tb(),D.Tb()}if(2&t){const t=e.$implicit,a=D.tc(5),n=D.gc();D.Cb(1),D.nc("matMenuTriggerFor",a),D.Cb(10),D.nc("ngIf",n.loggedInRoles.isAdmin||n.loggedInRoles.isSecondLevel||n.loggedInRoles.isThirdLevel),D.Cb(1),D.nc("routerLink",D.pc(4,it,n.PROJECT_URL))("queryParams",n.getProjectURLForEmail(t.email))}}function ct(t,e){1&t&&D.Pb(0,"tr",26)}function bt(t,e){1&t&&D.Pb(0,"tr",27)}function rt(t,e){1&t&&(D.Ub(0,"div"),D.Ub(1,"h3",28),D.Dc(2,"No data found."),D.Tb(),D.Tb())}const st=[{path:"",component:(()=>{class t{constructor(t,e,a,n,i,o){this.proposalAuthorService=t,this.spinnerService=e,this.dialog=a,this.activatedRoute=n,this.router=i,this.sharedService=o,this.subscription=new g.a,this.filterModel=new N.b,this.loggedInRoles=new E.a,this.displayedColumns=U.b,this.pageSize=T.a.PAGE_SIZE_LIST,this.PROJECT_URL=L.a.PROJECT,this.isFiltered=!1,this.filterModel.order_by.push(new N.d)}ngOnInit(){this.sharedService.refreshGetRoles(),this.subscription.add(this.sharedService.getLoggedInRoles.subscribe(t=>{this.loggedInRoles=t})),this.activatedRoute.snapshot.queryParamMap.get("q")&&(this.isFiltered=!0,this.filterModel.filters.push(JSON.parse(this.activatedRoute.snapshot.queryParamMap.get("q")))),this.getFilteredAuthors()}applyFilter(t){this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}clearFilter(){this.isFiltered=!1,this.filterModel=new N.b,this.filterModel.order_by.push(new N.d),this.getFilteredAuthors(),this.router.navigate([L.a.PROPOSAL_AUTHOR]).then()}getFilteredAuthors(){this.spinnerService.show(),this.subscription.add(this.proposalAuthorService.getFilteredProposalAuthor(this.filterModel).subscribe(t=>{this.dataSource=new l.k(t.objects),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.spinnerService.hide()}))}openViewAuthorModal(t){this.dialog.open(y,{width:T.a.MODAL_WIDTH,data:t})}openAuthorModal(t=null){this.dialog.open(k,{width:T.a.MODAL_WIDTH,data:t}).afterClosed().subscribe(t=>{t&&this.getFilteredAuthors()})}getProjectURLForEmail(t){return{q:JSON.stringify(new N.a(T.a.PROPOSAL_AUTHORS,T.a.HAS,new N.a(T.a.EMAIL,T.a.EQ,t)))}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(D.Ob(w.a),D.Ob(q.a),D.Ob(C.b),D.Ob(f.a),D.Ob(f.c),D.Ob(j.a))},t.\u0275cmp=D.Ib({type:t,selectors:[["app-proposal-author"]],viewQuery:function(t,e){var a;1&t&&(D.Ic(h.a,!0),D.Ic(u.a,!0)),2&t&&(D.sc(a=D.dc())&&(e.paginator=a.first),D.sc(a=D.dc())&&(e.sort=a.first))},decls:38,vars:17,consts:[[1,"mat-elevation-z1","m-auto","w-90","mt-2","p-2"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mb-1"],[1,"m-auto"],["mat-flat-button","",3,"click",4,"ngIf"],[1,"mt-1"],["matInput","","placeholder","Filter",3,"keyup"],[1,"pos-relative","overflow-auto"],["class","table-spinner",4,"ngIf"],["mat-table","","matSort","","matSortDirection","desc",1,"mt-1","overflow-auto",3,"dataSource","matSortActive"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["stickyEnd","",3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],[3,"pageSizeOptions"],["mat-flat-button","",3,"click"],[1,"table-spinner"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","","aria-label","action menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-menu-item","",3,"routerLink","queryParams"],["mat-header-row",""],["mat-row",""],[1,"mat-card-subtitle","text-center","mt-1"]],template:function(t,e){1&t&&(D.Ub(0,"mat-card",0),D.Ub(1,"mat-card-header",1),D.Ub(2,"mat-card-title",2),D.Dc(3,"Project Authors"),D.Tb(),D.Cc(4,$,4,0,"button",3),D.Tb(),D.Pb(5,"mat-divider"),D.Ub(6,"mat-form-field",4),D.Ub(7,"label"),D.Ub(8,"input",5),D.cc("keyup",(function(t){return e.applyFilter(t.target.value)})),D.Tb(),D.Tb(),D.Tb(),D.Ub(9,"div",6),D.Cc(10,H,2,0,"div",7),D.hc(11,"async"),D.Ub(12,"table",8),D.Sb(13,9),D.Cc(14,z,2,0,"th",10),D.Cc(15,J,2,1,"td",11),D.Rb(),D.Sb(16,9),D.Cc(17,X,2,0,"th",10),D.Cc(18,B,2,1,"td",11),D.Rb(),D.Sb(19,9),D.Cc(20,G,2,0,"th",10),D.Cc(21,W,2,1,"td",11),D.Rb(),D.Sb(22,9),D.Cc(23,Y,2,0,"th",10),D.Cc(24,Q,2,1,"td",11),D.Rb(),D.Sb(25,9),D.Cc(26,K,2,0,"th",10),D.Cc(27,Z,2,1,"td",11),D.Rb(),D.Sb(28,9),D.Cc(29,tt,2,0,"th",10),D.Cc(30,et,3,3,"td",11),D.Rb(),D.Sb(31,12),D.Cc(32,at,2,0,"th",10),D.Cc(33,ot,17,6,"td",11),D.Rb(),D.Cc(34,ct,1,0,"tr",13),D.Cc(35,bt,1,0,"tr",14),D.Tb(),D.Cc(36,rt,3,0,"div",15),D.Pb(37,"mat-paginator",16),D.Tb(),D.Tb()),2&t&&(D.Cb(4),D.nc("ngIf",e.isFiltered),D.Cb(6),D.nc("ngIf",D.ic(11,15,e.spinnerService.visibility)),D.Cb(2),D.nc("dataSource",e.dataSource)("matSortActive",e.displayedColumns[5]),D.Cb(1),D.nc("matColumnDef",e.displayedColumns[0]),D.Cb(3),D.nc("matColumnDef",e.displayedColumns[1]),D.Cb(3),D.nc("matColumnDef",e.displayedColumns[2]),D.Cb(3),D.nc("matColumnDef",e.displayedColumns[3]),D.Cb(3),D.nc("matColumnDef",e.displayedColumns[4]),D.Cb(3),D.nc("matColumnDef",e.displayedColumns[5]),D.Cb(3),D.nc("matColumnDef",e.displayedColumns[6]),D.Cb(3),D.nc("matHeaderRowDef",e.displayedColumns),D.Cb(1),D.nc("matRowDefColumns",e.displayedColumns),D.Cb(1),D.nc("ngIf",0===(null==e.dataSource?null:e.dataSource.data.length)),D.Cb(1),D.nc("pageSizeOptions",e.pageSize))},directives:[i.a,i.d,o.c,o.b,i.g,n.l,c.a,b.c,s.b,l.j,u.a,l.c,l.e,l.b,l.g,l.i,h.a,d.b,p.a,x.a,l.d,u.b,l.a,V.c,V.d,V.a,f.f,l.f,l.h],pipes:[n.b,n.e],styles:[""]}),t})()}];var lt=a("5MR1");let ut=(()=>{class t{}return t.\u0275mod=D.Mb({type:t}),t.\u0275inj=D.Lb({factory:function(e){return new(e||t)},imports:[[f.g.forChild(st),n.c,i.e,o.d,c.b,b.e,r.a,s.c,l.l,u.c,d.c,m.b,p.b,h.b,C.e,v.d,lt.a,R.g,V.b]]}),t})()}}]);