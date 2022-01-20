export function handlePokedexNumber(pokedexNumber: number){
    if(pokedexNumber.toString().length === 1){
        return `#00${pokedexNumber}`;
    }else if(pokedexNumber.toString().length === 2){
        return `#0${pokedexNumber}`;
    }else {
        return `#${pokedexNumber}`;
    }
}