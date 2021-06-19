import PropTypes from "prop-types"

import "./style/InputRow.css"

const InputRow = ({ inputRowID, handleTimePeriodChange, totalTime }) => {
    return (

        <form autoComplete="off">
            <input id="input-description" type="text" placeholder="description" />
            <input id="input-timePeriod" type="text" placeholder="timePeriod" onChange={(event) => handleTimePeriodChange(event, inputRowID)} />
            <input id="input-totalTime" type="text" value={totalTime} readOnly />
        </form>

    )
}

InputRow.propTypes = {
    inputRowID: PropTypes.number.isRequired,
    handleTimePeriodChange: PropTypes.func.isRequired,
    totalTime: PropTypes.string.isRequired
}
export default InputRow