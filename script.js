let form = document.getElementById("snacksForm")
let ul= document.querySelector("ul")
form.addEventListener("submit", (event)=>{
  event.preventDefault();

let li = document.createElement("li")
let name = form.querySelector("#snackName").value;
let quantity = form.querySelector("#snackQuantity").value
let price = form.querySelector("#price").value
let image = form.querySelector("#image").value


li.innerHTML = `<h6>Name: </h6> <p> ${name} </p>
<h3>Price:<h6/> <p>${price}<p>
<h3>quantity:</h6> <p>${quantity}</p>
<img src = ${image} alt="image" /> `;
ul.append(li)
 });



     
 