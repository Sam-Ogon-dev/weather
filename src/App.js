import React from 'react';
import "./Styles/Main.scss";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DayInDetail from "./components/DayInDetail";

function App() {
    const [position, setPosition] = React.useState(0);
    const [dates, setDates] = React.useState([]);

    React.useEffect(() => {
        let datesArray = [];
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=47.23571&units=metric&lon=39.70151&appid=76f164a64422b6f11c572d4665026566")
            .then(r => r.json())
            .then(({daily}) => {
                for (let i = 0; i <= 3; i++) {
                    datesArray.push({
                        date: new Date(daily[i].dt * 1000).toLocaleDateString("ru", {
                            day: "numeric",
                            month: "long"
                        }),
                        temp: daily[i].temp,
                        averageTemp: ((daily[i].temp.day + daily[i].temp.night + daily[i].temp.eve + daily[i].temp.morn) / 4).toFixed(1),
                        weather: daily[i].weather[0].icon
                    });
                }
                setDates(datesArray);
            })
    }, []);

    window.onmousemove = e => {
        const bg = document.getElementById("root");
        if (e.movementX > 0) {
            bg.style.backgroundPosition = position.toString() + "px 0px"
            setPosition(state => state - 0.4);
        }

        if (e.movementX < 0) {
            bg.style.backgroundPosition = position.toString() + "px 0px"
            setPosition(state => state + 0.4);
        }
    }


    return (
        <BrowserRouter>
            <div className="App container-fluid d-flex flex-column justify-content-center align-items-center">

                <Switch>
                    <Route path="/:id" component={DayInDetail}/>

                    <Route exact path="/">
                        {!dates.length ? <Loader /> : <Forecast dates={dates}/>}
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
