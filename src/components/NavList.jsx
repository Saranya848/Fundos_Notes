import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {LightbulbOutlined as LightBulb, NotificationsNoneOutlined as Remainder, EditOutlined as Edit, ArchiveOutlined as Archive, RestoreFromTrashOutlined as Trash} from '@mui/icons-material';

const NavList = () =>{
    const navList = [
        {id: 1, name: 'Notes', icon: <LightBulb/>},
        {id: 2, name: 'Remainders', icon: <Remainder/>},
        {id: 3, name: 'Edit Labels', icon: <Edit/>},
        {id: 4, name: 'Archive', icon: <Archive/>},
        {id: 5, name: 'Trash', icon: <Trash/>}
    ];
    return(
        
        <List>
          {
          navList.map((list) => (
            <ListItem key={list.id}>
              <ListItemButton>
                <ListItemIcon>
                  {list.icon}
                </ListItemIcon>
                <ListItemText primary={list.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    )
}

export default NavList;