import { useState, useEffect } from 'react';
import Overview from "./Overview";
import DLT from "./DLT";
import Bitcoin from "./Bitcoin";
import Konten from "./Konten";
import Transactions from "./Transactions";
import { CSSTransition } from 'react-transition-group';
import './SlideShow.css';
import './arrow.css';
import Blockchain from "./Blockchain";

const SlideShow = () => {

    const [slideProgress, setSlideProgress] = useState(0);      //Existiert nur um DOM zu updaten
    const [slide, setSlide] = useState(0);
    const maxSlideProgressPerSlide = [0,3,5,0,2,3,5];
    const [slideState, setSlideState] = useState([0,0,0,0,0,0,0]);
    const [slideTransition, setSlideTransition] = useState("forwards");

    function downHandler({key}) {
        if (key === " " || key === "ArrowRight" || key === "ArrowDown") {
            if(slideState[slide] >= maxSlideProgressPerSlide[slide]) {
                if (slide < maxSlideProgressPerSlide.length - 1) {
                    setSlideTransition("slide-forwards");
                    setSlide(slide + 1);
                    setTimeout(function() { var scrollingElement = (document.scrollingElement || document.body); // Scroll to Top
                                            scrollingElement.scrollTop = 0;}, 50);
                }
            } else {
                let slideStateTMP = slideState;
                slideStateTMP[slide]++;
                setSlideState(slideStateTMP);
                setSlideProgress(slideProgress + 1);                //Existiert nur um DOM zu updaten
                setTimeout(function() { var scrollingElement = (document.scrollingElement || document.body); // Scroll to Bottom
                                        scrollingElement.scrollTop = scrollingElement.scrollHeight;}, 50);
            }
        }
        if (key === "Backspace" || key === "ArrowLeft" || key === "ArrowUp") {
            if(slideState[slide] <= 0) {
                if (slide > 0) {
                    setSlideTransition("slide-backwards");
                    setSlide(slide - 1);
                    setTimeout(function() { var scrollingElement = (document.scrollingElement || document.body); // Scroll to Bottom
                                            scrollingElement.scrollTop = scrollingElement.scrollHeight;}, 50);
                }
            } else {
                let slideStateTMP = slideState;
                slideStateTMP[slide]--;
                setSlideState(slideStateTMP);
                setSlideProgress(slideProgress - 1);                //Existiert nur um DOM zu updaten
                setTimeout(function() { var scrollingElement = (document.scrollingElement || document.body); // Scroll to Top
                                        scrollingElement.scrollTop = 0;}, 50);
            }
        }
        console.log(slideState);
    }

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
        }
    }); // Empty array ensures that effect is only run on mount and unmount

    return(
        <div id='slideContainer'>
            <CSSTransition
                in={slide === 1}
                timeout={700}
                classNames={slideTransition}
                mountOnEnter={true}
                unmountOnExit={true}>
                <Overview slideProgress={slideState[1]} />
            </CSSTransition>
            <CSSTransition
                in={slide === 2}
                timeout={700}
                classNames={slideTransition}
                mountOnEnter={true}
                unmountOnExit={true}>
                <DLT slideProgress={slideState[2]} />
            </CSSTransition>
            <CSSTransition
                in={slide === 3}
                timeout={700}
                classNames={slideTransition}
                mountOnEnter={true}
                unmountOnExit={true}>
                <Blockchain slideProgress={slideState[3]} />
            </CSSTransition>
            <CSSTransition
                in={slide === 4}
                timeout={700}
                classNames={slideTransition}
                mountOnEnter={true}
                unmountOnExit={true}>
                <Bitcoin slideProgress={slideState[4]} />
            </CSSTransition>
            <CSSTransition
                in={slide === 5}
                timeout={700}
                classNames={slideTransition}
                mountOnEnter={true}
                unmountOnExit={true}>
                <Konten slideProgress={slideState[5]} />
            </CSSTransition>
            <CSSTransition
                in={slide === 6}
                timeout={700}
                classNames={slideTransition}
                mountOnEnter={true}
                unmountOnExit={true}>
                <Transactions slideProgress={slideState[6]} />
            </CSSTransition>
        </div>
    )
}

export default SlideShow