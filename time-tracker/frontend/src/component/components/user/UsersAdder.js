import React from "react"
import axios from "axios"

import "./UsersAdder.css"

class UsersAdder extends React.Component {

    state = {
        username: ""
    }

    render() {
        return (

            <form id="users-adder" onSubmit={this.onSubmitForm}>
                
                <label htmlFor="username">username: </label>
                <input type="text" id="username" value={this.state.username} onChange={this.onChangeUsername} autocomplete="off" />
                
                <input type="submit" value="ADD" />

            </form>

        )
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value.trim()
        })
    }

    onSubmitForm = (event) => {

        event.preventDefault()

        if (this.state.username.length === 0) {
            return
        }

        const newUser = {
            username: this.state.username,
            descriptions: [""],
            timeRanges: [""],
            totalTimes: [""]
        }

        axios.post("http://localhost:5000/users/add", newUser).then(() => window.location = "/")

    }

}

export default UsersAdder