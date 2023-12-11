import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import About from './pages/About';
import Chocolates from './pages/Chocolates';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/chocolates"}`} component={Chocolates} />
                <Route exact path={`${process.env.PUBLIC_URL + "/testimonial"}`} component={Testimonial} />
                <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}