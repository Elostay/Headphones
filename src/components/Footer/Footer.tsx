const Footer = () => {
  return (
    <footer className="w-full pb-[52px]">
      <ul className="text-[#5A5A5A] mb-[52px] flex flex-col gap-6">
        <li className="flex justify-between">
          <a href="#characteristics">Characteristics</a>

          <a href="#payment">Payment and delivery</a>
        </li>
        <li className="flex justify-between ">
          <a href="#history">History</a>

          <a
            href="https://www.google.com.ua/maps"
            target="_blank"
            rel="noreferrer"
          >
            Store addresses
          </a>
        </li>
        <li className="flex justify-between ">
          <a href="#reviews">Reviews</a>

          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <p>
        <a className="text-base text-white" href="tel:+88001111111">
          8 (800) 111-11-11
        </a>
      </p>
    </footer>
  );
};

export default Footer;
