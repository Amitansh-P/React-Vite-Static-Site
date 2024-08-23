import reactPic from './assets/react.svg'

function Navbar() {
    return (
        <nav>
            <img className="nav--icon" src={reactPic} alt="Profile Picture" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React - Project 1</h4>
        </nav>
    )
}

export default Navbar