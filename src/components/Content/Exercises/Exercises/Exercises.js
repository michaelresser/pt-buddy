import React from 'react'
import { Button, Fab, Grid, Modal, TextField, Typography } from '@material-ui/core';
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
        bottom: '0',
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
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    },
    newExerciseForm: {
        display: 'flex',
        flexFlow: 'column',    
        alignItems: 'center',
        width: '90%',
        padding: '2em 1em',
        border: '.5em solid silver',
        backgroundColor: 'white'
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
                        className={classes.modalBody}
                        open={open}
                        onClose={handleCloseModal}
                    >
                        <form className={classes.newExerciseForm}>
                            <Typography variant='h6' color="primary">Add a New Exercise</Typography>
                            <TextField
                                id='name'
                                label='Exercise Name'
                                helperText='Name your new exercise'
                                fullWidth
                            />
                            <TextField
                                id='muscles'
                                label='Muscle Groups Used'
                                helperText='Select muscle groups (max 3)'
                                fullWidth
                            />
                            <TextField
                                id='gear'
                                label='Muscle Groups Used'
                                helperText='Select primarymuscle groups (max 3)'
                                fullWidth
                            />
                            <TextField
                                id='movement'
                                label='Movement Pattern'
                                helperText='Select the primary movement pattern for this skill'
                                fullWidth
                            />
                            <TextField
                                id='level'
                                label='Skill Level'
                                helperText='Choose a difficulty'
                                fullWidth
                            />
                            <TextField
                                id='stance'
                                label='Stance'
                                helperText='Choose the Body position for tthis exercise'
                                fullWidth
                            />
                            <Button>Add New Exercise</Button>

                        </form>
                    </Modal>
                </Grid>
            )}
        </AppContext.Consumer>
    )
}



export default Exercises;