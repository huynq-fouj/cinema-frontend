import { Link } from "react-router-dom";
import Notifications from "./Notifications";
import Messages from "./Messages";
import ProfileDropdown from "./ProfileDropdown";

import logo from '../../../../assets/cinema.svg';

export default function Header({click}: any) {

    const toggleSideBar = () => {
        click();
    }

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <i className="bi bi-list toggle-sidebar-btn me-3" onClick={toggleSideBar}></i>
                <Link to="/admin" className="logo d-flex align-items-center">
                    <img src={logo} alt="Logo"/>
                    <span className="d-none d-lg-block">Admin</span>
                </Link>
            </div>
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown">
                        <Notifications/>
                    </li>
                    <li className="nav-item dropdown">
                        <Messages/>
                    </li>
                    <li className="nav-item dropdown pe-3">
                        <ProfileDropdown/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}