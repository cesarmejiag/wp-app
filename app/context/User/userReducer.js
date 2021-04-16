import {SET_PROFILE} from '../types';

export default (state, action) => {
    const {payload, type} = action;

    switch (type) {
        case SET_PROFILE:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}