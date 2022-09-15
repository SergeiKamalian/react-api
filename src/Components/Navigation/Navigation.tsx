import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <div className="Navigation">
            <div className="logo"><Link to='/' style={{color: 'white'}}>OurLogo</Link>  </div>
            <ul>
                <li> <Link to='/posts' style={{color: 'white'}}>Posts</Link>  </li>
                <li>Comments</li>
                <li>Albums</li>
                <li>Photos</li>
                <li>ToDos</li>
                <li>Users</li>
            </ul>
        </div>
    )

}
export default Navigation