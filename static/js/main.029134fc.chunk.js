(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),s=c(3),i=c(5),l=c(4),r=c(1),b=c.n(r),h=c(0),u=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.watch=setInterval((function(){t.setState({date:new Date})}),1e3),t}return Object(s.a)(c,[{key:"render",value:function(){return console.log(this.state.date.toLocaleTimeString()),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:"Current time: ".concat(this.state.date.toLocaleTimeString())})})}}]),c}(b.a.Component),j=(c(13),function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={visibleClock:!0,clockName:0},t.setRandomName=function(){t.state.visibleClock&&t.setState({clockName:Math.ceil(100*Math.random())})},t.showClock=function(){t.setState({visibleClock:!0})},t.hideClock=function(){t.setState({visibleClock:!1})},t}return Object(s.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("h1",{className:"app__title",children:"React clock"}),Object(h.jsxs)("div",{className:"clock",children:[Object(h.jsx)("p",{children:"Random name: ".concat(this.state.clockName)}),this.state.visibleClock&&Object(h.jsx)(u,{clockName:this.state.clockName}),Object(h.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:this.showClock,children:"Show \u0441lock"}),Object(h.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:this.hideClock,children:"Hide \u0441lock"}),Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.setRandomName,children:"Set random name"})]})]})}}]),c}(b.a.Component));a.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.029134fc.chunk.js.map