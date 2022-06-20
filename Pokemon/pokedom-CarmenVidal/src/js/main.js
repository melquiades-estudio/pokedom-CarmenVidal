//import pokemons from "./data.js";

const listPokemons = document.querySelector(".lista-pokemons");
listPokemons.innerHTML ="";

function renderItem(element) {
  listPokemons.innerHTML += <article class="list-pokemons-item">
    <div class= "list-pokemons-item-content">
        <img src="${element.sprite}" alt="pokemon-1"></img>
        <h3>${element.name}
             <span>${element.type}</span>
        </h3>
        </div>
    </article>
}

function renderList(){
    listPokemons.map((e) => renderItem(e));
}


renderList();


