import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import {
   Container,
   Info,
   Spec,
   Title,
} from './styles';

import Icon from '../../../assets/Height.svg';
 
export function HeightCard(){
   return (
      <Container>
          <Info>
              <Icon 
                height={RFValue(16)}
                width={RFValue(16)}
              />
              <Spec>100,0 m</Spec>
          </Info>

          <Title>Height</Title>
      </Container>
   );
}