import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartEmpty from "../components/CartEmpty";
import CartItem from "../components/CartItem";
import { clearItems, selectCart } from "../redux/slices/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );
  const totalPriceAll = items.reduce(
    (sum: number, item: any) => sum + item.price * item.count,
    0
  );

  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">Shopping cart</h2>
          <div onClick={onClickClear} className="cart__clear">
            <span>Clear</span>
          </div>
        </div>
        <div className="content__items">
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>{totalCount} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>{totalPriceAll} ₽</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
