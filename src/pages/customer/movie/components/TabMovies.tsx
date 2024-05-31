import clsx from "clsx";
import { TabMovieType } from "../../../../shared/types/TabMovieType";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks";
import { setTabMovie } from "../../../../shared/toolkits/tabMovieSlice";

export default function TabMovies() {

    const active = useAppSelector(state => state.tabMovie.value);
    const dispatch = useAppDispatch();

    return (
        <div className="flex-x-center my-4">
            <ul className="nav nav-tabs tab-movies">
                <li>
                    <div className={clsx("tab-movie-item py-2",
                        active === TabMovieType.FUTURE && "active"
                    )}
                    aria-hidden="true"
                    onClick={() => dispatch(setTabMovie(TabMovieType.FUTURE))}>
                        <h3 className="lg:fs-[28] md:fs-[21] sm:fs-[16] fs-[10] fw-bold m-0">PHIM SẮP CHIẾU</h3>
                    </div>
                </li>
                <li>
                    <div className={clsx("tab-movie-item py-2 mx-2 mx-sm-3",
                        active === TabMovieType.NOW && "active"
                    )}
                    aria-hidden="true"
                    onClick={() => dispatch(setTabMovie(TabMovieType.NOW))}>
                        <h3 className="lg:fs-[28] md:fs-[21] sm:fs-[16] fs-[10] fw-bold m-0">PHIM ĐANG CHIẾU</h3>
                    </div>
                </li>
                <li>
                    <div className={clsx("tab-movie-item py-2",
                        active === TabMovieType.SPECIAL && "active"
                    )}
                    aria-hidden="true"
                    onClick={() => dispatch(setTabMovie(TabMovieType.SPECIAL))}>
                        <h3 className="lg:fs-[28] md:fs-[21] sm:fs-[16] fs-[10] fw-bold m-0">SUẤT CHIẾU ĐẶC BIỆT</h3>
                    </div>
                </li>
            </ul>
        </div>
    )
}