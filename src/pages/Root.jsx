import { Outlet } from "react-router";
import Nav from "../components/Nav/index.jsx";
import Footer from "../components/Footer/index.jsx";
import "./Root.css";

export default function Root(){
    return (
        <div className="root-container">
            <Nav />
            <main className="main-content">
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}