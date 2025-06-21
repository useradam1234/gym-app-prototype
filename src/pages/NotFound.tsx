import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500 mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-sans">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-gradient-to-r from-gold-400 to-gold-500 hover:scale-105 transform transition-transform duration-300"
        >
          <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
