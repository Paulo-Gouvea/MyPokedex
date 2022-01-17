import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(104)}px;
  height: ${RFValue(112)}px;

  background-color: ${({theme}) => theme.colors.white};

  border-width: 1px;
  border-color: ${({theme}) => theme.colors.grass};
  border-radius: 8px;

  margin-bottom: 8px;
`;

export const Header = styled.View`
    height: 16px;
    align-items: flex-end;
    
    padding-right: 8px;
`

export const PokedexNumber = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.fonts.regular};

    color: ${({theme}) => theme.colors.grass};
`

export const ImageContainer = styled.View`
    align-items: center;
    justify-content: center;
`

export const Image = styled.Image`
    width: ${RFValue(76)}px;
    height: ${RFValue(72)}px;
`

export const Footer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.grass};

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

export const Name = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    
    color: ${({ theme }) => theme.colors.white}
`
