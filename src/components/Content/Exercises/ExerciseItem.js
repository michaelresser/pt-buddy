import React from 'react';
import { makeStyles, Card, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import AppContext from '../../Context/Context';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        
        width: '350px',
        backgroundColor: '#393b40',
        margin: '.5em',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    media: {
        height: '175px',        
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    title: {
        padding: '.5em 0',
        textAlign: 'center',
        color: 'white'
    },

})


const ExerciseItem = (props) => {
    const classes = useStyles(props);
   

    return (
        <AppContext.Consumer>
            {context => (
                <Card className={classes.root}>                 
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component='img'
                            src={props.exercise.image}
                            title={props.exercise.name}
                        />
                        <Typography variant='h6' className={classes.title}>
                            {props.exercise.name}
                        </Typography>
                    </CardActionArea>
                </Card>

                /*  <ExpansionPanel>
                     <ExpansionPanelSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1c-content"
                         id="panel1c-header">
                       
                     </ExpansionPanelSummary>
                     <ExpansionPanelDetails>
                         <Box display='flex' alignItems={'center'}>
                             <AccessibilityNewIcon style={{ fontSize: 24, marginRight: '.5em'  }} />
                             {props.exercise.muscles.map(item => (
                                 <Chip label={item} size='small' style={{marginRight: '.5em'}}/>
                             ))}
                         </Box>
                     </ExpansionPanelDetails>
                     <Divider />
                     <ExpansionPanelActions>
                         <Button children
                             onClick={(event) => {
                                 event.stopPropagation();
                                 event.preventDefault();
                                 context.deleteExercise(props.exercise);
                             }}
                             color="secondary">
                             <DeleteForeverIcon />
                         </Button>
                     </ExpansionPanelActions> 
                 </ExpansionPanel>
                 */
            )}

        </AppContext.Consumer>
    )
}

export default ExerciseItem;
