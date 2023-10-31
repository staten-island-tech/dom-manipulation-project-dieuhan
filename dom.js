/* const DOMSelectors = {
    // store all related code for selecting elements here
        form: document.querySelector("#form"),
        pokemon: document.querySelector(".pokemon-name"),
        h2s: document.querySelectorAll("h2"),
        type: document.querySelector(".ele-type"),
        img: document.querySelector("image"),
        card: document.querySelector("card")

    };

   

    console.log(DOMSelectors.card)
    DOMSelectors.form.addEventListener("submit", function (event) {
      event.preventDefault();
        DOMSelectors.card.forEach((header)=> header.textContent = DOMSelectors.card, 
      
        );
    });
 */

const DOMSelectors = {
pokemon: document.querySelector(".pokemon-name"),
type: document.querySelector(".ele-type"),
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
  console.log(DOMSelectors.type.value)
  console.log(DOMSelectors.img.value)
  

  function card (){
    DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `<div class="card"> <h2 class="names"> ${DOMSelectors.pokemon.value}  
    ${DOMSelectors.type.value}  </h2> <img class ="img-edit" src=${DOMSelectors.img.value} alt=""> </div> `)
    
  };
  card()});

  /* function remove(){
    let buttons = document.querySelectorAll("button")
    buttons.forEach((btn)=> btn.addEventListener('click', function(event){
      console.log(event.target.parentElement);
    })
    );
  }
  
  remove(); */
  
    












 




 










