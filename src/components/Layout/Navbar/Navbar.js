import React from 'react';
import AppContext from '../../Context/Context';
import { List, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


const useStyles = makeStyles({
    root: {
        width: '100vw',
        borderBottom: '1px solid silver',
        backgroundColor: 'white',
        position: 'fixed',
        top: '56px',
        zIndex: 1100
    },
    list: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        padding: 0

    },
    listItem: {
        width: 'auto',
        padding: '1em',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        '&:hover': {
            background: 'silver'
        },
    },
    listItemIcon: {

    }
})

const getMenuIcon = (name) => {
    switch (name) {
        case 'Home':
            return <HomeIcon />;
        case 'Exercises':
            return <FitnessCenterIcon />;
        case 'Workouts':
            return <DescriptionIcon />;
        case 'Programs':
            return <LibraryBooksIcon />;
        default:
            return <HomeIcon />;
    }
}


const Navbar = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <AppContext.Consumer>
                {context => (
                    <List className={classes.list}>
                        {context.routes.map(({ name, path, component, icon }, index) => (
                            <Link to={path} className={classes.listItem} key={index}>
                                    {getMenuIcon(name)}                                
                            </Link>
                        ))}
                    </List>)}
            </AppContext.Consumer>
        </div>
    )
};

export default Navbar;
