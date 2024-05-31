import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WatchTrailer from "../../../shared/components/modal/WatchTrailer";
import ScrollToTop from "../../../shared/components/scroll-to-top/ScrollToTop";
import "./customer.scss";

export default function CustomerLayout() {

    //Scroll lên top khi chuyển link
    const location = useLocation();
    useLayoutEffect(() => {
        scrollTo({top: 0, behavior: "instant"});
    }, [location.pathname]);

    useEffect(() => {
        document.title = "Cinema";
    }, []);

    return (
        <>
            <ScrollToTop/>
            <Header/>
            <Outlet/>
            <Footer/>
            <WatchTrailer/>
        </>
    )
}