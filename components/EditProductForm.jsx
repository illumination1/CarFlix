"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({ id, name, image, price, category }) {
    const [newName, setNewName] = useState(name);
    const [newImage, setNewImage] = useState(image);
    const [newPrice, setNewPrice] = useState(price);
    const [newCategory, setNewCategory] = useState(category);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            const res = await fetch(`/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newName, newImage, newPrice, newCategory }),
            });

            if (!res.ok) {
                throw new Error("Failed to update Product");
            }

            router.refresh();
            router.push("/products");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen flex flex-col justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="font-bold text-3xl mb-8 text-center">Update Product</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            onChange={(e) => setNewName(e.target.value)}
                            value={newName}
                            className="input input-bordered w-full max-w-xs"
                            type="text"
                            placeholder="Car Name"
                        />

                        <input
                            onChange={(e) => setNewImage(e.target.value)}
                            value={newImage}
                            className="input input-bordered w-full max-w-xs"
                            type="text"
                            placeholder="Image URL"
                        />

                        <input
                            onChange={(e) => setNewPrice(e.target.value)}
                            value={newPrice}
                            className="input input-bordered w-full max-w-xs"
                            type="number"
                            placeholder="Price"
                        />

                        <input
                            onChange={(e) => setNewCategory(e.target.value)}
                            value={newCategory}
                            className="input input-bordered w-full max-w-xs"
                            type="text"
                            placeholder="Car Type"
                        />

                        <button
                            type="submit"
                            className="btn btn-primary w-full max-w-xs"
                        >
                            Update Product
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
