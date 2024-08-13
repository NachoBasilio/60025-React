import { CartWidget } from "./components/CartWidget"


export const NavBar = () => {
    return <>
        <nav>
            <ul>
                <li><a href="#">Figuras</a></li>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    </>
}