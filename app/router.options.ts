import type { RouterConfig } from '@nuxt/schema'
// https://nuxt.com/docs/guide/going-further/custom-routing
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      redirect: '/dashboard',
    },
    ..._routes,
  ],
}
