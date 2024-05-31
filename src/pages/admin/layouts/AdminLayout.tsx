import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useLayoutEffect, useState } from "react";

import "./admin.scss";
import clsx from "clsx";
import { useAppSelector } from "../../../shared/hooks";

export default function AdminLayout() {

    const { isLoggedIn, user } = useAppSelector(state => state.auth);
    //const navigate = useNavigate();
    const [toggleSidebar, setToogleSidebar] = useState<boolean>(false);

    //Scroll lên top khi chuyển link
    const location = useLocation();
    useLayoutEffect(() => {
        scrollTo({top: 0, behavior: "instant"});
    }, [location.pathname]);

    useEffect(() => {
        document.title = "Admin";
    }, []);

    //Xử lý tài khoản đủ quyền truy cập hay không
    useEffect(() => {
        // if(!isLoggedIn || user?.role != "ADMIN") {
        //     toast.error('Bạn không thể truy cập trang này!');
        //     navigate('/login');
        // }
    }, [isLoggedIn, user]);

    return (
        <>
            <Header click={() => setToogleSidebar(pre => !pre)}/>
            <Sidebar isToogle={toggleSidebar}/>
            <main id="main" className={clsx('main', toggleSidebar ? 'toggle-sidebar' : '')}>
                <Outlet/>
            </main>
            <Footer isToogleSidebar={toggleSidebar}/>
        </>
    )
}