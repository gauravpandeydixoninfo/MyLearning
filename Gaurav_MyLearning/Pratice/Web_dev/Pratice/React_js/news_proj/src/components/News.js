import React, { Component } from 'react';
import NewsIteam from './NewsIteam';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {
    articles = [{
        "source": {
            "id": null,
            "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "2024 iPad Pro to Use LCD Panel Instead of OLED or Mini-LED, Claims Sketchy Report",
        "description": "Apple's next-generation 12.9-inch iPad Pro will revert to an LCD display instead of adopting OLED panel technology, claims a controversial new report coming out of Asia.\n\n\n\n\n\nIt has been widely reported that Apple's next ‌iPad Pro‌ models will be the first Ap…",
        "url": "https://www.macrumors.com/2023/10/20/2024-ipad-pro-lcd-panel-not-oled-or-mini-led/",
        "urlToImage": "https://images.macrumors.com/t/Y64VSIYOTQARD3TFVrlKnxIGRe4=/2500x/article-new/2023/08/ipad-pro-red.jpg",
        "publishedAt": "2023-10-20T09:03:02Z",
        "content": "Apple's next-generation 12.9-inch iPad Pro will revert to an LCD display instead of adopting OLED panel technology, claims a controversial new report coming out of Asia.\r\nIt has been widely reported … [+2575 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NPR"
        },
        "author": "Mara Hoplamazian",
        "title": "A bad apple season has some U.S. fruit growers planning for life in a warmer world",
        "description": "Many New Hampshire apple orchards are barren this year after a late-spring freeze killed apple blossoms. Fruit growers are realizing climate change could mean different crops in the future.",
        "url": "https://www.npr.org/2023/10/20/1207202139/a-bad-apple-season-has-some-u-s-fruit-growers-planning-for-life-in-a-warmer-worl",
        "urlToImage": "https://media.npr.org/assets/img/2023/10/19/img_3466_wide-9b00042b669a75ebf086af5d9f522640a3c50bef-s1400-c100.jpg",
        "publishedAt": "2023-10-20T09:30:29Z",
        "content": "Chuck and Diane Southers' apple orchard stretches over about 30 hilly acres in Concord, New Hampshire. A hard freeze in May killed most of their apple crop.\r\nMara Hoplamazian/NHPR\r\nCONCORD, N.H. Chuc… [+5438 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Roberto Méndez",
        "title": "Las mejores ofertas de la semana que no deberías dejar escapar en smart TVs, teléfonos, portátiles, consolas y más: Cazando Gangas",
        "description": "Con la llegada de un nuevo viernes, es el momento perfecto para repasar algunas de las ofertas más tentadoras para este fin de semana, las cuales nos ayudarán a llenar nuestros bolsillos de ahorros. Y es que, si estabas con ganas de renovar tu viejo televisor…",
        "url": "https://www.xataka.com/seleccion/mejores-ofertas-semana-que-no-deberias-dejar-escapar-smart-tvs-telefonos-portatiles-consolas-cazando-gangas",
        "urlToImage": "https://i.blogs.es/3ccf4b/cazando-gangas-octubre-20/840_560.jpeg",
        "publishedAt": "2023-10-20T08:40:23Z",
        "content": "Con la llegada de un nuevo viernes, es el momento perfecto para repasar algunas de las ofertas más tentadoras para este fin de semana, las cuales nos ayudarán a llenar nuestros bolsillos de ahorros. … [+10067 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "Amazon y X están tranquilas frente a la normativa de Europa. No les tocará pagar nada",
        "description": "La Unión Europea ya ha empezado a aplicar la nueva Ley de Servicios Digitales (DSA) y una empresa como X ya se ha convertido en firme candidata a ser la primera en ser multada, por su falta de medidas para luchar contra la desinformación en relación a Israel …",
        "url": "https://www.xataka.com/legislacion-y-derechos/amazon-x-estan-tranquilas-frente-a-normativa-europa-no-les-tocara-pagar-nada",
        "urlToImage": "https://i.blogs.es/0798bc/musk-europa-jassy/840_560.jpeg",
        "publishedAt": "2023-10-20T07:57:59Z",
        "content": "La Unión Europea ya ha empezado a aplicar la nueva Ley de Servicios Digitales (DSA) y una empresa como X ya se ha convertido en firme candidata a ser la primera en ser multada, por su falta de medida… [+2260 chars]"
    }

    ]
    constructor() {
        super();
        console.log("Hellow I am constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        console.log("value to this.state.totalResults==>" + this.state.totalResults);
    }
    componentDidMount() {
        // fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a0e740334694b1ea36ba2a1b410c030&pageSize=${this.props.pageSize}`)

        //     .then(res => res.json())
        //     .then(this.setState({ loading: true }))
        //     .then(json => this.setState({ articles: json.articles, totalResults: json.totalResults, loading: false }));
        // console.log("totalResult in componentdidMount=" + this.articles.totalResults )
        // console.log("totalResult in componentdidMount=" + this.state.totalResults )
        // console.log("this.props.category ==>" +this.props.category)
        this.tooglePage();

    }
    tooglePage = async () => {
        this.props.setProgress(10);
        this.setState({page: this.state.page +1});
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`)
            .then(res => res.json())
            
            .then(this.setState({ loading: true }))
        
            .then(json => this.setState({
                articles: json.articles,
                loading: false,
                totalResults: json.totalResults
            }));
            this.props.setProgress(100);
            console.log(this.state.totalResults);


    }
    fetchMoreData = async() =>{
         this.setState({page: this.state.page +1});
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
            .then(res => res.json())
            .then(this.setState({ loading: true }))
            .then(json => this.setState({
                articles: this.state.articles.concat(json.articles),
                loading: false,
                totalResults: json.totalResults
            }));
        
    }

    handleNextClick = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            await this.setState({
                page: this.state.page + 1,
            })
            this.tooglePage();
        }
    }
    handlePrevClick = async () => {

        await this.setState({
            page: this.state.page - 1,
        })
        this.tooglePage();
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'> GauravNews - Top Headliens</h2>
                <InfiniteScroll
                  
                   dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spinner/>}>
{/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark left" onClick={this.handlePrevClick}>&larr; Left</button>
            <button disable={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark right" onClick={this.handleNextClick}>&rarr; Right</button>
        
          </div> */}
                    
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsIteam title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark left" onClick={this.handlePrevClick}>&larr; Left</button>
            <button disable={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark right" onClick={this.handleNextClick}>&rarr; Right</button>
        
          </div> */}
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark left" onClick={this.handlePrevClick}>&larr; Left</button>
            <button disable={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark right" onClick={this.handleNextClick}>&rarr; Right</button>
        
          </div> */}
            
            </div>
        );
    }
}
News.defaultProps = {
    country: 'in',
    pageSize: 8
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}