import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    TitleContainer,
    Button,
    HeaderTitle,
    Input,
    PokemonListWrapper,
    PokemonList,
} from './styles';

import { getColor } from '../../utils/getColor';
import { handlePokedexNumber } from '../../utils/handlePokedexNumber';
import { pokemonCollection } from '../../utils/pokemonCollection';
import { PokemonInterface } from '../../interfaces/PokemonInterface';

import Logo from '../../assets/logo.svg';
import AlphabeticalOrder from '../../assets/alphabetical_order.svg';
import NumericalOrder from '../../assets/numerical_order.svg';

import { PokemonCard } from '../../components/PokemonCard';

interface HomeProps {
    navigation: NativeStackNavigationProp<any, any>
}

export function Home({
    navigation
}: HomeProps){
    const [pokemonList, setPokemonList] = useState<PokemonInterface[]>([]);
    const [findPokemon, setFindPokemon] = useState('');
    const [alphabeticalOrder, setAlphabeticalOrder] = useState(false);

    navigation = useNavigation();

    function handleChangeScreen(pokemon: PokemonInterface){
        navigation.navigate('PokemonInfo', { pokemon });
    }

    function handleChangeOrder(){
        setAlphabeticalOrder(!alphabeticalOrder);
    }

    useEffect(()=> {
        setPokemonList(pokemonCollection)
    }, [])

    useEffect(() => {
        function handleFindPokemon(pokemon: string){
            if(pokemon === ''){
                return;
            }

            console.log('hi')
        }

        handleFindPokemon(findPokemon)
    }, [findPokemon])

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

                <Button
                    onPress={handleChangeOrder}
                >
                    {
                        alphabeticalOrder
                        ?
                        <NumericalOrder
                            width={RFValue(20)}
                            height={RFValue(32)}
                        />
                        :
                        <AlphabeticalOrder
                            width={RFValue(20)}
                            height={RFValue(32)}
                        />
                    } 
                </Button>
            </Header>

            <Input 
                placeholder='Find'
                textAlign='center'
                value={findPokemon}
                onChangeText={setFindPokemon}
            />

            <PokemonListWrapper>
                <PokemonList 
                    data={
                        alphabeticalOrder 
                        ?
                        pokemonList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                        :
                        pokemonList.sort((a, b) => (a.pokedexNumber > b.pokedexNumber) ? 1 : ((b.pokedexNumber > a.pokedexNumber) ? -1 : 0))
                    }
                    keyExtractor={item => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => 
                        <PokemonCard
                            pokedexNumber={handlePokedexNumber(item.pokedexNumber)}
                            image={item.image}
                            name={item.name}
                            onPress={() => handleChangeScreen(item)}
                            cardColor={getColor(item.types[0].type)}
                        />
                    }
                />
            </PokemonListWrapper>
        </Container>
    );
}