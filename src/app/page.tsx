"use client";

import PageContainer from "@/components/PageContainer";
import WeatherCard from "@/components/WeatherCard";
import SearchInput from "@/components/SearchInput";
import { SetStateAction, useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

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

  const [locationWeather, setLocationWeather] = useState<WeatherData>({
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

  const [search, setSearch] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  const getWeather = async () => {
    const res = await fetch(
      `${baseUrl}/current.json?key=${apiKey}&q=lyon&aqi=no&lang=fr`
    );
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const data = await res.json();
    setLocationWeather(data);
    setTimeout(() => setIsFetching(false), 1200);
  };

  const getWeatherBySearch = async () => {
    setIsFetching(true);
    const res = await fetch(
      `${baseUrl}/current.json?key=${apiKey}&q=${search}&aqi=no&lang=fr`
    );

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const data = await res.json();
    setLocationWeather(data);
    setTimeout(() => setIsFetching(false), 1200);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <PageContainer>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchInput
            setSearch={setSearch}
            getWeatherBySearch={getWeatherBySearch}
          />
          <WeatherCard locationWeather={locationWeather} />
        </>
      )}
    </PageContainer>
  );
}
