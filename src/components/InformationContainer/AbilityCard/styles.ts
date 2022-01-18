import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: ${RFValue(115)}px;
    height: ${RFValue(50)}px;
    justify-content: space-between;
`;

export const Ability = styled.Text`
    font-size: ${RFValue(8)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_gray};

    text-align: center;
`

export const Title = styled.Text`
    font-size: ${RFValue(8)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.medium_gray};

    text-align: center;
`
