import styled from 'styled-components';

import {PersonFill} from "styled-icons/bootstrap"

import {Search} from "styled-icons/material"

export const Container = styled.div`
  grid-area: SA;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 20px 0px;
  flex-direction: row;
  align-items: center;
  background-color: var(--color2);
  `;

export const InputSearch = styled.form`
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 12px;
padding: 7px 10px 8px 16px;
background-color: var(--color1);
width: 460px;
height: 30px;
border-radius: 8px;


`;

export const UserIcon = styled(PersonFill)`
margin-left: 12px;
width: 25px;
height: 25px;
color: var(--color3);
background-color: var(--color2);
cursor: pointer;
`;

export const IconSearch = styled(Search)`

width: 17px;
height: 17px;
color: var(--color5);
background-color: var(--color1);
`;

export const TextUser = styled.div`
span{
  cursor: pointer;
}
display: flex;
justify-content: space-between;
width: auto;
height: auto;
align-items: center;
  color: var(--color3);
 `;


export const Separeitor = styled.div`
margin-right: 7px;
border: 1px solid var(--color5);
height:17px;
`;
export const DivIcon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;


