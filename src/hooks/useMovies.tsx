import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";
import { Movie, Movies } from "../interfaces/movie";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [popularMovies, setPopularMovies] = useState<Movies[]>([]);

    const getMovies = async () => {
        const response = await movieApi.get<Movie>('/popular');
        setPopularMovies(response.data.results)

        setIsLoading(false);
    };
    
    useEffect(() => {
        getMovies();
    }, [])
      

    return {
        popularMovies,
        isLoading
    }
}