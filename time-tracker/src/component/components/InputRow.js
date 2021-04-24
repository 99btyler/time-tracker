import React from "react"

import "./style/InputRow.css"

class InputRow extends React.Component {

    render() {
        return (

            <form autoComplete="off">
                <input id="input-description" type="text" placeholder="description" />
                <input id="input-timePeriod" type="text" placeholder="timePeriod" onChange={(event)=>this.props.handleTimePeriodChange(event, this.props.InputRowID)} />
                <input id="input-totalTime" type="text" value={this.props.totalTime} readOnly />
            </form>

        )
    }

}

export default InputRow