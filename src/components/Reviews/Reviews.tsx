import Slider from "components/Slider";
import { useState } from "react";

import FirstVideoPhone from "assets/images/videos/first_video-phone.png";
import FirstVideoTablet from "assets/images/videos/first_video-tablet.png";
import FirstVideoLaptop from "assets/images/videos/first_video-laptop.png";
import SecondVideoPhone from "assets/images/videos/second_video-phone.png";
import SecondVideoTablet from "assets/images/videos/second_video-tablet.png";
import SecondVideoLaptop from "assets/images/videos/second_video-laptop.png";
import ThirdVideoPhone from "assets/images/videos/third_video-phone.png";
import ThirdVideoTablet from "assets/images/videos/third_video-tablet.png";
import ThirdVideoLaptop from "assets/images/videos/third_video-laptop.png";

type VideoData = {
  text: string;
  videoLink: string;
  videoImagePhone: string;
  videoImageTablet: string;
  videoImageLaptop: string;
};
type VideoKey = string;

const VIDEO_DATA: Record<string, VideoData> = {
  "1": {
    text: "Critically acclaimed for their powerful noise cancelling, astonishing sound, and unrivaled voice pickup, Bose Noise Cancelling Headphones 700 help turn any space into the perfect place to listen to music, get work done, or just shut out the world for a few moments and relax",
    videoLink: "https://www.youtube.com/embed/VqP11Ma_2Fk?autoplay=1",
    videoImagePhone: FirstVideoPhone,
    videoImageTablet: FirstVideoTablet,
    videoImageLaptop: FirstVideoLaptop,
  },
  "2": {
    text: "Bose Noise Cancelling Headphones 700 deliver everything you expect — and things you never imagined possible. The perfect balance of quiet, comfort, and sound",
    videoLink: "https://www.youtube.com/embed/BUyLpf-u97Y?autoplay=1",
    videoImagePhone: SecondVideoPhone,
    videoImageTablet: SecondVideoTablet,
    videoImageLaptop: SecondVideoLaptop,
  },
  "3": {
    text: "Real stories of people tuning in or out to feel peace, find escape, and for self-care",
    videoLink: "https://www.youtube.com/embed/NgtznBDFRUo?autoplay=1",
    videoImagePhone: ThirdVideoPhone,
    videoImageTablet: ThirdVideoTablet,
    videoImageLaptop: ThirdVideoLaptop,
  },
};

const numberBtn: VideoKey[] = Object.keys(VIDEO_DATA);

const Reviews = () => {
  const [text, setText] = useState(VIDEO_DATA["1"].text);
  const [videoLink, setVideoLink] = useState(VIDEO_DATA["1"].videoLink);
  const [videoImagePhone, setVideoImagePhone] = useState(
    VIDEO_DATA["1"].videoImagePhone
  );
  const [videoImageTablet, setVideoImageTablet] = useState(
    VIDEO_DATA["1"].videoImageTablet
  );
  const [videoImageLaptop, setVideoImageLaptop] = useState(
    VIDEO_DATA["1"].videoImageLaptop
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);

  const handlePlayClick = () => {
    setIsLoading(true);
    setIsVideoVisible(true);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  const chooseVideo = (btn: string) => {
    if (activeBtn === Number(btn)) return;
    setActiveBtn(Number(btn));
    setIsVideoVisible(false);
    setText(VIDEO_DATA[btn].text);
    setVideoLink(VIDEO_DATA[btn].videoLink);
    setVideoImagePhone(VIDEO_DATA[btn].videoImagePhone);
    setVideoImageTablet(VIDEO_DATA[btn].videoImageTablet);
    setVideoImageLaptop(VIDEO_DATA[btn].videoImageLaptop);
    console.log(btn);
  };

  return (
    <section className="w-full xl:relative">
      <h2 className="xl:hidden" id="reviews">
        Reviews
      </h2>

      <Slider
        text={text}
        videoLink={videoLink}
        videoImagePhone={videoImagePhone}
        videoImageTablet={videoImageTablet}
        videoImageLaptop={videoImageLaptop}
        isVideoVisible={isVideoVisible}
        handlePlayClick={handlePlayClick}
        isLoading={isLoading}
        handleVideoLoad={handleVideoLoad}
      />

      <ul className="flex items-center gap-5 text-xl justify-center md:justify-start xl:text-3xl xl:absolute xl:-right-[14%] xl:bottom-12">
        {numberBtn.map((btn, idx) => (
          <li key={btn}>
            <button
              className={`[&:not(:last-child)]:mr-5 ${
                activeBtn === Number(btn)
                  ? "text-[#DF3D3A] "
                  : "text-[#df3d3a] opacity-20"
              }`}
              type="button"
              onClick={() => chooseVideo(btn)}
            >
              {`0${btn}`}
            </button>
            {idx < numberBtn.length - 1 && (
              <span
                className={`text-xl ${
                  activeBtn === Number(btn)
                    ? "text-[#DF3D3A] "
                    : "text-[#df3d3a] opacity-20"
                }`}
              >
                -
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
