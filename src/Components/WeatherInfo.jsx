import React from "react";
import Icon from "./Icon";

const WeatherInfo = (props) => {
  console.log(props);
  return (
    <div className="text-center ">
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}

      {props.temperature ? (
        <div className="card bg-success text-white col-md-4 mx-auto animated fadeInUp">
          {props.city && props.country && (
            <div className="mt-5">
              <h1>
                {props.city}, {props.country}
              </h1>
            </div>
          )}
          <div className="text-center mb-3">
            <Icon icon={props.icon} />
          </div>
          {props.temperature && (
            <h1>
              {props.temperature} ℃
              <br />
              {props.description}
            </h1>
          )}
          {props.humidity && <h3>Humedad: {props.humidity}%</h3>}
        </div>
      ) : (
        <div className="card card-body mt-2 text-center"></div>
      )}
    </div>
  );
};

export default WeatherInfo;
