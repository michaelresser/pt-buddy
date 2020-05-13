import React from 'react';
import { Button, Box, Chip, Container, Collapse, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { AppContext } from '../../../index';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
});


const ExerciseItem = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <AppContext.Consumer>
            {context => (
                <div>
                    <ListItem button onClick={handleOpen} className={classes.root} >
                        <Box>
                            {props.exercise.name}
                        </Box>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} >
                        <Container>
                            <Box display='flex' alignItems={'center'}>
                                <AccessibilityNewIcon style={{ fontSize: 24, marginRight: '.5em' }} />
                                {props.exercise.muscles.map(item => (
                                    <Chip key={item} label={item} size='small' style={{ marginRight: '.5em' }} />
                                ))}
                            </Box>

                            <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button children
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                        context.deleteExercise(props.exercise);
                                    }}
                                    color="secondary">
                                    <DeleteForeverIcon />
                                </Button>
                            </Box>
                        </Container>
                    </Collapse>
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default ExerciseItem;
