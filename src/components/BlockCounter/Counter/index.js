import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <p>Count:{this.props.count}</p>
                <p>Step:{this.props.step}</p>
                <button onClick={this.props.btnHandler}>
                    {this.props.operator ? 'Add' : 'Sub'}
                </button>
            </>
        )
    }
}

export default Counter