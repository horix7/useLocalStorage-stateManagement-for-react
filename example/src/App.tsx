import React from 'react'
import { Observer } from "local-state";

const TestComponent = (props: any) => (<> 
  <br/>
  <input type="text" onChange={(event: any) => props.doSomething.setGlobals("input1", event.target.value)}/>
  <br/>
  <br/>
  <input type="text" onChange={(event: any) => props.doSomething.setGlobals("input2", event.target.value)}/>
  <br/>
  <br/>

  <button onClick={() => {
    alert(JSON.stringify(props.state))
  }}>click to view the current state</button>
 </>)

const App = () => {
  return (
    <>
    <Observer> 
       { (doSomething: any, state: any) => {
         return (
         <div>
           <TestComponent doSomething={doSomething}  state={state} />
         </div>
         )
       }}
    </Observer>
    </>

  )
}

export default App
