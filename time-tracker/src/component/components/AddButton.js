import React from "react"

import "./style/AddButton.css"

class AddButton extends React.Component {

    render() {
        return (

            <button id="button-add" onClick={this.props.handleAddButtonClick}>+</button>
            
        )
    }

}

export default AddButton