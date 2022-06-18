import Context,{ initialState } from './store'
export function reducer(state,aciton){
    switch(aciton.type){
        case "INCREASE_COUNTER":
            state.counter = state.counter +1
            return {...state}
     case "DECREASE_COUNTER":
     state.counter = state.counter -1
      return {...state}
            default :
            return state
    }
}