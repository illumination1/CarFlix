"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !image) {
            alert("Name and image are required.");
            return;
        }

        try {
            // const res = await fetch("http://localhost:3000/api/products", {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, image, price, category }),
            });

            if (res.ok) {
                router.push("/products");
            } else {
                throw new Error("Failed to create a Product");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen flex flex-col justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="font-bold text-3xl mb-8 text-center">Add New Product</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="input input-bordered w-full max-w-xs"
                        type="text"
                        placeholder="Car Name"
                    />
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        className="input input-bordered w-full max-w-xs"
                        type="text"
                        placeholder="Image URL(/images/1.jpg)"
                    />
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        className="input input-bordered w-full max-w-xs"
                        type="number"
                        placeholder="Price"
                    />
                    <input
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        className="input input-bordered w-full max-w-xs"
                        type="text"
                        placeholder="Car Type"
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-full max-w-xs"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}

