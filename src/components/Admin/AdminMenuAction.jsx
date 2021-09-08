import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";


const AdminMenuAction = ({children, setOpen}) => {
    return (
        <div
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
        >
            <List>
                {children.map(({text, action, icon}) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} onClick={action}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default AdminMenuAction;
