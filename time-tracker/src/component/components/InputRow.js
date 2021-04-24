import React from "react"

import "./style/InputRow.css"

class InputRow extends React.Component {

    render() {
        return (

            <form>
                <input id="input-description" type="text" placeholder="description" />
                <input id="input-timePeriod" type="text" placeholder="timePeriod" />
                <input id="input-totalTime" type="text" value={this.props.totalTime} readOnly />
            </form>

        )
    }

}

export default InputRow