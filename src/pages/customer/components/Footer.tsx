import { Link } from "react-router-dom";
import logo from '../../../assets/cinema.svg';
import icons8Facebook from '../../../assets/icons8/icons8-facebook.svg';
import icons8Youtube from '../../../assets/icons8/icons8-youtube.svg';
import icons8Tiktok from '../../../assets/icons8/icons8-tiktok.svg';
import icons8Zalo from '../../../assets/icons8/icons8-zalo.svg';
import icons8Twitterx from '../../../assets/icons8/icons8-twitterx.svg';


export default function Footer() {

    return (
        <footer className="footer border-top py-0 w-100 m-0" id="footer">
            <div className="container">
                <div className="row justify-content-center mb-3 pt-4">
                    <Link to="/" className="d-flex justify-content-center">
                        <img src={logo} alt="Logo cinema"/>
                    </Link>
                </div>
                <div className="row justify-content-center mb-3">
                    <ul className="nav d-flex justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link text-black fw-bold fs-6" to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black fw-bold fs-6" to="/phim">Phim</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black fw-bold fs-6" to="/rap-chieu">Rạp chiếu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black fw-bold fs-6" to="/gia-ve">Giá vé</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black fw-bold fs-6" to="/uu-dai">Ưu đãi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black fw-bold fs-6" to="/chinh-sach">Chính sách</Link>
                        </li>
                    </ul>
                </div>
                <div className="row justify-content-center mb-3">
                    <ul className="nav d-flex justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="#">
                                <img className="social-icon-footer-ctm" src={icons8Facebook} alt="Facebook icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="#">
                                <img className="social-icon-footer-ctm" src={icons8Zalo} alt="Zalo icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="#">
                                <img className="social-icon-footer-ctm" src={icons8Youtube} alt="Youtube icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="#">
                                <img className="social-icon-footer-ctm" src={icons8Tiktok} alt="Tiktok icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="#">
                                <img className="social-icon-footer-ctm" src={icons8Twitterx} alt="X icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="row flex-column align-items-center fw-semibold">
                    <p className="text-center"><span>Địa chỉ: </span>Số 298 đường Cầu Diễn, quận Bắc Từ Liêm, Hà Nội</p>
                    <p className="text-center"><span>Số điện thoại: </span>+84 555 543 873</p>
                    <p className="text-center"><span>Email: </span>example@gmail.com</p>
                </div>
            </div>
            <div className="border-top border-bottom py-2">
                <p className="text-center mb-0">©Copyright<b>2024</b></p>
            </div>
        </footer>
    )
}