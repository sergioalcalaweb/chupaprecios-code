// Definimos el tipo de datos tendra un producto para mantener un estandar y poder extenderlo
export interface Product{
  asin: string;
  thumbnail: string;
  title: string;
  price: number;
  description: string;
}


// se define el tipo de estructura que sera el carrito
export type Cart = {
  count: number
  add: () => void
}


//Aqui se definira el tipo de datos que tiene las respuestas de los productos provenientes del API
export interface ProductResponse {
  code: number;
  description: string;
  data: {
    total_products: number;
    items: Product[];
    selected_store: string;
  };
}