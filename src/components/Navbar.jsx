import ThemeToggle from "./ThemeToggle";

function Navbar(){
    return(

        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="toggle-wrapper">
                <ThemeToggle/>
            </div>
            
        </nav>

    )
}

export default Navbar;