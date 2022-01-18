import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: ${RFValue(70)}px;
`;

export const Info = styled.View`
    flex-direction: row;

    margin-bottom: ${RFValue(8)}px;
`

export const Spec = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.dark_gray};

    margin-left: ${RFValue(8)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(8)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.medium_gray};

    text-align: center;
`