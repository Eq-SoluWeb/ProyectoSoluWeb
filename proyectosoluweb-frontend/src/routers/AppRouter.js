import {BrowserRouter , Switch, Route}  from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import roles from '../helpers/roles'
import routes from '../helpers/routes'

import AccountPage from '../pages/admin/AccountPage'
import UserPage from '../pages/admin/UserPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MyProjectPage from '../pages/MyProjectPage'

import NotFoundPage from '../pages/NotFoundPage'
import ProjectsPage from '../pages/ProjectsPage'
import RegisterPage from '../pages/RegisterPage'


export default function AppRouter() {
    return (
      
 
      
      <Switch>
            <Route exact path={routes.home} component={HomePage}/>
            <Route exact path={routes.login} component={LoginPage}/>
            <Route exact path={routes.register} component={RegisterPage}/>
            
            <Route exact path={routes.projects} component={ProjectsPage}/>
            <Route exact path={routes.myProject()} component={MyProjectPage}/>
            <Route exact path={routes.users} component={UserPage}/>
            <Route hasRole={roles.lider} exact path={roles.lider} component={AccountPage}/>
            <Route  path="*" component={NotFoundPage}/>
     </Switch>
    
     
    )
}
