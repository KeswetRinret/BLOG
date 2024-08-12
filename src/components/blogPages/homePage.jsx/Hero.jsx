import { useEffect, useState } from "react";

const Hero = () => {
  // const [name, setName] = useState("Rinret")
  // const [age, setAge] = useState(30)
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=65b45edc0d5d4f90ad82ceb6327218d5")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // setNews(data); 
      })
      .catch(error => {
        console.error("Error fetching the news:", error);
      });
  }, []);

  return (
    <div className="w-full h-screen bg-white p-16">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-center mt-2 mb-8">
        Welcome to Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDjhNLPkUepF4I1fqG7mPlEV83PgHd7Kg7w&s"
            alt="Cart 1"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Cart 1</h2>
            <p className="mb-4">
              This is a brief description of Cart 1. Learn more about its
              features and benefits.
            </p>
            <a
              href="/cart-1"
              className="inline-block bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjD-AztdlShJ_GfIupwd-6CpRUMVW3SThmyZUhWbpUDW77I_zOcFSNYxL5zpmnUGqwEY&usqp=CAU"
            alt="Cart 2"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Cart 2</h2>
            <p className="mb-4">
              This is a brief description of Cart 2. Discover the amazing
              details it offers.
            </p>
            <a
              href="/cart-2"
              className="inline-block bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBx5ZoxaHYiG8VIIaQqW9C3vWcSmcuzcCSxK0dCSfs8AMY5KuVjHAaLWQTes_HQOD5E8&usqp=CAU"
            alt="Cart 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Cart 3</h2>
            <p className="mb-4">
              This is a brief description of Cart 3. Explore the unique aspects
              it has.
            </p>
            <a
              href="/cart-3"
              className="inline-block bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        {/* <p>{name} is {age}</p>
      <button className='border-2 p-1 mt-2 bg-blue-400 rounded-xl' onClick={() => setName(Joyce)}>
        change name 
      </button>
      <button className='border-2 p-1 ml-2 bg-blue-400 rounded-xl' onClick={() => setAge(16)}>
        change age
      </button> */}

{/* <button className='border-2 p-1 ml-2 bg-blue-400 rounded-xl' onClick={() => setNews(10)}>
        news
      </button>  */}
      </div>
    </div>
  );
};

export default Hero;
