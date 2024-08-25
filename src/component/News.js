import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,

    };
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2778d67db08c439fafc682546299ae1e"
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState
    ({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }

   handlePrev=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2778d67db08c439fafc682546299ae1e&page=${this.state.page-1}`
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles
    })
  }

   handleNext=async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

    }else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2778d67db08c439fafc682546299ae1e&page=${this.state.page+1}&pageSize=20`
      let data=await fetch(url)
      let parsedData=await data.json()
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
      })
    }
    
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
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>Prev &larr</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr</button>
        </div>
      </div>
    );
  }
}
