const baseURL = "https://hp-api.onrender.com/api";

export const getSpells = async () => {
  const response = await fetch(baseURL + "/spells");

  if (!response.ok) {
    throw new Error("Could not find resource");
  }

  return response.json();
};

export default {
  getSpells,
};
