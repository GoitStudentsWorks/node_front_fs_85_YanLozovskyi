import{j as e,W as b,u as d,T as l,H as x,a as p,P as h,B as k,b as u,I as _,c as f,d as j,s as o,O as y,C as v,e as $,L as w,f as T,n as g,g as z,h as L,r as W,i as C,k as P}from"./index-eac1bdf5.js";import{S as Y}from"./Section-4a729e5a.js";const S=()=>e.jsxs(b,{children:[e.jsx(D,{}),e.jsx(M,{})]}),D=()=>{const n=d(),a=[{text:"Habit drive",id:`${o}#icon-calendar`},{text:"View statistics",id:`${o}#icon-statistic`},{text:"Personal rate setting",id:`${o}#icon-instrument`}];function t(){n("/signup")}return e.jsxs(l,{children:[e.jsx(x,{children:"Hidden"}),e.jsx(p,{children:"Water consumption tracker"}),e.jsx(h,{children:"Record daily water intake and track"}),e.jsx(k,{children:"Tracker Benefits"}),e.jsx(u,{children:a.map(({id:i,text:s},m)=>e.jsxs(_,{children:[e.jsx(f,{children:e.jsx("use",{href:i})}),s]},m))}),e.jsx(j,{type:"button",onClick:t,children:"Try tracker"})]})},M=()=>{const n=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsx(y,{children:e.jsxs(v,{children:[e.jsx($,{children:"Why drink water"}),e.jsx(w,{children:n.map((a,t)=>e.jsx(T,{children:a},t))})]})})},B="/node_front_fs_85_YanLozovskyi/assets/bg_mob_1x-45e67b01.png",E="/node_front_fs_85_YanLozovskyi/assets/bg_mob_2x-299ce2d2.png",H="/node_front_fs_85_YanLozovskyi/assets/bg_tab_1x-1f797613.png",I="/node_front_fs_85_YanLozovskyi/assets/bg_tab_2x-c5daf180.png",R="/node_front_fs_85_YanLozovskyi/assets/bg_img_1x-f981bb04.png",O="/node_front_fs_85_YanLozovskyi/assets/bg_img_2x-ea9b7f3f.png",r="/node_front_fs_85_YanLozovskyi/assets/bg_img_1x_bubbles-88afa2b3.png",c="/node_front_fs_85_YanLozovskyi/assets/bg_img_2x_bubbles-17852ecc.png",N=g.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: calc(100vh - 109px);

  background-image: -webkit-image-set(url(${B}) 1x, url(${E}) 2x);

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${H}) 1x,
      url(${I}) 2x
    );
    min-height: calc(100vh - 109px);
  }

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${R}) 1x,
      url(${O}) 2x
    );
    min-height: calc(100vh - 109px);
  }
`,U=g(Y)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.tablet}) {
    padding-top: 40px;
    padding-bottom: 50px;
    background-image: -webkit-image-set(
      url(${r}) 1x,
      url(${c}) 2x
    );
  }

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.desktop}) {
    padding-top: 49px;
    padding-bottom: 109px;
    background-image: -webkit-image-set(
      url(${r}) 1x,
      url(${c}) 2x
    );
  }
`,A=()=>{const n=z(),t=L()[0].get("token"),i=d();return W.useEffect(()=>{if(t)try{n(C(t)),n(P()).then(s=>{s.error||i("/home")})}catch(s){console.log(s.message)}},[n,i,t]),e.jsx(N,{children:e.jsx(U,{children:e.jsx(S,{})})})};export{A as default};
