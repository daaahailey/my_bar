(this.webpackJsonpmy_bar=this.webpackJsonpmy_bar||[]).push([[0],{57:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(25),i=c.n(a),r=c(9),o=c(2),l=c(13),j=c.n(l),d=c(26),u=c(27),h=c(28),b=c(33),m=c(31),O=c(29),p=c.n(O),x=(c(57),c(0));var f=function(e){var t=e.name,c=e.image,n=e.ingredients,s=e.measurements,a=e.instruction,i=e.glass;return Object(x.jsx)("div",{className:"cocktail",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("img",{className:"cocktail_img",src:c,alt:t}),Object(x.jsxs)("div",{className:"cocktail_info",children:[Object(x.jsx)("h1",{className:"cocktail_name",children:t}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"cocktail_recipe",children:[Object(x.jsx)("ul",{className:"ingredients",children:n.map((function(e,t){return Object(x.jsx)("li",{children:e},t+e)}))}),Object(x.jsx)("ul",{className:"measurements",children:s.map((function(e,t){return Object(x.jsx)("li",{children:e},t+e)}))})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("p",{className:"cocktail_glass",children:["* Nicer with ",i,"!"]}),Object(x.jsx)("p",{className:"cocktail_instruction",children:a})]})]})})},v=function(e){var t=e.cocktails;return Object(x.jsx)("div",{children:t.map((function(e){var t={ingredient:[],measurement:[]},c=1;do{if(!e["strIngredient".concat(c)])break;t.ingredient.push(e["strIngredient".concat(c)]),t.measurement.push(e["strMeasure".concat(c)]),c+=1}while(e["strIngredient".concat(c)]);return Object(x.jsx)(f,{name:e.strDrink,image:e.strDrinkThumb,ingredients:t.ingredient,measurements:t.measurement,instruction:e.strInstructions,glass:e.strGlass},e.idDrink)}))})},g=(c(59),function(e){e.searchfield;var t=e.searchChange;return Object(x.jsx)("div",{className:"search_div",children:Object(x.jsx)("input",{className:"search_field",type:"search",placeholder:"Search Cocktail",onChange:t})})}),k=(c(60),function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){var e;return Object(u.a)(this,c),(e=t.call(this)).getCocktail=Object(d.a)(j.a.mark((function t(){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin");case 2:c=t.sent,n=c.data.drinks,n.pop(),e.setState({drinks:n,searchfield:""});case 6:case"end":return t.stop()}}),t)}))),e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={drinks:[],searchfield:""},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){this.getCocktail()}},{key:"render",value:function(){var e=this.state,t=e.drinks,c=e.searchfield,n=t.filter((function(e){return e.strDrink.toLowerCase().includes(c.toLowerCase())}));return Object(x.jsx)("div",{children:t.length?Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{searchChange:this.onSearchChange}),Object(x.jsx)(v,{cocktails:n})]}):Object(x.jsx)("h1",{children:"Loading..."})})}}]),c}(n.Component)),N=c.p+"static/media/cocktail_main.a5b8bebf.jpg";c(61);var w=function(){return Object(x.jsx)("div",{className:"home_container",children:Object(x.jsx)("img",{src:N,className:"main_img"})})};c(62);var _=function(){return Object(x.jsxs)("div",{className:"about_container",children:[Object(x.jsx)("p",{children:"I like gin based cocktail and this is for people like me!"}),Object(x.jsx)("p",{children:"Make nice cocktails with the simple recipes :)"}),Object(x.jsx)("p",{children:"Made by @daaahailey"})]})};c(63);var C=function(){return Object(x.jsxs)("div",{className:"nav_container",children:[Object(x.jsx)(r.b,{to:"/",className:"nav_menus",children:"Home"}),Object(x.jsx)(r.b,{to:"/recipes",className:"nav_menus",children:"Recipes"}),Object(x.jsx)(r.b,{to:"/about",className:"nav_menus",children:"About"})]})},y=c(32);c(69);var S=function(){var e=Object(n.useState)(!0),t=Object(y.a)(e,2),c=t[0],s=t[1],a=function(){window.pageYOffset>500?s(!0):s(!1)};return Object(n.useEffect)((function(){window.addEventListener("scroll",a)}),[]),Object(x.jsx)("div",{className:"scroll-to-top",children:c&&Object(x.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"upButton",children:Object(x.jsx)("span",{className:"up",children:"UP"})})})};var I=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(C,{}),Object(x.jsx)(o.a,{path:"/",exact:!0,component:w}),Object(x.jsx)(o.a,{path:"/recipes",component:k}),Object(x.jsx)(o.a,{path:"/about",component:_}),Object(x.jsx)(S,{})]})})};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.740042d3.chunk.js.map