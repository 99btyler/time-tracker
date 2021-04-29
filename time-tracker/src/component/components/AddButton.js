import React from "react"

import "./style/AddButton.css"

function AddButton(props) {
    return (

        <button id="button-add" onClick={props.handleAddButtonClick}>+</button>

    )
}

export default AddButton