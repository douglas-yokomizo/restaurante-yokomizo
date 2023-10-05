import { Logo } from "../Logo"
import { Cart } from "../CartWidget"

export const NavBar = () => {
    return (
        <nav className="lg:flex items-center justify-between px-4 py-6 my-5 border-b-2 border-b-blue-950">
            <Logo />
            <ul className="flex gap-12 ml-96">
                <a className="hover:ease-in-out hover:scale-110 duration-300 transition hover:text-orange-500" href="#">Sobre</a>
                <a className="hover:ease-in-out hover:scale-110 duration-300 transition hover:text-orange-500" href="#">Menu</a>
                <a className="hover:ease-in-out hover:scale-110 duration-300 transition hover:text-orange-500" href="#">Delivery</a>
                <a className="hover:ease-in-out hover:scale-110 duration-300 transition hover:text-orange-500" href="#">Contato</a>
            </ul>
            <Cart />
        </nav>
    )
}
