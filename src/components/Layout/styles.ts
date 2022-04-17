import styled from 'styled-components';

// header - HD 
// Serarch Area - SA
// Main - MI
// Sidebar - SB
// Footer - FT

export const Grid = styled.div`
display: grid;
grid-template-columns: 250px calc(100% - 250px);
grid-template-rows: 55px calc(100% - 87px) 32px ;

grid-template-areas:
  'HD SA'
  'SB MI'
  'FT FT' ;

  height: 100vh;

`;