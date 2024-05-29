import React, { useEffect, useRef } from 'react';

const MyVideo = () => {
    const videoRef = useRef(null); // Create a ref for the video element

    useEffect(() => {
        // Function to handle intersection observer
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        // Create IntersectionObserver instance
        const observer = new IntersectionObserver(handleIntersection, options);
        
        // Start observing the video element
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Cleanup function
        return () => {
            observer.disconnect(); // Disconnect the observer when component unmounts
        };
    }, []); // Run only once after the component mounts

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <video ref={videoRef} controls loop style={{ height: '900px' }}>
                <source src={process.env.PUBLIC_URL + '/gotimellc.mp4'} />
            </video>
        </div>
    );
};

export default MyVideo;