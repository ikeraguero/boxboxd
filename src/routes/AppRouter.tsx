import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {path: "/", element: <Home />}
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}