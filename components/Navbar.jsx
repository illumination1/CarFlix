import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar" style={{ backgroundColor: "#515253", padding: "10px 20px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <span className="text-white text-5xl font-bold cursor-pointer hover:text-gray-30000">Car Flix</span>
        </Link>

      </div>
    </div>
  );
}
