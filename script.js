let form = document.getElementById("snacksForm")
let ul= document.querySelector("ul")
form.addEventListener("submit", (event)=>{
  event.preventDefault();

let li = document.createElement("li")
let name = form.querySelector("#snackName").value;
let quantity = form.querySelector("#snackQuantity").value;
let price = form.querySelector("#price").value;
let image = form.querySelector("#image").value;


li.innerHTML = `<img src = ${image} alt="image" /> 
<h3>name: </h3> <p> ${name} </p>
<h3>price:<h3/> <p>${price}<p>
<h3>quantity:</h3> <p>${quantity}</p>
<button class="toggleButton">In Stock</button>;
<button class="removeButton">Delete</button`;

ul.append(li);
form.reset();
 });

ul.addEventListener("click", (event) => {
  if(event.target.classList.contains("removeButton")){
    let li = event.target.closest("li");
    li.remove();
  }  else if( event.target.classList.contains("toggleButton"))
  { let toggleButton =event.target;
    toggleStockStatus(toggleButton);
  }
});

function toggleStockStatus(button){
  let stockStatus = button.textContent;
  button.textContent = stockStatus === "In Stock" ? "out of Stock" :"In Stock";
}







