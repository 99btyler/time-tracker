import { Link } from 'react-router-dom';

const Navigator = () => {
    return (

        <ul>
            <li><Link to="/">Get</Link></li>
            <li><Link to="/add">Add</Link></li>
        </ul>

    )
}

export default Navigator