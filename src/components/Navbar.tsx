import { NavbarItem } from "@/shared/ui/NavbarItem"
import { SearchInput } from "@/shared/ui/SearchInput";

const navbarItems = [
    { name: "Sign In", redirect: "auth" },
    { name: "Create account", redirect: "auth" },
    { name: "Races", redirect: "races" },
    { name: "Lists", redirect: "lists" },
    { name: "Members", redirect: "members"},
    { name: "Achievements", redirect: "achievements"}
  ] as const;
  

export function Navbar() {
  return (
    <nav className="relative w-full flex justify-center">
      <div className="flex w-full space-x-3 justify-between bg-transparent flex absolute py-4 z-10 text-zinc-200">
        <div>LOGO</div>
        <ul className="flex gap-8 uppercase font-semibold cursor-pointer place-items-center">
            {navbarItems.map((current)=><NavbarItem redirect={current.redirect}>{current.name}</NavbarItem>)}
            <SearchInput />
        </ul>
      </div>
    </nav>
  );
}
