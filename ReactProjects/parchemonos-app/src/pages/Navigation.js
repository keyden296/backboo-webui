import React from 'react'
import { Home } from './Home'
import { Detail } from './Detail'
import { Login } from './Login'
import { Register } from './Register'
import { Booking } from './Booking'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import SpikeClassComponent from '../spikes/SpikeClassComponet'
import { SpikeFunctionComponent } from '../spikes/SpikeFunctionComponent'
import { Rate } from './rate/rate'

export const Navigation = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/booking/:id" component={Booking} />
            <Route path="/class" component={SpikeClassComponent}/>
            <Route path="/function" component={SpikeFunctionComponent}/>
            <Route path="/rate/:id" component={Rate}></Route>
        </Switch>
    </Router>
)