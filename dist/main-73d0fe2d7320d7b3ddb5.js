webpackJsonp([0],{161:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(32),o=r(446),u=n(o),i=r(35),l=n(i),c=function(){var e=(0,a.applyMiddleware)(u.default);return(0,a.createStore)(l.default,e)};t.default=c},162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(195),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},164:function(e,t,r){var n=r(228);"string"==typeof n&&(n=[[e.i,n,""]]);var a={};a.transform=void 0;r(451)(n,a);n.locals&&(e.exports=n.locals)},167:function(e,t,r){"use strict";e.exports=[{id:1,config:[4,4,2]},{id:2,config:[4,5,1]},{id:3,config:[4,3,3]},{id:4,config:[3,5,2]},{id:5,config:[4,3,1,2]}]},168:function(e,t,r){"use strict";e.exports=r.p+"assets/field-bg-bd45685a1686ed743fcc4efb1322c981.jpg"},169:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createAsyncAction=function(e,t){return function(){for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return function(r){return r({type:e+"_REQUEST",payload:n}),t.apply(void 0,n).then(function(t){r({type:e+"_SUCCESS",response:t})},function(t){r({type:e+"_FAILURE",errorMessage:t.message||"Something went wrong."})})}}}},170:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addPlayer=t.fetchLayouts=void 0;var a=r(458),o=n(a),u=r(167),i=n(u),l=function(e){return new Promise(function(t){return setTimeout(t,e||500)})};t.fetchLayouts=function(){return l().then(function(){return i.default})},t.addPlayer=function(e){var t=e.name,r=e.number,n=e.icon;return l().then(function(){return{id:(0,o.default)(),name:t,icon:n,number:r,active:!1}})}},171:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),o=n(a),u=r(6),i=n(u),l=function(){var e=Math.ceil(100*Math.random())+1;return{name:"Player "+e,number:e,icon:""}},c=function(e){var t=e.onAddPlayer;return o.default.createElement("div",{className:"player add-player",title:"Add new player",onClick:function(){return t(l())}},o.default.createElement("div",{className:"player-number"},"+"))};c.propTypes={onAddPlayer:i.default.func.isRequired},t.default=c},172:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(171),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},173:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),o=n(a),u=r(46),i=r(346),l=n(i),c=r(190),d=n(c),s=r(192),f=n(s),p=r(194),y=n(p),v=r(188),_=n(v),P=function(){return o.default.createElement("div",{className:"container"},o.default.createElement("header",null,o.default.createElement("h1",{className:"super-title"},"Team lineup"),o.default.createElement("p",null,"Build your team and shear it with your teammates!")),o.default.createElement("section",{className:"content"},o.default.createElement("div",{className:"left-content"},o.default.createElement(_.default,null),o.default.createElement(f.default,null),o.default.createElement(y.default,null)),o.default.createElement("div",{className:"right-content"},o.default.createElement(d.default,null))),o.default.createElement("footer",null,o.default.createElement("div",{className:"footer-link"},o.default.createElement("small",null,"by")," ",o.default.createElement("a",{href:"https://github.com/pettinarip",target:"_blank"},"@pettinarip"))))};t.default=(0,u.DragDropContext)(l.default)(P)},174:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(173),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},175:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),o=n(a),u=r(6),i=n(u),l=r(178),c=n(l),d=function(e){var t=e.layout,r=e.playersPositions,n=e.addPlayer,a=e.removePlayer;return o.default.createElement("div",{className:"field"},t&&o.default.createElement(c.default,{config:t.config,playersPositions:r,addPlayer:n,removePlayer:a}))};d.propTypes={layout:i.default.object,playersPositions:i.default.object,addPlayer:i.default.func.isRequired,removePlayer:i.default.func.isRequired},t.default=d},176:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(175),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},177:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(3),u=n(o),i=r(6),l=n(i),c=r(183),d=n(c),s=function(e){var t=e.config,r=e.playersPositions,n=e.addPlayer,o=e.removePlayer,i=0,l=t.map(function(e){var t=Array.apply(null,Array(e)).map(function(e,t){return a({},r[i+t],{position:i+t})});return i+=e,t});return u.default.createElement("div",{className:"layout"},l.reverse().map(function(e,t){return u.default.createElement("div",{className:"line",key:t},e.map(function(e){return u.default.createElement(d.default,{className:e.id?"active":"",id:e.id,color:e.color,number:e.number,position:e.position,key:e.position,addPlayer:n,removePlayer:o})}))}))};s.propTypes={config:l.default.array,playersPositions:l.default.object,addPlayer:l.default.func.isRequired,removePlayer:l.default.func.isRequired},t.default=s},178:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(177),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},179:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),o=n(a),u=r(6),i=n(u),l=function(e){var t=e.layouts,r=e.selected,n=e.onLayoutClick;return o.default.createElement("div",{className:"layout-selector list-container"},o.default.createElement("div",{className:"list"},t.map(function(e){return o.default.createElement("div",{className:r&&r.id===e.id?"item selected":"item",key:e.id},o.default.createElement("div",{className:"layout-description",onClick:function(){return n(e.id)}},e.config.join("-")))})))};l.propTypes={layouts:i.default.array.isRequired,selected:i.default.object,onLayoutClick:i.default.func.isRequired},t.default=l},180:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(179),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},181:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(3),i=n(u),l=r(6),c=n(l),d=r(46),s=r(55),f=n(s),p={beginDrag:function(e){return{id:e.id}},endDrag:function(e,t){if(t.didDrop()){var r=t.getDropResult(),n={id:e.id,position:e.position},a={id:r.id,position:r.position};a.position?e.onDropped(n,a):e.onDroppedOutside(n.id,n.position)}}},y=function(e){var t=e.connectDragSource,r=a(e,["connectDragSource"]);return t(i.default.createElement("div",{className:"player "+r.className,title:r.name},i.default.createElement("div",{className:"player-number"},r.number)))};y.propTypes={className:c.default.string,id:c.default.string,name:c.default.string,icon:c.default.string,number:c.default.number,color:c.default.string,onDropped:c.default.func,onDroppedOutside:c.default.func,connectDragSource:c.default.func.isRequired,isDragging:c.default.bool},t.default=(0,d.DragSource)(f.default.PLAYER,p,o)(y)},182:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(3),l=n(i),c=r(6),d=n(c),s=r(46),f=r(55),p=n(f),y=r(93),v=n(y),_={drop:function(e){return{position:e.position,id:e.id}}},P=function(e){var t=e.connectDropTarget,r=e.addPlayer,n=e.removePlayer,o=a(e,["connectDropTarget","addPlayer","removePlayer"]);return t(l.default.createElement("div",null,l.default.createElement(v.default,u({},o,{onDropped:r,onDroppedOutside:n}))))};P.propTypes={id:d.default.string,position:d.default.number.isRequired,connectDropTarget:d.default.func.isRequired,isOver:d.default.bool.isRequired,addPlayer:d.default.func.isRequired,removePlayer:d.default.func.isRequired,name:d.default.string,icon:d.default.string,number:d.default.number,color:d.default.string,className:d.default.string},t.default=(0,s.DropTarget)(p.default.PLAYER,_,o)(P)},183:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(182),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},184:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var o=r(3),u=n(o),i=r(6),l=n(i),c=r(93),d=n(c),s=r(172),f=n(s),p=function(e){var t=e.players,r=a(e,["players"]);return u.default.createElement("div",{className:"list"},u.default.createElement(f.default,{onAddPlayer:r.onAddPlayer}),t.map(function(e){return u.default.createElement(d.default,{className:"item active",id:e.id,color:e.color,number:e.number,onDropped:r.onAddPlayerPosition,onDroppedOutside:r.onRemovePlayerPosition,key:e.id})}))};p.propTypes={players:l.default.array.isRequired,onAddPlayer:l.default.func.isRequired,onAddPlayerPosition:l.default.func.isRequired,onRemovePlayerPosition:l.default.func.isRequired},t.default=p},185:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(184),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},186:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),o=n(a),u=r(6),i=n(u),l=function(e){var t=e.title,r=e.children;return o.default.createElement("div",{className:"settings-field-wrapper"},o.default.createElement("label",{className:"settings-field-heading"},t),o.default.createElement("div",{className:"settings-field"},r))};l.propTypes={title:i.default.string.isRequired,children:i.default.node.isRequired},t.default=l},187:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(){return a.default.createElement("div",{className:"settings-field-wrapper"},a.default.createElement("label",{className:"settings-field-heading"},"Sport"),a.default.createElement("div",{className:"settings-field"},a.default.createElement("div",{className:"list"},a.default.createElement("div",{className:"item selected"},a.default.createElement("div",{className:"layout-description"},"Football")))))};o.propTypes={},t.default=o},188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(187),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},189:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),o=n(a),u=r(6),i=n(u),l=r(53),c=r(54),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),s=r(35),f=r(176),p=n(f),y=function(e){var t=e.layout,r=e.playersPositions,n=e.addPlayerPosition,a=e.removePlayerPosition;return o.default.createElement("div",{className:"layout-wrapper"},o.default.createElement(p.default,{layout:t,playersPositions:r,addPlayer:n,removePlayer:a}))};y.propTypes={layout:i.default.object,playersPositions:i.default.object,addPlayerPosition:i.default.func.isRequired,removePlayerPosition:i.default.func.isRequired};var v=function(e){return{layout:(0,s.getActiveLayout)(e),playersPositions:(0,s.getPositions)(e)}};t.default=(0,l.connect)(v,d)(y)},190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(189),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},191:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(3),c=n(l),d=r(6),s=n(d),f=r(53),p=r(54),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(p),v=r(35),_=r(94),P=n(_),m=r(180),g=n(m),b=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){(0,this.props.fetchLayouts)()}},{key:"render",value:function(){var e=this.props,t=e.layouts,r=e.selected,n=e.changeLayoutSelection;return c.default.createElement(P.default,{title:"Tactics"},c.default.createElement(g.default,{layouts:t,selected:r,onLayoutClick:n}))}}]),t}(l.Component);b.propTypes={layouts:s.default.array.isRequired,selected:s.default.object,changeLayoutSelection:s.default.func.isRequired,fetchLayouts:s.default.func.isRequired};var O=function(e){return{layouts:(0,v.getAllLayouts)(e),selected:(0,v.getActiveLayout)(e)}};t.default=(0,f.connect)(O,y)(b)},192:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(191),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},193:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(3),i=n(u),l=r(6),c=n(l),d=r(53),s=r(46),f=r(55),p=n(f),y=r(54),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(y),_=r(35),P=r(94),m=n(P),g=r(185),b=n(g),O=function(e){var t=e.players,r=e.addPlayer,n=e.connectDropTarget,o=a(e,["players","addPlayer","connectDropTarget"]);return n(i.default.createElement("div",null,i.default.createElement(m.default,{title:"Player"},i.default.createElement(b.default,{players:t,onAddPlayer:r,onAddPlayerPosition:o.addPlayerPosition,onRemovePlayerPosition:o.removePlayerPosition}))))};O.propTypes={players:c.default.array,addPlayer:c.default.func.isRequired,addPlayerPosition:c.default.func.isRequired,removePlayerPosition:c.default.func.isRequired,connectDropTarget:c.default.func.isRequired,isOver:c.default.bool.isRequired};var E=function(e){return{players:(0,_.getInactivePlayers)(e)}};t.default=(0,d.connect)(E,v)((0,s.DropTarget)(p.default.PLAYER,{},o)(O))},194:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(193),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},195:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),o=n(a),u=r(6),i=n(u),l=r(53),c=r(174),d=n(c),s=function(e){var t=e.store;return o.default.createElement(l.Provider,{store:t},o.default.createElement(d.default,null))};s.propTypes={store:i.default.object},t.default=s},196:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(3),o=n(a),u=r(163),i=r(162),l=n(i),c=r(161),d=n(c);r(164);var s=(0,d.default)();(0,u.render)(o.default.createElement(l.default,{store:s}),document.getElementById("root"))},197:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getActiveLayout=t.getAllLayouts=t.getLayout=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(32),o=r(34),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=arguments[1];switch(t.type){case o.SELECT_LAYOUT:return t.id;default:return e}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.FETCH_LAYOUTS_SUCCESS:return n({},e,t.response.reduce(function(e,t){return e[t.id]=t,e},{}));default:return e}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case o.FETCH_LAYOUTS_SUCCESS:return t.response.map(function(e){return e.id});default:return e}};t.default=(0,a.combineReducers)({selectedId:u,byId:i,ids:l});var c=t.getLayout=function(e,t){return e.byId[t]};t.getAllLayouts=function(e){return e.ids.map(function(t){return c(e,t)})},t.getActiveLayout=function(e){return e.byId[e.selectedId]}},198:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.getInactivePlayers=t.getActivePlayers=t.getAllPlayers=t.getPlayer=void 0;var o=r(200),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=r(32),d=r(34),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case d.ADD_PLAYER_SUCCESS:return l({},e,a({},t.response.id,t.response));case d.ADD_PLAYER_POSITION:return l({},e,a({},t.id,l({},e[t.id],{active:!0})));case d.REMOVE_PLAYER_POSITION:return l({},e,a({},t.id,l({},e[t.id],{active:!1})));case d.RESET_POSITIONS:return(0,u.default)(e).reduce(function(e,t){var r=i(t,2),n=r[0],o=r[1];return l({},e,a({},n,l({},o,{active:!1})))},{});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case d.ADD_PLAYER_SUCCESS:return[].concat(n(e),[t.response.id]);default:return e}};t.default=(0,c.combineReducers)({byId:s,ids:f});var p=t.getPlayer=function(e,t){return e.byId[t]},y=t.getAllPlayers=function(e){return e.ids.map(function(t){return p(e,t)})};t.getActivePlayers=function(e){return y(e).filter(function(e){return e.active})},t.getInactivePlayers=function(e){return y(e).filter(function(e){return!e.active})}},199:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(34);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.RESET_POSITIONS:return{};case o.ADD_PLAYER_POSITION:return a({},e,n({},t.position,t.id));case o.REMOVE_PLAYER_POSITION:case o.CLEAN_PLAYER_POSITION:return a({},e,n({},t.position,null));default:return e}}},228:function(e,t,r){t=e.exports=r(229)(void 0),t.push([e.i,"@font-face{font-family:Open Sans;src:url("+r(455)+') format("truetype");font-weight:400;font-style:normal}*,:after,:before{box-sizing:inherit}body{margin:0;padding:0;font-family:Open Sans;font-size:14px;background-color:#fafafa;box-sizing:border-box}header{text-align:center;margin-bottom:100px}footer{margin-top:50px}footer .footer-link{text-align:center;padding:50px 0}a{color:#09c;text-decoration:none}.content{width:1050px;margin:0 auto;border-radius:3px;box-shadow:0 1px 3px rgba(0,0,0,.25);background-color:#fff;display:flex}.content .left-content,.content .right-content{flex:1}.content .right-content .layout-wrapper{display:flex;justify-content:center;align-items:center;padding:20px;background-color:#999}.item{display:inline-block;padding:3px 8px;background-color:#7abd7a;color:#fff;border-radius:3px;margin-right:5px}.item.selected,.item:hover{background-color:#629a62}.player{display:inline-block;width:25px;height:25px;cursor:pointer;text-align:center;padding:0;font-size:12px;border-radius:50%;background-color:#eee;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.player .player-number{line-height:25px}.player.active{color:#fff;background-color:#999;cursor:-webkit-grab}.player.item{padding:0;margin-bottom:5px;background-color:#7abd7a}.player.item:hover{background-color:#629a62}.player.add-player{margin-right:5px;background-color:#ccc}.settings-field-wrapper{position:relative;padding-top:30px;padding-bottom:20px;border-bottom:1px solid #eee}.settings-field-wrapper .settings-field-heading{position:absolute;top:0;width:100%;padding:20px 20px 0;font-size:12px;color:#999}.settings-field-wrapper .settings-field{position:relative;padding:20px;padding-bottom:0}.field{width:343px;height:500px;background-image:url('+r(168)+");display:flex;flex-flow:column nowrap}.field .layout{flex:1;flex-flow:column nowrap;margin:35px 0 50px}.field .layout,.field .layout .line{display:flex;justify-content:space-around}.field .layout .line{padding:0 25px;flex-flow:row nowrap}.field .layout .line .player{width:28px;height:28px;box-shadow:1px 1px 2px #000}.layout-selector .layout-description{cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""])},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SELECT_LAYOUT="SELECT_LAYOUT",t.RESET_POSITIONS="RESET_POSITIONS",t.ADD_PLAYER_POSITION="ADD_PLAYER_POSITION",t.REMOVE_PLAYER_POSITION="REMOVE_PLAYER_POSITION",t.CLEAN_PLAYER_POSITION="CLEAN_PLAYER_POSITION",t.ADD_PLAYER_REQUEST="ADD_PLAYER_REQUEST",t.ADD_PLAYER_SUCCESS="ADD_PLAYER_SUCCESS",t.ADD_PLAYER_FAILURE="ADD_PLAYER_FAILURE",t.FETCH_LAYOUTS_REQUEST="FETCH_LAYOUTS_REQUEST",t.FETCH_LAYOUTS_SUCCESS="FETCH_LAYOUTS_SUCCESS",t.FETCH_LAYOUTS_FAILURE="FETCH_LAYOUTS_FAILURE"},35:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.getPositions=t.getActiveLayout=t.getAllLayouts=t.getInactivePlayers=t.getActivePlayers=t.getAllPlayers=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(32),i=r(198),l=n(i),c=r(197),d=n(c),s=r(199),f=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=(0,u.combineReducers)({players:l.default,layouts:d.default,positions:f.default});t.getAllPlayers=function(e){return l.getAllPlayers(e.players)},t.getActivePlayers=function(e){return l.getActivePlayers(e.players)},t.getInactivePlayers=function(e){return l.getInactivePlayers(e.players)},t.getAllLayouts=function(e){return d.getAllLayouts(e.layouts)},t.getActiveLayout=function(e){return d.getActiveLayout(e.layouts)},t.getPositions=function(e){return Object.keys(e.positions).reduce(function(t,r){return r?o({},t,a({},r,l.getPlayer(e.players,e.positions[r]))):t},{})}},455:function(e,t,r){e.exports=r.p+"assets/fonts/OpenSans-Regular.ttf"},54:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.addPlayerPosition=t.cleanPlayerPosition=t.removePlayerPosition=t.changeLayoutSelection=t.addPlayer=t.fetchLayouts=void 0;var a=r(170),o=n(a),u=r(34),i=n(u),l=r(169),c=(t.fetchLayouts=(0,l.createAsyncAction)("FETCH_LAYOUTS",o.fetchLayouts),t.addPlayer=(0,l.createAsyncAction)("ADD_PLAYER",o.addPlayer),t.changeLayoutSelection=function(e){return function(t,r){var n=r().layouts;n.selectedId!==e&&(t({type:i.RESET_POSITIONS,playersCount:n.byId[e].config.reduce(function(e,t){return e+t},0)}),t({type:i.SELECT_LAYOUT,id:e}))}},t.removePlayerPosition=function(e,t){return{type:i.REMOVE_PLAYER_POSITION,id:e,position:t}}),d=t.cleanPlayerPosition=function(e){return{type:i.CLEAN_PLAYER_POSITION,position:e}};t.addPlayerPosition=function(e,t){return function(r){t.id&&t.position&&r(c(t.id,t.position)),e.position&&r(d(e.position)),r({type:i.ADD_PLAYER_POSITION,id:e.id,position:t.position})}}},55:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PLAYER:"player"}},93:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(181),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default},94:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(186),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=a.default}},[196]);