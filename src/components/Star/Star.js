import React, { useEffect, useState } from 'react';

const getRandomDuration = () => {
    return Math.random() * (20000 - 3000) + 3000;
};

const getRandomPosition = () => {
    const getRandomCoordinate = () => {
        let coordinate = Math.random() * 100;
        while (coordinate >= 40 && coordinate <= 60) {
            coordinate = Math.random() * 100;
        }
        return coordinate;
    };
    return {
        top: `${getRandomCoordinate()}%`,
        left: `${getRandomCoordinate()}%`,
    };
};

const Star = () => {
    const [position, setPosition] = useState(getRandomPosition());
    const [color, setColor] = useState('bg-sky-500');
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const updatePositionAndColor = () => {
            setVisible(false);

            setTimeout(() => {
                setPosition(getRandomPosition());

                const colors = [
                    'bg-sky-500', 'bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500',
                    'bg-pink-500', 'bg-orange-500', 'bg-indigo-500', 'bg-teal-500', 'bg-blue-500',
                    'bg-lime-500', 'bg-amber-500', 'bg-fuchsia-500', 'bg-cyan-500', 'bg-rose-500',
                    'bg-violet-500', 'bg-emerald-500', 'bg-turquoise-500', 'bg-coral-500', 'bg-peach-500'
                ];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                setColor(randomColor);

                setVisible(true);
            }, 500);
        };

        updatePositionAndColor();
        const interval = setInterval(updatePositionAndColor, getRandomDuration());

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`absolute transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ top: position.top, left: position.left }}
        >
            <span className="relative flex w-1 h-1">
                <span className={`absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping ${color}`}></span>
                <span className={`relative inline-flex rounded-full h-1 w-1 ${color}`}></span>
            </span>
        </div>
    );
}

export default Star;
