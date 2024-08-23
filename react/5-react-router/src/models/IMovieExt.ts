import { IMovie } from "./IMovie";

export interface IMovieExt extends IMovie {
  Actors: string;
  Plot: string;
  Runtime: string;
}
