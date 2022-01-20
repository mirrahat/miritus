import Home from "../views/home";
import ServiceHome from "../views/servicesHome";


const routes = [
    {
        components: <Home/>,
        to: '/'
    },
    {
        components: <ServiceHome />,
        to: '/services'
    }
];

export default routes;