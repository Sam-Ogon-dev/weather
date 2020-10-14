import React from "react";
import {Link} from "react-router-dom";


function Forecast({dates}) {

    return (
        <>
            <h1>Погода в Ростове-на-Дону:</h1>
            <div className="forecast d-flex flex-row rounded-sm shadow-sm">
                {dates.map(({date, averageTemp, weather, temp}, index) =>
                    <React.Fragment key={index}>
                        <Link to={{pathname:`/${index}`, temp, date, weather}}>
                            <div className="day d-flex flex-column align-items-center p-3">
                                <span className="date">{date}</span>
                                <div
                                    className="weather d-flex flex-row align-items-center justify-content-around w-100">
                                    <span>{averageTemp}°</span>
                                    <img className="icon" src={`http://openweathermap.org/img/wn/${weather}@2x.png`}/>
                                </div>
                            </div>
                        </Link>
                        {index !== dates.length - 1 ? <hr className="separator"/> : ""}
                    </React.Fragment>
                )}
            </div>
        </>
    );
}

export default React.memo(Forecast);