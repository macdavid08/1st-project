import logo from './react.png'

function Header () {
    return (
        <header >
            <nav className="header">
                <div className="header-content">
                    <img src={logo}  className='logo'/>
                    <h2>React App</h2>
                </div>
                <p>React Course - Project 1</p>
            </nav>

        </header>
    )
}

export default Header