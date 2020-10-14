import React from "react";
import {Link} from "react-router-dom";
import morning from "../assets/morning.png";
import day from "../assets/day.png";
import evening from "../assets/evening.png";
import night from "../assets/night.png";

function DayInDetail(props) {
    const {temp, date, weather} = props.location;
    if(!temp || !date || !weather) { window.location.assign("/") }

    return (
        <div className="day_in_detail d-flex flex-column align-items-center rounded-sm p-3">
            <h2>{date}</h2>
            <span>Ночь: {temp.night}°<img className="icon" src={night}/></span>
            <span>Утро: {temp.morn}°<img className="icon" src={morning}/></span>
            <span>День: {temp.day}°<img className="icon" src={day}/></span>
            <span>Вечер: {temp.eve}°<img className="icon" src={evening}/></span>
            <img src={`http://openweathermap.org/img/wn/${weather}@2x.png`}/>
            <Link to="/" className="btn btn-primary m-2">Назад</Link>
        </div>
    );
}

export default React.memo(DayInDetail);