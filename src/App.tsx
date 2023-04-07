import './App.css';
import { Route, Switch } from 'react-router'; 
import { BrowserRouter } from 'react-router-dom'; 
import Menu from './utils/Menu';
import routes from './route-config'; 
import { useState } from 'react';
import AuthenticationContext from './auth/AuthenticationContext'; 
import { claim } from './auth/auth.model';

function App() { 
  const[claims, setClaims] = useState<claim[]>([
    {name: 'email', value: 'manuel.rodriguez15@libero.it'},
    {name: 'role', value: 'admin'}
  ]);
  function update(claims: claim[]){
    setClaims(claims);
  }
  return (
    <> 
    <BrowserRouter>
    <AuthenticationContext.Provider value={{claims, update}}>  
         <Menu/> 
      <div className='container'> 
        <Switch>
           {routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />)}
        </Switch>
      </div>
      </AuthenticationContext.Provider>
    </BrowserRouter>  
    </>
  );
}
 
export default App;
