(function(e){function t(t){for(var r,s,c=t[0],u=t[1],i=t[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("PostComponent")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Latest Posts")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[e._v("Say something...")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",name:"",id:"create-post",placeholder:"Create a post"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("button",{on:{click:e.createPost}},[e._v("Post !")])]),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("div",{staticClass:"post-container"},e._l(e.posts,(function(t,r){return n("div",{key:t._id,staticClass:"post",attrs:{item:e.posts,index:r}},[e._v(" "+e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/"+t.createdAt.getFullYear())+" "),n("p",{staticClass:"text"},[e._v(e._s(t.text))]),n("span",{staticClass:"delete",on:{click:function(n){return e.deletePost(t._id)}}},[e._v("X")])])})),0)])},c=[],u=(n("96cf"),n("1da1")),i=(n("d81d"),n("d3b7"),n("5530")),p=n("d4ec"),l=n("bee2"),f=n("bc3a"),d=n.n(f),v="api/posts/",m=function(){function e(){Object(p["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getPosts",value:function(){return new Promise(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(v);case 3:r=e.sent,a=r.data,t(a.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{createdAt:new Date(e.createdAt)})}))),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),n(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"insertPost",value:function(e){return d.a.post(v,{text:e})}},{key:"deletePost",value:function(e){return d.a.delete("".concat(v).concat(e))}}]),e}(),h=m,b={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getPosts();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createPost:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.insertPost(e.text);case 2:return t.next=4,h.getPosts();case 4:e.posts=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,h.deletePost(e);case 2:return n.next=4,h.getPosts();case 4:t.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},g=b,x=(n("e3b5"),n("2877")),w=Object(x["a"])(g,s,c,!1,null,"0f560678",null),P=w.exports,y={name:"App",components:{PostComponent:P}},_=y,O=(n("034f"),Object(x["a"])(_,a,o,!1,null,null,null)),j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){},d94d:function(e,t,n){},e3b5:function(e,t,n){"use strict";var r=n("d94d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.af3f7d9d.js.map