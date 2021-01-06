import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Redirect from './Redirect';
import ItemList from '../thunk/components/ItemList';
class Ground_app extends Component {
    render() {        
        return (
            <Switch>
                <Route exact path='/' component={Redirect} />             
                <Route path='/thunk' component={ ItemList } />
            </Switch>
        )
    }
}

export default Ground_app;