(this["webpackJsonpreact-printers"]=this["webpackJsonpreact-printers"]||[]).push([[0],{60:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(10),r=n.n(o),c=(n(60),n(38)),s=n(51),l=n.n(s),d=n(18),u=n(24),b=n(55),h=n(5),p={root:{position:"relative",padding:"0 20px",display:"flex",width:"100%",height:"100%",alignItems:"center"},img:{minWidth:32},input:{position:"absolute",height:28,width:"calc(100% - 82px)",top:10,right:20,bottom:0,border:"none",borderBottom:"1px solid #eee",outline:"none",fontSize:16,padding:0,fontFamily:"inherit"},text:{marginLeft:10,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},f=function(e){e.tableManager;var t=e.value,n=e.onChange,i=e.isEdit,o=e.data,r=e.column,c=(e.rowIndex,e.searchText,e.isFirstEditableCell);return Object(h.jsx)("div",{style:p.root,children:i?Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("img",{style:p.img,src:o.avatar,alt:"avatar"}),Object(h.jsx)("input",{autoFocus:c,style:p.input,type:"text",value:t,onChange:function(e){return n(Object(d.a)(Object(d.a)({},o),{},Object(u.a)({},r.field,e.target.value)))}})]}):Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("h3",{children:Object(h.jsx)(b.a,{})}),Object(h.jsx)("span",{style:p.text,children:t})]})})},x=n(52),j=n(20),g=n.n(j),m=n(93),O=n(92),v={select:{margin:"0 20px"},buttonsCellContainer:{padding:"0 20px",width:"100%",height:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center"},editButton:{background:"#f3f3f3",outline:"none",cursor:"pointer",padding:4,display:"inline-flex",border:"none",borderRadius:"50%",boxShadow:"1px 1px 2px 0px rgb(0 0 0 / .3)"},buttonsCellEditorContainer:{height:"100%",width:"100%",display:"inline-flex",padding:"0 20px",justifyContent:"flex-end",alignItems:"center"},cancelButton:{background:"#f3f3f3",outline:"none",cursor:"pointer",marginRight:10,padding:2,display:"inline-flex",border:"none",borderRadius:"50%",boxShadow:"1px 1px 2px 0px rgb(0 0 0 / .3)"},saveButton:{background:"#f3f3f3",outline:"none",cursor:"pointer",padding:2,display:"inline-flex",border:"none",borderRadius:"50%",boxShadow:"1px 1px 2px 0px rgb(0 0 0 / .3)"}},C=function(e){btoa("test:c4777264-50ce-42f7-b70f-2c0bcea5d570");fetch("https://api.365.systems/odata/v2/Enrollments(72c88005-30a9-4004-b941-3afaa785c1cb)/Complete",{method:"POST",headers:{Authorization:"Basic "+btoa(":c4777264-50ce-42f7-b70f-2c0bcea5d570")}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},w=function(e){btoa(":c4777264-50ce-42f7-b70f-2c0bcea5d570");fetch("https://api.365.systems/odata/v2/Enrollments(72c88005-30a9-4004-b941-3afaa785c1cb)/ResetProgress",{method:"POST",headers:{Authorization:"Basic "+btoa(":c4777264-50ce-42f7-b70f-2c0bcea5d570")}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},y=Object(h.jsxs)(m.a,{id:"popover-basic",children:[Object(h.jsx)(m.a.Title,{as:"h3",children:"Popover right"}),Object(h.jsx)(m.a.Content,{children:"Update Successful"})]}),S=function(e){e.setRowsData;return[{id:"1",field:"UserLoginName",label:"Name",cellRenderer:f,editorCellRenderer:function(e){return Object(h.jsx)(f,Object(d.a)(Object(d.a)({},e),{},{isEdit:!0}))}},{id:"2",field:"Roles",label:"Role"},{id:"3",field:"CoursePassingStatus",label:"Course Status"},{id:"4",field:"CompletionDate",label:"Completion Date"},{id:"buttons",width:"max-content",pinned:!0,sortable:!1,resizable:!1,cellRenderer:function(e){e.tableManager,e.value,e.data,e.column,e.colIndex,e.rowIndex;return Object(h.jsx)("div",{style:v.buttonsCellContainer,children:Object(h.jsx)(x.a,{variant:"success",onClick:C,children:"Complete"})})}},{id:"buttons1",width:"max-content",pinned:!0,sortable:!1,resizable:!1,cellRenderer:function(e){e.tableManager,e.value,e.data,e.column,e.colIndex,e.rowIndex;return Object(h.jsx)("div",{style:v.buttonsCellContainer,children:Object(h.jsx)(O.a,{trigger:"click",placement:"right",overlay:y,children:Object(h.jsx)(x.a,{variant:"danger",onClick:w,children:"Reset"})})})}}]},R=(n(84),n(91)),I=n(54),E=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)([]),r=Object(c.a)(o,2),s=r[0],d=r[1],u=Object(i.useState)(!1),b=Object(c.a)(u,2),p=b[0],f=b[1],x="Basic "+btoa(":c4777264-50ce-42f7-b70f-2c0bcea5d570");Object(i.useEffect)((function(){f(!0),setTimeout((function(){g.a.get("https://us-api.365.systems/odata/v2/Users?%24filter=Email%20eq%20f_aricm@marvin.com",{headers:{Authorization:x}}).then((function(e){return d(e.data.value)})),g.a.get("https://api.365.systems/odata/v2/Courses",{headers:{Authorization:x}}).then((function(e){return d(e.data.value)})),f(!1)}),1500)}),[]);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"header",children:"Course Directory"}),Object(h.jsx)("div",{className:"DropDown",children:Object(h.jsx)(R.a,{id:"dropdown-basic-button",title:"Course Selection",onSelect:function(e){f(!0),setTimeout((function(){g.a.get("https://us-api.365.systems/odata/v2/Enrollments/All()?%24filter=CourseId%20eq%20"+e,{headers:{Authorization:x}}).then((function(e){return a(e.data.value)})),f(!1)}),1500)},children:s.map((function(e){return Object(h.jsx)(I.a.Item,{eventKey:e.Id,children:e.Title})}))})}),Object(h.jsx)(l.a,{columns:S({setRowsData:a}),rows:n,isLoading:p,onRowClick:function(e,t){e.rowIndex;var n=e.data,i=(e.column,e.isEdit);e.event;return!i&&t.rowSelectionApi.getIsRowSelectable(n.id)&&t.rowSelectionApi.toggleRowSelection(n.id)}})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};n(85);r.a.render(Object(h.jsx)(E,{}),document.getElementById("root")),k()}},[[86,1,2]]]);
//# sourceMappingURL=main.70abe399.chunk.js.map