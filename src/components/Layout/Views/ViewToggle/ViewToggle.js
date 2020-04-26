import React from 'react';
import { Paper, Tabs, Tab } from "@material-ui/core";



function ViewToggle(props) {
    const tabs = {
        children: ["Exercises", "Workouts", "Projects"],
    };

    return (
        <Paper>
            <Tabs variant='fullWidth' value={0} indicatorColor="primary" textColor="primary" centered>
                {tabs.children.map((item, index) => {
                    return (
                        <Tab key={item} index={index} label={item} onClick={(e) => { props.changeView(e) }} />
                    )
                })}
            </Tabs>
        </Paper >)
}

export default ViewToggle;