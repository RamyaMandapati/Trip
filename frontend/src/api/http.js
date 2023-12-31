
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';
const TOKEN = localStorage.getItem('token');

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});