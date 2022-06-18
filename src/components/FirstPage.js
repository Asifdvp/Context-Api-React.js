import React,{useContext} from 'react'
import Context from '../ContextApi/store';
 const FirstPage= () =>{
    const   {state,dispatch} = useContext(Context)
    console.log(state.counter)
  return (
    <div>
<div>First Page : {state.counter} </div>
<button onClick = {()=>dispatch({type: "INCREASE_COUNTER"})}> 
INCREASE_COUNTER
</button>
<button onClick = {()=>dispatch({type: "DECREASE_COUNTER"})}> 
DECREASE_COUNTER
</button>


    </div>
  )
}
export default FirstPage