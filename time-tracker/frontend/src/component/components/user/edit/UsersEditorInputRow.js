
const UsersEditorInputRow = ({ id, description, timeRange, totalTime, onChangeDescription, onChangeTimeRange, onClickButtonDeleteRow }) => {
    return (

        <div>
            <input type="text" id={id} value={description} onChange={onChangeDescription} />
            <input type="text" id={id} value={timeRange} onChange={onChangeTimeRange} />
            <input readOnly type="text" id={id} value={totalTime} />
            <button onClick={event => onClickButtonDeleteRow(event, id)}>x</button>
        </div>

    )
}

export default UsersEditorInputRow