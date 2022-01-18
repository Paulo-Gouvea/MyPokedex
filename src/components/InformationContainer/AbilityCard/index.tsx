import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import {
   Container,
   Ability,
   Title,
} from './styles';
 
export function AbilityCard(){
   return (
      <Container>
         <Ability>Water Compaction</Ability>
         <Ability>Water Compaction</Ability>
         <Title>Ability</Title>
      </Container>
   );
}