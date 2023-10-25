const DOMSelectors = {
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

      




