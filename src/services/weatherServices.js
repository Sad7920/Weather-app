import { DateTime } from "luxon";

const API_KEY = '10936335aaea47645269ae2a6f3440e0';
const API_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(API_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url).then(res => res.json());
}

const formatCurrentWeather = (data) => {
    const {
        coord: { lon, lat },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data;

    const { main: details, icon } = weather[0];

    return { lat, lon, feels_like, temp, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, speed, details, icon };
}

const formatWeatherForecast = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocaleTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        }
    })

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocaleTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon,
        }
    })

    return { timezone, daily, hourly };
}

const getFormmattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedWeatherForecast = await getWeatherData('onecall', {
        lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units,
    }).then(formatWeatherForecast)

    return { ...formattedCurrentWeather, ...formattedWeatherForecast };
}

const formatToLocaleTime = (secs, zone, format = "cccc, dd LLL yyyy' | Locale Time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormmattedWeatherData;

export { formatToLocaleTime, iconUrlFromCode };