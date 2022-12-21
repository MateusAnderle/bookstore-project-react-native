import React from 'react';
import { CartContextProvider } from './src/context/CartContext';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
    <CartContextProvider>
      <AppRoutes/>
    </CartContextProvider>
  )
}