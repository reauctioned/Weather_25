

export default function Search({search,setSearch}){
    return(
        <div className="search">
            <input type="text"
            className="city-search" 
            placeholder="ohio"
            name="search"
            value={search}
            onChange={(event)=> setSearch(event.target.value)}/>
            <button className="search-button" onClick={handleSearch} >
                Search
            </button>
        </div>
    )
}