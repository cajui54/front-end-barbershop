import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: 'https://barbershop-jks.vercel.app/'
    baseURL: 'http://localhost:3001/'
});

export default axiosInstance;