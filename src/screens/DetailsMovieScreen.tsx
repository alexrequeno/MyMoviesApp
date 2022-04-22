import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ScrollView } from 'react-native'
import { Backdrop } from '../components/MovieDetails/Backdrop'
import { Casting } from '../components/MovieDetails/Casting'
import { Overview } from '../components/MovieDetails/Overview'
import { Rating } from '../components/MovieDetails/Rating'
import { RelatedMovies } from '../components/MovieDetails/RelatedMovies'
import { Title } from '../components/MovieDetails/Title'
import { MovieLoading } from '../components/MovieLoading'
import { apiConf } from '../config/api'
import { RootStackParams } from '../helpers/navigator'
import { useMovieDetails } from '../hooks/useMovieDetails'

interface Props extends StackScreenProps<RootStackParams, 'DetailsMovie'>{}

export const DetailsMovieScreen = ({ route, navigation }: Props) => {
    
    const movie = route.params
    const imgUri = `${apiConf.movieImagesUrl}${movie.poster_path}`;  
    const { isLoading, cast, related } = useMovieDetails(movie.id)  

    if (isLoading){
        return <MovieLoading />;
    }
    else {
        return (
            <ScrollView>
                <Backdrop imgUri={imgUri} />
                <Title title={movie.title} />
                <Rating vote_average={movie.vote_average} /> 
                <Overview overview={movie.overview} />
                <Casting cast={cast} />
                <RelatedMovies 
                    related={related} 
                    movie={movie} 
                    navigation={navigation}                />
            </ScrollView>
        );

    }

}