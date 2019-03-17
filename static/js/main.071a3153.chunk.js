(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},19:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(17),r=a.n(s),c=(a(10),a(30)),i=a(29),o=a(3),m=a(4),u=a(6),d=a(5),h=a(7),E=a(28),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",{className:"center-align"},"Class Mood")),l.a.createElement("div",{className:"row"},l.a.createElement(E.a,{to:"/questions",className:"col s6 offset-s3 waves-effect waves-light btn"},"Student")),l.a.createElement("div",{className:"row"},l.a.createElement(E.a,{to:"/settings",className:"col s6 offset-s3 waves-effect waves-light orange btn"},"Lecturer")))}}]),t}(l.a.PureComponent),v=a(11),b=a.n(v),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){b.a.AutoInit()}},{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue"},l.a.createElement("a",{href:"#!",className:"brand-logo"},l.a.createElement("i",{className:"material-icons"},"class"),"Class Mood"),l.a.createElement("a",{href:"#confirm",className:"right nav-button modal-trigger"},l.a.createElement("i",{className:"material-icons clickable"},"exit_to_app"))),l.a.createElement("div",{id:"confirm",className:"modal black-text"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h5",null,"Are you sure you want to quit?")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{href:"#!",className:"modal-close right red btn-flat"},"No"),l.a.createElement(E.a,{to:"/",className:"modal-close left green btn-flat"},"Yes"))))}}]),t}(l.a.Component),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={confused:{title:'"I\'m confused"',threshold:20,alarm:"1 Beep",muted:!1},question:{title:'"I have a question"',threshold:5,alarm:"2 Beeps",muted:!1},hear:{title:'"I can\'t hear"',threshold:2,alarm:"1 Boop",muted:!1},break:{title:'"I need a break"',threshold:25,alarm:"2 Boops",muted:!1}},e.default={confused:{title:'"I\'m confused"',threshold:20,alarm:"1 Beep"},question:{title:'"I have a question"',threshold:5,alarm:"2 Beeps"},hear:{title:'"I can\'t hear"',threshold:2,alarm:"1 Boop"},break:{title:'"I need a break"',threshold:25,alarm:"2 Boops"}},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){b.a.AutoInit()}},{key:"handleChange",value:function(e){var t=this.state;t[e.target.id].threshold=e.target.value,this.setState(t)}},{key:"handleMute",value:function(e){var t=this.state;t[e].muted=!t[e].muted,this.setState(t)}},{key:"handleAlarm",value:function(e,t){var a=this.state;a[t].alarm=e.target.text,this.setState(a)}},{key:"resetSetting",value:function(){this.setState(this.default)}},{key:"renderRow",value:function(e){var t=this;return l.a.createElement("div",{className:"row",key:e},l.a.createElement("div",{className:"col s3"},this.state[e].title,": ",l.a.createElement("b",null,this.state[e].threshold)),l.a.createElement("form",{action:"#",className:"col s4"},l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",id:e,min:"0",max:"100",onChange:this.handleChange.bind(this),value:this.state[e].threshold}))),l.a.createElement("div",{className:"col s4"},l.a.createElement("a",{className:"dropdown-trigger btn",href:"#!","data-target":"dropdown1"},this.state[e].alarm),l.a.createElement("ul",{id:"dropdown1",className:"dropdown-content",onClick:function(a){return t.handleAlarm(a,e)}},l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"1 Beep")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"2 Beeps")),l.a.createElement("li",{className:"divider",tabIndex:"-1"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"1 Boop")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"2 Boops")))),l.a.createElement("div",{className:"col s1"},l.a.createElement("i",{className:"material-icons clickable",onClick:function(){return t.handleMute(e)}},this.state[e].muted?"volume_off":"volume_up")))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center-align"},"Class Settings - Counter Thresholds"),["confused","question","hear","break"].map(function(t){return e.renderRow(t)}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"blue btn",onClick:function(){return e.resetSetting()}},"Default")),l.a.createElement("div",{className:"right"},l.a.createElement(E.a,{to:"/lecturer",className:"green btn"},"Done")))))}}]),t}(l.a.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this))).state={questions:e.questions},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"delete",value:function(e){this.state.questions.splice(e,1),this.setState({questions:this.state.questions})}},{key:"upVote",value:function(e){var t=this.state.questions;t[e].votes+=1,this.setState({questions:t})}},{key:"answer",value:function(e){var t=this.state.questions;t[e].answered=!t[e].answered,this.setState({questions:t})}},{key:"edit",value:function(e){var t=this.state.questions;t[e].title=document.querySelector("#newValue").value,this.setState({questions:t})}},{key:"renderQuestion",value:function(e,t){var a=this;return l.a.createElement("div",{key:t},l.a.createElement("div",{className:e.answered?"card green darken-3 white-text":"card"},l.a.createElement("div",{className:"row"},l.a.createElement("b",{className:"question"},e.title)),l.a.createElement("div",{className:"row"},l.a.createElement("i",{className:"right material-icons clickable",onClick:function(){return a.answer(t)}},e.answered?"undo":"done"),l.a.createElement("i",{className:"right material-icons clickable modal-trigger",href:"#delete".concat(t)},"delete"),this.props.isStudent?l.a.createElement("i",{className:"right material-icons clickable modal-trigger",href:"#edit".concat(t)},"edit"):null,this.props.isStudent?l.a.createElement("i",{className:"right material-icons clickable",onClick:function(){return a.upVote(t)}},"arrow_upward"):null,l.a.createElement("b",{className:"right votes"},e.votes),e.answered?l.a.createElement("b",{className:"left question"},"(Answered)"):null)),l.a.createElement("div",{id:"edit".concat(t),className:"modal black-text"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h4",null,"Edit Your Question"),l.a.createElement("div",{className:"input-field col s8"},l.a.createElement("input",{id:"newValue",type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"newValue"},this.state.questions[t].title))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{href:"#!",className:"modal-close btn-flat",onClick:function(){return a.edit(t)}},"Save"))),l.a.createElement("div",{id:"delete".concat(t),className:"modal black-text"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h5",null,"Are you sure you want to delete this question?")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{href:"#!",className:"modal-close left green btn-flat",onClick:function(){return a.delete(t)}},"Yes"),l.a.createElement("a",{href:"#!",className:"modal-close right red btn-flat"},"No"))))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"questions-list"},this.state.questions.sort(function(e,t){return e.answered&&!t.answered?1:!e.answered&&t.answered?-1:e.answered&&t.answered?0:t.votes-e.votes}).map(function(t,a){return e.renderQuestion(t,a)}))}}]),t}(l.a.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).questions=[{title:"Why is the floyd-Marshall Algorithm O(n^3)?",votes:5,answered:!1},{title:"Can you go over what a greedy algorithm is?",votes:3,answered:!1},{title:"Can you explain what a minimum spanning tree is?",votes:1,answered:!1}],e.state={confused:3,question:2,hear:5,break:8},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center-align"},"Lecturer"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"center-align col s6 m6 l3"},l.a.createElement("h5",null,"Confused"),l.a.createElement("a",{href:"#!"},this.state.confused)),l.a.createElement("div",{className:"center-align col s6 m6 l3"},l.a.createElement("h5",null,"Question"),l.a.createElement("a",{href:"#!"},this.state.question)),l.a.createElement("div",{className:"center-align col s6 m6 l3"},l.a.createElement("h5",null,"Can't Hear"),l.a.createElement("a",{href:"#!"},this.state.hear)),l.a.createElement("div",{className:"center-align col s6 m6 l3"},l.a.createElement("h5",null,"Break"),l.a.createElement("a",{href:"#!"},this.state.break))),l.a.createElement(p,{questions:this.questions})),l.a.createElement("div",{className:"right"},l.a.createElement(E.a,{to:"/settings",id:"fixedButton",className:"btn btn-floating btn-large cyan modal-trigger"},l.a.createElement("i",{className:"material-icons"},"settings"))))}}]),t}(l.a.Component),w=a(12),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).questions=[{title:"Why is the floyd-Marshall Algorithm O(n^3)?",votes:5,answered:!1},{title:"Can you go over what a greedy algorithm is?",votes:3,answered:!1},{title:"Can you explain what a minimum spanning tree is?",votes:1,answered:!1}],e.state={confused:!1,question:!1,hear:!1,break:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){b.a.AutoInit()}},{key:"postQuestion",value:function(){this.questions.push({title:document.querySelector("#newQuestion").value,votes:0,answered:!1})}},{key:"handleClick",value:function(e){switch(e.target.id){case"confused":this.setState(Object(w.a)({},this.state,{confused:!this.state.confused}));break;case"question":this.setState(Object(w.a)({},this.state,{question:!this.state.question}));break;case"hear":this.setState(Object(w.a)({},this.state,{hear:!this.state.hear}));break;case"break":this.setState(Object(w.a)({},this.state,{break:!this.state.break}))}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"center-align col s6 m6 l3"},l.a.createElement("h5",null,"Confused"),l.a.createElement("div",{id:"confused",className:this.state.confused?"btn-floating btn yellow":"btn-floating btn grey lighten-3",onClick:this.handleClick.bind(this)})),l.a.createElement("div",{className:"center-align col s6 m6 l3"},l.a.createElement("h5",null,"Question"),l.a.createElement("div",{id:"question",className:this.state.question?"btn-floating btn purple":"btn-floating btn grey lighten-3",onClick:this.handleClick.bind(this)})),l.a.createElement("div",{className:"center-align col s6 m6 l3"},l.a.createElement("h5",null,"Can't Hear"),l.a.createElement("div",{id:"hear",className:this.state.hear?"btn-floating btn orange":"btn-floating btn grey lighten-3",onClick:this.handleClick.bind(this)})),l.a.createElement("div",{className:"center-align col s6 m6 l3"},l.a.createElement("h5",null,"Break"),l.a.createElement("div",{id:"break",className:this.state.break?"btn-floating btn green":"btn-floating btn grey lighten-3",onClick:this.handleClick.bind(this)}))),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center-align"},"Questions"),l.a.createElement(p,{questions:this.questions,isStudent:!0})),l.a.createElement("a",{id:"fixedButton",href:"#modal",className:"btn btn-floating btn-large cyan modal-trigger"},l.a.createElement("i",{className:"material-icons"},"add")),l.a.createElement("div",{id:"modal",className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h4",null,"Write Your Question"),l.a.createElement("div",{className:"input-field col s8"},l.a.createElement("input",{id:"newQuestion",type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"newQuestion"},"Question:"))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{href:"#!",className:"modal-close btn-flat",onClick:function(){return e.postQuestion()}},"Post"))))}}]),t}(l.a.Component);var q=function(){return l.a.createElement(c.a,{basename:"/csc318-classmood"},l.a.createElement("div",null,l.a.createElement(i.a,{path:"/",exact:!0,component:function(){return l.a.createElement(f,null)}}),l.a.createElement(i.a,{path:"/lecturer/",component:function(){return l.a.createElement(k,null)}}),l.a.createElement(i.a,{path:"/settings/",component:function(){return l.a.createElement(N,null)}}),l.a.createElement(i.a,{path:"/questions/",component:function(){return l.a.createElement(y,null)}})))};r.a.render(l.a.createElement(q,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.071a3153.chunk.js.map