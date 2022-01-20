import Home from "../views/home";
import Service from "../views/services";


const routes = [
    {
        components: <Home/>,
        to: '/'
    },
    {
        components: <Service />,
        to: '/services'
    }
];

export default routes;