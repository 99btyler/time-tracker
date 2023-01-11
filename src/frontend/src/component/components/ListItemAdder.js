import React from "react";

function ListItemAdder(props) {
    return(
        <div>
            <button onClick={props.addDataItem}>+</button>
        </div>
    )
}

export default ListItemAdder;