"use client";
 
import { useRouter } from "next/navigation";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeProduct= async () => {
        const confirmed = confirm("Are you sure?");
 
        if (confirmed) {
            const res = await fetch(`${apiBaseUrl}/api/products?id=${id}`, {
                method: "DELETE",
            });
 
            if (res.ok) {
                router.refresh();
            }
        }
    };
 
    return (
        <button onClick={removeProduct} className="btn btn-error ml-2">
            Delete
        </button>
    );
}