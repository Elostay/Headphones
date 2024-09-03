import Header from "./Header";
import Hero from "./Hero";
import Description from "./Description";
import Reviews from "./Reviews";
import Faq from "./Faq";
import Order from "./Order";
import Feedback from "./Feedback";
import Footer from "./Footer";

function App() {
  return (
    <div className=" px-5 mx-auto max-w-screen-lg min-h-screen flex items-center flex-col md:px-[60px] xl:px-20 ">
      <Header />
      <Hero />
      <Description />
      <Reviews />
      <Faq />
      <Order />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
