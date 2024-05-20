import './style.css'
import avt from '../../images/ip15.jpg'
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div className='navigation-container'>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li><Link to={`/cart`}>Cart</Link></li>
                    {/* <li><Link to={`/manager`}>Quản lý</Link></li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;