import React from 'react';
 
import {
   Container,
   TypeName
} from './styles';
 
interface TypeProps {
    name: string;
}

export function Type({name}: TypeProps){
   return (
      <Container>
          <TypeName>{name}</TypeName>
      </Container>
   );
}