import NavBar from "@/components/navbar/NavBar";
import ProductList from '../components/product/product-list/ProductList';

export default function Home() {
  return (
    <>
      <NavBar/>
      <main className="bg-orange-200 h-[100vh] p-[15px]">
        <ProductList/>
      </main>
    </>

  );
}
