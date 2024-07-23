import WomanWork from "assets/images/woman_work/woman_work-phone.png";

const Feedback = () => {
  return (
    <div>
      <img src={WomanWork} alt="Woman work in headphones" />
      <h2>Feedback</h2>
      <p>We'll help you find the right headphones for you.</p>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your e-mail" />
        <textarea
          name="message"
          placeholder="Send us a message"
          className=" resize-none"
        ></textarea>
        <p>
          <input type="checkbox" />
          <p>I agree to the privacy policy</p>
        </p>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Feedback;
