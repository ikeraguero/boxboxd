import type React from "react"

type NavbarItemProps = {
    children: React.ReactNode
}

export function NavbarItem({children} : NavbarItemProps) {
    return <li className="hover:text-white">{children}</li>
}