import { CSSTransition } from 'react-transition-group';
import blockPNG from "../graphics/block.png";

const ProofOfWork = ({slideProgress}) => {
    return (
        <div id='container' className='container-flex'>
            <div className='row'>
                <CSSTransition
                    in={slideProgress >= 0}
                    timeout={500}
                    classNames="row-right"
                    mountOnEnter={true}
                    unmountOnExit={true}>
                    <div className='margin'>
                        <h1 className='display-1 margin'>Proof Of Work</h1>
                    </div>
                </CSSTransition>
                {/*<CSSTransition
                    in={slideProgress >= 0}
                    timeout={500}
                    classNames="row-left"
                    mountOnEnter={true}
                    unmountOnExit={true}>
                    <div className="col-6">
                        <div className="row margin">
                            <div className="vertical-center col-2">
                                <div className="icon">
                                    <div className="arrow"/>
                                </div>
                            </div>
                            <div className='col-10'>
                                <div className='my-box'>
                                    <h1 className='display-2'>
                                        Proof-Of-Work
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <CSSTransition
                            in={slideProgress >= 8}
                            timeout={500}
                            classNames="row-top"
                            mountOnEnter={true}
                            unmountOnExit={true}>
                            <div className="row margin">
                                <div className="col-12">
                                    <div className="icon" style={{transform: "rotate(90deg)", marginBottom: "30px"}}>
                                        <div className="arrow"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="my-box">
                                        <h1 className='display-7'>
                                            SHA-256(
                                            <img src={blockPNG} alt="block.png" height="80px" style={{margin: '0 25px 0 25px'}}/>
                                            + Nonce ) = Hash
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={slideProgress >= 9}
                            timeout={500}
                            classNames="row-top"
                            mountOnEnter={true}
                            unmountOnExit={true}>
                            <div className="row margin">
                                <div className="col-12">
                                    <div className="my-box">
                                        <h1 className='display-6'>
                                            SHA-256(
                                            <img src={blockPNG} alt="block.png" height="60px" style={{margin: '0 25px 0 25px'}}/>
                                            + 1d33c... ) = 7cc3b...
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={slideProgress >= 10}
                            timeout={500}
                            classNames="row-top"
                            mountOnEnter={true}
                            unmountOnExit={true}>
                            <div className="row margin">
                                <div className="col-12">
                                    <div className="my-box">
                                        <h1 className='display-6'>
                                            SHA-256(
                                            <img src={blockPNG} alt="block.png" height="60px" style={{margin: '0 25px 0 25px'}}/>
                                            + e51c3... ) = 51c74...
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={slideProgress >= 11}
                            timeout={500}
                            classNames="row-top"
                            mountOnEnter={true}
                            unmountOnExit={true}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="my-box">
                                        <h1 className='display-6'>
                                            SHA-256(
                                            <img src={blockPNG} alt="block.png" height="60px" style={{margin: '0 25px 0 25px'}}/>
                                            + c8e04... ) = 0000d...
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </CSSTransition>*/}
            </div>
        </div>
    )
}

export default ProofOfWork