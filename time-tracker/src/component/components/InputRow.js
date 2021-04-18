import React from "react"

function InputRow() {

    return (

        <div>
            <input type="text" placeholder="description"/>
            <input type="text" placeholder="start_time"/>
            <input type="text" placeholder="end_time"/>
            <input type="text" value="TOTAL_TIME" readonly />
        </div>

    )

}

export default InputRow