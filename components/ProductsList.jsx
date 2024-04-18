// import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import Image from "next/image";
// const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
// const getProducts = async () => {
//   try {
//     const res = await fetch(`${apiBaseUrl}/api/products`, {
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading products: ", error);
//   }
// };

// export default async function ProductLis() {
//   const { product } = await getProducts();

//   return (
//     <> {/* Wrap JSX code with a React fragment */}
//       <div className="bg-black min-h-screen flex flex-col justify-center items-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
//           {product.map((rs) => (
//             <div key={rs._id} className="max-w-xs">
//               <div className="bg-white rounded-lg overflow-hidden shadow-md">
//                 <Image
//                   src={rs.image}
//                   alt={rs.name}
//                   width={300}
//                   height={200}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="font-bold text-xl mb-2 text-black">{rs.name}</h2>
//                   <p className="text-gray-700">${rs.price}</p>
//                   <p className="text-gray-700">{rs.category}</p>
//                 </div>
//                 <div className="p-4 flex justify-end">
//                   <Link href={`/editProduct/${rs._id}`}>
//                     <button className="btn btn-primary mr-2">Edit</button>
//                   </Link>
//                   <RemoveBtn id={rs._id} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-4">
//           <Link href="/addProduct">
//             <button className="btn btn-primary">Add Product</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

//components\EditProductForm.jsx
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Image from 'next/image'
 
const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/products", {
            cache: "no-store",
        });
 
        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
 
        return res.json();
    } catch (error) {
        console.log("Error loading products: ", error);
    }
};
 
export default async function ProductssList() {
    const { products } = await getProducts();
 
    return (
        <>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold py-10 text-2xl">Next.js 14 CRUD Crate, Read, Update and Delete - MongoDB Daisyui TailwindCSS</h1>
                </div>
                <div className="text-right">
                    <Link className="btn btn-primary" href={"/addProduct"}>
                        Add Product
                    </Link>
                </div>
            <table className="table">
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th />
                </tr>
                </thead>
                <tbody>
                    {products.map((rs) => (
                    <tr className="hover" key={rs._id}>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <Image
                                            src={rs.image}
                                            alt={rs.name}
                                            width={80}
                                            height={80}
                                            className="rounded-lg"
                                    />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{rs.name}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            ${rs.price}
                        </td>
                        <td>{rs.category}</td>
                        <th>
                            <Link href={`/editProduct/${rs._id}`}>
                                <button className="btn btn-primary">Edit</button>
                            </Link>
                            <RemoveBtn id={rs._id} />
                        </th>
                    </tr>
                    ))}                    
                </tbody>
            </table>
            </div>
        </>
    );
}