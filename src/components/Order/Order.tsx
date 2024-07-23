import BlackHeadphones from "assets/images/choose_black_headphones/choose_black_headphones-phone.jpg";
import GrayHeadphones from "assets/images/choose_gray_headphones/choose_gray_headphones-phone.jpg";
import RedArrow from "components/RedArrow";

const Order = () => {
  return (
    <section>
      <h2 id="payment">bose nc 700</h2>
      <div>
        <img src={BlackHeadphones} alt="black phones" />
        <img src={GrayHeadphones} alt="gray headphones" />
        <form>
          <label>
            <input type="radio" name="color" value="black" checked />
            black
          </label>
          <label>
            <input type="radio" name="color" value="gray" />
            gray
          </label>
        </form>
        <ul>
          <li>
            <p>Availability in stores</p>
            <RedArrow />
          </li>
          <li>
            <p>Characteristics</p>
            <RedArrow />
          </li>
          <li>
            <p>Payment and delivery methods</p>
            <RedArrow />
          </li>
        </ul>
        <p>14 999 UAH</p>
        <button type="button">Order</button>
      </div>
    </section>
  );
};

export default Order;
