!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var n=t("object"===typeof exports?require("react"):e.react);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?y=d.concat(y):v=-1,y.length&&u())}function u(){if(!m){var e=o(i);m=!0;for(var t=y.length;t;){for(d=y,y=[];++v<t;)d&&d[v].run();v=-1,t=y.length}d=null,m=!1,a(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var c,f,p=e.exports={};!function(){try{c="function"===typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"===typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,y=[],m=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new l(e,t)),1!==y.length||m||o(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"===typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n,r,a,i,u){var l=-a*(t-r),s=-i*n,c=l+s,f=n+c*e,p=t+f*e;return Math.abs(f)<u&&Math.abs(p-r)<u?(o[0]=r,o[1]=0,o):(o[0]=p,o[1]=f,o)}t.__esModule=!0,t.default=r;var o=[0,0];e.exports=t.default},function(e,t,n){(function(t){(function(){var n,r,o;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(0))},function(e,t,n){(function(t){for(var r=n(15),o="undefined"===typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",u=o["request"+i],l=o["cancel"+i]||o["cancelRequest"+i],s=0;!u&&s<a.length;s++)u=o[a[s]+"Request"+i],l=o[a[s]+"Cancel"+i]||o[a[s]+"CancelRequest"+i];if(!u||!l){var c=0,f=0,p=[];u=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=l}}).call(t,n(14))},function(e,t,n){"use strict";function r(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var o="number"===typeof t[r]?t[r]:t[r].val;if(e[r]!==o)return!1}return!0}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r};e.exports=n(16)(o,!0)}else e.exports=n(19)()}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=n.n(i),l=n(12),s=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f.call(n),n.state={isReady:!1},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0}),window.addEventListener("resize",this.adjustContainer,!1)}},{key:"render",value:function(){var e=this.props.children;return this.state.isReady?(this.props.fullHeight&&(this.props.containerStyle.height=window.innerHeight),u.a.createElement("div",{ref:"container",style:this.props.containerStyle}," ",e," ")):u.a.createElement("div",null,"Parallax hover is not yet ready.")}}]),t}(u.a.Component);c.Layer=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updatePosition=function(e){n.resizeTimeout||(n.resizeTimeout=setTimeout(function(){n.resizeTimeout=null;var t=n.config.xFactor,r=n.config.yFactor,o=r*(e.view.innerHeight/2-e.clientY),a=t*(e.view.innerWidth/2-e.clientX);n.setState({toStyle:{x:Object(l.spring)(a,n.config.springSettings),y:Object(l.spring)(o,n.config.springSettings)}})},2e3))},n.resizeTimeout=!1,n.config=n.props.config,n.state={toStyle:{y:0,x:0}},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){window.addEventListener("mousemove",this.updatePosition,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousemove",this.updatePosition,!1),window.removeEventListener("resize",this.adjustContainer,!1)}},{key:"render",value:function(){var e=this,t=this.props.children;return u.a.createElement(l.Motion,{style:this.state.toStyle},function(n){return u.a.createElement("div",{ref:"layer",style:Object.assign({transform:"translate3d("+n.x+"px, "+n.y+"px, 0)"},e.props.layerStyle)},t)})}}]),t}(u.a.Component);var f=function(){var e=this;this.adjustContainer=function(t){e.setState({height:Object(l.spring)(t.currentTarget.innerHeight)})}};t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var o=n(13);t.Motion=r(o);var a=n(20);t.StaggeredMotion=r(a);var i=n(21);t.TransitionMotion=r(i);var u=n(23);t.spring=r(u);var l=n(10);t.presets=r(l);var s=n(2);t.stripStyle=r(s);var c=n(24);t.reorderKeys=r(c)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3),s=r(l),c=n(2),f=r(c),p=n(4),d=r(p),y=n(5),m=r(y),v=n(6),h=r(v),b=n(7),g=r(b),w=n(1),O=r(w),S=n(8),T=r(S),I=1e3/60,P=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=r.state,o=n.currentStyle,a=n.currentVelocity,u=n.lastIdealStyle,l=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"===typeof c&&(t||(t=!0,o=i({},o),a=i({},a),u=i({},u),l=i({},l)),o[s]=c,a[s]=0,u[s]=c,l[s]=0)}t&&r.setState({currentStyle:o,currentVelocity:a,lastIdealStyle:u,lastIdealVelocity:l})},this.startAnimationIfNecessary=function(){r.animationID=h.default(function(e){var t=r.props.style;if(g.default(r.state.currentStyle,t,r.state.currentVelocity))return r.wasAnimating&&r.props.onRest&&r.props.onRest(),r.animationID=null,r.wasAnimating=!1,void(r.accumulatedTime=0);r.wasAnimating=!0;var n=e||m.default(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*I&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/I)*I)/I,i=Math.floor(r.accumulatedTime/I),u={},l={},s={},c={};for(var f in t)if(Object.prototype.hasOwnProperty.call(t,f)){var p=t[f];if("number"===typeof p)s[f]=p,c[f]=0,u[f]=p,l[f]=0;else{for(var y=r.state.lastIdealStyle[f],v=r.state.lastIdealVelocity[f],h=0;h<i;h++){var b=d.default(I/1e3,y,v,p.val,p.stiffness,p.damping,p.precision);y=b[0],v=b[1]}var w=d.default(I/1e3,y,v,p.val,p.stiffness,p.damping,p.precision),O=w[0],S=w[1];s[f]=y+(O-y)*a,c[f]=v+(S-v)*a,u[f]=y,l[f]=v}}r.animationID=null,r.accumulatedTime-=i*I,r.setState({currentStyle:s,currentVelocity:c,lastIdealStyle:u,lastIdealVelocity:l}),r.unreadPropStyle=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return a(t,e),u(t,null,[{key:"propTypes",value:{defaultStyle:T.default.objectOf(T.default.number),style:T.default.objectOf(T.default.oneOfType([T.default.number,T.default.object])).isRequired,children:T.default.func.isRequired,onRest:T.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||f.default(n),o=s.default(r);return{currentStyle:r,currentVelocity:o,lastIdealStyle:r,lastIdealVelocity:o}},t.prototype.componentDidMount=function(){this.prevTime=m.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=m.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(h.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&O.default.Children.only(e)},t}(O.default.Component);t.default=P,e.exports=t.default},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){(function(){var n,r,o,a,i,u;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},a=n(),u=1e9*t.uptime(),i=a-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(17),a=n(9),i=n(18),u=function(){};"production"!==t.env.NODE_ENV&&(u=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function l(e){var t=e&&(j&&e[j]||e[_]);if("function"===typeof t)return t}function s(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function c(e){this.message=e,this.stack=""}function f(e){function r(r,l,s,f,p,d,y){if(f=f||k,d=d||s,y!==a){if(n){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==t.env.NODE_ENV&&"undefined"!==typeof console){var v=f+":"+s;!o[v]&&i<3&&(u("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[v]=!0,i++)}}return null==l[s]?r?new c(null===l[s]?"The "+p+" `"+d+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(l,s,f,p,d)}if("production"!==t.env.NODE_ENV)var o={},i=0;var l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function p(e){function t(t,n,r,o,a,i){var u=t[n];if(S(u)!==e)return new c("Invalid "+o+" `"+a+"` of type `"+T(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function d(e){function t(t,n,r,o,i){if("function"!==typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new c("Invalid "+o+" `"+i+"` of type `"+S(u)+"` supplied to `"+r+"`, expected an array.")}for(var l=0;l<u.length;l++){var s=e(u,l,r,o,i+"["+l+"]",a);if(s instanceof Error)return s}return null}return f(t)}function y(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||k;return new c("Invalid "+o+" `"+a+"` of type `"+P(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return f(t)}function m(e){function n(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(s(i,e[u]))return null;return new c("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV&&u("Invalid argument supplied to oneOf, expected an instance of array."),r)}function v(e){function t(t,n,r,o,i){if("function"!==typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],l=S(u);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(u.hasOwnProperty(s)){var f=e(u,s,r,o,i+"."+s,a);if(f instanceof Error)return f}return null}return f(t)}function h(e){function n(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,a))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&u("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var i=e[o];if("function"!==typeof i)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+I(i)+" at index "+o+"."),r}return f(n)}function b(e){function t(t,n,r,o,i){var u=t[n],l=S(u);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(u,s,r,o,i+"."+s,a);if(p)return p}}return null}return f(t)}function g(e){function t(t,n,r,i,u){var l=t[n],s=S(l);if("object"!==s)return new c("Invalid "+i+" `"+u+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=o({},t[n],e);for(var p in f){var d=e[p];if(!d)return new c("Invalid "+i+" `"+u+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(l,p,r,i,u+"."+p,a);if(y)return y}return null}return f(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var n=l(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!w(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!w(a[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}function S(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function T(e){if("undefined"===typeof e||null===e)return""+e;var t=S(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function I(e){var t=T(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function P(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var j="function"===typeof Symbol&&Symbol.iterator,_="@@iterator",k="<<anonymous>>",x={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r)}(),arrayOf:d,element:function(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){return new c("Invalid "+o+" `"+a+"` of type `"+S(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:y,node:function(){function e(e,t,n,r,o){return w(e[t])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:v,oneOf:m,oneOfType:h,shape:b,exact:g};return c.prototype=Error.prototype,x.checkPropTypes=i,x.PropTypes=x,x}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,l=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)a.call(n,c)&&(l[c]=n[c]);if(o){u=o(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},function(e,t,n){"use strict";(function(t){function r(e,n,r,u,l){if("production"!==t.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var c;try{if("function"!==typeof e[s]){var f=Error((u||"React class")+": "+r+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw f.name="Invariant Violation",f}c=e[s](n,s,u,r,null,a)}catch(e){c=e}if(!c||c instanceof Error||o((u||"React class")+": type specification of "+r+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in i)){i[c.message]=!0;var p=l?l():"";o("Failed "+r+" type: "+c.message+(null!=p?p:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var a=n(9),i={};o=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";function r(){}var o=n(9);e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){for(var r=0;r<e.length;r++)if(!w.default(e[r],t[r],n[r]))return!1;return!0}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),c=r(s),f=n(2),p=r(f),d=n(4),y=r(d),m=n(5),v=r(m),h=n(6),b=r(h),g=n(7),w=r(g),O=n(1),S=r(O),T=n(8),I=r(T),P=1e3/60,j=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=r.state,n=t.currentStyles,o=t.currentVelocities,a=t.lastIdealStyles,i=t.lastIdealVelocities,l=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"===typeof d&&(f||(f=!0,l=!0,n[s]=u({},n[s]),o[s]=u({},o[s]),a[s]=u({},a[s]),i[s]=u({},i[s])),n[s][p]=d,o[s][p]=0,a[s][p]=d,i[s][p]=0)}}l&&r.setState({currentStyles:n,currentVelocities:o,lastIdealStyles:a,lastIdealVelocities:i})},this.startAnimationIfNecessary=function(){r.animationID=b.default(function(e){var t=r.props.styles(r.state.lastIdealStyles);if(i(r.state.currentStyles,t,r.state.currentVelocities))return r.animationID=null,void(r.accumulatedTime=0);var n=e||v.default(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*P&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/P)*P)/P,u=Math.floor(r.accumulatedTime/P),l=[],s=[],c=[],f=[],p=0;p<t.length;p++){var d=t[p],m={},h={},b={},g={};for(var w in d)if(Object.prototype.hasOwnProperty.call(d,w)){var O=d[w];if("number"===typeof O)m[w]=O,h[w]=0,b[w]=O,g[w]=0;else{for(var S=r.state.lastIdealStyles[p][w],T=r.state.lastIdealVelocities[p][w],I=0;I<u;I++){var j=y.default(P/1e3,S,T,O.val,O.stiffness,O.damping,O.precision);S=j[0],T=j[1]}var _=y.default(P/1e3,S,T,O.val,O.stiffness,O.damping,O.precision),k=_[0],x=_[1];m[w]=S+(k-S)*a,h[w]=T+(x-T)*a,b[w]=S,g[w]=T}}c[p]=m,f[p]=h,l[p]=b,s[p]=g}r.animationID=null,r.accumulatedTime-=u*P,r.setState({currentStyles:c,currentVelocities:f,lastIdealStyles:l,lastIdealVelocities:s}),r.unreadPropStyles=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return a(t,e),l(t,null,[{key:"propTypes",value:{defaultStyles:I.default.arrayOf(I.default.objectOf(I.default.number)),styles:I.default.func.isRequired,children:I.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(p.default),o=r.map(function(e){return c.default(e)});return{currentStyles:r,currentVelocities:o,lastIdealStyles:r,lastIdealVelocities:o}},t.prototype.componentDidMount=function(){this.prevTime=v.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=v.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(b.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&S.default.Children.only(e)},t}(S.default.Component);t.default=j,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var o=0;o<r.length;o++)if(r[o].key===e.key)return{key:r[o].key,data:r[o].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function u(e,t,n,r){if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(r[o].key!==t[o].key)return!1;for(var o=0;o<r.length;o++)if(!I.default(e[o],t[o].style,n[o]))return!1;return!0}function l(e,t,n,r,o,a,i,u,l){for(var s=b.default(r,o,function(e,r){var o=t(r);return null==o?(n({key:r.key,data:r.data}),null):I.default(a[e],o,i[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:o}}),c=[],f=[],d=[],y=[],m=0;m<s.length;m++){for(var v=s[m],h=null,g=0;g<r.length;g++)if(r[g].key===v.key){h=g;break}if(null==h){var w=e(v);c[m]=w,d[m]=w;var O=p.default(v.style);f[m]=O,y[m]=O}else c[m]=a[h],d[m]=u[h],f[m]=i[h],y[m]=l[h]}return[s,c,f,d,y]}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(3),p=r(f),d=n(2),y=r(d),m=n(4),v=r(m),h=n(22),b=r(h),g=n(5),w=r(g),O=n(6),S=r(O),T=n(7),I=r(T),P=n(1),j=r(P),_=n(8),k=r(_),x=1e3/60,E=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=l(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,e,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),n=t[0],o=t[1],a=t[2],i=t[3],u=t[4],c=0;c<e.length;c++){var f=e[c].style,p=!1;for(var d in f)if(Object.prototype.hasOwnProperty.call(f,d)){var y=f[d];"number"===typeof y&&(p||(p=!0,o[c]=s({},o[c]),a[c]=s({},a[c]),i[c]=s({},i[c]),u[c]=s({},u[c]),n[c]={key:n[c].key,data:n[c].data,style:s({},n[c].style)}),o[c][d]=y,a[c][d]=0,i[c][d]=y,u[c][d]=0,n[c].style[d]=y)}}r.setState({currentStyles:o,currentVelocities:a,mergedPropsStyles:n,lastIdealStyles:i,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){r.unmounting||(r.animationID=S.default(function(e){if(!r.unmounting){var t=r.props.styles,n="function"===typeof t?t(i(r.state.mergedPropsStyles,r.unreadPropStyles,r.state.lastIdealStyles)):t;if(u(r.state.currentStyles,n,r.state.currentVelocities,r.state.mergedPropsStyles))return r.animationID=null,void(r.accumulatedTime=0);var o=e||w.default(),a=o-r.prevTime;if(r.prevTime=o,r.accumulatedTime=r.accumulatedTime+a,r.accumulatedTime>10*x&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var s=(r.accumulatedTime-Math.floor(r.accumulatedTime/x)*x)/x,c=Math.floor(r.accumulatedTime/x),f=l(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,n,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),p=f[0],d=f[1],y=f[2],m=f[3],h=f[4],b=0;b<p.length;b++){var g=p[b].style,O={},S={},T={},I={};for(var P in g)if(Object.prototype.hasOwnProperty.call(g,P)){var j=g[P];if("number"===typeof j)O[P]=j,S[P]=0,T[P]=j,I[P]=0;else{for(var _=m[b][P],k=h[b][P],E=0;E<c;E++){var D=v.default(x/1e3,_,k,j.val,j.stiffness,j.damping,j.precision);_=D[0],k=D[1]}var V=v.default(x/1e3,_,k,j.val,j.stiffness,j.damping,j.precision),N=V[0],M=V[1];O[P]=_+(N-_)*s,S[P]=k+(M-k)*s,T[P]=_,I[P]=k}}m[b]=T,h[b]=I,d[b]=O,y[b]=S}r.animationID=null,r.accumulatedTime-=c*x,r.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:m,lastIdealVelocities:h,mergedPropsStyles:p}),r.unreadPropStyles=null,r.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return a(t,e),c(t,null,[{key:"propTypes",value:{defaultStyles:k.default.arrayOf(k.default.shape({key:k.default.string.isRequired,data:k.default.any,style:k.default.objectOf(k.default.number).isRequired})),styles:k.default.oneOfType([k.default.func,k.default.arrayOf(k.default.shape({key:k.default.string.isRequired,data:k.default.any,style:k.default.objectOf(k.default.oneOfType([k.default.number,k.default.object])).isRequired}))]).isRequired,children:k.default.func.isRequired,willEnter:k.default.func,willLeave:k.default.func,didLeave:k.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return y.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,o=e.willLeave,a=e.didLeave,i="function"===typeof n?n(t):n,u=void 0;u=null==t?i:t.map(function(e){for(var t=0;t<i.length;t++)if(i[t].key===e.key)return i[t];return e});var s=null==t?i.map(function(e){return y.default(e.style)}):t.map(function(e){return y.default(e.style)}),c=null==t?i.map(function(e){return p.default(e.style)}):t.map(function(e){return p.default(e.style)}),f=l(r,o,a,u,i,s,c,s,c),d=f[0];return{currentStyles:f[1],currentVelocities:f[2],lastIdealStyles:f[3],lastIdealVelocities:f[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=w.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"===typeof t?t(i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=w.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(S.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&j.default.Children.only(t)},t}(j.default.Component);t.default=E,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n){for(var r={},o=0;o<e.length;o++)r[e[o].key]=o;for(var a={},o=0;o<t.length;o++)a[t[o].key]=o;for(var i=[],o=0;o<t.length;o++)i[o]=t[o];for(var o=0;o<e.length;o++)if(!Object.prototype.hasOwnProperty.call(a,e[o].key)){var u=n(o,e[o]);null!=u&&i.push(u)}return i.sort(function(e,n){var o=a[e.key],i=a[n.key],u=r[e.key],l=r[n.key];if(null!=o&&null!=i)return a[e.key]-a[n.key];if(null!=u&&null!=l)return r[e.key]-r[n.key];if(null!=o){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(o<a[c]&&l>r[c])return-1;if(o>a[c]&&l<r[c])return 1}}return 1}for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(i<a[c]&&u>r[c])return 1;if(i>a[c]&&u<r[c])return-1}}return-1})}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){return o({},u,t,{val:e})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r;var a=n(10),i=function(e){return e&&e.__esModule?e:{default:e}}(a),u=o({},i.default.noWobble,{precision:.01});e.exports=t.default},function(e,t,n){"use strict";(function(n){function r(){"development"===n.env.NODE_ENV&&(o||(o=!0,console.error("`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API.")))}t.__esModule=!0,t.default=r;var o=!1;e.exports=t.default}).call(t,n(0))}])});