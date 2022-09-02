import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import watch from "../img/watch.svg";

const Article = (props) => {
  let date = props.date;
  let formateddate = new Date(date).toDateString();

  return (
    <>
      <article className="news_single">
        <div className="newsimgcontainer">
          <a href={props.url}>
            <LazyLoadImage
              effect="blur"
              className="newsimg"
              src={props.img}
              alt=""
            />
          </a>
        </div>
        <div className="datetime">
          <div className="flex">
            <img src={watch} alt="" />
            {formateddate}
          </div>
          <div className="tag">{props.tag}</div>
        </div>
        <h2 className="title">
          <a href={props.url}>{props.title}</a>
        </h2>
        <p className="desc">{props.desc}</p>
        <a className="readmorebtn" href={props.url}>
          Read more
        </a>
      </article>
    </>
  );
};

export default Article;
