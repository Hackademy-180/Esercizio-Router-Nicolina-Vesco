import { createBrowserRouter } from "react-router-dom"
import Homepage from "../views/Homepage.jsx"
import Layout from "../components/Layout.jsx"
import Posts from "../views/Posts.jsx"
import Login from "../views/Login.jsx"
import Register from "../views/Register.jsx"
import { getAllPostsLoader, getSinglePostLoader } from "./loaders.jsx"
import DetailView from "../views/DetailView.jsx"

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Homepage
            },
            {
                path: '/posts',
                Component: Posts,
                loader: getAllPostsLoader
            },
            {
                path: '/posts/detail/:id',
                Component: DetailView,
                loader: getSinglePostLoader

            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: 'Register',
                Component: Register
            }
        ]
    }
]);

export default router;