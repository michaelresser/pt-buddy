import React, {useState }from 'react';
import { Paper, Tabs, Tab } from "@material-ui/core";
import AppContext from '../../../context/context';


function ViewToggle(props) {
    const [value,setValue] = useState(0);
    const tabs = {
        children: ["Exercises", "Workouts", "Programs"],
    };


    return (
        <AppContext.Consumer>
            {context => (
                <Paper >
                    <Tabs
                        centered
                        variant='fullWidth'
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        {tabs.children.map((viewName, index) => {
                            return (
                                <Tab
                                    key={viewName}
                                    label={viewName}
                                    index={parseInt(index)}
                                    onClick={(e) => {
                                        setValue(index);
                                        context.changeView(e);                                                                                                                   
                                    }}
                                />
                            )
                        })}
                    </Tabs>
                </Paper>
            )
            }
        </AppContext.Consumer >
    )
}

export default ViewToggle;