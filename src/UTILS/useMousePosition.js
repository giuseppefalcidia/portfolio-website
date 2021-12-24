import { useState, useEffect } from 'react';

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = e => {
        setMousePosition({
            x: (e.clientX / 200).toFixed(2),
            y: (e.clientY / 200).toFixed(2)
        });
    };

    useEffect(() => {

        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};