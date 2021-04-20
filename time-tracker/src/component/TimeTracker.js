import React from "react"

import AddButton from "./components/AddButton"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InputRow from "./components/InputRow"

function TimeTracker() {

    const amountOfInputRows = 1

    const inputRows = [];
    for (var i = 0; i < amountOfInputRows; i++) {
        inputRows.push(<InputRow key={i} />)
    }

    return (

        <div>

            <Header />

            {inputRows}
            <AddButton />

            <Footer />

        </div>

    )

}

export default TimeTracker