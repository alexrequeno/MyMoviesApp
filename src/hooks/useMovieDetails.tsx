import { useEffect, useState } from "react"
import movieApi from "../api/movieApi"
import { Cast, MovieFullDetails, OTherInfo } from "../interfaces/movie"
import { RelMovie, RelatedMovies } from "../interfaces/relatedMovies"

interface MovieDetails {
    isLoading: boolean
    movieFull?: MovieFullDetails
    cast: Cast[]
    related: RelMovie[]
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
        related: []
    });

    const getMovieDetails = async () => {
        const movieDetailsFull = await movieApi.get<MovieFullDetails>(`/${movieId}`);
        const castMovie = await movieApi.get<OTherInfo>(`/${movieId}/credits`);
        const relMovies = await movieApi.get<RelatedMovies>(`/${movieId}/recommendations`);

        const [movieDetRes, castMovieRes, relMoviesRes] = await Promise.all([movieDetailsFull, castMovie, relMovies]);

        setState({
            isLoading:false,
            movieFull: movieDetRes.data,
            cast: castMovieRes.data.cast,
            related: relMoviesRes.data.results
        })
        //console.log(relMoviesRes.data.results);
        
    }

    useEffect(() => {
      getMovieDetails();
    }, [])
    
    return {
        ...state
    }
}