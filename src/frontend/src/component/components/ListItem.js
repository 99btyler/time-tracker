import React from "react";

function ListItem(props) {
    return(
        <div>
            <input type="text" defaultValue={props.dataItem.description} onChange={event => props.onChangeDataItem(props.dataItem._id, event.target.value)} />
            <input type="text" defaultValue={props.dataItem.startTime} />
            <input type="text" defaultValue={props.dataItem.endTime} />
            <button onClick={props.removeDataItem.bind(this, props.dataItem._id)}>x</button>
        </div>
    )
}

export default ListItem;