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
    cardColor: string;
}
 
export function PokemonCard({
    pokedexNumber,
    image,
    name,
    cardColor,
    ...rest
}: PokemonCardProps){
   return (
      <Container cardColor={cardColor} >
          <Button {...rest}>
            <Header>
                <PokedexNumber cardColor={cardColor} >{pokedexNumber}</PokedexNumber>
            </Header>

            <ImageContainer>
                <Image 
                    source={{uri: image}}
                />
            </ImageContainer>

            <Footer cardColor={cardColor} >
                <Name>{name}</Name>
            </Footer>
          </Button>
      </Container>
   );
}