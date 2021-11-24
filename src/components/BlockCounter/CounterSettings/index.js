import React, {Component} from "react";
import "./../../../css/counter_settings_styles.css"

class CounterSettings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'settings'}>
                <button onClick={this.props.changeOperator}>
                    {!this.props.operator ? '-' : '+'}
                </button>
                <input
                    type="number"
                    min="1"
                    max="1000000"
                    step="1"
                    value={this.props.step}
                    onChange={this.props.changeStep}
                />
                <button onClick={this.props.reset}>reset</button>
            </div>
        )
    }

}

export default CounterSettings
