import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { About } from '../About/About';
import { Hire } from '../Hire/Hire';
import { Work } from '../Work/Work';

import { Home } from '../Home/Home';
import { Contact } from '../Contact/Contact'

import { render } from "@testing-library/react";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,

            xAcceleration: null,
            yAcceleration: null,
        }

        this.useMousePosition = this.useMousePosition.bind(this);



    }


    useMousePosition() {


        const updateMousePosition = e => {
            this.setState({
                x: (e.clientX / 200).toFixed(2),
                y: (e.clientY / 200).toFixed(2)
            });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);

    };


    render() {

        this.useMousePosition()

        return (

            <Router>
                <div className="Wrapper">

                    <div className="Shadow pointer" style={{ top: `${this.state.y}vh`, left: `${this.state.x}vw` }}></div>
                    <div className="Shadow motion" style={{ top: `${this.state.yAcceleration}vh`, left: `${this.state.xAcceleration}vw` }}></div>

                    <div className="App" >


                        <Link className="logo" to="/" >
                            <span>G</span>
                            <span>I</span>
                            <span>U</span>
                            <span>S</span>
                            <span>E</span>
                            <span>P</span>
                            <span>P</span>
                            <span>E</span>
                            <span>_</span>
                            <span>F</span>
                            <span>A</span>
                            <span>L</span>
                            <span>C</span>
                            <span>I</span>
                            <span>D</span>
                            <span>I</span>
                            <span>A</span>
                        </Link>



                        <Switch>

                            <Route exact path="/" component={Home} />
                            <Route path="/hire" component={Hire} />
                            <Route path="/about" component={About} />
                            <Route exact path="/work" component={Work} />
                            <Route path="/contact" component={Contact} />

                        </Switch>



                        <div className="footer">

                            <Link className="Link" to="/about">about</Link>
                            <Link className="Link" to="/contact">contact</Link>
                            <Link className="Link" to="/">home</Link>
                            <Link className="Link" exact="true" to="/work">projects</Link>
                            {/*<Link className="Link" to="https://drive.google.com/file/d/1A4kLpzpZCzlsQTMbXYSk_ttVhlC8Uw_Y/view?usp=sharing" download target="_blank">résumé</Link>
               */}
                        </div>

                    </div>

                </div>
            </Router>

        );
    }
}






