import { Button } from "./_components/ui/button";
import Header from "./_components/header";
import BookingItem from "./_components/booking-item";
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import  Search from "./_components/search";

//npm run dev

const Home = () => {
  return  (
    <div>
      <Header />

      <div className="p-5 px-5">
        <h2 className="text-xl font-bold">
          Ola Cara
        </h2>
        <p className="capitalize text-sm">{format(new Date(), "EEEE',' dd 'de' MMMM", {locale: ptBR})}</p>
      </div>

        <div className="px-5 mt-3">
          <Search />
        </div>

        <div className="px-5 mt-6">
          <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
          <BookingItem />
        </div>

    </div>

  ) 
}

export default Home;