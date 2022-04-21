import { useEffect, useState } from "react"
import movieApi from "../api/movieApi"
import { MovieFullDetails } from "../interfaces/movie"

interface MovieDetails {
    isLoading: boolean
    movieFull: MovieFullDetails
    cast: any[]
    related: any[]
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>();

    const getMovieDetails = async () => {
        const res = await movieApi.get<MovieFullDetails>(`/${movieId}`);
        console.log(res.data.overview);
        
    }

    useEffect(() => {
      getMovieDetails();
    }, [])
    
    return {
        state
    }
}