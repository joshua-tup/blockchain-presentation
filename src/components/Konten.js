import { CSSTransition } from 'react-transition-group';
import tresorPNG from "../graphics/tresor.png";
import keyPNG from "../graphics/key.png";

const Konten = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <h1 className='display-1 margin'>Wie funktionieren Konten?</h1>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className={"row justify-content-center margin"}>
                    <div className={"col-7 my-box"}>
                        <h1 className='display-3'>Public-Key-Verfahren</h1>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 2}
                timeout={500}
                classNames="row-top"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row margin justify-content-center'>
                    <div className='col-10'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                                    <div className="arrow"/>
                                </div>
                                <div className='my-box'>
                                    <h1 className='display-5 margin'><b>Public-Key</b></h1>
                                    <h1 className='display-5 margin'>110010010100110100...</h1>
                                    <img src={tresorPNG} alt="tresor.png" height="120"/>
                                </div>
                            </div>
                            <CSSTransition
                                in={slideProgress >= 3}
                                timeout={500}
                                classNames="row-top"
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                <div className='col-6'>
                                    <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                                        <div className="arrow"/>
                                    </div>
                                    <div className='my-box'>
                                        <h1 className='display-5 margin'><b>Private-Key</b></h1>
                                        <h1 className='display-5 margin'>001011101001011001...</h1>
                                        <img src={keyPNG} alt="key.png" height="120"/>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Konten