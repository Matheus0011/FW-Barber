"use client"

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input"


const Search = () => {
    return ( 
        <div className="flex items-center gap-2">
            <Input placeholder="Manda oq vc qu aqui" />
          <Button variant="default" size="icon">
            <SearchIcon size={18} />
          </Button>
        </div>
     );
}
 
export default Search;
