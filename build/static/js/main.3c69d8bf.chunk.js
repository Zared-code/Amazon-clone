(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c.n(n),s=c(26),a=c.n(s),r=(c(49),c(11)),o=(c(50),c(40)),l=c.n(o),j=c(41),d=c.n(j),u=(c(51),c(16)),m=c(2),b=Object(n.createContext)(),h=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(m.jsx)(b.Provider,{value:Object(n.useReducer)(t,c),children:i})},O=function(){return Object(n.useContext)(b)},_=c(33),p=(_.a.initializeApp({apiKey:"AIzaSyBudD9wsr199Ft86K7Rkag_oorQb6yMwKM",authDomain:"clone-156f9.firebaseapp.com",projectId:"clone-156f9",storageBucket:"clone-156f9.appspot.com",messagingSenderId:"688689677672",appId:"1:688689677672:web:30051e3c9d31bd5dd642dd"}).firestore(),_.a.auth());var x=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],n=c.basket,i=c.user;return t[1],Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"logo"})}),Object(m.jsxs)("div",{className:"header__search",children:[Object(m.jsx)("input",{type:"text",className:"header__search--input"}),Object(m.jsx)(l.a,{className:"header__search--icon"})]}),Object(m.jsxs)("div",{className:"header__nav",children:[Object(m.jsx)(u.b,{to:!i&&"/login",children:Object(m.jsxs)("div",{onClick:function(){i&&p.signOut()},className:"header__nav--option",children:[Object(m.jsxs)("p",{className:"lineone",children:["Hello ",i?null===i||void 0===i?void 0:i.email:"Guest"]}),Object(m.jsx)("p",{className:"linetwo",children:i?"Sign out":"Sign in"})]})}),Object(m.jsxs)("div",{className:"header__nav--option",children:[Object(m.jsx)("p",{className:"lineone",children:"Returns"}),Object(m.jsx)("p",{className:"linetwo",children:"& Orders"})]}),Object(m.jsxs)("div",{className:"header__nav--option",children:[Object(m.jsx)("p",{className:"lineone",children:"Your"}),Object(m.jsx)("p",{className:"linetwo",children:"Prime"})]}),Object(m.jsx)(u.b,{to:"/checkout",children:Object(m.jsxs)("div",{className:"header__nav--optionbasket",children:[Object(m.jsx)(d.a,{}),Object(m.jsx)("p",{className:"linetwo count",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(63),c(64);var g=function(e){var t=e.id,c=e.title,n=e.price,i=e.image,s=e.rating,a=O(),o=Object(r.a)(a,2),l=(o[0].basket,o[1]);return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{className:"product__info",children:[Object(m.jsx)("p",{className:"title",children:c}),Object(m.jsxs)("p",{className:"price",children:[n," \u20ac"]}),Object(m.jsx)("div",{className:"product__info--rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\u2b50"})}))})]}),Object(m.jsx)("img",{src:i,alt:"produit"}),Object(m.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:i,price:n,rating:s}})},children:"Add to Cart"})]},t)};var v=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"home__container",children:[Object(m.jsx)("img",{className:"banner",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/LittleFiresEverywhere/LITT_S1_Xsite_FT_HeroTALL_1500x600_PV_en-GB._CB431647716_.jpg",alt:"banner"}),Object(m.jsxs)("div",{className:"home__container--row",children:[Object(m.jsx)(g,{id:123,title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",price:19.99,image:"https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg",rating:4}),Object(m.jsx)(g,{id:1234,title:"Kenwood kMix KMX750RD, Robot P\xe2tissier, Robot p\xe2tissier multifonctions avec Bol en Acier 5 L, 1000 Watt, Rouge",price:389,image:"https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg",rating:3})]}),Object(m.jsxs)("div",{className:"home__container--row",children:[Object(m.jsx)(g,{id:12345,title:"Samsung Galaxy Fit2 Tracker de Fitness avec \xe9cran Couleur AMOLED 1,1 - Confortable - \xc9tanche - Jusqu'\xe0 21 Jours d'autonomie - Analyse du Sommeil - Noir",price:39.9,image:"https://m.media-amazon.com/images/I/71qamkc+RUL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg",rating:4}),Object(m.jsx)(g,{id:123456,title:"Echo Plus (2\xe8me g\xe9n\xe9ration) Reconditionn\xe9 Certifi\xe9, Son de qualit\xe9 premium avec un hub maison connect\xe9e int\xe9gr\xe9, Tissu anthracite",price:89.99,image:"https://m.media-amazon.com/images/I/71Nk6mmYFZL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg",rating:5}),Object(m.jsx)(g,{id:1234567,title:"Apple iPad Pro (11 Pouces, 2\u1d49 g\xe9n\xe9ration, Wi-FI, 128 Go) - Argent (2020)",price:789,image:"https://m.media-amazon.com/images/I/815a+XjrgvL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg",rating:5})]}),Object(m.jsx)("div",{className:"home__container--row",children:Object(m.jsx)(g,{id:12345678,title:"Samsung C49RG90, Ecran PC Gaming incurv\xe9, Format Ultra-Large, Dalle VA 49', R\xe9solution 5K (5120 x 1440), 120 Hz, 4ms, HDR 1000, QLED, AMD Freesync, Noir",price:949.9,image:"https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UL320_SP_SAME_DOMAIN_ASSETS_257061_.jpg",rating:5})})]})})},f=c(10);c(65),c(66);var N=function(e){var t=e.id,c=e.image,n=e.price,i=e.title,s=e.rating,a=O(),o=Object(r.a)(a,2),l=(o[0].basket,o[1]);return Object(m.jsxs)("div",{className:"checkoutProduct",children:[Object(m.jsx)("img",{src:c,alt:"test",className:"checkoutProduct__image"}),Object(m.jsxs)("div",{className:"checkoutProduct__info",children:[Object(m.jsx)("p",{className:"checkoutProduct__info--title",children:i}),Object(m.jsxs)("p",{className:"checkoutProduct__info--price",children:[Object(m.jsx)("strong",{children:n}),Object(m.jsx)("small",{children:" \u20ac"})]}),Object(m.jsx)("div",{className:"checkoutProduct__info--rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\u2b50"})}))}),Object(m.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},S=(c(67),c(42)),A=c.n(S),k=c(34),C=c(22),E=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)};var y=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(k.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(k.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Le produit (id: ".concat(t.id,") n'est pas dans le panier !")),Object(C.a)(Object(C.a)({},e),{},{basket:n});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:t.user});default:return e}};var P=function(){var e=Object(f.f)(),t=O(),c=Object(r.a)(t,2),n=c[0].basket;return c[1],Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsx)(A.a,{renderText:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["Subtotal (",null===n||void 0===n?void 0:n.length," items) : ",Object(m.jsx)("strong",{children:e})]}),Object(m.jsxs)("div",{className:"subtotal__gift",children:[Object(m.jsx)("input",{type:"checkbox"}),"This order contain a gift"]})]})},decimalScale:2,value:E(n),displayType:"text",thousandSeparator:!0,suffix:" \u20ac"}),Object(m.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};var T=function(){var e=O(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout__left",children:[Object(m.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"ad",className:"checkout__left--ad"}),Object(m.jsxs)("div",{className:"checkout__left--title",children:[Object(m.jsx)("h2",{className:"title",children:"Your shopping Basket"}),c.map((function(e){return Object(m.jsx)(N,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(m.jsx)("div",{className:"checkout__right",children:Object(m.jsx)(P,{})})]})};c(69);var M=function(){var e=Object(f.f)(),t=Object(n.useState)(""),c=Object(r.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(""),o=Object(r.a)(a,2),l=o[0],j=o[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"login__logo",src:"https://wwwfr.uni.lu/var/storage/images/media/images/amazon_logo/1175096-1-fre-FR/amazon_logo.png",alt:"logo"})}),Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("h1",{children:"Sign in"}),Object(m.jsxs)("form",{action:"",children:[Object(m.jsx)("h5",{children:"Email"}),Object(m.jsx)("input",{type:"email",value:i,onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(m.jsx)("button",{type:"submit",className:"login__container--signin",onClick:function(t){t.preventDefault(),p.signInWithEmailAndPassword(i,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(m.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interested-Bases Ads Notice."}),Object(m.jsx)("button",{className:"login__container--register",onClick:function(t){t.preventDefault(),p.createUserWithEmailAndPassword(i,l).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your Amazon Account "})]})]})},I=(c(70),c(23));var w=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],i=c.basket,s=c.user,a=(t[1],Object(I.useStripe)(),Object(I.useElements)(),Object(n.useState)(null)),o=Object(r.a)(a,2),l=(o[0],o[1],Object(n.useState)(!0)),j=Object(r.a)(l,2);return j[0],j[1],Object(m.jsx)("div",{className:"payment",children:Object(m.jsxs)("div",{className:"payment__container",children:[Object(m.jsxs)("h1",{children:["Checkout (",Object(m.jsxs)(u.b,{to:"/checkout",children:[" ",null===i||void 0===i?void 0:i.length," ",i.length>=2?"items":"item"]}),")"]}),Object(m.jsxs)("div",{className:"payment__container--section",children:[Object(m.jsx)("div",{className:"title",children:Object(m.jsx)("h3",{children:"Delivery Address"})}),Object(m.jsxs)("div",{className:"adress",children:[Object(m.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(m.jsx)("p",{children:"123 React Lane"}),Object(m.jsx)("p",{children:"Los Angeles, CA"})]})]}),Object(m.jsxs)("div",{className:"payment__container--section",children:[Object(m.jsx)("div",{className:"title",children:Object(m.jsx)("h3",{children:"Review items and delivery"})}),Object(m.jsx)("div",{className:"items",children:i.map((function(e){return Object(m.jsx)(N,{id:e.id,title:e.title,price:e.price,image:e.image,rating:e.rating})}))})]}),Object(m.jsxs)("div",{className:"payment__container--section",children:[Object(m.jsx)("div",{className:"title",children:Object(m.jsx)("h3",{children:"Payment Method"})}),Object(m.jsx)("div",{className:"detail",children:Object(m.jsx)("form",{onSubmit:function(e){},children:Object(m.jsx)(I.CardElement,{onChange:function(e){}})})})]})]})})},L=c(43),R=Object(L.a)("pk_test_51ItzojHD53KRYGMTu80ANwy1xwc2X70qkCa9oURPzXUEtdWIY3ThMmPzlpcIZknCNzAXFZM6kuO1fsu4YpHaq9DU00XTrq8pOy");var D=function(){var e=O(),t=Object(r.a)(e,2),c=(t[0].basket,t[1]);return Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){console.log("The user is ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(m.jsx)(u.a,{children:Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)(f.c,{children:[Object(m.jsx)(f.a,{path:"/login",children:Object(m.jsx)(M,{})}),Object(m.jsxs)(f.a,{path:"/checkout",children:[Object(m.jsx)(x,{}),Object(m.jsx)(T,{})]}),Object(m.jsxs)(f.a,{path:"/payment",children:[Object(m.jsx)(x,{}),Object(m.jsx)(I.Elements,{stripe:R,children:Object(m.jsx)(w,{})})]}),Object(m.jsxs)(f.a,{path:"/",children:[Object(m.jsx)(x,{}),Object(m.jsx)(v,{})]})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(h,{initialState:{basket:[],user:null},reducer:y,children:Object(m.jsx)(D,{})})}),document.getElementById("root")),z()}},[[72,1,2]]]);
//# sourceMappingURL=main.3c69d8bf.chunk.js.map