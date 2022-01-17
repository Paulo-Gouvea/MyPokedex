import React from 'react';
 
import {
   Container,
   Header,
   PokedexNumber,
   ImageContainer,
   Image,
   Footer,
   Name,
} from './styles';

interface PokemonCardProps {
    pokedexNumber: string;
    image: string;
    name: string;
}
 
export function PokemonCard({
    pokedexNumber,
    image,
    name
}: PokemonCardProps){
   return (
      <Container>
          <Header>
              <PokedexNumber>{pokedexNumber}</PokedexNumber>
          </Header>

          <ImageContainer>
            <Image 
                source={{uri: image}}
            />
          </ImageContainer>

          <Footer>
              <Name>{name}</Name>
          </Footer>
      </Container>
   );
}