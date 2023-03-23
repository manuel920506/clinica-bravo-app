import Blog from "./blog/blogIndices"; 
import LandingPage from "./LandingPage";
import RedirectLandingPage from "./utils/redirectLandingPage";

const routes = [ 
    {path: '/blog', component: Blog, exact: true},
    
    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectLandingPage}
];
export default routes;