import Header from "./Header";
import Hero from "./Hero";
import Description from "./Description";
import Reviews from "./Reviews";
import { useEffect, useState } from "react";
import Faq from "./Faq";
import Order from "./Order";
import Feedback from "./Feedback";
import Footer from "./Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" px-5 mx-auto max-w-screen-lg h-screen flex items-center flex-col md:px-16 lg:px-20">
      <Header windowWidth={windowWidth} />
      <Hero windowWidth={windowWidth} />
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
