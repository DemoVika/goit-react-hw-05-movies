(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[229],{256:function(e,n,t){"use strict";t.d(n,{$Z:function(){return a},i:function(){return c},oK:function(){return u},wk:function(){return i},zR:function(){return s}});var r="https://api.themoviedb.org/",o={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk2MjJhZTQzN2U4YjE1ZDE0MjBiYmEwMThkZjMxMyIsInN1YiI6IjY0ZDVmYzc4ZGI0ZWQ2MDExYzRiYTcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_orMpemfH91hpKs_ou-jpluJjSPnErJapPgiAuLRlU"};function i(){return fetch("".concat(r,"3/trending/movie/day?language=en-US"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function c(e){return fetch("".concat(r,"3/movie/").concat(e,"?language=en-US"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function a(e){return fetch("".concat(r,"3/movie/").concat(e,"/credits?language=en-US"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function u(e){return fetch("".concat(r,"3/movie/").concat(e,"/reviews?language=en-US&page=1"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function s(e){return fetch("".concat(r,"3/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}},676:function(e,n,t){"use strict";var r=t(7),o=t.n(r),i=t(87),c=t(689),a=t(184),u=function(e){var n=e.moviesArray,t=(0,c.TH)();return(0,a.jsx)("main",{children:(0,a.jsx)("ul",{children:n.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})})};n.Z=u,u.protoTypes={moviesArray:o().arrayOf({title:o().string.isRequired,id:o().string.isRequired})}},229:function(e,n,t){"use strict";t.r(n);var r=t(439),o=t(676),i=t(791),c=t(256),a=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],u=n[1];return(0,i.useEffect)((function(){(0,c.wk)().then((function(e){u(e.results)})).catch((function(e){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e)}))}),[]),(0,a.jsxs)("main",{children:[(0,a.jsx)("h1",{children:"Trending today"}),t.length>0&&(0,a.jsx)(o.Z,{moviesArray:t})]})}},888:function(e,n,t){"use strict";var r=t(47);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},7:function(e,n,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=229.be9bb500.chunk.js.map