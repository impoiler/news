import axios from "axios";
import React, { useEffect, useState } from "react";
import Articleloader from "../Loader/Articleloader";
import Article from "./Article";

const Section = () => {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(true);
  const [catag, setcatag] = useState("home");

  const param = new URLSearchParams(window.location.search);
  const getquery = param.get("categories");

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${getquery}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
      )
      .then((res) => {
        setdata(res.data.results);
        setloading(false);
      });

    let headersList = {
      Accept: "*/*",
    };

    let reqOptions = {
      url: "https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=fbBHp9MVNTOhmqGWS98qPDQnUlj52HKd",
      method: "GET",
      headers: headersList,
    };

    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="grid4">
          {loading ? (
            <>
              <Articleloader />
              <Articleloader />
              <Articleloader />
              <Articleloader />
            </>
          ) : data.map == undefined ? null : (
            data.map((e, i) => (
              <Article
                key={i}
                tag={e?.section}
                url={e.url}
                date={e.created_date}
                desc={e.abstract}
                title={e.title}
                img={
                  e == undefined
                    ? null
                    : e.multimedia == null
                    ? "/placeholder-image.png"
                    : e.multimedia[1].url
                }
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Section;
