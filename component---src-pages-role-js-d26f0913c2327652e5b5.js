(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(0),o=n.n(c),i=n(152),s=(n(288),n(161)),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={roleList:[{src:"role1.png",text:"\b魔物的原始設計-基礎魔物,魔物雞"},{src:"role1-1.png",text:"加入魔力的要素,魔物雞的初階段進化型態,魔法雞"},{src:"role1-2.png",text:"加入自然的要素,魔物雞的初階段進化型態,蘑菇雞"},{src:"role1-1-1.png",text:"魔法雞再加入靈魂要素,死靈大魔法師雞"},{src:"role1-1-2.png",text:"魔法雞再加入身體性能要素,死神鐮刀雞"},{src:"role1-2-1.png",text:"蘑菇雞再加入靈魂要素,天使蘑菇雞"},{src:"role1-2-2.png",text:"蘑菇雞再加入身體性能要素,高鈣蘑菇雞"}]},n}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"role-wrapper"},o.a.createElement("header",{className:"title",key:"header"},o.a.createElement("img",{src:n(208),className:"decoration1-img"}),o.a.createElement(s.a,{animConfig:{opacity:[1,0],translateY:[10,50]},delay:200,duration:300,interval:200},o.a.createElement("h2",{className:"title-text",key:"text"},"角色介紹")),o.a.createElement("img",{src:n(209),className:"decoration2-img"})),o.a.createElement("section",{className:"content"},o.a.createElement("ul",null,o.a.createElement(s.a,{animConfig:{opacity:[1,0],translateY:[0,-50]},delay:500,duration:300,interval:200},this.state.roleList.map(function(e,t){return o.a.createElement("li",{className:"role-list",key:t},o.a.createElement("img",{src:n(289)("./"+e.src),className:"role-img"}),o.a.createElement("p",{className:"role-text"},e.text))})))))},t}(c.Component);n.d(t,"default",function(){return u});var u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(i.a,null,o.a.createElement(l,null))},t}(c.Component)},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(145),s=n.n(i);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var l=n(147),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(52),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){},152:function(e,t,n){"use strict";var a=n(149),r=n(0),c=n.n(r),o=n(4),i=n.n(o),s=n(146),l=n(157),u=n(148),p={testuser:"asd741"};var d={bannerPcFirstRender:!1};var f=Object(u.b)({userReducer:function(e,t){return void 0===e&&(e=p),e},pageReducer:function(e,t){return void 0===e&&(e=d),e}}),g=(n(151),n(161)),m=Object(u.c)(f),y=function(e){var t=e.children;return c.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(l.a,{store:m},c.a.createElement(g.a,{type:"scale",duration:500,interval:500,className:"bg"},c.a.createElement("div",{key:"undefined"!=typeof window&&window.location.href},t)),c.a.createElement("div",{className:"nav"},c.a.createElement(s.Link,{to:"/",className:"index-link"},"大廳"),c.a.createElement(s.Link,{to:"/story",className:"story-link"},"故事"),c.a.createElement(s.Link,{to:"/role",className:"role-link"},"角色"),c.a.createElement(s.Link,{to:"/download",className:"download-link"},"下載"),c.a.createElement(s.Link,{to:"/about",className:"about-link"},"日誌")))},data:a})};y.propTypes={children:i.a.node.isRequired};t.a=y},192:function(e,t){e.exports="data:image/png;base64,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"},208:function(e,t,n){e.exports=n.p+"static/decoration1-5c9a119045f4dc8577b163fecb7e2059.png"},209:function(e,t,n){e.exports=n.p+"static/decoration2-0c339e2755f6babe9f3e772c2bf4402b.png"},288:function(e,t,n){},289:function(e,t,n){var a={"./decoration1.png":208,"./decoration2.png":209,"./gatsby-astronaut.png":290,"./gatsby-icon.png":291,"./qrcode.png":192,"./role1-1-1.png":292,"./role1-1-2.png":293,"./role1-1.png":294,"./role1-2-1.png":295,"./role1-2-2.png":296,"./role1-2.png":297,"./role1.png":298,"./設計圖草稿.jpg":299};function r(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=289},290:function(e,t,n){e.exports=n.p+"static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa.png"},291:function(e,t,n){e.exports=n.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"},292:function(e,t,n){e.exports=n.p+"static/role1-1-1-3e44b3a649bfa59102ee391d66c832db.png"},293:function(e,t,n){e.exports=n.p+"static/role1-1-2-6ccd27558ed2f7d6dd237c1597fadbac.png"},294:function(e,t,n){e.exports=n.p+"static/role1-1-9d630f6d622776a01891474709477476.png"},295:function(e,t,n){e.exports=n.p+"static/role1-2-1-ef11159e242bc420794f5491780a9db3.png"},296:function(e,t,n){e.exports=n.p+"static/role1-2-2-3fe32e593e8acaae5454317f404f9923.png"},297:function(e,t,n){e.exports=n.p+"static/role1-2-98a0ae12c26822602d5871956d2b7f4e.png"},298:function(e,t,n){e.exports=n.p+"static/role1-089e5cb33f7fa47be5d463a9f2bb43a4.png"},299:function(e,t,n){e.exports=n.p+"static/設計圖草稿-7829bd81f0f698d7f34cdf122da05c90.jpg"}}]);
//# sourceMappingURL=component---src-pages-role-js-d26f0913c2327652e5b5.js.map