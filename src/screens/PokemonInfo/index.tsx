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
import { useNavigation } from '@react-navigation/native';
 
import logo from '../../assets/logo_background.png';
import GoBackIcon from '../../assets/go_back.svg';

import { useTheme } from 'styled-components';

import { Type } from '../../components/Type';
import { WeightCard } from '../../components/InformationContainer/WeightCard';
import { HeightCard } from '../../components/InformationContainer/HeightCard';
import { AbilityCard } from '../../components/InformationContainer/AbilityCard';
import { Line } from '../../components/InformationContainer/Line';
import { StatsBar } from '../../components/StatsBar';

interface PokemonInfoProps {
    navigation: NativeStackNavigationProp<any, any>;
}

export function PokemonInfo({
    navigation
}: PokemonInfoProps){
    const theme = useTheme();
    navigation = useNavigation();

    const pokemon = {
        name: 'Bulbasaur',
        number: '001',
        type: ['Grass', 'Poison'],
        weight: '999,9',
        height: '100,0',
        abilities: ['Water Compaction', 'Water Compaction'],
        stats: [45, 49, 49, 65, 65, 45]
    }

    function HandleGoBack(){
        navigation.goBack();
    }

   return (
      <Container>
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
                    onPress={HandleGoBack}
                  >
                    <GoBackIcon 
                        height={RFValue(17)}
                        width={RFValue(17)}
                    />
                  </GoBack>

                  <Name>Bulbasaur</Name>
              </NameContainer>

              <PokemonNumber>#001</PokemonNumber>
          </Header>

          <Content>
            <PokemonImage 
                source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'}}
            />

            <TypesContainer>
                {
                    pokemon.type.map((item) => {
                        return (
                            <Type 
                                key={item}
                                name={item}
                            />
                        )
                    })
                }
            </TypesContainer>

            <ColorTitle>About</ColorTitle>

            <Informations>
                <WeightCard />
                <Line />
                <HeightCard />
                <Line />
                <AbilityCard />
            </Informations>

            <PokedexInfo>There is a plant seed in its back right from the day this{'\n'}Pokémon is born. The seed slowly grows larger.</PokedexInfo>
            
            <ColorTitle>Base Stats</ColorTitle>

            <Stats>
                <StatsTitleContainer>
                    <StatsTitle>HP</StatsTitle>
                    <StatsTitle>ATK</StatsTitle>
                    <StatsTitle>DEF</StatsTitle>
                    <StatsTitle>SATK</StatsTitle>
                    <StatsTitle>SDEF</StatsTitle>
                    <StatsTitle>SPD</StatsTitle>
                </StatsTitleContainer>

                <Line />

                <StatsBarContainer>
                    <StatsBar 
                        value='45'
                        progress={45/255}
                        color={theme.colors.grass}
                    />
                    <StatsBar 
                        value='49'
                        progress={49/190}
                        color={theme.colors.grass}
                    />
                    <StatsBar 
                        value='49'
                        progress={49/250}
                        color={theme.colors.grass}
                    />
                    <StatsBar 
                        value='65'
                        progress={65/194}
                        color={theme.colors.grass}
                    />
                    <StatsBar 
                        value='65'
                        progress={65/250}
                        color={theme.colors.grass}
                    />
                    <StatsBar 
                        value='45'
                        progress={45/200}
                        color={theme.colors.grass}
                    />
                </StatsBarContainer>
            </Stats>
          </Content>
      </Container>
   );
}