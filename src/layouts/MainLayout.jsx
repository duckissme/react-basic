import { Outlet } from "react-router-dom";
import Sidemenu from "../components/Sidemenu";
import './MainLayout.scss';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <div className="sidemenu">
                <Sidemenu />
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;