import PropTypes from "prop-types"

import "./style/AddButton.css"

const AddButton = ({ handleAddButtonClick }) => {
    return (

        <button id="button-add" onClick={handleAddButtonClick}>+</button>

    )
}

AddButton.propTypes = {
    handleAddButtonClick: PropTypes.func.isRequired
}

export default AddButton