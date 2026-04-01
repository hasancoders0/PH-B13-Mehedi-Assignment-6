const Product = ({ product, handleAddToCart, cart }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;

  const isAdded = cart.find(item => item.id === product.id);

  const badgeStyle =
    tagType === "best-seller"
      ? "badge-warning"
      : tagType === "popular"
      ? "badge-secondary"
      : "badge-success";

  return (
    <div className="card bg-base-100 border border-gray-200 rounded-2xl shadow-sm w-full max-w-[350px] mx-auto">
      <div className="card-body p-5">
        <div className="flex items-start justify-between">
          <div className="w-15 h-15 rounded-full border border-gray-200 flex items-center justify-center text-xl bg-base-100 p-3">
            <img src={icon} alt="" />
            
          </div>

          <span className={`badge ${badgeStyle} rounded-full px-3 py-3 font-normal`}>
            {tag}
          </span>
        </div>

        <div className="mt-2">
          <h2 className="card-title text-3xl font-bold">{name}</h2>
          <p className="text-gray-500 text-sm leading-6 mt-3 min-h-[72px]">
            {description}
          </p>
        </div>

        <div className="mt-2">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500 ml-1">
            /{period === "one-time" ? "One-Time" : period}
          </span>
        </div>

        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="card-actions mt-5">
          <button
            onClick={() => handleAddToCart(product)}
            disabled={!!isAdded}
            className={`btn w-full rounded-full border-none ${
              isAdded
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'text-white bg-gradient-default'
            }`}
          >
            {isAdded ? 'Added to Cart' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;