import React from "react"

import "./style/InputRow.css"

class InputRow extends React.Component {

    render() {
        return (

            <div>
                <input type="text" placeholder="description" id="input_description" />
                <input type="text" placeholder="start_time" id="input_start_time" />
                <input type="text" placeholder="end_time" id="input_end_time" />
                <input type="text" value="total_time" readOnly id="input_total_time" />
            </div>

        )
    }

}

export default InputRow