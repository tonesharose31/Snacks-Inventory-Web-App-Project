let form = document.getElementById("snacksForm")
let ul= document.querySelector("ul")
form.addEventListener("submit", (event)=>{
  event.preventDefault();

let li = document.createElement("li")
let name = form.querySelector("#snackName").value;
let quantity = form.querySelector("#snackQuantity").value
let price = form.querySelector("#price").value
let image = form.querySelector("#image").value
let fielset = form.querySelector("fieldset").value

li.innerHTML = `<img src = ${image} alt="image" /> 
<h6>name: </h3> <p> ${name} </p>
<h3>price:<h3/> <p>${price}<p>
<h3>quantity:</h3> <p>${quantity}</p>`
{/* <h3>fielset:</h3> <p>${fielset}</p>// */}
ul.append(li) ;
 });

// const remove = document.getElementById("b")
// removeButton.textContent= "remove snack";
//   li.append(remove)
//  removeButton.addEventListener("click", (e)) => {
//   removeResource();
  
//  })
