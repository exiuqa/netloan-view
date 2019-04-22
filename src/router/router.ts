export const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import("@/views/user/login.vue")
  },
  {
    path: "/component",
    name: "component",
    meta: {
      title: "组件说明"
    },
    component: () => import("@/views/components/ComponentPage.vue")
  },
  {
    path: "*",
    component: () => import("@/views/exception/404.vue")
  }
]