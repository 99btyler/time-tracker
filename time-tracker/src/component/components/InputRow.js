import React from "react"

import "./style/InputRow.css"

function InputRow(props) {
    return (

        <form autoComplete="off">
            <input id="input-description" type="text" placeholder="description" />
            <input id="input-timePeriod" type="text" placeholder="timePeriod" onChange={(event)=>props.handleTimePeriodChange(event, props.inputRowID)} />
            <input id="input-totalTime" type="text" value={props.totalTime} readOnly />
        </form>

    )
}

export default InputRow