import { FAKE_MOVIES } from "../../shared/fake-data/movie.fake";
import { Movie } from "../../shared/interfaces/Movie";
import Banner from "./components/banner/Banner";
import MovieList from "./movie/components/MovieList";
import TabMovies from "./movie/components/TabMovies";

export default function Home() {

    const movies: Movie[] = FAKE_MOVIES;

    return (
        <main className="mt-5 py-3">
            <Banner />
            <section className="container pt-5">
                <TabMovies/>
                <MovieList movies={movies}/>
            </section>
        </main>
    )
}