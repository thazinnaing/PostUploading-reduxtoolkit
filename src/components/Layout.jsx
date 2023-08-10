import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import "../css/layout.css"

const Layout=()=>{
    return(
        <>
        <Header />
        <main className="App">
            <Outlet />
        </main>
        </>
    )
}

export default Layout;