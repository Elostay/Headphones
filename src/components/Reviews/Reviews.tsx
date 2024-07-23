import Slider from "components/Slider";
import { useState } from "react";

import FirstVideo from "assets/images/videos/first_video.png";
import SecondVideo from "assets/images/videos/second_video.png";
import ThirdVideo from "assets/images/videos/third_video.png";

const Reviews = () => {
  const [text, setText] = useState(
    "Critically acclaimed for their powerful noise cancelling, astonishing sound, and unrivaled voice pickup, Bose Noise Cancelling Headphones 700 help turn any space into the perfect place to listen to music, get work done, or just shut out the world for a few moments and relax "
  );
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/watch?v=VqP11Ma_2Fk&ab_channel=Bose"
  );
  const [videoImage, setVideoImage] = useState(FirstVideo);

  const chooseVideo = (btn: string = "01") => {
    switch (btn) {
      case "01":
        setText(
          "Critically acclaimed for their powerful noise cancelling, astonishing sound, and unrivaled voice pickup, Bose Noise Cancelling Headphones 700 help turn any space into the perfect place to listen to music, get work done, or just shut out the world for a few moments and relax "
        );
        setVideoLink(
          "https://www.youtube.com/watch?v=VqP11Ma_2Fk&ab_channel=Bose"
        );
        setVideoImage(FirstVideo);
        break;
      case "02":
        setText(
          "Bose Noise Cancelling Headphones 700 deliver everything you expect — and things you never imagined possible. The perfect balance of quiet, comfort, and sound"
        );
        setVideoLink(
          "https://www.youtube.com/watch?v=BUyLpf-u97Y&ab_channel=Bose"
        );
        setVideoImage(SecondVideo);
        break;
      case "03":
        setText(
          "Real stories of people tuning in or out to feel peace, find escape, and for self-care"
        );
        setVideoLink(
          "https://www.youtube.com/watch?v=NgtznBDFRUo&ab_channel=Bose"
        );
        setVideoImage(ThirdVideo);
        break;
      default:
        return;
    }
  };

  return (
    <section>
      <h2 id="reviews">Reviews</h2>
      <Slider text={text} videoLink={videoLink} videoImage={videoImage} />
      <ul className="flex gap-5 text-xl text-[#df3d3a] opacity-20">
        <li>
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
        </li>
      </ul>
    </section>
  );
};

export default Reviews;
