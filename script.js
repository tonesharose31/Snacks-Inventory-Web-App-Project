let form = document.getElementById("snacksForm")
let ul= document.querySelector("ul")
form.addEventListener("submit", (event)=>{
  event.preventDefault();

let li = document.createElement("li")
let name = form.querySelector("#snackName").value;
let quantity = form.querySelector("#snackQuantity").value
let price = form.querySelector("#price").value
let image = form.querySelector("#image").value

li.innerHTML =`name:${name}
price: ${price}
quantity: ${quantity}
<img src= ${image} alt= "image"/>
`
ul.append(li)
});



     
 