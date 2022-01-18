import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
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