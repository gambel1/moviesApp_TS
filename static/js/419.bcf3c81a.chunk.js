"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[419],{389:(t,e,n)=>{n.d(e,{Pv:()=>i,_C:()=>s,_k:()=>c,kK:()=>l,sv:()=>d});var a=n(5294);const r="https://api.themoviedb.org/3",o="3ed700b5d7b679b57b749969c057aea5",c=async()=>await a.Z.get("".concat(r,"/trending/movie/day?api_key=").concat(o)).then((t=>t.data)),i=async t=>await a.Z.get("".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(t)).then((t=>t.data)),s=async t=>await a.Z.get("".concat(r,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US")).then((t=>t.data)),l=async t=>{try{return(await a.Z.get("".concat(r,"/movie/").concat(t,"/credits?api_key=").concat(o))).data}catch(e){throw new Error("Failed to retrieve data")}},d=async t=>{try{return(await a.Z.get("".concat(r,"/movie/").concat(t,"/reviews?api_key=").concat(o))).data}catch(e){throw new Error("Failed to retrieve data")}}},1018:(t,e,n)=>{n.d(e,{Z:()=>_});var a,r,o,c,i,s,l,d,p=n(168),h=n(7872),x=n(1087);const u=h.Z.h1(a||(a=(0,p.Z)(["\n  margin-bottom: 15px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 44px;\n"]))),g=h.Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 80px;\n"]))),v=h.Z.li(o||(o=(0,p.Z)(["\n  width: 370px;\n"]))),m=(0,h.Z)(x.OL)(c||(c=(0,p.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  :hover,\n  :focus {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.12), 5px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),f=h.Z.h2(i||(i=(0,p.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n\n  margin-bottom: 10px;\n  color: #000000;\n"]))),Z=h.Z.div(s||(s=(0,p.Z)(["\n  padding: 5px;\n  border-left: 1px solid;\n  border-bottom: 1px solid;\n  border-right: 1px solid;\n  color: rgba(0, 0, 0, 0.2);\n"]))),w=h.Z.p(l||(l=(0,p.Z)(["\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n  font-size: 20px;\n  text-align: center;\n\n  color: #000000;\n"]))),b=h.Z.span(d||(d=(0,p.Z)(["\n  font-size: 18px;\n"])));var y=n(7689),j=n(184);const k="https://image.tmdb.org/t/p/w500/";function _(t){let{movies:e}=t;const n=(0,y.TH)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u,{children:"Trending list"}),(0,j.jsx)(g,{children:e.map((t=>{let{id:e,title:a,poster:r,voteAverage:o,voteCount:c}=t;return(0,j.jsx)(v,{children:(0,j.jsxs)(m,{to:"/movies/".concat(e),state:{from:n},children:[(0,j.jsx)(f,{children:a||"Movie without a title"}),(0,j.jsx)("img",{src:"".concat(k).concat(r),alt:a}),(0,j.jsxs)(Z,{children:[(0,j.jsxs)(w,{children:["Vote average:"," ",(0,j.jsx)(b,{children:o})]}),(0,j.jsxs)(w,{children:["Vote count:",(0,j.jsxs)(b,{children:[" ",c]})]})]})]})},e)}))})]})}},5419:(t,e,n)=>{n.r(e),n.d(e,{default:()=>x});var a=n(389),r=n(7689),o=n(3478),c=n(5698),i=n(5264),s=n(184);const{Search:l}=o.default;function d(){const t=(0,r.TH)(),e=(0,r.s0)();return(0,s.jsx)("div",{children:(0,s.jsx)(c.Z,{children:(0,s.jsx)(l,{placeholder:"input search text",allowClear:!0,enterButton:"Search",size:"middle",onSearch:n=>{e({...t,search:"query=".concat(n)}),""!==n?setTimeout((()=>{i.Notify.success("Request successfull")}),300):i.Notify.warning("Enter something")},style:{width:"30%"}})})})}var p=n(1018),h=n(2791);function x(){var t;const{search:e}=(0,r.TH)(),n=null!==(t=new URLSearchParams(e).get("query"))&&void 0!==t?t:"",[o,c]=(0,h.useState)(null);return(0,h.useEffect)((()=>{""!==n&&(0,a.Pv)(n).then((t=>{let{results:e}=t;const n=e.map((t=>{let{id:e,original_title:n,poster_path:a,vote_average:r,vote_count:o}=t;return{id:e,title:n,poster:a,voteAverage:r,voteCount:o}}));c(n)}))}),[n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{}),o&&(0,s.jsx)("div",{children:(0,s.jsx)(p.Z,{movies:o})})]})}}}]);
//# sourceMappingURL=419.bcf3c81a.chunk.js.map