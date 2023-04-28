import axios from 'axios';

const api = axios.create({
  baseURL: 'http://kevin-lienard-server.eddi.cloud',
  timeout: 3000,
});

const jwtToken = localStorage.getItem("token");

if(jwtToken) {
  api.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
}

export default api;

