import React from 'react';
import { TouchableOpacityProps } from 'react-native';
 
import {
   Container,
   Button,
   Header,
   PokedexNumber,
   ImageContainer,
   Image,
   Footer,
   Name,
} from './styles';

interface PokemonCardProps extends TouchableOpacityProps {
    pokedexNumber: string;
    image: string;
    name: string;
}
 
export function PokemonCard({
    pokedexNumber,
    image,
    name,
    ...rest
}: PokemonCardProps){
   return (
      <Container>
          <Button {...rest}>
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
          </Button>
      </Container>
   );
}