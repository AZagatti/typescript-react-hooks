import React, { useReducer } from 'react';

interface ICart {
  products: string[];
  shipping_value?: number;
}

type TCartAction = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT';
};

const AppContext: React.FC = () => {
  const cart = useReducer(
    (state: ICart, action: TCartAction) => {
      switch (action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'Produto novo']
          };
        default:
          return state;
      }
    },
    {
      products: [],
      shipping_value: 0
    }
  );

  return (
    <ul>
      <p>Oi</p>
    </ul>
  );
};

export default AppContext;
