import React from "react"
import axios from "axios"

import UsersEditorInputRow from "./UsersEditorInputRow.js"

import "./UsersEditor.css"

class UsersEditor extends React.Component {

    state = {
        username: "",
        descriptions: [],
        timeRanges: [],
        totalTimes: []
    }

    componentDidMount() {

        axios.get("http://localhost:5000/users/" + this.props.match.params.id).then(response => {

            this.setState({
                username: response.data.username,
                descriptions: response.data.descriptions,
                timeRanges: response.data.timeRanges,
                totalTimes: response.data.totalTimes
            })

        })

    }

    render() {

        const usersEditorInputRows = []
        for (var i = 0; i < this.state.descriptions.length; i++) {
            usersEditorInputRows.push(<UsersEditorInputRow key={i} id={i} description={this.state.descriptions[i]} timeRange={this.state.timeRanges[i]} totalTime={this.state.totalTimes[i]} onChangeDescription={this.onChangeDescription} onChangeTimeRange={this.onChangeTimeRange} onClickButtonDeleteRow={this.onClickButtonDeleteRow} />)
        }

        return (

            <div id="users-editor">

                <h1>{this.state.username}'s time-tracker</h1>

                <form onSubmit={this.onSubmitForm} autoComplete="off">

                    {usersEditorInputRows}
                    <button onClick={this.onClickButtonAddRow}>+</button>
                    
                    <input type="submit" value="SAVE EDIT" />

                </form>

                <p>success is not the result of doing an extraordinary thing once, but rather the result of doing unremarkable things many times over a long period of time</p>

                <hr />

                <button id="button-delete" onClick={this.onClickButtonDeleteUser}>DELETE USER</button>

            </div>

        )
    }

    onChangeDescription = (event) => {

        const descriptionsCopy = [...this.state.descriptions]
        descriptionsCopy[event.target.id] = event.target.value

        this.setState({
            descriptions: descriptionsCopy
        })

    }

    onChangeTimeRange = (event) => {

        const timeRangesCopy = [...this.state.timeRanges]
        timeRangesCopy[event.target.id] = event.target.value

        const totalTimesCopy = [...this.state.totalTimes]
        const times = event.target.value.split("=>")
        if (times.length === 2) {
            totalTimesCopy[event.target.id] = this.getDifferenceBetweenTimes(times[0], times[1])
        }

        this.setState({
            timeRanges: timeRangesCopy,
            totalTimes: totalTimesCopy
        })

    }

    onClickButtonDeleteRow = (event, id) => {

        event.preventDefault()

        const descriptionsCopy = [...this.state.descriptions]
        descriptionsCopy.splice(id, 1)

        const timeRangesCopy = [...this.state.timeRanges]
        timeRangesCopy.splice(id, 1)

        const totalTimesCopy = [...this.state.totalTimes]
        totalTimesCopy.splice(id, 1)

        this.setState({
            descriptions: descriptionsCopy,
            timeRanges: timeRangesCopy,
            totalTimes: totalTimesCopy
        })

    }

    onClickButtonAddRow = (event) => {

        event.preventDefault()

        this.setState(oldState => ({
            descriptions: [...oldState.descriptions, ""],
            timeRanges: [...oldState.timeRanges, ""],
            totalTimes: [...oldState.totalTimes, "..."]
        }))

    }

    onSubmitForm = (event) => {

        event.preventDefault()

        const editedUser = {
            username: this.state.username,
            descriptions: this.state.descriptions,
            timeRanges: this.state.timeRanges,
            totalTimes: this.state.totalTimes
        }

        axios.post("http://localhost:5000/users/edit/" + this.props.match.params.id, editedUser).then(() => window.location = "/")

    }

    onClickButtonDeleteUser = () => {

        if (!window.confirm(`Are you sure? ${this.state.username}'s data will be erased.`)) {
            return
        }

        axios.delete("http://localhost:5000/users/delete/" + this.props.match.params.id).then(() => window.location = "/")

    }

    getDifferenceBetweenTimes(startTime, endTime) {

        const startTimeSplit = startTime.split(":")
        let startTimeMinutes = parseInt(startTimeSplit[0]) * 60
        if (startTimeSplit.length === 2) {
            startTimeMinutes += parseInt(startTimeSplit[1])
        }

        const endTimeSplit = endTime.split(":")
        let endTimeMinutes = parseInt(endTimeSplit[0]) * 60
        if (endTimeSplit.length === 2) {
            endTimeMinutes += parseInt(endTimeSplit[1])
        }

        return (endTimeMinutes - startTimeMinutes) + " minutes"

    }

}

export default UsersEditor