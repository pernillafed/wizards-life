import { SearchParamPageType } from "../pages/library/book/Book";

const baseURL = "https://legacy--api.herokuapp.com/api/v1";

export const getCharacters = async (page: SearchParamPageType) => {
    const response = await fetch(baseURL + `/characters?page=${page}`);

    if (!response.ok) {
		throw new Error("Could not find resource")
	}

	return response.json()
}

export const getHouses = async (page: SearchParamPageType) => {
    const response = await fetch(baseURL + `/houses?page=${page}`);

    if (!response.ok) {
		throw new Error("Could not find resource")
	}

	return response.json()
}

export const getSpecies = async (page: SearchParamPageType) => {
    const response = await fetch(baseURL + `/species?page=${page}`);

    if (!response.ok) {
		throw new Error("Could not find resource")
	}

	return response.json()
}

export const getWands = async (page: SearchParamPageType) => {
    const response = await fetch(baseURL + `/wands?page=${page}`);

    if (!response.ok) {
		throw new Error("Could not find resource")
	}

	return response.json()
}

export default {
    getCharacters,
    getHouses,
    getSpecies,
    getWands
}