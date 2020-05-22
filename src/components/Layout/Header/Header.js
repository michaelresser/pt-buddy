import React from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../../index';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Drawer, Hidden, InputBase, IconButton, List, ListItem, ListItemText, Menu, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



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
            width: '100%',
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
    appBarMenu: {
        flexGrow: 1,
        display: 'flex',
        flex: 'row',
        flexWrap: 'nowrap'
    }
}));




const Header = () => {
    const classes = useStyles();
    const [navOpen, setNavOpen] = React.useState(false);
    const [mobileMoreMenuOpen, setMobileMoreMenuOpen] = React.useState(null);
    const toggleDrawer = () => (
        setNavOpen(!navOpen)
    );
    const toggleMobileMoreMenu = (event) => {
        mobileMoreMenuOpen ? setMobileMoreMenuOpen(null) : setMobileMoreMenuOpen(event.currentTarget);
    };
    const mobileMoreMenu = (
        <Menu
            open={Boolean(mobileMoreMenuOpen)}
            anchorEl={mobileMoreMenuOpen}
            keepMounted
            onClose={toggleMobileMoreMenu}>
            <IconButton
                color="inherit">
                <AccountCircle />
            </IconButton>
            <IconButton href='https://github.com/michaelresser/pt-buddy' color={'inherit'} target='_blank' >
                <GitHubIcon />
            </IconButton>
            <IconButton href='https://linkedin.com/in/michaelresser' color={'inherit'} target='_blank' >
                <LinkedInIcon />
            </IconButton>
        </Menu>
    )

    return (
        <AppContext.Consumer>
            {context => (
                <div >
                    <AppBar className={classes.root}>
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
                            <Box className={classes.appBarMenu}>
                                <Hidden xsDown>
                                    <IconButton                                       
                                        color="inherit" >
                                        <AccountCircle />
                                    </IconButton>
                                    <IconButton 
                                        href='https://github.com/michaelresser/pt-buddy' color={'inherit'} 
                                        target='_blank' >
                                        <GitHubIcon />
                                    </IconButton>
                                    <IconButton 
                                        href='https://linkedin.com/in/michaelresser' 
                                        color={'inherit'} 
                                        target='_blank' >
                                        <LinkedInIcon />
                                    </IconButton>
                                </Hidden>
                                <Hidden smUp>
                                    <IconButton
                                        onClick={toggleMobileMoreMenu}
                                        color="inherit">
                                        <MoreIcon />
                                    </IconButton>
                                    {mobileMoreMenu}
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


