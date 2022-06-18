import React,{useContext} from 'react'
import Context from '../ContextApi/store';
 const FirstPage= () =>{
    const   {state,dispatch} = useContext(Context)
    console.log(state.counter)
  return (
    <div className='card' style={{"width":"500px"}}>
<div className=' btn '>First Page : {state.counter} </div>
<button onClick = {()=>dispatch({type: "INCREASE_COUNTER"})} className=' btn btn-primary'> 
INCREASE_COUNTER
</button>
<button onClick = {()=>dispatch({type: "DECREASE_COUNTER"})} className=' btn btn-primary'> 
DECREASE_COUNTER
</button>


    </div>
  )
}
export default FirstPage