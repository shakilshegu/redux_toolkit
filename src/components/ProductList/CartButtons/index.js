import React, { useMemo } from "react";
import BeforeCart from "./BeforeCart";
import AfterCart from "./AfterCart";
import { useSelector } from "react-redux";

const CardButton = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);

  const cartCount = useMemo(() => {
    return cartList?.find((item) => item?.id === product.id)?.count;
  }, [cartList]);

  return (
    <>
      {cartCount > 0 ? (
        <AfterCart productID={product?.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
};

export default CardButton;
