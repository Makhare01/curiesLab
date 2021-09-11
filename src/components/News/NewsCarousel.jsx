import React, { useState, useEffect } from "react";
import News from "./News";

// Axios
import axios from "axios";

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/`,
});

const NewsCarousel = () => {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    await api.get("/api/news").then((res) => {
      setNews(res.data);
    });
  }, []);

  let tmp = [1, 2, 3];

  return (
    <>
      {console.log("news = ", news)}
      {news &&
        news.map((item, index) => {
          console.log(item.title);
          return (
            <div className="slide" key={index}>
              <News title={item.title} description={item.description} />
            </div>
          );
        })}
    </>
  );
};

export default NewsCarousel;
