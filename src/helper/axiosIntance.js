import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://barbershop-j7tzuvvvx-cajui54.vercel.app/'
    //baseURL: 'https://barbershop-jks.vercel.app/'
    //baseURL: 'http://localhost:3000/'
});

export default axiosInstance;