import { RouteObject, useRoutes, Navigate } from 'react-router-dom'
import Home from '../views/Home'
import User from '../views/User'
import Layout from '../views/layout'

export const router_item: Array<object> = [
    { path: '/', key: '/', label: '首页', element: <Navigate to="/layout"></Navigate> },
    {
        path: '/layout',
        key: '/layout',
        element: <Layout></Layout>,
        label: '控制台',
        children: [
            {
                path: 'user', key: 'user', label: '用户', element: <User></User>, index: true
            },
            {
                path: 'home', key: 'home', label: '首页', element: <Home></Home>
            }
        ]
    }
]

const GetRouters = () => {
    const routes = useRoutes(router_item)
    return routes
}
export default GetRouters
