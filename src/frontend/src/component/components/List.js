import React from "react";

import ListItem from "./ListItem";
import ListItemAdder from "./ListItemAdder"

function List(props) {
    return(
        <div>
            {props.data.map(dataItem => <ListItem key={dataItem._id} dataItem={dataItem} removeDataItem={props.removeDataItem} onChangeDescription={props.onChangeDescription} onChangeStartTime={props.onChangeStartTime} onChangeEndTime={props.onChangeEndTime} />)}
            <ListItemAdder addDataItem={props.addDataItem} />
        </div>
    );
}

export default List;