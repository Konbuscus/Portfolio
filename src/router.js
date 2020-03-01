import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"
import Projects from "./views/Projects.vue"
import Project from "./views/Project.vue"

Vue.use(Router);

export default new Router({

    mode: "history",
    base: process.env.BASE_URL,
    routes : [
        {
            path: "/",
            name: "home",
            component: Home,
            title: "Axel Masson"
        },
        {
            path: "/about",
            name: "about",
            component: About,
            title: "Axel Masson"
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact,
            title: "Axel Masson"
        },
        {
            path: "/projects",
            name: "projects",
            component : Projects,
            title: "Axel Masson"
        },
        {
            path: "/project/:Slug",
            name: "project",
            component: Project,
            title: "Axel Masson"
        }
    ]
});