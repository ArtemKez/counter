import React, {Component} from "react";
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";

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
            isAutoClick: false,
            timeAfterStartAutoClick: 0,
            timeAutoClick: 30,
            interval: null,
            timeout: null,
        }
    }

    autoClick = () => {
        if (!this.state.isAutoClick) {
            return;
        }
        setTimeout(() => {
            this.autoClick();
        }, this.state.timoutInterval);
    }

    autoClickTime = () => {
        this.setState({
            isAutoClick: true,
        });
        this.setState({
            interval: setInterval(() => {
                console.log('setInterval',);
                if (this.state.timeAfterStartAutoClick === this.state.timeAutoClick) {
                    this.setState({
                        isAutoClick: false
                    })
                    clearInterval(this.state.interval);
                    return;
                }
                this.setState({
                    timeAfterStartAutoClick: this.state.timeAfterStartAutoClick + 1
                })
            }, 1000)
        });

    };

    autoClickStarted = () => {
        setTimeout(() => {
            this.btnHandler();
        }, this.state.timoutInterval);
    };

    btnHandler = () => {
        if (this.state.isAdd) {
            this.setCount(this.state.count + this.state.step);
        } else {
            this.setCount(this.state.count - this.state.step);
        }
    };

    changeOperator = changeOperator.bind(this);

    changeStep = (event) => {
        const newStep = +event?.target?.value;
        this.setState({
            step: newStep
        });
    };

    setCount = (newCount) => {
        this.setState({
            count: newCount
        });
    };

    reset = () => {
        this.setState({
            count: 0,
            isAdd: true,
            step: 1,
            timoutInterval: 1000,
            isAutoClick: false,
            timeAfterStartAutoClick: 0,
        });
    };

    frequencyChangeHandler = (event) => {
        const inputValue = +event?.target?.value;
        this.setState({
            timoutInterval: inputValue
        })
        console.log(this.state.timoutInterval);
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
                <div>seconds leave: {this.state.timeAfterStartAutoClick}</div>
                <button onClick={this.autoClickTime}>start auto click</button>
                <div>timout interval</div>
                <input
                    type="number"
                    min="100"
                    max="100000"
                    step="100"
                    value={this.state.timoutInterval}
                    onChange={this.frequencyChangeHandler}
                />
            </div>
        );
    }
}

export default BlockCounter;