import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="Hero Img"
        />
      </div>

      <div className="home__row">
        <Product
          title="Gaming Laptop"
          image="https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format"
          description="Get the best gaming laptop at this price. Dont "
        />
        <Product />
      </div>

      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>

      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
