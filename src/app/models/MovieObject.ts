import { Result } from './../models/Result';

export class MovieObject {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];


    constructor(page: number, total_results: number, total_pages: number, results: Result[]) {
        this.page = page;
        this.total_results = total_results;
        this.total_pages = total_pages;
        this.results = results;
    }
}