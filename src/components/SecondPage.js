import React,{useContext} from 'react'
import Context from '../ContextApi/store';
export default function SecondPage() {
    const   {state} = useContext(Context)

  return (
    <div className='btn' style={{"width":"500px"}}>SecondPage : {state.counter}</div>
  )
}
