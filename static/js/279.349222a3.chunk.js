(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[279],{256:function(e,t,n){"use strict";n.d(t,{$Z:function(){return u},i:function(){return c},oK:function(){return a},wk:function(){return i},zR:function(){return s}});var r="https://api.themoviedb.org/",o={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk2MjJhZTQzN2U4YjE1ZDE0MjBiYmEwMThkZjMxMyIsInN1YiI6IjY0ZDVmYzc4ZGI0ZWQ2MDExYzRiYTcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_orMpemfH91hpKs_ou-jpluJjSPnErJapPgiAuLRlU"};function i(){return fetch("".concat(r,"3/trending/movie/day?language=en-US"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function c(e){return fetch("".concat(r,"3/movie/").concat(e,"?language=en-US"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function u(e){return fetch("".concat(r,"3/movie/").concat(e,"/credits?language=en-US"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function a(e){return fetch("".concat(r,"3/movie/").concat(e,"/reviews?language=en-US&page=1"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function s(e){return fetch("".concat(r,"3/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:o}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}},676:function(e,t,n){"use strict";var r=n(7),o=n.n(r),i=n(87),c=n(689),u=n(184),a=function(e){var t=e.moviesArray,n=(0,c.TH)();return(0,u.jsx)("main",{children:(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})})};t.Z=a,a.protoTypes={moviesArray:o().arrayOf({title:o().string.isRequired,id:o().string.isRequired})}},279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(439),o=n(791),i=n(87),c=n(256),u=n(7),a=n.n(u),s=n(184),f=function(e){var t=e.handleSubmit;return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e.target.query.value)},children:[(0,s.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Search movie",name:"query",autoComplete:"off"}),(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)("span",{children:"Search"})})]})},h=f;f.protoTypes={handleSubmit:a().func.isRequired};var l=n(676),p=function(){var e=(0,i.lr)(),t=(0,r.Z)(e,2),n=t[0],u=t[1],a=(0,o.useState)([]),f=(0,r.Z)(a,2),p=f[0],d=f[1],m=(0,o.useState)(!1),y=(0,r.Z)(m,2),j=y[0],v=y[1];return(0,o.useEffect)((function(){var e=n.get("query");e&&(console.log("query",e),(0,c.zR)(e).then((function(e){d(e.results),v(!0)})).catch((function(e){v(!0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e)})))}),[n]),(0,s.jsxs)("div",{children:[(0,s.jsx)(h,{handleSubmit:function(e){u({query:e})}}),p.length>0?(0,s.jsx)(l.Z,{moviesArray:p}):j&&"We have no this movie"]})}},888:function(e,t,n){"use strict";var r=n(47);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=279.349222a3.chunk.js.map