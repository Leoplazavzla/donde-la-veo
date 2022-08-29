const URL = 'https://api.themoviedb.org/3'
const key = process.env.REACT_APP_TMDB_API_KEY;

export const getSeries = async (id)  => {
    try {
        const request = await fetch(`${URL}/tv/${id}?${key}`);
        if(request.status === 200){
            return await request.json()
        }
    }catch (error) {
        console.log(error)
    }
}

export const searchSeries = async (value) => {
    try {
        const request = await fetch(`${URL}/search/multi?${key}&query=${value}`);
        if (request.status === 200){
            return await request.json()
        }
    }catch (e) {
        console.log(e)
    }
}

