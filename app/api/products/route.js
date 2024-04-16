//app\api\products\route.js
import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";
 
export async function GET() {
    await connectMongoDB();
    const products = await Product.find();
    return NextResponse.json({ products });
}
 
export async function POST(request) {
    try {
        const { name, image, price, category } = await request.json();
        await connectMongoDB();
        
        // Check if the provided image path exists
        let finalImage = image;
        if (!image || !isValidImagePath(image)) {
            // If image path is missing or invalid, set a default image path
            finalImage = "/images/default.jpg"; // Default image path
        }
        
        await Product.create({ name, image: finalImage, price, category });
        return NextResponse.json({ message: "Product Created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating product:", error);
        return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
    }
}

function isValidImagePath(imagePath) {
    // Assuming the image path is valid if it starts with "/images/"
    return imagePath.startsWith("/images/");
}
 
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}