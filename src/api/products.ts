import axios from "axios";

export const getProducts = async (name: string) => {
  try {
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${name}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
