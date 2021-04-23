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

        this.handleAddButtonClick = this.handleAddButtonClick.bind(this)

    }

    render() {
        return (

            <div>
                <Header />
                {this.state.inputRows}
                <AddButton handleAddButtonClick={this.handleAddButtonClick} />
                <Footer />
            </div>

        )
    }

    handleAddButtonClick() {

        this.setState(oldState => ({
            inputRows: [...oldState.inputRows, <InputRow key={oldState.inputRows.length} />]
        }))

    }

}

export default TimeTracker