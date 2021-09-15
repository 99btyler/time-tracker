import React from "react"
import axios from "axios"

import "./UsersAdder.css"

class UsersAdder extends React.Component {

    state = {
        username: ""
    }

    render() {
        return (

            <div id="users-adder">

                <h1>Add user</h1>
                <hr />

                <div id="container">

                    <form onSubmit={this.onSubmitForm}>

                        <input type="text" placeholder="username" value={this.state.username} onChange={this.onChangeUsername} autoFocus="on" />

                        <input type="submit" value="+" />
                        
                    </form>

                </div>
            
            </div>

        )
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value.trim()
        })
    }

    onSubmitForm = (event) => {

        event.preventDefault()

        if (this.state.username.length === 0 || this.state.username.length > 36) {
            return
        }

        const newUser = {
            username: this.state.username,
            descriptions: ["Example description"],
            timeRanges: ["8:30=>8:35"],
            totalTimes: ["5 minutes"]
        }

        axios.post("http://localhost:5000/users/add", newUser).then(() => window.location = "/")

    }

}

export default UsersAdder