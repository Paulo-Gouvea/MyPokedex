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
   About,
   Informations,
} from './styles';
 
import logo from '../../assets/logo_background.png';
import GoBackIcon from '../../assets/go_back.svg';

import { Type } from '../../components/Type';

export function PokemonInfo(){
    const typeData = ['Grass', 'Poison'];
   return (
      <Container>
          <StatusBar
            backgroundColor='transparent'
            barStyle='dark-content'
            translucent
          />

          <Logo 
            source={logo}
          />

          <Header>
              <NameContainer>
                  <GoBack>
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
                    typeData.map((item) => {
                        return (
                            <Type 
                                key={item}
                                name={item}
                            />
                        )
                    })
                }
            </TypesContainer>

            <About>About</About>

            <Informations>

            </Informations>
            
          </Content>
      </Container>
   );
}