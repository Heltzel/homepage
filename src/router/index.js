import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Marc Heltzel - Home'
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: 'Marc Heltzel - Contact'
    }
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: 'Marc Heltzel - About'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
