import React from "react"

//Search component from where user is to search any book ar author
function Search({books,setQuery, query,handleSearch}){
    return(
        <div className="grid-container" style={{backgroundColor:"#A9A9A9"}}>
            <div className="grid-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgQPfTuReaEMBQdJG-vxIKdQxj-c0uYUlBA&usqp=CAU" alt="agile-reader"></img>
            </div>
            <div className="form-wrap">
                <h1>Books' Search</h1>
                <p>Search for any book or author in the input bar below.</p>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <br></br>
                <button onClick={handleSearch}>Search</button>

                
                
                
            </div>
            <br></br>
        </div>
    )
}

export default Search