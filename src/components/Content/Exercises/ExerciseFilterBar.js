import React, { useState } from 'react';
import { makeStyles, Button, Container, Drawer, FormGroup, FormControl, TextField, MenuItem } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';

const filters = {
    categories: ['Sports Performance, PowerLifting', 'Flexibility', 'Sport-Specific',],
    muscles: ["Triceps", "Chest", "Shoulders", "Neck", "Chest", "Core", "LPHC"],
    gear: ['Barbell', "Body Only", 'Kettlebell', 'Mini-Band'],
    movements: ['Upper Body Push', 'Upper Body Pull', 'Core', 'Lower Body Pull', 'Lower Body Push', 'Compound Move'],
    level: ["Beginner", "Intermediate", 'Advanced'],
    stance: ['Standing', "Prone", 'Seated', "Supine"],
}
const useStyles = makeStyles({
    root: {
        display: 'flex',
        borderBottom: '2px solid silver'
    },
    searchBox: {
        flexGrow: 1
    },
    drawer:{
        padding: '.5em'
    },
    filterBtn: {
        alignSelf: 'flex-end'
    },
    filterList: {
        width: '50vw'

    }
})


const ExerciseFilterBar = () => {
    const classes = useStyles();

    const [category, setCategory] = useState();
    const [open, setOpen] = useState(false);
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const toggleDrawer = () => {
        setOpen(!open)
    };

    return (
        <Container>
            <div className={classes.root}>
                <form className={classes.searchBox}>
                    <TextField fullWidth />
                </form>
                <Button className={classes.filterBtn} onClick={toggleDrawer}>
                    <FilterListIcon />
                </Button>
            </div>
            <Drawer anchor='right' open={open} onClose={toggleDrawer} className={classes.drawer} >
                <Container>
                    <Button className={classes.filterBtn} onClick={toggleDrawer}>
                        <CloseIcon />
                    </Button>
                </Container>
                <Container>
                    <FormGroup className={classes.filterList}>
                        <FormControl>
                            <TextField
                                id="categories"
                                select
                                label="Categories"
                                value={category}
                                onChange={handleCategoryChange}
                                helperText="Select a category"
                            >
                                {filters.categories.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </FormGroup>
                </Container>
            </Drawer>
        </Container>

    );
}


export default ExerciseFilterBar;