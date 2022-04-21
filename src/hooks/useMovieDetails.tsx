import { useEffect, useState } from "react"
import movieApi from "../api/movieApi"
import { Cast, MovieFullDetails, OTherInfo } from "../interfaces/movie"

interface MovieDetails {
    isLoading: boolean
    movieFull?: MovieFullDetails
    cast: Cast[]
    //related: any[]
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDetailsFull = await movieApi.get<MovieFullDetails>(`/${movieId}`);
        const castMovie = await movieApi.get<OTherInfo>(`/${movieId}/credits`);

        const [movieDetRes, castMovieRes] = await Promise.all([movieDetailsFull, castMovie]);

        setState({
            isLoading:false,
            movieFull: movieDetRes.data,
            cast: castMovieRes.data.cast
        })
    }

    useEffect(() => {
      getMovieDetails();
    }, [])
    
    return {
        ...state
    }
}