import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
import useScroll from "../Hooks/useScroll";

function Navbar() {
    const [scrolled, scrollY] =useScroll();
    const { user, logout } = useContext(UserContext);
    return (
        <nav ref={scrolled} className={scrollY > 0 ? 'dark_navbar' : 'navcustom'}>
            <div className="link">

                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>

                {(!user && (
                    <Link to="/register" className="nav-link">Registrati</Link>

                )) || (
                        <>
                            <Link to="/posts" className="nav-link">Info</Link>
                            <p className="nav-link">{user.name}</p>
                            <button onClick={logout}>Logout</button>
                        </>
                    )}



            </div>
        </nav>
    )
}
export default Navbar;