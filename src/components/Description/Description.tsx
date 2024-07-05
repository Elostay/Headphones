import GirlHeadphones from "assets/images/girl_headphones/girl_headphonesl-phone.png";
import Sunset from "assets/images/sunset/sunset-phone.png";
import WhiteHeadphones from "assets/images/headphones_white/headphones_white-phone.jpg";
import Men from "assets/images/men/men-phone.png";
import Man from "assets/images/man/man-phone.png";
import Quotes from "assets/icons/quotes.png";
import GirlWithCofee from "assets/images/girl_cofee/girl_cofee-phone.png";
const Description = () => {
  return (
    <section className="py-[26px]">
      <h2>Premium design and comfort</h2>
      <h3>11 levels of noise reduction</h3>
      <p className="mb-6">
        With the new Bose Noise Canceling Headphone 700, you can smoothly
        increase or decrease the level of noise cancellation. You can be heard
        perfectly and you hear the interlocutor clearly, even in a noisy
        environment!
      </p>
      <h3>Comfort up to max level</h3>
      <p className="mb-8">
        Stylish, lightweight stainless steel headband with soft, angled cups of
        headphones for comfortable seating. The inner side is made of soft gel
        lining that fits well to the head.
      </p>
      <img src={GirlHeadphones} alt="girl in headphones" />
      <h2>capable of so much</h2>
      <ul className="flex flex-col gap-4">
        <li>Ability to receive calls</li>
        <li>Rich and powerful sound</li>
        <li>Active noise cancellation option</li>
        <li>Unsurpassed microphone system</li>
        <li>Support of voice assistants</li>
        <li>Bose AR Augmented Reality Audio Platform</li>
      </ul>
      <h2>The luxury of silence</h2>
      <img src={Sunset} alt="headphones and sunset" className="mb-8" />
      <h3>Maximum enjoyment</h3>
      <p className="mb-[42px]">
        In order to create a comfortable atmosphere - raise the level by level
        from the "transparent" mode to the maximum blocking of sounds. The
        conversation mode can be activated in one click using a special button.
      </p>
      <h3>Crystal sound</h3>
      <p>
        The speaker system and brand name active equalizer are able to provide
        high-quality and powerful sound at any volume level. You can be sure of
        no distortion and crystal clear at high and low frequencies.
      </p>
      <h2>Bose AR</h2>
      <h3>Brand name technology</h3>
      <p className="mb-8">
        Bose AR is a unique audio platform augmented reality, that opens before
        you new facets of sound. It allows you to stay connected to the real
        world and immerse yourself in the virtual universe at the same time.
      </p>
      <img src={GirlWithCofee} alt="girl with cofee" />
      <h2>Guarantees</h2>
      <h3>90 Day Money Back Guarantee</h3>
      <p className="mb-6">
        If you are not 100% satisfied with a product, you can return it back for
        a full refund.
      </p>
      <h3>1 year warranty</h3>
      <p className="mb-8">
        Regardless of your country of residence, if your headphones are broken,
        we will send you new ones.
      </p>
      <img src={WhiteHeadphones} alt="white headphones" />
      <h2>brand creation history</h2>
      <p>
        The history of Bose Corporation began with disappointment. In 1956, MIT
        graduate student Amar Bose bought one of the best stereo systems at the
        time for his home. After a few minutes of listening to the audio
        recording, his bewilderment turned to disappointment.
      </p>
      <img src={Men} alt="Men work" />
      <p>
        From Amar's point of view, the sound was so flat and unnatural that it
        was better not to listen to the music at all than to listen to it in
        such a distorted form.
      </p>
      <p>
        Bose's frustration grew into a firm determination to build audio
        equipments that would reproduce sound with impeccable accuracy and
        naturalness
      </p>
      <img src={Man} alt="creator" />
      <img src={Quotes} alt="" />
      <p>
        Never stop dreaming. Always dream of the best, and think about how to
        achieve it.
      </p>
      <p>Amar Bose is a company founder </p>
    </section>
  );
};

export default Description;
