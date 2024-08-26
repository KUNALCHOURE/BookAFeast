import './navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="heading">
                    <h1>BookA<span>Feast</span></h1>
                </div>
                <div className="search">
                    <div className="searchbox mr-5 rounded-2xl">
                        <input type="text" placeholder="Search here" />
                        <div className="search-button rounded-r-xl">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
                <div className="user">
                    <button className="btn">Sign in</button>
                    <button className="btn">Log in</button>
                </div>
            </div>
        </>
    );
}
