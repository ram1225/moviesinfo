import { Result } from './../models/Result';

export class MovieObject {
  
    constructor(public page: number,public total_results: number, public total_pages: number, public results: Result[]) {
      
    }
}