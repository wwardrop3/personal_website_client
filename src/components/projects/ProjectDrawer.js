import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Close } from '@mui/icons-material';
import { Projects } from './Projects';
import { GoogleEarth } from './GoogleEarth';
import { Hitch } from './Hitch';

export default function ProjectDrawer({ projectName }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    React.useEffect(
        () => {
            toggleDrawer("bottom", true)
        }, [projectName]
    )

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'bottom' ? '250' : "auto" }}
            role="presentation"

        // onKeyDown={toggleDrawer(anchor, false)}


        >
            <Close
                fontSize='large'
                style={{ position: "absolute", right: "5%", top: "2%" }}

                onClick={toggleDrawer(anchor, false)} />

            <h2>{projectName}</h2>

            <div hidden={projectName != "Google Earth" ? "none" : ""}>
                <GoogleEarth />
            </div>

            <div hidden={projectName != "Hitch" ? "none" : ""}>
                <Hitch />
            </div>

        </Box>
    );

    return (
        <div>

            <React.Fragment key={"bottom"}>
                <Button onClick={toggleDrawer("bottom", true)}>{"bottom"}</Button>
                <Drawer

                    anchor={"bottom"}
                    open={state["bottom"]}
                    onClose={toggleDrawer("bottom", false)}
                >
                    {list("bottom")}
                </Drawer>
            </React.Fragment>

        </div>
    );
}
