(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},19:function(e,t,a){e.exports=a(28)},24:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(17),r=a.n(s),c=(a(24),a(31)),i=a(30),o=a(3),m=a(4),u=a(6),d=a(5),h=a(7),E=a(29),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",{className:"center-align"},"Class Mood")),l.a.createElement("div",{className:"row"},l.a.createElement(E.a,{to:"/questions",className:"col s6 offset-s3 waves-effect waves-light btn"},"Student")),l.a.createElement("div",{className:"row"},l.a.createElement(E.a,{to:"/settings",className:"col s6 offset-s3 waves-effect waves-light orange btn"},"Lecturer")))}}]),t}(l.a.PureComponent),f=(a(11),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue"},l.a.createElement("a",{href:"#!",className:"brand-logo"},l.a.createElement("i",{className:"material-icons"},"class"),"Class Mood"),l.a.createElement(E.a,{to:"/",className:"right nav-button"},l.a.createElement("i",{className:"material-icons"},"exit_to_app")))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",{className:"center-align"},"Code:"),l.a.createElement("h3",{className:"center-align"},"demo"),l.a.createElement("h5",{className:"center-align"},"*Important Note: All students must use this code to access your lecture page.")),l.a.createElement("div",{className:"center-align"},l.a.createElement(E.a,{to:"/settings",className:"btn"},"Continue"))))}}]),t}(l.a.PureComponent)),b=a(13),g=a.n(b),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={confused:{threshold:20,alarm:"1 Beep"},question:{threshold:5,alarm:"2 Beeps"},hear:{threshold:2,alarm:"1 Boop"},break:{threshold:25,alarm:"2 Boops"}},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){g.a.AutoInit()}},{key:"handleChange",value:function(e){var t=this.state;t[e.target.id].threshold=e.target.value,this.setState(t)}},{key:"renderRow",value:function(e){return l.a.createElement("div",{className:"row",key:e},l.a.createElement("form",{action:"#"},l.a.createElement("div",{className:"col s3"},'"I\'m Confused" Counter Threshold: ',l.a.createElement("b",null,this.state[e].threshold)),l.a.createElement("p",{className:"range-field col s5"},l.a.createElement("input",{type:"range",id:e,min:"0",max:"100",onChange:this.handleChange.bind(this),value:this.state[e].threshold}))),l.a.createElement("div",{className:"col s4"},l.a.createElement("a",{className:"dropdown-trigger btn",href:"#!","data-target":"dropdown1"},this.state[e].alarm),l.a.createElement("ul",{id:"dropdown1",className:"dropdown-content"},l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"1 Beep")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"2 Beeps")),l.a.createElement("li",{className:"divider",tabIndex:"-1"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"1 Boop")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"2 Boops")))))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue"},l.a.createElement("a",{href:"#!",className:"brand-logo"},l.a.createElement("i",{className:"material-icons"},"class"),"Class Mood"),l.a.createElement(E.a,{to:"/",className:"right nav-button"},l.a.createElement("i",{className:"material-icons"},"exit_to_app")))),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center-align"},"Class Settings"),["confused","question","hear","break"].map(function(t){return e.renderRow(t)}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"blue btn"},"Default")),l.a.createElement("div",{className:"right"},l.a.createElement(E.a,{to:"/lecturer",className:"green btn"},"Done")))))}}]),t}(l.a.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this))).state={questions:e.questions},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"delete",value:function(e){this.state.questions.splice(e,1),this.setState({questions:this.state.questions})}},{key:"upVote",value:function(e){var t=this.state.questions;t[e].votes+=1,this.setState({questions:t})}},{key:"answer",value:function(e){var t=this.state.questions;t[e].answered=!t[e].answered,this.setState({questions:t})}},{key:"renderQuestion",value:function(e,t){var a=this;return l.a.createElement("div",{key:t},l.a.createElement("div",{className:e.answered?"card grey lighten-3 white-text":"card"},l.a.createElement("div",{className:"row"},e.title),l.a.createElement("div",{className:"row"},l.a.createElement("i",{className:"right material-icons",onClick:function(){return a.answer(t)}},"check"),l.a.createElement("i",{className:"right material-icons",onClick:function(){return a.delete(t)}},"delete"),l.a.createElement("i",{className:"right material-icons",onClick:function(){return a.upVote(t)}},"arrow_upward"),l.a.createElement("b",{className:"right"},e.votes))))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.questions.sort(function(e,t){return e.answered&&!t.answered?1:!e.answered&&t.answered?-1:e.answered&&t.answered?0:t.votes-e.votes}).map(function(t,a){return e.renderQuestion(t,a)}))}}]),t}(l.a.Component),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).questions=[{title:"Why is the floyd-Marshall Algorithm O(n^3)?",votes:5,answered:!1},{title:"Can you go over what a greedy algorithm is?",votes:3,answered:!1},{title:"Can you explain what a minimum spanning tree is?",votes:1,answered:!1}],e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue"},l.a.createElement("a",{href:"#!",className:"brand-logo"},l.a.createElement("i",{className:"material-icons"},"class"),"Class Mood"),l.a.createElement(E.a,{to:"/",className:"right nav-button"},l.a.createElement("i",{className:"material-icons"},"exit_to_app")))),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center-align"},"Lecturer"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"center-align col s12 m6 l3"},l.a.createElement("h5",null,"Confused"),l.a.createElement("a",{href:"#!"},"3")),l.a.createElement("div",{className:"center-align col s12 m6 l3"},l.a.createElement("h5",null,"Question"),l.a.createElement("a",{href:"#!"},"2")),l.a.createElement("div",{className:"center-align col s12 m6 l3"},l.a.createElement("h5",null,"Hear"),l.a.createElement("a",{href:"#!"},"5")),l.a.createElement("div",{className:"center-align col s12 m6 l3"},l.a.createElement("h5",null,"Break"),l.a.createElement("a",{href:"#!"},"8"))),l.a.createElement(p,{questions:this.questions})),l.a.createElement("div",{className:"right"},l.a.createElement(E.a,{to:"/settings",id:"fixedButton",className:"btn btn-floating btn-large cyan modal-trigger"},l.a.createElement("i",{className:"material-icons"},"settings"))))}}]),t}(l.a.Component),k=a(12),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).questions=[{title:"Why is the floyd-Marshall Algorithm O(n^3)?",votes:5,answered:!1},{title:"Can you go over what a greedy algorithm is?",votes:3,answered:!1},{title:"Can you explain what a minimum spanning tree is?",votes:1,answered:!1}],e.state={confused:!1,question:!1,hear:!1,break:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){g.a.AutoInit()}},{key:"postQuestion",value:function(){console.log(document.querySelector("#question").value),this.questions.push({title:document.querySelector("#question").value,votes:0,answered:!1})}},{key:"handleClick",value:function(e){switch(e.target.id){case"confused":this.setState(Object(k.a)({},this.state,{confused:!this.state.confused}));break;case"question":this.setState(Object(k.a)({},this.state,{question:!this.state.question}));break;case"hear":this.setState(Object(k.a)({},this.state,{hear:!this.state.hear}));break;case"break":this.setState(Object(k.a)({},this.state,{break:!this.state.break}))}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue"},l.a.createElement("a",{href:"#!",className:"brand-logo"},l.a.createElement("i",{className:"material-icons"},"class"),"Class Mood"),l.a.createElement(E.a,{to:"/",className:"right nav-button"},l.a.createElement("i",{className:"material-icons"},"exit_to_app")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"center-align col s12 m6 l3"},l.a.createElement("h5",null,"Confused"),l.a.createElement("div",{id:"confused",className:this.state.confused?"btn-floating btn yellow":"btn-floating btn grey lighten-3",onClick:this.handleClick.bind(this)})),l.a.createElement("div",{className:"center-align col s12 m6 l3"},l.a.createElement("h5",null,"Question"),l.a.createElement("div",{id:"question",className:this.state.question?"btn-floating btn purple":"btn-floating btn grey lighten-3",onClick:this.handleClick.bind(this)})),l.a.createElement("div",{className:"center-align col s12 m6 l3"},l.a.createElement("h5",null,"Hear"),l.a.createElement("div",{id:"hear",className:this.state.hear?"btn-floating btn orange":"btn-floating btn grey lighten-3",onClick:this.handleClick.bind(this)})),l.a.createElement("div",{className:"center-align col s12 m6 l3"},l.a.createElement("h5",null,"Break"),l.a.createElement("div",{id:"break",className:this.state.break?"btn-floating btn green":"btn-floating btn grey lighten-3",onClick:this.handleClick.bind(this)}))),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center-align"},"Questions"),l.a.createElement(p,{questions:this.questions})),l.a.createElement("a",{id:"fixedButton",href:"#modal",className:"btn btn-floating btn-large cyan modal-trigger"},l.a.createElement("i",{className:"material-icons"},"add")),l.a.createElement("div",{id:"modal",className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h4",null,"Write Your Question"),l.a.createElement("div",{className:"input-field col s8"},l.a.createElement("input",{id:"question",type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"question"},"Question:"))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{href:"#!",className:"modal-close btn-flat",onClick:function(){return e.postQuestion()}},"Post"))))}}]),t}(l.a.Component);function C(){return l.a.createElement(v,null)}function O(){return l.a.createElement(w,null)}function j(){return l.a.createElement(f,null)}function q(){return l.a.createElement(N,null)}function x(){return l.a.createElement(y,null)}var B=function(){return l.a.createElement(c.a,{basename:"/csc318-classmood"},l.a.createElement("div",null,l.a.createElement(i.a,{path:"/",exact:!0,component:C}),l.a.createElement(i.a,{path:"/lecturer/",component:O}),l.a.createElement(i.a,{path:"/create/",component:j}),l.a.createElement(i.a,{path:"/settings/",component:q}),l.a.createElement(i.a,{path:"/questions/",component:x})))};r.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0dfd3c71.chunk.js.map