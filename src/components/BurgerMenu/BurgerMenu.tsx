import Logo from "../../assets/images/logo.png";

interface BurgerMenuProps {
  isOpen: boolean;
}
const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0  w-full h-full  shadow-lg transform transition-transform duration-300 z-10 bg-[#191919] md:h-[385px]  ${
        isOpen
          ? "translate-x-0 md:translate-y-0"
          : "translate-x-full  md:-translate-y-full"
      }`}
    >
      <div className="my-9 px-5 text-white md:px-[60px] md:mt-[50px] md:mb-[100px]">
        <img src={Logo} alt="Bose logo" className=" mb-14 w-[100px] h-3" />
        <ul className="flex flex-col gap-6 md:text-base ">
          <li>
            <a href="#">Characteristics</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Payment and delivey</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;

//! It work. intigrate in my code
// const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
//   return (
//     <div
//       className={`fixed inset-x-0 top-0 transform transition-transform duration-300 bg-[#191919] md:h-[385px] md:max-w-md mx-auto ${
//         isOpen ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="my-9 px-5 text-white md:px-[60px] md:mt-[50px] md:mb-[100px]">
//         <img src={Logo} alt="Bose logo" className="mb-14 w-[100px] h-3" />
//         <ul className="flex flex-col gap-6 md:text-base">
//           <li>
//             <a href="#" className="hover:border-b hover:border-white">
//               Characteristics
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:border-b hover:border-white">
//               History
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:border-b hover:border-white">
//               Reviews
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:border-b hover:border-white">
//               Payment and delivery
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
