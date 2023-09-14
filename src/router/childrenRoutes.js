import { Carousel } from "reactstrap";
import Index from "views/Index";
import HomeIndex from "views/examples/pruebaIndex";
import LandingPage from "views/examples/JardinLanding";
import CreateProduct from "views/index-sections/CreateProduct";
import SignIn from "views/index-sections/SignIn";
import SignUp from "views/index-sections/SignUp";
import Users from "views/index-sections/Users";
import Productos from "views/examples/Productos";
import PanelCrud from "views/examples/PanelCrud";

export const user = ([
    {
        path: '',
        element: <Index />
    },
    {
        path: 'prueba',
        element: <LandingPage />
    },
    {
        path: 'productos',
        element: <Productos />
    },
])

export const auth = ([
    {
        path: '',
        element: <SignIn />
    },
    {
        path: 'registrarse',
        element: <SignUp />
    },
    {
        path: 'usuarios',
        element: <Users />
    },
])
export const admin = ([
   /*  {
        path: '',
        element: <HomeIndex />
    }, */
    {
        path: '',
        element: <PanelCrud />
    },
    {
        path: 'usuarios',
        element: <Users />
    },
])