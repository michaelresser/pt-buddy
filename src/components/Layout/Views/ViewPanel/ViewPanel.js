import React from 'react';

// Material-ui Components
import { Container } from '@material-ui/core';
import AppContext from '../../../context/context';

const ViewPanel = () => {
    return (
        <Container>
            <AppContext.Consumer>
                {value =>
                    value.currentView
                }
            </AppContext.Consumer>
        </Container>
    )
}

export default ViewPanel;