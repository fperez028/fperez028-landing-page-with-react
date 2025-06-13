import React from 'react';

export const Card = ({ imageUrl, imageAltText, title, description, buttonText }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={imageUrl} alt={imageAltText} />
                <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer text-center">
                    <a className="btn btn-primary" href="#!">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};