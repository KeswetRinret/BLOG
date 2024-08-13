import { useEffect, useState } from "react";

const Hero = () => {
  const [articles, setArticles] = useState([]); // To store all articles
  const [selectedArticle, setSelectedArticle] = useState(null); // To store the selected article

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=65b45edc0d5d4f90ad82ceb6327218d5")
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles); // Assuming `data.articles` contains the list of articles
      })
      .catch(error => {
        console.error("Error fetching the news:", error);
      });
  }, []);

  // Function to handle "Read More" click
  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="w-full h-screen bg-white p-16">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-center mt-2 mb-8">
        Welcome to Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={article.urlToImage}
              alt={`Article ${index + 1}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="mb-4">{article.description}</p>
              <button
                onClick={() => handleReadMore(article)}
                className="inline-block bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedArticle && (
        <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
          <img
            src={selectedArticle.urlToImage}
            alt={selectedArticle.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p>{selectedArticle.content}</p>
        </div>
      )}
    </div>
  );
};

export default Hero;
