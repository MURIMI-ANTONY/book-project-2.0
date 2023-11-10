import React from "react"

// Nav component to render the navigation bar of the website.
function Nav(){
    return(
    <nav>
        <div className="container">
            <div className="logo">
                <i className="fa-solid fa-book-open fa-bounce"></i>
            </div>
        
            <div className="links">
                <ul>
                
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Books' Search</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                    
                </ul>
            </div>
        </div>
        <br></br>
    </nav>
    )
}

export default Nav