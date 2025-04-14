const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuffs(results);
    }
}

function doStuffs(data) {
    results = data;
    console.log("First: ", results);

}

getPokemon(url);
console.log("Second: ", results); // This will log null because the fetch is asynchronous

