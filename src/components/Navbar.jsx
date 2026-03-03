import {Link} from "react-router";

function Navbar() {
    return (
        <nav className="navcustom">
            <div className="link">

                <Link to="/" className="nav-link">Home</Link>
                <Link to="/posts" className="nav-link">Info</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Registrati</Link>



            </div>
        </nav>
    )
}
export default Navbar;