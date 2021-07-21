import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../components/Cart/Cart';
import { NotFoundComponent } from '../components/NotFoundComponent/NotFoundComponent';
import { BeersContainer } from '../screens/BeersContainer/BeersContainer';


export const Router = () => {
    return <Switch>
        <Redirect from="/beer-ferrucci" to="/" />
        <Route exact path="/">
            <ItemListContainer />
        </Route>
        <Route path="/category/:categoryId">
            <ItemListContainer />
        </Route>
        <Route path="/item/:id">
            <ItemDetailContainer />
        </Route>
        <Route path="/cart">
            <Cart />
        </Route>
        <Route exact path="/beers">
            <BeersContainer />
        </Route>
        <Route path="/*">
            <NotFoundComponent />
        </Route>

    </Switch>
}



