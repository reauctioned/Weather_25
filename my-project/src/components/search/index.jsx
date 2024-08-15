import './styles.css'
export default function Search({ search, setSearch, handleSearch}) {

  return (
    <div className="w-full  flex    justify-around  items-center   mt-[10px]  mb-[30px]">
      <input
        type="text"
        className="w-9/12  h-45px  border-solid   border  rounded-lg  text-base text-[#555555]  outline-none  py-[2px] px-[15px]"
        placeholder="Austin"
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
