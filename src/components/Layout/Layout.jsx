import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { About } from '../AboutUs/AboutUs'
import Contact from '../Contact/Contact'
import { FAQ } from '../FAQ/FAQ'
import { Home } from '../Home/Home'
import { Navabar } from '../Navbar/Navabar'


const Layout = () => {
    return (
        <>
            <Navabar />
            <div >

                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about-us" component={About}></Route>
                    <Route path="/faq" component={FAQ} />
                    <Route path="/contact" component={Contact}></Route>
                    {/* <Route>404 Not Found</Route> */}
                </Switch>
            </div>
        </>
    )
}

export default Layout
