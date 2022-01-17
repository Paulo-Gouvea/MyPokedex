import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';



export const Container = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  margin: 0 ${RFValue(8)}px 0 ${RFValue(8)}px;

  background-color: ${({theme}) => theme.colors.grass};
`;

export const TypeName = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.white};
`