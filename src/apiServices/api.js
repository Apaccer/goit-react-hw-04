import axios from "axios";
const apiKey = "rYmK2FB17omhqrvA6G0Vcmg-dpqrRFElkMnY1DbtE9Y";
export const getImagesByQuery = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${query}&per_page=20`
  );
  return data;
};
