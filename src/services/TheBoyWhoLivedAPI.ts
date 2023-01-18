const baseURL = "https://legacy--api.herokuapp.com/api/v1";

export const getCharacters = async () => {
    const response = await fetch(baseURL + "/characters");

    if (!response.ok) {
		throw new Error("Could not find resource")
	}

	return response.json()
}

export default {
    getCharacters
}