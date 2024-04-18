const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Home() {
    return <ProductsList apiBaseUrl={apiBaseUrl} />;
}

// "use client";
// import ProductsList from "@/components/ProductsList";

// export default function Home() {
//     return <ProductsList />;
// }