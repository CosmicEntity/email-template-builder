import axios from "axios";

const Axios = axios.create({
  baseURL: "https://email-template-builder-backend-4fer.onrender.com",
});

export default Axios;
