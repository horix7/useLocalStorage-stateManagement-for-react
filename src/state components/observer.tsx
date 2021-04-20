import React, { Component, Fragment } from "react";

export default class Oberservor extends Component<any> {

    state = {

    }

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}
