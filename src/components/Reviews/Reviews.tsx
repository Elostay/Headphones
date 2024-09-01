import Slider from "components/Slider";
import { useState } from "react";

import FirstVideo from "assets/images/videos/first_video.png";
import SecondVideo from "assets/images/videos/second_video.png";
import ThirdVideo from "assets/images/videos/third_video.png";

type VideoData = {
  text: string;
  videoLink: string;
  videoImage: string;
};
type VideoKey = string;

const VIDEO_DATA: Record<string, VideoData> = {
  "01": {
    text: "Critically acclaimed for their powerful noise cancelling, astonishing sound, and unrivaled voice pickup, Bose Noise Cancelling Headphones 700 help turn any space into the perfect place to listen to music, get work done, or just shut out the world for a few moments and relax",
    videoLink: "https://www.youtube.com/embed/VqP11Ma_2Fk?autoplay=1",
    videoImage: FirstVideo,
  },
  "02": {
    text: "Bose Noise Cancelling Headphones 700 deliver everything you expect — and things you never imagined possible. The perfect balance of quiet, comfort, and sound",
    videoLink: "https://www.youtube.com/embed/BUyLpf-u97Y?autoplay=1",
    videoImage: SecondVideo,
  },
  "03": {
    text: "Real stories of people tuning in or out to feel peace, find escape, and for self-care",
    videoLink: "https://www.youtube.com/embed/NgtznBDFRUo?autoplay=1",
    videoImage: ThirdVideo,
  },
};

const numberBtn: VideoKey[] = Object.keys(VIDEO_DATA);

const Reviews = () => {
  const [text, setText] = useState(VIDEO_DATA["01"].text);
  const [videoLink, setVideoLink] = useState(VIDEO_DATA["01"].videoLink);
  const [videoImage, setVideoImage] = useState(VIDEO_DATA["01"].videoImage);
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [activeBtn, setActiveBtn] = useState("01");

  const handlePlayClick = () => {
    setIsLoading(true);
    setIsVideoVisible(true);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  const chooseVideo = (btn: string) => {
    setIsVideoVisible(false);
    setText(VIDEO_DATA[btn].text);
    setVideoLink(VIDEO_DATA[btn].videoLink);
    setVideoImage(VIDEO_DATA[btn].videoImage);
    setActiveBtn(btn);
  };

  return (
    <section>
      <h2 id="reviews">Reviews</h2>

      <Slider
        text={text}
        videoLink={videoLink}
        videoImage={videoImage}
        isVideoVisible={isVideoVisible}
        handlePlayClick={handlePlayClick}
        isLoading={isLoading}
        handleVideoLoad={handleVideoLoad}
      />

      <ul className="flex items-center gap-5 text-xl text-[#df3d3a] opacity-20">
        {numberBtn.map((btn, idx) => (
          <li key={btn}>
            <button
              className="[&:not(:last-child)]:mr-5"
              type="button"
              onClick={() => chooseVideo(btn)}
            >
              {btn}
            </button>
            {idx < numberBtn.length - 1 && <span className="text-xl">-</span>}
          </li>
        ))}
        {/* <li>
          <button type="button" onClick={() => chooseVideo("01")}>
            01
          </button>
        </li>
        <li>-</li>
        <li>
          <button type="button" onClick={() => chooseVideo("02")}>
            02
          </button>
        </li>
        <li>-</li>
        <li>
          <button type="button" onClick={() => chooseVideo("03")}>
            03
          </button>
        </li> */}
      </ul>
    </section>
  );
};

export default Reviews;
