import PageContainer from "@/components/PageContainer";
import WeatherCard from "@/components/WeatherCard";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <PageContainer>
      <WeatherCard />
      <SearchInput />
    </PageContainer>
  );
}
