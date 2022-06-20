/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;
export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-us`
    },
    fetchTopRating:{
        title:'Top Rating',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-us`
    },
    fetchActinMovies:{
        title:'Action Rating',
        url:`/trending/tv/week?api_key=${API_KEY}&language=en-us`
    },
    fetchHorrorMovies:{
        title:'Horror Movies',
        url:`/trending/tv/day?api_key=${API_KEY}&language=en-us`
    },
    fetchRomanticMovies:{
        title:'Romantic Movies',
        url:`/trending/person/week?api_key=${API_KEY}&language=en-us`
    },
    fetchTV:{
        title:'TV Movies',
        url:`/discover/movies?api_key=${API_KEY}&with_genres=878`
    },
    fetchAnimation:{
        title:'Animation',
        url:`/discover/movies?api_key=${API_KEY}&with_genres=9648`
    },

}