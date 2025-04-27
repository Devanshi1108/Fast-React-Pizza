import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateUser from "./features/user/CreateUser";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import MakePriority from "./features/order/MakePriority";
import { action as MakePriorityAction } from "./features/order/MakePriority";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderID",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action: MakePriorityAction,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/user",
          element: <CreateUser />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
