"use client";

import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma"
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, PhoneCallIcon, StarsIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface BarbershopDetailsProps {
    barbershop: Barbershop;
}

const BarbershopInfo = ({barbershop} : BarbershopDetailsProps ) => {
    const router = useRouter();

    const backClick = () => {
        router.back();
    };

    return (  
    
    <div>
        <div className="h-[250px] w-full relative">
            <Button onClick={backClick} size="icon" variant="outline" className="z-50 absolute top-4 left-4">
                <ChevronLeftIcon/>
            </Button>

            <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
                <MenuIcon/>
            </Button>

            <Image src={barbershop.imageUrl} fill alt={barbershop.name} className="opacity-85" style={{objectFit: "cover"}} />
        
        </div>

        <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
            <h1 className="text-xl font-bold ">{barbershop.name}</h1>

            <div className="flex items-center gap-2 mt-2">
                <MapPinIcon className="text-primary" size={16}/>
                <p className="text-sm">{barbershop.address}</p>
            </div>

            <div className="flex items-center gap-2">
                <StarsIcon className="text-primary" size={16}/>
                <p className="text-sm">5,0 (700 avaliaçoes)</p>
            </div>

            <div className="flex items-center gap-2">
                <PhoneCallIcon className="text-primary" size={16}/>
                <p className="text-sm">{barbershop.phones}</p>
            </div>

        </div>
    </div> );
}
 
export default BarbershopInfo;