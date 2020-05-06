import React, { useState } from 'react';
import { Container, Tabs, Tab} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AppContext from '../../../Context/Context';

const useStyles = makeStyles({
    root: {
        minWidth: 'auto'
    }
});

function ViewToggle(props) {
    const [value, setValue] = useState(0);
    const tabs = ["All", "Muscles", "Gear", "Focus", "Level", "Position"];
    const classes = useStyles();



    return (
        <AppContext.Consumer>
            {context => (
                <Container>
                    <Tabs
                        centered
                        variant='fullWidth'
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        {tabs.map((viewName, index) => {
                            return (
                                <Tab className={classes.root}
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
                </Container>
            )}
        </AppContext.Consumer>
    )
}

export default ViewToggle;