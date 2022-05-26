import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

function Weather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const params = { key: "0216432ecaa44f148f8164747213008", q: "auto:ip" };
    const fetchWeather = () => {
        console.log("GRABBING WEATHER INFO - STARTED");
        axios
          .get("http://api.weatherapi.com/v1/current.json", { params })
          .then((res) => {
            console.log(res);
            setWeather({
                currentTemp: res.data.current.temp_f,
                feelsLikeTemp: res.data.current.feelslike_f,
                currentConditionText: res.data.current.condition.text
            });
            console.log("GRABBING WEATHER INFO - COMPLETE");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Row className="text-center d-block">Temperature is {weather.currentTemp}</Row>
      <Row className="text-center d-block">Feels like {weather.feelsLikeTemp}</Row>
      <Row className="text-center d-block"> It's currently {weather.currentConditionText}</Row>
    </Container>
  );
}

export default Weather;
