import axios from 'axios';

const url = process.env.WEBSITE_URL || 'http://localhost';
const BASE_URL = URL + ':5000';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});