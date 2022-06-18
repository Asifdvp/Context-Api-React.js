import React,{useContext} from 'react'
import Context from '../ContextApi/store';
export default function SecondPage() {
    const   {state,dispatch} = useContext(Context)

  return (
    <div>SecondPage : {state.counter}</div>
  )
}