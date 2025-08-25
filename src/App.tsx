import Header from "./Components/Header"
import Features  from "./Components/Features"
import ScrollToTopBtn from "./Components/ScrollToTopBtn" 
import { Categories } from "./Components/Categories"
import OurStory from "./Components/OurStory"
import Arrivals from "./Components/Arrivals"
import Footer from "./Components/Footer"
import Offers from "./Components/Offers"


const App = () => {
  return (
    <div className="w-full h-full flex flex-col bg-lightBg">
      <Header />
      <Features />
      <ScrollToTopBtn/>
      <Categories/>
      <OurStory/>
      <Arrivals/>
      <Offers/>
      <Footer/>
    </div>
  )
}

export default App