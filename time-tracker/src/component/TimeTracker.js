import React from "react"

import AddButton from "./components/AddButton"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InputRow from "./components/InputRow"

class TimeTracker extends React.Component {

    constructor() {

        super()

        this.handleTimePeriodChange = this.handleTimePeriodChange.bind(this)
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this)

        this.state = {
            inputRows: []
        }

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

    handleTimePeriodChange(event, inputRowID) {

        // ...

    }

    handleAddButtonClick() {

        this.setState(oldState => ({
            inputRows: [...oldState.inputRows, <InputRow key={oldState.inputRows.length} inputRowID={oldState.inputRows.length} handleTimePeriodChange={this.handleTimePeriodChange} totalTime="totalTime" />]
        }))

    }

}

export default TimeTracker