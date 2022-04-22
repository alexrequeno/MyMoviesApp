export interface RelatedMovies {
    page:          number;
    results:       RelMovie[];
    total_pages:   number;
    total_results: number;
}

export interface RelMovie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    media_type:        MediaType;
    title:             string;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum MediaType {
    Movie = "movie",
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
}
