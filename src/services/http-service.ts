import { Movie, Data } from "../types";

export default class HttpService {

  private apiBase = 'https://reactjs-cdp.herokuapp.com/movies/';

  getResource<T>(url: string = ''): Promise<T> {
    return fetch(this.apiBase + url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
  }

  getMoviesList(url: string = ''): Promise<Movie[]> {
    return this.getResource<Data>(url).then((data: Data) => data.data);
  }

  getOneMovie(id: string): Promise<Movie> {
    return this.getResource<Movie>(id);
  }


  // getResource = async (url: string): Promise<Data> => {
  //   const res = await fetch(`${this.apiBase}${url}`);

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}` +
  //       `, received ${res.status}`)
  //   }
  //   return await res.json();
  // };

  // getMoviesList = async (url: string) => {
  //   const res = await fetch(`${this.apiBase}movies/${url}`);
  //   return res;
  // };

  // getOneMovie = async (id: string) => {
  //   const movie = await fetch(`${this.apiBase}movies/${id}`)
  //   return movie;
  // };
}
