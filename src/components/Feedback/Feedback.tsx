import WomanWork from "assets/images/woman_work/woman_work-phone.png";

const Feedback = () => {
  return (
    <div>
      <img src={WomanWork} alt="Woman work in headphones" />
      <h2 style={{ marginTop: "16px" }}>Feedback</h2>
      <p className=" mb-10 text-base">
        We'll help you find the right headphones for you.
      </p>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your e-mail" />
        <textarea
          name="message"
          placeholder="Send us a message"
          className=" resize-none"
        ></textarea>
        <div>
          <input type="checkbox" />
          <p>
            I agree to the
            <a href="#" className="underline ml-1">
              privacy policy
            </a>
          </p>
        </div>
        <button
          type="submit"
          className=" font-semibold text-base px-[120px] py-5 border border-[#DF3D3A]"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Feedback;
