import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {UserDetails} from "../pages/user-details";
import {UsersList} from "../pages/users-list";
import React, {FC} from "react";

export const Routes: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/users-list'} component={UsersList}/>
                <Route path={'/user/:id'} component={UserDetails}/>
                <Route path={'/'} exact>
                    <Redirect to={'/users-list'}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}