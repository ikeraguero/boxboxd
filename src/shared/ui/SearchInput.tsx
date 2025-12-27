import { InputGroup, InputGroupAddon, InputGroupInput } from "@/lib/ui/input-group";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <InputGroup className="bg-[#b3b3b3] focus-within:bg-white cursor-pointer transition-all 2s">
      <InputGroupInput data-testid="search-input-group" />
      <InputGroupAddon align="inline-end">
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}
