import { Link } from "react-router-dom";
import "../css/header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = ()=>{
    return(
        <div className="header-container">
            <header className="header">
                <FontAwesomeIcon className="home-icon" icon={faHome} />
                <nav>
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/post">Post</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;