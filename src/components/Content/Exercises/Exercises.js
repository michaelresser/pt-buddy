import React from 'react'
import { Button, Fab, Grid, Modal, /* makeStyles, */ TextField, Typography } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import { ExerciseList, ExerciseFilterBar } from '../../index';
import AppContext from '../../Context/Context';


const styles = {
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
};

class Exercises extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exercises: props.exercises,
            filters: ['All']
        };
    }
    toggleModal = () => {
        this.setState({ open: !this.state.open }, () => console.log(this.state.open))
    };
    setFilters = (settings) => {
        settings === undefined ?
            this.setState({ filters: [] }) :
            this.setState({
                filters: settings
            })
    };
    filterExercises = (name, value) => {
        const filterName = name;
        const filterValue = value;
        console.log(name, value);
        filterValue === 'All' || undefined ? this.setState({ exercises: this.props.exercises }) :
            this.setState({
                exercises: this.props.exercises.filter((item) => {                    
                    return item[filterName].includes(filterValue);
                })
            })
    }

    render() {
        return (
            <AppContext.Consumer>
                {context => (
                    <Grid container style={styles.root}>
                        <ExerciseFilterBar filterExercises={this.filterExercises} filters={this.state.filters}/>
                        <ExerciseList list={this.state.exercises} />
                        <Fab
                            aria-label="add"
                            style={styles.addNewExBtn}
                            onClick={this.toggleModal}
                        >
                            <AddIcon />
                        </Fab>
                        <Modal
                            style={styles.modalBody}
                            open={this.state.open}
                            onClose={this.toggleModal}
                        >
                            <form style={styles.newExerciseForm}>
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
}
export default Exercises;









/* const useStyles = makeStyles({
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
                    <ExerciseFilterBar/>
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
export default Exercises; */