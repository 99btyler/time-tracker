import React from "react"

import "./style/InputRow.css"

class InputRow extends React.Component {

    render() {
        return (

            <div>
                <input id="input-description" type="text" placeholder="description" />
                <input id="input-start-time" type="text" placeholder="start_time" />
                <input id="input-end-time" type="text" placeholder="end_time" />
                <input id="input-total-time" type="text" value="total_time" readOnly />
            </div>

        )
    }

}

export default InputRow