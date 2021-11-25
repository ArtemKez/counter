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

    autoClick = async () => {
        if (!this.state.isAutoClick) {
            return;
        }
        this.setState({
            timout: setTimeout(() => {
                this.btnHandler();
                this.autoClick();
            }, this.state.timoutInterval)
        })
    }

    autoClickTime = async () => {
        await this.setState({
            isAutoClick: true
        });
        this.setState({
            interval: setInterval(() => {
                if (this.state.timeAfterStartAutoClick === this.state.timeAutoClick) {
                    this.setState({
                        isAutoClick: false
                    })
                    this.stopTimerInterval()
                    return;
                }
                this.setState({
                    timeAfterStartAutoClick: this.state.timeAfterStartAutoClick + 1
                })
            }, 1000)
        });
    };

    autoStart = async () => {
        this.resetInterval()
        this.stopTimerInterval()
        await this.autoClickTime()
        this.autoClick()
    }

    resetInterval = () => {
        this.setState({
            isAutoClick: false,
            timeAfterStartAutoClick: 0,
        })
    }

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
    }

    componentDidMount() {
        this.autoStart()
    }

    componentWillUnmount() {
        this.stopTimerInterval()
    }

    stopTimerInterval() {
        clearInterval(this.state.interval)
        clearTimeout(this.state.timout)
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
                <button onClick={this.autoStart}>start auto click</button>
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