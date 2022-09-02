import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Articleloader = () => {
  return (
    <article className="news_single">
      <Skeleton height={200} />
      <Skeleton width={100} className="mt" />
      <Skeleton height={30} className="mt" />
      <Skeleton className="mt" />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </article>
  );
};

export default Articleloader;
