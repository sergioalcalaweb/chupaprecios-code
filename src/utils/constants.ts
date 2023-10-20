//definimos como variable global la url del endpoint
export const BASE_URL= 'https://chupaprecios.com.mx/rest/V1/';

//obtenemos las variables de entorno
export const USERNAME = process.env.TOKEN_USERNAME;
export const PASSWORD = process.env.TOKEN_PASSWORD;

//URLS
export const URL_TOKEN = `${BASE_URL}integration/admin/token`;
export const URL_PRODUCTS = `${BASE_URL}chupaprecios/customcatalog/?search=perro&selected_store=amazon&page_num=1`;