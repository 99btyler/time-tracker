
const UsersEditorInputRow = ({ id, description, timeRange, totalTime, onChangeDescription, onChangeTimeRange, onClickButtonDeleteRow }) => {
    return (

        <div>
            <input className="description" type="text" id={id} value={description} onChange={onChangeDescription} />
            <input className="timeRange" type="text" id={id} value={timeRange} onChange={onChangeTimeRange} />
            <input className="totalTime" readOnly type="text" id={id} value={totalTime} />
            <button className="x" onClick={event => onClickButtonDeleteRow(event, id)}>x</button>
        </div>

    )
}

export default UsersEditorInputRow