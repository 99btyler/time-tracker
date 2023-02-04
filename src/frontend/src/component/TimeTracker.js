import React from "react";
import axios from "axios";

import List from "./components/List"

class TimeTracker extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {

        axios.get("http://localhost:8080/entries").then(response => {

            if (response.data.length === 0) {

                this.postDataItem();

            } else {

                this.setState(previousState => (
                    {
                        data: response.data
                    }
                ));

            }

        }).catch(error => console.log(error));

    }

    render() {
        return(
            <div>
                <h1>time-tracker</h1>
                <hr />
                <List data={this.state.data} onChangeDescription={this.onChangeDescription} onChangeStartTime={this.onChangeStartTime} onChangeEndTime={this.onChangeEndTime} postDataItem={this.postDataItem} deleteDataItem={this.deleteDataItem} />
                <p>Success is not the result of doing an extraordinary thing once, but the result of doing many unextraordinary things over a long period of time</p>
            </div>
        )
    }

    onChangeDescription = (_id, value) => {

        this.setState(previousState => (
            {
                data: previousState.data.map(dataItem => {
                    if (dataItem._id === _id) {
                        dataItem.description = value;
                        this.putDataItem(_id, dataItem);
                    }
                    return dataItem;
                })
            }
        ));
         
    }

    onChangeStartTime = (_id, value) => {

        this.setState(previousState => (
            {
                data: previousState.data.map(dataItem => {
                    if (dataItem._id === _id) {
                        dataItem.startTime = value;
                        this.putDataItem(_id, dataItem);
                    }
                    return dataItem;
                })
            }
        ));

    }

    onChangeEndTime = (_id, value) => {

        this.setState(previousState => (
            {
                data: previousState.data.map(dataItem => {
                    if (dataItem._id === _id) {
                        dataItem.endTime = value;
                        this.putDataItem(_id, dataItem);
                    }
                    return dataItem;
                })
            }
        ));

    }

    postDataItem = () => {

        axios.post("http://localhost:8080/entries/add", {description: "description", startTime: "8:33 AM", endTime: "9:06 AM"}).then(response => {
            this.setState(previousState => (
                {
                    data: [...previousState.data, response.data]
                }
            ));
        }).catch(error => console.log(error));

    }

    deleteDataItem = (_id) => {

        axios.delete(`http://localhost:8080/entries/remove/${_id}`).then(response => {
            this.setState(previousState => (
                {
                    data: previousState.data.filter(dataItem => dataItem._id !== _id)
                }
            ));
        }).catch(error => console.log(error));

    }

    putDataItem = (_id, dataItem) => {

        axios.put(`http://localhost:8080/entries/edit/${dataItem._id}`, {description: dataItem.description, startTime: dataItem.startTime, endTime: dataItem.endTime}).catch(error => console.log(error));

    }

}

export default TimeTracker;