import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../services/api';

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
import NumericalOrder from '../../assets/numerical_order.svg';

import { PokemonCard } from '../../components/PokemonCard';

interface HomeProps {
    navigation: NativeStackNavigationProp<any, any>
}

interface pokemonListProps {
    height: number;
    id: number;
    name: string;
    image: string;
    type: string;
}

export function Home({
    navigation
}: HomeProps){
    const [pokemonList, setPokemonList] = useState<pokemonListProps[]>([]);
    navigation = useNavigation();

    function handleChangeScreen(){
        navigation.navigate('PokemonInfo');
    }

    function handlePokedexNumber(id: number){
        let formattedNumber = id.toString();

        if(formattedNumber.length === 1){
            return `#00${formattedNumber}`;
        }else if(formattedNumber.length === 2){
            return `#0${formattedNumber}`;
        }else{
            return `#${formattedNumber}`;
        }
    }

    useEffect(() => {
        async function fetchPokemon(){
            const response = await api.get('pokemon?limit=9&offset=0');
            const allPokemons = response.data.results;

            const allPokemonsFormatted = allPokemons.map((item) => item.name);

            allPokemonsFormatted.map(async(item) => {
                await api.get(`pokemon/${item}`)
                .then((response) => {
                    let currentPokemon = {
                        height: response.data.height,
                        id: response.data.id,
                        name: response.data.name,
                        image: response.data.sprites.other.home.front_default,
                        type: response.data.types[0].type.name
                        //abilities
                        //stats
                    }

                    setPokemonList(oldState => [...oldState, currentPokemon])
                })
            })
        }

        fetchPokemon();
    }, []);

    return (
        <Container>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <TitleContainer>
                    <Logo
                        width={RFValue(24)}
                        height={RFValue(32)}
                    />
                    <HeaderTitle>Pokédex</HeaderTitle>
                </TitleContainer>

                <NumericalOrder
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
                    data={pokemonList}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => 
                        <PokemonCard
                            pokedexNumber={handlePokedexNumber(item.id)}
                            image={item.image}
                            name={item.name}
                            onPress={handleChangeScreen}
                        />
                    }
                />
            </PokemonListWrapper>
        </Container>
    );
}