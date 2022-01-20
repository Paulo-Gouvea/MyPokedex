import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import {
   Container,
   Info,
   Spec,
   Title,
} from './styles';

import Icon from '../../../assets/Height.svg';

interface HeightCardProps {
   value: string;
}
 
export function HeightCard({
   value
}: HeightCardProps){
   return (
      <Container>
          <Info>
              <Icon 
                height={RFValue(16)}
                width={RFValue(16)}
              />
              <Spec>{value}</Spec>
          </Info>

          <Title>Height</Title>
      </Container>
   );
}