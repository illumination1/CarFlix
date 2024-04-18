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

// export default async function ProductList() {
//   const { products } = await getProducts();

//   return (
//     <div className="bg-black min-h-screen flex flex-col justify-center items-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
//         {products.map((rs) => (
//           <div key={rs._id} className="max-w-xs">
//             <div className="bg-white rounded-lg overflow-hidden shadow-md">
//               <Image
//                 src={rs.image}
//                 alt={rs.name}
//                 width={300}
//                 height={200}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="font-bold text-xl mb-2 text-black">{rs.name}</h2>
//                 <p className="text-gray-700">${rs.price}</p>
//                 <p className="text-gray-700">{rs.category}</p>
//               </div>
//               <div className="p-4 flex justify-end">
//                 <Link href={`/editProduct/${rs._id}`}>
//                   <button className="btn btn-primary mr-2">Edit</button>
//                 </Link>
//                 <RemoveBtn id={rs._id} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-4">
//         <Link href="/addProduct">
//           <button className="btn btn-primary">Add Product</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // import Link from "next/link";
// // import RemoveBtn from "./RemoveBtn";
// // import Image from "next/image";

// // const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// // export async function getProducts() {
// //   try {
// //     const res = await fetch(`${apiBaseUrl}/api/products`, {});

// //     if (!res.ok) {
// //       throw new Error("Failed to fetch products");
// //     }

// //     return res.json();
// //   } catch (error) {
// //     console.log("Error loading products: ", error);
// //   }
// // }

// // export default async function ProductsList() {
// //   const { products } = await getProducts();

// //   return (
// //     <div className="bg-black min-h-screen flex flex-col justify-center items-center">
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
// //         {products.map((rs) => (
// //           <div key={rs._id} className="max-w-xs">
// //             <div className="bg-white rounded-lg overflow-hidden shadow-md">
// //               <Image
// //                 src={rs.image}
// //                 alt={rs.name}
// //                 width={300}
// //                 height={200}
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-4">
// //                 <h2 className="font-bold text-xl mb-2 text-black">{rs.name}</h2>
// //                 <p className="text-gray-700">${rs.price}</p>
// //                 <p className="text-gray-700">{rs.category}</p>
// //               </div>
// //               <div className="p-4 flex justify-end">
// //                 <Link href={`/editProduct/${rs._id}`}>
// //                   <button className="btn btn-primary mr-2">Edit</button>
// //                 </Link>
// //                 <RemoveBtn id={rs._id} />
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="mt-4">
// //         <Link href="/addProduct">
// //           <button className="btn btn-primary">Add Product</button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }


import Link from "next/link";
import RemoveBtn from "./RemoveBtn"; // Assuming RemoveBtn is in the same directory
import Image from "next/image";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const getProducts = async () => {
  try {
    const res = await fetch(`${apiBaseUrl}/api/products`, {
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductsList() {
  const { products } = await getProducts();

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {products.map((rs) => (
          <div key={rs._id} className="max-w-xs">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src={rs.image}
                alt={rs.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2 text-black">{rs.name}</h2>
                <p className="text-gray-700">${rs.price}</p>
                <p className="text-gray-700">{rs.category}</p>
              </div>
              <div className="p-4 flex justify-end">
                <Link href={`/editProduct/${rs._id}`}>
                  <button className="btn btn-primary mr-2">Edit</button>
                </Link>
                <RemoveBtn id={rs._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link href="/addProduct">
          <button className="btn btn-primary">Add Product</button>
        </Link>
      </div>
    </div>
  );
}
