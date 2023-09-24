import Image from "next/image"
import { Logo } from "../Logo"
import { Cart } from "../CartWidget"
import cart from '@/assets/images/cart-icon.png'

export const NavBar = () => {
    return (
        <nav className="flex items-center justify-between p-4 mt-5">
            <Logo />
            <ul className="flex gap-12 ml-96">
                <a className="hover:motion-safe:animate-bounce hover:text-orange-500" href="#">Sobre</a>
                <a className="hover:motion-safe:animate-bounce hover:text-orange-500" href="#">Menu</a>
                <a className="hover:motion-safe:animate-bounce hover:text-orange-500" href="#">Delivery</a>
                <a className="hover:motion-safe:animate-bounce hover:text-orange-500" href="#">Contato</a>
            </ul>
            <Cart />
        </nav>
    )
}
