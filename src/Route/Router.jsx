import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Faqs from "../Pages/FAQs/Faqs";
import ProfileCard from "../Pages/ProfileCard/ProfileCard";
import Counter from "../Pages/Counter/Counter";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />,
        children : [
            {
                path : 'faqs',
                element : <Faqs />
            },
            {
                path : 'profile',
                element : <ProfileCard />
            },
            {
                path : 'counter',
                element : <Counter/>
            }
        ]
    }
])

export default router;