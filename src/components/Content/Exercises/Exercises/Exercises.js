import React from 'react'
import { Button, Fab, Grid, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { ExerciseList } from '../../../index';
import AppContext from '../../../Context/Context';


const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between'
    },
    addNewExBtn: {     
        position: "fixed",
        bottom: '10%',
        right: '0',
        margin: '1em',
        padding: '1em',        
        backgroundColor: '#ffcc00',
        boxShadow: '0px 2px 1px 0px #999',
        '&:hover': {
            backgroundColor: '#ffdd00',
            boxShadow: '0px 2px 2px 2px #999'
        },
        "&:active": {
            backgroundColor: '#ffea00'
        }
    },
    modalBody: {
        color: 'white',
        position: 'relative',
        top: '50vh',
        textAlign: 'center'
    }
})

const Exercises = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => {
        setOpen(true);
    };
    const handleCloseModal = () => {
        setOpen(false);
    }

    return (
        <AppContext.Consumer>
            {context => (
                <Grid container className={classes.root}>
                    <ExerciseList />
                    <Fab                        
                        aria-label="add"
                        className={classes.addNewExBtn}
                        onClick={handleOpenModal}
                    >
                        <AddIcon />
                    </Fab>
                    <Modal
                        open={open}
                        onClose={handleCloseModal}
                    >
                        <h1 className={classes.modalBody}>Modal</h1>
                    </Modal>
                </Grid>
            )}
        </AppContext.Consumer>
    )
}



export default Exercises;