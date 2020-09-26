import axios from "axios";

export const getProducts = async (name: string) => {
  try {
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${name}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
