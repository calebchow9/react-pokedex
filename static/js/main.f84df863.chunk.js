(this.webpackJsonpmp2=this.webpackJsonpmp2||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(12),i=n.n(a),o=(n(111),n(112),n(25)),r=n(15),s=n(11),l=n(182),j=n(192),b=n(205),d=n(200),h=n(206),p=n(193),u=n(194),x=n(195),g=n(204),m=n(201),O=n(185),f=n.p+"static/media/pokemon-header.562f1d81.png",y=(n(113),n(187)),v=n(188),k=n(2),C=Object(l.a)({button:{textTransform:"none",fontWeight:"bold"},picButton:{fontSize:"16px",margin:"10px"}});var S=function(){var e=C();return Object(k.jsxs)("div",{className:"header",children:[Object(k.jsx)(o.b,{to:"/",children:Object(k.jsx)("img",{className:"headerpic",alt:"Pokemon",src:f})}),Object(k.jsx)("h1",{style:{color:"#9085c4"},children:"Caleb's National Pok\xe9dex"}),Object(k.jsx)(O.a,{startIcon:Object(k.jsx)(y.a,{}),component:o.b,to:"/",style:{backgroundColor:"#252850",color:"#e4e6eb",borderRadius:10},className:"".concat(e.button," ").concat(e.picButton),variant:"outlined",children:"Search"}),Object(k.jsx)(O.a,{startIcon:Object(k.jsx)(v.a,{}),component:o.b,to:"/gallery",style:{backgroundColor:"#9085c4",color:"#e4e6eb",borderRadius:10},className:"".concat(e.button," ").concat(e.picButton),variant:"outlined",children:"Pok\xe9dex"}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})},P=function(e){var t=e.searchQuery,n=e.setSearchQuery;return Object(k.jsxs)("form",{action:"/",method:"get",children:[Object(k.jsx)("input",{style:{borderRadius:"5px",borderWidth:"1.5px",color:"#e4e6eb",borderColor:"#b0b3b8",minHeight:"30px",minWidth:"400px",backgroundColor:"#3d3d3d"},value:t,onInput:function(e){return n(e.target.value)},type:"text",id:"header-search",name:"s"}),Object(k.jsx)(O.a,{style:{color:"#b0b3b8"},type:"submit",startIcon:Object(k.jsx)(y.a,{})})]})},A=n(75),H=Object(l.a)({search:{textAlign:"center",color:"#e4e6eb"},toggles:{display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",paddingTop:"20px",color:"#e4e6eb"},pokeCard:{minWidth:"100px",minHeight:"180px",maxHeight:"200px",maxWidth:"100px"},cardImg:{objectFit:"contain"},pokeGrid:{padding:"20px"}});var I=function(){var e=H(),t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(!1),l=Object(s.a)(r,2),O=l[0],f=l[1],y=Object(c.useState)(0),v=Object(s.a)(y,2),C=v[0],I=v[1],w=window.location.search,W=new URLSearchParams(w).get("s"),N=Object(c.useState)(W||""),B=Object(s.a)(N,2),E=B[0],_=B[1],R=[],U=1;Object(c.useEffect)((function(){F()}),[]);var F=function(){A.get("https://pokeapi.co/api/v2/pokemon/?limit=649").then((function(e){var t=e.data.results;i(t)})).catch((function(e){return console.log(e)}))};if(a.length>0&&a.length<650)for(var L in a)R.push({id:U,name:a[L].name.replace(/(^|[\s-])\S/g,(function(e){return e.toUpperCase()})),sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(U,".png"),sprite_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/".concat(U,".png"),url:a[L].url}),U++;var z=function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t)})):e}(R,E);return Object(k.jsxs)("div",{style:{backgroundColor:"#18191a",minHeight:"100vh"},children:[Object(k.jsx)(S,{}),Object(k.jsx)("div",{className:e.search,children:Object(k.jsx)(P,{searchQuery:E,setSearchQuery:_})}),Object(k.jsxs)("div",{className:e.toggles,children:[Object(k.jsxs)(g.a,{exclusive:!0,value:O,style:{backgroundColor:"#9085c4",maxHeight:"40px"},onChange:function(e){f(e.target.value)},children:[Object(k.jsx)(m.a,{style:{color:"#e4e6eb",minWidth:"40px"},value:"ascend",children:"\u2191"}),Object(k.jsx)(m.a,{style:{color:"#e4e6eb",minWidth:"40px"},value:"descend",children:"\u2193"})]}),Object(k.jsxs)(j.a,{variant:"filled",children:[Object(k.jsx)(b.a,{style:{color:"#b0b3b8",textAlign:"center"},children:"Sort By"}),Object(k.jsxs)(d.a,{style:{color:"#e4e6eb"},value:C,label:"Sort",onChange:function(e){I(e.target.value)},children:[Object(k.jsx)(h.a,{value:0,children:"Alphabetical"}),Object(k.jsx)(h.a,{value:1,children:"Pokedex ID"})]})]})]}),Object(k.jsx)(p.a,{className:e.pokeGrid,container:!0,spacing:1,justifyContent:"center",children:z.sort((function(e,t){var n=e.name.localeCompare(t.name),c=t.name.localeCompare(e.name),a=e.id-t.id,i=t.id-e.id;return C?"descend"===O?i:a:"descend"===O?c:n})).map((function(t){return Object(k.jsx)(p.a,{item:!0,children:Object(k.jsx)(o.b,{style:{textDecoration:"none"},to:"pokemon/".concat(t.id),id:t.id,children:Object(k.jsxs)(u.a,{className:e.pokeCard,style:{backgroundColor:"#3d3d3d"},variant:"outlined",children:[Object(k.jsx)("p",{style:{textAlign:"center",fontSize:"16px",lineHeight:"20px",fontWeight:"500",color:"#e4e6eb"},children:t.name.replace(/(-|^)([^-]?)/g,(function(e,t,n){return(t&&" ")+n.toUpperCase()}))}),Object(k.jsxs)("p",{style:{textAlign:"center",fontSize:"12px",lineHeight:"0px",color:"#b0b3b8"},children:["#",t.id]}),Object(k.jsx)(x.a,{className:e.cardImg,component:"img",image:t.sprite,alt:t.name})]})})},t.id)}))})]})},w=n(196),W=n(202),N=Object(l.a)({pokeCard:{maxHeight:"100px",maxWidth:"100px"},cardImg:{objectFit:"contain"}});var B=function(e){var t=N();return Object(k.jsx)(k.Fragment,{children:function(e){var n=e.pokemon,c=e.region,a=[0,151,251,386,493,649,0,649];if(n.length>0)return Object(k.jsx)(p.a,{justifyContent:"center",style:{padding:"15px"},container:!0,spacing:1,children:n.slice(a[c-1],a[c]).map((function(n){return Object(k.jsx)(p.a,{item:!0,children:Object(k.jsx)(o.b,{style:{textDecoration:"none"},to:"pokemon/".concat(n.id),id:n.id,children:Object(k.jsx)(u.a,{className:t.pokeCard,variant:"outlined",style:{backgroundColor:"#3d3d3d"},children:Object(k.jsx)(x.a,{className:t.cardImg,component:"img",image:e.shiny?n.sprite_shiny:n.sprite,alt:n.name})})})},n.id)}))})}(e)})},E=n(75),_=Object(l.a)({toggles:{display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",paddingTop:"15px"},region:{minWidth:100}});var R=function(){var e=_(),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(!1),r=Object(s.a)(o,2),l=r[0],p=r[1],u=Object(c.useState)(7),x=Object(s.a)(u,2),g=x[0],m=x[1];Object(c.useEffect)((function(){O()}),[]);var O=function(){E.get("https://pokeapi.co/api/v2/pokemon/?limit=809").then((function(e){var t=e.data.results;i(t)})).catch((function(e){return console.log(e)}))},f=[],y=1;if(a.length>0&&a.length<810)for(var v in a)f.push({id:y,name:a[v].name.replace(/(^|[\s-])\S/g,(function(e){return e.toUpperCase()})),sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(y,".png"),sprite_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/".concat(y,".png")}),y++;return Object(k.jsxs)("div",{style:{backgroundColor:"#18191a",minHeight:"100vh"},children:[Object(k.jsx)(S,{}),Object(k.jsxs)("div",{className:e.toggles,children:[Object(k.jsx)(w.a,{style:{color:"#b0b3b8"},control:Object(k.jsx)(W.a,{style:{color:"#9085c4"},checked:l,onChange:function(){p(!l)}}),label:"Shiny"}),Object(k.jsxs)(j.a,{variant:"filled",className:e.region,children:[Object(k.jsx)(b.a,{style:{color:"#b0b3b8",textAlign:"center"},children:"Region"}),Object(k.jsxs)(d.a,{value:g,label:"Region",style:{color:"#e4e6eb"},onChange:function(e){m(e.target.value)},children:[Object(k.jsx)(h.a,{value:7,children:"All Regions"}),Object(k.jsx)(h.a,{value:1,children:"Kanto"}),Object(k.jsx)(h.a,{value:2,children:"Johto"}),Object(k.jsx)(h.a,{value:3,children:"Hoenn"}),Object(k.jsx)(h.a,{value:4,children:"Sinnoh"}),Object(k.jsx)(h.a,{value:5,children:"Unova"})]})]})]}),Object(k.jsx)(B,{pokemon:f,shiny:l,region:g})]})},U=n(20),F=n(197),L=n(143),z=n(198),D=n(199),T=n(75),Q=Object(l.a)({container:{textAlign:"center",backgroundColor:"#3d3d3d"}});var J=function(e){var t=Q(),n=e.location.pathname.substring(9),a=""+(Number(n)-1);a<1&&(a=649);var i=""+(Number(n)+1);i>649&&(i=1);var r=Object(c.useState)(""),l=Object(s.a)(r,2),j=l[0],b=l[1],d=Object(c.useState)([]),h=Object(s.a)(d,2),x=h[0],g=h[1],m=Object(c.useState)([]),O=Object(s.a)(m,2),f=O[0],y=O[1],v=Object(c.useState)([]),C=Object(s.a)(v,2),P=C[0],A=C[1],H=Object(c.useState)([]),I=Object(s.a)(H,2),N=I[0],B=I[1],E=Object(c.useState)([]),_=Object(s.a)(E,2),R=_[0],J=_[1],G=Object(c.useState)(!1),K=Object(s.a)(G,2),X=K[0],q=K[1];Object(c.useEffect)((function(){M()}),[]);var M=function(){var e="https://pokeapi.co/api/v2/"+"pokemon/".concat(n);T.get(e).then((function(e){b(e.data),T.get(e.data.location_area_encounters).then((function(e){e.data.forEach((function(e){J((function(t){return[].concat(Object(U.a)(t),[e.location_area.name])}))}))})),e.data.types.forEach((function(e){y((function(t){return[].concat(Object(U.a)(t),[e.type.name])}))})),e.data.abilities.forEach((function(e){T.get(e.ability.url).then((function(t){A((function(n){return[].concat(Object(U.a)(n),[{name:e.ability.name,desc:t.data.effect_entries[1].effect}])}))}))})),e.data.held_items.forEach((function(e){g((function(t){return[].concat(Object(U.a)(t),[e.item.name])}))})),e.data.stats.forEach((function(e){B((function(t){return[].concat(Object(U.a)(t),[{name:e.stat.name,stat:e.base_stat}])}))}))})).catch((function(e){return console.log(e)}))};return Object(k.jsxs)("div",{style:{backgroundColor:"#18191a",minHeight:"100vh"},children:[Object(k.jsx)(S,{}),Object(k.jsx)(p.a,{container:!0,spacing:3,direction:"row",alignItems:"center",justifyContent:"center",children:Object(k.jsx)(p.a,{item:!0,xs:6,children:Object(k.jsxs)(u.a,{className:t.container,variant:"outlined",maxwidth:"lg",children:[Object(k.jsx)("h1",{style:{lineHeight:"15px",color:"#e4e6eb"},children:j?j.name.replace(/(-|^)([^-]?)/g,(function(e,t,n){return(t&&" ")+n.toUpperCase()})):""}),Object(k.jsx)("div",{children:f.map((function(e){return Object(k.jsx)("img",{src:"./".concat(e,".png"),alt:e},e)}))}),Object(k.jsxs)("h3",{style:{fontWeight:"500",color:"#b0b3b8",lineHeight:"5px"},children:["#",j.id]}),Object(k.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{src:X?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/".concat(n,".png"):"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:j.name}),Object(k.jsx)("p",{style:{lineHeight:"0px",color:"#b0b3b8"},children:"Front"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{src:X?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/".concat(n,".png"):"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/".concat(n,".png"),alt:j.name}),Object(k.jsx)("p",{style:{lineHeight:"0px",color:"#b0b3b8"},children:"Back"})]})]}),Object(k.jsx)(w.a,{style:{color:"#b0b3b8"},control:Object(k.jsx)(W.a,{style:{color:"#9085c4"},checked:X,onChange:function(){q(!X)}}),label:X?"Shiny":"Base"}),Object(k.jsx)(F.a,{style:{margin:"30px"},children:Object(k.jsxs)(p.a,{container:!0,spacing:3,direction:"row",justifyContent:"center",children:[Object(k.jsxs)(p.a,{item:!0,xs:6,children:[Object(k.jsx)(L.a,{style:{lineHeight:"15px",color:"#e4e6eb"},gutterBottom:!0,variant:"h6",component:"div",children:"Base Stats"}),Object(k.jsxs)(L.a,{style:{color:"#e4e6eb",textAlign:"left",fontSize:"16px",paddingLeft:"40px",lineHeight:"5px"},variant:"body2",component:"div",children:[Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Height:"})," ",j.height]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Weight:"})," ",j.weight]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"XP:"})," ",j.base_experience]}),N.map((function(e){return Object(k.jsxs)("p",{children:[Object(k.jsxs)("span",{style:{fontWeight:"bold"},children:[e.name.replace(/(-|^)([^-]?)/g,(function(e,t,n){return(t&&" ")+n.toUpperCase()})),":"]})," ",e.stat]},e.name)}))]})]}),Object(k.jsxs)(p.a,{item:!0,xs:6,children:[Object(k.jsx)(L.a,{style:{lineHeight:"15px",color:"#e4e6eb"},gutterBottom:!0,variant:"h6",component:"div",children:"Held Items"}),Object(k.jsx)("div",{style:{minHeight:"40px",paddingTop:"30px"},children:x.map((function(e){return e?Object(k.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/".concat(e,".png"),alt:e},e):Object(k.jsx)("p",{},e)}))})]}),Object(k.jsxs)(p.a,{item:!0,xs:6,children:[Object(k.jsx)(L.a,{style:{lineHeight:"15px",color:"#e4e6eb"},gutterBottom:!0,variant:"h6",component:"div",children:"Abilities"}),Object(k.jsx)(L.a,{style:{color:"#e4e6eb",textAlign:"left",fontSize:"16px"},variant:"body2",component:"div",children:Object(k.jsx)("ul",{children:P.map((function(e){return Object(k.jsxs)("li",{children:[Object(k.jsxs)("span",{style:{fontWeight:"bold"},children:[e.name.replace(/(-|^)([^-]?)/g,(function(e,t,n){return(t&&" ")+n.toUpperCase()})),":"]})," ",e.desc]},e.name)}))})})]}),Object(k.jsxs)(p.a,{item:!0,xs:6,children:[Object(k.jsx)(L.a,{style:{lineHeight:"15px",color:"#e4e6eb"},gutterBottom:!0,variant:"h6",component:"div",children:"Location Areas"}),Object(k.jsx)(L.a,{style:{color:"#e4e6eb",textAlign:"left",fontSize:"16px"},variant:"body2",component:"div",children:Object(k.jsx)("ul",{children:R.map((function(e){return Object(k.jsx)("li",{children:null==e?"":e.replace(/(-|^)([^-]?)/g,(function(e,t,n){return(t&&" ")+n.toUpperCase()}))},e.name)}))})})]})]})})]})})}),Object(k.jsxs)("div",{style:{display:"flex",justifyContent:"center"},onClick:function(){return window.location.reload()},children:[Object(k.jsx)("div",{style:{paddingRight:"50px"},children:Object(k.jsx)(o.b,{to:"".concat(a),style:{textDecoration:"none"},children:Object(k.jsxs)("div",{style:{textAlign:"right"},children:[Object(k.jsx)(z.a,{style:{color:"#9085c4"}}),Object(k.jsxs)("p",{style:{fontWeight:"500",lineHeight:"0px",paddingRight:"5px",color:"#CBC3E3"},children:["#",a]})]})})}),Object(k.jsx)("div",{style:{paddingLeft:"5    0px"},children:Object(k.jsx)(o.b,{to:"".concat(i),style:{textDecoration:"none"},children:Object(k.jsxs)("div",{style:{color:"#252850"},children:[Object(k.jsx)(D.a,{style:{color:"#9085c4"}}),Object(k.jsxs)("p",{style:{fontWeight:"500",lineHeight:"0px",paddingLeft:"5px",color:"#CBC3E3"},children:["#",i]})]})})})]})]})};var G=function(){return Object(k.jsx)(o.a,{children:Object(k.jsxs)(r.c,{children:[Object(k.jsx)(r.a,{path:"/",exact:!0,component:I}),Object(k.jsx)(r.a,{path:"/gallery",exact:!0,component:R}),Object(k.jsx)(r.a,{path:"/pokemon/:id",component:J})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};i.a.render(Object(k.jsx)(G,{}),document.getElementById("root")),K()}},[[140,1,2]]]);
//# sourceMappingURL=main.f84df863.chunk.js.map