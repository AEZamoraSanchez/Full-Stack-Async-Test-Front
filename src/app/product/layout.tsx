import NavBar from "@/components/navbar/NavBar";

const ProductLayout = ({ children } : Readonly<{
     children: React.ReactNode;
   }>) => {
     return (
          <>
               <NavBar/>
               {children}
          </>
     )
}

export default ProductLayout;