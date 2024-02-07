"use client";

import PageContainer from "@/components/PageContainer";
import WeatherCard from "@/components/WeatherCard";
import SearchInput from "@/components/SearchInput";
import { useEffect, useState } from "react";

export type WeatherData = {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    temp_c: number;
  };
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_WEATHERAPIKEY;

  const [parisWeather, setParisWeather] = useState<WeatherData>({
    location: {
      name: "",
      localtime: "",
    },
    current: {
      condition: {
        text: "",
        icon: "",
        code: 0,
      },
      temp_c: 0,
    },
  });

  const getParisWeather = async () => {
    const res = await fetch(
      `${baseUrl}/current.json?key=${apiKey}&q=lyon&aqi=no&lang=fr`
    );
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const data = await res.json();
    setParisWeather(data);
  };

  useEffect(() => {
    getParisWeather();
  }, []);

  return (
    <PageContainer>
      <WeatherCard parisWeather={parisWeather} />
      <SearchInput />
    </PageContainer>
  );
}
