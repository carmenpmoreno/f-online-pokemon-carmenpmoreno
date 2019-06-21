const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

const fetchPokemon = () => {
    return (
        fetch(pokemonUrl)
            .then(response => response.json())
    );
}
export default fetchPokemon;