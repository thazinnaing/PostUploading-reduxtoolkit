import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import "../css/layout.css"

const Layout=()=>{
    return(
        <div className="layout">
            <Header />
            <main className="app">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;