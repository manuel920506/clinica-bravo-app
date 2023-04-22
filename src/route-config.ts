import Register from "./auth/Register";
import Login from "./auth/Login";
import Blog from "./blog/blogIndices"; 
import LandingPage from "./LandingPage";
import RedirectLandingPage from "./utils/redirectLandingPage";
import CreateTopic from "./blog/CreateTopic";
import DetailTopic from "./blog/DetailTopic";

const routes = [ 
    {path: '/blog', component: Blog, exact: true},
    
    {path: '/blog/create', component: CreateTopic, isAdmin: true}, 
    {path: '/blog/:id(\\d+)', componente: DetailTopic},      

    {path: '/register', component: Register},
    {path: '/login', component: Login},
    
    {path: '/', component: LandingPage, exact: true, isAdmin: false},
    {path: '*', component: RedirectLandingPage, isAdmin: false}
];
export default routes;