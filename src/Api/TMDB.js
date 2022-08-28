const URL = 'https://api.themoviedb.org/3'
const key = process.env.REACT_APP_TMDB_API_KEY;

export const getMovies = async ()  => {
    try {
        const request = await fetch(`${URL}/movie/550?${key}`);
        if(request.status === 200){
            const data = await request.json();
            console.log(data)
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

export const getTMDBConfiguration = async () => {
    try {
        const request = await fetch(`${URL}/configuration?${key}`);
            if(request === 200){
                const config = await request.json();
                return config
        }
    }catch (e) {
        console.log(e)
    }
}

