import { BounceLoader } from "react-spinners";

interface SliderProps {
  text: string;
  videoLink: string;
  videoImagePhone: string;
  videoImageTablet: string;
  videoImageLaptop: string;
  isVideoVisible: boolean;
  handlePlayClick: () => void;
  isLoading: boolean;
  handleVideoLoad: () => void;
}
const Slider = ({
  text,
  videoLink,
  videoImagePhone,
  videoImageTablet,
  videoImageLaptop,
  isVideoVisible,
  handlePlayClick,
  isLoading,
  handleVideoLoad,
}: SliderProps) => {
  return (
    <div className="">
      <div className="relative">
        <div className="w-[280px] m-auto md:w-[648px] md:h-[417px] xl:w-[920px] xl:h-[590px] xl:relative top-0 custom-calc-left">
          {isLoading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <BounceLoader color="#b61010" />
            </div>
          )}
          {!isVideoVisible ? (
            <div>
              <picture>
                <source srcSet={videoImageLaptop} media="(min-width: 1280px)" />
                <source srcSet={videoImageTablet} media="(min-width: 768px)" />
                <img
                  src={videoImagePhone}
                  alt="girl with bose"
                  className="w-[280px] h-[180px] md:w-[648px] md:h-[417px] xl:w-[920px] xl:h-[590px]"
                  width={280}
                  height={180}
                />
              </picture>

              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
                type="button"
                onClick={() => handlePlayClick()}
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="25" fill="#DF3D3A" />
                  <path
                    d="M33 25L21 31.9282L21 18.0718L33 25Z"
                    fill="white"
                    fillOpacity="0.8"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <iframe
              width="280"
              height="180"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className=" w-full h-full"
              title="Bose video"
              onLoad={handleVideoLoad}
            ></iframe>
          )}
        </div>
      </div>
      <div className="xl:absolute top-10 -right-[20%]">
        <h2 className="hidden xl:block" id="reviews">
          Reviews
        </h2>
        <p className="font-semibold text-xl text-[#df3d3a] mt-8 mb-4 xl:text-3xl">
          Bose Corporation
        </p>
        <p className="mb-8 min-h-[147px] md:max-w-[530px] md:min-h-[100px] xl:max-w-[258px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Slider;
