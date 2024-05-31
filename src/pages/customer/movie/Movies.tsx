import { FAKE_MOVIES } from "../../../shared/fake-data/movie.fake";
import { Movie } from "../../../shared/interfaces/Movie";
import MovieList from "./components/MovieList";
import TabMovies from "./components/TabMovies";

export default function Movies() {

    const movies: Movie[] = FAKE_MOVIES;

    return (
        <main className="container mt-5 py-3">
            <TabMovies/>
            <MovieList movies={movies}/>
        </main>
    )
}