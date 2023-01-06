import "./product.css";

function Product(props) {
  return (
    <div className="product_container">
      <div class="product-card">
        <img src={props.image} alt="Product Name" class="product-image" />

        <div className="product__content">
          <h3 class="product-name">{props.title}</h3>
          <p class="product-description">{props.description}</p>
          <div class="product-price">{props.price}</div>
          <button class="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
