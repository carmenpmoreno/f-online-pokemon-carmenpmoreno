const PokemonUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

const fetchPokemon = () => {
    return(
        fetch(PokemonUrl)
        .then(response => response.json())
    );
}
export default fetchPokemon;