import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { PokemonInterface } from '../../interfaces/PokemonInterface';

export const Container = styled.View`
  flex: 1;

  padding: 0 ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(24) + getStatusBarHeight()}px;
  padding: 0 8px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.bold};

  margin-top: 4px;
  margin-left: ${RFValue(16)}px;
`

export const Button = styled.TouchableOpacity`
  
`

export const Input = styled.TextInput`
  height: ${RFValue(32)}px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme})=> theme.colors.light_gray};

  margin: 8px 0 16px 0;
`
export const PokemonListWrapper = styled.View`
  flex: 1;
`

export const PokemonList = styled(
  FlatList as new (props: FlatListProps<PokemonInterface>) => FlatList<PokemonInterface>).attrs({})``;

export const PokemonCardContainer = styled.View`

`