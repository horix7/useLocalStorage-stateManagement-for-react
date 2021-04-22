import React, { Component, Fragment } from "react";
import  Local from "../functions/convertingLocalStorage";


export default class Oberservor extends Component<any> {

    state = {
         
    }

    componentDidMount() {
       
        const savedState = Local.convertAny("state")
        this.setState(savedState)
    }

    updateGlobalChange = (name: string, data: any) => {
       
       this.setState({...this.state ,[name]: data})
       Local.saveItem(this.state, "state")

    }

    properties = {
        setGlobals: this.updateGlobalChange
    }

    render() {

        return (
            <Fragment>
                { typeof this.props.children === "function" ? this.props.children(this.properties, this.state) : null }
            </Fragment>
        )
    }
}
