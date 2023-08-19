import React, {useState,useReducer} from "react";

/**
 * generic ways to set state in React Hooks
 * @type {number}
 */

const complexStateInitial = 0;

const reducer = (state, action) => {}
/**
 * using useState
 */
const [statesManager, setStatesManager] = useState(complexStateInitial);

const onChangeUseState = e => {
    const { name, value } = e.target;
    setStatesManager(prevState => ({ ...prevState, [name]: value }));
};

/**
 * using useReducer
 */

const [state, dispatch] = useReducer(reducer, complexStateInitial);

const onChangeUseReducer = e => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
};