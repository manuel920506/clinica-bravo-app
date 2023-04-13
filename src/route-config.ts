import Register from "./auth/Register";
import Blog from "./blog/blogIndices"; 
import LandingPage from "./LandingPage";
import RedirectLandingPage from "./utils/redirectLandingPage";

const routes = [ 
    {path: '/blog', component: Blog, exact: true, isAdmin: true},

    {path: '/register', component: Register},
    
    {path: '/', component: LandingPage, exact: true, isAdmin: false},
    {path: '*', component: RedirectLandingPage, isAdmin: false}
];
export default routes;