import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';

import {
    Container,
    Header,
    TitleContainer,
    HeaderTitle,
    Input,
    PokemonListWrapper,
    PokemonList,
} from './styles';

import Logo from '../../assets/logo.svg';
import AlphabeticalOrder from '../../assets/alphabetical_order.svg';

import { PokemonCard } from '../../components/PokemonCard';

export function Home(){
    const DATA = [
        {
            pokedexNumber: '#001',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            name: 'Bulbasaur'
        },
        {
            pokedexNumber: '#002',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
            name: 'Ivysaur'
        },
        {
            pokedexNumber: '#003',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
            name: 'Venusaur'
        },
        {
            pokedexNumber: '#004',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
            name: 'Charmander'
        },
        {
            pokedexNumber: '#005',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
            name: 'Charmeleon'
        },
        {
            pokedexNumber: '#001',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
            name: 'Charizard'
        },
        {
            pokedexNumber: '#007',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
            name: 'Squirtle'
        },
        {
            pokedexNumber: '#008',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
            name: 'Wartortle'
        },
        {
            pokedexNumber: '#009',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
            name: 'Blastoise'
        },
        {
            pokedexNumber: '#010',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
            name: 'Cartepie'
        },
        {
            pokedexNumber: '#011',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png',
            name: 'Metapod'
        },
        {
            pokedexNumber: '#012',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png',
            name: 'Burteflee'
        },
        {
            pokedexNumber: '#013',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
            name: 'Weedle'
        },
        {
            pokedexNumber: '#014',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png',
            name: 'Kakuna'
        },
        {
            pokedexNumber: '#015',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png',
            name: 'Beedrill'
        },
        {
            pokedexNumber: '#016',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
            name: 'Pidgey'
        },
        {
            pokedexNumber: '#017',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png',
            name: 'Pidgeotto'
        },
        {
            pokedexNumber: '#018',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png',
            name: 'Pidgeot'
        },
    ]
    return (
        <Container>
            <Header>
                <TitleContainer>
                    <Logo
                        width={RFValue(24)}
                        height={RFValue(32)}
                    />
                    <HeaderTitle>Pokédex</HeaderTitle>
                </TitleContainer>

                <AlphabeticalOrder
                    width={RFValue(20)}
                    height={RFValue(32)}
                />
            </Header>

            <Input 
                placeholder='Procurar'
                textAlign='center'
            />

            <PokemonListWrapper>
                <PokemonList 
                    data={DATA}
                    keyExtractor={item => item.pokedexNumber}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => 
                        <PokemonCard
                            pokedexNumber={item.pokedexNumber}
                            image={item.image}
                            name={item.name}
                        />
                    }
                />
            </PokemonListWrapper>
        </Container>
    );
}