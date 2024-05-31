import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SIDEBAR_LINKS } from "./sidebar-link";
import SidebarItem from "./SidebarItem";
import { useAppDispatch } from "../../../../shared/hooks";
import { logout } from "../../../../shared/toolkits/authSlice";

export default function Sidebar({isToogle}:any) {

    const sidebarLinks = SIDEBAR_LINKS;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Đăng xuất thành công!");
        navigate('/login', );
    }

    return (
        <aside id="sidebar" className={clsx('sidebar', isToogle ? 'active' : '')}>
           <ul className="sidebar-nav" id="sidebar-nav">
                {sidebarLinks.map((item, index) => 
                    <SidebarItem link={item} key={index}/>
                )}
                <li className="nav-item">
                    <button className="nav-link collapsed w-100" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-left"></i>
                        <span>Đăng xuất</span>
                    </button>
                </li>
           </ul>
        </aside>
    )
}