(this["webpackJsonpecommerce-frontend"]=this["webpackJsonpecommerce-frontend"]||[]).push([[0],{114:function(t,e,a){},115:function(t,e,a){"use strict";a.r(e);var c=a(0),r=a(9),n=a.n(r),s=a(24),i=a(11),o=a(12),l=a(15),d=a.n(l),j=a(64),m=(a(99),a(144)),u=a(147),h=a(149),b=a(150),p=a(158),g=a(151),O=a(69),x=a.n(O),v=a(2);const y=Object(m.a)((t=>({root:{flexGrow:1},title:{flexGrow:1,cursor:"pointer"},button:{margin:t.spacing(1)},welcome:{marginRight:t.spacing(2)}})));var f=t=>{let{isLoggedIn:e,username:a,cartItemCount:c,checkAuth:r}=t;const n=y(),s=Object(i.g)();return Object(v.jsx)("div",{className:n.root,children:Object(v.jsx)(u.a,{position:"static",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(b.a,{variant:"h6",className:n.title,onClick:()=>s.push("/"),children:"E-Commerce"}),e?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(b.a,{className:n.welcome,children:["Welcome, ",a]}),Object(v.jsx)(p.a,{color:"inherit",className:n.button,onClick:()=>s.push("/cart"),children:Object(v.jsx)(g.a,{badgeContent:c,color:"secondary",children:Object(v.jsx)(x.a,{})})}),Object(v.jsx)(p.a,{color:"inherit",className:n.button,onClick:()=>s.push("/orders"),children:"Orders"}),Object(v.jsx)(p.a,{color:"inherit",className:n.button,onClick:()=>{document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",r(),s.push("/login")},children:"Logout"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p.a,{color:"inherit",className:n.button,onClick:()=>s.push("/login"),children:"Login"}),Object(v.jsx)(p.a,{color:"inherit",className:n.button,onClick:()=>s.push("/register"),children:"Register"})]})]})})})},C=a(155),w=a(152),N=a(153),k=a(154);const I=Object(m.a)({card:{margin:"1rem"},media:{height:140}});var E=t=>{let{product:e}=t;const a=I();return Object(v.jsxs)(w.a,{className:a.card,children:[Object(v.jsx)(N.a,{className:a.media,image:e.imageUrl,title:e.name}),Object(v.jsxs)(k.a,{children:[Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(v.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description}),Object(v.jsxs)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:["$",e.price]}),Object(v.jsx)(p.a,{component:s.b,to:"/products/".concat(e.id),variant:"contained",color:"primary",children:"View Details"})]})]})};const S=Object(m.a)((t=>({root:{flexGrow:1,marginTop:t.spacing(8)}})));var B=()=>{const t=S(),[e,a]=Object(c.useState)([]);return Object(c.useEffect)((()=>{d.a.get("".concat("http://localhost:5002","/api/products")).then((t=>a(t.data))).catch((t=>console.error("Error fetching products:",t)))}),[]),Object(v.jsx)("div",{className:t.root,children:Object(v.jsx)(C.a,{container:!0,children:e.map((t=>Object(v.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(E,{product:t})},t.id)))})})},L=a(156);const q=Object(m.a)((t=>({body:{maxWidth:"100%",margin:"0px",boxSizing:"border-box"},container:{display:"flex",flexDirection:"column",marginTop:t.spacing(8),marginLeft:"auto",marginRight:"auto",maxWidth:"500px"},media:{height:300},buttonContainer:{display:"flex",justifyContent:"start"},button:{marginRight:t.spacing(2)}})));var R=()=>{const{id:t}=Object(i.h)(),[e,a]=Object(c.useState)(null),[r,n]=Object(c.useState)(!0),[s,l]=Object(c.useState)(null),j=Object(i.g)(),m=q();Object(c.useEffect)((()=>{d.a.get("".concat("http://localhost:5002","/api/products/").concat(t)).then((t=>{a(t.data),n(!1)})).catch((t=>{l(t.response&&404===t.response.status?"Product not found":"Error fetching product"),n(!1)}))}),[t]);return r?Object(v.jsx)("p",{children:"Loading..."}):s?Object(v.jsx)("p",{children:s}):Object(v.jsxs)(L.a,{className:m.container,children:[Object(v.jsx)("img",{src:e.imageUrl,alt:e.name,className:m.media}),Object(v.jsx)(b.a,{variant:"h4",gutterBottom:!0,children:e.name}),Object(v.jsx)(b.a,{variant:"body1",gutterBottom:!0,children:e.description}),Object(v.jsxs)(b.a,{variant:"h6",gutterBottom:!0,children:["$",e.price]}),Object(v.jsxs)("div",{className:m.buttonContainer,children:[Object(v.jsx)(p.a,{variant:"contained",color:"primary",className:m.button,onClick:()=>{if(!document.cookie.split(";").find((t=>t.trim().startsWith("token="))))return o.b.error("You must be logged in to add items to the cart."),void j.push("/login");d.a.post("".concat("http://localhost:5004","/api/cart"),{productId:t},{withCredentials:!0}).then((t=>{o.b.success("Product added to cart")})).catch((t=>o.b.error("Error adding to cart")))},children:"Add to Cart"}),Object(v.jsx)(p.a,{variant:"contained",color:"success",className:m.button,onClick:()=>j.push("/"),children:"Back to Home"})]})]})},W=a(157);const T=Object(m.a)((t=>({container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:t.spacing(8)},form:{width:"100%",marginTop:t.spacing(1)},submit:{margin:t.spacing(3,0,2)}})));var D=t=>{let{checkAuth:e}=t;const a=T(),r=Object(i.g)(),[n,s]=Object(c.useState)(""),[l,j]=Object(c.useState)("");return Object(v.jsxs)(L.a,{component:"main",maxWidth:"xs",className:a.container,children:[Object(v.jsx)(b.a,{component:"h1",variant:"h5",children:"Login"}),Object(v.jsxs)("form",{className:a.form,onSubmit:async t=>{t.preventDefault();try{await d.a.post("".concat("http://localhost:5001","/api/users/login"),{username:n,password:l},{withCredentials:!0}),o.b.success("Logged in successfully!"),e(),r.push("/"),window.location.reload()}catch(a){o.b.error("Login failed. Please try again.")}},children:[Object(v.jsx)(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Username",name:"username",autoFocus:!0,value:n,onChange:t=>s(t.target.value)}),Object(v.jsx)(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:l,onChange:t=>j(t.target.value)}),Object(v.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Login"})]})]})};const P=Object(m.a)((t=>({container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:t.spacing(8)},form:{width:"100%",marginTop:t.spacing(1)},submit:{margin:t.spacing(3,0,2)}})));var F=()=>{const t=P(),e=Object(i.g)(),[a,r]=Object(c.useState)(""),[n,s]=Object(c.useState)(""),[l,j]=Object(c.useState)("");return Object(v.jsxs)(L.a,{component:"main",maxWidth:"xs",className:t.container,children:[Object(v.jsx)(b.a,{component:"h1",variant:"h5",children:"Register"}),Object(v.jsxs)("form",{className:t.form,onSubmit:async t=>{t.preventDefault();try{await d.a.post("".concat("http://localhost:5001","/api/users/register"),{username:a,password:n,email:l}),o.b.success("Registered successfully!"),e.push("/login")}catch(c){o.b.error("Registration failed. Please try again.")}},children:[Object(v.jsx)(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Username",name:"username",autoFocus:!0,value:a,onChange:t=>r(t.target.value)}),Object(v.jsx)(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:n,onChange:t=>s(t.target.value)}),Object(v.jsx)(W.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"email",label:"Email",type:"email",value:l,onChange:t=>j(t.target.value)}),Object(v.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Register"})]})]})};const $=Object(m.a)((t=>({container:{marginTop:t.spacing(8)},productContainer:{display:"flex",alignItems:"center",marginBottom:t.spacing(2)},productImage:{width:100,height:100,marginRight:t.spacing(2)},productDetails:{flexGrow:1},quantityField:{width:60,marginRight:t.spacing(2)},removeButton:{marginLeft:t.spacing(2)},orderButton:{marginRight:t.spacing(2)}})));var A=()=>{const t=$(),[e,a]=Object(c.useState)([]),[r,n]=Object(c.useState)(0),s=Object(i.g)(),l=async()=>{try{const t=await d.a.get("".concat("http://localhost:5004","/api/cart"),{withCredentials:!0});a(t.data.cartItems||[]),n(t.data.totalCost||0)}catch(t){o.b.error("Error fetching cart items")}};return Object(c.useEffect)((()=>{l()}),[]),Object(v.jsxs)(L.a,{className:t.container,children:[Object(v.jsx)(b.a,{variant:"h4",gutterBottom:!0,children:"Cart"}),0===e.length?Object(v.jsx)(b.a,{variant:"h6",children:"Your cart is empty"}):Object(v.jsxs)(v.Fragment,{children:[e.map((e=>Object(v.jsxs)("div",{className:t.productContainer,children:[Object(v.jsx)("img",{src:e.imageUrl,alt:e.name,className:t.productImage}),Object(v.jsxs)("div",{className:t.productDetails,children:[Object(v.jsx)(b.a,{variant:"h6",children:e.name}),Object(v.jsx)(b.a,{variant:"body1",children:e.description}),Object(v.jsx)(W.a,{type:"number",value:e.quantity,onChange:t=>(async(t,e)=>{try{if(e<=0)return void o.b.error("Quantity must be greater than 0");await d.a.put("".concat("http://localhost:5004","/api/cart/count"),{productId:t,quantity:e},{withCredentials:!0}),a((a=>a.map((a=>a.id===t?{...a,quantity:Number(e)}:a)))),o.b.success("Cart updated successfully")}catch(c){o.b.error("Error updating cart")}})(e.id,t.target.value),className:t.quantityField,inputProps:{min:1}}),Object(v.jsxs)(b.a,{variant:"body2",children:["Price: $",e.price," x ",e.quantity," = $",e.itemTotal]})]}),Object(v.jsx)(p.a,{variant:"contained",color:"secondary",onClick:()=>(async t=>{try{await d.a.delete("".concat("http://localhost:5004","/api/cart/").concat(t),{withCredentials:!0}),o.b.success("Product removed from cart"),l()}catch(e){o.b.error("Error removing product from cart")}})(e.id),className:t.removeButton,children:"REMOVE"})]},e.id))),Object(v.jsxs)(b.a,{variant:"h5",gutterBottom:!0,children:["Total Cost: $",r]}),Object(v.jsx)(p.a,{variant:"contained",color:"primary",onClick:async()=>{try{const t=e.map((t=>({productId:t.id,quantity:t.quantity})));await d.a.post("".concat("http://localhost:5003","/api/orders"),{items:t},{withCredentials:!0}),o.b.success("Order placed successfully"),a([]),s.push("/orders")}catch(t){o.b.error("Error placing order")}},className:t.orderButton,children:"PLACE ORDER"})]}),Object(v.jsx)(p.a,{variant:"contained",color:"success",className:t.button,onClick:()=>s.push("/"),children:"Back to Home"})]})};const U=Object(m.a)((t=>({root:{marginTop:t.spacing(8)},card:{marginBottom:t.spacing(2)},productImage:{width:"100%",height:"auto"},orderItem:{display:"flex",alignItems:"center"}})));var G=()=>{const t=U(),[e,a]=Object(c.useState)([]),r=Object(i.g)();return Object(c.useEffect)((()=>{(async()=>{try{const t=await d.a.get("".concat("http://localhost:5003","/api/orders"),{withCredentials:!0});a(t.data)}catch(t){console.error("Error fetching orders:",t.message)}})()}),[]),Object(v.jsxs)(L.a,{className:t.root,children:[Object(v.jsx)(b.a,{variant:"h4",gutterBottom:!0,children:"Your Orders"}),e.map((e=>Object(v.jsx)(w.a,{className:t.card,children:Object(v.jsxs)(k.a,{children:[Object(v.jsxs)(b.a,{variant:"h6",children:["Order ID: ",e.id]}),Object(v.jsxs)(b.a,{variant:"subtitle1",children:["Total: $",e.total]}),Object(v.jsx)(b.a,{variant:"subtitle1",children:"Items:"}),e.items.map((e=>Object(v.jsxs)(C.a,{container:!0,spacing:2,className:t.orderItem,children:[Object(v.jsx)(C.a,{item:!0,xs:3,children:Object(v.jsx)("img",{src:e.imageUrl,alt:e.name,className:t.productImage})}),Object(v.jsxs)(C.a,{item:!0,xs:9,children:[Object(v.jsx)(b.a,{variant:"body1",children:e.name}),Object(v.jsxs)(b.a,{variant:"body2",children:["Description: ",e.description]}),Object(v.jsxs)(b.a,{variant:"body2",children:["Quantity: ",e.quantity]}),Object(v.jsxs)(b.a,{variant:"body2",children:["Price: $",e.price]})]})]},e.productId)))]})},e.id))),Object(v.jsx)(p.a,{variant:"contained",color:"success",className:t.button,onClick:()=>r.push("/"),children:"Back to Home"})]})};var H=t=>{let{component:e,isLoggedIn:a,...c}=t;return Object(v.jsx)(i.b,{...c,render:t=>a?Object(v.jsx)(e,{...t}):Object(v.jsx)(i.a,{to:"/login"})})};a(114);var J=()=>{const[t,e]=Object(c.useState)(!0),[a,r]=Object(c.useState)(""),[n,l]=Object(c.useState)(0),m=async()=>{const t=document.cookie.split(";").map((t=>t.trim())).find((t=>t.startsWith("token="))),a=t?t.split("=")[1]:null;if(a){const t=Object(j.a)(a);r(t.username),e(!0),u()}else e(!1)},u=async()=>{try{const t=await d.a.get("".concat("http://localhost:5004","/api/cart/count"),{withCredentials:!0});l(t.data.count)}catch(t){l(0)}};return Object(c.useEffect)((()=>{m()}),[]),Object(v.jsx)(s.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(f,{isLoggedIn:t,checkAuth:m,cartItemCount:n,username:a}),Object(v.jsx)(o.a,{position:"top-center"}),Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{path:"/",exact:!0,component:B}),Object(v.jsx)(i.b,{path:"/products/:id",component:R}),Object(v.jsx)(i.b,{path:"/login",children:Object(v.jsx)(D,{checkAuth:m})}),Object(v.jsx)(i.b,{path:"/register",component:F}),Object(v.jsx)(H,{path:"/cart",component:A,isLoggedIn:t}),Object(v.jsx)(H,{path:"/orders",component:G,isLoggedIn:t}),Object(v.jsx)(i.b,{path:"*",children:Object(v.jsx)(i.a,{to:"/"})})]})]})})};n.a.render(Object(v.jsx)(J,{}),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.5af4ed4c.chunk.js.map