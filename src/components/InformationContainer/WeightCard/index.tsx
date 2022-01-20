import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import {
   Container,
   Info,
   Spec,
   Title,
} from './styles';

import Icon from '../../../assets/Weight.svg';

interface WeightCardProps {
   value: string
}
 
export function WeightCard({
   value
}: WeightCardProps){
   return (
      <Container>
          <Info>
              <Icon 
                height={RFValue(16)}
                width={RFValue(16)}
              />
              <Spec>{value}</Spec>
          </Info>

          <Title>Weight</Title>
      </Container>
   );
}