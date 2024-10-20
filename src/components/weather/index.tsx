import { WeatherCard } from "./weather-card";
import { WeatherSummary } from "./weather-summary";

export function Weather() {
    return (
        <div className="w-full h-1/2 flex justify-between">
            <WeatherCard />
            <WeatherSummary />
        </div>
    );
}
