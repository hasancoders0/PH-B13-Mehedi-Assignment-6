import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import PremiumTools from './components/PremiumTools/PremiumTools'
import Whyus from './components/Whyus/Whyus'
import ThreeSteps from './components/ThreeSteps/ThreeSteps'
import Pricing from './components/Pricing/Pricing'
import Workflow from './components/Workflow/Workflow'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

const productPromise = fetch('/Products/products.json')
  .then(res => res.json());

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <HeroSection />
      <Whyus />

      <PremiumTools
        productPromise={productPromise}
        cart={cart}
        setCart={setCart}
      />

      <ThreeSteps />
      <Pricing />
      <Workflow />
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App;