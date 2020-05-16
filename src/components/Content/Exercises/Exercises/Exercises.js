import React from 'react'
import { Fab, Grid, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { ExerciseList } from '../../../index';
import AppContext from '../../../Context/Context';


const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100%'
    },
    fabAdd: {
        position: 'absolute',
        bottom: '1em',
        right: '0',
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'lightGreen'
        },
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
                        color="primary"
                        aria-label="add"
                        className={classes.fabAdd}
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