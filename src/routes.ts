import { Dashboard, Signup } from "./views";

export default [
  {
    path: '/signup',
    exact: true,
    component: Signup,
    name: 'Signup'
  },
  {
    path: '/',
    exact: true,
    component: Dashboard,
    name: 'Dashboard'
  },
  {
    path: '/members',
    exact: true,
    component: Dashboard,
    name: 'Members'
  },
]