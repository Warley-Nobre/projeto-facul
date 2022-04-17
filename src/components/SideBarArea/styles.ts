import styled from 'styled-components';

import { Home } from "@styled-icons/entypo"

import { Message } from "@styled-icons/material"

import { Headset } from "styled-icons/bootstrap"

export const Sidebar = styled.div`
grid-area: SB;
padding-top: 30px;
`;

export const MenuItem = styled.div`
color: var(--color5);
width: 250px;
height: 47px;
display: flex;
flex-direction: row;
align-items: center;
background-color: var(--color1);
&:hover  {
    cursor: pointer;
    transition: background-color all 0,7ms;
    color: var(--color2);
    background-color: var(--color3);
    border-left: 3px  solid var(--color2);
}

`;

export const IconHome = styled(Home)`
background-color: var(colo1);
margin: 0px 9px 0px 15px;

display: flex;
width: 20px;
height: 20px;

`;



export const IconTiket = styled(Headset)`

margin: 0px 9px 0px 15px;

display: flex;
width: 20px;
height: 20px;

`;


export const IconAvisos = styled(Message)`

margin: 0px 9px 0px 15px;

display: flex;
width: 20px;
height: 20px;

`;

