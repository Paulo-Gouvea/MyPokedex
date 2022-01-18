import React from 'react';
import { ProgressBar } from 'react-native-paper';
 
import {
   Container,
   StatsBarValue,
   ProgressBarContainer,
} from './styles';

interface StatsBarProps {
    value: string;
    progress: number;
    color: string;
}
 
export function StatsBar({
    value,
    progress,
    color
}: StatsBarProps){
   return (
      <Container>
        <StatsBarValue>{value}</StatsBarValue>
        <ProgressBarContainer>
            <ProgressBar 
                progress={progress} 
                color={color} 
            />
        </ProgressBarContainer>
      </Container>
   );
}