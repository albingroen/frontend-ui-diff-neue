import { Dashboard } from "./views";

export default [
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