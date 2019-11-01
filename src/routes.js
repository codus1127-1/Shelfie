import React from 'react'
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import {Switch, Route} from 'react-router-dom'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path ='/add' component={Form}/>
        <Route path='/edit/:id' component={Form}/>
    </Switch>
)