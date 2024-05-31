import { useEffect } from "react";
import img from "../../assets/portals-cuate.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
    
    useEffect(() => {
        document.title = 'Page not found';
    },[]);

    return (
        <div className="container">
            <section className="w-full pt-5 pt-lg-0">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <img src={img} alt="404 Error Image." />
                    </div>
                </div>
                <div className="fs-3 fw-bold text-center text-warning">Where are we?</div>
                <div className="d-flex justify-content-center mt-3">
                    <Link to="/" className="btn btn-warning fw-semibold text-white">Go Home <i className="bi bi-arrow-right"></i></Link>
                </div>
            </section>
        </div>
    )
}