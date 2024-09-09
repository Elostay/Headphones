import HeadphonesMobile from "assets/images/hero_headphones/hero_headphones-phone.jpg";
import HeadphonesTablet from "assets/images/hero_headphones/hero_headphones-tablet.jpg";
import HeadphonesLaptop from "assets/images/hero_headphones/hero_headphones-laptop.jpg";
import Modal from "components/Modal";
import useModalToggle from "hooks/useModalToggle";

const Hero = () => {
  const modalProps = useModalToggle();

  return (
    <>
      <section className="md:w-full md:relative pb-[26px] pt-0 ">
        <div>
          <div className="md:text-base mb-8 md:mb-[105px] xl:relative xl:-left-[200px]">
            <p className="mb-4 w-[222px] md:w-[253px]">
              Noise cancellation headphones that are capable for a lot of things
            </p>
            <p className="w-[93px] md:w-[110px]">Up to 20 hours of playback</p>
          </div>
          <h1 className=" text-[34px] font-semibold text-[#E7E7E7] uppercase  tracking-wide mb-8 md:text-[42px] w-[234px] md:w-[289px] md:mb-10 xl:text-[74px] xl:leading-100 xl:w-[646px] xl:mb-[86px]">
            Headphones Bose NC 700
          </h1>
          <button
            onClick={modalProps.onOpen}
            type="button"
            className="uppercase bg-[#DF3D3A] w-[280px] h-[58px] text-base tracking-wide font-semibold mb-8 md:width[294px]  "
          >
            Order
          </button>
        </div>
        <div className=" md:absolute md:top-0 md:-right-[64px] xl:-right-[287px]">
          <picture>
            <source srcSet={HeadphonesTablet} media="(min-width: 768px)" />
            <source srcSet={HeadphonesLaptop} media="(min-width: 1280px)" />
            <img
              src={HeadphonesMobile}
              alt="black headphones"
              className="w-[280px] h-60 md:w-[380px] md:h-[440px] xl:w-[500px] xl:h-[510px]  "
            />
          </picture>
        </div>
      </section>
      <Modal {...modalProps}>Will be avaliable soon!</Modal>
    </>
  );
};

export default Hero;
