import React, { useState } from 'react';
import { Container, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {AppContext} from '../../../index';

const useStyles = makeStyles({
    root: {
        minWidth: 'auto'
    }
});

const ExerciseTabs = (props) => {
    const [tabsValue, setTabsValue] = useState(0);
    const tabs = props.views; 
    const classes = useStyles();
 

    return (
        <AppContext.Consumer>
            {context => (
                <Container>
                    <Tabs
                        centered                        
                        value={tabsValue}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        {tabs.map((item, index) => {
                            return (
                                <Tab className={classes.root}
                                    key={item}
                                    label={item}
                                    index={parseInt(index)}
                                    onClick={(e) => {
                                        setTabsValue(index);
                                        context.getCurrentExerciseFilter(item);                                                                                                              
                                    }}
                                />
                            )
                        })}
                    </Tabs>
                </Container>
            )}
        </AppContext.Consumer>
    )
}

export default ExerciseTabs;