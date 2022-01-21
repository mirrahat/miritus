import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';

const routes = [
    {
        components: <Home/>,
        to: '/'
    },
    {
        components: <Service />,
        to: '/services'
    },
    {
        components: <ContactUs />,
        to: '/contactUs'
    }
];

export default routes;