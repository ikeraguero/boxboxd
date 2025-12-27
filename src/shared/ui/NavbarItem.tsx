import type React from "react"

type NavbarItemProps = {
    children: React.ReactNode,
    redirect: String
}

export function NavbarItem({children, redirect} : NavbarItemProps) {
    return <li className="hover:text-white">
        <a href={`/${redirect}`}>{children}</a>
    </li>
}