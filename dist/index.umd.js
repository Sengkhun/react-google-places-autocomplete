!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactGooglePlacesAutocomplete=t():e.ReactGooglePlacesAutocomplete=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=n(6)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLatLng=t.geocodeByPlaceId=t.geocodeByAddress=void 0;var o,r=n(2),i=(o=r)&&o.__esModule?o:{default:o},u=n(16);t.geocodeByAddress=u.geocodeByAddress,t.geocodeByPlaceId=u.geocodeByPlaceId,t.getLatLng=u.getLatLng,t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(3),u=f(i),a=f(n(0)),s=f(n(8)),l=f(n(9)),c=n(10);function f(e){return e&&e.__esModule?e:{default:e}}n(11);var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.debouncedFetchSuggestions=(0,l.default)(n.fetchSuggestions,n.props.debounce),n.fetchSuggestions=function(e){var t=n.props.autocompletionRequest;n.setState({loading:!0}),n.placesService.getPlacePredictions(o({},(0,s.default)(t),{input:e}),n.fetchSuggestionsCallback)},n.state={activeSuggestion:null,loading:!1,placesServiceStatus:null,suggestions:[],value:e.initialValue},n.changeActiveSuggestion=n.changeActiveSuggestion.bind(n),n.changeValue=n.changeValue.bind(n),n.clearSuggestions=n.clearSuggestions.bind(n),n.fetchSuggestions=n.fetchSuggestions.bind(n),n.fetchSuggestionsCallback=n.fetchSuggestionsCallback.bind(n),n.handleClick=n.handleClick.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n.initalizeService=n.initializeService.bind(n),n.onSuggestionSelect=n.onSuggestionSelect.bind(n),n.renderInput=n.renderInput.bind(n),n.renderSuggestions=n.renderSuggestions.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"componentDidMount",value:function(){this.initalizeService(),document.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick)}},{key:"componentWillReceiveProps",value:function(e){e.initialValue&&this.setState({value:e.initialValue})}},{key:"handleClick",value:function(e){e.target.id.includes("google-places-autocomplete")||this.clearSuggestions()}},{key:"changeValue",value:function(e){this.setState({value:e});var t=this.props.debounce;e.length>0?-1!==t&&this.debouncedFetchSuggestions(e):this.setState({suggestions:[]})}},{key:"initializeService",value:function(){var e=this;return window.google?window.google.maps?window.google.maps.places?(this.placesService=new window.google.maps.places.AutocompleteService,void this.setState({placesServiceStatus:window.google.maps.places.PlacesServiceStatus.OK})):(console.error("[react-google-places-autocomplete]: Google maps places script not loaded"),void setTimeout(function(){e.initializeService()},1e3)):(console.error("[react-google-places-autocomplete]: Google maps script not loaded"),void setTimeout(function(){e.initalizeService()},1e3)):(console.error("[react-google-places-autocomplete]: Google script not loaded"),void setTimeout(function(){e.initalizeService()},1e3))}},{key:"renderInput",value:function(){var e=this,t=this.state.value,n=this.props,o=n.inputClassName,r=n.inputStyle,i=n.placeholder,a=n.renderInput,s=n.required;return a?a({autoComplete:"off",id:"google-places-autocomplete-input",value:t,onChange:function(t){var n=t.target;return e.changeValue(n.value)},onKeyDown:this.handleKeyDown,type:"text",placeholder:i,required:s,fetchSuggestions:function(){return e.fetchSuggestions(t)}}):u.default.createElement("input",{autoComplete:"off",className:o||"google-places-autocomplete__input",id:"google-places-autocomplete-input",onChange:function(t){var n=t.target;return e.changeValue(n.value)},onKeyDown:this.handleKeyDown,placeholder:i,style:r,type:"text",value:t})}},{key:"renderSuggestions",value:function(){var e=this,t=this.state,n=t.activeSuggestion,o=t.suggestions,r=this.props,i=r.renderSuggestions,a=r.suggestionsClassNames,s=r.suggestionsStyles;return 0===o.length?null:i?i(n,o,this.onSuggestionSelect):u.default.createElement("div",{id:"google-places-suggestions-container",className:a.container||"google-places-autocomplete__suggestions-container",style:s.container},o.map(function(t,o){return u.default.createElement("div",{id:"google-places-autocomplete-suggestion--"+o,key:t.id,className:(a.suggestion||"google-places-autocomplete__suggestion")+" "+(n===o?a.suggestionActive||"google-places-autocomplete__suggestion--active":""),style:s.suggestion,onClick:function(n){return e.onSuggestionSelect(t,n)},role:"presentation"},t.description)}))}},{key:"renderLoader",value:function(){var e=this.props.loader;return e||u.default.createElement("div",{className:"google-places-autocomplete__suggestions-container"},u.default.createElement("div",{className:"google-places-autcomplete__suggestions"},"Loading..."))}},{key:"onSuggestionSelect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&t.stopPropagation();var n=this.props.onSelect;this.setState({activeSuggestion:null,suggestions:[],value:e.description}),n(e)}},{key:"fetchSuggestionsCallback",value:function(e,t){this.state.placesServiceStatus;this.setState({loading:!1,suggestions:e||[]})}},{key:"handleKeyDown",value:function(e){var t=this.state,n=t.activeSuggestion,o=t.suggestions,r=t.value;switch(e.key){case"Enter":e.preventDefault(),null!==n?this.onSuggestionSelect(o[n]):r.length>0&&this.fetchSuggestions(r);break;case"ArrowDown":this.changeActiveSuggestion(1);break;case"ArrowUp":this.changeActiveSuggestion(-1);break;case"Escape":this.clearSuggestions()}}},{key:"clearSuggestions",value:function(){this.setState({activeSuggestion:null,suggestions:[]})}},{key:"changeActiveSuggestion",value:function(e){if(0!==this.state.suggestions.length)switch(e){case 1:this.setState(function(e){var t=e.activeSuggestion,n=e.suggestions;return null===t||t===n.length-1?{activeSuggestion:0}:{activeSuggestion:t+1}});break;case-1:this.setState(function(e){var t=e.activeSuggestion,n=e.suggestions;return t?{activeSuggestion:t-1}:{activeSuggestion:n.length-1}})}}},{key:"render",value:function(){var e=this.state.loading;return u.default.createElement("div",{className:"google-places-autocomplete"},this.renderInput(),e?this.renderLoader():this.renderSuggestions())}}]),t}();p.propTypes={autocompletionRequest:c.autocompletionRequestType,debounce:a.default.number,initialValue:a.default.string,inputClassName:a.default.string,inputStyle:a.default.object,loader:a.default.node,onSelect:a.default.func,placeholder:a.default.string,renderInput:a.default.func,renderSuggestions:a.default.func,suggestionsClassNames:c.suggestionClassNamesType,suggestionsStyles:c.suggestionStylesType,required:a.default.bool},p.defaultProps={autocompletionRequest:{},debounce:-1,initialValue:"",inputClassName:"",inputStyle:{},loader:null,onSelect:function(){},placeholder:"Address",renderInput:void 0,renderSuggestions:void 0,suggestionsClassNames:{container:"",suggestion:"",suggestionActive:""},suggestionsStyles:{container:{},suggestion:{}},required:!1},t.default=p},function(e,t,n){"use strict";e.exports=n(4)},function(e,t,n){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(5),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,g=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);!function(e,t,n,o,r,i,u,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,r,i,u,a],l=0;(e=Error(t.replace(/%s/g,function(){return s[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function w(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||b}function _(){}function O(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=w.prototype;var j=O.prototype=new _;j.constructor=O,o(j,w.prototype),j.isPureReactComponent=!0;var k={current:null},x={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var o=void 0,r={},u=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)C.call(t,o)&&!P.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===r[o]&&(r[o]=s[o]);return{$$typeof:i,type:e,key:u,ref:a,props:r,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var A=/\/+/g,T=[];function L(e,t,n,o){if(T.length){var r=T.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function U(e,t,n){return null==e?0:function e(t,n,o,r){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var s=!1;if(null===t)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case i:case u:s=!0}}if(s)return o(r,t,""===n?"."+M(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var c=n+M(a=t[l],l);s+=e(a,c,o,r)}else if(c=null===t||"object"!=typeof t?null:"function"==typeof(c=h&&t[h]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),l=0;!(a=t.next()).done;)s+=e(a=a.value,c=n+M(a,l++),o,r);else"object"===a&&m("31","[object Object]"==(o=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":o,"");return s}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,o,n,function(e){return e}):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+n)),o.push(e))}function q(e,t,n,o,r){var i="";null!=n&&(i=(""+n).replace(A,"$&/")+"/"),U(e,$,t=L(t,i,o,r)),I(t)}function B(){var e=k.current;return null===e&&m("321"),e}var D={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return q(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;U(e,N,t=L(null,null,t,n)),I(t)},count:function(e){return U(e,function(){return null},null)},toArray:function(e){var t=[];return q(e,t,null,function(e){return e}),t},only:function(e){return E(e)||m("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,n){return B().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,n){return B().useReducer(e,t,n)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:a,StrictMode:s,Suspense:g,createElement:R,cloneElement:function(e,t,n){null==e&&m("267",e);var r=void 0,u=o({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,l=x.current),void 0!==t.key&&(a=""+t.key);var c=void 0;for(r in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)C.call(t,r)&&!P.hasOwnProperty(r)&&(u[r]=void 0===t[r]&&void 0!==c?c[r]:t[r])}if(1===(r=arguments.length-2))u.children=n;else if(1<r){c=Array(r);for(var f=0;f<r;f++)c[f]=arguments[f+2];u.children=c}return{$$typeof:i,type:e.type,key:a,ref:s,props:u,_owner:l}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:x,assign:o}},V={default:D},z=V&&D||V;e.exports=z.default||z},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))r.call(n,l)&&(a[l]=n[l]);if(o){u=o(n);for(var c=0;c<u.length;c++)i.call(n,u[c])&&(a[u[c]]=n[u[c]])}}return a}},function(e,t,n){"use strict";var o=n(7);function r(){}e.exports=function(){function e(e,t,n,r,i,u){if(u!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=function(e){var t=o({},e);return e.bounds&&(t.bounds=new(Function.prototype.bind.apply(google.maps.LatLngBounds,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.bounds))))),e.location&&(t.location=new google.maps.LatLng(e.location)),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n=void 0,o=void 0;return function(){var r=this,i=arguments;return clearTimeout(n),!(n=setTimeout(function(){n=null,o=e.apply(r,i)},t))&&(o=e.apply(r,i)),o}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suggestionStylesType=t.suggestionClassNamesType=t.autocompletionRequestType=void 0;var o,r=n(0),i=(o=r)&&o.__esModule?o:{default:o};var u=i.default.shape({country:i.default.oneOfType([i.default.string,i.default.arrayOf(i.default.string)])}),a=i.default.shape({lat:i.default.number,lng:i.default.number});t.autocompletionRequestType=i.default.shape({bounds:function(e,t,n){var o=e[t];return o?Array.isArray(o)&&2===o.length&&o.every(function(e){return 2===Object.keys(e).length&&e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")&&Number.isInteger(e.lat)&&Number.isInteger(e.lng)})?null:new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null},componentRestrictions:u,location:a,offset:i.default.number,radius:i.default.number,types:i.default.arrayOf(i.default.string)}),t.suggestionClassNamesType=i.default.shape({container:i.default.string,suggestion:i.default.string,suggestionActive:i.default.string}),t.suggestionStylesType=i.default.shape({container:i.default.object,suggestion:i.default.object})},function(e,t,n){var o=n(12);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(14)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(13)(!1)).push([e.i,".google-places-autocomplete {\n  width: 100%;\n  position: relative;\n}\n\n.google-places-autocomplete__input {\n  width: calc(100% - 20px);\n  padding: 10px;\n  border: none;\n  margin-bottom: 2px;\n  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.09);\n}\n\n.google-places-autocomplete__input:active,\n.google-places-autocomplete__input:focus,\n.google-places-autocomplete__input:hover {\n  outline: none;\n  border: none;\n}\n\n.google-places-autocomplete__suggestions-container {\n  background: white;\n  border-radius: 0 0 5px 5px;\n  color: black;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.09);\n}\n\n.google-places-autocomplete__suggestion {\n  font-size: 1rem;\n  text-align: left;\n  padding: 10px;\n}\n\n.google-places-autocomplete__suggestion--active {\n  background: #e0e3e7;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(u=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var u;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<e.length;r++){var u=e[r];null!=u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(e,t,n){var o,r,i={},u=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),s=null,l=0,c=[],f=n(15);function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var u=0;u<r.parts.length;u++)r.parts[u](o.parts[u]);for(;u<o.parts.length;u++)r.parts.push(m(o.parts[u],t))}else{var a=[];for(u=0;u<o.parts.length;u++)a.push(m(o.parts[u],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],u=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[u]?o[u].parts.push(a):n.push(o[u]={id:u,parts:[a]})}return n}function g(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return h(t,e.attrs),g(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var u=l++;n=s||(s=v(t)),o=w.bind(null,n,u,!1),r=w.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),g(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var u=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(u),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){y(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=u()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var u=n[r];(a=i[u.id]).refs--,o.push(a)}e&&p(d(e,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}};var b,S=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=S(t,r);else{var i=document.createTextNode(r),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.geocodeByAddress=function(e){var t=new window.google.maps.Geocoder,n=window.google.maps.GeocoderStatus.OK;return new Promise(function(o,r){t.geocode({address:e},function(e,t){return t!==n?r(t):o(e)})})},t.getLatLng=function(e){return new Promise(function(t,n){try{return t({lat:e.geometry.location.lat(),lng:e.geometry.location.lng()})}catch(e){return n(e)}})},t.geocodeByPlaceId=function(e){var t=new window.google.maps.Geocoder,n=window.google.maps.GeocoderStatus.OK;return new Promise(function(o,r){t.geocode({placeId:e},function(e,t){return t!==n?r(t):o(e)})})}}])});
//# sourceMappingURL=index.umd.js.map