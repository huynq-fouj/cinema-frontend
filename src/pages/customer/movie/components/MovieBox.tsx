import { Link } from "react-router-dom";
import { MovieBoxProps } from "../../../../shared/types/MovieProps";
import { useAppDispatch } from "../../../../shared/hooks";
import { setOptionTrailer } from "../../../../shared/toolkits/watchTrailerSlice";

export default function MovieBox({ movie }: Readonly<MovieBoxProps>) {

    const dispatch = useAppDispatch();

    const handleShowTrailer = () => {
        dispatch(setOptionTrailer({
            visible: true,
            url: movie.trailer ?? '',
        }));
    };

    return (
        <div className="col-lg-3 col-md-4 col-6 mb-5 px-lg-3 d-flex flex-column justify-content-between">
            <div className="poster-container position-relative">
                <img src={movie.poster} alt={movie.name} className="img-fluid rounded-4"/>
                <div className="overlay-show-trailer
                        position-absolute
                        top-0 start-0
                        w-100 h-100
                        text-white fs-1
                        d-flex
                        align-items-center
                        justify-content-center
                        rounded-4"
                        aria-hidden="true"
                        onClick={handleShowTrailer}>
                    <i className="bi bi-play-circle"></i>
                </div>
            </div>
            <div className="mb-3">
                <Link to={`/chi-tiet-phim/${movie.id}`} className="text-black fw-bold text-uppercase d-block my-2 hover-text-underline">{ movie.name }</Link>
                <p className="mb-0 lh-sm fs-7">Thời lượng: {movie.length} phút</p>
                <p className="mb-0 lh-sm fs-7">Ngày phát hành: {movie.release?.toLocaleDateString("en-GB")}</p>
            </div>
            <div className="w-100 mb-0 mt-auto">
                {/* <Link to={`/chi-tiet-phim/${movie.id}`} className="btn btn-primary text-uppercase mb-2 w-100 fw-semibold">Chi tiết</Link> */}
                <div className="btn btn-warning w-100 fw-semibold mb-0">ĐẶT VÉ</div>
            </div>
        </div>
    )
}