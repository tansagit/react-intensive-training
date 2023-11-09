import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useLocalStorage("order", null);
  const navigate = useNavigate();

  const getTotalCartAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.amount, 0);
  };

  const addToCart = product => {
    setCartItems(prev => {
      const isProductInCart = prev.some(item => item.id === product.id);
      if (isProductInCart) {
        return prev.map(item =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  const removeFromCart = itemId => {
    setCartItems(prev => {
      const index = prev.findIndex(item => item.id === itemId);
      if (index >= 0) {
        prev.splice(index, 1);
      }
      return [...prev];
    });
  };

  const updateCartItem = (itemId, newAmount) => {
    if (newAmount === 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev => {
      return prev.map(item =>
        item.id === itemId ? { ...item, amount: newAmount } : item
      );
    });
  };

  const checkout = order => {
    setOrder({ ...order, orderItems: [...cartItems] });
    setCartItems([]);
    navigate("/order-result", { replace: true });
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export const useShoppingCart = () => {
  return useContext(ShopContext);
};
