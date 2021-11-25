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
            step: 1,
            timoutInterval: 1000,
            isAutokclick: false,
            timeVasStart: 0,
        }
    }

    btnHandler = () => {
        if (this.state.isAdd) {
            this.setCount(this.state.count + this.state.step)
        } else {
            this.setCount(this.state.count - this.state.step)
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
            step: 1,
            timoutInterval: 1000,
            isAutoClick: false,
            timeVasStart: 0,
        })
    }

    startTimout = () => {
        if (this.state.isAutoClick) {
            setTimeout(() => {
                this.startTimout()
            }, this.state.timoutInterval)
        }
    }

    startInterval = () => {
        for (let i = 0; i < 30; i++) {

        }
    }

    enebleAutoClick = () => {

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
                         btnHandler={this.btnHandler}
                />
                <div>seconds leave: {}</div>
                <div>start auto click: {}</div>
                <input
                    type="number"
                    min="100"
                    max="100000"
                    step="100"
                    value={'1000'}
                    onChange={''}
                />
            </div>
        );
    }
}

export default BlockCounter;