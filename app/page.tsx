import { Button } from "./_components/ui/button";
import Header from "./_components/header";
import BookingItem from "./_components/booking-item";
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import  Search from "./HOME/_components/search";
import BarbershopItem from "./HOME/_components/barbershop-item";
import { db } from "./_lib/prisma";

//npm run dev

export default async function Home() {

  const barbershops = db.barbershop.findMany({})

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

        <div className="mt-6">
          <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold px-5">Recomendados</h2>

          <div className="px-5 flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {(await barbershops).map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
            ))}
          </div>
        </div>
    </div>

  );
}