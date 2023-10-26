import React, { Component } from 'react';
import NewsIteam from './NewsIteam';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';


export default class News extends Component {
  constructor() {
    super();
    console.log("Hellow I am constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults:this.totalResults 
    }
    console.log("value to this.state.totalResults==>"+ this.state.totalResults);
  }
  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a0e740334694b1ea36ba2a1b410c030&pageSize=${this.props.pageSize}`)
    
      .then(res => res.json())
      .then(this.setState({loading: true}))
      .then(json => this.setState({ articles: json.articles, totalResults: json.totalResults, loading: false }));
      console.log("totalResult in componentdidMount="+ this.articles.totalResults)
      
  }
  tooglePage=async ()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a0e740334694b1ea36ba2a1b410c030&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
      .then(res => res.json())
       .then(this.setState({loading:true}))
      .then(json => this.setState({
        articles: json.articles,
        loading: false
       }));


  }
 
  handleNextClick= async ()=>{
    
    if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)))
  {await this.setState({
      page: this.state.page + 1,
    })
    this.tooglePage();}
  }
   handlePrevClick=async ()=>{
    
    await this.setState({
      page: this.state.page - 1,
    })
    this.tooglePage();
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'> GauravNews - Top Headliens</h2>
        {this.state.loading&&<Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4">
              <NewsIteam title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark left" onClick={this.handlePrevClick}>&larr; Left</button>
          <button disable={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark right" onClick={this.handleNextClick}>&rarr; Right</button>
      
        </div>
      </div>
    );
  }
}
News.defaultProps= {
  country: 'in',
  pageSize: 8
}
News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number
}
