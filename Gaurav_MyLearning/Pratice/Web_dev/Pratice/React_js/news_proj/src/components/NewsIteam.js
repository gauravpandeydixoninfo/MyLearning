import React from 'react';

const NewsIteam= (props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source } =props;
        return (
            <div className="card my-3" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span></h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>BY {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Go somewhere</a>
                </div>

            </div>
        );
}

export default NewsIteam;