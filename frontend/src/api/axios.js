import axios from 'axios';

const BASE_URL = process.env.WEBSITE_URL || 'https://navneet-finance-1234.fly.dev';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});