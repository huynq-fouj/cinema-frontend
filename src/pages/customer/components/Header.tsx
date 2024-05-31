import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/cinema.svg';
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { logout } from "../../../shared/toolkits/authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function Header() {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Đăng xuất thành công");
    }

    //Đóng header khi chuyển trang
    const location = useLocation();
    useEffect(() => {
        document.querySelector("#navbarNavDropdown")?.classList.remove('show');
    }, [location.pathname]);

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto me-lg-3">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/phim">PHIM</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/rap-chieu">RẠP CHIẾU PHIM</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/gia-ve">GIÁ VÉ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/uu-dai">ƯU ĐÃI</Link>
                        </li>
                        { isLoggedIn ? (
                            <li className="nav-item dropdown">
                                <button className="nav-link fw-bold dropdown-toggle w-100 w-lg-auto text-start"
                                data-bs-toggle="dropdown">THÀNH VIÊN</button>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow shadow-none">
                                    <li>
                                        <Link className="dropdown-item fw-semibold" to="/thanh-vien"><i className="bi bi-person"></i>Thông tin cá nhân</Link>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <button className="dropdown-item fw-semibold" onClick={handleLogout}><i className="bi bi-door-closed"></i>Đăng xuất</button>
                                    </li>
                                </ul>
                            </li>
                        ) : (<>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/login">ĐĂNG NHẬP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/login#register">ĐĂNG KÝ</Link>
                            </li>
                        </>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}