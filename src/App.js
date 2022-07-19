import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButton from "./components/TopButton";
import getFormmattedWeatherData from "./services/weatherServices";
import getWeatherData from "./services/weatherServices";

function App() {

  const [query, setQuery] = useState({ q: 'mumbai' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = async () => {
      const data = await getFormmattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      })
    }

    fetchWeather();

  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-600";
    const threshold = units === 'metric' ? 20 : 50;
    if (weather.temp <= threshold) return "from-cyan-500 to-blue-600";
    return "from-[#f7b42c] to-[#fc575e]";
  }



  return (
    <div>
      <div className={`max-w-screen-md py-10 mx-auto my-6 text-white rounded-md shadow-xl px-28 bg-gradient-to-br h-fit shadow-gray-400 ${formatBackground()}`}>
        <TopButton setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="HOURLY FORECAST" items={weather.hourly} />
          <Forecast title="DAILY FORECAST" items={weather.daily} />
        </div>}
      </div>
      <Footer />

    </div>
  );
}

export default App;
