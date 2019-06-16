const PokemonUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

const fetchPokemon = () => {
    return (
        fetch(PokemonUrl)
            .then(response => response.json())
            // .then(data => {
            //     console.log(data.results);
            //     // PARA HACER FETCH DE CADA URL QUE ME devuelve el array de objetos de data
            //     return data.results.map(item => {
            //         return (
            //             fetch(item.url)
            //                 .then(response => response.json())
            //                 .then(dataAllPokemon => {
            //                     console.log(dataAllPokemon.name);
            //                     return {
            //                         nameAllPokemon: dataAllPokemon.name
            //                     }
            //                 })
            //         );
            //     });
            // })
    );
}
export default fetchPokemon;