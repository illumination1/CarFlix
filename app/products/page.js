
// "use client";
// import ProductsList from "@/components/ProductsList";

// export default function Home() {
//     return <ProductsList />;
// }
"use client";
import ProductList from '@/components/ProductsList'; 

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <ProductList />
    </div>
  );
}

