import axios from 'axios';

// const baseURL = 'http://localhost:3001';

const baseURL = 'https://managemoney-database.glitch.me';

const client = axios.create({ baseURL });

export default client;
