import { ErrorAuth } from "@/utils/interfaces/error/errorAuth.interface";
import { Product } from "@/utils/interfaces/product/product.interface";

export const getProductById = async (id : string) : Promise<Product> => {
     try {
          const response = await fetch(
               `${process.env.URL_BACKEND!}/product/${id}`, 
               { headers: { 
                    'Authorization': `Bearer ${process.env.AUTH_TOKEN}` } 
               })

               const result : Product | ErrorAuth = await response.json();


          if ('error' in result) {
               throw new Error(result.error);
          }

          return result;

     }
     catch (error) {
          throw error;
     }
}