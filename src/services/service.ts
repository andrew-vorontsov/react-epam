export default class Service {

  public apiBase = 'https://reactjs-cdp.herokuapp.com/';

  getResource = async (url: string) => {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getDatas = () => {
    return [
      {
        id: 1,
        name: "Andrey"
      }
    ]
  }

  getMoviesList = async () => {
    const res = await this.getResource(`movies`);
    return res;
  };

  getMovie = async (id: string) => {
    const person = await this.getResource(`/people/${id}/`);
    return person;
  };
}
