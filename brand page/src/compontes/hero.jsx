const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-contant">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn"> Category</button>
        </div>
        <div className="shoping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/image/amazon.png" alt="" />
            <img src="/image/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div hero-img>
        <img src="/image/shoe_image.png" alt="" />
      </div>
    </main>
  );
};
export default HeroSection;
