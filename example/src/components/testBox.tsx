import React from 'react'
import { Observer  } from "local-state";

export default function TestBox  ( ) {

        return (
            <Observer>
                {
                    (functions: any, state: any) => {
                        return (
                            <div onClick={() => functions.setGlobals("none", "none")}>
                                --------------------------------
                                <br/>
                                {state.input1}
                                  <p>{JSON.stringify(state)}</p>

                                now who us 
                            </div>
                        )
                    }
                }
            </Observer>
        )
}