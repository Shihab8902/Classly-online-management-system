
const AnimatedBackground = () => {
    return (
        <div className="absolute z-0 w-full h-screen overflow-hidden bg-transparent">

            <ul className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                    <li key={i} className={`circle circle-${i + 1}`} />
                ))}
            </ul>
        </div>
    );
};

export default AnimatedBackground;
