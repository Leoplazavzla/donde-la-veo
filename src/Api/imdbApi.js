const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8d08913e59mshf8b0eef650f8d17p17d964jsn31d14b4ed96c',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));