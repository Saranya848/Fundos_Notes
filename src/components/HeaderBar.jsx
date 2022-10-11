import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Menu} from '@mui/icons-material';

const Header = styled(AppBar)`
        z-index: 1201;
        height: 70px;
        background: #fff;
        box-shadow: inset 0 -1px 0 0 #dadce0
`;

const Heading = styled(Typography)`
        font-size: 25px;
        color: #5f6368;
        padding: 10px
`

const HeaderBar = ({ open, handleDrawer }) =>{
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
    return(
        <Header open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5}}
          >
            <Menu />
          </IconButton>
          <img style={{width: 30}} src={logo} alt="Logo"/>
          <Heading>
            Keep
          </Heading>
        </Toolbar>
      </Header>
    )
}

export default HeaderBar;