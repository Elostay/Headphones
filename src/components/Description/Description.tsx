import GirlHeadphonesMobile from "assets/images/girl_headphones/girl_headphonesl-phone.png";
import GirlHeadphonesTablet from "assets/images/girl_headphones/girl_headphonesl-tablet.png";
import GirlHeadphonesLaptop from "assets/images/girl_headphones/girl_headphonesl-laptop.png";
import SunsetPhone from "assets/images/sunset/sunset-phone.png";
import SunsetTablet from "assets/images/sunset/sunset-tablet.png";
import SunsetLaptop from "assets/images/sunset/sunset-laptop.png";
import WhiteHeadphonesPhone from "assets/images/headphones_white/headphones_white-phone.jpg";
import WhiteHeadphonesTablet from "assets/images/headphones_white/headphones_white-tablet.png";
import WhiteHeadphonesLaptop from "assets/images/headphones_white/headphones_white-laptop.png";
import MenPhone from "assets/images/men/men-phone.png";
import MenTablet from "assets/images/men/men-tablet.png";
import MenLaptop from "assets/images/men/men-laptop.png";
import ManPhone from "assets/images/man/man-phone.png";
import ManTablet from "assets/images/man/man-tablet.png";
import GirlWithCofeeMobile from "assets/images/girl_cofee/girl_cofee-phone.png";
import GirlWithCofeeTablet from "assets/images/girl_cofee/girl_cofee-tablet.png";
import GirlWithCofeeLaptop from "assets/images/girl_cofee/girl_cofee-laptop.png";
import RedCircle from "assets/icons/circle.png";
import LongWave from "assets/icons/longWave.png";

const Description = () => {
  return (
    <section>
      <div className="md:flex md:justify-between xl:relative">
        <div className=" md:order-1 md:w-[294px] lg:w-[464px] xl:ml-[800px] ">
          <h2 id="characteristics" className=" md:w-[294px] lg:w-[464px] m-0">
            Premium design and comfort
          </h2>
          <h3>11 levels of noise reduction</h3>
          <p className="mb-6">
            With the new Bose Noise Canceling Headphone 700, you can smoothly
            increase or decrease the level of noise cancellation. You can be
            heard perfectly and you hear the interlocutor clearly, even in a
            noisy environment!
          </p>
          <h3>Comfort up to max level</h3>
          <p className="mb-8">
            Stylish, lightweight stainless steel headband with soft, angled cups
            of headphones for comfortable seating. The inner side is made of
            soft gel lining that fits well to the head.
          </p>
        </div>
        <picture className="md:mr-[60px] lg:mr-[150px] shrink-0  xl:absolute top-0 left-[100px] xl:mr-0 ">
          <source srcSet={GirlHeadphonesLaptop} media="(min-width: 1280px)" />
          <source srcSet={GirlHeadphonesTablet} media="(min-width: 768px)" />

          <img
            src={GirlHeadphonesMobile}
            alt="girl in headphones"
            className="m-auto md:h-[540px] xl:m-0 xl:w-[590px] xl:h-[616px]"
          />
        </picture>
      </div>
      <h2>capable of so much</h2>

      <ul className="flex flex-col gap-4 xl:flex-row xl:gap-12">
        <li className="flex flex-col gap-4 xl:w-1/2">
          <span className="list-item">Ability to receive calls</span>
          <span className="list-item">Rich and powerful sound</span>
          <span className="list-item">Active noise cancellation option</span>
        </li>
        <li className="flex flex-col gap-4 xl:w-1/2">
          <span className="list-item">Unsurpassed microphone system</span>
          <span className="list-item">Support of voice assistants</span>
          <div className="relative">
            <span className="absolute top-0 left-0 w-3 h-3 bg-[#DF3D3A] rounded-full"></span>
            <p className="ml-9">Bose AR Augmented Reality Audio Platform</p>
          </div>
        </li>
      </ul>

      <h2 className="md:text-right">The luxury of silence</h2>

      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen xl:ml-[-50.4vw]">
        <picture className="block w-full">
          <source srcSet={SunsetTablet} media="(min-width: 768px)" />
          <source srcSet={SunsetLaptop} media="(min-width: 1280px)" />
          <img
            src={SunsetPhone}
            alt="headphones and sunset"
            className="mb-8 w-full h-auto"
          />
        </picture>
      </div>

      <div className="md:flex justify-between xl:mt-[60px]">
        <div className="md:max-w-[294px] xl:max-w-[510px]">
          <h3>Maximum enjoyment</h3>
          <p className="mb-[42px]">
            In order to create a comfortable atmosphere - raise the level by
            level from the "transparent" mode to the maximum blocking of sounds.
            The conversation mode can be activated in one click using a special
            button.
          </p>
        </div>
        <div className="md:max-w-[294px] xl:max-w-[510px]">
          <h3>Crystal sound</h3>
          <p>
            The speaker system and brand name active equalizer are able to
            provide high-quality and powerful sound at any volume level. You can
            be sure of no distortion and crystal clear at high and low
            frequencies.
          </p>
        </div>
      </div>
      <div className="mt-[52px] md:flex justify-between  md:h-[297px] xl:mt-[170px] xl:h-auto">
        <div className="shrink-0 md:max-w-[294px] md:mr-[60px] xl:max-w-[380px]">
          <h2>Bose AR</h2>
          <h3>Brand name technology</h3>
          <p className="mb-8 md:max-w-[294px] xl:max-w-[380px]">
            Bose AR is a unique audio platform augmented reality, that opens
            before you new facets of sound. It allows you to stay connected to
            the real world and immerse yourself in the virtual universe at the
            same time.
          </p>
        </div>
        <div className="relative md:absolute md:right-0 lg:static xl:absolute">
          <picture className="block md:w-[354px] lg:w-[294px] xl:w-[700px] xl:h-[586px]">
            <source srcSet={GirlWithCofeeLaptop} media="(min-width: 1280px)" />
            <source srcSet={GirlWithCofeeTablet} media="(min-width: 768px)" />
            <img
              src={GirlWithCofeeMobile}
              alt="girl with cofee"
              className="m-auto xl:m-0 xl:w-full"
            />
          </picture>
        </div>
      </div>
      <div className="mt-[52px] md:flex md:justify-end lg:justify-between xl:mt-[412px] xl:justify-start xl:gap-20  xl:relative ">
        <div className="md:max-w-[294px] order-1 xl:max-w-[400px]">
          <h2>Guarantees</h2>

          <img src={RedCircle} className="mb-6" alt="red circle decor" />
          <h3>90 Day Money Back Guarantee</h3>
          <p className="mb-6 md:mb-[55px]">
            If you are not 100% satisfied with a product, you can return it back
            for a full refund.
          </p>
          <img src={RedCircle} className="mb-6 " alt="red circle decor" />
          <h3>1 year warranty</h3>
          <p className="mb-8">
            Regardless of your country of residence, if your headphones are
            broken, we will send you new ones.
          </p>
          <img
            src={LongWave}
            className="hidden xl:block absolute bottom-4 custom-calc-right-1440"
            alt=""
          />
        </div>
        <div className="relative md:absolute md:left-0 md:h-[442px] bg-[#1D1D1D] lg:static xl:relative xl:-left-[100px]">
          <picture className="block md:w-[354px] xl:w-full">
            <source
              srcSet={WhiteHeadphonesLaptop}
              media="(min-width: 1280px)"
            />
            <source srcSet={WhiteHeadphonesTablet} media="(min-width: 768px)" />

            <img
              src={WhiteHeadphonesPhone}
              alt="white headphones"
              className="m-auto xl:m-0 "
            />
          </picture>
        </div>
      </div>

      <div className="md:relative md:mb-[120px]">
        <div className="md:max-w-[294px]">
          <div className="mt-[52px] relative">
            <h2 id="history" className="max-w-[124px]">
              brand creation history
            </h2>
            <svg
              className="absolute top-0 -right-5 md:hidden"
              width="110"
              height="83"
              viewBox="0 0 110 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.55748 81.8622C2.43972 82.1633 1.2511 82.0819 0 81.6107L0.458191 80.3941C1.49214 80.7835 2.40093 80.8274 3.21938 80.607C4.04392 80.3849 4.83232 79.8794 5.59294 79.0788C7.13094 77.4599 8.46545 74.731 9.66591 71.1455C11.7969 64.7809 13.4167 56.0087 15.1253 46.7561L15.1256 46.7544L15.1261 46.7519C15.3381 45.6038 15.5515 44.4482 15.7674 43.289C17.7161 32.8254 19.8678 22.0737 23.0744 13.935C24.6779 9.86515 26.5636 6.3988 28.858 3.94144C31.165 1.4705 33.9071 0 37.1783 0C40.1386 0 42.7143 1.37032 44.9605 3.66331C47.1981 5.94761 49.1415 9.1778 50.8693 12.9934C54.325 20.6247 56.9935 30.7714 59.3873 40.8567C59.9635 43.284 60.5236 45.7072 61.0751 48.0927L61.0762 48.0977L61.0764 48.0984C62.8228 55.6534 64.4816 62.8296 66.2833 68.557C67.4692 72.3268 68.7015 75.4159 70.034 77.5513C70.9722 79.0547 71.902 79.9951 72.8299 80.4294L72.8431 80.3943C73.877 80.7837 74.7858 80.8276 75.6043 80.6071C76.4288 80.3851 77.2172 79.8796 77.9778 79.0789C79.5158 77.4601 80.8503 74.7311 82.0508 71.1457C84.1818 64.7811 85.8016 56.0091 87.5102 46.7565L87.5102 46.7564L87.5102 46.7563L87.5142 46.735C87.7251 45.5925 87.9375 44.4427 88.1523 43.2892C90.101 32.8256 92.2527 22.0738 95.4593 13.9352C97.0628 9.86533 98.9485 6.39898 101.243 3.94162C103.55 1.47067 106.292 0.000178993 109.563 0.000178993C112.524 0.000178993 115.095 1.37085 117.333 3.66465C119.562 5.94954 121.493 9.18036 123.206 12.9963C126.632 20.6283 129.261 30.7759 131.615 40.8618C132.182 43.2873 132.732 45.7088 133.274 48.0926L133.276 48.104C134.993 55.6595 136.624 62.836 138.403 68.5638C139.574 72.3338 140.795 75.4229 142.119 77.558C143.05 79.0606 143.975 80.0002 144.901 80.4345L144.915 80.3961C145.948 80.7851 146.864 80.8299 147.696 80.6085C148.534 80.3853 149.34 79.8773 150.122 79.0747C151.703 77.4529 153.096 74.7213 154.369 71.1362C156.636 64.7476 158.428 55.9335 160.316 46.6432L160.319 46.6277C160.545 45.517 160.772 44.3996 161.001 43.2787C163.144 32.8147 165.49 22.0636 168.843 13.926C170.519 9.85656 172.466 6.39223 174.802 3.93705C177.15 1.46943 179.915 0 183.185 0C186.145 0 188.721 1.37032 190.967 3.66331C193.205 5.94761 195.148 9.1778 196.876 12.9934C200.332 20.6247 203 30.7714 205.394 40.8567C205.971 43.2859 206.531 45.7111 207.083 48.0985L207.083 48.0994C208.83 55.654 210.488 62.8298 212.29 68.557C213.476 72.3268 214.708 75.4159 216.041 77.5513C217.392 79.7161 218.725 80.7136 220.061 80.7136V82.0136C218.013 82.0136 216.341 80.4887 214.938 78.2395C213.516 75.9609 212.244 72.7442 211.05 68.9471C209.232 63.1668 207.556 55.9184 205.807 48.3502L205.805 48.3403C205.256 45.9655 204.699 43.5592 204.129 41.1569C201.734 31.0638 199.089 21.0321 195.692 13.5296C193.993 9.7783 192.125 6.70274 190.039 4.57302C187.961 2.45198 185.7 1.3 183.185 1.3C180.354 1.3 177.91 2.55679 175.744 4.83317C173.566 7.12201 171.693 10.4195 170.045 14.4212C166.747 22.4257 164.422 33.0541 162.275 43.5394C162.045 44.6608 161.818 45.7807 161.591 46.8955L161.588 46.9109C159.706 56.1762 157.895 65.0893 155.594 71.571C154.307 75.1964 152.838 78.1508 151.053 79.9821C150.153 80.906 149.151 81.5664 148.03 81.8647C147.414 82.0287 146.778 82.079 146.124 82.014V82.0189C144.076 82.0189 142.409 80.4929 141.014 78.2431C139.6 75.9639 138.341 72.7468 137.162 68.9495C135.366 63.1687 133.719 55.9198 131.999 48.351L131.997 48.3422L131.995 48.332C131.456 45.96 130.91 43.5566 130.349 41.1573C127.993 31.0635 125.388 21.0314 122.02 13.5287C120.336 9.77722 118.48 6.70189 116.402 4.57248C114.333 2.45197 112.078 1.30018 109.563 1.30018C106.733 1.30018 104.315 2.55585 102.193 4.8288C100.058 7.11533 98.2452 10.4106 96.6688 14.4117C93.5156 22.4148 91.383 33.0421 89.4303 43.5272C89.2142 44.6873 89.0004 45.8458 88.7875 46.9988C87.0838 56.2276 85.4459 65.1 83.2835 71.5584C82.0699 75.1833 80.6629 78.1402 78.9203 79.9743C78.0407 80.9002 77.0541 81.563 75.9424 81.8624C75.3335 82.0264 74.7036 82.0769 74.054 82.0128V82.0136C72.0065 82.0136 70.3347 80.4887 68.9311 78.2395C67.5092 75.9609 66.2376 72.7442 65.0432 68.9471C63.2249 63.1668 61.5495 55.9184 59.8001 48.3502L59.7998 48.349C59.2503 45.9713 58.6934 43.5621 58.1225 41.1569C55.7267 31.0638 53.0824 21.0321 49.6851 13.5296C47.9863 9.7783 46.118 6.70274 44.0318 4.57302C41.9541 2.45198 39.6936 1.3 37.1783 1.3C34.3479 1.3 31.9304 2.55567 29.8082 4.82862C27.6734 7.11515 25.8603 10.4104 24.2839 14.4115C21.1307 22.4147 18.9981 33.0419 17.0454 43.527C16.8294 44.6871 16.6155 45.8457 16.4026 46.9986C14.6989 56.2274 13.061 65.0998 10.8987 71.5583C9.68499 75.1831 8.27796 78.14 6.53542 79.9742C5.65578 80.9001 4.66916 81.5628 3.55748 81.8622Z"
                fill="white"
                fillOpacity="0.8"
              />
            </svg>
          </div>
          <p className="mb-8">
            The history of Bose Corporation began with disappointment. In 1956,
            MIT graduate student Amar Bose bought one of the best stereo systems
            at the time for his home. After a few minutes of listening to the
            audio recording, his bewilderment turned to disappointment.
          </p>
        </div>
        <div className="relative md:absolute md:-right-[63px] md:h-[524px] md:top-[100px] xl:h-[638px] ">
          <picture className="block md:w-[354px] xl:w-[700px] xl:h-full">
            <source srcSet={MenLaptop} media="(min-width: 1440px)" />
            <source srcSet={MenTablet} media="(min-width: 768px)" />
            <img
              src={MenPhone}
              alt="Men work"
              className="mb-8 m-auto order-2 xl:m-0"
            />
          </picture>
        </div>

        <div className="md:max-w-[294px]">
          <p className="mb-8 md:mb-2">
            From Amar's point of view, the sound was so flat and unnatural that
            it was better not to listen to the music at all than to listen to it
            in such a distorted form.
          </p>
          <p className="mb-8 md:mb-0">
            Bose's frustration grew into a firm determination to build audio
            equipments that would reproduce sound with impeccable accuracy and
            naturalness
          </p>
        </div>
      </div>
      <div className="md:flex  justify-between md:h-[355px] items-center xl:justify-center xl:gap-72">
        <picture className="block md:w-[294px] ">
          <source srcSet={ManTablet} media="(min-width: 768px)" />

          <img src={ManPhone} alt="creator" className="mb-8 m-auto md:m-0" />
        </picture>

        <div className="md:max-w-[294px] xl:max-w-[382px]">
          <svg
            className="mb-6 md:mb-[52px]"
            width="34"
            height="25"
            viewBox="0 0 34 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12.0397V0H13.9651V9.06516C13.9651 18.508 9.31007 23.8196 0 25V20.0425C2.35151 19.4287 3.95918 18.5316 4.823 17.3513C5.73481 16.1709 6.28669 14.4004 6.47865 12.0397H0Z"
              fill="#DF3D3A"
            />
            <path
              d="M20.0349 12.0397V0H34V9.06516C34 18.508 29.345 23.8196 20.0349 25V20.0425C22.3864 19.4287 23.9941 18.5316 24.8579 17.3513C25.7697 16.1709 26.3216 14.4004 26.5136 12.0397H20.0349Z"
              fill="#DF3D3A"
            />
          </svg>
          <p className="mb-4 font-semibold text-xl xl:text-3xl">
            Never stop dreaming. Always dream of the best, and think about how
            to achieve it.
          </p>
          <p className="text-[#FFFFFF66] xl:text-base">
            Amar Bose is a company founder{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
