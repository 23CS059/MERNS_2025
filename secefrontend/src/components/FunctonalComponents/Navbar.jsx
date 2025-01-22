const Navbar = () => {
    var styling={textDecoration:"underline",
        color:"blue",
        listStyleType:"none",
        textAlign:"center",
    }
    return(
        <header>
        <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Gallery</li>
        </ul>
        </nav>
        </header>
    )
}
export default Navbar; 