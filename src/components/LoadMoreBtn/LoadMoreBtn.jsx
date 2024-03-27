const LoadMoreBtn = ({ loadMore, images }) => {
  return (
    <div>
      {images.length > 0 && <button onClick={loadMore} type="button"></button>}
    </div>
  );
};

export default LoadMoreBtn;
