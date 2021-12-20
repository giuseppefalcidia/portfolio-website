import React from 'react';

const [deviceMotion, setDeviceMotion] = useState({ xAcceleration: null, yAcceleration: null });
const [isSeen, setIsSeen] = useState({ seen: false });

export const useIOS13MotionFunc = () => {

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

export const useRequestMotionPermission = () => {

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

    return { deviceMotion, isSeen, }

}
