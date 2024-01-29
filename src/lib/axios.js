import Axios from 'axios';

// Crea una instancia de Axios con la configuración base
const axios = Axios.create({
  baseURL: 'https://backend-a28.onrender.com',
  withCredentials: true, // Importante para las cookies de sesión y CSRF
});

// Añade un interceptor de solicitud para incluir el token CSRF en cada solicitud
axios.interceptors.request.use(config => {
  // Intenta obtener el token CSRF de la cookie
  const regex = /XSRF-TOKEN=([^;]+)/;
  const xsrfToken = document.cookie.match(regex);

  // Si la cookie CSRF existe, añade su valor a las cabeceras de la solicitud
  if (xsrfToken) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrfToken[1]);
  }

  return config;
}, error => {
  return Promise.reject(error);
});

export default axios;
