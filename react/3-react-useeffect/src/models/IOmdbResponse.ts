import { IMovie } from "./IMovie";

export interface IOmdbResponse {
  Search: IMovie[];
}

// {
//     Search: [
//         { Title: "LOTR", Year: 2000, Poster: "....", imdbID: "tt12321"},
//         { Title: "LOTR", Year: 2000, Poster: "....", imdbID: "tt12321"},
//         { Title: "LOTR", Year: 2000, Poster: "....", imdbID: "tt12321"},
//         ...
//     ]
// }
