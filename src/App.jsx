import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImagesByQuery } from "./apiServices/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (query.length === 0) return;
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const data = await getImagesByQuery(query, page);
        setImages(data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };
  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} toast={toast} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
