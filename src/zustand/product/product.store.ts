import { create } from "zustand";
import { getProducts } from "./product-actions/getProducts.action";
import { ProductStore } from "@/utils/interfaces/stores/productStore.interface";
import { getProductById } from "./product-actions/getProductById.action";

export const useProductStore = create <ProductStore>((set) => ({
     products: [],
     productDetail: null,
     getProducts: async () => {
          try {
               const allProducts = await getProducts();

               set((state : any) => ({
                   ...state,
                    products: allProducts
               }));
          }
          catch (error) {
               console.error(error);
          }
     },
     getProductById: async ( id : string) => {
          try {
               const product = await getProductById(id);

               set((state : any) => ({
                   ...state,
                    productDetail: product
               }));
          }
          catch (error) {
               console.error(error);
          }
     }
     // addProduct: (product: Product) => {
     //      set((state) => ({
     //          ...state,
     //           products: [...state.products, product]
     //      }));
     // },
     // deleteProduct: (productId: string) => {
     //      set((state) => ({
     //          ...state,
     //           products: state.products.filter((product) => product.id!== productId)
     //      }));
     // }
 }));