import React, { Component } from "react";

class Accruement extends Component {
    constructor(props){
        super(props);
        this.state = { number: props.start };
    }

    handleAccruement = () => {
        this.setState({ number: this.state.number + 1});
    };

    render() {
        return (
            <div>
                {this.state.number}{" "}
                <button onClick={this.handleAccruement}>Accruement</button>
            </div>
        );
    }
}

export default Accruement;