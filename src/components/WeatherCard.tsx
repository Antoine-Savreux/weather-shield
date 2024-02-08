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
  locationWeather,
}: {
  locationWeather: WeatherData;
}) {
  const date = new Date(locationWeather.location.localtime).toLocaleDateString(
    "fr-FR",
    { month: "long", day: "2-digit" }
  );

  return (
    <Card className="h-auto w-full flex flex-col py-6 px-4 gap-10">
      <CardHeader className="text-center gap-4">
        <span className="text-4xl font-light">{date}</span>
        <h1 className="text-6xl font-bold text-wrap">
          {locationWeather.location.name}
        </h1>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <WeatherIcon code={locationWeather.current.condition.code} />
      </CardContent>
      <CardFooter className="justify-center space-x-3">
        <p className="text-4xl font-bold">{`${locationWeather.current.temp_c} °c`}</p>
        <p className="text-2xl font-normal">
          {locationWeather.current.condition.text}
        </p>
      </CardFooter>
    </Card>
  );
}
