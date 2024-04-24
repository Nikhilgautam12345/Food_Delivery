import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage.jsx";
import WatchlistPage from "./pages/WatchlistPage.jsx";
import IndividualHotel from "./pages/IndividualHotel.jsx";
import ItemHotels from "./pages/ItemHotels.jsx";
import { store } from './features/store.js'
import { Provider } from 'react-redux'
import  { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: ":productId", element: <IndividualHotel /> },
      { path: ":id/:cuisine", element: <ItemHotels /> },
      {
        path: "watchlist",
            element: <WatchlistPage />,
      }
    ],
  },{
    path: "*",
        element: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>  
    <RouterProvider router={router} />
    <Toaster  position="top-left" toastOptions={{duration:500}}/>
  </Provider>
);
