"use client";

import { WeatherData } from "@/app/page";
import WeatherIcon from "./WeatherIcon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function WeatherCard({
  parisWeather,
}: {
  parisWeather: WeatherData;
}) {
  return (
    <Card className="max-w-fit min-w-fit h-full flex flex-col py-6 px-4 justify-around">
      <CardHeader className="text-center">
        <p className="text-xl">{parisWeather.location.localtime}</p>
        <p className="text-3xl">{parisWeather.location.name}</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <WeatherIcon code={parisWeather.current.condition.code} />
        <div className="flex items-center gap-5">
          <p className="text-xl font-bold">{`${parisWeather.current.temp_c} °c`}</p>
          <p className="text-3xl">{parisWeather.current.condition.text}</p>
        </div>
      </CardContent>
    </Card>
  );
}
