import { CSSTransition } from 'react-transition-group';
import blockchainPNG from '../graphics/blockchain.png';
import tanglePNG from '../graphics/tangle.png';

const DLT = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <CSSTransition
                in={slideProgress >= 0}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <h1 className='display-1 margin'>Distributed-Ledger-Technology (DLT)</h1>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 1}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row margin justify-content-center'>
                    <div className='col-10'>
                        <div className='row'>
                            <div className='vertical-center col-2'>
                                <h1 className='display-6'><b>auf Deutsch:</b></h1>
                            </div>
                            <div className='col-8 my-box-small'>
                                <h1 className='display-5'>Technologie der verteilten Logbücher</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 2}
                timeout={500}
                classNames="row-right"
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='row margin justify-content-center'>
                    <div className='col-10'>
                        <div className='row'>
                            <div className='vertical-center col-2'>
                                <h1 className='display-6'><b>Definition:</b></h1>
                            </div>
                            <div className='col-8 my-box-small'>
                                <h1 className='display-6'>Technik zur dezentralen und redundanten Dokumentation von Transaktionen</h1>
                            </div>
                            <div style={{marginBottom: '10px'}}/>
                        </div>
                        <CSSTransition
                            in={slideProgress >= 3}
                            timeout={500}
                            classNames="row-top"
                            mountOnEnter={true}
                            unmountOnExit={true}>
                            <div className='row justify-content-center'>
                                <div className='col-8'>
                                    <div className="icon" style={{transform: "rotate(90deg) scale(.8)", marginBottom: "10px"}}>
                                        <div className="arrow"/>
                                    </div>
                                </div>
                                <div className='col-8 my-box-small'>
                                    <h1 className='display-6'>Dezentrales Verwaltungssystem</h1>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={slideProgress >= 4}
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
                                    <h1 className='display-6 margin'><b>Blockchain</b></h1>
                                    <img src={blockchainPNG} alt="blockchain.png" width="750px" />
                                </div>
                            </div>
                            <CSSTransition
                                in={slideProgress >= 5}
                                timeout={500}
                                classNames="row-top"
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                <div className='col-6'>
                                    <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                                        <div className="arrow"/>
                                    </div>
                                    <div className='my-box'>
                                        <h1 className='display-6 margin'><b>TDAG / blockDAG</b></h1>
                                        <img src={tanglePNG} alt="tangle.png" width="750px" />
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

export default DLT