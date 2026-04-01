import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Product from './Product';

const PremiumTools = ({ productPromise, cart, setCart }) => {
  const [productData, setProductData] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    productPromise
      .then(data => {
        setProductData(data);
      })
      .catch(error => {
        console.error('Product load error:', error);
      });
  }, [productPromise]);

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);

    if (isExist) {
      toast.info(`${product.name} is already in cart`);
      return;
    }

    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (id) => {
    const removedItem = cart.find(item => item.id === id);
    const remainingCart = cart.filter(item => item.id !== id);
    setCart(remainingCart);

    if (removedItem) {
      toast.error(`${removedItem.name} removed from cart`);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning('Your cart is empty');
      return;
    }

    toast.success('Order placed successfully! 🎉');
    setCart([]);
  };

  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className='container mx-auto px-4 my-10'>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Premium Digital Tools
      </h2>

      <p className="py-5 text-gray-500 text-center mb-5 max-w-3xl mx-auto">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className="flex justify-center mb-10">
        <div className="tabs tabs-boxed rounded-full p-1 bg-white border border-gray-200">
          <button
            onClick={() => setActiveTab('products')}
            className={`tab rounded-full px-6 ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
                : ''
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab('cart')}
            className={`tab rounded-full px-6 ${
              activeTab === 'cart'
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
                : ''
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {activeTab === 'products' ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {productData.map(product => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              cart={cart}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-6">Your Cart</h3>

          {cart.length === 0 ? (
            <p className="text-gray-500">No items added yet.</p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-base-200 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 p-3 rounded-full border border-gray-200 flex items-center justify-center text-xl bg-white">
                        <img src={item.icon} alt="" />
                        
                      </div>

                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-pink-500 text-sm font-medium hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-gray-500">Total:</p>
                <h4 className="text-2xl font-bold">${totalPrice}</h4>
              </div>

              <button
                onClick={handleCheckout}
                className="btn w-full mt-6 rounded-full border-none text-white bg-gradient-to-r from-violet-600 to-fuchsia-600"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PremiumTools;