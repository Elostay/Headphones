import WomanWorkPhone from "assets/images/woman_work/woman_work-phone.png";
import WomanWorkTablet from "assets/images/woman_work/woman_work-tablet.png";
import WomanWorkLaptop from "assets/images/woman_work/woman_work-laptop.png";
import Modal from "components/Modal";
import useModalToggle from "hooks/useModalToggle";
import { FormEvent, useState } from "react";

const Feedback = () => {
  const [filledForm, setFilledForm] = useState(false);
  const modalProps = useModalToggle();
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const agreeCheckbox = form.elements.namedItem("policy") as HTMLInputElement;
    const checkedCheckbox = agreeCheckbox.checked;

    if (!checkedCheckbox || !name || !email || !message) {
      setFilledForm(false);
    }

    if (checkedCheckbox && name && email && message) {
      setFilledForm(true);
      setName(name);
      form.reset();
    }
  };

  return (
    <section className="pb-[72px] xl:pb-[170px] ">
      <div className="xl:relative left-1/2 right-1/2 xl:ml-[-51vw] xl:mr-[-51vw] xl:w-screen ">
        <picture className="md:mr-[60px] lg:mr-[150px] shrink-0  xl:relative top-0 left-[100px] xl:mr-0 xl:w-full custom-calc-left">
          <source srcSet={WomanWorkLaptop} media="(min-width: 1280px)" />
          <source srcSet={WomanWorkTablet} media="(min-width: 768px)" />

          <img
            className="xs:m-auto"
            src={WomanWorkPhone}
            alt="Woman work in headphones"
          />
        </picture>
      </div>

      <div className="xl:flex xl:mt-[170px] gap-[150px]">
        <div className="xl:w-[400px]">
          <h2 style={{ marginTop: "16px" }}>Feedback</h2>
          <p className=" mb-10 text-base md:text-xl xl:text-2xl">
            We'll help you find the right headphones for you.
          </p>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8 xl:w-[510px]">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="pb-4 bg-inherit border-b border-[#2B2B2B] placeholder:text-[#5E5E5E] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              className="pb-4 bg-inherit border-b border-[#2B2B2B] placeholder:text-[#5E5E5E] focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Send us a message"
              className="resize-none pb-4 bg-inherit border-b border-[#2B2B2B] placeholder:text-[#5E5E5E] focus:outline-none xl:pb-14"
            ></textarea>
          </div>
          <div className="mb-10 mt-10 xl:mb-[100px]">
            <label className="custom-checkbox ">
              <input type="checkbox" name="policy" />
              <span className="checkmark mr-6 xl:mr-8"></span>I agree to the
              <a href="https://www.google.com.ua/" className="underline ml-1">
                privacy policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            onClick={modalProps.onOpen}
            className=" font-semibold text-base px-[120px] py-5 border-2  border-[#DF3D3A] xl:w-full md:w-[294px]"
          >
            SEND
          </button>
        </form>
      </div>
      {filledForm ? (
        <Modal {...modalProps}> {name}, thank you for your feedback!</Modal>
      ) : (
        <Modal {...modalProps}>Fill empty fields!</Modal>
      )}
    </section>
  );
};

export default Feedback;
