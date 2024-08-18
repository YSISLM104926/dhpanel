import { createBrowserRouter } from "react-router-dom";
import App from '../App'; // or './components/App' if it's in a subfolder
import AddPhoto from "../components/AddPhoto";
import Review from "../components/Review";
import { AddItem } from "../components/AddItem";
import { InventoryDetails } from "../components/InventoryDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/add-item",
        element: <AddItem />,
    },
    {
        path: "/add-inventory-details",
        element: <InventoryDetails />,
    },
    {
        path: "/add-photo",
        element: <AddPhoto />,
    },
    {
        path: "/add-review",
        element: <Review />,
    }
])

