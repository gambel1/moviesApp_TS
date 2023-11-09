"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[135],{389:(n,e,t)=>{t.d(e,{Pv:()=>s,_C:()=>c,_k:()=>o,kK:()=>l,sv:()=>d});var i=t(5294);const a="https://api.themoviedb.org/3",r="3ed700b5d7b679b57b749969c057aea5",o=async()=>await i.Z.get("".concat(a,"/trending/movie/day?api_key=").concat(r)).then((n=>n.data)),s=async n=>await i.Z.get("".concat(a,"/search/movie?api_key=").concat(r,"&query=").concat(n)).then((n=>n.data)),c=async n=>await i.Z.get("".concat(a,"/movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((n=>n.data)),l=async n=>{try{return(await i.Z.get("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(r))).data}catch(e){throw new Error("Failed to retrieve data")}},d=async n=>{try{return(await i.Z.get("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(r))).data}catch(e){throw new Error("Failed to retrieve data")}}},3135:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Q});var i,a,r,o,s,c,l,d,h,x,p,g,v,m,f,Z,j,u=t(168),b=t(7872),w=t(1087),y=t(9410);const k=(0,b.Z)(y.ZP)(i||(i=(0,u.Z)(["\n  margin-bottom: 10px;\n"]))),_=b.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 30px;\n  margin-bottom: 80px;\n"]))),z=b.Z.h2(r||(r=(0,u.Z)(["\n  text-align: center;\n  margin-bottom: 5px;\n"]))),C=b.Z.li(o||(o=(0,u.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"]))),A=b.Z.h4(s||(s=(0,u.Z)(["\n  font-size: inherit;\n  font-weight: 600;\n  margin-right: 46px;\n"]))),I=b.Z.p(c||(c=(0,u.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5714285714285714;\n  color: rgba(0, 0, 0, 0.45);\n"]))),D=b.Z.div(l||(l=(0,u.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 5px;\n"]))),E=b.Z.h4(d||(d=(0,u.Z)(["\n  font-size: inherit;\n  font-weight: 600;\n"]))),F=b.Z.p(h||(h=(0,u.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5714285714285714;\n  color: rgba(0, 0, 0, 0.45);\n"]))),S=b.Z.ul(x||(x=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),G=b.Z.li(p||(p=(0,u.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),L=b.Z.li(g||(g=(0,u.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),O=b.Z.h4(v||(v=(0,u.Z)(["\n  font-size: inherit;\n  font-weight: 600;\n"]))),P=b.Z.p(m||(m=(0,u.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5714285714285714;\n  color: rgba(0, 0, 0, 0.45);\n"]))),T=b.Z.h3(f||(f=(0,u.Z)(["\n  margin-bottom: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 7px 15px;\n\n  width: fit-content;\n  border-radius: 2px;\n  color: #ffffff;\n  background-color: #2f364a;\n"]))),U=b.Z.li(Z||(Z=(0,u.Z)(["\n  margin-bottom: 5px;\n"]))),V=(0,b.Z)(w.OL)(j||(j=(0,u.Z)(["\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #000000;\n\n  :hover {\n    color: red;\n  }\n"])));var W=t(7689),q=t(3440),H=t(184);const{Text:K}=q.default;function R(n){var e;let{movieInfo:t}=n;const i=(0,W.TH)(),a=(0,W.s0)(),r=null===(e=i.state)||void 0===e?void 0:e.from,{title:o,genres:s,description:c,poster:l,releaseDate:d,voteAverage:h,voteCount:x}=t;return(0,H.jsxs)("div",{children:[(0,H.jsx)(k,{onClick:()=>{var n,e;return a(null!==(n=null===i||void 0===i||null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,H.jsxs)(_,{children:[(0,H.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(l),alt:o}),(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(z,{children:o}),(0,H.jsx)(K,{keyboard:!0,children:d})]}),(0,H.jsx)("ul",{children:(0,H.jsxs)(C,{children:[(0,H.jsx)(A,{children:"Genre:"}),s&&s.map((n=>{let{name:e,id:t}=n;return(0,H.jsx)(I,{children:e},t)}))]})}),(0,H.jsxs)(D,{children:[(0,H.jsx)(E,{children:"Descriptions:"}),(0,H.jsxs)(F,{children:[" ",c]})]}),(0,H.jsxs)(S,{children:[(0,H.jsxs)(G,{children:[(0,H.jsx)(O,{children:"Vote average:"}),(0,H.jsx)(P,{children:h})]}),(0,H.jsxs)(L,{children:[(0,H.jsx)(O,{children:"Vote count:"}),(0,H.jsx)(P,{children:x})]})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)(T,{children:"Additional Information"}),(0,H.jsxs)("ul",{children:[(0,H.jsx)(U,{children:(0,H.jsx)(V,{to:"cast",state:{from:r},children:"Cast"})}),(0,H.jsx)("li",{children:(0,H.jsx)(V,{to:"reviews",state:{from:r},children:"Reviews"})})]})]})]})]})]})}var B=t(389),J=t(2791);const M=(0,J.lazy)((()=>t.e(456).then(t.bind(t,5456)))),N=(0,J.lazy)((()=>t.e(276).then(t.bind(t,3276))));function Q(){const{movieId:n}=(0,W.UO)(),[e,t]=(0,J.useState)(null);return(0,J.useEffect)((()=>{n&&(0,B._C)(n).then((n=>{let{original_title:e,genres:i,overview:a,poster_path:r,release_date:o,vote_average:s,vote_count:c}=n;return t({title:e,genres:i,description:a,poster:r,releaseDate:o,voteAverage:s,voteCount:c})}))}),[n]),(0,H.jsxs)(H.Fragment,{children:[e&&(0,H.jsx)(R,{movieInfo:e}),(0,H.jsx)(J.Suspense,{fallback:(0,H.jsx)("div",{children:"Loading..."}),children:(0,H.jsxs)(W.Z5,{children:[(0,H.jsx)(W.AW,{path:"cast",element:(0,H.jsx)(M,{})}),(0,H.jsx)(W.AW,{path:"reviews",element:(0,H.jsx)(N,{})})]})})]})}}}]);
//# sourceMappingURL=135.f18fc0ca.chunk.js.map