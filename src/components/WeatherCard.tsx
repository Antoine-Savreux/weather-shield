import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Sun } from "lucide-react";

export default function WeatherCard() {
  return (
    <Card className="max-w-fit min-w-fit h-full flex flex-col py-6 px-4 justify-around">
      <CardHeader className="text-center">
        <p className="text-xl">Lundi 5 Février</p>
        <p className="text-3xl">Paris</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <Sun size={240} strokeWidth={1} />
        <div className="flex items-center gap-5">
          <p className="text-xl font-bold">23°c</p>
          <p className="text-3xl">Ensoleillé</p>
        </div>
      </CardContent>
    </Card>
  );
}
