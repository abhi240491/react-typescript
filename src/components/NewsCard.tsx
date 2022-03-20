import React from 'react'
import {NewsFormat} from './NewsTypes';
const  NewsCard:React.FC<NewsFormat> = ({source,
  author,
title,
description,
url,
urlToImage,
publishedAt,
content}) =>{
  return (
    <div>
            <img
              alt={title}
              src={urlToImage ? urlToImage : "news url"}
              className="news-image"
            />
            <div className="news-text">
              <div>
                <span className="news-title">{title}</span>
                <br />
                <span className="author">
                  {" "}
                  by {author ? author : "unknown"} /{" "}
                </span>
              </div>
              <div className="news-content">
                <div className="description">{description}</div>
                <span className="readmore">
                  read more at{" "}
                  <a href={url} target="__blank" className="source">
                    <b>{source.name}</b>
                  </a>
                </span>
              </div>
            </div>
          </div>
  )
}

export default NewsCard