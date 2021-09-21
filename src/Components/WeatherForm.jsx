import React, { useEffect, useState } from "react";

const WeatherForm = (props) => {
  const [list, setList] = useState([]);
  // se ejecuta automaticamente cuando el componente se renderiza en pantalla
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Armando-Lopez/whats-the-weather-like/master/src/db/city.list.json"
    )
      // ESTA ES LA API PARA OBTENER NMBRE DE CIUDADES Y SU PAIs CORRESPONDIENTE realizo la promesa y
      .then((resp) => {
        // ahora voy a revisar en consola
        console.log(resp);
        return resp.json();
      })
      // ahora vuelvo y ejecuto .then ahora que recibe a data revisamos en consola y nos muestra un array con el numero de ciudades
      .then((data) => {
        console.log(data);

        const totalCities = data.length;

        //aleatorio
        // math.floor sirve para redondiar a entero hacia el entero anterior y luego math.random que sirve para buscar una ciudad aleatoria de la lista
        const randonCity = Math.floor(Math.random() * totalCities);
        // revisamos en la consola y como podemos ver
        console.log(randonCity);
        setList(data.slice(randonCity, randonCity + 10));
      });
  }, []);
  return (
    <div>
      <form onSubmit={props.getWeather} className="form-group mx-auto col-md-6">
        <div>
          <select name="select" className=" form-select m-2">
            {list.map(({ name, country }) => {
              return (
                <option value={`${name},${country}`} key={name}>
                  {" "}
                  {name} ,{country}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="Your City Name"
            className="form-control m-2"
            autoFocus
          />
        </div>
        <div className="">
          <input
            type="text"
            name="country"
            placeholder="Your Country Name"
            className="form-control m-2"
          />
        </div>
        <div className="d-flex justify-content-center p-4">
          <button className="btn btn-success text-center ">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;
