import { Product } from "../product/product.interface";
import { getProducts } from '../../../zustand/product/product-actions/getProducts.action';

export interface ProductStore {
     products: Product[];
     productDetail: Product | null;
     getProducts: () => Promise<void | true>;
     getProductById: (id: string) => Promise<void |true>;
}