export interface PokemonInterface {
    id: number;
    pokedexNumber: number;
    image: string;
    name: string;
    types: {    
        id: number;
        type: string;
    }[];
    weight: string;
    height: string;
    abilities: {
        id: number;
        ability: string;
    }[];
    pokedexDescription: string;
    stats: {
        id: number;
        stat: string;
        value: number;
    }[];
}