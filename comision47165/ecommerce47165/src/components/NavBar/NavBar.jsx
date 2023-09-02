import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>LyC</h1>
            <div>
                <button>Cosmética</button>
                <button>Perfumería</button>
                <button>Capilares</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar