fetch('https://pokeapi.co/api/v2/pokemon?offset=70&limit=50')
  .then(response => response.json())
  .then(data => calling(data.results));
let names = '';
let abty;
let container = document.getElementById("mainContainer")
const calling = (datas) => {
   datas.map((dat) => {
        console.log(dat)
        fetch(dat.url)
            .then(response => response.json())
            .then(data => {
    
                container.innerHTML += `
                    <div class="container">
                    <h1>${data.name}</h1>
                    <h2> Ablities </h2>
                    <h3 class="abty"><b>${data.abilities.map((mov) => mov.ability.name)}<b></h3>
                    <h2>Moves</h2>
                    <p> ${data.moves.map((mov) => mov.move.name)}<p><br>
                    <h2>Weight</h2>
                    <h3>${data.weight}</h3>
                    </div><br><br>

                `

            });
    })
}