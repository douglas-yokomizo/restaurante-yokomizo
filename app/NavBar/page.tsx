'use client'
import Link from "next/link"
import { Fuggles } from "next/font/google"
import { usePathname } from "next/navigation"
import { Cart } from "../components/CartWidget"
import { Logo } from "../components/Logo"

const fuggles = Fuggles({ weight: ['400'], subsets: ['latin'] })
const NavBar = () => {
    const pathname = usePathname();

    return (
        <nav className="lg:flex items-center justify-between px-4 py-6 my-5">
            <Logo />
            <div className={fuggles.className}>

                <ul className="flex gap-12 ml-96 items-center">
                    <Link className="hover:ease-in-out hover:scale-110 text-5xl duration-300 transition hover:text-orange-500" href="/About">Sobre</Link>
                    <Link className="hover:ease-in-out hover:scale-110 text-5xl duration-300 transition hover:text-orange-500" href="/Menu">Menu</Link>
                    <Link className="hover:ease-in-out hover:scale-110 text-5xl duration-300 transition hover:text-orange-500" href="Contact">Contato</Link>
                    {pathname === '/Menu' || pathname === '/ItemDetailContainer/[]' ? <Cart /> : undefined}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar