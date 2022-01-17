import Home from "../views/home";
import Home2 from "../views/home2";


const routes = [
    {
        components: <Home/>,
        to: '/'
    },
    {
        components: <Home2 />,
        to: '/home2'
    }
];

export default routes;