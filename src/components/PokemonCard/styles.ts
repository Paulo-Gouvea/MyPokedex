import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface PokemonCardStyleProps {
    cardColor: string;
}

export const Container = styled.View<PokemonCardStyleProps>`
  width: ${RFValue(104)}px;
  height: ${RFValue(112)}px;

  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-color: ${({ cardColor }) => cardColor};
  border-radius: 8px;

  margin-bottom: 8px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 100%;

    border-radius: 8px;

    background-color: ${({theme}) => theme.colors.white};
`;

export const Header = styled.View`
    height: 16px;
    align-items: flex-end;
    
    padding-right: 8px;
`

export const PokedexNumber = styled.Text<PokemonCardStyleProps>`
    font-size: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.fonts.regular};

    color: ${({ cardColor }) => cardColor};
`

export const ImageContainer = styled.View`
    align-items: center;
    justify-content: center;
`

export const Image = styled.Image`
    width: ${RFValue(76)}px;
    height: ${RFValue(72)}px;
`

export const Footer = styled.View<PokemonCardStyleProps>`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({ cardColor }) => cardColor};

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

export const Name = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    
    color: ${({ theme }) => theme.colors.white}
`
