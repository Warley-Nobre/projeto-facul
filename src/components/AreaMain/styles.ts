import styled from 'styled-components';

import {ArrowIosForwardOutline} from "styled-icons/evaicons-outline"

import { AddCircle } from "styled-icons/fluentui-system-regular"

import { Cancel } from "styled-icons/material-outlined"

export const Container = styled.div`

display: flex;
flex-direction: column;
border: 12px solid var(--color3);
padding: 12px;
width: 100%;
height: 100%;
`;

export const NewTikets = styled.div`
cursor: pointer;
display: flex;
align-items: center;
width: auto;
height: 15px;
color: var(--color2);
`;

export const IconArrow = styled(ArrowIosForwardOutline)`
color: var(--color2);
width: 20px;
height: 20px;
margin-right: 12px;

`;

export const InputTitle = styled.input`
display: flex;
padding: 7px 12px 8px 16px;
width: auto;
height: 30px;
border-radius: 8px;
background-color: var(--color3);

`;

export const SelectTiket = styled.select`
padding: 7px 0px 8px 16px;
width: auto;
height: 30px;
border-radius: 8px;
background-color: var(--color3);

`;

export const LabelTiket = styled.label`
margin: 18px 0px 8px 0px;
color: var(--color5);

`;

export const Organiza = styled.div`
margin-right: 7px;
display: flex;
flex-direction: column;
width: 50%;
height: auto;

`;


export const InputDescricao = styled.textarea`
padding: 12px;
cursor: pointer;
border-radius: 8px;
background-color: var(--color3);
width: 100%;
height: 243px;

`;

export const Organiza2 = styled.div`
margin-top: 71px;
display: flex;
justify-content: space-between;
width: 100%;
height: auto;

`;

export const Divisor = styled.div`
margin-top: 30px;
border: 1px solid var(--color2);
width: auto;


`;

export const ButtonCancel = styled.button`
padding: 0px 20px;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid var(--color2);
background-color: var(--color1);
color: var(--color2);
width: 151px;
height: 37px;


`;

export const IconCancel = styled(Cancel)`
width: 16px;
height: 16px;


`;

export const ButtonOpen = styled.button`
margin-left: 12px;
padding: 0px 20px;
background-color: var(--color2);
color: var(--color1);
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-between;
width: 151px;
height: 37px;


`;

export const IconOpen = styled(AddCircle)`
width: 16px;
height: 16px;


`;

export const DivButton = styled.div`
margin-top: 30px;
display: flex;
width: auto;
height: auto;


`;

export const ColorPrioryt = styled.div`
margin-left: 10px;
border-radius: 8px;
border-bottom: 6px solid var(--color7);
width: 60px;

`;

export const DivPrioryt = styled.div`
color: var(--color5);
margin: 18px 0px 7px 0px;
justify-content: center;
display: flex;
width: 140px;
height: auto;
align-items: center;

`;

export const DivDescricao = styled.div`
margin-left: 7px;
display: flex;
flex-direction: column;
width: 50%;
height: auto;
`;








