(this["webpackJsonpuuid-webpage"]=this["webpackJsonpuuid-webpage"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(14),n(4)),u=n(5),l=n(7),s=n(6),d=n(8),m=n(1),p=n.n(m);n(17);function h(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection(),a=!!(n&&n.rangeCount>0)&&n.getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&a&&(n.removeAllRanges(),n.addRange(a))}var v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={uuid:p()()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){h(this.state.uuid)}},{key:"generateNewOne",value:function(){var e=p()();this.setState({uuid:e}),h(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"UUID v4 generator"),o.a.createElement("h2",null,this.state.uuid),o.a.createElement("p",null,"UUID has been copied to your clipboard\xa0!"),o.a.createElement("a",{className:"App-link",onClick:function(){return e.generateNewOne()}},"Generate new one")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.d483b03e.chunk.js.map