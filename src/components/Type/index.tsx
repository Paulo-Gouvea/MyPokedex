import React from 'react';
 
import {
   Container,
   TypeName
} from './styles';
 
interface TypeProps {
    name: string;
    typeColor: string;
}

export function Type({name, typeColor}: TypeProps){
   return (
      <Container typeColor={typeColor} >
          <TypeName>{name}</TypeName>
      </Container>
   );
}