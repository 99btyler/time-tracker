import React from "react";

import ListItem from "./ListItem";
import ListItemAdder from "./ListItemAdder"

function List(props) {
    return(
        <div>
            {props.data.map(dataItem => <ListItem key={dataItem._id} dataItem={dataItem} onChangeDescription={props.onChangeDescription} onChangeStartTime={props.onChangeStartTime} onChangeEndTime={props.onChangeEndTime} removeDataItem={props.removeDataItem} />)}
            <ListItemAdder addDataItem={props.addDataItem} />
        </div>
    );
}

export default List;