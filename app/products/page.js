
// "use client";
// import ProductsList from "@/components/ProductsList";

// export default function Home() {
//     return <ProductsList />;
// }

import ProductsList from '@/components/ProductsList'; // Make sure the path is correct based on your project structure

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <ProductsList />
    </div>
  );
}