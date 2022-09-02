import axios from "axios";
import React, { useEffect, useState } from "react";
import Articleloader from "../Loader/Articleloader";
import Article from "./Article";

const Home = () => {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
      )
      .then((res) => {
        setdata(res.data.results);
        setloading(false);
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

export default Home;
