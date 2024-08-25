import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  article = [
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Maziar Motamedi",
      "title": "Indians jailed for spying on Qatar for Israel: Reports",
      "description": "Eight Indian nationals are accused of passing along information about a stealth-capable submarine, say media reports.",
      "url": "http://www.aljazeera.com/news/2023/5/2/indians-jailed-for-spying-on-qatar-for-israel-reports",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/05/2020-02-28T185927Z_415370755_RC2U9F9PD165_RTRMADP_3_NATO-ITALY-1683030433.jpg?resize=1920%2C1440",
      "publishedAt": "2023-05-02T14:39:33Z",
      "content": "Eight Indian nationals have been imprisoned in Qatar for months for spying on a submarine programme on behalf of Israel and could potentially face the death penalty, according to media reports.\r\nThe … [+2418 chars]"
    },
    {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Emma Hinchliffe, Paige McGlauflin",
      "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
      "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
      "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
      "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
      "publishedAt": "2022-06-01T13:22:34Z",
      "content": "Skip to Content"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English",
      },
      "author": "Al Jazeera",
      "title": "Why are top Indian wrestlers protesting on the streets?",
      "description":
        "Athletes demand action against India’s wrestling body’s chief, whom they accuse of sexually harassing female wrestlers.",
      "url": "http://www.aljazeera.com/news/2023/5/4/why-are-top-indian-wrestlers-protesting-on-the-streets",
      "urlToImage":
        "https://www.aljazeera.com/wp-content/uploads/2023/05/AP23118303054024-1683169005.jpg?resize=1920%2C1440",
      "publishedAt": "2023-05-04T04:08:43Z",
      "content":
        "Top Indian wrestlers have been protesting on the streets of New Delhi for the last 10 days over the lack of action against the head of the countrys wrestling federation, Brij Bhushan Sharan Singh, wh… [+7342 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Daily Akhbaar Breaking News</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0,88)}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
