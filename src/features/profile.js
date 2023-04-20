import { createAction, createReducer } from "@reduxjs/toolkit";


const changeAlias = createAction('change alias');
const changeName = createAction('change name');
const resetProfile = createAction('reset profile');

const actions = { changeAlias, changeName, resetProfile }

const initalState = {
    alias : '',
    name : ''
}

/*const reducer = createReducer(initalState, {
    [changeAlias] : (state, action) => (
        {
            alias : action.payload,
            name : state.name,
        }
    ),
    [changeName] : (state, action) => (
        {...state, name : action.payload}
    ),
    [resetProfile] : (state, action) => (
        initalState
    )
})*/

const reducer = createReducer(initalState, builder => {
    builder
        .addCase(changeAlias, (state, action) => ({...state, alias : action.payload}))
        .addCase(changeName, (state, action) => ({...state, name : action.payload}))
        .addCase(resetProfile, (state, action) => initalState )
});



export { reducer, actions };