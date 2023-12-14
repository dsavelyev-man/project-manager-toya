import axios from "axios";
import constants from "../constants.ts";

const configAxios = () => {
  axios.defaults.baseURL = constants.apiUrl;
  // axios.defaults.withCredentials = true
};

export default configAxios;
