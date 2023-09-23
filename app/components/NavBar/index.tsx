import Image from "next/image"
import { Logo } from "../Logo"
import cart from '../../../assets/images/cart-icon.png'

export const NavBar = () => {
    return (
        <nav className="flex items-center justify-between p-4 mt-5 border rounded-[32px]">
            <Logo />
            <ul className="flex gap-12 ml-96">
                <a className="text-amber-100 hover:motion-safe:animate-bounce" href="#">Sobre</a>
                <a className="text-amber-100 hover:motion-safe:animate-bounce" href="#">Menu</a>
                <a className="text-amber-100 hover:motion-safe:animate-bounce" href="#">Delivery</a>
                <a className="text-amber-100 hover:motion-safe:animate-bounce" href="#">Contato</a>
            </ul>
            <Image src={cart} alt="cart icon" className="w-12" />
        </nav>
    )
}
