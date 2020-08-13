(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),s=n.n(o),i=(n(30),n(7)),c=n(8),l=n(10),u=n(9),m=n(11),h=(n(31),n(13)),f=n(22),v=n.n(f),d=n(16),b=n.n(d),p=(n(32),n(23)),g=n.n(p),E=new v.a,w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={fen:"start",history:[],gameEnd:!1,whiteMove:"",blackMove:"",turn:""},n.onDrop=function(e){var t=e.sourceSquare,a=e.targetSquare,r=e.piece;E.fen();if(r.includes(n.state.turn)&&null!==E.move({from:t,to:a,promotion:"q"})){n.setState({fen:E.fen()});var o=""+t+a,s=Object(h.a)(Object(h.a)(n));"w"===n.state.turn?n.setState({whiteMove:o}):n.setState({blackMove:o}),b.a.ajax({type:"GET",url:"https://chess-engine.azurewebsites.net/api/values?fen="+E.fen(),dataType:"text",success:function(e){E.move({to:String(e).substring(2,4),from:String(e).substring(0,2),promotion:5===e.length?String(e).substring(4):"q"}),s.setState({fen:E.fen()}),"b"===s.state.turn?s.setState({whiteMove:String(e).substring(0,4)}):s.setState({blackMove:String(e).substring(0,4)}),E.game_over()&&s.setState({gameEnd:!0})},error:function(e,t,n){alert(e.responseText+"\n"+t+"\n"+n)}}),n.setState({fen:E.fen()})}},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";window.location.href.includes("white")?t="w":(t="b",b.a.ajax({type:"GET",url:"https://chess-engine.azurewebsites.net/api/values?fen="+E.fen(),dataType:"text",success:function(t){E.move({to:String(t).substring(2,4),from:String(t).substring(0,2),promotion:5===t.length?String(t).substring(4):"q"}),e.setState({fen:E.fen()}),e.setState({whiteMove:String(t).substring(0,4)})},error:function(e,t,n){alert(e.responseText+"\n"+t+"\n"+n)}})),this.setState({fen:E.fen(),turn:t})}},{key:"onMoveEnd",value:function(){E.game_over()&&this.state.setState({gameEnd:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"gameboard-layout"},r.a.createElement("div",{className:"gameboard-box"},r.a.createElement(g.a,{position:this.state.fen,darkSquareStyle:{backgroundColor:"#B0C4DE"},lightSquareStyle:{backgroundColor:"white"},orientation:"b"===this.state.turn?"black":"white",onDrop:this.onDrop,onMoveEnd:this.onMoveEnd,width:"640",onMouseOutSquare:this.onMouseOverSquare,onMouseoverSquare:this.onMouseoverSquare}),r.a.createElement("div",{className:"moves"},r.a.createElement("div",{className:"black"},r.a.createElement("h1",null,"Black's Move"),r.a.createElement("h2",null,this.state.blackMove)),r.a.createElement("div",{className:"white"},r.a.createElement("h1",null,"White's Move"),r.a.createElement("h2",null,this.state.whiteMove)))),this.state.gameEnd?r.a.createElement("div",null,r.a.createElement("h1",null,"Game Over")):null)}}]),t}(r.a.Component),S=(n(33),["Play As White","Play As Black"]),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Options-layout"},r.a.createElement("div",{className:"welcome-box"},r.a.createElement("span",{className:"welcome-header"},"Bingus Inc. Chess Engine")),r.a.createElement("div",{className:"select-box"},r.a.createElement("span",{className:"select-header"},"Select Color")),r.a.createElement("div",{className:"difficulty-box"},r.a.createElement("ul",{className:"difficulty-list1"},S.map(function(e,t){return r.a.createElement("li",{className:"difficulty-entry"},r.a.createElement("button",{className:"difficulty-name",entry:e.trim(),onClick:function(){var e="/play/"+(1===t?"white/":"black/");window.open(e,"_self")},index:t++},r.a.createElement("span",null,e)))}))))}}]),t}(r.a.Component),k=n(1),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-layout"},r.a.createElement("div",{className:"background"}),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/chessengine",component:y}),r.a.createElement(k.a,{path:"/play",component:w})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=n(15);s.a.render(r.a.createElement(j.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.6ad4314f.chunk.js.map