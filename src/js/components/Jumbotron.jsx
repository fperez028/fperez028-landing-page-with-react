import React from 'react';

export const Jumbotron = ({ title, description, buttonText }) => {
    return (
        <div className="container py-5">
            <div className="p-4 shadow bg-body-secondary rounded-3">
                <div className="m-4">
                    <h1 className="display-2">{title}</h1>
                    <p className="fs-5">{description}</p>
                    <a className="btn btn-primary btn-lg" href="#!">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};