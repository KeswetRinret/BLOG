import { useEffect, useState } from "react";

const Hero = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=65b45edc0d5d4f90ad82ceb6327218d5"
    )
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.articles);
        console.log("this is what i logging", data);
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
      });
  }, []);

  return (
    <div className="w-full h-screen bg-white p-16">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-center mt-2 mb-8">
        Welcome to Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs && blogs.map((blog, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-gray-100 px-3 py-2 rounded-lg shadow-lg"
          >
            <img 
              src={blog.urlToImage} 
              alt={blog.title} 
              className="w-full h-64 object-cover rounded-lg mb-4" 
            />
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {blog.description || "No description available"}
            </p>
            <button 
              className="bg-blue-400 text-black font-medium py-2 px-4 rounded hover:bg-blue-500 transition duration-200 self-start flex justify-end"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
