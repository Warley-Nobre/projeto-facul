import React from 'react';

import { Sidebar, MenuItem, IconHome, IconTiket, IconAvisos } from './styles';

const SideBarArea: React.FC = () => {
  return (
    <Sidebar>

      <MenuItem>
        <IconHome />
        Página Inicial
      </MenuItem>

      <MenuItem>
        <IconTiket />
        Tickets
      </MenuItem>

      <MenuItem>
        <IconAvisos />
        Mural de Avisos
      </MenuItem>


    </Sidebar>
  )
}

export default SideBarArea;