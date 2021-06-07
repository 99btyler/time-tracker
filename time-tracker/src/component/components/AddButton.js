import "./style/AddButton.css"

const AddButton = (props) => {
    return (

        <button id="button-add" onClick={props.handleAddButtonClick}>+</button>

    )
}

export default AddButton