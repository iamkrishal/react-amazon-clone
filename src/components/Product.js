import "./product.css";

function Product(props) {
  return (
    <div className="product_container">
      <div className="product-card">
        <img src={props.image} alt="Product Name" className="product-image" />

        <div className="product__content">
          <h3 className="product-name">{props.title}</h3>
          <p className="product-description">{props.description}</p>
          <div className="product-price">{props.price}</div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
