import axios from "axios";

axios.defaults.baseURL = 'https://blink-box-drf-1e212f83bc7c.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
