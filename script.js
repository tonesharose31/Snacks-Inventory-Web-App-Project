document.getElementById("snackForm").addEventListener("submit", (event)=>{
  event.preventDefault();
  console.log(event.target.elements("snackName"));
  console.log(event.target.elements("snackQuantity"));
  console.log(event.target.elements("snackPrice"));
});
     
 