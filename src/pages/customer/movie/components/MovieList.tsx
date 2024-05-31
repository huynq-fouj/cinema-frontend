import { MovieListProps } from "../../../../shared/types/MovieProps";
import MovieBox from "./MovieBox";

export default function MovieList({ movies }: Readonly<MovieListProps>) {

    return (
        <div className="row">
            { movies.map((item, index) => <MovieBox movie={item} key={index}/>)}
        </div>
    )
}