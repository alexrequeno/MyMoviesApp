import axios from "axios";
import { useEffect, useState } from "react";
import { apiConf } from "../config/api";
import { Movie, Movies } from "../interfaces/movie";

interface MovieDetails {
    isLoading: boolean
    foundMovies: Movie[]
}

export const useSearchMovies = (searching: any) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        foundMovies: []
    });

   
    const getMovies = async () => {
        const response = await axios.get<Movies>('https://api.themoviedb.org/3/search/movie', 
        {params: {
            api_key: apiConf.movieApiKey,
            language: apiConf.movieApiLang,
            query: searching
        }});
       

        setState({
            isLoading: false,
            foundMovies: response.data.results
        });
    };
    
    useEffect(() => {
        getMovies();
    }, [])
      

    return {
       ...state
    }
}