import Home from './pages/home'
import List from './pages/list'
import App from './App'
const routes = [
  {
    component: App,
    routes: [
        {
            path: "/",
            exact: true,
            component: Home
        },
        {
            path: "/list",
            component: List
        },
        {
            path: "/child/:id",
            component: List,
            routes: [
                {
                    path: "/child/:id/grand-child",
                    component: List
                }
            ]
        }
    ]
  }
];

export default routes