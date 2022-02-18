import React, { useState, useEffect } from "react";
import axios from "axios";

// Global State
//asdf
//asdf

// Components
import Nasa from "./components/Nasa";
import DatePicker from "./components/DatePicker";

// Utils
//asdf
//asdf

// Local
import "./App.css";

const API_KEY = "DEMO_KEY";

function App() {
  const [day, setDay] = useState(14);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2012-03-${day}`
      )
      .then((res) => {
        console.log(res);

        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);

        setLoading(false);
      });
  }, [day]);

  return (
    <div className="App">
      <DatePicker day={day} daySetter={setDay} />

      {loading ? <div>loading</div> : <Nasa photo={data} />}
    </div>
  );
}

export default App;
