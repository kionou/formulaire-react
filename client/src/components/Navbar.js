import { Link } from "react-router-dom";
import './styles/navbar.css'

const Navbar = () => {
    return (
        <div>
             <header>
        <div className="heade">
            <div className="logo">
                <Link to={"/"}>Djassa Online</Link>
            </div>
            <nav>
                <ul>
                    <form action="/search" method="post" className="formulaire">
                        <li> <input className="inputsearch" type="text" name="search" placeholder="Recherchez" /></li>
                    </form>
                    <li><Link className="search" href="#"><i className="fas fa-search"></i></Link></li>
                    <li><Link to={"/login"}><i className="fas fa-user"></i></Link></li>
                    <li><Link to={"/"}><i className="fas fa-shopping-cart"></i></Link></li>

                </ul>
            </nav>
        </div>
    </header>
        </div>
      );
}
 
export default Navbar;