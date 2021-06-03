import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import SinglePostPage from "./pages/SinglePostPage";


export const Routes:React.FC = () => {
    return (
    <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/post/:id" component={SinglePostPage}/>
        <Redirect to="/" />
    </Switch>
    )
}