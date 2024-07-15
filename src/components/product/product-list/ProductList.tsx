'use client'
import { useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import styles from './ProductList.module.css'
import { useProductStore } from "@/zustand/product/product.store";
import { Product } from '../../../utils/interfaces/product/product.interface';

const ProductList = () => {

     const { products, getProducts } = useProductStore();
     
     useEffect(() => {
          getProducts()

     }, [])

     return (
          <>
               <section className={styles.sectionList}>
                    {
                         products.map((product) => (
                              <ProductCard
                              key={product.id}
                              id={product.id}
                              name={product.name}
                              description={product.description}
                              price={product.price}
                              images={product.images}
                              /> 
                         ))
                    }
                    
               </section>
          </>
     )
}

export default ProductList;