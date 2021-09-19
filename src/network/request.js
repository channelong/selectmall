import vue from 'vue'
import axios from 'axios'

vue.use(axios)

const baseurl = "https://192.168.9.121:8080";

export default function request(config) {
  const instance = axios.create({
    baseURL: baseurl,
    timeout: 5000
  })
  return instance(config);
}
