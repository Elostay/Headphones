import WomanWork from "assets/images/woman_work/woman_work-phone.png";

const Feedback = () => {
  return (
    <section className="pb-[72px]">
      <img src={WomanWork} alt="Woman work in headphones" />
      <h2 style={{ marginTop: "16px" }}>Feedback</h2>
      <p className=" mb-10 text-base">
        We'll help you find the right headphones for you.
      </p>
      <form>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Your name"
            className="pb-4 bg-inherit border-b border-[#2B2B2B] placeholder:text-[#5E5E5E] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your e-mail"
            className="pb-4 bg-inherit border-b border-[#2B2B2B] placeholder:text-[#5E5E5E] focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Send us a message"
            className="resize-none pb-4 bg-inherit border-b border-[#2B2B2B] placeholder:text-[#5E5E5E] focus:outline-none"
          ></textarea>
        </div>
        <div className="mb-10 mt-10">
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkmark mr-6"></span>I agree to the
            <a href="#" className="underline ml-1">
              privacy policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className=" font-semibold text-base px-[120px] py-5 border-2  border-[#DF3D3A]"
        >
          SEND
        </button>
      </form>
    </section>
  );
};

export default Feedback;
