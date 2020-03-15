import { Dashboard, Signup } from "./views";

export default [
  {
    path: '/signup',
    exact: true,
    component: Signup,
    name: 'Signup',
    public: true
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