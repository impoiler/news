import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Articleloader from "../Loader/Articleloader";
import Article from "./Article";

const Popular = () => {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(true);
  const [catag, setcatag] = useState("home");

  const param = new URLSearchParams(window.location.search);
  const getquery = param.get("query");

  const getdata = () => {
    axios.get(`https://api.npoint.io/b12078093ab9b6bf1866`).then((res) => {
      console.log(res.data.results);
      setdata(res.data.results);
      setloading(false);
    });
  };

  useEffect(() => {
    getdata();
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
                desc={e?.abstract}
                title={e?.title}
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

export default Popular;
