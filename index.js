import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./app";
import Restaurants from "./src/components/restaurants/Restaurants";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import PageNotFound from "./src/components/PageNotFound";
import Cart from "./src/components/cart/Cart";
import RestaurantMenu from "./src/components/restaurants/RestautantMenu";
import Shimmer from "./src/components/shimmer/Shimmer";
// import Grocery from "./src/components/Grocery/Grocery";

// Lazy Loading
// Chunking
// Dynamic Loadin
// OnDemand Load
const Grocery = lazy(()=> import('./src/components/Grocery/Grocery'));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Restaurants /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/grocery", element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);

// const root = ReactDOM.createElement(document.getElementById('root'));
// root.render(<App />);
