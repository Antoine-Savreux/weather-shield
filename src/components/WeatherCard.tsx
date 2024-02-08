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
  const date = new Date(parisWeather.location.localtime).toLocaleDateString(
    "fr-FR",
    { month: "long", day: "2-digit" }
  );

  return (
    <Card className="h-auto w-full flex flex-col py-6 px-4 gap-14">
      <CardHeader className="text-center">
        <span className="text-6xl font-light">{date}</span>
        <h1 className="text-8xl font-bold">{parisWeather.location.name}</h1>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <WeatherIcon code={parisWeather.current.condition.code} />
      </CardContent>
      <CardFooter className="justify-center space-x-3">
        <p className="text-4xl font-bold">{`${parisWeather.current.temp_c} °c`}</p>
        <p className="text-2xl font-normal">
          {parisWeather.current.condition.text}
        </p>
      </CardFooter>
    </Card>
  );
}
