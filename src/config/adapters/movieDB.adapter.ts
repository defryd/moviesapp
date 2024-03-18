import { AxiosAdapter } from './http/axios.adapter';


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '8bbf1d2e3bd7759bd8314bf68a4040c4',
        language: 'es'
    }
});