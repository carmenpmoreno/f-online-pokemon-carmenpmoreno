const evolutionUrl = 'https://pokeapi.co/api/v2/pokemon-species/?limit=25/';

const fetchEvolution = () => {
    return (
        fetch(evolutionUrl)
            .then(response => response.json())
    );
}
export default fetchEvolution;