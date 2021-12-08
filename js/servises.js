const API_KEY = 'cb540f48da41ef8861cebfe03a72c3a0';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU'


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