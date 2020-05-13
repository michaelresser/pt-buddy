import React from 'react'
import { Container, Fab, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { AppContext, ExerciseList, ExerciseTabs } from '../../../index';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,        
    },
    fabAdd: {
        position: 'absolute',
        bottom: '5em',
        right: '2em',
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'lightGreen'
        },
    },
    modal: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignContent: 'center', 
    },
    modalBody: {
        color: 'white',   
        textAlign: 'center'
    }
})


const Exercises = (props) => {
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
                <Container className={classes.root}>
                    <ExerciseTabs views={context.exerciseFilters}/>
                    <ExerciseList/>
                    <Fab
                        color="primary"
                        aria-label="add"
                        className={classes.fabAdd}
                        onClick={handleOpenModal}
                    >
                        <AddIcon />
                    </Fab>
                    <Modal className={classes.modal}
                        open={open}
                        onClose={handleCloseModal}
                    >
                        <h1 className={classes.modalBody}>Modal</h1>
                    </Modal>
                </Container>)}
        </AppContext.Consumer>
    )
}



export default Exercises;