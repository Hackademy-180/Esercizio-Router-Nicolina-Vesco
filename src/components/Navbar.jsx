import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
import useScroll from "../Hooks/useScroll";

function Navbar() {
    const [scrolled, scrollY] =useScroll();
    const { user, logout } = useContext(UserContext);
    return (
        <nav ref={scrolled} className={scrollY > 0 ? 'dark_navbar' : 'navcustom'}>
            <div className="link h-[70px] flex place-content-evenly items-center">

                <Link to="/" className="nav-link text-black hover:text-white">Home</Link>
                <Link to="/login" className="nav-link text-black hover:text-white">Login</Link>

                {(!user && (
                    <Link to="/register" className="nav-link text-black hover:text-white">Registrati</Link>

                )) || (
                        <>
                            <Link to="/posts" className="nav-link text-black hover:text-white">Info</Link>
                            <p className="nav-link">Benvenut* {user.name}</p>
                            <button onClick={logout}>Logout</button>
                        </>
                    )}



            </div>
        </nav>
    )
}
export default Navbar;