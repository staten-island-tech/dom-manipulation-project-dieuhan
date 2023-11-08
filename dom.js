const DOMSelectors = {
pokemon: document.querySelector(".pokemon-name"),
img: document.querySelector(".image"),
card: document.querySelector(".card"),
input: document.querySelector(".input"),
gallery: document.querySelector(".gallery"),
form: document.querySelector("#form"),
remove: document.querySelector("#remove"),

};


console.log(DOMSelectors);
DOMSelectors.form.addEventListener("submit", function (event){
  event.preventDefault();
  console.log(DOMSelectors.pokemon.value)
  console.log(DOMSelectors.img.value)
  

  function card (){
    DOMSelectors.gallery.insertAdjacentHTML("beforeend", `<div class="card"> <h2 class="names"> 
    ${DOMSelectors.pokemon.value}  
    <img class ="img-edit" src=${DOMSelectors.img.value} alt="">
  
    </h2> 
    <button class="remove" type ="remove">remove</button> 
    </div> `)
    
  }
  card()
  clear()
  remove()
});



  function clear(){
    DOMSelectors.pokemon.value = ""
    DOMSelectors.img.value = ""
    
   
    
   
  }

 function remove(){
    const button = document.querySelectorAll(".remove");
    button.forEach((button)=> button.addEventListener("click", function(button){
      button.target.parentElement.remove()}))};
  
 
  

    












 




 










