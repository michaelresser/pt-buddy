import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit'
                        className={classes.title}>
                        PT Buddy | &copy; Mike Esser, 2019
                    </Typography>
                    <Button color='inherit'>Login</Button>
                    <Button href='https://github.com/michaelresser/pt-buddy' target='_blank' color='inherit'>GitHub</Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default Header;


