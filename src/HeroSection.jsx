import './HeroSection.css';

function HeroSection() {
    return (
        <div className="main">
            <div className="left-container">
                <h1 className="slogan">YOUR FEET DESERVE THE BEST</h1>
                <p className="slogan-details">YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn-left-container">
                    <button className="show-now">Shop Now</button>
                    <button className="category">Category</button>
                </div>
                <div className="avaliable">
                    <p>Also Available On</p>
                    <div className="avaliable-img">
                        <img src="/img/amazon.png" alt="amazon" />
                        <img src="/img/flipkart.png" alt="flipkart" />
                    </div>
                </div>
            </div>
            <div className="right-container">
                <img src="/img/hero-image.png" alt="Hero" />
            </div>
        </div>
    );
}

export default HeroSection;
