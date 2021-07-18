
const UsersEditorInputRow = ({ id, description, timeRange, totalTime, onChangeDescription, onChangeTimeRange }) => {
    return (

        <div>
            <input type="text" id={id} value={description} onChange={onChangeDescription} />
            <input type="text" id={id} value={timeRange} onChange={onChangeTimeRange} />
            <input readOnly type="text" id={id} value={totalTime} />
        </div>

    )
}

export default UsersEditorInputRow