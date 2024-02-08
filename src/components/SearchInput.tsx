import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SearchInput() {
  return (
    <div className="w-full flex items-center space-x-2">
      <Input type="text" placeholder="Entrer une ville" />
      <Button type="submit">Rechercher</Button>
    </div>
  );
}
