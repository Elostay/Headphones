const Footer = () => {
  return (
    <footer className="w-full pb-[52px] md:flex items-end justify-between md:pb-0 md:w-[648px] xl:w-[1170px]">
      <ul className="text-[#5A5A5A] mb-[52px] flex flex-col gap-6 md:w-[400px] xl:flex-row xl:w-[615px] ">
        <li className="flex justify-between xl:gap-[50px]">
          <a href="#characteristics">Characteristics</a>

          <a href="#payment" className="xl:whitespace-nowrap">
            Payment and delivery
          </a>
        </li>
        <li className="flex justify-between xl:gap-[50px]">
          <a href="#history">History</a>

          <a
            href="https://www.google.com.ua/maps"
            target="_blank"
            rel="noreferrer"
            className="xl:whitespace-nowrap"
          >
            Store addresses
          </a>
        </li>
        <li className="flex justify-between xl:gap-[50px] ">
          <a href="#reviews">Reviews</a>

          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <p className="md:mb-[52px]">
        <a className="text-base text-white" href="tel:+88001111111">
          8 (800) 111-11-11
        </a>
      </p>
    </footer>
  );
};

export default Footer;
