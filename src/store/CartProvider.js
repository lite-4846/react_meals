import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let UpdatedItems;

    if (existingCartItem) {
      const UpdatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      UpdatedItems = [...state.items];
      UpdatedItems[existingCartItemIndex] = UpdatedItem;
    } else {
      UpdatedItems = state.items.concat(action.item);
    }

    const UpdatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: UpdatedItems,
      totalAmount: UpdatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const UpdatedTotalAmount = state.totalAmount - existingCartItem.price;
    let UpdatedItems;
    
    if (existingCartItem.amount === 1) {
      UpdatedItems = state.items.filter(item => item.id !== action.id)
      
    } else {
      const UpdatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }
      UpdatedItems = [...state.items];
      UpdatedItems[existingCartItemIndex] = UpdatedItem;
    }

    return {
      items: UpdatedItems,
      totalAmount: UpdatedTotalAmount
    }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
