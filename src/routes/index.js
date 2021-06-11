import {Switch, Route, Redirect } from 'react-router-dom'
import { Homepage} from '../pages'

function Routes() {
    return (
        <Switch>
            <Redirect from={'/'} to={'/pages/1'} exact/>
            <Route path="/pages/:page+" component={Homepage} exact/>
        </Switch>
    )
}
export default Routes;