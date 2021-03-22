import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import Gallery from "../views/Gallery.vue";
import Employees from "../views/Employees.vue"
import Movies from "../views/Movies.vue"
import Profile from "../views/Profile.vue"
// import { component } from "vue/types/umd";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/products",
        name: "Products",
        component: Products
    },
    {
        path:"/blog",
        name: "Blog",
        component: Blog
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact    
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery
    },
    {
        path: "/employees",
        name: "Employees",
        component: Employees
    },
    {
        path: "/movies",
        name: "Movies",
        component: Movies
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
