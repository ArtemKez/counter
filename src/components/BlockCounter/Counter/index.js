import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    btnHandler = () => {
        if (this.props.operator) {
            this.props.setCount(this.props.count + this.props.step)
        } else {
            this.props.setCount(this.props.count - this.props.step)
        }
    }

    render() {
        return (
            <>
                <p>Count:{this.props.count}</p>
                <p>Step:{this.props.step}</p>
                <button onClick={this.btnHandler}>
                    {this.props.operator ? 'Add' : 'Sub'}
                </button>
            </>
        )
    }
}

export default Counter