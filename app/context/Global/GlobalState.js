import React, {useState} from 'react';
import GlobalContext from './GlobalContext';

const GlobalState = (props) => {
    const initialState = {
        show: false,
        message: ''
    };
    
    const [state, setState] = useState(initialState);
    
    const showAlert = (data) => {
        setState({show: true, message: data});
        setTimeout(hideAlert, 1000*10);
    }

    const hideAlert = () => {
        setState({show: false, message: ''});
    }

    return (
        <GlobalContext.Provider value={{
            show: state.show,
            message: state.message,
            showAlert
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;