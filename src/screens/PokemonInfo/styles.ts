import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface PokemonInfoStyleProps {
    cardColor: string;
}

export const Container = styled.View<PokemonInfoStyleProps>`
  flex: 1;
  background-color: ${({cardColor}) => cardColor};

  align-items: center;
`;

export const Logo = styled.Image`
    position: absolute;

    height: ${RFValue(208)}px;
    width: ${RFValue(208)}px;

    top: ${getStatusBarHeight() + 32}px;
    right: 8px;
`;

export const Header = styled.View`
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: ${RFValue(24) + getStatusBarHeight()}px 0 ${RFValue(24)}px 0; 
`

export const NameContainer = styled.View`
    flex-direction: row;

    align-items: center;
`

export const GoBack = styled.TouchableOpacity`
    width: 24px;
    height: 32px;

    margin-right: 16px;
`

export const Name = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
`

export const PokemonNumber = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.View`
    width: 97%;
    height: 60%;

    align-items: center;

    background-color: ${({theme}) => theme.colors.white};

    bottom: ${getBottomSpace() + 4}px;
    position: absolute;

    border-radius: 8px;
    padding-top: ${RFValue(60)}px;
`;

export const PokemonSlider = styled.View`
    height: ${RFValue(200)}px;
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    z-index: 1;

    margin-top: ${RFValue(25)}px;
`

export const SliderButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    width: ${RFValue(24)}px;
    height: ${RFValue(48)}px;

    margin: 0 ${RFValue(35)}px;
`

export const PokemonImage = styled.Image`
    height: ${RFValue(200)}px;
    width: ${RFValue(200)}px;
`

export const TypesContainer = styled.View`
    flex-direction: row;
`

export const ColorTitle = styled.Text<PokemonInfoStyleProps>`
    margin: ${RFValue(16)}px 0 ${RFValue(16)}px 0;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ cardColor }) => cardColor};
`;

export const Informations = styled.View`
    width: ${RFValue(315)}px;
    height: ${RFValue(50)}px;

    flex-direction: row;
    justify-content: space-between;
`

export const PokedexInfo = styled.Text`
    margin-top: ${RFValue(16)}px;

    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.dark_gray};
`

export const Stats = styled.View`
    width: ${RFValue(312)}px;

    flex-direction: row;
`

export const StatsTitleContainer = styled.View`
    margin-right: ${RFValue(8)}px;
`

export const StatsTitle = styled.Text<PokemonInfoStyleProps>`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ cardColor }) => cardColor};
`
export const StatsBarContainer = styled.View`
    flex: 1;
`

export const StatsBar = styled.View`
    flex-direction: row;
    align-items: center;

    margin-bottom: ${RFValue(2.2)}px;
`

export const StatsBarValue = styled.Text`
    margin: 0 ${RFValue(8)}px;
`

export const ProgressBarContainer = styled.View`
    flex: 1;
`