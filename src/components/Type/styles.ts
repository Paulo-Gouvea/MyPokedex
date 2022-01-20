import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface TypeStyleProps {
  typeColor: string;
}

export const Container = styled.View<TypeStyleProps>`
  width: ${RFValue(75)}px;
  height: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  margin: 0 ${RFValue(8)}px 0 ${RFValue(8)}px;

  background-color: ${({typeColor}) => typeColor};
`;

export const TypeName = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.white};
`