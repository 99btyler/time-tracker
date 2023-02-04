import React from "react";

import ListItem from "./ListItem";
import ListItemAdder from "./ListItemAdder"

function List(props) {
    return(
        <div>
            {props.data.map(dataItem => <ListItem key={dataItem._id} dataItem={dataItem} onChangeDescription={props.onChangeDescription} onChangeStartTime={props.onChangeStartTime} onChangeEndTime={props.onChangeEndTime} deleteDataItem={props.deleteDataItem} />)}
            <ListItemAdder postDataItem={props.postDataItem} />
        </div>
    );
}

export default List;