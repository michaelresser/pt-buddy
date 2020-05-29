import React, { useState } from 'react';
import { makeStyles, Button, Container, Divider, Drawer, FormGroup, TextField, MenuItem, Typography } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        borderBottom: '2px solid silver'
    },
    searchBox: {
        flexGrow: 1
    },
    filterBtn: {
        alignSelf: 'flex-end'
    },
    drawer: {
        padding: '.5em',
        height: 'calc(100% - 107px)',
        top: 107
    },
    filterActions: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

const filterOptions = {
    categories: ['All', 'Sports Performance', 'PowerLifting', 'Flexibility', 'Sport-Specific',],
    muscles: ['All', "Triceps", "Chest", "Shoulders", "Neck", "Chest", "Core", "LPHC"],
    gear: ['All', 'Barbell', "Body Only", 'Kettlebell', 'Mini-Band'],
    movements: ['All', 'Upper Body Push', 'Upper Body Pull', 'Core', 'Lower Body Pull', 'Lower Body Push', 'Compound Move'],
    level: ['All', "Beginner", "Intermediate", 'Advanced'],
    stance: ['All', 'Standing', "Prone", 'Seated', "Supine"],
}

const ExerciseFilterBar = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [filters, setFilters] = useState(props.filters);
    const toggleFilterDrawer = () => {
        setOpen(!open)
    };
    return (
        <Container>
            <div className={classes.root}>
                <form className={classes.searchBox}>
                    <TextField fullWidth />
                </form>
                <Button className={classes.filterBtn} onClick={toggleFilterDrawer}>
                    <FilterListIcon />
                </Button>
            </div>
            <Drawer anchor='bottom' open={open} className={classes.drawer}>
                <Container className={classes.filterActions}>
                   
                    <Button className={classes.saveBtn} onClick={toggleFilterDrawer}>
                        <CloseIcon />
                    </Button>
                    <Typography variant='h6'>Filters</Typography>
                    <Button className={classes.filterBtn} onClick={props.setFilters}>
                        <CheckIcon />
                    </Button>

                </Container>
                <Divider/>
                <Container>
                    <FormGroup>
                        <TextField
                            select
                            name="categories"                            
                            label="Categories"
                            onChange={(e) => { props.filterExercises(e.target.name, e.target.value) }}                            
                            helperText="Select a category"
                        >
                            {filterOptions.categories.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            name="muscles"                            
                            label="Body Parts"
                            onChange={(e) => { props.filterExercises(e.target.name, e.target.value) }}                            
                            helperText="Select Muscle Groups"
                        >
                            {filterOptions.muscles.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormGroup>
                </Container>
            </Drawer>
        </Container>

    );
}


export default ExerciseFilterBar;