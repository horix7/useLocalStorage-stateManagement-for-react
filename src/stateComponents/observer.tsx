import React, { Component, Fragment } from "react";

export default class Oberservor extends Component<any> {

    state = {
        
    }

    updateGlobalChange = () => {
        console.log("achieved")
    }

    render() {

        return (
            <Fragment>
                { typeof this.props.children === "function" ? this.props.children(this.updateGlobalChange) : null }
            </Fragment>
        )
    }
}
