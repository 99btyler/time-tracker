import React from "react";

function ListItemAdder(props) {
    return(
        <div>
            <button onClick={props.postDataItem}>+</button>
        </div>
    )
}

export default ListItemAdder;