import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  getWeatherBySearch: Function;
};

export default function SearchInput({ setSearch, getWeatherBySearch }: Props) {
  return (
    <div className="w-full flex items-center space-x-2">
      <Input
        type="text"
        placeholder="Entrer une ville"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="button" onClick={(e) => getWeatherBySearch()}>
        Rechercher
      </Button>
    </div>
  );
}
