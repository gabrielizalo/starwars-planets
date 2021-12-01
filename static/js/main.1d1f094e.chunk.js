(this["webpackJsonpstarwars-planet-query"]=this["webpackJsonpstarwars-planet-query"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),s=n.n(c),i=n(153),o=n(13),A=n(148),l=n(164),u=n(166),j=n(157),b=n(159),d=n(160),m=n(1),g=function(){var e=document.querySelector('meta[name="app-version"]').content,t="%APP_VERSION%"!==e?"v".concat(e):"",n=document.querySelector('meta[name="build-version"]').content,a="%BUILD_VERSION%"!==n?n.substring(0,4):"2021";return Object(m.jsx)(j.a,{item:!0,sx:{marginTop:5},children:Object(m.jsx)("footer",{children:Object(m.jsxs)(b.a,{variant:"body1",align:"center",children:["Just a simple React exercise by \xa0",Object(m.jsx)(d.a,{href:"https://twitter.com/gabrielizalo",children:"Gabriel Porras"})," - ",a,t&&Object(m.jsxs)("span",{children:[" - ",t]}),Object(m.jsx)("br",{}),Object(m.jsx)(d.a,{href:"https://github.com/gabrielizalo/starwars-planets",children:Object(m.jsx)("img",{alt:"StarWars Planets GitHub",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACCElEQVRYhe3Wz4tNYRwG8M+dYWyQjGmmZEMaQyL5sWA1SLGxkpqF+ANQSvIH+BFhM1HWFjaiqJm5IyykLGVhlogNKzaKe8fivLc593XumXPuPTvz1LfOfd/n+zxP73ve9x7+d9RKcEdxHIexHhvC+Gd8QR2PMVdlQNiD55gvWK9xoArj5biLZgnzVjUxGTS6wlq87MI4rhdBqxQGUuaPMIJjBQPN4iiG8SQVotRK3EsJnkqN13AZ1zCBQ6EmcAUXIp3TKZ3Joub7tO/5yTLJI5xI6TSxO4vUF/2+rv1o7u8hwM7Ucy1o52JM+342MN5DgB34FWmO5jVcisgPejBvIf0+zeNiHjm+bI5UEGA80qznkeci8lAFAdZFmh/yyD8jcte3WAoDkeaPmNDX4ZlqVmA4x++fge/R3MEKAsQa3/LIM9qX653etmEA7yPN6ZiUXoFX0dx2yTHq78K8P/Rui8ZjjzZslf3XO4stJczHZH8/NMNcLmYDeUqyAs8s3IozOIfBjL5BnA/GjQzz+dC/KPamBG5hBd5EQiMZfUMdTFv1R/JlVQh3Uk2bsRJn8RD3ZRylMJYX4HZRc5I3vx4a32JNwb5O5tO6OE2rLRzLr7iKM5J9LhNgCqvKmrewDDclW5EWLRLgN24EjZ6xS3IaGviYw/sUOE+1f4xUho2hOmHTIvNLWEIm/gKSceFr46My6wAAAABJRU5ErkJggg=="})})]})})})},h=n.p+"static/media/starwars-planets-header-landscape.f99c29b8.png",p=n.p+"static/media/starwars-planets-header-portrait.0c01350d.png",x=function(){var e=Object(A.a)("(orientation: portrait)");return Object(m.jsx)(j.a,{item:!0,sx:{marginBottom:2},children:Object(m.jsx)("header",{children:Object(m.jsx)("img",{alt:"StarWars Planets",src:e?p:h,width:"100%"})})})},O=r.a.createContext({planets:[],setPlanets:function(){return[]}}),f=n(150),v=n(161),E=n(163),C=n(158),w=function(e){var t=e.planet,n={bg:{backgroundImage:"url(".concat("/starwars-planets").concat(t.img,")"),backgroundPosition:"right top",backgroundRepeat:"no-repeat",backgroundSize:"auto 100%"}},a=r.a.useContext(O),c=a.planets,s=a.setPlanets;return Object(m.jsx)(j.a,{item:!0,children:Object(m.jsx)(v.a,{display:"inline-block",style:n.bg,sx:{borderRadius:3,border:2,borderColor:"grey.500"},children:Object(m.jsxs)(E.a,{children:[Object(m.jsx)(C.a,{color:"error",onClick:function(){var e=c.filter((function(e){return e.name!==t.name}));s(e)},size:"small",sx:{float:"right"},variant:"contained",children:"Delete"}),Object(m.jsx)(b.a,{gutterBottom:!0,variant:"h4",style:{color:"#c5a049"},children:t.name}),Object(m.jsxs)(b.a,{color:"text.secondary",children:[Object(m.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVQ4jaXTuy6EURQF4G8ET6CgIUgUXsEloaLAvMW4TIEXQUzIvAAaoROVxL1QokNoJMYLuCSjmI1/jlthN3vtffbZZ638689Vq1X/iUYoFArZ3gBmIregggOUcPQ+VC6XQUOybBVrGMMmmrGFcWzEksbsa9kFy+hBETeYj/5c1EX0YvGLhKA7GXg48kuStyMPBZvDLIMZTCGHM/QFFrkv+rmYnU4lDGA3cAeu1ccV2gPvYDCV0JJcus/g6jf4KWXwiK6gWEFbIqEVD4G7YqZuwT5GAt/GUDa6cRd4NObrJCzhGCtRfxjmBwn9KYPTuLyHPC7QFGdNUefjfDn7QNZIs7hUc1snFqK/GHUJ5z4NVicBXtXctq72rfN4xoSaiUo4kUTuv39jw98jv8cbFtlHHrBe0JAAAAAASUVORK5CYII="}),"\xa0",Object(m.jsx)("strong",{children:"Diameter:"})," ",t.diameter]}),Object(m.jsxs)(b.a,{color:"text.secondary",children:[Object(m.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVQ4jdXTsS6EQRTF8d9sZKl4ANYLiKhEPAIvQLMKxcQDKEQhQUSnIWQrhUKrVG6h0Kkk+qWUbKhI+BTul2w2HyGrMclNbk7O/c+5mUwqisIgpzbQ9F8AUs65Sq9jF00UOMMWXn+aYAdTmMUcprFdZfwK0MQaHnAf/cpvACMV2vB3gEV0ohZwghYm0Ij+uMJnKAAtLCHhHKtYDyO84ACnfb7JMkERYoobD8M4GrWMo0hU+pQJ6rjFVWh3mEe3Z9ULtHHd47tEvYZ9vAW9jY2+4fJ0sRmeBt6xl3LOj5jx+VxPGMdzBUCs08FYQG7S//9MH0PpN4259qc/AAAAAElFTkSuQmCCYII="}),"\xa0",Object(m.jsx)("strong",{children:"Population:"})," ",t.population]}),Object(m.jsxs)(b.a,{color:"text.secondary",children:[Object(m.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFUlEQVQ4jaXTMS9EQRQF4G9FdFpZhUSUqElELA0/YP+C5JHottwQkg0VjWSTDX6AQikahVDQKoROdKhpSKzizWPeslvsnmRy5s6cOZk7906h2WzqBf3ZJEkSGMEhZnCDZTwFSTnwSXam0WjoazE8wBWKOMdRtFcLI4dWgzns4h17mI00r3hpm0LAAD7C/DPsF0JcinRFPP93gwydXnYMt4HbGnTCDoYCd2WwFHixW4N9vAXOGSxIa/4VrT3KPx6sYxAbrQbbWEU1xFWsyde+7LehkC/jBK5xHOIKRjEZaTKzn26Mb/CAKdSlOdYxjftI86eZYoMtaeteYBiX0n+xGWlKmG+Xwqm0gWoYxx1WcKYDCr1+52+Fpzh6anEL5gAAAABJRU5ErkJggg=="}),"\xa0",Object(m.jsx)("strong",{children:"Climate:"})," ",t.climate]}),Object(m.jsxs)(b.a,{color:"text.secondary",children:[Object(m.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVQ4jcXTMU4CQRgF4G8JHdegw4LGUNjZeQBsbIjNFmhCr60nMBRbyAG8AIcgdNhtaOns6Axr82/YTJBEMPElkzf/m5mX989ksqqqnIM25Hne1LqY4wblscNFUWglWgtv2GAW9VGkGx6Q4Trqx8ZaD+vggwZdPOMeX8FPoXfwjmVwJzWoo7/Y911GPcMUCwyDp6lBHf01aamurzCO+RiXGDUN7iLyLjHYhf6JbWhb3GJCPCMGfkZ5YP0D/WaCk1EbrFD9cqzYt3Dxbwmycz/Tn13iyfgGbZhDhAdxzUQAAAAASUVORK5CYII="}),"\xa0",Object(m.jsx)("strong",{children:"Terrain:"})," ",t.terrain]})]})})})},U=function(){var e=r.a.useContext(O).planets;return e&&e.length>0?Object(m.jsx)(f.a,{spacing:2,sx:{width:1},children:e.map((function(e){return Object(m.jsx)(w,{planet:e},e.name)}))}):null},I=n(48),M=n(68),Q=n.n(M),y=n(78),B=n(154),G=n(155),P=n(165),Y=n(14);function F(e,t){var n=[{value:1,symbol:""},{value:1e3,symbol:" thousands"},{value:1e6,symbol:" millions"},{value:1e9,symbol:" billions"},{value:1e12,symbol:" trillions"},{value:1e15,symbol:" quadrillions"},{value:1e18,symbol:" quintillions"}].slice().reverse().find((function(t){return e>=t.value}));return n?(e/n.value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"1")+n.symbol:"0"}var L=function(e){return e.split(",").map((function(e){return e.trim().charAt(0).toUpperCase()+e.trim().slice(1)})).join(", ")},S=function(e,t,n){var a=t.filter((function(t){return t.name===e}));if(n.find((function(e){return e.name===a[0].name})))return Object(Y.a)(n);var r,c,s={name:a[0].name,img:(c=a[0].name,"/assets/planet-".concat(c.toLowerCase().replaceAll(" ","-"),".jpg")),diameter:(r=a[0].diameter,Number.isNaN(r)?"":"".concat(Number(r).toLocaleString()," KM")),population:F(a[0].population),climate:L(a[0].climate),terrain:L(a[0].terrain)};return[].concat(Object(Y.a)(n),[s])},R=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=r.a.useState([]),s=Object(o.a)(c,2),i=s[0],A=s[1],u=r.a.useState([]),b=Object(o.a)(u,2),d=b[0],g=b[1],h=r.a.useContext(O),p=h.planets,x=h.setPlanets,f=n&&0===i.length,v=function(){var e=Object(y.a)(Q.a.mark((function e(t){var n,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/planets?search=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent)&&(null===a||void 0===a?void 0:a.results)&&a.results.length>0&&(g(a.results),A(a.results.map((function(e){return e.name}))));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.useEffect((function(){n||A([])}),[n]),Object(m.jsx)(j.a,{item:!0,sx:{paddingBottom:3,width:1},children:Object(m.jsx)(l.a,{sx:{bgcolor:"#fff",border:"2px solid #C8CACF",borderRadius:5,color:"white",p:2},children:Object(m.jsx)(B.a,{autoSelect:!0,clearOnBlur:!0,disablePortal:!0,getOptionLabel:function(e){return e},id:"planets-search",isOptionEqualToValue:function(e,t){return e===t},loading:f,loadingText:"Loading...",onClose:function(){a(!1)},onChange:function(e,t){if(!t)return g([]),void A([]);var n=S(t,d,p);x(n)},onOpen:function(){a(!0)},open:n,options:i,renderInput:function(e){return Object(m.jsx)(G.a,Object(I.a)(Object(I.a)({},e),{},{InputLabelProps:{style:{color:"#c5a049"}},InputProps:Object(I.a)(Object(I.a)({},e.InputProps),{},{endAdornment:Object(m.jsxs)(m.Fragment,{children:[f?Object(m.jsx)(P.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}),label:"Search for Star Wars Planets, ex: Alderaan, Tattoine...",onChange:function(e){""===e.target.value&&null===e.target.value||v(e.target.value)}}))},selectOnFocus:!0})})})},W=n.p+"static/media/starwars-planets-bg-landscape.012dcfc9.jpg",K=n.p+"static/media/starwars-planets-bg-portrait.0647d905.jpg",k=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useMemo)((function(){return{planets:n,setPlanets:r}}),[n]),s=Object(A.a)("(orientation: portrait)");return Object(m.jsx)(l.a,{minHeight:"100vh",sx:{backgroundAttachment:"fixed",backgroundImage:"url(".concat(s?K:W,")"),backgroundPosition:"top center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(m.jsx)(u.a,{maxWidth:"md",children:Object(m.jsxs)(j.a,{alignItems:"center",container:!0,direction:"column",justifyContent:"center",sx:{p:2},children:[Object(m.jsx)(x,{}),Object(m.jsxs)(O.Provider,{value:c,children:[Object(m.jsx)(R,{}),Object(m.jsx)(U,{})]}),Object(m.jsx)(g,{})]})})})},N=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.a,{}),Object(m.jsx)(k,{})]})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.1d1f094e.chunk.js.map