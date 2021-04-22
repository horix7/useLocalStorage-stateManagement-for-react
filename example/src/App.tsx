import React from 'react'
import { Observer } from 'local-state'
import 'local-state/dist/index.css'


const TestComponent = (props: any) => (<> {console.log(props.doSomething())} </>)

const App = () => {
  return (
    <>
    <Observer> 

       {(doSomething: any) => {
         return (
         <div>
           <TestComponent doSomething={doSomething} />
           
         </div>
         )
       }}
    </Observer>
    </>

  )
}

export default App
