import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
 
import {
   Container,
   Logo,
   Header,
   NameContainer,
   GoBack,
   Name,
   PokemonNumber,
   PokemonImage,
   Content,
   PokemonSlider,
   SliderButton,
   TypesContainer,
   ColorTitle,
   Informations,
   PokedexInfo,
   Stats,
   StatsTitleContainer,
   StatsTitle,
   StatsBarContainer,
} from './styles';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
 
import { getColor } from '../../utils/getColor';
import { handleStatNumber } from '../../utils/handleStatNumber';
import { handlePokedexNumber } from '../../utils/handlePokedexNumber';
import { PokemonInterface } from '../../interfaces/PokemonInterface';

import logo from '../../assets/logo_background.png';
import GoBackIcon from '../../assets/go_back.svg';
import LeftIcon from '../../assets/left.svg';
import RightIcon from '../../assets/right.svg';

import { Type } from '../../components/Type';
import { WeightCard } from '../../components/InformationContainer/WeightCard';
import { HeightCard } from '../../components/InformationContainer/HeightCard';
import { AbilityCard } from '../../components/InformationContainer/AbilityCard';
import { Line } from '../../components/InformationContainer/Line';
import { StatsBar } from '../../components/StatsBar';


interface PokemonInfoProps {
    navigation: NativeStackNavigationProp<any, any>;
}

interface Params {
    pokemon: PokemonInterface;
    pokemonList: PokemonInterface[];
}

export function PokemonInfo({
    navigation
}: PokemonInfoProps){
    navigation = useNavigation();

    const route = useRoute();
    const { pokemon, pokemonList } = route.params as Params;

    function handleGoBack(){
        navigation.goBack();
    }

    function handlePreviousPokemon(actualPokemon: PokemonInterface){
        const actualPokemonPosition = pokemonList.findIndex((element) => element.pokedexNumber === actualPokemon.pokedexNumber);
        const previousPokemonPosition = actualPokemonPosition - 1;
        const pokemon = pokemonList[previousPokemonPosition];

        if(pokemon === undefined){
            return;
        }

        navigation.navigate('PokemonInfo', { pokemon, pokemonList });
    }

    function handleNextPokemon(actualPokemon: PokemonInterface){
        const actualPokemonPosition = pokemonList.findIndex((element) => element.pokedexNumber === actualPokemon.pokedexNumber);
        const nextPokemonPosition = actualPokemonPosition + 1;
        const pokemon = pokemonList[nextPokemonPosition];

        if(pokemon === undefined){
            return;
        }

        navigation.navigate('PokemonInfo', { pokemon, pokemonList });
    }

   return (
      <Container cardColor={getColor(pokemon.types[0].type)} >
          <StatusBar
            backgroundColor='transparent'
            barStyle='light-content'
            translucent
          />

          <Logo 
            source={logo}
          />

          <Header>
              <NameContainer>
                  <GoBack
                    onPress={handleGoBack}
                  >
                    <GoBackIcon 
                        height={RFValue(17)}
                        width={RFValue(17)}
                    />
                  </GoBack>

                  <Name>{pokemon.name}</Name>
              </NameContainer>

              <PokemonNumber>{handlePokedexNumber(pokemon.pokedexNumber)}</PokemonNumber>
          </Header>

          <PokemonSlider>
                <SliderButton
                    onPress={() => handlePreviousPokemon(pokemon)}
                >
                    <LeftIcon 
                        width={RFValue(12)}
                        height={RFValue(24)}
                    />
                </SliderButton>
                <PokemonImage 
                    source={{uri: pokemon.image}}
                />
                <SliderButton
                    onPress={() => handleNextPokemon(pokemon)}
                >
                    <RightIcon
                        width={RFValue(12)}
                        height={RFValue(24)}
                    />
                </SliderButton>
            </PokemonSlider>

          <Content>
            <TypesContainer>
                {
                    pokemon.types.map((item) => {
                        return (
                            <Type 
                                key={item.id}
                                name={item.type}
                                typeColor={getColor(item.type)}
                            />
                        )
                    })
                }
            </TypesContainer>

            <ColorTitle cardColor={getColor(pokemon.types[0].type)} >About</ColorTitle>

            <Informations>
                <WeightCard value={pokemon.weight}/>
                <Line />
                <HeightCard value={pokemon.height}/>
                <Line />
                <AbilityCard abilities={pokemon.abilities} />
            </Informations>

            <PokedexInfo>{pokemon.pokedexDescription}</PokedexInfo>
            
            <ColorTitle cardColor={getColor(pokemon.types[0].type)} >Base Stats</ColorTitle>

            <Stats>
                <StatsTitleContainer>
                    <StatsTitle cardColor={getColor(pokemon.types[0].type)} >HP</StatsTitle>
                    <StatsTitle cardColor={getColor(pokemon.types[0].type)} >ATK</StatsTitle>
                    <StatsTitle cardColor={getColor(pokemon.types[0].type)} >DEF</StatsTitle>
                    <StatsTitle cardColor={getColor(pokemon.types[0].type)} >SATK</StatsTitle>
                    <StatsTitle cardColor={getColor(pokemon.types[0].type)} >SDEF</StatsTitle>
                    <StatsTitle cardColor={getColor(pokemon.types[0].type)} >SPD</StatsTitle>
                </StatsTitleContainer>

                <Line />

                <StatsBarContainer>
                    <StatsBar 
                        value={handleStatNumber(pokemon.stats[0].value)}
                        progress={pokemon.stats[0].value/255}
                        color={getColor(pokemon.types[0].type)}
                    />
                    <StatsBar 
                        value={handleStatNumber(pokemon.stats[1].value)}
                        progress={pokemon.stats[1].value/190}
                        color={getColor(pokemon.types[0].type)}
                    />
                    <StatsBar 
                        value={handleStatNumber(pokemon.stats[2].value)}
                        progress={pokemon.stats[2].value/250}
                        color={getColor(pokemon.types[0].type)}
                    />
                    <StatsBar 
                        value={handleStatNumber(pokemon.stats[3].value)}
                        progress={pokemon.stats[3].value/194}
                        color={getColor(pokemon.types[0].type)}
                    />
                    <StatsBar 
                        value={handleStatNumber(pokemon.stats[4].value)}
                        progress={pokemon.stats[4].value/250}
                        color={getColor(pokemon.types[0].type)}
                    />
                    <StatsBar 
                        value={handleStatNumber(pokemon.stats[5].value)}
                        progress={pokemon.stats[5].value/200}
                        color={getColor(pokemon.types[0].type)}
                    />
                </StatsBarContainer>
            </Stats>
          </Content>
      </Container>
   );
}