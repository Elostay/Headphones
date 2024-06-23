import Phones from "../../assets/images/hero_phones.jpg";
const Hero = () => {
  return (
    <div className="">
      <p className="mb-4">
        Noise cancellation headphones that are capable for a lot of things
      </p>
      <p className="mb-8">Up to 20 hours of playback</p>
      <h1 className=" text-[34px] font-semibold text-[#E7E7E7] uppercase  tracking-wide mb-8">
        Headphones Bose NC 700
      </h1>
      <button
        type="button"
        className="uppercase bg-[#DF3D3A] w-[280px] h-[58px] text-base tracking-wide font-semibold mb-8"
      >
        Order
      </button>
      <img src={Phones} alt="" />
    </div>
  );
};

export default Hero;
