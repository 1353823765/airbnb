import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
class HYRequset {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

const HYRequest = new HYRequset();
export default HYRequest;
