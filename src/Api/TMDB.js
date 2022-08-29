const URL = 'https://api.themoviedb.org/3'
const key = process.env.REACT_APP_TMDB_API_KEY;

export const getMovie = async (id)  => {
    try {
        const request = await fetch(`${URL}/movie/${id}?${key}`);
        if(request.status === 200){
            return await request.json()
        }
    }catch (error) {
        console.log(error)

    }
}

export const getPopularMovies = async () => {
    try {
        const request = await fetch(`${URL}/movie/popular?${key}`);
        if (request.status === 200){
            const popularMovies = await request.json();
            console.log(popularMovies)
        }
    }catch (e) {
        console.log(e)
    }
}

export const searchMoviesOrSeries = async (value) => {
    try {
        const request = await fetch(`${URL}/search/multi?${key}&query=${value}`);
        if (request.status === 200){
            const moviesOrSeries = await request.json();
            return moviesOrSeries
        }
    }catch (e) {
        console.log(e)
    }
}

export const getStreamService = async (id) => {
    try {
        const request = await fetch(`${URL}/movie/${id}/watch/providers?${key}`);
            if(request.status === 200){
                return await request.json()
        }
    }catch (e) {
        console.log(e)
    }
}

