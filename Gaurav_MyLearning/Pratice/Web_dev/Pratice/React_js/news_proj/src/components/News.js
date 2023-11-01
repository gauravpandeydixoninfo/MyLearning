import React, { useState, useEffect } from 'react';
import NewsIteam from './NewsIteam';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResult] = useState(0);


    const tooglePage = async () => {
        // props.setProgress(10);
        // this.setState({page: this.state.page +1});
        setPage(page + 1);
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`)
            .then(res => res.json())

            .then(setLoading(true))
            .then(json => {
                setArticles(json.articles);
                setLoading(false);
                setTotalResult(json.totalResults)
            });
        // props.setProgress(100);
        console.log(totalResults);
    }
    useEffect(() => {
        tooglePage();
    }, [])
    const fetchMoreData = async () => {

        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`)
        
            .then(res => res.json())
            .then(setLoading(true))
            .then(json => {
                setArticles(articles.concat(json.articles));
                setLoading(false);
                setTotalResult(json.totalResults)
            });
            setPage(page + 1)
    }

    // handleNextClick = async () => {

    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //         await this.setState({
    //             page: this.state.page + 1,
    //         })
    //         this.tooglePage();
    //     }
    // }
    // handlePrevClick = async () => {

    //     await this.setState({
    //         page: this.state.page - 1,
    //     })
    //     this.tooglePage();
    // }

    return (
        <div className='container my-3' style={{ margin: '35px 0px', marginTop: '90px' }}>
            <h2 className='text-center' style={{ margin: "90px 0px 25px" }}> GauravNews - Top Headliens</h2>

            <InfiniteScroll

                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark left" onClick={this.handlePrevClick}>&larr; Left</button>
            <button disable={this.state.page + 1 >Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark right" onClick={this.handleNextClick}>&rarr; Right</button>
        
          </div> */}

                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsIteam title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark left" onClick={this.handlePrevClick}>&larr; Left</button>
            <button disable={this.state.page + 1 >Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark right" onClick={this.handleNextClick}>&rarr; Right</button>
        
          </div> */}
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark left" onClick={this.handlePrevClick}>&larr; Left</button>
            <button disable={this.state.page + 1 >Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark right" onClick={this.handleNextClick}>&rarr; Right</button>
        
          </div> */}

        </div>
    );
}
News.defaultProps = {
    country: 'in',
    pageSize: 8
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}

export default News;