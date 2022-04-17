import React from 'react';

import { Container, InputSearch, UserIcon, IconSearch, TextUser, Separeitor, DivIcon } from './styles';
const SerchArea: React.FC = () => {
   return (
      <Container>
        
        <InputSearch>
        
        <input type="text" placeholder='Pesquisar Tiket' />
        
        <DivIcon>
        
        <Separeitor/>
        
        <IconSearch/>
       </DivIcon>
        
         </InputSearch>
        
        <TextUser>
        
            <span>Usuario</span>
        
            <UserIcon />
        
         </TextUser>
      </Container >
   )
}

export default SerchArea;