import { Product } from "@/utils/interfaces/product/product.interface";
import Link from "next/link";
import Image from 'next/image';

const ProductCard = ( { id, name, description, images, price } : Product) => {
     return (
          <Link href={`product/detail/${id}`}>
               <div className="bg-teal-400 w-[100%] aspect-[4/6] rounded-md hover:scale-[1.1] duration-[1s]">
                    <img src={images[0]} alt={name} className="rounded-t-md"/>
                    <div className="p-[10px]">
                         <h3>{name}</h3>
                         <h3>{price}</h3>
                    </div>
               </div>
          </Link>
     )
}

export default ProductCard;