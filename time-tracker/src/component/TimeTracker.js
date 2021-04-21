import React from "react"

import AddButton from "./components/AddButton"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InputRow from "./components/InputRow"

class TimeTracker extends React.Component {

    constructor() {

        super()

        this.state = {
            inputRows: [<InputRow key="0" />]
        }

    }

    render() {

        return (

            <div>

                <Header />

                {this.state.inputRows}
                <AddButton />

                <Footer />

            </div>

        )
    }

}

export default TimeTracker