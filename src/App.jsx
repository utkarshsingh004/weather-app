import { useEffect, useState } from 'react';

function App() {
  const date = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  
  const month = months[date.getMonth()];
  const dates = date.getDate();
  const year = date.getFullYear();
  const formatedDate = `${month} ${dates}, ${year}`;

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const API_KEY = 'b24e968e351fe46fdb723ee595f53d9f';

  const fetchWeather = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
      if (lat && lon) {
        url += `&lat=${lat}&lon=${lon}`;
      } else {
        url += `&q=${city}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === "404") {
        setError(true);
        setWeatherData(null);
      } else {
        setError(false);
        setWeatherData(data);
      }
    } catch (error) {
      console.log("Some Unexpected Error::", `${error}`);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      }, () => {
        fetchWeather();
      });
    } else {
      fetchWeather();
    }
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
    setCity('');
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/sun.png";
      case "Rain":
        return "/rain_with_cloud.png";
      case "Mist":
        return "/Tornado.png";
      case "Haze":
        return "/sun.png";
      case "Clear":
        return "/clear.png";
      case "Thunderstorm":
        return "/thunder.png";
      case "Fog":
        return "/fog.png";
      default:
        return null;
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          {weatherData && (
            <>
              <h1 className="container_date">{formatedDate}</h1>
              <div className="weather_data">
                <h2 className="container_city">{weatherData.name}, {weatherData.sys.country}</h2>
                <img src={getWeatherIconUrl(weatherData.weather[0].main)} alt="weather_image" width="180px" />
                <h2 className="container_degree">{(weatherData.main.temp - 273.15).toFixed(2)}°C</h2>
                <h2 className="container_para">{weatherData.weather[0].main}</h2>
                <form className='form' onSubmit={handleSubmit}>
                  <input type="text" className='input' placeholder='Enter City Here....' onChange={handleInputChange} value={city} />
                  <br />
                  <button type='submit'> Search </button>
                </form>
              </div>
            </>
          )}

          {error && (
            <>
               <h1 className="errors"> {"city not found"}{"😔"}</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;