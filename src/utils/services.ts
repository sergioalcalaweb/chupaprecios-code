import { ProductResponse } from "@/types";
import { URL_PRODUCTS, URL_TOKEN } from "./constants"


//Function para pedir el token se puede hacer que se guarde en localStorage y hacer verificación del token
export const getToken = async (): Promise<string> => {
  const body = {
    "username": process.env.TOKEN_USERNAME, 
    "password": process.env.TOKEN_PASSWORD
  };
  const request = await fetch(URL_TOKEN, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const token = await request.json();
  return token;
};

//Function para obtener los productos no es lo mejor estar pidiendo el token pero por motivos de demostracion se llama el getToken
export const getProducts = async (): Promise<ProductResponse> => {
  const token = await getToken();
  const request = await fetch(URL_PRODUCTS, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const response = await request.json();
  return response[0];
}
