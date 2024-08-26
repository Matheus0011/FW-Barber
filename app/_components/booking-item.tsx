import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";


const BookingItem = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2">
                    <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
                        Confirmado
                    </Badge>
                    <h2>
                        Nome do corte
                    </h2>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <h3 className="text-sm">
                            Barbearia zezinho
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-4">
                    <p className="text-sm">Agosto</p>
                    <p className="text 2x1">22</p>
                    <p className="text-sm">21:12</p>

                </div>
            </CardContent>
        </Card>
     );
}
 
export default BookingItem;