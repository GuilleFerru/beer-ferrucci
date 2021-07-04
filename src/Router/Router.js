import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';

import { Cart } from '../components/Cart/Cart';
import { NotFoundComponent } from '../components/NotFoundComponent/NotFoundComponent';
import { DialogContainer } from '../components/commonComponents/Dialog/DialogContainer';


export const Router = () => {
    return <Switch>
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
        <Route exact path="/dialogo">
            <DialogContainer />
        </Route>
        <Route path="/*">
            <NotFoundComponent />
        </Route>

    </Switch>
}



