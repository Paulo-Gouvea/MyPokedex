import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import {
   Container,
   Info,
   Spec,
   Title,
} from './styles';

import Icon from '../../../assets/Weight.svg';
 
export function WeightCard(){
   return (
      <Container>
          <Info>
              <Icon 
                height={RFValue(16)}
                width={RFValue(16)}
              />
              <Spec>999,9 kg</Spec>
          </Info>

          <Title>Weight</Title>
      </Container>
   );
}