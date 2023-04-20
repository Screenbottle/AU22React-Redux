import { createAction, createReducer } from "@reduxjs/toolkit";

const increase = createAction('increase counter');
const decrease = createAction('decrease counter');

const actions = { increase, decrease };

const initalState = 0;

const reducer = createReducer(initalState, {
    [increase] : (state, actions) => state + 1,
    [decrease] : (state, actions) => state - 1, 
});

export { reducer, actions};