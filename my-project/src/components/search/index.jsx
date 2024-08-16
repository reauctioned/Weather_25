import './styles.css'
export default function Search({ search, setSearch, handleSearch}) {

  return (
    <div className="w-full  flex    justify-around  items-center   mt-[10px]  mb-[30px]">
      <input
        type="text"
        className="input-box"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
