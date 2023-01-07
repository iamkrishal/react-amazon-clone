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

      <div className="home__row test">
        <Product
          id="gfvhehfgvefghb"
          title="Gaming Laptop"
          image="https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format"
          description="Get the best gaming laptop at this price. Dont miss the sale"
          price="$300.00"
        />

        <Product
        id="hgvuyhgvrhgrhbg"
          title="Gaming mouse"
          image="https://i.shgcdn.com/b635b680-f7f4-4277-b42c-e355b2a71b3a/-/format/auto/-/preview/3000x3000/-/quality/best/"
          description="Get the best gaming mouse at this price. Dont miss the sale"
          price="$60.50"
        />
      </div>

      <div className="home__row">
      <Product
      id="fhuerfhgeyurghf"
          title="Smart Watch"
          image="https://www.reliancedigital.in/medias/Noise-Colorfit-Pro-2-Smart-Watch-491900986-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjA4Mzd8aW1hZ2UvanBlZ3xpbWFnZXMvaGYwL2g4MS85NTkxODIwNTUwMTc0LmpwZ3xkMWQwOTQ2ZWRlNDJkZTlmN2MzNTdkZWVkZDM0MDgzODIxNGQ5MzYwMzliNWQwMWVmMzM1NjgwZGNiZTY0ZDg0"
          description="The watch create for smart people"
          price="$100.99"
        />

        <Product
        id="64rt7687656t78"
          title="Sports shoe"
          image="https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0"
          description="Feeling sporty? Chexk this out"
          price="$99.99"
        />

        <Product
        id="bjhgrthgriutghrui"
          title="Air purds"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8Ev2gKVtmFB8Mj1nPmXja5MujSUnL1F4YA&usqp=CAU"
          description="Get the best air pords laptop at this price. Today is the last day of the sale"
          price="$150.00"
        />
      </div>
    </div>
  );
}

export default Home;
