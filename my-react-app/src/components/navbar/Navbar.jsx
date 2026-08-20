import "./Navbar.css";

function Navbar(){
    return (
            <nav className="navbar">
                <h1>
                    mywebsite
                </h1>
             <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Login</a>
      </div>
     
    </nav>

    )
}

export default Navbar;