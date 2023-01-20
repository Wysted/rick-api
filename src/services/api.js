import axios from "axios";

// const API_URL = "https://rickandmortyapi.com/api/";

export const getCharacters = (url ) => {
    return axios.get(url);
}
