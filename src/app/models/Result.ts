export class Result{
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;

    constructor(id: number,vote_average: number, title: string,poster_path: string,overview: string,release_date: string){
        this.id=id;
        this.vote_average=vote_average;
        this.title=title;
        this.poster_path=poster_path;
        this.overview=overview;
        this.release_date=release_date;
    }


}