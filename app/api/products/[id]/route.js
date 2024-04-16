import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";
 
export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { newName: name, newImage: image, newPrice: price, newCategory: category } = await request.json();
        await connectMongoDB();
        // Check if the provided image path exists
        let finalImage = image;
        if (!image || !isValidImagePath(image)) {
            // If image path is missing or invalid, set a default image path
            finalImage = "/images/default.jpg"; // Default image path
        }
        
        await Product.findByIdAndUpdate(id, { name, image: finalImage, price, category});
        return NextResponse.json({ message: "Product Updated" }, { status: 200 });
    } catch (error) {
        console.error("Error updating product:", error);
        return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
    }
}

function isValidImagePath(imagePath) {
    return imagePath.startsWith("/images/");
}
 
export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 });
}