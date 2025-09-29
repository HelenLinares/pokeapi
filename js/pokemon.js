async function Detalle(h) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${h}`);
    const data = await res.json();

    console.log(data)
    document.getElementById("root").innerHTML=`
    

    const detalle = 
        <section class="c-detalle">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" 
                 alt="${data.name}" height="120" width="auto">
            <p><b>${data.name}</b></p>
            <p>ID: ${data.id}</p>
            <p>Tipo: ${tipoPoke}</p>
            <p>Altura: ${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
            <p>HP: ${data.stats[0].base_stat}</p>
            <p>Velocidad: ${data.stats[5].base_stat}</p>
            <p>Habilidad principal: ${data.abilities[0].ability.name}</p>
        </section>
    `;

    const root = document.getElementById("root");
    root.innerHTML = detalle;
}
