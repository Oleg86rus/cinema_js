const API_KEY = 'cb540f48da41ef8861cebfe03a72c3a0';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';


// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
    .then(response => {
        if(response.json) {
            return response.json()
        }
        throw `Что-то пошло не так, ошибка ${response.status}`
    })
    .catch(err => console.error(err));

export const getTriends = async (type = 'all', period = 'week', page = 1) => {
    const url = `${BASE_URL}/trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};

export const getTop = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};

export const getPopular = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};

export const getVideo = async (id, type) => {
    const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
    return await getData(url);
};

export const search = async (query, page = 1) => {
    const url = `${BASE_URL}search/search/multi?api_key=${API_KEY}${LANGUAGE}&page=${page}&include_adult=false&query=${query}`;
    return await getData(url);
};
// ${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}
// https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false