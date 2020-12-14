import Nav from './Nav';

const Header = () => (
    <div>
        <div className="bar">
            <a href="">Store Title</a>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>
                Search
            </p>
        </div>
        <div className="cart">
            Cart
        </div>
    </div>
)

export default Header;