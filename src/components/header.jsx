import { Link } from "react-router-dom";
import "../css/header.css"

const Header = ()=>{
    return(
        <div className="header-container">
            <header className="header">
            <h1>Social Star</h1>
            <nav>
                <ul>
                    <li><Link className="link" to="/">Home</Link></li>

                    <li><Link className="link" to = "post">Post</Link></li>
                </ul>
            </nav>

        </header>

        </div>
        
    )

}

export default Header;