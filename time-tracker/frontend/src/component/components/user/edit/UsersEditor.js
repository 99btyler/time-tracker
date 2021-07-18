import React from "react"
import axios from "axios"

import UsersEditorInputRow from "./UsersEditorInputRow.js"

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
            usersEditorInputRows.push(<UsersEditorInputRow key={i} id={i} description={this.state.descriptions[i]} timeRange={this.state.timeRanges[i]} totalTime={this.state.totalTimes[i]} onChangeDescription={this.onChangeDescription} onChangeTimeRange={this.onChangeTimeRange} />)
        }

        return (

            <div>

                <h1>{this.state.username}'s time-tracker</h1>

                <form onSubmit={this.onSubmitForm} autoComplete="off">

                    {usersEditorInputRows}
                    <button onClick={this.onClickButtonAdd}>+</button>
                    
                    <input type="submit" value="SAVE EDIT" />

                </form>

                <p>success is not the result of doing an extraordinary thing once, but rather the result of doing unremarkable things many times over a long period of time</p>

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

        this.setState({
            timeRanges: timeRangesCopy
        })

    }

    onClickButtonAdd = (event) => {

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

}

export default UsersEditor