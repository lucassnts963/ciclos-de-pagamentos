import React from 'react'
import {Route, HashRouter, Redirect} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <HashRouter>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/billingCycles' component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </HashRouter>
)