import axios from 'axios';

const baseURL = 'https://hotel-booking-service-48a284839852.herokuapp.com/api';
export const client = axios.create({ baseURL });
