import { react } from 'react'
import './Navbar.css'

const DontWork = () => {
    alert(`This Does Not Work. Output: '/'`)
}

const Navbar = () => {
    <>
        <div>
            <ul>
                <li><a href="/">DataFetcher</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </div>
    </>
}

export default Navbar