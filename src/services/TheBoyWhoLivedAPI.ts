const baseURL = "https://legacy--api.herokuapp.com/api/v1";

export const getHouses = async () => {
    const response = await fetch(baseURL + `/houses`);

    if (!response.ok) {
		throw new Error("Could not find resource")
	}

	return response.json()
}

export const getHouse = async (houseId: number) => {
    const response = await fetch(baseURL + `/houses/${houseId}`);

    if (!response.ok) {
		throw new Error("Could not find resource")
	}

	return response.json()
}

export default {
    getHouses
}