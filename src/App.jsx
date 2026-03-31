import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import PremiumTools from './components/PremiumTools/PremiumTools'
import Whyus from './components/Whyus/Whyus'
import ThreeSteps from './components/ThreeSteps/ThreeSteps'
import Pricing from './components/Pricing/Pricing'
import Workflow from './components/Workflow/Workflow'

function App() {

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Whyus></Whyus>
      <PremiumTools></PremiumTools>
      <ThreeSteps></ThreeSteps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}
 
export default App
