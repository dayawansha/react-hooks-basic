import React, { useReducer } from "react";

const initialState = {
    firstName: '',
    lastName: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'firstName':
            return { firstName: action.payload };
        case 'lastName':
            return { lastName: action.payload };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(event) => {
                    dispatch({
                        type: 'firstName',
                        payload: event.target.value
                    })
                }}
                value={state.firstName} />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(event) => {
                    dispatch({
                        type: 'lastName',
                        payload: event.target.value
                    })
                }}
                value={state.lastName} />
        </>
    );
}