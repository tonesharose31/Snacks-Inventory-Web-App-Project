let form = document.getElementById("snacksForm")
let ul= document.querySelector("ul")
form.addEventListener("submit", (event)=>{
  event.preventDefault();

let li = document.createElement("li")
let name = form.querySelector("#snackName").value;
let quantity = form.querySelector("#snackQuantity").value
let price = form.querySelector("#price").value
let image = form.querySelector("#image").value

// li.innerHTML =`name:${name}
// price: ${price}
// quantity: ${quantity}
// <img src= ${image} alt= "image"/>
// `
li.innerText = `<h3>Name: </h3> <p> ${name} </p>
<h3>Price:<h3/> <p>${price}<p>
<h3>quantity:</h3> <p>${quantity}</p>
<img src = ${image} alt="image" /> `;
ul.append(li)
 });



     
 