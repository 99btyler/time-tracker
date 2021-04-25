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

        const timePeriodValue = event.target.value

        // Check if the timePeriod value is valid
        const split = timePeriodValue.split(" to ")
        if (split.length != 2) {
            return
        }

        // Use it to calculate the totalTime value
        const startTime = split[0]
        const endTime = split[1]
        const totalTime = endTime - startTime

        // Update the appropriate InputRow using inputRowID
        this.setState(oldState => ({
            inputRows: oldState.inputRows.map(oldInputRow => oldInputRow.props.inputRowID == inputRowID ? <InputRow key={oldInputRow.props.key} inputRowID={oldInputRow.props.inputRowID} handleTimePeriodChange={this.handleTimePeriodChange} totalTime={totalTime} /> : oldInputRow)
        }))

    }

    handleAddButtonClick() {

        this.setState(oldState => ({
            inputRows: [...oldState.inputRows, <InputRow key={oldState.inputRows.length} inputRowID={oldState.inputRows.length} handleTimePeriodChange={this.handleTimePeriodChange} totalTime="totalTime" />]
        }))

    }

}

export default TimeTracker