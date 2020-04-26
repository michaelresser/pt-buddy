import React from 'react';


import AppContext from '../../../context/context';

const ViewPanel = () => {
    return (
        <div>
            <AppContext.Consumer>
                {value =>
                    value.currentView
                }
            </AppContext.Consumer>
        </div>
    )
}

export default ViewPanel;