import HeadphonesMobile from "assets/images/hero_headphones/hero_headphones-phone.jpg";
import HeadphonesTablet from "assets/images/hero_headphones/hero_headphones-tablet.jpg";
import HeadphonesLaptop from "assets/images/hero_headphones/hero_headphones-laptop.jpg";
interface HeroProps {
  windowWidth: number;
}
const Hero = ({ windowWidth }: HeroProps) => {
  const getImageSrc = () => {
    if (windowWidth < 768) {
      return HeadphonesMobile;
    }
    if (windowWidth < 1440) {
      return HeadphonesTablet;
    }
    return HeadphonesLaptop;
  };

  return (
    <div className="md:w-full md:relative">
      <div>
        <div className="md:text-base mb-8 md:mb-[105px]">
          <p className="mb-4 w-[222px] md:w-[253px]">
            Noise cancellation headphones that are capable for a lot of things
          </p>
          <p className="w-[93px] md:w-[110px]">Up to 20 hours of playback</p>
        </div>
        <h1 className=" text-[34px] font-semibold text-[#E7E7E7] uppercase  tracking-wide mb-8 md:text-[42px] w-[234px] md:w-[289px] md:mb-10">
          Headphones Bose NC 700
        </h1>
        <button
          type="button"
          className="uppercase bg-[#DF3D3A] w-[280px] h-[58px] text-base tracking-wide font-semibold mb-8 md:width[294px]  "
        >
          Order
        </button>
      </div>
      <img
        src={getImageSrc()}
        alt=""
        className="w-[280px] h-60 md:w-[380px] md:h-[440px] md:absolute md:top-0 md:-right-[64px] lg:w-[700px] lg:h-[598px]  lg:-right-[287px]"
      />
    </div>
  );
};

export default Hero;
