import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../Loader/Spinner";
import ArticleSearch from "./ArticleSearch";

const Search = () => {
  const [data, setdata] = useState({});
  const [resultcount, setresultcount] = useState("");
  const [loading, setloading] = useState(true);

  const param = new URLSearchParams(window.location.search);
  const q = param.get("q");

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${q}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setresultcount(res.data.num_results);
        setdata(res.data);
        setloading(false);
      });
  }, []);

  console.log(resultcount);

  return (
    <>
      <div className="container">
        <div className="grid4 search">
          {loading ? (
            <>
              <Spinner />
            </>
          ) : data == undefined ? null : resultcount === 0 ? (
        <div className="noarticlefound">
        <h2>No such articles found on this Topic</h2>
        </div>
          ) : (
            data.results.map((e, i) => (
              <ArticleSearch
                key={i}
                tag={e?.section}
                url={e.link.url}
                date={e.publication_date}
                title={e.headline}
                img={
                  e == undefined
                    ? null
                    : e.multimedia == null
                    ? "/placeholder-image.png"
                    : e.multimedia.src
                }
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
