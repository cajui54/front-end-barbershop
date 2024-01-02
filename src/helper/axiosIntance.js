import axios from "axios";

const axiosInstance = axios.create({
    //API Remote
    baseURL: 'https://barbershop-jks.vercel.app/'
    // API Local
    //baseURL: 'http://localhost:3000/'
});

export default axiosInstance;