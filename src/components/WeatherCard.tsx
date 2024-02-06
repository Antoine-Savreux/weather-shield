"use client";

import { WeatherData } from "@/app/page";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";

export default function WeatherCard({
  parisWeather,
}: {
  parisWeather: WeatherData;
}) {
  const iconUrl = parisWeather.current.condition.icon.startsWith("//")
    ? `http:${parisWeather.current.condition.icon}`
    : parisWeather.current.condition.icon;

  return (
    <Card className="max-w-fit min-w-fit h-full flex flex-col py-6 px-4 justify-around">
      <CardHeader className="text-center">
        <p className="text-xl">{parisWeather.location.localtime}</p>
        <p className="text-3xl">{parisWeather.location.name}</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        {/* <Sun size={240} strokeWidth={1} /> */}
        <Image
          src={iconUrl}
          alt={parisWeather.current.condition.text}
          width={64}
          height={64}
        />
        <div className="flex items-center gap-5">
          <p className="text-xl font-bold">{`${parisWeather.current.temp_c} °c`}</p>
          <p className="text-3xl">{parisWeather.current.condition.text}</p>
        </div>
      </CardContent>
    </Card>
  );
}
