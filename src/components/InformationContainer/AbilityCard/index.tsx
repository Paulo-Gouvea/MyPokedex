import React from 'react';

import {
   Container,
   Ability,
   Title,
} from './styles';

interface AbilityCardProps {
   abilities: {
      id: number;
      ability: string;
  }[];
}
 
export function AbilityCard({
   abilities
}: AbilityCardProps){
   return (
      <Container>
         {
            abilities.map(item => {
               return (
                  <Ability key={item.id}>{item.ability}</Ability>
               )
            })
         }
         {/* <Ability>Water Compaction</Ability>
         <Ability>Water Compaction</Ability> */}
         <Title>Ability</Title>
      </Container>
   );
}