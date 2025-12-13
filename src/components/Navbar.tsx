import { NavbarItem } from "@/shared/ui/NavbarItem"

const navbarItems = [
    { name: "Sign In" },
    { name: "Create account" },
    { name: "Races" },
    { name: "Lists" },
    { name: "Members" },
    { name: "Achievements" }
  ] as const;
  

export function Navbar() {
  return (
    <nav className="relative w-full flex justify-center">
      <div className="flex w-full space-x-3 justify-between bg-transparent flex absolute py-4 z-10 text-zinc-200">
        <div>LOGO</div>
        <ul className="flex gap-8 uppercase font-semibold cursor-pointer">
            {navbarItems.map((current)=><NavbarItem>{current.name}</NavbarItem>)}
        </ul>
      </div>
    </nav>
  );
}
