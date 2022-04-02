import axios from "axios";
import AppConfig from "../../utils/AppConfig";

console.log(process.env.REACT_APP_URL);
const instance = axios.create({
  baseURL: AppConfig.getUrl(),
});

export default instance;
