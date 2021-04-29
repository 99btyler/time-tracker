import React from "react"

import AddButton from "./components/AddButton"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InputRow from "./components/InputRow"

class TimeTracker extends React.Component {

    state = {
        inputRows: []
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

    handleTimePeriodChange = (event, inputRowID) => {

        const timePeriod = event.target.value
        let newTotalTime = ""

        // Check if the timePeriod values are valid
        const times = timePeriod.split("=>")
        if (times.length !== 2) {
            return
        }

        const startTimeMinutes = this.getMinutesFromTime(times[0])
        const endTimeMinutes = this.getMinutesFromTime(times[1])

        // Use them to calculate the totalTime value
        newTotalTime = (endTimeMinutes - startTimeMinutes) + " minutes"

        // Update the appropriate InputRow using inputRowID
        this.setState(oldState => ({
            inputRows: oldState.inputRows.map(oldInputRow => <InputRow key={oldInputRow.key} inputRowID={oldInputRow.props.inputRowID} handleTimePeriodChange={this.handleTimePeriodChange} totalTime={oldInputRow.props.inputRowID === inputRowID ? newTotalTime : oldInputRow.props.totalTime} />)
        }))

    }

    handleAddButtonClick = () => {

        this.setState(oldState => ({
            inputRows: [...oldState.inputRows, <InputRow key={oldState.inputRows.length} inputRowID={oldState.inputRows.length} handleTimePeriodChange={this.handleTimePeriodChange} totalTime="..." />]
        }))

    }

    getMinutesFromTime(time) {

        const timeSplit = time.split(":")

        let totalMinutes = (parseInt(timeSplit[0]) * 60)

        if (timeSplit.length === 2) {
            totalMinutes += parseInt(timeSplit[1])
        }

        return totalMinutes

    }

}

export default TimeTracker