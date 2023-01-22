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

                this.addDataItem();

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
                <List data={this.state.data} onChangeDescription={this.onChangeDescription} onChangeStartTime={this.onChangeStartTime} onChangeEndTime={this.onChangeEndTime} addDataItem={this.addDataItem} removeDataItem={this.removeDataItem} />
                <br />
            </div>
        )
    }

    onChangeDescription = (_id, value) => {

        this.setState(previousState => (
            {
                data: previousState.data.map(dataItem => {
                    if (dataItem._id === _id) {
                        dataItem.description = value;
                    }
                    return dataItem;
                })
            }
        ));

        this.editDataItem(_id);
         
    }

    onChangeStartTime = (_id, value) => {

        this.setState(previousState => (
            {
                data: previousState.data.map(dataItem => {
                    if (dataItem._id === _id) {
                        dataItem.startTime = value;
                    }
                    return dataItem;
                })
            }
        ));

        this.editDataItem(_id);

    }

    onChangeEndTime = (_id, value) => {

        this.setState(previousState => (
            {
                data: previousState.data.map(dataItem => {
                    if (dataItem._id === _id) {
                        dataItem.endTime = value;
                    }
                    return dataItem;
                })
            }
        ));

        this.editDataItem(_id);

    }

    addDataItem = () => {

        axios.post("http://localhost:8080/entries/add", {description: "description", startTime: "8:00 AM", endTime: "8:33 AM", timeBetween: "33 minutes"}).then(response => {
            this.setState(previousState => (
                {
                    data: [...previousState.data, response.data]
                }
            ));
        }).catch(error => console.log(error));

    }

    removeDataItem = (_id) => {

        axios.delete(`http://localhost:8080/entries/remove/${_id}`).then(response => {
            this.setState(previousState => (
                {
                    data: previousState.data.filter(dataItem => dataItem._id !== _id)
                }
            ));
        }).catch(error => console.log(error));

    }

    editDataItem = (_id) => {

        const dataItem = this.state.data.find(dataItem => dataItem._id === _id);

        if (dataItem) {
            axios.put(`http://localhost:8080/entries/edit/${dataItem._id}`, {description: dataItem.description, startTime: dataItem.startTime, endTime: dataItem.endTime, minutesBetween: dataItem.minutesBetween}).catch(error => console.log(error));
        }

    }

}

export default TimeTracker;