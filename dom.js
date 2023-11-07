const DOMSelectors = {
pokemon: document.querySelector(".pokemon-name"),
img: document.querySelector(".image"),
card: document.querySelector(".card"),
input: document.querySelector(".input"),
gallery: document.querySelector(".gallery"),
form: document.querySelector("#form"),
};


console.log(DOMSelectors);
DOMSelectors.form.addEventListener("submit", function (event){
  event.preventDefault();
  console.log(DOMSelectors.pokemon.value)
  console.log(DOMSelectors.img.value)
  

  function card (){
    DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `<div class="card"> <h2 class="names"> ${DOMSelectors.pokemon.value}  
    <img class ="img-edit" src=${DOMSelectors.img.value} alt=""> </h2>  </div> `)
    
  };
  card()});

 function remove(){
    let buttons = document.querySelectorAll("button")
    buttons.forEach((btn)=> btn.addEventListener('click', function(event){
      console.log(event.target.parentElement);
    })
    );
  }
  
  remove(); 
  
    












 




 










