import 'bootstrap/dist/css/bootstrap.css'
export default function cards(props) {
    return (
        <>
            
            
            
            <div className="card d-flex" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                {/* <h1 style={{color: "red"}}>Hello Style!</h1> */}
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                {/* </div> */}
            </div>
        
            </>
            )
}

// style="width: 18rem;"