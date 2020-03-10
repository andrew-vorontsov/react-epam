export default class HttpService {

  public apiBase = 'https://reactjs-cdp.herokuapp.com/';

  getResource = async (url: string) => {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getMoviesList = async () => {
    const res = await this.getResource(`movies`);
    return res.data;
  };

  getMovie = async (id: string) => {
    const movie = await this.getResource(`/movie/${id}/`);
    return movie;
  };
}
