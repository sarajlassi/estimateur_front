import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "../views/Layout.vue";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home, 
        meta: {
          pageTitle: 'Home Page',
          breadcrumb: [
            {
              text: 'Home Page',
              active: true,
            },
          ],
        },
      },
      {
        path: "/about-us",
        name: "AboutUs",
        component: AboutUs,
        meta: {
          pageTitle: 'AboutUs Page',
          breadcrumb: [
            {
              text: 'AboutUs Page',
              active: true,
            },
          ],
        },
      },
      {
        path: "*",
        name: "NotFound",
        component: NotFound,
        meta: {
          pageTitle: 'Not found',
          breadcrumb: [
            {
              text: 'Not found',
              active: true,
            },
          ],
        },
      },
    ]
  } 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      })
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
