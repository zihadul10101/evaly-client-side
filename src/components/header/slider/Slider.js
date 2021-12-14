import React from 'react';
import { Link } from 'react-router-dom';
import evaly1 from '../../../../../fronted/src/assets/evaly-2.png';
import evaly2 from '../../../../../fronted/src/assets/evaly-4.png';
import evaly3 from '../../../../../fronted/src/assets/evaly-7.png';
const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide panda-slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner catagrue">
            <div className="carousel-item active">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-md-7">
                        <h1>
                        Faxon Canvas Low-Top Sneaker 
                        </h1>
                        <p>
                        Faxon Canvas Low-Top Sneaker Inspired Slim Ankle Leg Jean
                        </p>
                        <h3>$1200</h3>
                        <Link to="/login">
                        <button className="btn btn-warning">Buy Now</button>
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <img src={evaly1} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-md-7">
                        <h1>   Faxon Canvas Low-Top Sneake</h1>
                        <p> This is the best Faxon Canvas Low-Top Sneake 
                        </p>
                        <h3> $420</h3>
                        <Link to="/login">

                        <button className="btn btn-warning">Buy Now</button>
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <img src={evaly2} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-md-7">
                        <h1> X-Box for your living room</h1>
                        <p>This is the best x-box in the world for people who just want to waste time in front of
                            fake sports.</p>
                        <h3>$600</h3>
                        <Link to="/login">
                        <button className="btn btn-warning">Buy Now</button>
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <img src={evaly3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </a>
    </div>
    );
};

export default Slider;