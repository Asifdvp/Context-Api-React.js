import {createContext} from 'react';
export const initialState = {
    counter:0,
}
let Context = createContext(initialState)
export default Context;

