(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(31)},24:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),s=(t(24),t(9)),c=t(10),l=t(14),u=t(11),m=t(15),d=t(1),f=t(2);function p(){var e=Object(d.a)(["\n  margin-bottom: 1rem;\n"]);return p=function(){return e},e}function b(){var e=Object(d.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: #030321;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.2rem;\n  z-index: 1021;\n"]);return b=function(){return e},e}function h(){var e=Object(d.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: rgb(0, 0, 0, .9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1.2rem;\n  z-index: 1021;\n"]);return h=function(){return e},e}function k(){var e=Object(d.a)(["\n  flex: 1;\n"]);return k=function(){return e},e}function v(){var e=Object(d.a)(["\n  flex: 1;\n  position: relative;\n  height: ",";\n"]);return v=function(){return e},e}function g(){var e=Object(d.a)(["\n  height: ",";\n  width: ",";\n  flex: 1;\n\n  &:hover, &:focus, &:active {\n    outline: none;\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(d.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  text-align: center;\n  background-color: #282c34;\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n  justify-content: center;\n  color: white;\n"]);return x=function(){return e},e}var E=f.a.div(x(),function(e){return"web"===e.screenmode?"row":"column"}),y=f.a.div(g(),function(e){return e.size+"px"},function(e){return e.size+"px"}),w=f.a.div(v(),function(e){return"web"===e.screenmode?"100vh":"auto"}),C=f.a.div(k()),z=f.a.div(h()),O=f.a.div(b()),j=f.a.div(p());function S(){var e=Object(d.a)(["\n    height: ",";\n    width: ",";\n    background-color: ",";\n                                 \n    border: ",";\n"]);return S=function(){return e},e}function G(){var e=Object(d.a)(["\n    height: ",";\n    width: ",";\n    box-sizing: content-box;\n    padding: 0;\n    display: flex;\n    flex-wrap: wrap;\n\n    &:hover, &:focus, &:active {\n        outline: none;\n    }\n"]);return G=function(){return e},e}var A=f.a.div(G(),function(e){return e.size+"px"},function(e){return e.size+"px"}),D=f.a.div(S(),function(e){return e.size+"px"},function(e){return e.size+"px"},function(e){return e.foodCell?"orange":e.snakeCell?"cyan":e.wallCell?"darkgray":"black"},function(e){return e.foodCell||e.snakeCell||e.wallCell?"1px solid black":"0px"}),I=function(e,n){if(!e||!n||e.length!==n.length)return!1;for(var t=!0,r=0;r<e.length;r++)e[r]!==n[r]&&(t=!1);return t},T=function(e,n){return e.map(function(e,t){return e-n[t]})};function N(){var e=Object(d.a)(["\n    color: rgb(51, 51, 51);\n    border-radius: 3px;\n    border: 0;\n    cursor: pointer;\n    margin: 0.3rem;\n    background-color : ",";\n    padding: ",";\n    font-size: ",";\n    /* box-shadow: 0 0 10px black; */\n\n    &:focus {\n        outline: none;\n    }\n\n    &:hover, &:active {\n        outline: none;\n        background-color : #A9A9A9;\n    }\n"]);return N=function(){return e},e}function F(){var e=Object(d.a)(["\n    border: 0;\n    position: absolute;\n    left: 50%;\n    margin-left: -126px;\n    bottom: ",";\n    border-spacing: 0;\n    border-collapse: collapse;\n"]);return F=function(){return e},e}function H(){var e=Object(d.a)(["\n    width: 250px;\n    background-color : #003d98;\n    color: white;\n    border-radius: 50px;\n    border: 0;\n    padding: 1rem 1rem;\n    font-size: 1rem;\n    cursor: pointer;\n    box-shadow: 0 0 10px black;\n    letter-spacing: 0.2rem;\n\n    &:hover, &:focus, &:active {\n        background-color : #002356;\n        outline: none;\n    }\n"]);return H=function(){return e},e}function B(){var e=Object(d.a)(["\n    background-color : blue;\n    color: white;\n    border-radius: 3px;\n    border: 2px solid blue;\n    padding: .75rem 1rem;\n    font-size: 1rem;\n    cursor: pointer;\n    box-shadow: 0 0 10px black;\n\n    &:hover, &:focus, &:active {\n        outline: none;\n    }\n"]);return B=function(){return e},e}var M=f.a.button(B()),K=f.a.button(H()),V=f.a.table(F(),function(e){return"web"===e.screenmode?"3.5rem":"0.4rem"}),W=f.a.button(N(),function(e){return e.isClicked?"#A9A9A9":"#eee"},function(e){return"web"===e.screenmode?"1.25rem 1.5rem":"1rem 1.5rem"},function(e){return"web"===e.screenmode?"2rem":"1.5rem"});function J(){var e=Object(d.a)(['\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n\n    &:after {\n        content: " ";\n        display: block;\n        border-radius: 50%;\n        width: 0;\n        height: 0;\n        margin: 6px;\n        box-sizing: border-box;\n        border: 26px solid #fff;\n        border-color: #fff transparent #fff transparent;\n        animation: lds-hourglass 1.2s infinite;\n    }\n\n    @keyframes lds-hourglass {\n        0% {\n            transform: rotate(0);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n        }\n        50% {\n            transform: rotate(900deg);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n        100% {\n            transform: rotate(1800deg);\n        }\n    }\n']);return J=function(){return e},e}var L=f.a.div(J()),R=(t(30),function(){return a.a.createElement("svg",{viewBox:"0 0 500 156"},a.a.createElement("symbol",{id:"s-text"},a.a.createElement("text",{textAnchor:"middle",x:"50%",y:"50%"},"React-Snek")),a.a.createElement("g",{className:"g-ants"},a.a.createElement("use",{xlinkHref:"#s-text",className:"text-copy"}),a.a.createElement("use",{xlinkHref:"#s-text",className:"text-copy"}),a.a.createElement("use",{xlinkHref:"#s-text",className:"text-copy"}),a.a.createElement("use",{xlinkHref:"#s-text",className:"text-copy"}),a.a.createElement("use",{xlinkHref:"#s-text",className:"text-copy"})))}),P=function(){return a.a.createElement("div",{className:"logo-background"},a.a.createElement("div",{className:"svg-wrapper"},a.a.createElement(R,null)),a.a.createElement("div",{className:"logo-subtext"},"Classic Snake Online"))},U=function(e){return"intro"===e.status?a.a.createElement(O,null,a.a.createElement(P,null),a.a.createElement("br",null)," ",a.a.createElement("br",null),a.a.createElement(j,null,a.a.createElement(K,{onClick:e.initializeGame},"Play Game!")),a.a.createElement(j,null,a.a.createElement(K,{onClick:function(){return alert("This feature is not yet available")}},"LeaderBoards"))):"loading"===e.status?a.a.createElement(z,null,a.a.createElement(j,null,a.a.createElement(L,null)),a.a.createElement(j,null,"Initializing game...")):"standby"===e.status?a.a.createElement(z,null,a.a.createElement(M,{onClick:e.startGame},"Start game!")):"end"===e.status?a.a.createElement(z,null,a.a.createElement(j,null,a.a.createElement("b",null,"GAME OVER!")),a.a.createElement(j,null,"Your score: ",e.snake.length-4," "),a.a.createElement(M,{onClick:e.startGame},"Start a new game")):null},Y=t(3),$=function(e){return a.a.createElement(V,{screenmode:e.screenmode},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null),a.a.createElement("td",null,a.a.createElement(W,{screenmode:e.screenmode,isClicked:38===e.keypressed,onClick:function(){return e.setDirection({keyCode:38})}},a.a.createElement(Y.d,null))),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(W,{screenmode:e.screenmode,isClicked:37===e.keypressed,onClick:function(){return e.setDirection({keyCode:37})}},a.a.createElement(Y.b,null))),a.a.createElement("td",null,a.a.createElement(W,{screenmode:e.screenmode,isClicked:40===e.keypressed,onClick:function(){return e.setDirection({keyCode:40})}},a.a.createElement(Y.a,null))),a.a.createElement("td",null,a.a.createElement(W,{screenmode:e.screenmode,isClicked:39===e.keypressed,onClick:function(){return e.setDirection({keyCode:39})}},a.a.createElement(Y.c,null))))))},q=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).moveFood=function(){var e,n;do{do{e=parseInt(Math.random()*t.numCells-1)}while(0===e);do{n=parseInt(Math.random()*t.numCells-1)}while(0===n)}while(!t.foodDoesntOverlapSnake([e,n]));t.setState({food:[e,n]})},t.setDirection=function(e){var n=e.keyCode;if(32!==n||"standby"!==t.state.status&&"end"!==t.state.status){var r=!0;[[38,40],[37,39]].forEach(function(e){e.indexOf(t.state.direction)>-1&&e.indexOf(n)>-1&&(r=!1)}),37!==n&&38!==n&&39!==n&&40!==n||(r?t.setState({direction:n,keypressed:n},function(){return t.resetKeypressed()}):t.setState({keypressed:n},function(){return t.resetKeypressed()}))}else t.startGame()},t.resetKeypressed=function(){setTimeout(function(){return t.setState({keypressed:0})},30)},t.initializeGame=function(){t.setState({status:"loading"},function(){return setTimeout(function(){return t.setState({status:"standby"})},2600)})},t.moveSnake=function(){var e=[];switch(t.state.direction){case 40:e[0]=[t.state.snake[0][0],t.state.snake[0][1]+1];break;case 38:e[0]=[t.state.snake[0][0],t.state.snake[0][1]-1];break;case 39:e[0]=[t.state.snake[0][0]+1,t.state.snake[0][1]];break;case 37:e[0]=[t.state.snake[0][0]-1,t.state.snake[0][1]]}[].push.apply(e,t.state.snake.slice(1).map(function(e,n){return t.state.snake[n]})),t.setState({snake:e}),t.checkIfAteFood(e),t.isValid(e[0])&&t.doesntOverlap(e)||t.endGame()},t.checkIfAteFood=function(e){if(I(e[0],t.state.food)){var n,r=e[e.length-1],a=[[-1,0],[0,-1],[1,0],[0,1]];e.length>1&&(a[0]=T(r,e[e.length-2]));for(var o=0;o<a.length&&(n=[r[0]+a[o][0],r[1]+a[o][1]],!t.isValid(n));o++);t.setState({snake:e.concat([n]),food:[]}),t.moveFood()}},t.isValid=function(e){return e[0]>0&&e[1]>0&&e[0]<t.numCells-1&&e[1]<t.numCells-1},t.foodDoesntOverlapSnake=function(e){return 0===t.state.snake.slice(1).filter(function(n){return I(e,n)}).length},t.doesntOverlap=function(e){return 0===e.slice(1).filter(function(n){return I(e[0],n)}).length},t.startGame=function(){var e=t.state.speed;t.removeTimers(),t.moveSnakeInterval=setInterval(t.moveSnake,e),t.setState({status:"ingame",snake:[[5,5],[4,5],[3,5],[2,5]],food:[10,10],direction:39}),t.el.focus()},t.endGame=function(){t.removeTimers(),t.setState({status:"end"})},t.removeTimers=function(){t.moveSnakeInterval&&clearInterval(t.moveSnakeInterval),t.moveFoodTimeout&&clearTimeout(t.moveFoodTimeout)},t.state={snake:[],food:[],status:"intro",direction:39,keypressed:0,speed:50},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.el.focus()}},{key:"componentWillUnmount",value:function(){this.removeTimers()}},{key:"render",value:function(){var e=this,n="web"===this.props.screenmode?15:10;this.numCells=Math.floor(this.props.size/n);var t=this.props.size/this.numCells,r=Array.from(Array(this.numCells).keys()),o=r.map(function(n){return r.map(function(o){var i=e.state.food[0]===o&&e.state.food[1]===n,s=e.state.snake.filter(function(e){return e[0]===o&&e[1]===n});s=s.length&&s[0];var c=0===o||0===n||o===r.length-1||n===r.length-1;return a.a.createElement(D,{foodCell:i,snakeCell:s,wallCell:c,size:t,key:o+" "+n})})});return a.a.createElement(E,{screenmode:this.props.screenmode},a.a.createElement(C,null,"LeaderBoards Coming Soon"),a.a.createElement(y,{onKeyDown:this.setDirection,size:this.props.size,ref:function(n){return e.el=n},tabIndex:-1},a.a.createElement(U,{screenmode:this.props.screenmode,status:this.state.status,startGame:this.startGame,initializeGame:this.initializeGame,snake:this.state.snake}),a.a.createElement(A,{size:this.props.size},o)),a.a.createElement(w,{screenmode:this.props.screenmode},a.a.createElement($,{setDirection:this.setDirection,keypressed:this.state.keypressed,screenmode:this.props.screenmode})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=window,X=Q.innerHeight,Z=Q.innerWidth,_=X<Z?.8*X:Z,ee=X<Z?"web":"mobile";i.a.render(a.a.createElement(q,{size:_,screenmode:ee}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.01e2a007.chunk.js.map