import { useParams } from "react-router-dom"

export default function MovieDetails() {

    const { movieId } = useParams();

    return (
        <main className="container mt-5 py-3">
            <h4>Movie id: { movieId }</h4>
        </main>
    )
}