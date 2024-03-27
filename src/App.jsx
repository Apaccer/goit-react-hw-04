import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImagesByQuery } from "./apiServices/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [btnLoadMore, setbtnLoadMore] = useState(false);
  useEffect(() => {
    if (query.length === 0) return;

    const fetchImages = async () => {
      try {
        const data = await getImagesByQuery(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setbtnLoadMore(data.total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
    setIsLoading(true);
    setError(false);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} toast={toast} />
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {error && <ErrorMessage />}
      {btnLoadMore && <LoadMoreBtn loadMore={loadMore} images={images} />}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
