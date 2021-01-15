import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"
import Projects from "./views/Projects.vue"
import Project from "./views/Project.vue"
import Education from "./views/Education.vue"
import WorkExperience from "./views/WorkExperience.vue"

const DEFAULT_TITLE = "Axel Masson";

Vue.use(Router);

export default new Router({

    mode: "history",
    base: process.env.BASE_URL,
    beforeEach:((toRoute, fromRoute, next) => {
        window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : DEFAULT_TITLE;
      
        next();
    }),
    routes : [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                title: DEFAULT_TITLE
              }
        },
        {
            path: "/about",
            name: "about",
            component: About,
            meta: {
                title: DEFAULT_TITLE
            }
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact,
            meta: {
                title: DEFAULT_TITLE
            }
        },
        {
            path: "/projects",
            name: "projects",
            component : Projects,
            meta: {
                title: DEFAULT_TITLE
            }
        },
        {
            path: "/education",
            name: "education",
            component: Education,
            meta : {
                title: DEFAULT_TITLE
            }
        },
        {
            path: "/experiences",
            name: "Work experiences",
            component: WorkExperience,
            meta : {
                title: DEFAULT_TITLE
            }
        },
        {
            path: "/project/:Slug",
            name: "project",
            component: Project,
            meta: {
                title: DEFAULT_TITLE
            }
        },
        {
            path: "/CryptOverview",
            name : "Cryptos overview",
            component : "",
            meta: {
                title : DEFAULT_TITLE
            }
        }
    ]

   
});
