(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(143),s=a(145),o=(a(74),a(161),a(7)),c=a.n(o),l=(a(163),a(164),function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e,t,a,n,i={init:function(){var e=window.location.href,t=e.indexOf("?a=");i.Drawing.init(".canvas"),document.body.classList.add("body--ready"),-1!==t?i.UI.simulate(decodeURI(e).substring(t+3)):i.UI.simulate("|歡迎光臨|魔物培養皿"),i.Drawing.loop(function(){i.Shape.render()})}};i.Drawing=(n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},{init:function(a){e=document.querySelector(a),t=e.getContext("2d"),this.adjustCanvas(),window.addEventListener("resize",function(e){i.Drawing.adjustCanvas()})},loop:function(e){a=a||e,this.clearFrame(),a(),n.call(window,this.loop.bind(this))},adjustCanvas:function(){e.width=window.innerWidth,e.height=window.innerHeight},clearFrame:function(){t.clearRect(0,0,e.width,e.height)},getArea:function(){return{w:e.width,h:e.height}},drawCircle:function(e,a){t.fillStyle=a.render(),t.beginPath(),t.arc(e.x,e.y,e.z,0,2*Math.PI,!0),t.closePath(),t.fill()}}),i.UI=function(){var e,t,a,n=document.querySelector(".ui-input"),r=document.querySelector(".ui"),s=document.querySelector(".help"),o=document.querySelector(".commands"),c=document.querySelector(".overlay"),l=document.querySelector(".canvas"),u=!1,m=25,d=!0,h=[],p="#";function f(e){var t=e.getHours(),a=e.getMinutes();return t+":"+(a=a<10?"0"+a:a)}function v(a,n,i,r){clearInterval(e),a(t=r?i:1),(!i||!r&&t<i||r&&t>0)&&(e=setInterval(function(){a(t=r?t-1:t+1),(!r&&i&&t===i||r&&0===t)&&clearInterval(e)},n))}function w(t){clearInterval(e),h=[],a=null,t&&i.Shape.switchShape(i.ShapeBuilder.letter(""))}function g(e){var t,r;c.classList.remove("overlay--visible"),h="object"==typeof e?e:h.concat(e.split("|")),n.value="",y(),v(function(n){switch(r=h.shift(),t=function(e){return(e=e&&e.split(" ")[0])&&e[0]===p&&e.substring(1)}(r),e=function(e){return e&&e.split(" ")[1]}(r),t){case"countdown":v(function(e){0===e?0===h.length?i.Shape.switchShape(i.ShapeBuilder.letter("")):g(h):i.Shape.switchShape(i.ShapeBuilder.letter(e),!0)},1e3,e=(e=parseInt(e)||10)>0?e:10,!0);break;case"rectangle":e=(e=e&&e.split("x"))&&2===e.length?e:[m,m/2],i.Shape.switchShape(i.ShapeBuilder.rectangle(Math.min(m,parseInt(e[0])),Math.min(m,parseInt(e[1]))));break;case"circle":e=parseInt(e)||m,e=Math.min(e,m),i.Shape.switchShape(i.ShapeBuilder.circle(e));break;case"time":var s=f(new Date);h.length>0?i.Shape.switchShape(i.ShapeBuilder.letter(s)):v(function(){(s=f(new Date))!==a&&(a=s,i.Shape.switchShape(i.ShapeBuilder.letter(a)))},1e3);break;default:i.Shape.switchShape(i.ShapeBuilder.letter(r[0]===p?"What?":r))}},2e3,h.length)}function y(e){n.value.length>18?r.classList.add("ui--wide"):r.classList.remove("ui--wide"),d&&n.value.length>0?r.classList.add("ui--enter"):r.classList.remove("ui--enter")}return document.body.addEventListener("keydown",function(e){n.focus(),13===e.keyCode&&(d=!1,w(),g(n.value))}),n.addEventListener("input",y),n.addEventListener("change",y),n.addEventListener("focus",y),s.addEventListener("click",function(e){c.classList.toggle("overlay--visible"),c.classList.contains("overlay--visible")&&w(!0)}),o.addEventListener("click",function(e){var t,a,i;a=(t=e.target.classList.contains("commands-item")?e.target:e.target.parentNode.classList.contains("commands-item")?e.target.parentNode:e.target.parentNode.parentNode)&&t.querySelector(".commands-item-info"),i=t&&a.getAttribute("data-demo"),t&&a.getAttribute("data-url"),a&&(c.classList.remove("overlay--visible"),i&&(n.value=i,u?(w(),g(n.value)):n.focus()))}),l.addEventListener("click",function(e){c.classList.remove("overlay--visible")}),n.focus(),u&&document.body.classList.add("touch"),{simulate:function(e){g(e)}}}(),i.UI.Tabs=function(){document.querySelector(".tabs");var e=document.querySelector(".tabs-labels"),t=document.querySelectorAll(".tabs-label"),a=document.querySelectorAll(".tabs-panel");function n(e){t[e].classList.add("tabs-label--active"),a[e].classList.add("tabs-panel--active")}n(0),e.addEventListener("click",function(e){var i,r=e.target;if(r.classList.contains("tabs-label")){for(var s=0;s<t.length;s++)t[s].classList.remove("tabs-label--active"),a[s].classList.remove("tabs-panel--active"),r===t[s]&&(i=s);n(i)}})}(),i.Point=function(e){this.x=e.x,this.y=e.y,this.z=e.z,this.a=e.a,this.h=e.h},i.Color=function(e,t,a,n){this.r=e,this.g=t,this.b=a,this.a=n},i.Color.prototype={render:function(){return"rgba("+this.r+","+ +this.g+","+this.b+","+this.a+")"}},i.Dot=function(e,t){this.p=new i.Point({x:e,y:t,z:5,a:1,h:0}),this.e=.07,this.s=!0,this.c=new i.Color(255,255,255,this.p.a),this.t=this.clone(),this.q=[]},i.Dot.prototype={clone:function(){return new i.Point({x:this.x,y:this.y,z:this.z,a:this.a,h:this.h})},_draw:function(){this.c.a=this.p.a,i.Drawing.drawCircle(this.p,this.c)},_moveTowards:function(e){var t=this.distanceTo(e,!0),a=t[0],n=t[1],i=t[2],r=this.e*i;if(-1===this.p.h)return this.p.x=e.x,this.p.y=e.y,!0;if(i>1)this.p.x-=a/i*r,this.p.y-=n/i*r;else{if(!(this.p.h>0))return!0;this.p.h--}return!1},_update:function(){if(this._moveTowards(this.t)){var e=this.q.shift();e?(this.t.x=e.x||this.p.x,this.t.y=e.y||this.p.y,this.t.z=e.z||this.p.z,this.t.a=e.a||this.p.a,this.p.h=e.h||0):this.s?(this.p.x-=Math.sin(3.142*Math.random()),this.p.y-=Math.sin(3.142*Math.random())):this.move(new i.Point({x:this.p.x+50*Math.random()-25,y:this.p.y+50*Math.random()-25}))}var t;t=this.p.a-this.t.a,this.p.a=Math.max(.1,this.p.a-.05*t),t=this.p.z-this.t.z,this.p.z=Math.max(1,this.p.z-.05*t)},distanceTo:function(e,t){var a=this.p.x-e.x,n=this.p.y-e.y,i=Math.sqrt(a*a+n*n);return t?[a,n,i]:i},move:function(e,t){(!t||t&&this.distanceTo(e)>1)&&this.q.push(e)},render:function(){this._update(),this._draw()}},i.ShapeBuilder=function(){var e=13,t=document.createElement("canvas"),a=t.getContext("2d"),n="Avenir, Helvetica Neue, Helvetica, Arial, sans-serif";function r(){t.width=Math.floor(window.innerWidth/e)*e,t.height=Math.floor(window.innerHeight/e)*e,a.fillStyle="red",a.textBaseline="middle",a.textAlign="center"}function s(){for(var n=a.getImageData(0,0,t.width,t.height).data,r=[],s=0,o=0,c=t.width,l=t.height,u=0,m=0,d=0;d<n.length;d+=4*e)n[d+3]>0&&(r.push(new i.Point({x:s,y:o})),u=s>u?s:u,m=o>m?o:m,c=s<c?s:c,l=o<l?o:l),(s+=e)>=t.width&&(s=0,o+=e,d+=4*e*t.width);return{dots:r,w:u+c,h:m+l}}function o(e){a.font="bold "+e+"px "+n}return r(),window.addEventListener("resize",r),{imageFile:function(e,n){var r=new Image,o=i.Drawing.getArea();r.onload=function(){a.clearRect(0,0,t.width,t.height),a.drawImage(this,0,0,.6*o.h,.6*o.h),n(s())},r.onerror=function(){n(i.ShapeBuilder.letter("What?"))},r.src=e},circle:function(n){var i=Math.max(0,n)/2;return a.clearRect(0,0,t.width,t.height),a.beginPath(),a.arc(i*e,i*e,i*e,0,2*Math.PI,!1),a.fill(),a.closePath(),s()},letter:function(e){var n;return o(500),o(Math.min(500,t.width/a.measureText(e).width*.8*500,t.height/500*(n=e,!isNaN(parseFloat(n))&&isFinite(n)?1:.45)*500)),a.clearRect(0,0,t.width,t.height),a.fillText(e,t.width/2,t.height/2),s()},rectangle:function(t,a){for(var n=[],r=e*t,s=e*a,o=0;o<s;o+=e)for(var c=0;c<r;c+=e)n.push(new i.Point({x:c,y:o}));return{dots:n,w:r,h:s}}}}(),i.Shape=function(){var e=[],t=0,a=0,n=0,r=0;return{shuffleIdle:function(){for(var t=i.Drawing.getArea(),a=0;a<e.length;a++)e[a].s||e[a].move({x:Math.random()*t.w,y:Math.random()*t.h})},switchShape:function(s,o){var c,l=i.Drawing.getArea();if(t=s.w,a=s.h,function(){var e=i.Drawing.getArea();n=e.w/2-t/2,r=e.h/2-a/2}(),s.dots.length>e.length){c=s.dots.length-e.length;for(var u=1;u<=c;u++)e.push(new i.Dot(l.w/2,l.h/2))}for(var m=0,d=0;s.dots.length>0;)d=Math.floor(Math.random()*s.dots.length),e[m].e=o?.25:e[m].s?.14:.11,e[m].s?e[m].move(new i.Point({z:20*Math.random()+10,a:Math.random(),h:18})):e[m].move(new i.Point({z:5*Math.random()+5,h:o?18:30})),e[m].s=!0,e[m].move(new i.Point({x:s.dots[d].x+n,y:s.dots[d].y+r,a:1,z:5,h:0})),s.dots=s.dots.slice(0,d).concat(s.dots.slice(d+1)),m++;for(var h=m;h<e.length;h++)e[h].s&&(e[h].move(new i.Point({z:20*Math.random()+10,a:Math.random(),h:20})),e[h].s=!1,e[h].e=.04,e[h].move(new i.Point({x:Math.random()*l.w,y:Math.random()*l.h,a:.3,z:4*Math.random(),h:0})))},render:function(){for(var t=0;t<e.length;t++)e[t].render()}}}(),i.init()},a.componentWillUnmount=function(){for(var e=0;e<100;e++)clearInterval(e)},a.render=function(){return i.a.createElement("div",{style:{position:"relative",height:"100vh"}},i.a.createElement("canvas",{className:"canvas"}),i.a.createElement("div",{className:"help"},"?"),i.a.createElement("div",{className:"ui"},i.a.createElement("input",{className:"ui-input",type:"text"}),i.a.createElement("span",{className:"ui-return"},"↵")),i.a.createElement(r.Link,{to:"/story ",className:"link"},"回到故事"),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"tabs"},i.a.createElement("div",{className:"tabs-labels"},i.a.createElement("span",{className:"tabs-label"},"Commands"),i.a.createElement("span",{className:"tabs-label"},"Info"),i.a.createElement("span",{className:"tabs-label"},"Share")),i.a.createElement("div",{className:"tabs-panels"},i.a.createElement("ul",{className:"tabs-panel commands"},i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Text"),i.a.createElement("span",{className:"commands-item-info","data-demo":"Hello :)"},"Type anything"),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Countdown"),i.a.createElement("span",{className:"commands-item-info","data-demo":"#countdown 10"},"#countdown",i.a.createElement("span",{className:"commands-item-mode"},"number")),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Time"),i.a.createElement("span",{className:"commands-item-info","data-demo":"#time"},"#time"),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Rectangle"),i.a.createElement("span",{className:"commands-item-info","data-demo":"#rectangle 30x15"},"#rectangle",i.a.createElement("span",{className:"commands-item-mode"},"width x height")),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item"},i.a.createElement("span",{className:"commands-item-title"},"Circle"),i.a.createElement("span",{className:"commands-item-info","data-demo":"#circle 25"},"#circle",i.a.createElement("span",{className:"commands-item-mode"},"diameter")),i.a.createElement("span",{className:"commands-item-action"},"Demo")),i.a.createElement("li",{className:"commands-item commands-item--gap"},i.a.createElement("span",{className:"commands-item-title"},"Animate"),i.a.createElement("span",{className:"commands-item-info","data-demo":"The time is|#time|#countdown 3|#icon thumbs-up"},i.a.createElement("span",{className:"commands-item-mode"},"command1")," |",i.a.createElement("span",{className:"commands-item-mode"},"command2")),i.a.createElement("span",{className:"commands-item-action"},"Demo"))),i.a.createElement("div",{className:"tabs-panel ui-details"},i.a.createElement("div",{className:"ui-details-content"},i.a.createElement("h1",null,"Shape Shifter"),i.a.createElement("p",null,"An experiment by"," ",i.a.createElement("a",{href:"//www.kennethcachia.com"},"Kenneth Cachia"),".",i.a.createElement("br",null),i.a.createElement("a",{href:"//fortawesome.github.io/Font-Awesome/#icons-new"},"Font Awesome")," ","is being used to render all #icons."),i.a.createElement("br",null),i.a.createElement("p",null,"Visit"," ",i.a.createElement("a",{href:"http://www.kennethcachia.com/shape-shifter/?a=#icon thumbs-up"},"Shape Shifter")," ","to use icons."))),i.a.createElement("div",{className:"tabs-panel ui-share"},i.a.createElement("div",{className:"ui-share-content"},i.a.createElement("h1",null,"Sharing"),i.a.createElement("p",null,"Simply add ",i.a.createElement("em",null,"?a=")," to the current URL to share any static or animated text. Examples:"),i.a.createElement("p",null,i.a.createElement("a",{href:"http://www.kennethcachia.com/shape-shifter?a=Hello"},"www.kennethcachia.com/shape-shifter?a=Hello"),i.a.createElement("br",null),i.a.createElement("a",{href:"http://www.kennethcachia.com/shape-shifter?a=Hello|#countdown 3"},"www.kennethcachia.com/shape-shifter?a=Hello|#countdown 3"))))))))},t}(n.Component));t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(l,null))}},142:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=h,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=n(a(147)),r=n(a(148)),s=n(a(7)),o=n(a(52)),c=n(a(53)),l=n(a(4)),u=n(a(0)),m=a(23),d=a(143);function h(e){return function(e){return e.replace(/\/+/g,"/")}("/MonsterPetriDish/"+e)}var p={activeClassName:l.default.string,activeStyle:l.default.object},f=function(e){function t(t){var a;a=e.call(this,t)||this,(0,c.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(i.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,o=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),p=t.replace,f=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=h(a);return u.default.createElement(m.Link,(0,r.default)({to:v,state:l,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),w(a,{state:l,replace:p})),!0}},f))},t}(u.default.Component);f.propTypes=(0,r.default)({},p,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=u.default.forwardRef(function(e,t){return u.default.createElement(f,(0,r.default)({innerRef:t},e))});t.default=v;var w=function(e,t){window.___navigate(h(e),t)};t.navigate=w;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(h(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(h(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var n=a(0),i=a.n(n),r=a(4),s=a.n(r),o=a(142),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(144),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=i.a.createContext({}),h=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},144:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},145:function(e,t,a){"use strict";var n=a(146),i=a(0),r=a.n(i),s=a(4),o=a.n(s),c=a(143),l=function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,t)},data:n})};l.propTypes={children:o.a.node.isRequired},t.a=l},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},147:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}},148:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),o=a(54),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},161:function(e,t,a){var n=a(11);n(n.P,"Array",{fill:a(162)}),a(34)("fill")},162:function(e,t,a){"use strict";var n=a(25),i=a(73),r=a(14);e.exports=function(e){for(var t=n(this),a=r(t.length),s=arguments.length,o=i(s>1?arguments[1]:void 0,a),c=s>2?arguments[2]:void 0,l=void 0===c?a:i(c,a);l>o;)t[o++]=e;return t}},163:function(e,t,a){},164:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-8403b31515809a95c3a6.js.map