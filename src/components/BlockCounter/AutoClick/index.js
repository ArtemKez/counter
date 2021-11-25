import React, {Component} from "react";

export default class AutoClick extends Component {
    render() {
        return (
            <>
                <div>seconds leave: {this.props.timeAfterStartAutoClick}</div>
                <button onClick={this.props.autoStart}>start auto click</button>
                <div>timout interval</div>
                <input
                    type="number"
                    min="100"
                    max="100000"
                    step="100"
                    value={this.props.timoutInterval}
                    onChange={this.props.frequencyChangeHandler}
                />
            </>
        )
    }
}