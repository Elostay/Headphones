import { useState } from "react";

import { BounceLoader } from "react-spinners";

interface SliderProps {
  text: string;
  videoLink: string;
  videoImage: string;
  // activeBtn:
}
const Slider = ({ text, videoLink, videoImage }: SliderProps) => {
  const [videoSrc, setVideoSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handlePlayVideo = () => {
    setIsLoading(true);
    setVideoSrc(videoLink);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <div className="relative">
        {!isLoading && !videoSrc && (
          <div>
            <img
              src={videoImage}
              alt="girl with bose"
              width={280}
              height={180}
            />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
              type="button"
              onClick={handlePlayVideo}
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
        )}
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <BounceLoader color="#b61010" />
          </div>
        )}
        {videoSrc && (
          <iframe
            width="280"
            height="180"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className=" w-[280px] h-[180px]"
            title="Bose video"
            onLoad={handleVideoLoad}
          ></iframe>
        )}
      </div>
      <p className="font-semibold text-xl text-[#df3d3a] mt-8 mb-4">
        Bose Сorporation
      </p>
      <p className="mb-8">{text}</p>
    </div>
  );
};

export default Slider;
