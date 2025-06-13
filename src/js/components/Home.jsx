import React from 'react';
import {Navbar} from './Navbar'; 
import {Jumbotron} from './Jumbotron'; 
import {Card} from './Card'; 
import {Footer} from './Footer'; 

export const Home = () => {
    return (
        <div className="d-flex flex-column">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous" />
            <Navbar />
            <Jumbotron
                title="A Warm Welcome!"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
                buttonText="Call to action!"
            />
            <div className="container">
                <div className="row">
                    <Card
                        imageUrl="https://placehold.co/500x325"
                        imageAltText="Placeholder Image 1"
                        title="Card title"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        buttonText="Find Out More!"
                    />
                    <Card
                        imageUrl="https://placehold.co/500x325"
                        imageAltText="Placeholder Image 2"
                        title="Card title"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse nesciunt aspernatur consectetur minus ea inventore nemo fugit doloremque."
                        buttonText="Find Out More!"
                    />
                    <Card
                        imageUrl="https://placehold.co/500x325"
                        imageAltText="Placeholder Image 3"
                        title="Card title"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        buttonText="Find Out More!"
                    />
                    <Card
                        imageUrl="https://placehold.co/500x325"
                        imageAltText="Placeholder Image 4"
                        title="Card title"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse nesciunt aspernatur consectetur minus ea inventur nemo fugit doloremque."
                        buttonText="Find Out More!"
                    />
                </div>
            </div>
            <Footer />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        </div>
    );
};