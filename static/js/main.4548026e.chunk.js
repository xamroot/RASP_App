(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(t,e,n){},105:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(55),r=n.n(c),u=(n(65),n(10)),l=n(11),o=n(13),s=n(12),p=n(14),m=n(56),f=n(22),d=n(4),h=n(57),b=n.n(h),v=n(58),g=n.n(v),E=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(o.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(i)))).state={},n.handleSave=function(t){t.generateAsync({type:"blob"}).then(function(t){g.a.saveAs(t,"RASP_Output.zip")})},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=new b.a,n="";if(this.props.inputData.forEach(function(t){t.content?"IMG"===t.inputType?n+=t.inputId+":"+t.content.name:n+=t.inputId+":"+t.content+"\n":"CLR"===t.inputType?n+=t.inputId+":#ffffff\n":n+=t.inputId+":\n"}),e.file("output.RASP",n),this.props.imgData){var a=e.folder("images");this.props.imgData.forEach(function(t){t&&a.file(t.name,t,{base64:!0})})}return i.a.createElement("button",{disabled:!this.props.saveable,className:"saveButton",onClick:function(){return t.handleSave(e)}},"Save")}}]),e}(a.Component),O=function(t){var e="";return t.val&&(e=t.val),i.a.createElement("div",{className:"item-container"},i.a.createElement("label",{className:"item-label"},t.labelText),i.a.createElement("input",{onChange:t.changed,name:t.inputName,value:e,className:"item-input"}))},N=function(t){var e="#fffffff";return t.textVal&&(e=t.textVal),i.a.createElement("div",{className:"item-container"},i.a.createElement("label",{className:"item-label"},t.labelText),i.a.createElement("div",{className:"item-input-color-container"},i.a.createElement("input",{onChange:t.changed,name:t.inputName,type:"color",className:"item-input-color"}),i.a.createElement("h4",{className:"item-input-color-text"},e)))},j=function(t){return i.a.createElement("div",{className:"item-container"},i.a.createElement("label",{className:"item-label"},t.labelText),i.a.createElement("input",{type:"file",onChange:t.changed,name:t.inputName,className:"item-input"}))},I=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(o.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(i)))).state={saveable:!1,itemCount:0,inputs:[],values:[]},n.getStringInputs=function(t){var e=[];return t.RASP_Object.inputs.string_inputs.forEach(function(t){var a=n.createInput(t.description,t.input_id,"STR");e=[].concat(Object(d.a)(e),[a])}),e},n.getColorInputs=function(t){var e=[];return t.RASP_Object.inputs.color_inputs.forEach(function(t){var a=n.createInput(t.description,t.input_id,"CLR");e=[].concat(Object(d.a)(e),[a])}),e},n.getImageInputs=function(t){var e=[];return t.RASP_Object.inputs.image_inputs.forEach(function(t){var a=n.createInput(t.description,t.input_id,"IMG");e=[].concat(Object(d.a)(e),[a])}),e},n.loadFile=function(t){var e=n.getStringInputs(t),a=n.getColorInputs(t),i=n.getImageInputs(t);return[].concat(Object(d.a)(e),Object(d.a)(a),Object(d.a)(i))},n.createInput=function(t,e,n){for(var a="",i=0,c=0;c<26;c++)i=Math.floor(26*Math.random())+97,a+=String.fromCharCode(i);return{labelText:t,inputId:e,inputName:a,inputType:n}},n.handleInputChange=function(t){var e;e=t.target.files?t.target.files[0]:t.target.value;var a=t.target.name;n.setState(Object(f.a)({},a,e))},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t,e=this.loadFile(this.props.data);t=!!e.length,this.setState({saveable:t,inputs:e})}},{key:"render",value:function(){var t=this,e=[],n="",a={},c="";this.state.inputs.forEach(function(i){n=i.inputName,c=t.state[n],a=Object(m.a)({},i,{content:c}),e=[].concat(Object(d.a)(e),[a])});var r=this.state.inputs.map(function(e){switch(e.inputType){case"STR":var n=e.inputName;return i.a.createElement(O,{labelText:e.labelText,inputName:e.inputName,key:e.inputName,changed:t.handleInputChange,val:t.state[n]});case"CLR":var a=e.inputName;return i.a.createElement(N,{labelText:e.labelText,inputName:e.inputName,key:e.inputName,changed:t.handleInputChange,textVal:t.state[a]});case"IMG":return i.a.createElement(j,{labelText:e.labelText,inputName:e.inputName,key:e.inputName,changed:t.handleInputChange});default:return null}}),u=[];this.state.inputs.forEach(function(e){"IMG"===e.inputType&&(u=[].concat(Object(d.a)(u),[t.state[e.inputName]]))});var l=i.a.createElement("div",null);return this.state.inputs.length||(l=i.a.createElement("div",null,i.a.createElement("h4",null,"RASP_Data file is empty!"),i.a.createElement("p",null,"Find it in ./src/data/RASP_Data"))),console.log(e),i.a.createElement("div",null,l,r,i.a.createElement(E,{saveable:this.state.saveable,inputData:e,imgData:u}))}}]),e}(a.Component),C=n(59),y=(n(104),function(t){function e(){return Object(u.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(I,{className:"Generator",data:C})}}]),e}(a.Component));r.a.render(i.a.createElement(y,null),document.getElementById("root"))},59:function(t){t.exports={RASP_Object:{id:"demoproject",inputs:{string_inputs:[{input_id:"strBLOODTYPE",description:"bloodtype"},{input_id:"strIQ",description:"IQ"},{input_id:"strCHARACTER",description:"Character Name"}],color_inputs:[{input_id:"col002",description:"Color 1"},{input_id:"col001",description:"Color 1"}],integer_inputs:[{input_id:"intAGE",description:""}],image_inputs:[{input_id:"imgCHARACTER",description:"Character"}]}}}},60:function(t,e,n){t.exports=n(105)},65:function(t,e,n){},70:function(t,e){},72:function(t,e){}},[[60,1,2]]]);
//# sourceMappingURL=main.4548026e.chunk.js.map