import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import img_profile from '../../../../assets/img/img-profile.png';
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks";
import { logout } from "../../../../shared/toolkits/authSlice";

export default function ProfileDropdown() {

    const navigate = useNavigate();
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Đăng xuất thành công!");
        navigate('/login', );
    }

    return (
        <div className="">
            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
                <img src={user?.avatar ? user.avatar : img_profile } alt="Profile" className="rounded-circle"/>
                <span className="d-none d-md-block dropdown-toggle ps-2">{ user?.fullname }</span>
            </Link>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>{ user?.fullname }</h6>
              <span>{ user?.role }</span>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" to="/admin/profile">
                <i className="bi bi-person"></i>
                <span>Thông tin cá nhân</span>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" to="/admin/setting">
                <i className="bi bi-gear"></i>
                <span>Cài đặt</span>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" to="/admin/contact">
                <i className="bi bi-question-circle"></i>
                <span>Hỗ trợ</span>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <button className="dropdown-item d-flex align-items-center"
                onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"></i>
                <span>Đăng xuất</span>
              </button>
            </li>

          </ul>
        </div>
    )
}