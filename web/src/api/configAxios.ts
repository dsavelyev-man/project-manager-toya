import axios from "axios";
import constants from "../constants.ts";

const configAxios = () => {
  axios.defaults.baseURL = constants.apiUrl
}

export default configAxios