import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { BarbershopService } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProp {
    service: BarbershopService ;
}

const ServiceItem = ({service} : ServiceItemProp) => {
    return (
        <Card>
            <CardContent className="p-3">
                <div className="flex gap-4 items-center">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px] gap-4">
                        <Image src={service.imageUrl} fill style={{ objectFit: "contain"}} alt={service.name}></Image>
                    </div>

                    <div className="flex flex-col w-full">
                        <h2 className="font-bold">
                            {service.name}
                        </h2>
                        <p className="text-sn text-gray-400">
                            {service.description}
                        </p>
                        <div className=" flex items-center justify-between mt-3">
                            <p className="text-primary text-sn font-bold">
                                {Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL",}).format(Number(service.price))}
                            </p>
                            <Button variant="secondary">
                                Reservar
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
     );
}

export default ServiceItem;