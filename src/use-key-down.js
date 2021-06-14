import { useState, useEffect } from 'react';

export default function useKeyDown() {
    // State for keeping track of whether key is pressed
    const [slide, setSlide] = useState(0);
    const [slideProgress, setSlideProgress] = useState(0);
    const maxProgressPerSlide = [5, 4];
    let slideTmp = 0;
    let slideProgressTmp = 0;
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key === " " || key === "ArrowDown" || key === "ArrowRight") {
            if(slideProgressTmp >= maxProgressPerSlide[slideTmp]) {
                if (slideTmp < maxProgressPerSlide.length - 1) {
                    console.log("hey")
                    slideTmp++;
                    setSlide(slideTmp+1);
                    console.log(slideTmp + "  llllllllllllllllllllllllllllllll")
                    slideProgressTmp = 0;
                    setSlideProgress(0);
                }
            } else {
                slideProgressTmp++;
                setSlideProgress(slideProgressTmp+1);
            }
        }
        if (key === "Backspace" || key === "ArrowUp" || key === "ArrowLeft") {
            if(slideProgressTmp <= 0) {
                if (slideTmp > 0) {
                    slideTmp--;
                    setSlide(slideTmp-1);
                    slideProgressTmp = maxProgressPerSlide[slideTmp];
                    setSlideProgress(maxProgressPerSlide[slideTmp]);
                }
            } else {
                slideProgressTmp--;
                setSlideProgress(slideProgressTmp-1);
            }
        }

        console.log(key.toString());
        console.log("TMP Slide: " + slideTmp);
        console.log("TMP Slide Progress: " + slideProgressTmp);
        console.log("TMP Max Slide Progress: " + maxProgressPerSlide[slideTmp]);
        console.log("Slide: " + slideTmp);
        console.log("Slide Progress: " + slideProgressTmp);
        console.log("Max Slide Progress: " + maxProgressPerSlide[slideTmp]);
    }

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return [slide, slideProgress];
}