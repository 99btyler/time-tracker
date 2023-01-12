import React from "react";
import axios from "axios";

import List from "./components/List"

class TimeTracker extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {

        axios.get("http://localhost:8080/entries").then(response => {
            this.setState(previousState => (
                {
                    data: response.data
                }
            ))
        }).catch(error => console.log(error));

    }

    render() {
        return(
            <div>
                <h1>time-tracker</h1>
                <List data={this.state.data} onChangeDataItem={this.onChangeDataItem} addDataItem={this.addDataItem} removeDataItem={this.removeDataItem} />
                <br />
                <button onClick={this.saveDataItems}>SAVE EDITS</button>
            </div>
        )
    }

    onChangeDataItem = (_id, value) => {

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
        
    }

    addDataItem = () => {

        axios.post("http://localhost:8080/entries/add", {description: "\0", startTime: "\0", endTime: "\0"}).then(response => {
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

    saveDataItems = () => {

        for (let i = 0; i < this.state.data.length; i++) {

            const dataItem = this.state.data[i];
            
            axios.put(`http://localhost:8080/entries/edit/${dataItem._id}`, {description: dataItem.description, startTime: dataItem.startTime, endTime: dataItem.endTime}).catch(error => console.log(error));

        }

    }

}

export default TimeTracker;