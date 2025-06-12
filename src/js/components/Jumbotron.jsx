import React from 'react';

export const Jumbotron = ({ title, description, buttonText }) => {
    return (
        <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-4 fw-bold">{title}</h1>
                        <p className="fs-4">{description}</p>
                        <a className="btn btn-primary btn-lg" href="#!">{buttonText}</a>
                    </div>
                </div>
            </div>
        </header>
    );
};