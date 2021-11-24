import React, {Component} from "react";
import Counter from "./Counter";
import CounterSettings from "./CounterSettings"

function changeOperator() {
    this.setState({
        isAdd: !this.state.isAdd
    })
}

class BlockCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isAdd: true,
            step: 1
        }
    }

    changeOperator = changeOperator.bind(this);

    changeStep = (event) => {
        const newStep = +event?.target?.value;
        this.setState({
            step: newStep
        })
    }

    setCount = (newCount) => {
        this.setState({
            count: newCount
        })
    }

    reset = () => {
        this.setState({
            count: 0,
            isAdd: true,
            step: 1
        })
    }


    render() {
        return (
            <div>
                <CounterSettings
                    reset={this.reset}
                    step={this.state.step}
                    operator={this.state.isAdd}
                    changeStep={this.changeStep}
                    changeOperator={this.changeOperator}
                />
                <Counter count={this.state.count}
                         operator={this.state.isAdd}
                         setCount={this.setCount}
                         step={this.state.step}
                />
            </div>
        );
    }
}

export default BlockCounter;