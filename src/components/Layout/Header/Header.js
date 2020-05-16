import React from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../../index';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Drawer, Hidden, InputBase, IconButton, List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    drawer: {
        width: '250px'
    },
    title: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '80%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const Header = () => {
    const classes = useStyles();
    const [navOpen, setNavOpen] = React.useState(false);
    const [mobileMoreMenuState, setMobileMoreMenuState] = React.useState(false);
    const toggleDrawer = () => (
        setNavOpen(!navOpen)
    );
    const handleMobileMoreMenu = () => {
        setMobileMoreMenuState(!mobileMoreMenuState);
    };


    return (
        <AppContext.Consumer>
            {context => (
                <div >
                    <AppBar position="static" className={classes.root}>
                        <Toolbar>
                            <IconButton
                                edge='start'
                                className={classes.menuButton}
                                color='inherit'
                                onClick={toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>

                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                            <div className={classes.grow} />
                            <Box>
                                <Hidden xsDown>
                                    <IconButton
                                        edge="end"
                                        // onClick={handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    {/* moreMenu - should contain  */}
                                </Hidden>
                                <Hidden smUp>
                                    <IconButton
                                        onClick={handleMobileMoreMenu}
                                        color="inherit">
                                        <MoreIcon />
                                    </IconButton>
                                    {/* mobileMoreMenu */}
                                </Hidden>
                            </Box>
                        </Toolbar>
                    </AppBar>

                    <Drawer className={classes.drawer} open={navOpen} onClose={toggleDrawer}>
                        <List>
                            {context.routes.map(({ name, path, component }, index) => (
                                <ListItem button key={index}>
                                    <Link to={path} >
                                        <ListItemText
                                            primary={name}
                                        />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            )}
        </AppContext.Consumer>

    )

}

export default Header;


