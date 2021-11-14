import React from 'react'
import Error404 from './pages/Error404';
import PreJunior from "./pages/PreJunior";
import {Switch, Redirect, Route} from "react-router-dom";
import Junior from "./pages/Junior";
import UpperJunior from "./pages/UpperJunior";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/Junior',
    UPPER_JUNIOR: '/Upper-Junior'
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={'/'} exact render={() => <Redirect to={PATH.JUNIOR}/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={'/'} exact render={() => <Redirect to={PATH.UPPER_JUNIOR}/>}/>
                <Route path={PATH.UPPER_JUNIOR} render={() => <UpperJunior/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
