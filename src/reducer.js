const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };
      
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      };

    case 'INCREASE':
      // create a temp value to protect the state property
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      });
      return { ...state, cart: tempCart };

    case 'DECREASE':
      // create a temp value to protect the state property, also if amount is zero - remove item from the list
      let temporaryCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);

      return { ...state, cart: temporaryCart }
      
    default:
      return state;
  }
};

export default reducer;