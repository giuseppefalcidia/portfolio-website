
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isAndroid, isIOS } from 'react-device-detect';
import { About, Hire, Work, Home, Contact } from '../index';
import { Logo, Footer, Burger, Menu, PopUp } from '../../COMPONENTS';
import { useMousePosition } from '../../UTILS';



export default function App() {

    const [open, setOpen] = useState(false);
    const node = React.useRef();
    const { x, y } = useMousePosition();

    const [deviceMotion, setDeviceMotion] = useState({ xAcceleration: null, yAcceleration: null });
    const [isSeen, setIsSeen] = useState({ seen: false }); //only for ios13



    //MOBILE SHADOW EFFECT
    const useIOS13MotionFunc = () => {

        DeviceMotionEvent.requestPermission().then(response => {

            if (response === 'granted') {
                console.log(`ios13+ response: ${response}`)
                console.log(`seen?: ${isSeen.seen}`);

                if (window.DeviceMotionEvent) {
                    console.log('we have motion')

                    const handleMotionEvent = event => {
                        requestAnimationFrame(() =>
                            setDeviceMotion({
                                xAcceleration: (-event.accelerationIncludingGravity.x + 9) / 1.713545626,
                                yAcceleration: (-event.accelerationIncludingGravity.y - 3) / 1.913545626,
                            }),

                        );
                    };

                    setIsSeen({ seen: !isSeen.seen })
                    console.log(`seen?: ${isSeen.seen}`);



                    window.addEventListener('devicemotion', handleMotionEvent, true);

                    return () => window.removeEventListener('devicemotion', handleMotionEvent);
                }
            } else {
                console.log(`ios13+ response: ${response}`);
                setIsSeen({ seen: !isSeen.seen })
                console.log(`seen?: ${isSeen.seen}`);
            }

        }).catch(console.error)

        return deviceMotion

    };

    const useRequestMotionPermission = () => {

        useEffect(() => {

            if (typeof DeviceMotionEvent == 'function' && typeof DeviceMotionEvent.requestPermission === 'function') {

                console.log('ios13+')

                setIsSeen({
                    seen: !isSeen.seen
                });


                console.log(isSeen.seen)


            } else {
                if (window.DeviceMotionEvent) {
                    console.log('non ios13+')
                    if (isIOS) {

                        console.log('iphone')

                        const handleMotionEvent = event => {
                            requestAnimationFrame(() =>
                                setDeviceMotion({
                                    xAcceleration: (-event.accelerationIncludingGravity.x + 9) / 1.713545626,
                                    yAcceleration: (-event.accelerationIncludingGravity.y - 3) / 1.913545626,
                                }),
                            );
                        };

                        window.addEventListener('devicemotion', handleMotionEvent, true);
                        window.removeEventListener('devicemotion', handleMotionEvent);

                    } else if (isAndroid) {

                        console.log('Android')

                        const handleMotionEvent = event => {
                            requestAnimationFrame(() =>
                                setDeviceMotion({
                                    xAcceleration: (-event.accelerationIncludingGravity.x + 9) / 1.713545626,
                                    yAcceleration: (event.accelerationIncludingGravity.y - 3) / 1.913545626,
                                }),
                            );
                        };

                        window.addEventListener('devicemotion', handleMotionEvent, true);
                        return () => window.removeEventListener('devicemotion', handleMotionEvent);

                    } else {
                        console.log('Desktop')

                        const handleMotionEvent = event => {
                            requestAnimationFrame(() =>
                                setDeviceMotion({
                                    xAcceleration: (-event.accelerationIncludingGravity.x + 9) / 1.713545626,
                                    yAcceleration: (-event.accelerationIncludingGravity.y + 3) / 1.913545626,
                                }),
                            );
                        };

                        window.addEventListener('devicemotion', handleMotionEvent, true);
                        return () => window.removeEventListener('devicemotion', handleMotionEvent);
                    }
                }
            };
        }, []);

        return { deviceMotion, isSeen }

    }

    useRequestMotionPermission()

    const useOutsideClick = (ref, callback) => {
        const handleClick = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };

        useEffect(() => {
            document.addEventListener("click", handleClick);

            return () => {
                document.removeEventListener("click", handleClick);
            };
        });
    };

    useOutsideClick(node, () => setOpen(false));


    return (

        <Router>
            <div className="Wrapper">

                <div className="Shadow pointer" style={{ top: `${y}vh`, left: `${x}vw` }}></div>
                <div className="Shadow motion" style={{ transform: `translate(${deviceMotion.xAcceleration * 4.2}px, ${deviceMotion.yAcceleration * 4.3}px)` }}></div>

                <div className="App" >


                    <Logo />

                    <div ref={node} className="burgerMenu">
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />
                    </div>

                    {isSeen.seen ? <PopUp onClick={useIOS13MotionFunc} /> : null}

                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route path="/hire" component={Hire} />
                        <Route path="/about" component={About} />
                        <Route exact path="/work" component={Work} />
                        <Route path="/contact" component={Contact} />

                    </Switch>

                    <Footer />


                </div>

            </div>
        </Router>

    );
}

