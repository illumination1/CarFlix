import Link from 'next/link';
import Head from 'next/head'; 

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-500 text-white">
      {/* {"/favicon/logo.jpg"} */}
      <Head>
        <link rel="icon" href="/favicon/logo.jpg" /> {/* Adjust the href */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/logo.jpg" />
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Car Emporium</h1>
        <p className="text-lg mb-8">Explore a variety of cars with us!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Car Images */}
          <div className="car-card">
            <img src="/images/10.jpg" alt="Car 1" className="rounded-lg h-64 w-full object-cover" />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Luxury Sedan</h2>
              <p className="text-gray-300">Experience unparalleled comfort and style.</p>
            </div>
          </div>
          <div className="car-card">
            <img src="/images/9.jpg" alt="Car 2" className="rounded-lg h-64 w-full object-cover" />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Sports Car</h2>
              <p className="text-gray-300">Feel the thrill of high-speed performance.</p>
            </div>
          </div>
          <div className="car-card">
            <img src="/images/4.jpg" alt="Car 3" className="rounded-lg h-64 w-full object-cover" />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">SUV Adventure</h2>
              <p className="text-gray-300">Conquer any terrain with confidence.</p>
            </div>
          </div>
        </div>
        <Link href="/products">
          <button className="btn btn-primary mt-8">Browse All Cars</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;