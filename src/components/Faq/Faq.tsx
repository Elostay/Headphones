import Question from "components/Question";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      number: "01",
      text: "How to pair with a mobile device?",
      answer:
        "Firstly, make sure your headphones are turned on with a single press of the top button on the back of the right earbud. Then press and hold the power button for 3 seconds to put the headphones into pairing mode. Please note that if you connect the headphones for the first    time, they will automatically turn on immediately in this pairing  mode. Voice prompts will provide you with additional instructions. We recommend that you use the Bose Music app to complete the pairing process, however you can also use the Bluetooth settings on your device.",
    },
    {
      number: "02",
      text: "What is the wireless range of the Bose NC 700?",
      answer:
        "The wireless range of the Bose NC 700 headphones is approximately 33 feet (10 meters) when used with Bluetooth-enabled devices.",
    },
    {
      number: "03",
      text: "How do I fold the Bose NC 700 headphones for storage?",
      answer:
        "The Bose NC 700 headphones do not fold like some other models. Instead, you can rotate the earcups to lay flat. To store them, place the headphones with the earcups facing down in the custom-designed carrying case that comes with them. The case also has a small compartment for storing the USB charging cable and audio cable, keeping everything organized and protected.",
    },
    {
      number: "04",
      text: "Does the guarantee work internationally?",
      answer:
        "Yes, the guarantee for Bose products, including the NC 700 headphones, generally works internationally. However, it's important to check the specific terms and conditions of the warranty as they can vary by country and region. You may need to contact Bose customer support in your country to understand the exact process for warranty claims and support services available internationally",
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="max-w-[280px] md:max-w-full">
      <h2 id="faq">FAQ</h2>
      <ul className="md:w-[648px] xl:w-[1058px]">
        {items.map(({ number, text, answer }, index) => (
          <Question
            key={index}
            number={number}
            text={text}
            answer={answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Faq;
