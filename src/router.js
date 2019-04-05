// Theirs
import Vue from "vue";
import Router from "vue-router";

const requireComponent = require.context(
  LAB_PATH,
  true,
  /[\w-]+\.experiment.vue$/
);

const experiments = requireComponent.keys().map(e => {
  return {
    path: "/" + e.replace("./", "").replace(".experiment.vue", ""),
    component: requireComponent(e).default
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: experiments[0].component
    },
    ...experiments
  ]
});
