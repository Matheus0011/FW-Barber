import { Button } from "./_components/ui/button";
import Header from "./_components/header";
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return  (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Ola Cara
        </h2>
        <p>Segunda Feira</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Manda oq vc quer aqui" />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        
        <div className="relative h-[150px] w-full">
          <Image alt="Venha" src="/Banner.png" fill className="object-conver" />
        </div>
        
      </div>
    </div>

  ) 
}

export default Home;