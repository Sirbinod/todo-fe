import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./page";
import ErrorPage from "./page/error";
import { CreateTodo } from "./page/Todo/Create";
import { EditTodo } from "./page/Todo/Edit";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "create",
    element: <CreateTodo />,
    },
    {
    path: "edit/:id",
    element: <EditTodo />,
    },
    
]);
  return (
          <RouterProvider router={router} />
  );
}

export default App;
