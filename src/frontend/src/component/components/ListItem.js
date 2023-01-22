import React from "react";

function ListItem(props) {
    return(
        <div>
            <input type="text" defaultValue={props.dataItem.description} onChange={event => props.onChangeDescription(props.dataItem._id, event.target.value)} />
            <input type="text" defaultValue={props.dataItem.startTime} onChange={event => props.onChangeStartTime(props.dataItem._id, event.target.value)} />
            <input type="text" defaultValue={props.dataItem.endTime} onChange={event => props.onChangeEndTime(props.dataItem._id, event.target.value)} />
            <input readOnly type="text" defaultValue={props.dataItem.timeBetween} />
            <button onClick={props.removeDataItem.bind(this, props.dataItem._id)}>x</button>
        </div>
    )
}

export default ListItem;