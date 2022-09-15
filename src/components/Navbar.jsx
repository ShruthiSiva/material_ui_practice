import React, { useState } from "react";
import {
    Box, 
    AppBar, 
    Toolbar, 
    styled, 
    Typography, 
    InputBase, 
    Badge, 
    Avatar, 
    Menu,
    MenuItem,
} from '@mui/material';
import { Pets } from "@mui/icons-material";
import { borderRadius } from "@mui/system";
import {
    Mail,
    Notifications
} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    // Padding left and right
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}));

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap:"10px",
    alignItems: "center",
    // If the screen is small or above (as denoted by the .up), display flex, otherwise display none. (line 24)
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "none",
    gap:"20px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        display: "flex"
    }
}));


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>

                <Typography 
                    variant="h6"
                    // don't display if the size of the screen is xs. if small or greater, display=block
                    sx={{display:{xs: "none", sm:"block"}}}
                >
                    Navbar
                </Typography>

                <Pets sx={{display:{xs: "block", sm:"none"}}}/>

                <Search>
                    <InputBase
                        placeholder="search"
                    />
                </Search>

                <Icons>
                    <Badge 
                        badgeContent={4} color="error"
                    >
                        <Mail />
                    </Badge>

                    <Badge 
                        badgeContent={4} color="error"
                    >
                        <Notifications />
                    </Badge>

                    <Avatar 
                        src="https://www.pexels.com/photo/woman-wearing-white-shirt-with-white-flower-on-her-ear-3586798/"
                        sx={{width:30, height: 30}}
                        onClick={e => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar 
                        src="https://www.pexels.com/photo/woman-wearing-white-shirt-with-white-flower-on-her-ear-3586798/"
                        sx={{width:30, height: 30}}
                    />
                    <Typography variant="span">
                        John
                    </Typography>
                </UserBox>
            </StyledToolbar> 
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;