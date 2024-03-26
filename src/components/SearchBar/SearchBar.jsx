const SearchBar = ({ onSetSearchQuery, toast }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    if (value.trim() === "") {
      toast("Please enter text to search for images!", {
        icon: "✍🏻",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      return;
    }
    onSetSearchQuery(value.trim());
    e.target.reset();
  };
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
