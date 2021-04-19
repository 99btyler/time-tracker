import React from "react"

import "./style/InputRow.css"

function InputRow() {

    return (

        <div>
            <input type="text" placeholder="description" id="input_description" />
            <input type="text" placeholder="start_time" id="input_start_time" />
            <input type="text" placeholder="end_time" id="input_end_time" />
            <input type="text" value="total_time" readonly id="input_total_time" />
        </div>

    )

}

export default InputRow