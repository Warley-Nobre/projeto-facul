import React from 'react';

import { Grid } from './styles';

import Header from '../Header';

import SerchArea from '../SerchArea';

import AreaMain from '../AreaMain'

import SideBarArea from '../SideBarArea';

import FooterArea from '../FooterArea';

const Layout: React.FC = () => {
  return (
    <Grid>

      <SerchArea />

      <Header />

      <AreaMain />

      <SideBarArea />

      <FooterArea />

    </Grid>
  )
};

export default Layout;